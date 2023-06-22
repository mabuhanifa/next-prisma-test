"use client";

export default function Home() {
  const data = {
    title: "New Todo",
    isCompleted: false,
  };
  const createTodo = async () => {
    const res = await fetch("http://localhost:3000/api/todo", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(await res.json());
  };
  return (
    <main>
      <h1>Hello World</h1>
      <button onClick={createTodo}>Create</button>
    </main>
  );
}
