// src/components/Header.tsx
import { useState } from 'react';

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="bg-[#F92828] text-white p-4 shadow-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <img
          src="src/assets/logo-removebg-preview.png"
          alt="TaLimpo Logo"
          className="w-[100px] left-5"
        />

        {/* Botão hambúrguer no mobile */}
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Abrir menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {menuAberto ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6 text-xl">
          <a href="/" className="hover:text-white">Início</a>
          <a href="#about" className="hover:text-white">Sobre</a>
          <a href="/contato" className="hover:text-white">Contato</a>
          <a href="/produtos" className="hover:text-white">Catálogo</a>
        </nav>
      </div>

      {/* Menu mobile */}
      {menuAberto && (
        <nav className="md:hidden mt-4 flex flex-col items-center space-y-2 text-lg text-white">
          <a href="/" className="hover:text-[#102e41]" onClick={() => setMenuAberto(false)}>Início</a>
          <a href="#about" className="hover:text-[#102e41]" onClick={() => setMenuAberto(false)}>Sobre</a>
          <a href="/contato" className="hover:text-[#102e41]" onClick={() => setMenuAberto(false)}>Contato</a>
          <a href="/produtos" className="hover:text-[#102e41]" onClick={() => setMenuAberto(false)}>Catálogo</a>
        </nav>
      )}
    </header>
  );
}
