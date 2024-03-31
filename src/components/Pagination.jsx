// Received Props - state, updatePage
function Pagination(props) {
	const recordsPerPage = 8;
	const pages = Math.ceil(props.state.products.length / recordsPerPage);
	return (
		<div id="pagination">
			<button onClick={() => props.updatePage("page", props.state.pageNumber - 1)} disabled={props.state.pageNumber === 1}>Previous</button>
			<p>Page {props.state.pageNumber} of {pages}</p>
			<button onClick={() => props.updatePage("page", props.state.pageNumber + 1)} disabled={props.state.pageNumber === pages}>Next</button>
		</div>
	);
}

export default Pagination;