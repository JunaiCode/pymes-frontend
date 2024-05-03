'use client';
import { RoadMap } from "@/components/company/RoadMap";
import PageTemplate from "@/components/ui/PageTemplate";

const page = () => {
  const data =[
        {
            dimension: "Tecnología",
            description: "En la dimensión de tecnología se evalúa la infraestructura tecnológica existente en la empresa, incluyendo hardware, software y sistemas de información. Se considera la adecuación de estas tecnologías a las necesidades del negocio, su capacidad para soportar la operación y su nivel de integración con otros sistemas.",
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
            dimension: "Estrategia",
            description: "En la dimensión de estrategia se definen los objetivos y planes de acción que guían el crecimiento y desarrollo de la empresa. Se busca maximizar el valor para los stakeholders y mantener la ventaja competitiva en el mercado.",
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
            description: "En la dimensión de procesos se evalúan los métodos y procedimientos utilizados para llevar a cabo las actividades de la empresa. Se busca mejorar la eficiencia y la efectividad de estos procesos para optimizar los recursos y satisfacer las necesidades del cliente.",
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
            description: "En la dimensión de personas se evalúa el recurso humano de la empresa, incluyendo su capacitación, motivación y desempeño. Se busca garantizar que los empleados cuenten con las habilidades y herramientas necesarias para contribuir al éxito organizacional.",
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
        {
            dimension: "Cultura",
            description: "En la dimensión de cultura se evalúan los valores, creencias y comportamientos compartidos dentro de la empresa. Se busca crear un entorno que fomente la innovación, el respeto y la diversidad, contribuyendo así al éxito a largo plazo de la organización.",
            recommendations: [
                {
                    title: "Promover la innovación",
                    description: "Fomentar una cultura que valore la innovación puede inspirar a los empleados a proponer nuevas ideas y soluciones que impulsen el crecimiento y la competitividad de la empresa en el mercado.",
                    tag: "Innovación"
                },
                {
                    title: "Valorar la diversidad",
                    description: "La valoración de la diversidad en el lugar de trabajo puede enriquecer la perspectiva de la empresa, fomentar la creatividad y mejorar la toma de decisiones, lo que contribuye al éxito y la sostenibilidad de la organización.",
                    tag: "Diversidad"
                }
            ]
        }
    ];

  return (
    <PageTemplate>
      <RoadMap dimensionsRecommendations={data}/>
    </PageTemplate>
  );
}

export default page;