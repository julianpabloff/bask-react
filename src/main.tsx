import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';

import Layout from './routes/Layout';
import Home from './routes/Home';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/carbon-repair" element=""/>
                    <Route path="/custom-paint" element=""/>
                    <Route path="/*" element={<div></div>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
