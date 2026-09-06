"use client";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div className="p-6">
            <h2>Dashboard failed to load.</h2>
            <button onClick={reset}>Try again</button>
        </div>
    );
}
