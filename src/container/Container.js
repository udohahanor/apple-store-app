import React from 'react';
import Navbar from '../navbar/Navbar';
import Content from '../content/Content';
import Footer from '../footer/Footer';

import './Container.css';

const Container = () => {
    return (
        <div className="container">
            <Navbar />
            <Content />
            <Footer />
        </div>
    )
}

export default Container;