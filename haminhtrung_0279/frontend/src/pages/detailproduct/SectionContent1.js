

import React, { useEffect, useState } from "react";
import { GET_ID } from "../../api/apiService";
import { useLocation, Link } from "react-router-dom";
import { useCart } from "../../layouts/CartContext";
const cardTextStyle = {
	maxWidth: "80%",
};
const SectionContent1 = ({ onAddToCart, setCartItems, cartItems }) => {
	const [gallery, setGallery] = useState({});
	const [product, setProduct] = useState({});
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const productId = queryParams.get("productId");
	const { addToCart } = useCart();
	const [quantity, setQuantity] = useState(1);
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	// Thời gian để tự động ẩn thông báo sau khi hiển thị (ví dụ: 3 giây)
	const AUTO_HIDE_DELAY = 3000;

	// Effect để tự động ẩn thông báo sau khi hiển thị
	useEffect(() => {
		let timeout;
		if (showSuccessMessage) {
			timeout = setTimeout(() => {
				setShowSuccessMessage(false);
			}, AUTO_HIDE_DELAY);
		}
		return () => clearTimeout(timeout);
	}, [showSuccessMessage]);


	useEffect(() => {
		GET_ID(`products`, productId).then((item) => setProduct(item.data));

	}, [productId]);

	const handleAddToCart = () => {
		// Check if product is defined and has an id
		if (!product || !product.id) {
		  console.error('Product is not defined or does not have an id.');
		  return;
		}
	
		const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);
	
		if (existingItemIndex !== -1) {
		  const updatedCartItems = [...cartItems];
		  updatedCartItems[existingItemIndex].quantity += quantity;
		  setCartItems(updatedCartItems);
		  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
		} else {
		  const cartItem = {
			id: product.id,
			title: product.title,
			price: product.price,
			quantity: quantity,
			thumbnail: product.thumbnail,
		  };
	
		  setCartItems((prevCartItems) => [...prevCartItems, cartItem]);
		  localStorage.setItem('cartItems', JSON.stringify([...cartItems, cartItem]));
		}
	
		// Reset quantity to 1 after adding to cart
		setQuantity(1);
		window.location.reload();

	
		// Show success message (you can implement this as per your UI)
		alert('Thêm vào giỏ hàng thành công!');
	  };
	return (
		<section>
			<section className="py-3 bg-light">
				<div className="container">
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<a>Home</a>
						</li>
						<li className="breadcrumb-item">
							<a>{product.category && product.category.name}</a>
						</li>
						<li class="breadcrumb-item active" aria-current="page">
							{product.title}
						</li>
					</ol>
				</div>
			</section>
			<section class="section-content bg-white padding-y">
				<div class="container">
					<div class="row">
						<aside class="col-md-6">
							<div class="card">
								<article class="gallery-wrap">
									<div class="img-big-wrap">
										<div>
											<a href="#">
												<img src={`./images/items/${product.thumbnail}`} />
											</a>
										</div>
									</div>
									<div class="thumbs-wrap">
										<a href="#" class="item-thumb">
											<img src={`./images/items/${product.thumbnail1}`} />
										</a>
										<a href="#" class="item-thumb">
											<img src={`./images/items/${product.thumbnail2}`} />
										</a>
										<a href="#" class="item-thumb">
											<img src={`./images/items/${product.thumbnail3}`} />
										</a>
										<a href="#" class="item-thumb">
											<img src={`./images/items/${product.thumbnail4}`} />
										</a>
									</div>
								</article>
							</div>
						</aside>
						<main class="col-md-6">
							<article class="product-info-aside">
								<h2 class="title mt-3">{product.title} </h2>
								<div class="rating-wrap my-3">
									<ul class="rating-stars">
										<li style={cardTextStyle} class="stars-active">
											<i class="fa fa-star"></i> <i class="fa fa-star"></i>
											<i class="fa fa-star"></i> <i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
										</li>
										<li>
											<i class="fa fa-star"></i> <i class="fa fa-star"></i>
											<i class="fa fa-star"></i> <i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
										</li>
									</ul>
									<small class="label-rating text-muted">132 reviews</small>
									<small class="label-rating text-success">
										<i class="fa fa-clipboard-check"></i> 154 orders{" "}
									</small>
								</div>
								<div class="mb-3">
									<h5 class="title mt-3 text-danger">{product.price}đ </h5>
									{/* <span class="text-muted">USD 562.65 incl. VAT</span> */}
								</div>
								<p>
									{product.description}{" "}

								</p>
								<dl class="row">
									<dt class="col-sm-3">Nhà sản xuất</dt>
									<dd class="col-sm-9">
										<a href="#">1Four</a>
									</dd>
									<dt class="col-sm-3">Bảo hành</dt>
									<dd class="col-sm-9">24 tháng</dd>
									<dt class="col-sm-3">Thời gian nhận hàng:</dt>
									<dd class="col-sm-9">3-4 ngày</dd>
									<dt class="col-sm-3">Tình trạng</dt>
									<dd class="col-sm-9">Còn hàng</dd>
								</dl>
								<div class="form-row mt-4">

									<div class="form-group col-md">

										<input class="btn  btn-warning "
											type="number"
											value={quantity}
											onChange={(e) => setQuantity(e.target.value)}
										/>
										<button class="fas fa-shopping-cart btn  btn-warning" onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
									</div>
								</div>
								{/* Hiển thị thông báo thành công */}
								{showSuccessMessage && (
									<div className="alert alert-danger mt-3" role="alert">
										Thêm vào giỏ hàng thành công!
									</div>
								)}
							</article>
						</main>
					</div>
				</div>
			</section>
		</section>
	);
};
export default SectionContent1;
