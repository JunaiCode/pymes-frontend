'use client';
import { RoadMap } from "@/components/company/RoadMap";
import PageTemplate from "@/components/ui/PageTemplate";

const page = () => {
  const data =[
        {
            dimension: "Tecnología",
            description: "Contar con herramientas tecnologías que estén acorde al tipo de compañía y el tamaño de la misma, agilizan la adaptación de las mismas brindando agilidad a los negocios.",
            recommendations: [
                {
                    title: "Conseguir servidores estables",
                    description: "Se recomienda invertir en servidores con una alta fiabilidad y capacidad de escalamiento para adaptarse a las necesidades cambiantes del negocio.",
                    tag: "Servidores"
                },
                {
                    title: "Actualizar software de gestión",
                    description: "Es crucial mantener actualizados los sistemas de gestión empresarial para mejorar la eficiencia operativa y protegerse contra vulnerabilidades de seguridad.",
                    tag: "Software"
                }
            ]
        },
        {
            dimension: "Información",
            description: "El intercambio de información entre clientes y externos a la organización proporcionan un ecosistema para genera valor al negocio basados en una integración estrategia para los sistemas de inteligencia de Negocios.",
            recommendations: [
                {
                    title: "Definir objetivos claros",
                    description: "Establecer objetivos claros y medibles ayuda a alinear los esfuerzos de la empresa y a dirigir eficazmente sus recursos.",
                    tag: "Objetivos"
                },
                {
                    title: "Analizar competencia",
                    description: "Realizar un análisis exhaustivo de la competencia permite identificar oportunidades y amenazas en el mercado, lo que facilita la toma de decisiones estratégicas.",
                    tag: "Análisis"
                }
            ]
        },
        {
            dimension: "Procesos",
            description: "La interacción entre las diferentes áreas de la compañía debe estar soportada por los procesos estratégicos, claves y de apoyo. De igual forma se busca estandarización de actividades agiles para su implementación efectiva",
            recommendations: [
                {
                    title: "Automatizar tareas repetitivas",
                    description: "Identificar y automatizar las tareas rutinarias puede mejorar significativamente la eficiencia operativa de la empresa, reduciendo errores y liberando tiempo para actividades más estratégicas.",
                    tag: "Automatización"
                },
                {
                    title: "Implementar un sistema de control de calidad",
                    description: "La implementación de un sistema de control de calidad permite asegurar que los productos o servicios cumplen con los estándares requeridos, mejorando la satisfacción del cliente y la reputación de la empresa.",
                    tag: "Calidad"
                }
            ]
        },
        {
            dimension: "Personas",
            description: "El liderazgo e innovación para afrontar los retos de las organizaciones en múltiples negocios, contar con colaboradores en las compañías que cuenten con habilidades y en formación de herramientas digitales y operativas fomentan la productividad del negocio.",
            recommendations: [
                {
                    title: "Capacitar al personal",
                    description: "La capacitación continua del personal es esencial para mantenerlos actualizados en las últimas tendencias y tecnologías, mejorando su desempeño y su contribución al logro de los objetivos de la empresa.",
                    tag: "Capacitación"
                },
                {
                    title: "Fomentar el trabajo en equipo",
                    description: "Promover un ambiente de trabajo colaborativo puede fortalecer la comunicación, la creatividad y la resolución de problemas, mejorando la productividad y el bienestar general de los empleados.",
                    tag: "Trabajo en equipo"
                }
            ]
        },
    ];

  return (
    <PageTemplate>
      <RoadMap dimensionsRecommendations={data}/>
    </PageTemplate>
  );
}

export default page;