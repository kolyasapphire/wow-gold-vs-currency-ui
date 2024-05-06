"use client"; // Error components must be Client Components

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

const ErrorPage = ({ reset }: Props) => (
  <div className="flex flex-col items-center justify-center p-5 m-5 bg-red-500 rounded-lg">
    <h2 className="pb-3">Couldn't load the data :(</h2>
    {/** biome-ignore lint: button is fine */}
    <button
      className="px-2 py-1 border-2 rounded-md"
      onClick={
        // Attempt to recover by trying to re-render the segment
        () => reset()
      }
    >
      Try Again
    </button>
  </div>
);

export default ErrorPage;
