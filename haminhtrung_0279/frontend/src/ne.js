import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import imglogo from '../assets/logo.png';
import SearchResults from './SearchResults';
import axios from 'axios';
import { useAuth } from './AuthContext';
import '@fortawesome/fontawesome-free/css/all.css';
function ne() {
	const [cartItemCount, setCartItemCount] = useState(0);
	const [searchQuery, setSearchQuery] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const [isDropdownOpen, setDropdownOpen] = useState(false);
	const [loading, setLoading] = useState(true);
	const { user, logout } = useAuth();
	const [currentPage, setCurrentPage] = useState(1);
	const navigate = useNavigate();
	useEffect(() => {
		console.log('User data:', user);
		const fetchData = async () => {
			try {
				// Fetch cart items
				const storedCartItems = localStorage.getItem('cartItems');
				const parsedCartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
				const totalQuantity = new Set(parsedCartItems.map(item => item.id)).size;
				setCartItemCount(totalQuantity);

				// Fetch user details if authenticated
				if (user) {
					const response = await axios.get('http://localhost:8080/api/users', {
						headers: {
							Authorization: `Bearer ${user.token}`,
						},
					});

					console.log('API Response:', response.data);

					// Assuming the API response contains the `fullname` property
					const { fullname } = response.data;
					// Set additional user details if needed

					setLoading(false);
				}
			} catch (error) {
				console.error('Error fetching user details:', error);
				setLoading(false);
			}
		};

		fetchData();
	}, [user]);

	const handleSearchChange = async (event) => {
		try {
		  setSearchQuery(event.target.value);
		  if (!event.target.value.trim()) {
			setSearchResults([]);
			setDropdownOpen(false);
		  } else {
			const nextPage = 1;
	  
			const productResponse = await axios.get('http://localhost:8080/api/products', {
			  params: {
				page: nextPage - 1,
				size: 10,
				title: event.target.value,
			  },
			});
	  
			const products = productResponse.data;
			setSearchResults(products.filter((item) => item.title?.toLowerCase().includes(event.target.value.toLowerCase())));
			setDropdownOpen(true);
	  
			// Use the useNavigate hook to navigate to the ListingGrid page with the search query
			navigate(`/listinggrid?page=1&categoryId=null&search=${event.target.value}`);
		  }
		} catch (error) {
		  console.error('Error during search:', error);
		}
	  };
	  
	  const handleProductClick = () => {
		// Close the dropdown when a product is clicked
		setDropdownOpen(false);
	  };
	

	const handleLoadMore = async () => {
		try {
		  const nextPage = currentPage + 1;
	  
		  const productResponse = await axios.get('http://localhost:8080/api/products', {
			params: {
			  page: nextPage-1,
			  size: 10,
			  title: searchQuery,
			},
		  });
	  
		  const newProducts = productResponse.data;
	  
		  setSearchResults((prevResults) => [...prevResults, ...newProducts]);
		  setCurrentPage(nextPage);
		} catch (error) {
		  console.error('Error loading more:', error);
		}
	  };
	  

	return (
		<header class="section-header">
			<section class="header-main ">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-xl-2 col-lg-3 col-md-12">
							<a href="http://localhost:3000/" class="brand-wrap">
								<img class="logo" src={imglogo} />
							</a>
						</div>
						<div class="col-xl-6 col-lg-5 col-md-6">
							<form className="search-header" >
								<div className="input-group w-100">
									<input
										type="text"
										className="form-control"
										placeholder="Search"
										value={searchQuery}
										onChange={handleSearchChange}
									/>
									<div className="input-group-append">
										<button className="btn btn-dark" type="submit">
											<i className="fa fa-search"></i> Search
										</button>
									</div>
								</div>
							</form>
							{isDropdownOpen && (
								<div
									style={{
										position: 'absolute',
										top: '100%',
										left: 0,
										zIndex: 100,
										backgroundColor: 'white',
										border: '1px solid #ccc',
										borderRadius: '8px',
										overflow: 'hidden',
										boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
									}}
								>
									<SearchResults results={searchResults} onLoadMore={handleLoadMore} onProductClick={handleProductClick} />
								</div>
							)}

						</div>

						<div class="col-xl-4 col-lg-4 col-md-6">
							<div class="widgets-wrap float-md-right">
								<div className="widget-header mr-3">
									{loading ? (
										<Link to="/register" className="widget-view">
											<div className="icon-area">
												<i className="fa fa-user"></i>
												<span className="notify">3</span>
											</div>
											<small className="text">My profile</small>
										</Link>
									) : (
										<>
											{user ? (
												<>
													{/* <i class="fa-solid fa-right-from-bracket" style={{color: '#969696'}}></i>
													<button className="btn btn-link" onClick={() => logout()}>
														Logout
													</button> */}
													<Link to="" className="btn btn-link" onClick={() => logout()}>
														<div className="icon-area">
															<i className="fa-solid fa-right-from-bracket" style={{ color: '#969696' }}></i>
															<span className="notify">3</span>
														</div>
														<small className="text">Logout</small>
													</Link>

													<Link to="/" className="btn btn-link">
														<div className="icon-area">
															<i className="fa fa-user"></i>
															<span className="notify">3</span>
														</div>
														<small className="text">{user.fullname}</small>
													</Link>
												</>
											) : (
												<Link to="/register" className="widget-view">
													<div className="icon-area">
														<i className="fa fa-user"></i>
														<span className="notify">3</span>
													</div>
													<small className="text">My profile</small>
												</Link>
											)}
										</>
									)}
								</div>


								<div class="widget-header mr-3">
									<a href="http://localhost:3000/sign-in" class="widget-view">
										<div class="icon-area">
											<i class="fa fa-comment-dots"></i>
											<span class="notify">1</span>
										</div>
										<small class="text"> Message </small>
									</a>
								</div>
								<div class="widget-header mr-3">
									<Link to={`/orders`} class="widget-view">
										<div class="icon-area">
											<i class="fa fa-store"></i>
										</div>
										<small class="text"> Orders </small>
									</Link>
								</div>
								<div class="widget-header">
									<Link to={`/shopping-cart`} class="widget-view">
										<div class="icon-area">
											<span class="notify">{cartItemCount}</span>
											<i class="fa fa-shopping-cart"></i>
										</div>
										<small class="text"> Cart </small>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


			<nav class="navbar navbar-main navbar-expand-lg d-flex justify-content-center">
				<div class=" ">
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse " id="main_nav">
						<ul class="navbar-nav">
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#"> <i class="fa fa-bars text-muted mr-2"></i> Demo pages </a>
								<div class="dropdown-menu dropdown-large">
									<nav class="row">
										<div class="col-6">
											<a href="page-index-1.html">Home page 1</a>
											<a href="page-index-2.html">Home page 2</a>
											<a href="page-category.html">All category</a>
											<a href="page-listing-large.html">Listing list</a>
											<a href="page-listing-grid.html">Listing grid</a>
											<a href="page-shopping-cart.html">Shopping cart</a>
											<a href="page-detail-product.html">Product detail</a>
											<a href="page-content.html">Page content</a>
											<a href="page-user-login.html">Page login</a>
											<a href="page-user-register.html">Page register</a>
										</div>
										<div class="col-6">
											<a href="page-profile-main.html">Profile main</a>
											<a href="page-profile-orders.html">Profile orders</a>
											<a href="page-profile-seller.html">Profile seller</a>
											<a href="page-profile-wishlist.html">Profile wishlist</a>
											<a href="page-profile-setting.html">Profile setting</a>
											<a href="page-profile-address.html">Profile address</a>
											<a href="rtl-page-index-1.html">RTL home page</a>
											<a href="page-components.html" target="_blank">More components</a>
										</div>
									</nav>
								</div>
							</li>
							<li class="nav-item">
								<Link class="nav-link" to={`/category`}>Danh mục</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link" to={`/listinggrid`}>Sản phẩm</Link>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Tin tức</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Sell with us</a>
							</li><li class="nav-item">
								<a class="nav-link" href="#">Giới thiệu</a>
							</li>
						</ul>

					</div>
				</div>
			</nav>

		</header>
	);
}
// Connect the component to Redux
export default ne;