import "../styles/ProductCard.css";
import CartControls from "./CartControls";

// Received Props - product, modifyCart, state, changeView
function ProductCard(props) {
	let { product } = props;

	return (
		<div className="ProductCard">
			<img src={product.thumbnail} alt={product.title} onClick={() => props.changeView("view", product.id)} />
			<div className="product-details">
				<h1 id="title" onClick={() => props.changeView("view", product.id)}>{product.title}</h1>
				<p id="rating">{product.rating} ★</p>
				<p id="description">{product.description}</p>
				<div className="product-price-div">
					<p id="old-price">${Math.round((product.price * 100) / (100 - product.discountPercentage))}</p>
					<div className="product-pricing">
						<p id="price">${product.price}</p>
						<p id="discount">({product.discountPercentage}% off)</p>
					</div>
				</div>
			</div>
			<CartControls product={product} modifyCart={props.modifyCart} state={props.state}/>
		</div>
	);
}

export default ProductCard;