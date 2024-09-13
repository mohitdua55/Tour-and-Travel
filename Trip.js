import "./TripStyles.css"
import TripData from "./TripData";
import Trip1 from "../assets/9.jpg"
import Trip2 from "../assets/10.avif"
import Trip3 from "../assets/11.jpg"


function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading="Trip in Goa"
                text="The state of Goa, in India, is famous for its beaches and places of worship. 
                Tourism is its primary industry, and is generally 
                focused on the coastal areas of Goa, with decreased tourist activity inland.
Foreign tourists, mostly from Europe, arrive in Goa in winter, whilst the summer and monsoon
 seasons see many Indian tourists. Goa handled 2.29% of all foreign tourist arrivals in the 
 country in 2011. This relatively small state is situated on the west coast of India,
  between the borders of Maharashtra and Karnataka, and is better known to the world as a 
  former Portuguese enclave on Indian soil.
 Thus, Tourism forms the backbone of Goa's economy."
                />
                <TripData
                image={Trip2}
                heading="Trip in Mumbai"
                text="Tourism in Mumbai is an industry that attracts almost 6 million tourists per year, 
                making it the 30th-most visited location worldwide.
                It is primarily famous for large markets, mesmerising beaches, towering buildings, and 
                exquisite five-star hotels.
                The region long has been known for its production of fine muslin and chintz at Chanderi and Sironj.
                 Malwa is well connected to the country's rail and road networks. As early as the 2nd century bce 
                 the area was known as Avanti;
                 it was held by the Mauryan and Gupta dynasties."
                />
                <TripData
                image={Trip3}
                heading="Trip in Munnar"
                text="Known for its tea plantations, it's the most visited tourist spot in India.
                 Reasons of opting Munnar in Kerala as the most viable tourist spot is, its utility 
                 for being the best for Honeymooners, Family vacations, 
                corporate meetings, Trekkers & even for the Art lovers.
                Top Station, located around 32 km away from Munnar, is the highest point (1700m) in Munnar, 
                on the Munnar-Kodaikkanal road. The place falls on the Kerala-Tamil Nadu border.
                 Here you can enjoy the panoramic view of Western Ghats and the 
                valley of Theni district of Tamil Nadu."
                />
            </div>
        </div>
    )
}
export default Trip;