import StepsBar from "./StepsBar";
export const Step = ({step,formData,handleChange,handleNext,handlePrev,handleCancel}: {step: number, formData: any, handleChange: any, handleNext: any, handlePrev: any,handleCancel?:any}) => {

    

    return <div className="flex justify-center items-center h-screen">
        {step === 0 && (
            <form className="w-50 bg-white rounded-lg shadow-md p-24">
            <StepsBar activeStep={step} />
            <h1>Información básica</h1>
                <div className="flex justify-between items-center gap-24 mt-2	">
                <div className="flex flex-col justify-center items-center">
                <div className="w-full">
                <label htmlFor="name">Nombre de la empresa</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder="Empresa S.A.S" />
                </div>
                <div className="w-full">
                <label htmlFor="company-select">Tipo de empresa</label>
                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="type" id="company-select" onChange={handleChange} value={formData.type}>
                    <option value="1">Micro Empresa</option>
                    <option value="2">S.A</option>
                    <option value="3">S.A.S</option>
                </select>
                </div>
                <div className="w-full">
                <label htmlFor="nit">NIT</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="nit" id="nit" value={formData.nit} onChange={handleChange} placeholder="100 - 100 - 100" />
                </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                <div className="w-full">
                <label htmlFor="address">Dirección</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="address" id="address" value={formData.address} onChange={handleChange} placeholder="Carrera 1A #5-55" />
                </div>
                <div className="w-full">
                <label htmlFor="city-company">Ciudad</label>
                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"name="city" id="city-company" value={formData.city} onChange={handleChange}>
                    <option value="1">Medellin</option>
                    <option value="2">Bogota</option>
                    <option value="3">Cali</option>
                </select>
                </div>
                <div className="w-full">
                <label htmlFor="tel">Telefono</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="tel" id="tel" value={formData.tel} onChange={handleChange} placeholder="300 252 4520" />
                </div>
                </div>
                </div>
                <div className="flex justify-between">
                <button className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded mt-4 border" onClick={handleCancel}>Cancelar</button>
                <button  className="bg-secondary_old hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"onClick={handleNext}>Siguiente</button>
                </div>
            </form>
        )}
        {step === 1 && (
             <form className="mx-auto max-w-sm bg-white rounded-lg shadow-md p-8">
             <StepsBar activeStep={step} />
             <h1>Información de contacto</h1>
                <div className="flex justify-between items-center gap-24 mt-2	">
                <div className="flex flex-col justify-center items-center">
                 <div className="w-full">
                 <label htmlFor="">Nombre del representante legal</label>
                 <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="legalRep" value={formData.legalRep} onChange={handleChange} placeholder="Pedro Perez" />
                 </div>
                 <div className="w-full">
                 <label htmlFor="">Correo electronico del representante legal</label>
                 <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="legalRepEmail" value={formData.legalRepEmail} onChange={handleChange} placeholder="usuario@email.com" />
                 </div>
                 <div className="w-full">
                 <label htmlFor="">Telefono del representante legal</label>
                 <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="legalRepTel" value={formData.legalRepTel} onChange={handleChange} placeholder="300 3030 300" />
                 </div>
                 </div>
                 <img src="" alt="" />
                 </div>
                 <div className="flex justify-between">
                <button className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded mt-4 border" onClick={handlePrev}>Volver</button>
                <button  className="bg-secondary_old hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"onClick={handleNext}>Siguiente</button>
                </div>
             </form>
        )}
        {step === 2 && (
             <form className="mx-auto max-w-sm bg-white rounded-lg shadow-md p-8">
             <StepsBar activeStep={step} />
                <div>
                 <h1>Detalles de la empresa</h1>
                 <label htmlFor="">Sector economico</label>
                    <select name="economicSector" id="sector" value={formData.economicSector} onChange={handleChange}>
                        <option value="1">Tecnologia</option>
                        <option value="2">Salud</option>
                        <option value="3">Educacion</option>
                    </select>
                    <label htmlFor="">Numero de empleados</label>
                    <input type="text" name="numberEmployees" value={formData.numberEmployees} onChange={handleChange} placeholder="500" />
                    <label htmlFor="">Años en operación</label>
                    <input type="text" name="opsYears" value={formData.opsYears} onChange={handleChange} placeholder="3" />
                 </div>
                 <div className="flex justify-between">
                <button className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded mt-4 border" onClick={handlePrev}>Volver</button>
                <button  className="bg-secondary_old hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"onClick={handleNext}>Siguiente</button>
                </div>
             </form>
        )}
        {step === 3 && (
             <form className="mx-auto max-w-sm bg-white rounded-lg shadow-md p-8">
             <StepsBar activeStep={step} />
                <div>
                 <h1>Necesidades y expectativas</h1>
                 <label htmlFor="">Necesidades especificas de su empresa</label>
                 <textarea name="specificNeeds" id="" cols={30} rows={10} placeholder="Detalles" value={formData.specificNeeds} onChange={handleChange}></textarea>
                 <label htmlFor="">Expectativas con respecto a la plataforma</label>
                 <textarea name="expectations" id="" cols={30} rows={10} placeholder="Detalles" value={formData.expectations} onChange={handleChange}></textarea>
                 </div>
                 <div className="flex justify-between">
                <button className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded mt-4 border" onClick={handlePrev}>Volver</button>
                <button  className="bg-secondary_old hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"onClick={handleNext}>Siguiente</button>
                </div>
             </form>
        )}
        {step === 4 && (
             <form className="mx-auto max-w-sm bg-white rounded-lg shadow-md p-8">
             <StepsBar activeStep={step} />
                 <h1>Terminos y condiciones</h1>
                 <label htmlFor="">Acepto los terminos y condiciones</label>
                 <input type="checkbox" name="termsAndConditions" id="terms" value={formData.termsAndConditions} onChange={handleChange} />
                 <div className="flex justify-between">
                <button className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded mt-4 border" onClick={handlePrev}>Volver</button>
                <button  className="bg-secondary_old hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"onClick={handleNext}>Aceptar</button>
                </div>
             </form>
        )}
    </div>;
};