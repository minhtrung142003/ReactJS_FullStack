import React from 'react';
import {Admin,Resource, fetchUtils} from 'react-admin';

import AdminPanel from "./component/AdminPanel";
// category
import {
  listCategory,
  editCategory,
  createCategory,
} from "./component/Category";

// product
import {
  listProduct,
  createProduct,
  editProduct,
} from "./component/Products";

//-------------------------------------------------
import Dataprovider from './component/Dataprovider';

// User
import {
  listUser,
  createUser,
  editUser,
} from "./component/Users";

// Role
import {
  listRole,
  createRole,
  editRole,
} from "./component/Role";

// Token
import {
  listToken,
  createToken,
  editToken,
} from "./component/Token";

// feedback
import {
  listFeedback,
  createFeedback,
  editFeedback,
} from "./component/Feedback";

// Gallery
import {
  listGallery,
  createGallery,
  editGallery,
} from "./component/Gallery";

// Orders
import {
  listOrders,
  createOrders,
  editOrders,  
} from "./component/Orders";



// Orderdetail
import {
  listOrderDetail,
  createOrderDetail,
  editOrderDetail,  
} from "./component/OrderDetail";

// import simpleRestProvider from "ra-data-simple-rest";
const httpClient=fetchUtils.fetchJson;

const App=()=>(
  <Admin 
    dashboard={AdminPanel}
    dataProvider={Dataprovider}
    >
    <Resource name="categories"
     list={listCategory}
     edit={editCategory}
     create={createCategory}
     />

    
      <Resource name="products"
     list={listProduct}
     edit={editProduct}
     create={createProduct}
     />

<Resource name="users"
     list={listUser}
     edit={editUser}
     create={createUser}
     />

<Resource name="roles"
     list={listRole}
     edit={editRole}
     create={createRole}
     />

<Resource name="tokens"
     list={listToken}
     edit={editToken}
     create={createToken}
     />

<Resource name="feedbacks"
     list={listFeedback}
     edit={editFeedback}
     create={createFeedback}
     />
<Resource name="galleries"
     list={listGallery}
     edit={editGallery}
     create={createGallery}
     />
<Resource name="orderss"
     list={listOrders}
     edit={editOrders}
     create={createOrders}
     />
<Resource name="orderdetails"
     list={listOrderDetail}
     edit={editOrderDetail}
     create={createOrderDetail}
     />


  </Admin>
);
export default App