import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { CounterProvider } from "@/context/CounterContext";
import { MainErrorFallback } from '@/components/errors/main';
import { Spinner } from '@/components/ui/spinner';

/**
 * AppProvider component to wrap children with necessary context providers and error boundaries
 */
type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => (
  <React.Suspense fallback={<LoadingSpinner />}>
    <ErrorBoundary FallbackComponent={MainErrorFallback}>
      <CounterProvider>
        <HelmetProvider>
          {children}
        </HelmetProvider>
      </CounterProvider>
    </ErrorBoundary>
  </React.Suspense>
);

const LoadingSpinner = () => (
  <div className="flex h-screen w-screen items-center justify-center">
    <Spinner size="xl" />
  </div>
);
