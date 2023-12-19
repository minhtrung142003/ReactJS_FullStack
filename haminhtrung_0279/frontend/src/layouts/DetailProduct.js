import React from "react";
import SectionContent1 from "../pages/detailproduct/SectionContent1";
import SectionContent2 from "../pages/detailproduct/SectionContent2";
import SectionSubscribe from "../pages/detailproduct/SectionSubscribe";
function DetailProduct() {
    return (
        <div className="container">
            <SectionContent1/>
            <SectionContent2/>
            <SectionSubscribe/>

        </div>
    );
}
export default DetailProduct;