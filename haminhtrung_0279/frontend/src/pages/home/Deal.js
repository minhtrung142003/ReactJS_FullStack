import React, { useEffect, useState } from "react";
import { GET_ALL } from "../../api/apiService";
import startsActive from "../../assets/images/icons/stars-active.svg";
import startsDisable from "../../assets/images/icons/starts-disable.svg";
import { Link } from "react-router-dom";
const cardTextStyle = {
    maxWidth: "80%",
    };

const Deal = (category) => {
    const { categoryName, categoryId } = category;
    const [products, setProducts] = useState([]);
    // const filteredProducts = products.filter( (row) => row.category.name === categoryName );
    useEffect(() => {
     GET_ALL(`products/getlatest?categoryid=${categoryId}`).then((item) => setProducts(item.data));
}, [categoryId]);
return (
       
     <section class="padding-bottom">
    <div class="card card-deal">
        <header class="section-heading heading-line">
            <h4 class="title-section text-primary">{categoryName}</h4>
        </header>
    <div class="row no-gutters items-wrap">
        {products.length > 0 &&
        products.map((row) => (

    <div class="col-md col-6" key={row.id}>
        <figure class="card-product-grid card-sm">
        <Link to={`/product-detail?productId=${row.id}`} class="img-wrap">
            <img src={`./images/items/${row.thumbnail}`} />{" "}
        </Link>
            <figcaption class="info-wrap">
                <ul class="rating-stars mb-1">
                <li style={{ cardTextStyle }} class="stars-active">
                <img src={startsActive} alt="" />
                </li>
                <li>
                <img src={startsDisable} alt="" />
                </li>
                </ul>
                <div>
                <Link to={`/product-detail?productId=${row.id}`} class="title">
                {row.title}
                </Link>
                </div>
                <div class="price h5 mt-2 text-danger">{row.price}đ</div>
            </figcaption>
						
								{/* <div class="price">
									<h6 className="pricehome">{row.price}</h6>
									<del className="l-through">{row.discount}</del>						
					             </div>  */}
        </figure>
    </div> 
   
))}
</div>
</div>
 </section>

);
};
export default Deal