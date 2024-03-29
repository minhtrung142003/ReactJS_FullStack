import React from "react";
const ContentAddress = () => {
    const handleLogout = () => {
        // Xóa thông tin người dùng khỏi local storage khi đăng xuất
        localStorage.removeItem("fullname");
        window.location.reload();
        // Thực hiện các bước đăng xuất khác (nếu có)
      };
    return(
<section class="section-content padding-y">
	<div class="container">
	<h2 class="title-page">My account</h2>
	<div class="row">
		<aside class="col-md-3">
			<nav class="list-group">
				<a class="list-group-item" href="page-profile-main.html"> Account overview  </a>
				<a class="list-group-item active" href="page-profile-address.html"> My Address </a>
				<a class="list-group-item" href="page-profile-orders.html"> My Orders </a>
				<a class="list-group-item" href="page-profile-wishlist.html"> My wishlist </a>
				<a class="list-group-item" href="page-profile-seller.html"> My Selling Items </a>
				<a class="list-group-item" href="page-profile-setting.html"> Settings </a>
				<button onClick={handleLogout}> Log out</button>
			</nav>
		</aside> 
		<main class="col-md-9">

		<a href="#" class="btn btn-light mb-3"> <i class="fa fa-plus"></i> Add new address </a>

        <div class="row">
            <div class="col-md-6">
                <article class="box mb-4">
                    <h6>London, United Kingdom</h6>
                    <p>Building: Nestone <br/> Floor: 22, Aprt: 12  </p>
                    <a href="#" class="btn btn-light disabled"> <i class="fa fa-check"></i> Default</a> <a href="#" class="btn btn-light"> <i class="fa fa-pen"></i> </a>   <a href="#" class="btn btn-light"> <i class="text-danger fa fa-trash"></i>  </a>
                </article>
            </div>  
            <div class="col-md-6">
                <article class="box mb-4">
                    <h6>Tashkent, Uzbekistan</h6>
                    <p>Building one <br/> Floor: 2, Aprt: 32  </p>
                    <a href="#" class="btn btn-light">Make default</a> <a href="#" class="btn btn-light"> <i class="fa fa-pen"></i> </a>   <a href="#" class="btn btn-light"> <i class="text-danger fa fa-trash"></i>  </a>
                </article>
            </div>  
            <div class="col-md-6">
                <article class="box mb-4">
                    <h6>Moscow, Russia</h6>
                    <p>Lenin street <br/> Building A, Floor: 3, Aprt: 32  </p>
                    <a href="#" class="btn btn-light">Make default</a> <a href="#" class="btn btn-light"> <i class="fa fa-pen"></i> </a>   <a href="#" class="btn btn-light"> <i class="text-danger fa fa-trash"></i>  </a>
                </article>
            </div>  
        </div> 

	</main> 
</div>

</div> 
</section>
);
    };
export default ContentAddress