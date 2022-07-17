import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import IndexPage from '../pages/IndexPage';
import { trpc } from '../utils/trpc';


export function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      url: 'http://localhost:4000/trpc',
    }),
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <IndexPage />
      </QueryClientProvider>
    </trpc.Provider>
  );
}