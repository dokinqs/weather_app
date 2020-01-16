import React from "react";

const Form = props => (
        <form onSubmit={props.getWeather}>
                City / Zipcode <br /><input type="text" 
                                name="city" 
                                placeholder="10001, Tokyo" /> 
                <br />
                Country <br /><input type="text" 
                                name="country" 
                                placeholder="US, Japan" />
                <br />
                <button>Submit</button>
        </form>
);

export default Form;