export default function Header({ isHome }) {
  return (
    <header
      className={`
        w-full z-50 transition-all duration-300
        ${isHome ? "absolute top-0 left-0 bg-transparent" : "bg-white shadow"}
      `}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className={`${isHome ? "text-white" : "text-black"} font-bold`}>
          Tour Guide
        </h1>

        <nav className="flex gap-6">
          <a className={isHome ? "text-white" : "text-black"}>Home</a>
          <a className={isHome ? "text-white" : "text-black"}>About</a>
          <a className={isHome ? "text-white" : "text-black"}>Packages</a>
        </nav>
      </div>
    </header>
  );
}