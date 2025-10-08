"use client";

import {
  Home,
  Bookmark,
  Clock,
  Users,
  PartyPopper,
  Settings,
  LogOut,
} from "lucide-react";

export default function NetflixUI() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar izquierda */}
      <aside className="hidden md:flex flex-col w-64 p-6 bg-gray-100 dark:bg-gray-800">
        <h1 className="text-2xl font-bold text-red-600 mb-8">Netflix</h1>

        <nav className="flex flex-col gap-9 text-gray-700 dark:text-gray-300">
          {/* Menu Section */}
          <div>
            <h3 className="uppercase text-xs text-gray-500 dark:text-gray-400 mb-3 font-semibold tracking-wide">
              Menu
            </h3>
            <ul className="flex flex-col gap-9">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-9 hover:text-red-500 transition"
                >
                  <Home size={18} />
                  <span>Browse</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-9 hover:text-red-500 transition"
                >
                  <Bookmark size={18} />
                  <span>Watchlist</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-9 hover:text-red-500 transition"
                >
                  <Clock size={18} />
                  <span>Coming soon</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="uppercase text-xs text-gray-500 dark:text-gray-400 mb-3 font-semibold tracking-wide">
              Social
            </h3>
            <ul className="flex flex-col gap-9">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-9 hover:text-red-500 transition"
                >
                  <Users size={18} />
                  <span>Friends</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-9 hover:text-red-500 transition"
                >
                  <PartyPopper size={18} />
                  <span>Parties</span>
                </a>
              </li>
            </ul>
          </div>

          {/* General Section */}
          <div>
            <h3 className="uppercase text-xs text-gray-500 dark:text-gray-400 mb-3 font-semibold tracking-wide">
              General
            </h3>
            <ul className="flex flex-col gap-9">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-9 hover:text-red-500 transition"
                >
                  <Settings size={18} />
                  <span>Settings</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-9 hover:text-red-500 transition"
                >
                  <LogOut size={18} />
                  <span>Log out</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-6 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-md p-2 rounded-md bg-gray-200 dark:bg-gray-700 outline-none"
          />
        </div>

        {/* Banner principal */}
        <section className="relative bg-gray-800 rounded-2xl overflow-hidden text-white">
          <img
            src="/thewitcher.jpg"
            alt="The Witcher"
            className="w-full h-100 object-cover opacity-60"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <h2 className="text-3xl font-bold">The Witcher</h2>
            <p className="text-sm mt-2 text-gray-300">98% Match • 2 seasons</p>
            <div className="mt-4 flex gap-2">
              <button className="bg-red-600 px-4 py-2 rounded-lg">Watch</button>
              <button className="bg-gray-600 px-4 py-2 rounded-lg">+</button>
            </div>
          </div>
        </section>

        {/* Parties */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Parties</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {["Cadaver", "Bladerunner 2049", "Monsters Inc."].map((title) => (
              <div
                key={title}
                className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl"
              >
                <h4 className="font-semibold">{title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Friends are watching
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Continue Watching */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Continue Watching</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Haunting of Hill House",
              "Ratched",
              "El Camino",
              "Stranger Things",
            ].map((title) => (
              <div
                key={title}
                className="relative rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700"
              >
                <img
                  src="/hohh.jpg"
                  alt={title}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70">
                  <h4 className="text-sm font-semibold text-white">{title}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Sidebar derecha */}
      <aside className="hidden md:flex flex-col justify-center items-center w-20 pb-12 space-y-10 bg-gray-100 dark:bg-gray-800">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded-full"
          ></div>
        ))}
      </aside>
    </div>
  );
}
