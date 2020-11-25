import logo from './logo.svg';
import './App.css';
import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/MiguelSuay/hackathon-port-db');

const App = () => (
   <Admin dataProvider={dataProvider}>
        <Resource name="sellers" list={ListGuesser} />
        <Resource name="buyers" list={ListGuesser} />
        <Resource name="sales_listings" list={ListGuesser} />
        <Resource name="request_listings" list={ListGuesser} />
        <Resource name="categorias" list={ListGuesser} />
    </Admin>
 );

export default App;
