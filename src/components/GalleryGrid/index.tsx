import { useState } from 'react';

interface GalleryGridProps {
    children?: any;
}

export default function GalleryGrid({ children }) {
    return (
        <div className="gallery-grid">
            { children }
        </div>
    );
}
