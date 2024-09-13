
import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/2.jpg"
import Mountain3 from "../assets/3.jpg"
import Mountain4 from "../assets/4.jpg"
import Darjeeling1 from "../assets/5.jpg"
import Darjeeling2 from "../assets/6.jpg"
import Varanasi1 from "../assets/7.jpg"
import Varanasi2 from "../assets/8.jpg"

import DestinationData from "./DestinationData"
import "./DestinationStyles.css"

const Destination=()=>{
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot,within a time frame.</p>
           <DestinationData 
           className="first-des"
           heading="Ladakh,Jammu Kashmir"
           text="Ladakh is a major tourist destination. Snow-capped mountains,
                     glaciers and festivals are major factors that attract people to visit Ladakh.
                      Besides, tourists also visit the Gompas (Buddhist monasteries).
                     Festivals such as Losar, Hemis, thiksey are celebrated by the people over there."
            img1={Mountain1}
            img2={Mountain2}

           />
           <DestinationData 
           className="first-des-reverse"
           heading="Darjeeling,West Bengal"
           text="Darjeeling is a town in India's West Bengal state, in the Himalayan foothills. 
           Once a summer resort for the British Raj elite, it remains the terminus of the narrow-gauge 
           Darjeeling Himalayan Railway, or “Toy Train,” completed in 1881. It's famed for the distinctive
            black tea grown on plantations that dot its surrounding slopes.
            Its backdrop is Mt. Kanchenjunga, among the world’s highest peaks."
            img1={Darjeeling1}
            img2={Darjeeling2}
           />
           <DestinationData 
           className="first-des"
           heading="Varanasi,UP"
           text="Varanasi is a city in the northern Indian state of Uttar Pradesh dating to the 11th 
           century B.C. Regarded as the spiritual capital of India, the city draws Hindu pilgrims 
           who bathe in the Ganges River’s sacred waters and perform funeral rites. 
           Along the city's winding streets are some 2,000 temples, including Kashi Vishwanath,
            the “Golden Temple,” dedicated to the Hindu god Shiva.During the ages Varanasi has
             produced master craftsmen and Varanasi has earned name and fame for its Sarees, 
             handicrafts, textiles, Toys, ornaments, metal work, clay and wood work, leaf and fibre crafts. 
            With ancient crafts, Banaras has not lagged behind in Modern Industries."
            img1={Varanasi1}
            img2={Varanasi2}
           />
        </div>
    )

}
export default Destination