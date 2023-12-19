import React, { useEffect, useState } from "react";
import { GET_ALL } from "../../api/apiService";
const Electronics = (category) => {
    const { categoryName, categoryId } = category;
    const [products, setProducts] = useState([]);
    const filteredProducts = products.filter( (row) => row.category.name === categoryName );
    useEffect(() => {
     GET_ALL(`products/getlatest?categoryid=${categoryId}`).then((item) => setProducts(item.data));
}, []);
return (
    <section class="padding-bottom">
<header class="section-heading heading-line">
	<h4 class="title-section text-uppercase">{categoryName}</h4>
</header>

<div class="card card-home-category">
<div class="row no-gutters">
	<div class="col-md-3">
	
	<div class="home-category-banner bg-light-orange">
		<h5 class="title">
Các mặt hàng máy móc cho nhà sản xuất</h5>
		{/* <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> */}
		<a href="#" class="btn btn-outline-primary rounded-pill">Source now</a>
		<img src={require("../../assets/images/items/14.jpg")} class="img-bg"/>
	</div>

	</div> 
	<div class="col-md-9">
<ul class="row no-gutters bordered-cols">
{filteredProducts.length > 0 &&
filteredProducts.map((row) => (
	<li class="col-6 col-lg-3 col-md-4" key={row.id}> 
<a href="#" class="item"> 
{" "}
	<div class="card-body">
		<h6 class="title">{row.title}  </h6>
		<img src={`./images/items/${row.thumbnail}`} />{" "}
		<p class="text-muted"><i class="fa fa-map-marker-alt"></i> {row.price}</p>
	</div>
</a>
	</li>
	))}
</ul>
	</div> 
	
</div> 
</div> 
</section>
);
};
export default Electronics