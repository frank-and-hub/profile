'use client';
import { MantineProvider } from '@mantine/core';

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
                <MantineProvider>
                    <div className="min-h-screen flex items-center justify-center">
                        <div className="text-center">
                            <h2>Something went wrong!</h2>
                            <button onClick={() => reset()}>Try again</button>
                        </div>
                    </div>
                </MantineProvider>
            </body>
        </html>
    );
}