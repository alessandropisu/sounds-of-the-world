export function Navbar() {
  return (
    <div className="flex flex-row-reverse space-x-reverse space-x-10 px-4 py-2 text-white">
      <a
        href="https://github.com/alessandropisu"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center hover:text-white"
      >
        <i className="nes-icon github" />
        <p className="ml-3 text-xs sm:text-base">My GitHub</p>
      </a>
      <a
        href="https://www.buymeacoffee.com/lofi.station"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center hover:text-white"
      >
        <i className="nes-icon coin" />
        <p className="ml-3 text-xs sm:text-base">Donate an espresso</p>
      </a>
    </div>
  );
}
