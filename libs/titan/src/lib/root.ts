import { exampleRouter } from './routers/example';
import { createTRPCRouter } from './trpc';
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Inference helpers for input types
 **/
export type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helpers for output types
 **/
export type RouterOutputs = inferRouterOutputs<AppRouter>;
