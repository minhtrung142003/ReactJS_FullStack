import React from "react"
import { Routes, Route, Link} from 'react-router-dom';
import Home from "./Home"
import DetailProduct from "./DetailProduct";
import Offer from "./Offer";
import Category from "./Category";
import BlankStarter from "./BlankStarter";
import Component from "./Component";
import Content from "./Content";
import ListingGird from "./ListingGird";
import ListingLarge from "./ListingLarge";
import PayMent from "./PayMent";
import ProfileAddress from "./ProfileAddress";
import ProfileMain from "./ProfileMain";
import ProfileOrder from "./ProfileOrder";
import ProfileSeller from "./ProfileSeller";
import ProfileSetting from "./ProfileSetting";
import ProfileWishlist from "./ProfileWishlist";
import ShoppingCart from "./ShoppingCart";
import Login from "./Login";
import Register from "./Register";
import IntroduceShow from "./IntroduceShow";
import Tuyendung from "./Tuyendung";
import Contact from "./Contact";

const Main = () => (
    <main>
        <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="product-detail" element={<DetailProduct/>}/> 
            <Route path="offer" element={<Offer/>}/> 
            <Route path="category" element={<Category/>}/> 
            <Route path="blankstarter" element={<BlankStarter/>}/> 
            <Route path="component" element={<Component/>}/> 
            <Route path="content" element={<Content/>}/> 
            <Route path="listing-grid" element={<ListingGird/>}/> 
            <Route path="listing-large" element={<ListingLarge/>}/> 
            <Route path="payment" element={<PayMent/>}/> 
            <Route path="profile-address" element={<ProfileAddress/>}/> 
            <Route path="profile-main" element={<ProfileMain/>}/> 
            <Route path="profile-order" element={<ProfileOrder/>}/> 
            <Route path="profile-seller" element={<ProfileSeller/>}/> 
            <Route path="profile-setting" element={<ProfileSetting/>}/> 
            <Route path="profile-wishlist" element={<ProfileWishlist/>}/> 
            <Route path="shopping-cart" element={<ShoppingCart/>}/> 
            <Route path="login" element={<Login/>}/> 
            <Route path="register" element={<Register/>}/> 
            <Route path="/introduce" element={<IntroduceShow/>}/> 
            <Route path="/tuyendung" element={<Tuyendung/>}/> 
            <Route path="/lien-he" element={<Contact/>}/> 


        </Routes>
    </main>
)   
export default Main 