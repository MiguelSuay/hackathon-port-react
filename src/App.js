import './App.css';
import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { theme } from "./config/theme"
import CustomLayout from "./components/CustomLayout"
import LoginPage from "./components/LoginPage"
import authProvider from "./config/authProvider"
import { ProductList } from "./resources/products"

const dataProvider = jsonServerProvider('https://r98hvu7ey6.execute-api.eu-west-1.amazonaws.com/dev/');

const App = () => (
   <Admin theme={theme} dataProvider={dataProvider} layout={CustomLayout}  loginPage={LoginPage} authProvider={authProvider}>
      {/* <Resource name="sellers" list={ListGuesser} />
      <Resource name="buyers" list={ListGuesser} />
      <Resource name="sales_listings" list={ListGuesser} />
      <Resource name="request_listings" list={ListGuesser} />
      <Resource name="categorias" list={ListGuesser} /> */}

      <Resource name="products" list={ProductList} options={{label: "PURCHASE"}}/>      
      {/* <Resource name="categories" /> */}
    </Admin>
 );

export default App;
