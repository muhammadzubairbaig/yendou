// Importing necessary components and paths configuration
import { Link } from '@/components/ui/link';  // Custom Link component
import { paths } from '@/config/paths';  // Paths configuration for routing

/**
 * NotFoundRoute Component - This component is displayed when a user tries to access a non-existent page.
 * It includes a 404 error message and a link to return to the homepage.
 */
const NotFoundRoute = () => {
  return (
    <div className="mt-52 flex flex-col items-center justify-center text-center font-semibold">
      {/* Heading for 404 error */}
      <h1 className="text-4xl font-extrabold text-gray-800">404 - Not Found</h1>

      {/* Message for the user */}
      <p className="mt-4 text-lg text-gray-600">
        Sorry, the page you're looking for does not exist.
      </p>

      {/* Link to navigate back to home page */}
      <Link
        to={paths.home.getHref()}
        replace
        className="mt-6 text-blue-600 hover:underline"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundRoute;
