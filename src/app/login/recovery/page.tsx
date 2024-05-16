const LoginPage = () => {
    return (
      <div className="flex justify-content">
        <div className="img-login w-1/2 h-screen"></div>
        <div className="form-login bg-gray_80 bg-opacity-50 flex justify-center items-center w-1/2">
          <form
            action=""
            className="mx-auto max-w-sm bg-white rounded-lg shadow-md p-8"
          >
            <a className="font-bold mt-4" href="../login"> Volver </a>
            <h1 className="text-2xl font-bold mb-2 mt-4">Restablecer Contraseña</h1>
  
            <div className="mb-4">
              <h3 className="text-gray-700">
                Por favor ingrese su dirección de correo electrónico. Recibirá un enlace para crear una nueva contraseña a través de su correo electrónico.
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
              />
            </div>
  
            <button
              type="submit"
              className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Enviar Email
            </button>
          </form>
        </div>
      </div>
    );
  };
  export default LoginPage;
  