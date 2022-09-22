import React from "react";

import { Link } from "react-router-dom";
import "../assets/scss/main.css";

const Card = ({ cardDetails, countryDetails, theme }) => {
	return (
		<>
			<div className="card">
				{cardDetails.map((item) => (
					<Link
						to={{
							pathname: `${item.alpha3Code}`,
							data: countryDetails(item.alpha3Code),
							theme: { theme },
						}}
						className={theme ? "card__content" : "card__content-two"}
						key={item.name}
					>
						<div className="card__image">
							<img
								src={item.flag}
								alt={`${item.name} Flag`}
								className="card__image-img"
							/>
						</div>
						<div className={theme ? "card__details" : "card__details-two"}>
							<h2>{item.name}</h2>
							<p>Population: {item.population}</p>
							<p>Region: {item.region}</p>
							<p>Capital: {item.capital}</p>
						</div>
					</Link>
				))}
			</div>
		</>
	);
};

export default Card;
