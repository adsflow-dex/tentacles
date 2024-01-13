import { useEffect, useRef } from 'react';

interface IconOptions {
  seed?: string;
  size?: number;
  scale?: number;
  color?: string;
  bgcolor?: string;
  spotcolor?: string;
}

const randseed: number[] = new Array(4);

function seedrand(seed: string): void {
  randseed.fill(0);

  for (let i = 0; i < seed.length; i++) {
    randseed[i % 4] =
      (randseed[i % 4] << 5) - randseed[i % 4] + seed.charCodeAt(i);
  }
}

function rand(): number {
  const t = randseed[0] ^ (randseed[0] << 11);

  randseed[0] = randseed[1];
  randseed[1] = randseed[2];
  randseed[2] = randseed[3];
  randseed[3] = randseed[3] ^ (randseed[3] >> 19) ^ t ^ (t >> 8);

  return (randseed[3] >>> 0) / ((1 << 31) >>> 0);
}

function createColor(): string {
  const h = Math.floor(rand() * 360);
  const s = rand() * 60 + 40 + '%';
  const l = (rand() + rand() + rand() + rand()) * 25 + '%';

  return 'hsl(' + h + ',' + s + ',' + l + ')';
}

function createImageData(size: number): number[] {
  const width = size;
  const height = size;

  const dataWidth = Math.ceil(width / 2);
  const mirrorWidth = width - dataWidth;

  const data: number[] = [];
  for (let y = 0; y < height; y++) {
    let row: number[] = [];
    for (let x = 0; x < dataWidth; x++) {
      row[x] = Math.floor(rand() * 2.3);
    }
    const r = row.slice(0, mirrorWidth);
    r.reverse();
    row = row.concat(r);

    for (let i = 0; i < row.length; i++) {
      data.push(row[i]);
    }
  }

  return data;
}

function buildOpts(opts: IconOptions): IconOptions {
  const newOpts: IconOptions = {};

  newOpts.seed =
    opts.seed || Math.floor(Math.random() * Math.pow(10, 16)).toString(16);

  seedrand(newOpts.seed);

  newOpts.size = opts.size || 8;
  newOpts.scale = opts.scale || 4;
  newOpts.color = opts.color || createColor();
  newOpts.bgcolor = opts.bgcolor || createColor();
  newOpts.spotcolor = opts.spotcolor || createColor();

  return newOpts;
}

export function renderIcon(
  opts: IconOptions,
  canvas: HTMLCanvasElement
): HTMLCanvasElement {
  opts = buildOpts(opts || {});
  const imageData = createImageData(opts.size || 8);
  const width = Math.sqrt(imageData.length);

  canvas.width = canvas.height = (opts.size || 8) * (opts.scale || 4);

  const cc = canvas.getContext('2d')!;
  cc.fillStyle = opts.bgcolor || '';
  cc.fillRect(0, 0, canvas.width, canvas.height);
  cc.fillStyle = opts.color || '';

  for (let i = 0; i < imageData.length; i++) {
    if (imageData[i]) {
      const row = Math.floor(i / width);
      const col = i % width;

      cc.fillStyle =
        imageData[i] == 1 ? opts.color || '' : opts.spotcolor || '';

      cc.fillRect(
        col * (opts.scale || 4),
        row * (opts.scale || 4),
        opts.scale || 4,
        opts.scale || 4
      );
    }
  }

  return canvas;
}

export function createIcon(opts: IconOptions): HTMLCanvasElement {
  const canvas = document.createElement('canvas');

  renderIcon(opts, canvas);

  return canvas;
}

interface AvatarProps {
  options: IconOptions;
}

export const WalletAvatar: React.FC<AvatarProps> = ({ options }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      renderIcon(options, canvasRef.current);
    }
  }, [options]);

  return (
    <>
      <canvas ref={canvasRef} />
    </>
  );
};
