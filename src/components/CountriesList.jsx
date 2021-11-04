import React from 'react'
import { Link } from "react-router-dom";

export default function CountriesList(props) {
    return (
        <div>
             {
                props.countries.map((country) =>  {
                    let countryRoute = "/" + String(country.cca3)
                    return (
                        <React.Fragment key={country.cca3}>
                            <Link to={countryRoute}>{country.name.common}</Link>
                        </React.Fragment>
                    )
                })

             }
        </div>
    )
}
