import { z } from 'zod';

import { createTRPCRouter, publicProcedureV1 } from '../../trpc';

export const exampleRouterV1 = createTRPCRouter({
  hello: publicProcedureV1
    .input(z.object({ name: z.string() }))
    .query(({ ctx, input }) => {
      return {
        appName: ctx.appName,
        greeting: `Hello ${input.name} from V1`,
      };
    }),
});
