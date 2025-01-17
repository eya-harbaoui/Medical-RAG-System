import React, { useState } from "react";

type Props = {
  indexName: string;
  namespace: string;
};

const useUpload = (props: Props) => {
  const { indexName, namespace } = props;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const upload = async () => {
    setLoading(true);
    setError(null); // Clear previous errors
    setSuccess(false); // Reset success state

    try {
      const response = await fetch("/api/updateDatabase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ indexName, namespace }),
      });

      if (!response.ok) {
        throw new Error("Failed to update the database");
      }

      setSuccess(true); // Set success when the request is successful
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return {
    loading,
    error,
    success,
    upload,
  };
};

export default useUpload;
