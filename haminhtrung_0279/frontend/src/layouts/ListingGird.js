import React from "react";
import ContentGrid from "../pages/listing-grid/ContentGrid";
import SubscribeGrid from "../pages/listing-grid/SubscribeGrid";


function ListingGird() {
    return (
        <div className="container">
            <ContentGrid/>
            <SubscribeGrid/>
        </div>
    );
}
export default ListingGird;