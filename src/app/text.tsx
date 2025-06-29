'use client';

import { useState } from 'react';

// 1. Mendefinisikan struktur atau "bentuk" dari sebuah tugas
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function Home() {
  // 2. State untuk mengingat teks yang sedang diketik di input field
  const [input, setInput] = useState<string>('');
  
  // 3. State untuk menyimpan semua daftar tugas kita
  //    Kita mulai dengan satu contoh tugas di dalamnya
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Belajar React & TypeScript', completed: false }
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gray-900 text-white">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold mb-6 text-center">My To-Do List</h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Apa yang ingin Anda lakukan?"
            className="flex-grow p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            // 4. Hubungkan nilai input dengan state 'input'
            value={input}
            // 5. Setiap kali ada ketikan, update state 'input'
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 p-2 px-4 rounded font-semibold"
          >
            Tambah
          </button>
        </div>

        <div className="space-y-2">
          {/* 6. Tampilkan daftar tugas dari state 'todos' */}
          {todos.map(todo => (
            <div key={todo.id} className="flex items-center justify-between bg-gray-800 p-3 rounded">
              <span>{todo.text}</span>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}