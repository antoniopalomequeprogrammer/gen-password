import Link from "next/link";

const Navigation = () => {
  return (
    <div className="flex h-16 items-center justify-between">
      <button className="text-slate-500  hover:bg-sky-500 hover:text-slate-100 rounded p-1 -ml-1 transition-colors
      focus:ring-2 focus:ring-slate-200
      ">
        <svg
        
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-10 h-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <ul className="">
        <button>
          <Link href="/">Sobre Mí</Link>
        </button>

        <button>
          <Link href="/about">Proyectos</Link>
        </button>

        <button>
          <Link href="/services">Skills</Link>
        </button>
      </ul>
    </div>
  );
};

export default Navigation;
