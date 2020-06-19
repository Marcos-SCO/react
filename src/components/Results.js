import React from 'react'

import Result from './Result'

function Results ({ results, openPopup }) {
	return (
		<section className="results">
			{ (results != undefined) ? results.map(result => (
				<Result key={result.imdbID} result={result} openPopup={openPopup} />
			)) : <header className="content"><h1>Not found</h1></header> }
		</section>
	)
}

export default Results
