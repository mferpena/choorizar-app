import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-4xl font-semibold text-gray-800">404</h1>
        <p className="mt-4 text-lg text-gray-600">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          You might want to go back to the{" "}
          <Link to={"/"} className="text-blue-600 hover:underline">
            home page
          </Link>
        </p>
      </div>
    </div>
  );
}

export default NotFoundPage;
