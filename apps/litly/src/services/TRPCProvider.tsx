import { PropsWithChildren, useState } from 'react';
import { titan, getBaseUrl } from './api';
import superjson from 'superjson';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { appTrpcEndpoints } from '@org/app-names';

/**
 * A wrapper for your app that provides the TRPC context.
 * Use only in _app.tsx
 */
export const TRPCProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    titan.createClient({
      transformer: superjson,
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}${appTrpcEndpoints.litly}`,
          headers() {
            const headers = new Map<string, string>();
            headers.set('x-trpc-source', 'expo-react');
            return Object.fromEntries(headers);
          },
        }),
      ],
    })
  );

  return (
    <titan.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </titan.Provider>
  );
};
