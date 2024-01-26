import React, { useEffect, useState } from "react";
import { GET_ALL } from "../api/apiService";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo2.png'
import Search from "../pages/search/Search";

function Header() {
    const handleLogout = () => {
        localStorage.removeItem("fullname");
        window.location.reload();
      };

    const fullname = localStorage.getItem("fullname");
	const [cartItemCount, setCartItemCount] = useState(0);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        GET_ALL(`categories`).then((item) => setCategories(item.data));

        const storedCartItems = localStorage.getItem('cartItems');
        const parsedCartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
        const totalQuantity = new Set(parsedCartItems.map(item => item.id)).size;
        setCartItemCount(totalQuantity);
    }, []);

    return (
        <header className="section-header">
            <section className="header-main border-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-3 col-md-12">
                            <a href="/" className="brand-wrap">
                                <img style={{ width: "80%" }} className="logo" src={logo} alt="Logo" />
                            </a>
                        </div>
                        <Search />

                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="widgets-wrap float-md-right">
                            {fullname ? (
                                <div className="widget-header mr-3">
                                    <button onClick={handleLogout}>
                                        <a href="/profile-main" className="widget-view">
                                            <div className="icon-area">
                                                <i className="fas fa-sign-out-alt"></i>
                                            </div>
                                        <small className="text">{fullname}</small>

                                        </a>
                                    </button>
                                </div>
                                  ) : (
                                <div className="widget-header mr-3">
                                    <a href="/login" className="widget-view">
                                        <div className="icon-area">
                                            <i className="fa fa-user"></i>
                                            <span className="notify">{cartItemCount}</span>                                            
                                        </div>

                                    </a>
                                </div>
                                 )}
                                <div className="widget-header mr-3">
                                    <a href="/profile-order" className="widget-view">
                                        <div className="icon-area">
                                            <i className="fa fa-store"></i>
                                        </div>
                                    </a>
                                </div>
                                <div className="widget-header">
                                    <a href="shopping-cart" className="widget-view">
                                        <div className="icon-area">
											<span className="notify">{cartItemCount}</span>
                                            <i className="fa fa-shopping-cart"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <nav className="navbar navbar-main navbar-expand-lg border-bottom">
                <div className="container bg-danger">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="main_nav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/">TRANG CHỦ</a>
                            </li>
                            <a className="nav-link text-white" href="/introduce">Giới thiệu</a>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle text-white"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    SẢN PHẨM
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {categories.length > 0 &&
                                        categories.map((row) => (
                                            <a
                                                className="dropdown-item"
                                                href={`/listing-grid?page=${row.id}&categoryId=${row.id}`}
                                                key={row.id}
                                            >
                                                {row.name}
                                            </a>
                                        ))}
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/listing-grid">
                                        Tất cả sản phẩm
                                    </a>
                                </div>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-white" href="/tuyendung">Tuyển dụng</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/lien-he">Liên hệ</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-md-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="http://example.com" data-toggle="dropdown">English</a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="#">VietNam</a>
                                    <a className="dropdown-item" href="#">French</a>
                                    <a className="dropdown-item" href="#">Spanish</a>
                                    <a className="dropdown-item" href="#">Chinese</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
