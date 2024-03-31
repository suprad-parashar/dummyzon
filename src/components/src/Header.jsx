import "../styles/Header.css";
import { useState, useEffect } from "react";
import axios from "axios";
import DropDownMenu from "./DropDownMenu";
import Search from "./Search";

//Received Props - state, updateData
function Header(props) {
	const [categories, setCategories] = useState([]);
	
	useEffect(() => {
		async function loadCategories() {
			const response = await axios.get("https://dummyjson.com/products/categories/");
			const sortedCategories = response.data.sort();
			setCategories(sortedCategories);
		}
		loadCategories();
	}, []);

	return (
		<header className="Header">
			<h1 id="logo" onClick={() => props.updateData("all")}>Dummyzon</h1>
			<DropDownMenu categories={categories} renderCategory={props.updateData}/>
			<Search onSearch={props.updateData}/>
			<div id="cart-div" onClick={() => props.updateData("view", -2)}>
				<img src="/cart-logo.svg" alt="Cart" id="cart"/>
				{Object.keys(props.state.cart).length !== 0 && <span>{Object.keys(props.state.cart).length}</span>}
			</div>
		</header>
	);
}

export default Header;