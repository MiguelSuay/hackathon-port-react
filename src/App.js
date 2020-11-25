import './App.css';
import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { theme } from "./config/theme"
import CustomLayout from "./components/CustomLayout"
import { ProductList } from "./resources/products"

const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/MiguelSuay/hackathon-port-db');

const App = () => (
   <Admin theme={theme} dataProvider={dataProvider} layout={CustomLayout}>
      {/* <Resource name="sellers" list={ListGuesser} />
      <Resource name="buyers" list={ListGuesser} />
      <Resource name="sales_listings" list={ListGuesser} />
      <Resource name="request_listings" list={ListGuesser} />
      <Resource name="categorias" list={ListGuesser} /> */}

      <Resource name="products" list={ProductList} />
      {/* <Resource name="categories" /> */}
    </Admin>
 );

export default App;
