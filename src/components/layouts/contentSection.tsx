import logo from '@/assets/landing.png';  // Importing the logo image

/**
 * ContentSection Component - Renders the text and logo on the left side of the landing page.
 * This component contains the heading, description, and the logo.
 */
export const ContentSection = () => {
  return (
    <div className="text-left">
      {/* Logo Image */}
      <img className="h-8 mb-4" src={logo} alt="Workflow" />

      {/* Main Heading */}
      <h1>
        <span className="text-red-500">The Smartest Way</span> to Engage Sites
      </h1>

      {/* Description Paragraph */}
      <p className="mt-4">
        What if site engagement could drive performance? Yendou transforms engagement into insights—fueling Pharma, Biotech, and CROs with data to scale clinical pipelines at record speed.
      </p>
    </div>
  );
};