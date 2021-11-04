import React from 'react'

export default function CountryDetails(props) {
    let country = props.countries.filter((country) => country.cca3 === props.match.url.slice(1))[0]
    let neighbors = props.countries.filter((country) => country.borders.includes(props.match.url.slice(1)))
    console.log("my neighbors are nice", neighbors)
    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>Capital   {country.capital}</p>
            <p>Area {country.area} km^2</p>
            <div>
                <p>Borders</p>
                <ul>
                    {
                        neighbors.map((country) => <li>{country.name.common}</li>)
                    }
                </ul>
            </div>

        </div>
    )
}
