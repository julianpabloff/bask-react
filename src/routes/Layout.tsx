import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles.css';

function Layout() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;
