import { v1Router, v2Router } from './routers/versions';
import { createTRPCRouter } from './trpc';
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  v1: v1Router,
  v2: v2Router,
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
