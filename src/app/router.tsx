import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import { paths } from '@/config/paths';

// Define a type for the dynamic module (m) structure
interface RouteModule {
  clientLoader?: (queryClient: QueryClient) => any; // Type for the loader function
  clientAction?: (queryClient: QueryClient) => any; // Type for the action function
  default: React.ComponentType<any>; // The main React component for the route
  [key: string]: any; // Allow other properties
}

// A utility function to convert dynamic route configuration into a format compatible with React Router
const convert = (queryClient: QueryClient) => (m: RouteModule) => {
  const { clientLoader, clientAction, default: Component, ...rest } = m;

  return {
    ...rest,
    loader: clientLoader?.(queryClient),  // Attach the loader function for fetching data
    action: clientAction?.(queryClient),  // Attach the action function for handling mutations
    Component,  // Assign the main component for the route
  };
};

// Function to create the app router, which sets up routes dynamically with React Query
export const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    // Define the landing page route (home path)
    {
      path: paths.home.path,
      lazy: () => import('./routes/landing').then(convert(queryClient)), // Lazy load the landing page component with data fetching
    },
    // Catch-all route for undefined paths (404 page)
    {
      path: '*',
      lazy: () => import('./routes/not-found').then(convert(queryClient)),  // Lazy load the Not Found page
    },
  ]);

// Main component that renders the RouterProvider with the created app router
export const AppRouter = () => {
  const queryClient = useQueryClient();  // Get the React Query client instance

  // Memoize the router to optimize performance and prevent unnecessary re-creations
  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

  // Render the RouterProvider with the generated router
  return <RouterProvider router={router} />;
};
