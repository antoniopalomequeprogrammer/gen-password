import React from "react";

const Card = () => {
  return (
    <article className="rounded bg-white shadow overflow-hidden cursor-pointer">
        <div className="h-72">
          <img
            className="h-full w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1534665482403-a909d0d97c67?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="about"
          />
        </div>
        <div className="space-y-3 p-5 flex-1">
          <h3 className="text-sm font-semibold text-green-600">Laravel</h3>
          <h2 className="text-xl font-semibold text-slate-800 leading-tight">
            Desarrollo de una API con Laravel siguiendo la especificación
            JSON:API
          </h2>
          <p className="text-slate-500 hidden md:block">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem,
            minima necessitatibus. Eveniet, maxime iste cum error unde pariatur,
            iure velit deleniti iusto ipsum ad illum aut, excepturi nisi
            delectus obcaecati.
          </p>
        </div>
        <div className="flex p-5 space-x-2">
          <img
            className="w-10 h-10 rounded-full"
            src="https://ui-avatars.com/api/?name=Antonio+Palomeque"
            alt="logo autor"
          />
    
          <div className="flex flex-col justify-center">
      
          <span className="text-sm font-semibold text-slate-600 leading-4">
            Antonio Palomeque
          </span>
          <span className="text-sm text-slate-500">
            Domingo 10 de Marzo de 2024
          </span>
          </div>
        </div>
      
      </article>
  );
};

export default Card;
