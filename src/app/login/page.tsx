'use client';

import { useRef } from "react";

async function login(data: any) {
  const res = await fetch("http://localhost:8080/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const resData = await res.json();
  return resData;
}

const LoginPage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(!emailRef.current || !passwordRef.current) return
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    login(data).then(res => {
      if(res.error) {
        alert(res.message)
        return
      }
      console.log(res)
      alert('Bienvenido')
    })
    
  }

  return (
    <div className="flex justify-content bg-light">
      <div className="img-login w-1/2 h-screen"></div>
      <div className="form-login bg-gray_80 bg-opacity-50 flex justify-center items-center w-1/2">
        <form
          action=""
          className="mx-auto max-w-sm bg-white rounded-lg shadow-md p-8"
        >
          <h1 className="text-2xl font-bold mb-2">Iniciar sesión</h1>

          <div className="mb-4">
            <h3 className="text-gray-700">
              ¿Tu empresa no tiene cuenta?{" "}
              <b className="text-primary hover:underline cursor-pointer">
                <a href="/register">Crea una aqui</a>
              </b>
            </h3>
          </div>

          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              Correo
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="usuario@email.com"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ref={emailRef}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Ingresa tu contraseña"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ref={passwordRef}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-gray-500 font-normal">
                Recordarme
              </label>
            </div>

            <a
              href="/login/recovery"
              className="inline-block align-baseline font-bold text-sm text-primary hover:text-blue-800 hover:underline"
            >
              ¿Olvidó su contraseña?
            </a>
          </div>

          <button
            
            className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handleLogin}
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
