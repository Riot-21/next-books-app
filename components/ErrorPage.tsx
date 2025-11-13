interface ErrorProps{
    error: string;
}

export const ErrorPage = ({error}: ErrorProps) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
      <svg
        className="mx-auto h-12 w-12 text-red-500 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h3 className="text-lg font-semibold text-red-800 mb-2">
        Error al cargar los libros
      </h3>
      <p className="text-red-600">{error}</p>
    </div>
  );
};
