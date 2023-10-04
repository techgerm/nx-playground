/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter, createTRPCContext } from '@org/titan';
import cors from 'cors';
import { appTrpcEndpoints } from '@org/app-names';

const app = express();

app.use(cors());

app.use(
  appTrpcEndpoints.galateatv,
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: (opts) =>
      createTRPCContext(opts, {
        appName: 'galateatv',
        endpoint: appTrpcEndpoints.galateatv,
      }),
  })
);

app.use(
  appTrpcEndpoints.litly,
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: (opts) =>
      createTRPCContext(opts, {
        appName: 'litly',
        endpoint: appTrpcEndpoints.litly,
      }),
  })
);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
