import React from "react";

const Weather = props => (
	<div className="weather__info">
		<br />
		{ props.city && props.country && 
			<p className="weather__key">  
				<span className="weather__value up"> { props.city }, { props.country }</span>
			</p> }
		{ props.icon &&
			<img src={props.icon} alt=""/>
		}
		{ props.temperature && 
			<p className="weather__key"> Temp:
				<span className="weather__value"> { props.temperature } °F</span>
			</p> }
		{ props.humidity && 
			<p className="weather__key">Humidity: 
				<span className="weather__value"> { props.humidity }%</span>
			</p> }
		{ props.description && 
			<p className="weather__key">Conditions: 
				<span className="weather__value"> { props.description }</span>
			</p> }
		{ props.wind && 
			<p className="weather__key">Wind Speed:
				<span className="weather__value"> { props.wind } mph</span>
			</p> }
		{ props.error && 
			<p className="weather__error">
				<span className="error"> { props.error }</span>
			</p> }
		<br />
	</div>
);

export default Weather;