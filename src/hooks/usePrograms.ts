import { useState, useEffect } from "react";
import type { Program } from "@/data/programs";

const BACKEND_URL = "http://localhost:3001";

export function usePrograms() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/programs`)
      .then(res => res.json())
      .then(data => {
        setPrograms(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load programs");
        setLoading(false);
      });
  }, []);

  return { programs, loading, error };
}