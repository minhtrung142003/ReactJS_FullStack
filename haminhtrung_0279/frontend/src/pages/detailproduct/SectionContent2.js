import React from "react";
const SectionContent2 = () => (
<section class="section-name padding-y bg">
<div class="container">

<div class="row">
	<div class="col-md-8">
		<h5 class="title-description">Mô tả</h5>
		<p>
		Thiết kế đầy cá tính, mang phong cách của E-Blue với các điểm nhấn màu xanh cực kỳ hiện đại

- Đế chống của bàn phím có thể tuỳ chỉnh cao thấp, thích hợp cho các địa hình bề mặt khác nhau

- Hệ thống đèn led cực sáng

- Các dải nút di chuyển được thiết kế tông màu nóng, giúp bạn dễ dàng xác định và thao tác nhanh
		</p>
		<ul class="list-check">
		<li>Material: Stainless steel</li>
		<li>Weight: 82kg</li>
		<li>built-in drip tray</li>
		<li>Open base for pots and pans</li>
		<li>On request available in propane execution</li>
		</ul>

		<h5 class="title-description">
Thông số kỹ thuật</h5>
		<table class="table table-bordered">
			<tr> <th colspan="2">thông số kỹ thuật cơ bản</th> </tr>
			<tr> <td>Giao diện</td><td>USB 2.0</td> </tr>
			<tr> <td>Số lượng phím</td><td>104 - có 8 phím mầu xanh thay thế</td> </tr>
			<tr> <td>Cáp bàn phím dài	</td> <td> <i class="fa fa-check text-success"></i> 1.65M </td></tr>
			<tr> <td>Switch Life</td><td>10 triệu lần</td> </tr>
			<tr> <td>Tương thích hệ điều hành</td><td>Windows 98 / 2000 / ME / NT / XP / win 7</td> </tr>
			<tr> <td>Màu sắc</td><td> màu đen (EKM075BK)</td> </tr>

		</table>
	</div> 
	
	<aside class="col-md-4">

		<div class="box">
		
		{/* <h5 class="title-description">Files</h5>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p> */}

    <h5 class="title-description">Videos</h5>
      

    <article class="media mb-3">
      <a href="#"><img class="img-sm mr-3" src={require("../../assets/images/posts/3.jpg")}/></a>
      <div class="media-body">
        <h6 class="mt-0"><a href="#">How to use this item</a></h6>
        <p class="mb-2"> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin </p>
      </div>
    </article>

    <article class="media mb-3">
      <a href="#"><img class="img-sm mr-3" src={require("../../assets/images/posts/2.jpg")}/></a>
      <div class="media-body">
        <h6 class="mt-0"><a href="#">New tips and tricks</a></h6>
        <p class="mb-2"> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin </p>
      </div>
    </article>

    <article class="media mb-3">
      <a href="#"><img class="img-sm mr-3" src={require("../../assets/images/posts/1.jpg")}/></a>
      <div class="media-body">
        <h6 class="mt-0"><a href="#">New tips and tricks</a></h6>
        <p class="mb-2"> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin </p>
      </div>
    </article>


		
	</div> 
	</aside> 
</div> 

</div> 
</section>
);
export default SectionContent2