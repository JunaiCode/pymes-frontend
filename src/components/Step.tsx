import StepsBar from "./StepsBar";
import Image from "next/image";
export const Step = ({step,formData,handleChange,handleNext,handlePrev,handleCancel}: {step: number, formData: any, handleChange: any, handleNext: any, handlePrev: any,handleCancel?:any}) => {

    

    return <div className="flex justify-center items-center h-screen">
        {step === 0 && (
            <form className="w-full md:w-1/2 bg-white rounded-lg shadow-md">
            <StepsBar activeStep={step} />
            <h1 className="m-4 ml-6 text-4xl">Información básica</h1>
                <div className="flex justify-between items-center gap-24 mt-2">
                <div className="flex flex-col justify-around items-center">
                <div className="w-full ml-12 mb-8">
                <label htmlFor="name">Nombre de la empresa</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder="Empresa S.A.S" />
                <p id="name" className="text-red-500 mt-2 text-xs italic opacity-0"></p>
                </div>
                <div className="w-full ml-12 mb-8">
                <label htmlFor="company-select">Tipo de empresa</label>
                <select className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="type" id="company-select" defaultValue="1" onChange={handleChange} value={formData.type}>
                    <option value="0">Seleccione tipo de empresa</option>
                    <option value="1">Micro Empresa</option>
                    <option value="2">Pequeña Empresa</option>
                    <option value="3">Mediana Empresa</option>
                </select>
                <p id="company-select" className="text-red-500 mt-2 text-xs italic opacity-0"></p>
                </div>
                <div className="w-full ml-12 mb-8">
                <label htmlFor="nit">NIT</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="nit" id="nit" value={formData.nit} onChange={handleChange} placeholder="100 - 100 - 100" />
                <p id="nit" className="text-red-500 mt-2 text-xs italic opacity-0"></p>
                </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                <div className="w-full mr-12 mb-8">
                <label htmlFor="address">Dirección</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="address" id="address" value={formData.address} onChange={handleChange} placeholder="Carrera 1A #5-55" />
                <p id="address" className="text-red-500 mt-2 text-xs italic opacity-0"></p>
                </div>
                <div className="w-full mr-12 mb-8">
                <label htmlFor="city-company">Ciudad</label>
                <select className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"name="city" id="city-company" value={formData.city} onChange={handleChange}>
                    <option value="0">Seleccione una ciudad</option>
                    <option value="1" selected>Medellin</option>
                    <option value="2">Bogota</option>
                    <option value="3">Cali</option>
                </select>
                <p id="city-company" className="text-red-500 mt-2 text-xs italic opacity-0"></p>
                </div>
                <div className="w-full mr-12 mb-8">
                <label htmlFor="tel">Telefono</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="tel" id="tel" value={formData.tel} onChange={handleChange} placeholder="300 252 4520" />
                <p id="tel" className="text-red-500 mt-2 text-xs italic opacity-0"></p>
                </div>
                </div>
                </div>
                <div className="flex justify-between mb-12 mt-2">
                <button className="bg-white hover:bg-blue-700 hover:text-white text-black font-bold py-2 px-4 rounded mt-4 border ml-6" onClick={handleCancel}>Cancelar</button>
                <button  className="bg-secondary_old hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mr-6"onClick={handleNext}>Siguiente</button>
                </div>
            </form>
        )}
        {step === 1 && (
             <form className="w-full md:w-1/2 bg-white rounded-lg shadow-md">
             <StepsBar activeStep={step} />
             <h1 className="mt-4 ml-6 text-4xl">Información de contacto</h1>
                 <div className="flex justify-between items-center gap-24 mt-2">
                 <div className="flex flex-col justify-around items-center">
                 <div className="w-full ml-12 mb-8">
                 <label htmlFor="legalRep">Nombre del representante legal</label>
                 <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="legalRep" id="legalRep" value={formData.legalRep} onChange={handleChange} placeholder="Pedro Perez" />
                 <p id="legalRep" className="text-red-500 mt-2 text-xs italic opacity-0"></p>
                 </div>
                 <div className="w-full ml-12 mb-8">
                 <label htmlFor="legalRepEmail">Correo electronico del representante legal</label>
                 <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="legalRepEmail" id="legalRepEmail" value={formData.legalRepEmail} onChange={handleChange} placeholder="usuario@email.com" />
                 <p id="legalRepEmail" className="text-red-500 mt-2 text-xs italic opacity-0"></p>
                 </div>
                 <div className="w-full ml-12 mb-8">
                 <label htmlFor="legalRepTel">Telefono del representante legal</label>
                 <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="tel" name="legalRepTel" id="legalRepTel" value={formData.legalRepTel} onChange={handleChange} placeholder="300 3030 300" />
                 <p id="legalRepTel" className="text-red-500 mt-2 text-xs italic opacity-0"></p>
                 </div>
                 <div className="w-full ml-12 mb-8">
                 <label htmlFor="password">Contraseña</label>
                 <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" id="password" value={formData.password} onChange={handleChange} placeholder="********" />
                 <p id="password" className="text-red-500 mt-2 text-xs italic opacity-0"></p>
                 </div>
                 </div>
                 <div className="flex flex-col justify-center items-center mr-12">
                 <Image src="/assets/images/contactRegister.png" alt="contact" width={500} height={500}/>
                 </div>
                 </div>
                 <div className="flex justify-between mb-12 mt-2">
                 <button className="bg-white hover:bg-blue-700 hover:text-white text-black font-bold py-2 px-4 rounded mt-4 border ml-6" onClick={handlePrev}>Volver</button>
                 <button  className="bg-secondary_old hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mr-6"onClick={handleNext}>Siguiente</button>
                 </div>
             </form>
        )}
        {step === 2 && (
             <form className="w-full md:w-1/2 bg-white rounded-lg shadow-md">
             <StepsBar activeStep={step} />
             <h1 className="m-4 ml-6 text-4xl">Detalles de la empresa</h1>
                 <div className="flex justify-between items-center gap-24 mt-2">
                 <div className="flex flex-col justify-around items-center">
                 <div className="w-full ml-12 mb-8">
                 <label htmlFor="economicSector-select">Sector economico</label>
                 <select className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="economicSector" id="economicSector-select" onChange={handleChange} value={formData.economicSector}>
                      <option value="0">Seleccione sector economico</option>
                      <option value="1">Comercio</option>
                      <option value="2">Servicios</option>
                      <option value="3">Industrial</option>
                      <option value="4">Tecnologia</option>
                 </select>
                 <p id="economicSector-select" className="text-red-500 mt-2 text-xs italic opacity-0"></p>
                 </div>
                 <div className="w-full ml-12 mb-8">
                 <label htmlFor="numberEmployees">Numero de empleados</label>
                 <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="numberEmployees" id="numberEmployees" value={formData.numberEmployees} onChange={handleChange} placeholder="500" />
                 <p id="numberEmployees" className="text-red-500 mt-2 text-xs italic opacity-0"></p>
                 </div>
                 <div className="w-full ml-12 mb-8">
                 <label htmlFor="opsYears">Años en operación</label>
                 <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="opsYears" id="opsYears" value={formData.opsYears} onChange={handleChange} placeholder="3" />
                 <p id="opsYears" className="text-red-500 mt-2 text-xs italic opacity-0"></p>
                 </div>
                 </div>
                 <div className="flex flex-col justify-center items-center">
                 <Image src="/assets/images/detailsCompanyRegister.png" alt="detailsCompany" width={500} height={500}/>
                 </div>
                 </div>
                 <div className="flex justify-between mb-12 mt-2">
                 <button className="bg-white hover:bg-blue-700 hover:text-white text-black font-bold py-2 px-4 rounded mt-4 border ml-6" onClick={handlePrev}>Volver</button>
                 <button  className="bg-secondary_old hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mr-6"onClick={handleNext}>Siguiente</button>
                 </div>
             </form>
        )}
        {step === 3 && (
             <form className="w-full md:w-1/2 bg-white rounded-lg shadow-md">
             <StepsBar activeStep={step} />
             <h1 className="m-4 ml-6 text-4xl">Necesidades y expectativas</h1>
                 <div className="flex justify-between items-center gap-24 mt-2">
                 <div className="flex flex-col justify-around items-center">
                 <div className="w-full ml-12 mb-8">
                 <label htmlFor="specificNeeds">Necesidades especificas de su empresa</label>
                 <textarea className=" resize-none shadow border rounded w-full h-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="specificNeeds" id="specificNeeds" cols={30} rows= {10} onChange={handleChange} value={formData.specificNeeds} placeholder="Detalles"></textarea>
                 <p id="specificNeeds" className="text-red-500 mt-2 text-xs italic opacity-0"></p>
                 </div>
                 <div className="w-full ml-12 mb-8">
                 <label htmlFor="expectations">Expectativas con respecto a la plataforma</label>
                 <textarea className=" resize-none shadow border rounded w-full h-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="expectations" id="expectations" cols={30} rows= {10} onChange={handleChange} value={formData.expectations} placeholder="Detalles"></textarea>
                 <p id="expectations" className="text-red-500 mt-2 text-xs italic opacity-0"></p>
                 </div>
                 </div>
                 <div className="flex flex-col justify-center items-center">
                    <Image src="/assets/images/needsRegister.png" alt="needsAndExpectations" width={500} height={500}/>
                 </div>
                 </div>
                 <div className="flex justify-between mb-12 mt-2">
                 <button className="bg-white hover:bg-blue-700 text-black hover:text-white font-bold py-2 px-4 rounded mt-4 border ml-6" onClick={handlePrev}>Volver</button>
                 <button  className="bg-secondary_old hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mr-6"onClick={handleNext}>Siguiente</button>
                 </div>
             </form>
        )}
        {step === 4 && (
             <form className="w-full md:w-1/2 bg-white rounded-lg shadow-md">
             <StepsBar activeStep={step} />
             <h1 className="m-4 ml-6 text-4xl">Terminos y condiciones</h1>
             <div className="flex justify-between items-center gap-24 mt-2">
               <div className="w-full ml-12 mr-12 mb-8">
                 <div className="flex flex-col items-center w-50">
                   <p className="bg-gray_80 h-61 p-2 overflow-y-scroll w-full text-sm mr-24 ml-24">
                   ¡Bienvenido a nuestra aplicación de autoevaluación de madurez digital para empresas! Antes de utilizar nuestros servicios, lea detenidamente los siguientes términos y condiciones. Al acceder y utilizar nuestra aplicación, usted acepta cumplir con estos términos. Si no está de acuerdo con alguna parte de estos términos, por favor, absténgase de utilizar nuestra aplicación.
Uso de la Aplicación: 1.1. Nuestra aplicación está diseñada para ayudar a las empresas a evaluar su nivel de madurez digital mediante cuestionarios y análisis proporcionados. 1.2. Usted acepta utilizar la aplicación únicamente con fines lícitos y de acuerdo con estos términos y condiciones. 1.3. Nos reservamos el derecho de modificar o interrumpir la aplicación en cualquier momento sin previo aviso.
Propiedad Intelectual: 2.1. Todos los derechos de propiedad intelectual relacionados con la aplicación y su contenido son propiedad nuestra o de nuestros licenciantes. 2.2. Usted acepta no reproducir, distribuir, modificar o crear obras derivadas basadas en nuestra aplicación sin nuestro consentimiento previo por escrito.
Privacidad: 3.1. Nos comprometemos a proteger su privacidad y a tratar sus datos personales de acuerdo con nuestra Política de Privacidad. 3.2. Usted acepta que podemos recopilar y utilizar cierta información personal de acuerdo con nuestra Política de Privacidad.
Limitación de Responsabilidad: 4.1. Nos esforzamos por proporcionar una aplicación precisa y útil, pero no garantizamos la precisión, integridad o utilidad de la misma. 4.2. Usted utiliza la aplicación bajo su propio riesgo. No seremos responsables de ningún daño directo, indirecto, incidental, especial, consecuente o punitivo que surja del uso de nuestra aplicación.
Modificaciones de los Términos: 5.1. Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigencia inmediatamente después de su publicación en la aplicación. 5.2. Su uso continuado de la aplicación después de la publicación de cualquier modificación constituirá su aceptación de dichas modificaciones.
Al utilizar nuestra aplicación, usted acepta estos términos y condiciones en su totalidad. Si tiene alguna pregunta sobre estos términos, contáctenos. ¡Gracias por elegir nuestra aplicación de autoevaluación de madurez digital para empresas!
                   </p>
                   <div className="mt-2 mr-8 flex justify-end w-full">
                 <label htmlFor="termsAndConditions" className="mr-2 ">Acepto los términos y condiciones</label>
                 <input type="checkbox" name="termsAndConditions" id="termsAndConditions" onClick={handleChange} />
               </div>
               <div className="flex justify-end w-full mr-8">
               <p id="termsAndConditions" className="text-red-500 mt-2 text-xs italic opacity-0"></p>
               </div>
            </div>
            
            </div>
             </div>
             
             <div className="flex justify-between mb-12 mt-2">
               <button className="bg-white hover:bg-blue-700 hover:text-white text-black font-bold py-2 px-4 rounded mt-4 border ml-6" onClick={handlePrev}>Volver</button>
               <button className="bg-secondary_old hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mr-6" onClick={handleNext}>Aceptar</button>
             </div>
           </form>
        )}
        <div id="info-popup" tabIndex={-1} className=" hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex justify-center items-center">
    <div className="relative p-4 w-full max-w-lg h-full md:h-auto">
    <div className="relative p-4 bg-white rounded-lg shadow  md:p-8">
      <div className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
        <h3 className="mb-3 text-2xl font-bold text-black ">Upsss</h3>
        <p>
          No has completado todos los campos de manera adecuada.
        </p>
      </div>
      <div className="justify-end items-center pt-0 space-y-4 sm:flex sm:space-y-0">
        <div className="items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
          <button id="modal-button" onClick={()=>{
            let modal = document.getElementById('info-popup');
            if(modal){
              modal.classList.add('hidden');
            }
          }}type="button" className="py-2 px-4 w-full text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-auto hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Aceptar</button>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>;
};