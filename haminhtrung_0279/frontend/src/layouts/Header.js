import React, { useEffect, useState } from "react";
import { GET_ALL } from "../api/apiService";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo2.png'
function Header() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
    GET_ALL(`categories`).then((item) => setCategories(item.data));
    }, []);
        return (
            <header class="section-header">
            <section class="header-main border-bottom">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-2 col-lg-3 col-md-12">
                            <a href="/" className="brand-wrap">
                                <img style={{width:"80%"}} class="logo" src={logo}/>
                            </a> 
                        </div>
                        <div class="col-xl-6 col-lg-5 col-md-6">
                            <form action="#" class="search-header">
                                <div class="input-group w-100">
                                    <select class="custom-select border-right"  name="category_name">
                                            <option value="">Tất cả</option><option value="codex">Special</option>
                                            <option value="comments">Only best</option>
                                            <option value="content">Latest</option>
                                    </select>
                                    <input type="text" class="form-control" placeholder="Search"/>
                                    
                                    <div class="input-group-append">
                                      <button class="btn btn-danger" type="submit">
                                        <i class="fa fa-search"></i> Tìm kiếm
                                      </button>
                                    </div>
                                </div>
                            </form> 
                        </div> 
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="widgets-wrap float-md-right">
                                <div class="widget-header mr-3">
                                    <a href="/profile-main" class="widget-view">
                                        <div class="icon-area">
                                            <i class="fa fa-user"></i>
                                            <span class="notify">3</span>
                                        </div>
                                        <small class="text"> My profile </small>
                                    </a>
                                </div>
                                <div class="widget-header mr-3">
                                    <a href="/login" class="widget-view">
                                        <div class="icon-area">
                                      <i class="fa-solid fa-arrow-right"></i>
                                       
                                            <span class="notify">1</span>
                                        </div>
                                        <small class="text"> Login </small>
                                    </a>
                                </div>
                                <div class="widget-header mr-3">
                                    <a href="/register" class="widget-view">
                                        <div class="icon-area">
                                        <i class="fa-regular fa-cash-register"></i>
                                            <span class="notify">1</span>
                                        </div>
                                        <small class="text"> Register </small>
                                    </a>
                                </div>
                                <div class="widget-header mr-3">
                                    <a href="/profile-order" class="widget-view">
                                        <div class="icon-area">
                                            <i class="fa fa-store"></i>
                                        </div>
                                        <small class="text"> Orders </small>
                                    </a>
                                </div>
                                <div class="widget-header">
                                    <a href="shopping-cart" class="widget-view">
                                        <div class="icon-area">
                                            <i class="fa fa-shopping-cart"></i>
                                        </div>
                                        <small class="text"> Cart </small>
                                    </a>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div> 
            </section> 
            
            
            
            <nav class="navbar navbar-main navbar-expand-lg border-bottom  ">
            <div class="container bg-danger">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            
                <div class="collapse navbar-collapse  " id="main_nav">
                <ul class="navbar-nav   ">
                <li class="nav-item  ">
                        <a class="nav-link text-white" href="/">TRANG CHỦ</a>
                    </li>
                    <a class="nav-link  text-white" href="/introduce">Giới thiệu</a>

                        <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle text-white"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                        SẢN PHẨM 
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        {categories.length >
                        0 &&
                        categories.map((row) => (
                        <a
                        className="dropdown-item"
                        href={`/listing-grid?page=${row.id}&categoryId=${row.id}`}
                        >
                        {row.name}
                        </a>    
                        ))}
                        <div className="dropdown-divider"></div>
                        <a class="dropdown-item" href="/listing-grid">
                        Tất cả sản phẩm
                        </a>
                        </div>
                        </li>
                    
                    {/* <li class="nav-item">
                    <a class="nav-link  text-white" href="#">Tin tức</a>
                    </li> */}
                    <li class="nav-item">
                    <a class="nav-link  text-white" href="/tuyendung">Tuyển dụng</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link  text-white" href="/lien-he">Liên hệ</a>
                    </li>
                </ul>
                <ul class="navbar-nav ml-md-auto">
                        {/* <li class="nav-item">
                        <a class="nav-link" href="#">Get the app</a>
                    </li> */}
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="http://example.com" data-toggle="dropdown">English</a>
                        <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="#">VietNam</a>
                        <a class="dropdown-item" href="#">French</a>
                        <a class="dropdown-item" href="#">Spanish</a>
                        <a class="dropdown-item" href="#">Chinese</a>
                        </div>
                    </li>
                    </ul>
                </div> 
            </div> 
            </nav>
            
            </header> 
        );
    }
export default Header