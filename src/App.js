import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import Products from './components/Products';
import Feature from './components/Feature';
import Footer from './components/Footer';
import { GlobalStyles } from './globalStyles';
import { productData, productDataTwo } from './components/Products/data';

function App() {
    return (
        <Router>
            <GlobalStyles />
            <Hero />
            <Products heading='Choose your favorite' data={productData} />
            <Feature />
            <Products heading='Sweet Treats just for you' data={productDataTwo} />
            <Footer />
        </Router>
    );
}

export default App;
