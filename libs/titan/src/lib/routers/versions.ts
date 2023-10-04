import { createTRPCRouter } from '../trpc';
import { exampleRouterV1 } from './v1';
import { exampleRouterV2 } from './v2';

export const v1Router = createTRPCRouter({
  example: exampleRouterV1,
});

export const v2Router = createTRPCRouter({
  example: exampleRouterV2,
});
