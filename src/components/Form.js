import React from "react";

const Form = props => (
        <form onSubmit={props.getWeather}>
                City <input type="text" 
                                name="city" 
                                placeholder="Sydney, Seoul" /> 
                <br />
                Country <input type="text" 
                                name="country" 
                                placeholder="Australia, KR" />
                <br />
                <button>Submit</button>
        </form>
);

export default Form;