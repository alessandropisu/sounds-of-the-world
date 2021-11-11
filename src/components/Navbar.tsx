export function Navbar() {
  return (
    <div className="flex flex-row-reverse space-x-reverse space-x-12 px-4 py-2 text-white">
      <a
        href="https://github.com/alessandropisu"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center hover:text-white"
      >
        <i className="nes-icon github" />
        <p className="ml-3 text-xs sm:text-base">My GitHub</p>
      </a>
      <div className="flex items-center justify-center hover:text-white">
        <p className="mr-2 text-xs sm:text-base">Share on</p>
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=soundsoftheworld.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="mr-2"
        >
          <i className="nes-icon facebook" />
        </a>
        <a
          href="https://twitter.com/intent/tweet?url=soundsoftheworld.vercel.app&text="
          target="_blank"
          rel="noreferrer"
        >
          <i className="nes-icon twitter" />
        </a>
      </div>
    </div>
  );
}
