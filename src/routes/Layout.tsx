import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles.css';

export default function Layout() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}
