import HomeSectionLanding from "@/components/HomeSection-Landing";
import KeysLanding from "@/components/Keys-Landing";
import MaturityLanding from "@/components/Maturity-Landing";
import NavBar from "@/components/NavBar";
import TripLanding from "@/components/TripLanding";
function HomePage(){
    return (
        <div>
        <NavBar/>
        <HomeSectionLanding/>
        <MaturityLanding/>
        <KeysLanding/>
        <TripLanding/>
        </div>
    )
}

export default HomePage;