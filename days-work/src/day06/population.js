import React from 'react';

const tenHighestPopulation = [
    { country: 'World', population: 7693165599 },
    { country: 'China', population: 1377422166 },
    { country: 'India', population: 1295210000 },
    { country: 'United States of America', population: 323947000 },
    { country: 'Indonesia', population: 258705000 },
    { country: 'Brazil', population: 206135893 },
    { country: 'Pakistan', population: 194125062 },
    { country: 'Nigeria', population: 186988000 },
    { country: 'Bangladesh', population: 161006790 },
    { country: 'Russian Federation', population: 146599183 },
    { country: 'Japan', population: 126960000 },
]
const worldPopulation = tenHighestPopulation.find(elem => elem.country === "World")
console.log(worldPopulation.population)
const country = tenHighestPopulation.map((element, index) => {

    const width = element.population / worldPopulation.population * 100
     
    return <div key={index} style={{ height: '30px', width: "100%", 
    display: "flex", justifyContent: "space-between", marginBottom: "10px" }} className="container">
        <div style={{width: "200px"}}>{element.country.toLocaleUpperCase()}</div>
        <div style={{width: "calc(100% - 400px)"}}>
            <div className='bar' style={{ width: width + "%", height: "30px", backgroundColor: "orange" }}></div>
        </div>
        <div style={{width: "200px", textAlign: "right"}}>{element.population.toLocaleString()}</div>
    </div>
})

const Population = () => {
    console.log(country)
    return (
        <div style={{width: "90%", margin: "20px auto", textAlign: "center"}}>
            <h1>30 Days Of React</h1>
            <h2>World Population</h2>
            <h3>Ten most populated countries</h3>
            {country}
        </div>
    )

}
export default Population