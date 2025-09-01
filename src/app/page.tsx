"use client";

import { useEffect, useState } from "react";

type Word = {
  id: number;
  text: string;
};

export default function HomePage() {
  const [words, setWords] = useState<Word[]>([]);
  const [newWord, setNewWord] = useState("");

  // fetch words from API
  useEffect(() => {
    fetch("/api/words")
      .then((res) => res.json())
      .then((data) => setWords(data));
  }, []);

  // add a new word
  async function addWord() {
    if (!newWord.trim()) return;

    const res = await fetch("/api/words", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: newWord }),
    });

    const created = await res.json();
    setWords((prev) => [...prev, created]);
    setNewWord("");
  }

  // delete a word
  async function deleteWord(id: number) {
    await fetch(`/api/words/${id}`, { method: "DELETE" });
    setWords((prev) => prev.filter((w) => w.id !== id));
  }

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Curse Word Keeper</h1>

      <div style={{ marginBottom: "1rem" }}>
        <input
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
          placeholder="Add a new curse word"
        />
        <button onClick={addWord}>Add</button>
      </div>

      <ul>
        {words.map((word) => (
          <li key={word.id}>
            {word.text}{" "}
            <button onClick={() => deleteWord(word.id)}>❌</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
