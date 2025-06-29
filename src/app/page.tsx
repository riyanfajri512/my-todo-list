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

  const [input, setInput] = useState<string>('');

  // 3. fungsi untuk menangani penambahan todo baru

  const handeladdTodo = () => {
    if (input.trim() !== '') { //Memerikas input apakah kosong atau tidak
      // 1. Buat sebuah objek to-do yang baru
      const newTodo = {
        id: Date.now(), // Kita pakai waktu saat ini sebagai ID unik
        text: input,      // Teksnya diambil dari state 'input'
        completed: false  // Tugas baru pasti belum selesai
      };
      setTodos([...todos, newTodo]);
      // 3. Kosongkan kembali kolom input
      setInput('');
    }
  };

  const handeleToggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      //pengecelkan apakah id todo cocok ketika ubah status completed
      todo.id === id ? { ...todo,  completed: !todo.completed } : todo
    ))
  }

  const handleDeleteTodo = (id: number) => {
    // .filter akan membuat arry baru yang isinya item yang lolos dari kondisi yang di berikan
    // saringan ini bertujuan agar semua simpanan todo yang id-nya tidak sama yang Tidak sama dengan id yang mau di hapus
    setTodos(todos.filter(todo => todo.id !== id));
  }

  // 4. Pernyataan return juga harus ada di dalam komponen
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gray-900 text-white">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold mb-6 text-center">To-do List</h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Apa Kegiatan Mu Hari Ini ?'

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
          {todos.map(todo => (
            <div key={todo.id} className='flex items-center justify-between bg-gray-800 p-3 rounded'>
              <span className={todo.completed ? 'line-through text-gray-500' : ''}
              onClick={() => handeleToggleTodo(todo.id)}
              >
                {todo.text}
              </span>
            {/* tombol Hapus Pada Todo */}
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className='bg-red-600 hover:bg-red-700 text-white p-2 rounded'
                >
                Hapus
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}