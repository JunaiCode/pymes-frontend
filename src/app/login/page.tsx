const LoginPage = () => {
    return (
        <div className="flex justify-content">
        <div className="img-login w-1/2"></div>
        <div className="form-login bg-gray_80 bg-opacity-50 flex justify-center items-center w-1/2">
        <form action="" className=" login-form w-1/2 h-1/2  bg-white rounded p-8" >
        <h1>Iniciar sesion</h1>
        <h3>Tu empresa no tiene cuenta? <b className="text-primary">Crea una aqui</b> </h3>
        <br />
        <label htmlFor="">Correo</label><br />
        <input className="input-login"type="text" name="username" id="username" placeholder="usuario@email.com"/>
        <br />
        <label htmlFor="">Contraseña</label> <br />
        <input className="input-login" type="password" name="password" id="password" placeholder="Ingresa tu contraseña"/>
        <br />
        <div className="flex justify-end items-center end w-full">
        <h3><b className="text-primary">¿Olvidó su contraseña?</b></h3>
        </div>
        <button type="submit" className="button-login bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Iniciar Sesión</button>
        </form>
        </div>
        </div>
    );
    }
export default LoginPage;