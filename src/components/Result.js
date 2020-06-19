import React from 'react'

function Result({ result, openPopup }) {
	return (
		<div className="result" onClick={() => openPopup(result.imdbID)}>
			<img src={result.Poster} alt={result.title} title={result.Title} onError={(e) => {
				e.target.src = 'https://raw.githubusercontent.com/Marcos-SCO/gordao110porcento/master/public/img/not_found/no_image.jpg'
			}} />
			<h3>{result.Title}</h3>
		</div>
	)
}

export default Result
