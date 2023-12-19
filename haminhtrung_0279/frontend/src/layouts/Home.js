import { useState, useEffect } from "react";
import Slider from "../pages/home/Slider"
import Deal from "../pages/home/Deal"
import Apparel from "../pages/home/Apparel";
import Electronics from "../pages/home/Electronics";
import Items from "../pages/home/Items";
import Region from "../pages/home/Region";
import Services from "../pages/home/Services";
import Subscribe from "../pages/home/Subscribe";
import Request from "../pages/home/Request";
// import adsm from "../assets/images/banners/ad-sm.png"
import Apparel1 from "../pages/home/Apparel1";
import { GET_ALL } from "../api/apiService";


function Home(props) {

            const [categories, setCategories] = useState([]);
            
                useEffect(() => {
                GET_ALL(`categories`).then((item) => setCategories(item.data));
                }, [categories]);
                const filteredCategories = categories.filter(
                (category) => category.isHome === 1
                );

    return (
        <div className="container">
            <Slider/>
        
            {filteredCategories.length > 0 &&
                filteredCategories.map((row) => (
                <Deal categoryName={row.name} categoryId={row.id} />
                
                ))}
     
            <Request/>
         
            <Region/>
            {/* <Subscribe/> */}
        </div>
    );
}
export default Home;