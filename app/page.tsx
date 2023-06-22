"use client";

export default function Home() {
  const createTodo = async () => {
    const res = await fetch("/api/todo", {
      method: "POST",
      body: JSON.stringify({
        title: "New Todo",
        completed: false,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <main>
      <h1>Hello World</h1>
      <button onClick={createTodo}>Create</button>
    </main>
  );
}
