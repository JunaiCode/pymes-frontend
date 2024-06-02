const HomeSectionLanding = () => {
    return (
        <section id="inicio" className="text-gray-600 body-font h-screen ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center size-full">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">¿Quieres entender mejor la transformación digital? Aquí te lo explicamos.
      </h1>
      <h2 className="title-font sm:text-xl text-3xl mb-4 font-medium">¿Alguna vez has notado cómo las empresas cambian con el tiempo para adaptarse a nuevas tecnologías y formas de hacer las cosas?</h2>
      <p className="mb-8 leading-relaxed">La transformación digital es un proceso estratégico en el que las empresas reconfiguran completamente sus modelos de negocio, operaciones y estructuras organizativas utilizando tecnologías disruptivas. No se trata sólo de adoptar nuevas herramientas digitales, sino de reimaginar toda la empresa para aprovechar al máximo el potencial de la tecnología.</p>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="/assets/images/homeLanding.jpg"/>
    </div>
  </div>
</section>
    );
    }
export default HomeSectionLanding;