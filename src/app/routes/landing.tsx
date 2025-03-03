// Importing necessary assets and components
import { ContentSection, AnalyticsDisplay } from "@/components/layouts";  // Importing the Counter component for analytics

// MainPage Component: The primary landing page of the application
const MainPage = () => {
  return (
    <div className="flex items-center min-h-screen bg-white">
      {/* Container for the entire content, with padding and max-width constraints */}
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Grid layout for text and image, responsive to screen size */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Left Section - Text Content */}
          <ContentSection />

          {/* Right Section - Analytics Display */}
          <AnalyticsDisplay />

        </div>
      </div>
    </div>
  );
};

export default MainPage;
