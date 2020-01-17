import React from "react";

const Weather = props => (
	<div className="weather__info">
		{ props.icon &&
			<img src={props.icon} alt=""/>
		}
		{ props.city && props.country && 
			<p className="weather__key">  
				<span className="weather__value up"> { props.city }, { props.country }</span>
			</p> }
		{ props.description && 
			<p className="weather__key">
				<span className="weather__value"> { props.description }</span>
			</p> }
		{ props.temperature && 
			<p className="weather__key">
				<span className="weather__value"> { props.temperature } °F</span>
			</p> }
		{ props.humidity && 
			<p className="weather__key">Humidity: 
				<span className="weather__value"> { props.humidity }%</span>
			</p> }
		{ props.wind && 
			<p className="weather__key">Wind Speed:
				<span className="weather__value"> { props.wind } mph</span>
			</p> }
		{ props.error && 
			<p className="weather__error">
				<span className="error"> { props.error }</span>
			</p> }
	</div>
);

export default Weather;