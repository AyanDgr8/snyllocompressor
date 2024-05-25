// src/components/Main/Main.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../routes/Landing/Home';
import Products from '../routes/Products/Products/Products';
import ProductsAir from '../routes/Products/ProductsAir/ProductsAir';
import ProductsGas from '../routes/Products/ProductsGas/ProductsGas';
import ProductsOilFree from '../routes/Products/ProductsOilFree/ProductsOilFree';
import ProductsOilLubri from '../routes/Products/ProductsOilLubri/ProductsOilLubri';
import ProductsScrew from '../routes/Products/ProductsScrew/ProductsScrew';
import ProductsPortable from '../routes/Products/ProductsPortable/ProductsPortable';
import ProductsDiesel from '../routes/Products/ProductsDiesel/ProductsDiesel';

import './Main.css';

export default function Main(){
    return(
        <>
        <Router>
            <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/products/air' element={<ProductsAir />} />
                    <Route path='/products/gas' element={<ProductsGas />} /> 
                    <Route path='/products/oil-free' element={<ProductsOilFree />} /> 
                    <Route path='/products/oil-lubricated' element={<ProductsOilLubri />} /> 
                    <Route path='/products/rotary' element={<ProductsScrew />} /> 
                    <Route path='/products/portable' element={<ProductsPortable />} /> 
                    <Route path='/products/diesel' element={<ProductsDiesel />} /> 
                </Routes>
            </div>
        </Router>
        </>
    );
}