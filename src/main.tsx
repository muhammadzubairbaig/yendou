import { createRoot } from 'react-dom/client'
import './index.css'
import * as React from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { App } from './app/index';
import { ChakraProvider } from '@chakra-ui/react';

const root = document.getElementById('root');
if (!root) throw new Error('No root element found');
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
