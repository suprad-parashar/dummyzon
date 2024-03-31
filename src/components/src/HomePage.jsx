import "../styles/HomePage.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import MainView from "./MainView";

function HomePage() {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState({});
	const [heading, setHeading] = useState("All Products");
	const [pageNumber, setPageNumber] = useState(1);
	const [emptyMessage, setEmptyMessage] = useState("Loading...");

	async function loadProducts(category) {
		if (category === "all") {
			const response = await axios.get("https://dummyjson.com/products/");
			console.log(response.data["products"]);
			setProducts(response.data["products"]);
			setHeading("All Products");
		} else {
			const response = await axios.get(`https://dummyjson.com/products/category/${category}`);
			console.log(response.data["products"]);
			setProducts(response.data["products"]);
			const words = category.split("-");
			const capitalized = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
			const formatted = capitalized.join(" ");
			setHeading(formatted);
		}
		setPageNumber(1);
		setEmptyMessage("Loading...");
	}

	useEffect(() => {
		loadProducts("all");
	}, []);

	function searchProducts(search) {
		async function loadProducts() {
			const response = await axios.get(`https://dummyjson.com/products/search`, {
				params: {
					q: search
				}
			});
			console.log(response.data["products"]);
			setProducts(response.data["products"]);
			setHeading(`Search Results for "${search}"`);
			setPageNumber(1);
			setEmptyMessage("No products found.");
		}
		loadProducts();
	}

	return (
		<div className="HomePage">
			<Header setCategory={loadProducts} search={searchProducts} cart={cart}/>
			<MainView products={products} setCart={setCart} heading={heading} updatePage={setPageNumber} pageNumber={pageNumber} emptyMessage={emptyMessage}/>
		</div>
	);
}

export default HomePage;