import React, { useEffect, useRef, useState } from "react";
import type { NoiseGeneratorType } from "../../data/sounds";

type NoisePreviewProps = {
  generator: NoiseGeneratorType;
  label: string;
  accent: string;
  durationSeconds?: number;
  detail?: string;
  className?: string;
};

const BAR_COUNT = 12;

const SPECTRUM_WEIGHTS: Record<NoiseGeneratorType, number[]> = {
  white: [0.7, 0.72, 0.75, 0.78, 0.8, 0.82, 0.83, 0.84, 0.85, 0.84, 0.83, 0.82],
  pink: [0.95, 0.92, 0.88, 0.84, 0.8, 0.75, 0.68, 0.6, 0.55, 0.5, 0.45, 0.4],
  brown: [1, 0.97, 0.92, 0.86, 0.78, 0.68, 0.58, 0.48, 0.4, 0.32, 0.25, 0.2],
  blue: [0.25, 0.3, 0.38, 0.45, 0.52, 0.6, 0.7, 0.8, 0.9, 0.98, 1, 1],
  violet: [0.15, 0.2, 0.28, 0.36, 0.44, 0.56, 0.7, 0.82, 0.94, 1, 1, 1]
};

const GAIN_BY_TYPE: Record<NoiseGeneratorType, number> = {
  white: 0.16,
  pink: 0.18,
  brown: 0.22,
  blue: 0.11,
  violet: 0.08
};

export default function NoisePreview({
  generator,
  label,
  accent,
  durationSeconds = 12,
  detail,
  className = ""
}: NoisePreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [levels, setLevels] = useState(() => createIdleFrame(generator));
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<AudioBufferSourceNode | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const frequencyDataRef = useRef<Uint8Array<ArrayBuffer> | null>(null);
  const visualizerRef = useRef<number | null>(null);
  const endTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const audioWindow = window as Window & { webkitAudioContext?: typeof AudioContext };
    if (!window.AudioContext && !audioWindow.webkitAudioContext) {
      setIsSupported(false);
    }

    return () => {
      stopVisualizer(visualizerRef);
      if (endTimerRef.current !== null) {
        window.clearTimeout(endTimerRef.current);
        endTimerRef.current = null;
      }
      if (sourceRef.current) {
        try {
          sourceRef.current.stop();
        } catch {
          // The source may already be stopped by the browser.
        }
        sourceRef.current = null;
      }
      analyserRef.current = null;
      frequencyDataRef.current = null;
      if (audioContextRef.current) {
        void audioContextRef.current.close();
        audioContextRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    setLevels(createIdleFrame(generator));
  }, [generator]);

  async function togglePlayback() {
    if (!isSupported) {
      return;
    }

    if (isPlaying) {
      stopPlayback();
      return;
    }

    const context = await getAudioContext(audioContextRef);
    if (!context) {
      setIsSupported(false);
      return;
    }

    await context.resume();

    stopPlayback();

    const source = context.createBufferSource();
    source.buffer = buildNoiseBuffer(context, generator, durationSeconds);

    const gain = context.createGain();
    gain.gain.value = GAIN_BY_TYPE[generator];
    const analyser = context.createAnalyser();
    analyser.fftSize = 2048;
    analyser.smoothingTimeConstant = 0.82;

    source.connect(gain);
    gain.connect(analyser);
    analyser.connect(context.destination);

    sourceRef.current = source;
    analyserRef.current = analyser;
    frequencyDataRef.current = new Uint8Array(new ArrayBuffer(analyser.frequencyBinCount));
    source.start();
    setIsPlaying(true);
    startVisualizer(generator, setLevels, analyserRef, frequencyDataRef, visualizerRef);

    endTimerRef.current = window.setTimeout(() => {
      stopPlayback(false);
    }, durationSeconds * 1000 + 50);

    source.onended = () => {
      stopPlayback(false);
    };
  }

  function stopPlayback(stopSource = true) {
    stopVisualizer(visualizerRef);

    if (endTimerRef.current !== null) {
      window.clearTimeout(endTimerRef.current);
      endTimerRef.current = null;
    }

    if (stopSource && sourceRef.current) {
      try {
        sourceRef.current.stop();
      } catch {
        // The source may already be stopped by the browser.
      }
    }

    sourceRef.current = null;
    analyserRef.current = null;
    frequencyDataRef.current = null;
    setLevels(createIdleFrame(generator));
    setIsPlaying(false);
  }

  return (
    <div className={`rounded-3xl border border-base-100/15 bg-base-200/40 p-5 shadow-2xl backdrop-blur-md ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-display text-xs uppercase tracking-[0.2em] text-base-content/60">Generated preview</p>
          <h3 className="font-display mt-2 text-2xl text-base-content">{label}</h3>
        </div>
        <span
          className="rounded-full border px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-base-content/80"
          style={{ borderColor: accent }}>
          {durationSeconds}s in-browser render
        </span>
      </div>

      {detail ? <p className="font-body mt-4 text-sm leading-relaxed text-base-content/80">{detail}</p> : null}

      <div className="mt-5 rounded-2xl border border-base-100/10 bg-base-100/10 p-4">
        <div className="flex h-20 items-end gap-2">
          {levels.map((height, index) => (
            <span
              key={`${generator}-${index}`}
              className={`block flex-1 rounded-t-full transition-[height,opacity] duration-150 ${
                isPlaying ? "opacity-100" : "opacity-45"
              }`}
              style={{
                height: `${height}px`,
                background: `linear-gradient(180deg, ${accent}, rgba(255,255,255,0.9))`
              }}
            />
          ))}
        </div>
        <div className="mt-3 flex justify-between text-[0.68rem] uppercase tracking-[0.18em] text-base-content/50">
          <span>Low</span>
          <span>High</span>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <p className="font-body max-w-2xl text-sm text-base-content/70">
          {isSupported
            ? "Preview is generated in your browser so the label matches the actual spectral profile more closely than a stock ambient recording."
            : "Your browser does not expose Web Audio here, so generated previews are unavailable in this session."}
        </p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={togglePlayback}
          disabled={!isSupported}
          aria-pressed={isPlaying}>
          {isPlaying ? "Stop preview" : `Play ${label}`}
        </button>
      </div>
    </div>
  );
}

async function getAudioContext(audioContextRef: React.MutableRefObject<AudioContext | null>) {
  if (audioContextRef.current) {
    return audioContextRef.current;
  }

  const audioWindow = window as Window & { webkitAudioContext?: typeof AudioContext };
  const AudioContextCtor = window.AudioContext ?? audioWindow.webkitAudioContext;
  if (!AudioContextCtor) {
    return null;
  }

  audioContextRef.current = new AudioContextCtor();
  return audioContextRef.current;
}

function buildNoiseBuffer(context: AudioContext, generator: NoiseGeneratorType, durationSeconds: number) {
  const frameCount = Math.floor(context.sampleRate * durationSeconds);
  const buffer = context.createBuffer(1, frameCount, context.sampleRate);
  const channel = buffer.getChannelData(0);

  switch (generator) {
    case "white":
      fillWhite(channel);
      break;
    case "pink":
      fillPink(channel);
      break;
    case "brown":
      fillBrown(channel);
      break;
    case "blue":
      fillBlue(channel);
      break;
    case "violet":
      fillViolet(channel);
      break;
  }

  normalize(channel, 0.85);
  fadeEdges(channel, context.sampleRate);

  return buffer;
}

function fillWhite(channel: Float32Array) {
  for (let index = 0; index < channel.length; index += 1) {
    channel[index] = Math.random() * 2 - 1;
  }
}

function fillPink(channel: Float32Array) {
  let b0 = 0;
  let b1 = 0;
  let b2 = 0;
  let b3 = 0;
  let b4 = 0;
  let b5 = 0;
  let b6 = 0;

  for (let index = 0; index < channel.length; index += 1) {
    const white = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + white * 0.0555179;
    b1 = 0.99332 * b1 + white * 0.0750759;
    b2 = 0.969 * b2 + white * 0.153852;
    b3 = 0.8665 * b3 + white * 0.3104856;
    b4 = 0.55 * b4 + white * 0.5329522;
    b5 = -0.7616 * b5 - white * 0.016898;
    channel[index] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
    channel[index] *= 0.11;
    b6 = white * 0.115926;
  }
}

function fillBrown(channel: Float32Array) {
  let lastOut = 0;

  for (let index = 0; index < channel.length; index += 1) {
    const white = Math.random() * 2 - 1;
    lastOut = (lastOut + 0.02 * white) / 1.02;
    channel[index] = lastOut * 3.5;
  }
}

function fillBlue(channel: Float32Array) {
  let previous = 0;

  for (let index = 0; index < channel.length; index += 1) {
    const white = Math.random() * 2 - 1;
    channel[index] = (white - previous) * 1.8;
    previous = white;
  }
}

function fillViolet(channel: Float32Array) {
  let previous = 0;
  let previousDifference = 0;

  for (let index = 0; index < channel.length; index += 1) {
    const white = Math.random() * 2 - 1;
    const difference = white - previous;
    channel[index] = (difference - previousDifference) * 2.2;
    previous = white;
    previousDifference = difference;
  }
}

function normalize(channel: Float32Array, targetPeak: number) {
  let peak = 0;

  for (let index = 0; index < channel.length; index += 1) {
    peak = Math.max(peak, Math.abs(channel[index]));
  }

  if (!peak) {
    return;
  }

  const scale = targetPeak / peak;
  for (let index = 0; index < channel.length; index += 1) {
    channel[index] *= scale;
  }
}

function fadeEdges(channel: Float32Array, sampleRate: number) {
  const fadeLength = Math.min(Math.floor(sampleRate * 0.03), Math.floor(channel.length / 2));
  if (fadeLength <= 0) {
    return;
  }

  for (let index = 0; index < fadeLength; index += 1) {
    const gain = index / fadeLength;
    channel[index] *= gain;
    channel[channel.length - 1 - index] *= gain;
  }
}

function startVisualizer(
  generator: NoiseGeneratorType,
  setLevels: React.Dispatch<React.SetStateAction<number[]>>,
  analyserRef: React.MutableRefObject<AnalyserNode | null>,
  frequencyDataRef: React.MutableRefObject<Uint8Array<ArrayBuffer> | null>,
  visualizerRef: React.MutableRefObject<number | null>
) {
  const analyser = analyserRef.current;
  const frequencyData = frequencyDataRef.current;
  if (!analyser || !frequencyData) {
    setLevels(createIdleFrame(generator));
    return;
  }

  const renderFrame = () => {
    analyser.getByteFrequencyData(frequencyData);
    setLevels(createReactiveFrame(generator, frequencyData));
    visualizerRef.current = window.requestAnimationFrame(renderFrame);
  };

  renderFrame();
}

function stopVisualizer(visualizerRef: React.MutableRefObject<number | null>) {
  if (visualizerRef.current !== null) {
    window.cancelAnimationFrame(visualizerRef.current);
    visualizerRef.current = null;
  }
}

function createIdleFrame(generator: NoiseGeneratorType) {
  const weights = SPECTRUM_WEIGHTS[generator];

  return Array.from({ length: BAR_COUNT }, (_, index) => {
    const weight = weights[index] ?? 0.6;
    return Math.round(18 + weight * 40);
  });
}

function createReactiveFrame(generator: NoiseGeneratorType, frequencyData: ArrayLike<number>) {
  const weights = SPECTRUM_WEIGHTS[generator];
  const binCount = frequencyData.length;

  return Array.from({ length: BAR_COUNT }, (_, index) => {
    const start = Math.floor((index / BAR_COUNT) ** 1.65 * binCount);
    const end = Math.max(start + 1, Math.floor(((index + 1) / BAR_COUNT) ** 1.65 * binCount));
    let total = 0;

    for (let binIndex = start; binIndex < end; binIndex += 1) {
      total += frequencyData[binIndex] ?? 0;
    }

    const average = total / (end - start);
    const normalized = average / 255;
    const weighted = normalized * (0.7 + (weights[index] ?? 0.6) * 0.55);

    return Math.round(16 + weighted * 56);
  });
}
