export function Footer() {
	const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full xl:w-80 bg-primary text-white flex justify-center items-center">
      <div className="flex flex-col items-center justify-center px-6 py-4 xl:h-screen">
        <p className="text-sm">&copy; {currentYear} Guilherme Evangelista.</p>
        <p className="text-sm">Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
