import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';

import Layout from './routes/Layout';
import Home from './routes/Home';
import Carbon from './routes/Carbon';
import Paint from './routes/Paint';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter basename="/bask-react">
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />}/>
                    <Route path="/carbon-repair" element={<Carbon />}/>
                    <Route path="/custom-paint" element={<Paint />}/>
                    <Route path="/*" element={<div>404</div>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
