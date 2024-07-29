import React, { ReactNode } from 'react';

interface UrlPreviewProps {
    url: string;
    children: ReactNode;
}

const UrlPreview: React.FC<UrlPreviewProps> = ({ url, children }) => {
    return (
        <div className="mb-4">
            <a href={url} target="_blank" className="text-blue-500 hover:underline">
                {children}
            </a>
            <div className="mt-2 border border-gray-300">
                <iframe src={url} width="100%" height="200" className="w-full" />
            </div>
        </div>
    );
};

export default UrlPreview;
