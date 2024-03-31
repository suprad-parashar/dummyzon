import Pagination from "./Pagination";
import DisplayView from "./DisplayView";

// Received Props - state, updateData, modifyCart
function MainView(props) {
	return (
		<div className="MainView">
			<h1 className="display-heading">{props.state.heading}</h1>
			{props.state.products.length === 0 && <p id="empty-message">{props.state.emptyMessage}</p>}
			{props.state.products.length !== 0 && <DisplayView state={props.state} modifyCart={props.modifyCart} changeView={props.updateData}/>}
			{props.state.products.length !== 0 && <Pagination updatePage={props.updateData} state={props.state}/>}
		</div>
	);
}

export default MainView;