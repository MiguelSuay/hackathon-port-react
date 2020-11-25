import './App.css';
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { theme } from "./config/theme"
import CustomLayout from "./components/CustomLayout"
import LoginPage from "./components/LoginPage"
import authProvider from "./config/authProvider"
import { ProductList } from "./resources/products"
import { OrderList } from "./resources/orders"
import { ReviewList } from "./resources/reviews"

const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/MiguelSuay/hackathon-port-db');

const App = () => (
   <Admin theme={theme} dataProvider={dataProvider} layout={CustomLayout}  loginPage={LoginPage} authProvider={authProvider}>
      <Resource name="products" list={ProductList} options={{label: "Purchase"}}/>      
      <Resource name="orders" list={OrderList} options={{label: "Make waste offer?"}}/>      
      <Resource name="reviews" list={ReviewList} options={{label: "Reviews"}}/>      
    </Admin>
 );

export default App;
