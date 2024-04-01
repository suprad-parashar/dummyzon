import Pagination from "./Pagination";
import DisplayView from "./DisplayView";
import CarouselView from "./CarouselView";

// Received Props - state, updateData, modifyCart
function MainView(props) {

	const carousel = [];
	for (let i = 0; i < Math.min(3, props.state.products.length); i++) {
		carousel.push({
			image: props.state.products[i].thumbnail,
			title: props.state.products[i].title,
			description: props.state.products[i].description,
			id: props.state.products[i].id,
		});
	}


	return (
		<div className="MainView">
			
			{!props.state.isSearch && <CarouselView carousel={carousel} changeView={props.updateData}/>}
			{!props.state.isSearch && <div id="quick-links">
				<p onClick={() => props.updateData("all")}>All Products</p>
				<p onClick={() => props.updateData("category", "smartphones")}>Smartphones</p>
				<p onClick={() => props.updateData("category", "laptops")}>Laptops</p>
				<p onClick={() => props.updateData("category", "groceries")}>Groceries</p>
			</div>}
			<h1 className="display-heading">{props.state.heading}</h1>
			{props.state.products.length === 0 && <p id="empty-message">{props.state.emptyMessage}</p>}
			{props.state.products.length !== 0 && <DisplayView state={props.state} modifyCart={props.modifyCart} changeView={props.updateData}/>}
			{props.state.products.length !== 0 && <Pagination updatePage={props.updateData} state={props.state}/>}
		</div>
	);
}

export default MainView;