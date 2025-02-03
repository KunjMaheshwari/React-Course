import React, {useState} from "react";

function MyComponent(){

    const[cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){
        const newCar = {
            carYear: carYear, 
            carModel: carModel, 
            carMake: carMake}
        
        setCars(c => [...c, newCar]);

        setCarMake("");
        setCarYear(new Date().getFullYear());
        setCarModel("");
    }

    function handleRemoveCar(index){
        setCars(c => c.filter((_, i) => i != index));
    }

    function handleYearChange(e){
        setCarYear(e.target.value);
    }

    function handleModelChange(e){
        setCarModel(e.target.value);
    }

    function handleMakeChange(e){
        setCarMake(e.target.value);
    }


    return (
        <div>
            <h2>List of Car Objects:</h2>
            <ul>
                {cars.map((car, index) => <li key={index} onClick={() => handleRemoveCar(index)}>{car.carYear} {car.carMake} {car.carModel}</li>)}
            </ul>

            <input type="number" value={carYear} onChange={handleYearChange} /><br></br>

            <input placeholder="Enter Car Make" type="text" value={carMake} onChange={handleMakeChange} /><br></br>

            <input type="text" placeholder="Enter Car Model" value={carModel} onChange={handleModelChange} /><br></br>

            <button onClick={handleAddCar}>Add Car</button>
        </div>
    )
}

export default MyComponent;