import React from "react";

const Form = props => (
        <form onSubmit={props.getWeather}>
                City / Zipcode
                <input type="text" 
                name="city" 
                placeholder="10001, sydney, Seoul" /> <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Country
                <input type="text" 
                name="country" 
                placeholder="us, Austral, KR" />
        <br />
                <button>Submit</button>
        </form>
);

export default Form;