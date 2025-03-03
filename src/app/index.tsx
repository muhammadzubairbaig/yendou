import { AppProvider } from './provider';  // Provider that wraps all context providers
import { AppRouter } from './router';      // Router configuration for the app

/**
 * Main App component that wraps the application with context and UI providers
 */
export const App = () => (
  <AppProvider>
    <AppRouter />
  </AppProvider>
);

export default App;
