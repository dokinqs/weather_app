import React from "react";

const Weather = props => (
	<div className="weather__info">
		{ props.city && props.country && 
			<p className="weather__key">  
				<span className="location"> { props.city }, { props.country }</span>
			</p> }
		{ props.icon &&
			<img src={props.icon} alt=""/>
		}
		{ props.description && 
			<p className="weather__key descr">
				<span> { props.description }</span>
			</p> }
		{ props.description && props.temperature && 
			<p className="weather__key">
				<span className="temp"> { props.temperature }</span>
				<span className="temp" id="tempUnit"></span>
			</p> }
		{ props.humidity && 
			<p className="weather__key">Humidity: 
				<span> { props.humidity }%</span>
			</p> }
		{ props.wind && 
			<p className="weather__key">Wind:
				<span className=""> { props.wind } mph</span>
			</p> }
		{ props.error && 
			<p className="weather__error">
				<span className="error"> { props.error }</span>
			</p> }
	</div>
);

export default Weather;