export default function Navbar() {
  const buttonStyles = `
    px-7
    py-3
    rounded-full
    text-white
    text-[25px]
    font-medium
    tracking-wide

    transition-all
    duration-300

    hover:bg-white/20
    hover:text-white
    hover:scale-105

    active:scale-95
  `;

  return (
    <div className="absolute top-8 left-1/2 z-50 w-full -translate-x-1/2 flex justify-center">
      <nav
        className="
          flex
          items-center
          gap-2

          rounded-full

          border
          border-white/20

          bg-white/10

          backdrop-blur-xl

          shadow-[0_8px_32px_rgba(0,0,0,0.25)]

          px-3
          py-2
        "
      >
        <button className={buttonStyles}>Home</button>

        <button className={buttonStyles}>About</button>

        <button className={buttonStyles}>Destinations</button>

        <button className={buttonStyles}>Packages</button>

        <button className={buttonStyles}>Contact</button>
      </nav>
    </div>
  );
}