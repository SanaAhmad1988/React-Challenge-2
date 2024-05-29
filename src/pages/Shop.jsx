import { useEffect, useState } from "react";
import PlantCard from '../components/PlantCard';
import itemsData from '../itemsData.json';

 function Shop (){

    const apiUrl = 'https://seed-theory-api.netlify.app/data.json' 
     
    const [itemsData, setItems] = useState(['']);
 
 
    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setItems(data))
 
    }, [])
 
 
    return(
        <div className="body">
            <h2 className="shopHeader">Our Plants</h2>
            <div className="shopItems">
                {  itemsData.map((item) => (
            <PlantCard {...item} />
                    
                ))}
            </div>
        </div>
    )
};
 


export default Shop;

  