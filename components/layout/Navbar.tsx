export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        <h1 className="text-xl font-bold text-rose-600">
          ❤️ Our Love Story
        </h1>

        <ul className="flex gap-8 text-gray-700 font-medium">
          <li className="cursor-pointer hover:text-rose-500 transition">
            Home
          </li>

          <li className="cursor-pointer hover:text-rose-500 transition">
            Gallery
          </li>

          <li className="cursor-pointer hover:text-rose-500 transition">
            Memories
          </li>

          <li className="cursor-pointer hover:text-rose-500 transition">
            Login
          </li>
        </ul>

      </nav>
    </header>
  );
}