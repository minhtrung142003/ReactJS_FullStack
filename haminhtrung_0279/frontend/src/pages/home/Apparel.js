import React, { useEffect, useState } from "react";
import { GET_ALL } from "../../api/apiService";
const Apparel = (category) => {
    const { categoryName, categoryId } = category;
    const [products, setProducts] = useState([]);
    const filteredProducts = products.filter( (row) => row.category.name === categoryName );
    useEffect(() => {
     GET_ALL(`products/getlatest?categoryid=${categoryId}`).then((item) => setProducts(item.data));
}, []);
return (
    <section class="padding-bottom">
    <div class="card card-deal">
    
    <header class="section-heading heading-line">
        <h4 class="title-section text-danger">{categoryName}</h4>
    </header>
    <div class="row no-gutters items-wrap">
    {filteredProducts.length > 0 &&
filteredProducts.map((row) => (
        <div class="col-md col-6"  key={row.id}>
        <figure class="card-product-grid card-sm">
        <a href="#" class="img-wrap"> 
        {" "}
        <img src={`./images/items/${row.thumbnail}`} />{" "}
        </a>
        <div class="text-wrap p-3">
            <a href="#" class="title">{row.title}</a>
            <span class="badge badge-danger">{row.price} </span>
        </div>
    </figure>
    </div> 
 ))}   
    </div>
    </div>

    </section>
);
};
export default Apparel