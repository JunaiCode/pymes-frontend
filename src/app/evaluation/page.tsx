'use client';

import Questionary from "@/components/company/Questionary";
import PageTemplate from "@/components/ui/PageTemplate";

const Page = () => {
    return (
        <PageTemplate>
        <Questionary questions={[{
            title: "¿Desde qué nivel de la jerarquía de la organización se aboga por el marketing basado en datos?",
            options: [
                "Los cargos sénior defienden su uso hasta cierto punto.",
                "Los cargos medios, como los directores locales, defienden su uso.",
                "Los altos cargos, como el vicepresidente, defienden su uso.",
                "Algunos cargos senior como el CMO, CTO o COO, defienden su uso."
            ]
        }]}/>
        </PageTemplate>
    );
};

export default Page;