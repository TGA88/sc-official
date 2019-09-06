import React from 'react';
import Footer from 'feature/layout/footer';
import './layout.scss';
const Layout = ({children})=>{
return (
    <div>
        {children}

        <footer className={`footer`}>
        <Footer/>
        </footer>
       
    </div>
)
    
}

export default Layout;