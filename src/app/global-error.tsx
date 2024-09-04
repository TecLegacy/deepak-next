'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <main className='flex justify-center items-center flex-col gap-6'>
          <h1 className='text-3xl font-semibold'>Something went wrong!</h1>
          <p className='text-lg'>{error.message}</p>

          <button
            className='inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg'
            onClick={reset}
          >
            Try again
          </button>

          <h1>Contact support at test@test.com</h1>
        </main>
      </body>
    </html>
  );
}
