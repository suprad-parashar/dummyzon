import ProductCard from "./ProductCard";

//Received Props - state, modifyCart, changeView
function DisplayView(props) {

	return (
		<div className="GridView">
			{props.state.products.slice((props.state.pageNumber - 1) * props.state.recordsPerPage,props.state.pageNumber * props.state.recordsPerPage).map(product => (
				<ProductCard key={product.id} product={product} modifyCart={props.modifyCart} changeView={props.changeView} state={props.state}/>
			))}
		</div>
	);
}

export default DisplayView;