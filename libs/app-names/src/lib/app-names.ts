const litly = 'litly';
const galateatv = 'galateatv';

export const appNames = [litly, galateatv] as const;

export type AppName = (typeof appNames)[number];

export const appTrpcEndpoints: Record<AppName, string> = {
  litly: `/trpc/${litly}`,
  galateatv: `/trpc/${galateatv}`,
};
