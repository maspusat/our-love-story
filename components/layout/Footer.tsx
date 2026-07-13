export default function Footer() {
  return (
    <footer className="border-t border-rose-200 bg-white py-8">
      <div className="mx-auto max-w-7xl text-center text-gray-500">
        <p>Made with ❤️ by Atalarik for Rina Eka</p>

        <p className="mt-2 text-sm">
          © {new Date().getFullYear()} Our Love Story
        </p>
      </div>
    </footer>
  );
}