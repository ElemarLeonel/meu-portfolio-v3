"use client";
import { useSearchParams } from "next/navigation";

export default function Messages() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const message = searchParams.get("message");
  return (
    <>
      {error && (
        <p className="p-4 mt-4 text-center bg-red-100 text-red-500">{error}</p>
      )}
      {message && (
        <p className="p-4 mt-4 text-center bg-orange-100 text-orange-700">
          {message}
        </p>
      )}
    </>
  );
}
