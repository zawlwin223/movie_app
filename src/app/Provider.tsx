'use client'
import { Provider } from 'react-redux'
import { store } from '../app/store'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export function ProviderWrapper({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>{children}</Provider>
    </QueryClientProvider>
  )
}
