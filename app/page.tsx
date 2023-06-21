"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/hello");
      const data = await res.json();
      console.log(data);
    };
    fetchData();
  }, []);
  return <main></main>;
}
