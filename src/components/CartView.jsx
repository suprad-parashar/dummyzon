import CartControls from "./CartControls";
import { fixTitle } from "../utils/modifier";

//Received Props - state, modifyCart, updateData
function CartView(props) {

	const total = Object.values(props.state.cart).reduce((acc, product) => acc + (product.price * product.quantity), 0);

	return (
		<div className="CartView">
			<button className="back-button" onClick={() => props.updateData("view", -1)}>Back</button>
			<h1>Cart</h1>
			{Object.keys(props.state.cart).length !== 0 ? (
				<div id="cart-view">
					{Object.values(props.state.cart).map((product) => (
						<div key={product.id} className="product-list-view">
							<img src={product.thumbnail} alt={product.title} className="product-cart-image" onClick={() => props.updateData("view", product.id)}/>
							<div className="cart-main-control">
								<h2 id="title" onClick={() => props.updateData("view", product.id)}>{fixTitle(product.title)}</h2>
								<p id="quantity">Quantity: {product.quantity}</p>
								<CartControls product={product} modifyCart={props.modifyCart} state={props.state}/>
							</div>
							<div className="cart-total-price">
								<p className="unit-price">Unit Price: ${product.price.toFixed(2)}</p>
								<p className="total-price">${(product.price * product.quantity).toFixed(2)}</p>
							</div>
						</div>
					))}
					<div id="cart-total">
						<button id="clear-cart" onClick={() => props.updateData("cart", {})}>Clear Cart</button>
						<h2>Total: ${total.toFixed(2)}</h2>
					</div>
				</div>
			) : <h1 id="empty-cart">Your cart is empty!</h1>}

		</div>
	)
}

export default CartView;