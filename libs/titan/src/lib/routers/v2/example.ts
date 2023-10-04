import { z } from 'zod';

import { createTRPCRouter, publicProcedureV2 } from '../../trpc';

export const exampleRouterV2 = createTRPCRouter({
  hello: publicProcedureV2
    .input(z.object({ name: z.string() }))
    .query(({ ctx, input }) => {
      return {
        appName: ctx.appName,
        greeting: `Hello ${input.name} from V2`,
      };
    }),
});
