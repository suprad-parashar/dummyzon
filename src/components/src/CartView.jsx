import "../styles/CartView.css";
import CartControls from "./CartControls";

//Received Props - state, modifyCart, updateData
function CartView(props) {
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
								<h2 id="title" onClick={() => props.updateData("view", product.id)}>{product.title}</h2>
								<p id="quantity">Quantity: {product.quantity}</p>
								<CartControls product={product} modifyCart={props.modifyCart} state={props.state}/>
							</div>
							<p className="total-price">${(product.price * product.quantity).toFixed(2)}</p>
						</div>
					))}
				</div>
			) : <h1 id="empty-cart">Your cart is empty!</h1>}
		</div>
	)
}

export default CartView;