import React from 'react';
import Footer from 'feature/layout/footer';
import Header from 'feature/layout/header';
import './layout.scss';
const Layout = ({children})=>{
return (
  <div className={`sc-layout`}>
    <header className={`header`}>
      <Header />
    </header>
    <main className={`content`}>
    {children}
    <footer className={`footer`}>
      <Footer />
    </footer>
    </main>
   
   
   
  </div>
)
    
}

export default Layout;