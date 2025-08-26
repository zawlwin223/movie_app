'use client'
import { Provider } from 'react-redux'
import { store } from '../app/store'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ProviderWrapper({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NextThemesProvider {...props}>{children}</NextThemesProvider>
      </Provider>
    </QueryClientProvider>
  )
}

// 'use client'

// export function ThemeProvider({
//   children,
//   ...props
// }: React.ComponentProps<typeof NextThemesProvider>) {
//   return
// }
