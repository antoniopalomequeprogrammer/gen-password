"use client";
import Link from "next/link";
import { useState } from "react";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const [btnActivo, setBtnActivo] = useState("/");
  return (
    <>
      <div className="flex h-16 items-center justify-between">
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="text-slate-500 md:hidden  hover:bg-sky-500 hover:text-slate-100 rounded p-1 -ml-1 transition-colors
      focus:ring-2 focus:ring-slate-200
      "
        >
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

        <div className="flex">
          <a className="text-green-600 hover:rotate-6 duration-200 md:hidden" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>
          </a>
        </div>
        <div className="ml-8 hidden space-x-8 md:flex">
          <button className="text-slate-600 px-3 py-2 hover:text-sky-500 transition-colors">
            <Link href="/">Sobre Mí</Link>
          </button>

          {/* <button disabled className="text-slate-600 px-3 py-2 hover:text-sky-500 transition-colors">
            <Link href="/blog">Proyectos</Link>
          </button> */}
        </div>
      </div>

      <div className={`space-y-1 pb-3 border-t pt-2 ${openMenu ? '' : 'hidden transition-opacity'} md:hidden`}>
        <Link href="/" onClick={() => setBtnActivo('/')} class={`block  rounded-md ${btnActivo == '/' ? 'bg-sky-500 text-white' : 'text-black'} px-3 py-2`}>
          Sobre Mí
        </Link>
        {/* <Link
          href="/blog"
          onClick={() => setBtnActivo('/blog')}
          class={`text-slate-700 hover:bg-sky-500 ${btnActivo == '/blog' ? 'bg-sky-500 text-white' : 'text-black'}  hover:text-white block px-3 py-2 rounded-md transition-colors`}
        >
          Proyectos
        </Link> */}
      </div>
    </>
  );
};

export default Navigation;
