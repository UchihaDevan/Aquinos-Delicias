import { Facebook, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F92828] text-white py-4">
      <div className="container mx-auto text-center my-6">
        <p>&copy; 2025 TaLimpo. Todos os direitos reservados.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.instagram.com/aquinosdelicias/" target="_blank"><Instagram className="size-9 hover:scale-110" /></a>
          <a href="https://www.facebook.com/p/aquinosdelicias" target="_blank"><Facebook className="size-9 hover:scale-110"/></a>
          <a href="mailto:aquinosdelicias@gmail.com" target="_blank"><Mail className="size-9 hover:scale-110"/></a>
          <p></p>
        </div>
      </div>
    </footer>
  );
}