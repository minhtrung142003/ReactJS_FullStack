import React from "react";
const ContentSeller = () => (
<section class="section-content padding-y">
<div class="container">
<h2 class="title-page">My account</h2>

<div class="row">
	<aside class="col-md-3">
		<nav class="list-group">
			<a class="list-group-item" href="page-profile-main.html"> Account overview  </a>
			<a class="list-group-item" href="page-profile-address.html"> My Address </a>
			<a class="list-group-item" href="page-profile-orders.html"> My Orders </a>
			<a class="list-group-item" href="page-profile-wishlist.html"> My wishlist </a>
			<a class="list-group-item active" href="page-profile-seller.html"> My Selling Items </a>
			<a class="list-group-item" href="page-profile-setting.html"> Settings </a>
			<a class="list-group-item" href="page-index-1.html"> Log out </a>
		</nav>
	</aside> 
	<main class="col-md-9">

		<article class="card">
			<div class="card-body">

		<div class="row">
				<div class="col-md-4">
					<figure class="card card-product-grid">
						<div class="img-wrap"> 
							<img src={require("../../assets/images/items/1.jpg")}/>
						</div> 
						<figcaption class="info-wrap">
								<a href="#" class="title mb-2">Hot sale unisex New Design Shirt for sport polo shirts latest design</a>
								<div class="price-wrap mb-3">
									<span class="price">$32.00-$40.00</span> 
									<small class="text-muted">/per item</small>
								</div>
								<a href="#" class="btn btn-outline-primary"> <i class="fa fa-pen"></i> Edit </a>
								<a href="#" class="btn btn-primary"> <i class="fa fa-eye"></i> View  </a>
								
								<hr/>
								<a href="#" class="btn btn-success btn-block">  Promote </a>
						</figcaption>
					</figure>
				</div> 

				<div class="col-md-4">
					<figure class="card card-product-grid">
						<div class="img-wrap"> 
							<img src={require("../../assets/images/items/2.jpg")}/>
						</div> 
						<figcaption class="info-wrap">
								<a href="#" class="title mb-2">High Quality Winter PU Rain Jacket with Padding for Men's outdoor</a>
								<div class="price-wrap mb-3">
									<span class="price">$41.00-$50.00</span> 
									<small class="text-muted">/per item</small>
								</div>
								<a href="#" class="btn btn-outline-primary"> <i class="fa fa-pen"></i> Edit </a>
								<a href="#" class="btn btn-primary"> <i class="fa fa-eye"></i> View  </a>
								
								<hr/>
								<a href="#" class="btn btn-success btn-block">  Promote </a>
						</figcaption>
					</figure>
				</div> 

				<div class="col-md-4">
					<figure class="card card-product-grid">
						<div class="img-wrap"> 
							<img src={require("../../assets/images/items/1.jpg")}/>
						</div> 
						<figcaption class="info-wrap">
								<a href="#" class="title mb-2">Cheap and Best demo clothe with latest Fashion styles for Men</a>
								<div class="price-wrap mb-3">
									<span class="price">$32.00-$40.00</span> 
									<small class="text-muted">/per item</small>
								</div>
								<a href="#" class="btn btn-outline-primary"> <i class="fa fa-pen"></i> Edit </a>
								<a href="#" class="btn btn-primary"> <i class="fa fa-eye"></i> View  </a>
								
								<hr/>
								<a href="#" class="btn btn-success btn-block">  Promote </a>
						</figcaption>
					</figure>
				</div> 

				<div class="col-md-4">
					<figure class="card card-product-grid">
						<div class="img-wrap"> 
							<img src={require("../../assets/images/items/4.jpg")}/>
						</div> 
						<figcaption class="info-wrap">
								<a href="#" class="title mb-2">Cheap and Best demo clothe with latest Fashion styles for Men</a>
								<div class="price-wrap mb-3">
									<span class="price">$32.00-$40.00</span> 
									<small class="text-muted">/per item</small>
								</div>
								<a href="#" class="btn btn-outline-primary"> <i class="fa fa-pen"></i> Edit </a>
								<a href="#" class="btn btn-primary"> <i class="fa fa-eye"></i> View  </a>
								
								<hr/>
								<a href="#" class="btn btn-success btn-block">  Promote </a>
						</figcaption>
					</figure>
				</div> 

				<div class="col-md-4">
					<figure class="card card-product-grid">
						<div class="img-wrap"> 
							<img src={require("../../assets/images/items/5.jpg")}/>
						</div> 
						<figcaption class="info-wrap">
								<a href="#" class="title mb-2">Cheap and Best demo clothe with latest Fashion styles for Men</a>
								<div class="price-wrap mb-3">
									<span class="price">$32.00-$40.00</span> 
									<small class="text-muted">/per item</small>
								</div>
								<a href="#" class="btn btn-outline-primary"> <i class="fa fa-pen"></i> Edit </a>
								<a href="#" class="btn btn-primary"> <i class="fa fa-eye"></i> View  </a>
								
								<hr/>
								<a href="#" class="btn btn-success btn-block">  Promote </a>
						</figcaption>
					</figure>
				</div> 

			</div> 

			</div> 
		</article>


	</main> 
</div>

</div> 
</section>
);
export default ContentSeller