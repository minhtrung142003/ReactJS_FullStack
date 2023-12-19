import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { GET_PAGE, GET_ID } from "../../api/apiService";

const ContentGrid = () => {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const numItems = 8;
	const navigate = useNavigate();
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const currentPage = parseInt(queryParams.get("page")) || 1;
	let categoryId = queryParams.get("categoryId");
	const handlePageChange = (page) => {
		// Navigate to a new URL with the updated pagequeryParamseter
		navigate(`/listing-grid?page=${page}&categoryId=${categoryId}`);
	};
	const handlePrevious = () => {
		if (currentPage > 1) {
			handlePageChange(currentPage - 1);
		}
	};
	const handleNext = () => {
		if (currentPage < totalPages) {
			handlePageChange(currentPage + 1);
		}
	};
	const renderPageNumbers = () => {
		const pageNumbers = [];
		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(
				<li
					key={i}
					className={`page-item ${currentPage === i ? "active" : ""}`}
				>
					<Link
						className="page-link"
						to={`?page=${i}&categoryId=${categoryId}`}
						onClick={(event) => handlePageChange(i, event)}
					>
						{i}
					</Link>
				</li>
			);
		}
		return pageNumbers;
	};

	useEffect(() => {
		if (categoryId === "null") {
			categoryId = null;
			}
			GET_PAGE(`products`, currentPage - 1, numItems, categoryId).then(
				(response) => {
				setProducts(response.data);
				const contentRangeHeader = response.headers["content-range"];
				const [, totalItems] = contentRangeHeader.match(/\/(\d+)/);
				const calculatedTotalPages = Math.ceil(totalItems / numItems);
				setTotalPages(calculatedTotalPages);
				}
				);
				if (categoryId !== null) {
				GET_ID(`categories`, categoryId).then((item) => setCategories(item.data));
				} else {
				setCategories({ name: "Tất cả sản phẩm" });
				}
				}, [categoryId, currentPage]);
	return ( 

		<section className="section-content padding-y">
			<div className="container">
				<div className="card mb-3">
					<div className="card-body">
						<div className="row">
							<div className="col-md-2"> Bạn đang ở đây: </div>
							<nav className="col-md-8">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><a >Home</a></li>
									
									<li className="breadcrumb-item"><a>{categories.name}</a></li>
							
								</ol>
							</nav>
						</div>

						<div className="row">
							<div className="col-md-2">Filter by</div>
							<div className="col-md-10">
								<ul className="list-inline">
									<li className="list-inline-item mr-3 dropdown"><a href="/" className="dropdown-toggle" data-toggle="dropdown">   Supplier type </a>
										<div className="dropdown-menu p-3" style={{ width: "400px" }}>
											<label className="form-check">
												<input type="radio" name="myfilter" className="form-check-input" /> Good supplier
											</label>
											<label className="form-check">
												<input type="radio" name="myfilter" className="form-check-input" /> Best supplier
											</label>
											<label className="form-check">
												<input type="radio" name="myfilter" className="form-check-input" /> New supplier
											</label>
										</div>
									</li>
									<li className="list-inline-item mr-3 dropdown">
										<a href="/" className="dropdown-toggle" data-toggle="dropdown">  Country </a>
										<div className="dropdown-menu p-3">
											<label className="form-check"> 	 <input type="checkbox" className="form-check-input" /> China    </label>
											<label className="form-check">   	 <input type="checkbox" className="form-check-input" /> Japan      </label>
											<label className="form-check">    <input type="checkbox" className="form-check-input" /> VietNam  </label>
											<label className="form-check">  <input type="checkbox" className="form-check-input" /> Russia     </label>
										</div>
									</li>
									<li className="list-inline-item mr-3 dropdown">
										<a href="/" className="dropdown-toggle" data-toggle="dropdown">Feature</a>
										<div className="dropdown-menu">
											<a href="/" className="dropdown-item">Anti backterial</a>
											<a href="/" className="dropdown-item">With buttons</a>
											<a href="/" className="dropdown-item">Extra safety</a>
										</div>
									</li>
									<li className="list-inline-item mr-3"><a href="/">Color</a></li>
									<li className="list-inline-item mr-3"><a href="/">Size</a></li>
									<li className="list-inline-item mr-3">
										<div className="form-inline">
											<label className="mr-2">Price</label>
											<input className="form-control form-control-sm" placeholder="Min" type="number" />
											<span className="px-2"> - </span>
											<input className="form-control form-control-sm" placeholder="Max" type="number" />
											<button type="submit" className="btn btn-sm btn-light ml-2">Ok</button>
										</div>
									</li>
									<li className="list-inline-item mr-3">
										<label className="custom-control mt-1 custom-checkbox">
											<input type="checkbox" className="custom-control-input" />
											<div className="custom-control-label">Ready to ship
											</div>
										</label>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<header className="mb-3">
				<div className="form-inline">
				<strong className="mr-md-auto">Kết quả tiềm kiếm: </strong>
				<select className="mr-2 form-control">
				<option>Sản phẩm mới nhất</option>
				<option>Đang thịnh hành</option>
				<option>Phổ biến nhất</option>
				<option>Rẻ nhất</option>
				</select>
				<div className="btn-group">
				{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
				<a
					href="page-listing-grid.html"
					className="btn btn-light active"
					data-toggle="tooltip"
					title="Chế độ danh sách">
					<i className="fa fa-bars"></i>
				</a>
				{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
				<a
					href="page-listing-large.html"
					className="btn btn-light"
					data-toggle="tooltip"
					title="Chế độ lưới"
				>
					<i className="fa fa-th"></i>
				</a>
				</div>
				</div>
				</header>
{/*<!-- Tiêu đề phía trên -->*/}
	<div className="row">
		{products.length >0 &&
			products.map((row) => (
		<div className="col-md-3">
			<figure className="card card-product-grid">
		<div className="img-wrap">
			<span className="badge badge-danger"> MỚI </span>
		<img src={`./images/items/${row.thumbnail}`} />
		</div>
			{/*<!-- img-wrap.// -->*/}
			<figcaption className="info-wrap">
			{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
			<a href="#" className="title mb-2">
			{row.title}
			</a>
		<div className="price-wrap">
			<span className="price text-danger">{row.price}đ</span>
			<small className="text-muted">/mỗi sản phẩm</small>
		</div>
			{/*<!-- price-wrap.// -->*/}
			<p className="mb-2">
			2 Cái{" "}

			<small className="text-muted">(Số lượng tối thiểu)</small>
			</p>
			{/* <dl className="row">

			<dt class="col-sm-6">Tình trạng</dt>
<dd class="col-sm-9">Còn hàng</dd>
</dl> */}
			<p className="text-muted ">
			Trạng thái: Còn hàng

			</p>
			<hr />
			{/* <p className="mb-3">
			<span className="tag">
			<i className="fa fa-check"></i> Đã xác minh
			</span>
			<span className="tag"> 2 Năm </span>
			<span className="tag"> 23 đánh giá </span>
			<span className="tag"> Việt Nam </span>
			</p> */}
			<div class="form-group col-md">
<a href="#" class="btn btn-light m-1">
<span class="text">Mua ngay</span>
</a> 
<a href="#" class="btn btn-primary">
<i class="fas fa-shopping-cart"></i>{" "}
<span class="text">Thêm giỏ hàng</span>
</a>
</div>
			</figcaption>
			</figure>
			</div>
			))}
	</div>
{/*<!-- Hết dòng -->*/}
		<nav>
		<ul className="pagination">
		<li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
		<button
		className="page-link"
		onClick={handlePrevious}
		disabled={currentPage === 1}
		>
		Trang trước
		</button>
		</li>
		{renderPageNumbers()}
		<li
		className={`page-item ${
		currentPage === totalPages ? "disabled" : ""
		}`}
		>
		<button
		className="page-link"
		onClick={handleNext}
		disabled={currentPage === totalPages}
		>

		Trang sau
		</button>
		</li>
		</ul>
		</nav>
		<div className="box text-center">
		<p>Bạn đã tìm thấy điều bạn đang tìm kiếm chứ?</p>
		{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
		<a href="" className="btn btn-light">

		Có
		</a>
		{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
		<a href="" className="btn btn-light" style={{ marginLeft: "10px" }}>

		Không
		</a>
		</div>
		</div>
		{/*<!-- container .// -->*/}
</section>
	);

};
export default ContentGrid