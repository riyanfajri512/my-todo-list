'use client';

import { useState } from 'react';

// ini untuk mendefinisikan struktur data Todo dengan TypeScript
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Nama komponen sebaiknya dimulai dengan huruf kapital, misal: Home
export default function Home() {
  // --- SEMUA LOGIC HARUS DI DALAM SINI ---

  // 1. membuat state untuk menyimpan daftar todo 
  // PERBAIKAN: Menggunakan [] bukan {} untuk useState
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Belajar React & TypeScript', completed: false }
  ]);

  // 2. buat fungsi state untuk menambahkan perubahan todo dari input field
  // PERBAIKAN: Pindahkan ke dalam komponen
  const [input, setInput] = useState<string>('');

  // 3. fungsi untuk menangani penambahan todo baru
  // PERBAIKAN: Pindahkan ke dalam komponen
  const handeladdTodo = () => {
    if (input.trim() !== '') {
      // logika penambahan todo akan di isi disini 
      console.log('Menambahkan To-do baru:', input);
      setInput(''); // mengosongkan input setelah penambahan
    } else {
      console.log('Input tidak boleh kosong');
    }
  };

  // 4. Pernyataan return juga harus ada di dalam komponen
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gray-900 text-white">
      {/* PERBAIKAN: Menghapus 'justify-between' dan 'item-center' menjadi 'items-center' */}
      <div className="w-full max-w-md">
        {/* PERBAIKAN: Typo text-4xL menjadi text-4xl */}
        <h1 className="text-4xl font-bold mb-6 text-center">To-do List</h1>

        {/* Input field untuk menambahkan todo baru */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Apa Kegiatan Mu Hari Ini ?'
            // PERBAIKAN: menghapus flex-1 karena flex-grow sudah cukup
            className='flex-grow p-2 rounded bg-gray-800 text-white border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <button
            onClick={handeladdTodo}
            className='bg-blue-600 hover:bg-blue-700 p-2 px-4 rounded text-white font-semibold'>
            Tambah
          </button>
        </div>

        {/* Daftar todo */}
        <div className='space-y-2'>
          {/* Variabel 'todos' sekarang bisa diakses karena berada dalam scope yang sama */}
          {todos.map(todo => (
            // PERBAIKAN: typo items-center dan bg-gray-800
            <div key={todo.id} className='flex items-center justify-between bg-gray-800 p-3 rounded'>
              {/* PERBAIKAN: typo todo.cpompleted menjadi todo.completed */}
              <span className={todo.completed ? 'line-through text-gray-500' : ''}>
                {todo.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}