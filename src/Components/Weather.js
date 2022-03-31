import React from 'react'

function Weather(props) {
    return (
        <div>
            {
                props.tempreature && <p>Tempreature : {props.tempreature}</p>
            }
            {
                props.city && <p>City : {props.city}</p>
            }
            {
                props.country && <p>Country : {props.country}</p>
            }
            {
                props.humidity && <p>Humidity : {props.humidity}</p>
            }
            {
                props.description && <p>Description : {props.description}</p>
            }
            {
                props.tempreature && <p>Tempreature : {props.tempreature}</p>
            }
            {
                props.error && <p>Error : {props.error}</p>
            }
        </div>
    )
}

export default Weather