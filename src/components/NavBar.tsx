"use client";
import { useRouter } from "next/navigation";
const NavBar = () => {
  const router = useRouter();
  return (
    <nav className="bg-primary fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-sans whitespace-nowrap dark:text-white">
            EvoluTIC
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            onClick={() => router.push("/register")}
            className="text-black bg-secondary hover:bg-light_bg   focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center    mr-2"
          >
            Registrarse
          </button>
          <button
            type="button"
            onClick={() => router.push("/login")}
            className="text-white bg-secondary_old  hover:bg-light_bg focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center    mr-2"
          >
            Ingresar
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200  "
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4  font-medium  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <a
                href="#inicio"
                className="text-white block py-2 px-3 hover:text-light_bg  bg-blue-700 rounded md:bg-transparent  md:p-0"
                aria-current="page"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#madurez-digital"
                className="block py-2 px-3 text-white hover:text-light_bg rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  dark:text-white   md:dark:hover:bg-transparent "
              >
                Madurez Digital
              </a>
            </li>
            <li>
              <a
                href="#claves-exito"
                className="block py-2 px-3 text-white hover:text-light_bg rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  dark:text-white   md:dark:hover:bg-transparent "
              >
                Claves del Éxito
              </a>
            </li>
            <li>
              <a
                href="#comienza-viaje"
                className="block py-2 px-3 text-white hover:text-light_bg rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  dark:text-white   md:dark:hover:bg-transparent "
              >
                Comienza tu Viaje
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
