import HomeSectionLanding from "@/components/HomeSection-Landing";
import ModelSectionLanding from "@/components/ModelSection-Landing";
import NavBar from "@/components/NavBar";
import ToolSectionLanding from "@/components/ToolSection-Landing";
function HomePage(){
    return (
        <div>
        <NavBar/>
        <HomeSectionLanding/>
        <ModelSectionLanding/>
        <ToolSectionLanding/>
        </div>
    )
}

export default HomePage;