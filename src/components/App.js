// create your App component here
import React, { useEffect, useState } from "react";


function App(){
const [dogBreeds, setDogbreeds] = useState([]);
const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((r) => r.json())
        .then((data) => {
            setDogbreeds(data.message);
            setIsLoaded(true);
        });
    }, []);


    if (!isLoaded) return <p>Loading...</p>;

    return (
        <img src={dogBreeds} alt="A Random Dog"/>
    )
}







export default App