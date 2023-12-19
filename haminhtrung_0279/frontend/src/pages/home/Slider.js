
import React from "react";
import '../../assets/js/bootstrap.bundle.min.js'
// import Banner1 from "../../assets/images/banners/slide1.jpg"
// import Banner2 from "../../assets/images/banners/slide2.jpg"
// import Banner3 from "../../assets/images/banners/slide3.jpg"
// import Item1 from "../../assets/images/items/1.jpg"
// import Item2 from "../../assets/images/items/2.jpg"
// import Item6 from "../../assets/images/items/6.jpg"



const Slider = () => (
<section class="section-main padding-y">
<main class="card">
	<div class="card-body">

<div class="row">
	<aside class="col-lg col-md-3 flex-lg-grow-0">
		<nav class="nav-home-aside">
			<h6 class="title-category">DANH MỤC SẢN PHẨM  <i class="d-md-none icon fa fa-chevron-down"></i></h6>
			<ul class="menu-category">
			<li><a href="/listing-grid?categoryId=1">Máy tính bảng</a></li>
				<li><a href="/listing-grid?page=3&categoryId=3">Máy tính xách tay</a></li>
				<li><a href="/listing-grid?page=2&categoryId=2">PC GAMING</a></li>
				<li><a href="/listing-grid?page=4&categoryId=4">Linh kiện máy tính</a></li>
				<li><a href="/listing-grid?page=5&categoryId=5">Bàn ghế Gaming</a></li>	
				{/* <li><a href="listing-large">Thiết bị nghe nhìn</a></li> */}
				{/* <li class="has-submenu"><a href="#">More items</a>
					<ul class="submenu">
						<li><a href="#">Submenu name</a></li>
						<li><a href="#">Great submenu</a></li>
						<li><a href="#">Another menu</a></li>
						<li><a href="#">Some others</a></li>
					</ul>
				</li> */}
			</ul>
		</nav>
	</aside>
	<div class="col-md-9 col-xl-7 col-lg-7">


<div id="carousel1_indicator" class="slider-home-banner carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carousel1_indicator" data-slide-to="0" class="active"></li>
    <li data-target="#carousel1_indicator" data-slide-to="1"></li>
    <li data-target="#carousel1_indicator" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={require("../../assets/images/banners/slide1.jpg")} alt="First slide"/> 
    </div>
    <div class="carousel-item">
      <img src={require("../../assets/images/banners/slide2.jpg")} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img src={require("../../assets/images/banners/slide3.jpg")} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carousel1_indicator" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel1_indicator" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> 


	</div>
	<div class="col-md d-none d-lg-block flex-grow-1">
		<aside class="special-home-right">
			<h6 class="bg-blue text-center text-white mb-0 p-2">Danh mục phổ biến</h6>
			
			<div class="card-banner border-bottom">
			  <div class="py-3" style={{ width: "80%" }}>
			    <h6 class="card-title">Sản phẩm bán chạy</h6>
			    <a href="#" class="btn btn-secondary btn-sm"> Source now </a>
			  </div> 
			  <img src={require("../../assets/images/items/1.jpg")} height="80" class="img-bg"/>
			</div>

			<div class="card-banner border-bottom">
			  <div class="py-3" style={{ width: "80%" }}>
			    <h6 class="card-title">Sản phẩm mới </h6>
			    <a href="#" class="btn btn-secondary btn-sm"> Source now </a>
			  </div> 
			  <img src={require("../../assets/images/items/2.jpg")} height="80" class="img-bg"/>
			</div>

			<div class="card-banner border-bottom">
			  <div class="py-3" style={{ width: "80%" }}>
			    <h6 class="card-title">Sản phẩm hot</h6>
			    <a href="#" class="btn btn-secondary btn-sm"> Source now </a>
			  </div> 
			  <img src={require("../../assets/images/items/6.jpg")}height="80" class="img-bg"/>
			</div>

		</aside>
	</div>
</div>

	</div> 
</main> 

</section>

);
export default Slider

