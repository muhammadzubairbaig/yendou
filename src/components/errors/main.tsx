import { Button } from '../ui/button';

export const MainErrorFallback = () => {
  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center text-red-500"
      role="alert"
      aria-live="assertive" // Live region for screen readers
    >
      <h1 className="text-2xl font-semibold">Something Went Wrong</h1>
      <p className="mt-2 text-center">
        We encountered an error while loading the page. Please try refreshing.
      </p>
      <Button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
        aria-label="Refresh the page" // Accessible description for screen readers
      >
        Refresh
      </Button>
    </div>
  );
};
