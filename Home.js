import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home(){
return(
    <>
 <Navbar/>

    <Hero
    cName="hero"
     heroImg="https://us.123rf.com/450wm/altitudevisual/altitudevisual2304/altitudevisual230483423/203655948-off-road-vehicle-speeding-through-vast-and-rugged-landscape-with-mountains-in-the-background-created.jpg"
    title="Your Journey Your Story"
    text="Choose Your Favourite Destination."
    buttonText="Travel Plan"
    url="/"
    btnClass="show"
    
    />
    <Destination/>  
    <Trip/>
    <Footer/>
     </>
);
}
export default Home;