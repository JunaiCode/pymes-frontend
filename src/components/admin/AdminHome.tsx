


export default function AdminHome() {
   
    return (
        <div className="h-full w-full flex flex-col items-start justify-center bg-light_bg">
            <div className="w-full h-full flex flex-row">
                <div className="h-full w-full flex flex-col bg-light_bg border rounded-lg shadow-lg p-4">
                    <p className="text-3xl font-sans font-bold mb-4">Bienvenido, Administrador</p>
                    <p className="text-lg mb-10 font-sans">
                        Esta plataforma se desarrolló para permitir la creación y edición de modelos de evaluación de transformación digital
                        para empresas. En ella encontrarás las respectivas pantallas para crear modelos, versiones, dimensiones,
                        niveles, tags y preguntas. Esta aplicación fue desarrollada teniendo en cuenta el modelo de madurez digital
                        desarrollado por el Magister en Gerencia de proyectos Carlos Julio Peña Valencia en su tesis de grado de maestria
                        en gerencia de proyectos de la Universidad ICESI.
                    </p>
                    <p className="text-xl font-sans font-bold mb-4">
                        Para empezar a usar la herramienta por favor revisa el siguiente grafico donde se explica donde puedes encontrar
                        las diferentes opciones de la plataforma
                    </p>
                    <div className="flex flex-row w-full h-full p-8">
                        <FunctionalityCard
                            title="MODELOS"
                            description="Aquí podrás crear y editar los modelos de evaluación, cada modelo tiene su respectivas versiones. Dentro de la funcionalidad
                            de modelos podrás ver las versiones activas actualmente. Siempre la ultima version que crees sera la version activa"
                            number="01"
                            backgroundColor="#812c82" />
                        <FunctionalityCard
                            title="VERSIONES"
                            description="Las versiones son instancias de un modelo, cada modelo puede tener multiples versiones, cada version
                            contiene las dimensiones, niveles, tags y preguntas que se evaluaran en la evaluación y para crear una nueva
                            version deberas ingresar a la funcionalidad de modelos y seleccionar la opcion de crear version dentro del modelo
                            que quieras"
                            number="02"
                            backgroundColor='#d82a35'
                        />
                        <FunctionalityCard
                            title="DIMENSIONES"
                            description="Las dimensiones son los aspectos que se evaluaran en la evaluación, cada dimension tiene un nombre y una descripcion
                            y cada dimension puede tener multiples niveles, tags y preguntas asociadas"
                            number="03"
                            backgroundColor='#f78539'
                        />
                        <FunctionalityCard
                            title="NIVELES"
                            description="Los niveles son los diferentes estados de madurez que puede tener una empresa en una dimension, cada nivel tiene un nombre y una descripcion
                            y cada nivel puede tener multiples tags y preguntas asociadas"
                            number="04"
                            backgroundColor='#f7b239'
                        />
                        <FunctionalityCard
                            title="TAGS"
                            description="Los tags son las etiquetas que se le asignan a las preguntas, cada tag tiene un nombre y una descripcion y cada tag puede tener multiples preguntas asociadas"
                            number="05"
                            backgroundColor='#39d83e'
                        />
                        <FunctionalityCard
                            title="PREGUNTAS"
                            description="Las preguntas son las que se le hacen a la empresa para evaluar su madurez digital, cada pregunta tiene un enunciado, un tipo de respuesta y una descripcion"
                            number="06"
                            backgroundColor='#4cbaba'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export function FunctionalityCard(props: { title: string, description: string, number: string, backgroundColor: string }) {
    return (
        <div className="flex flex-col h-full border m-4 rounded-lg items-center justify-start max-w-60 bg-white">
            <div className={`w-full flex items-center justify-center p-4 rounded-t-lg`}
                style={{ backgroundColor: props.backgroundColor }}
            >
                <p className="text-xl font-sans text-white font-medium">{props.title}</p>
            </div>
            <div className='w-full flex flex-col items-center justify-center'>
                <p className="text-5xl mt-8 font-sans text-gray-400 font-thin">{props.number}</p>
                <div className='w-1/3 mt-2 mb-8 border border-gray-400'></div>
            </div>
            <div className='flex w-full h-full p-4'>
                <p className="text-sm font-sans">{props.description}</p>
            </div>
            <div className='w-full h-2 rounded-b-lg'
                style={{ backgroundColor: props.backgroundColor }}
            >

            </div>

        </div>
    );
}
