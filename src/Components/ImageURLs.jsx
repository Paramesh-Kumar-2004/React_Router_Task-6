import React, { useState } from "react";



const ImageURLs = () => {

    const IMG_URLs = [
        "https://www.dudeme.in/cdn/shop/products/5_a7ec9c39-2265-45af-aa09-a25f54c62ca5.jpg?v=1677052688&width=600",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/8fb59e233153641.68aa263c23e0b.jpg",
        "https://www.dudeme.in/cdn/shop/files/kakashi.jpg?v=1686033403&width=600",
        "https://www.dudeme.in/cdn/shop/products/770.jpg?v=1678951856&width=600",
        "https://www.dudeme.in/cdn/shop/products/1042.jpg?v=1678962407&width=600",
        "https://www.dudeme.in/cdn/shop/products/83_0d2e3642-12e1-478a-99cb-ffe2fb1b1277.jpg?v=1679303342&width=600",
        "https://coreldrawdesign.com/resources/previews/preview-trending-naruto-anime-oversize-t-shirt-print-design-for-free-with-source-files-1698490870.webp",
        "https://www.dudeme.in/cdn/shop/products/49_d92ada36-f99c-4e99-b4da-17237b9f429a.jpg?v=1680766458&width=600",
        "https://www.dudeme.in/cdn/shop/files/pikachu_8ed48832-d9e9-4f86-b14a-f5744f3b02bf.jpg?v=1686034662&width=600",
        "https://www.dudeme.in/cdn/shop/files/hogh-voltage.jpg?v=1686035073&width=600",
    ];

    const [copiedIndex, setCopiedIndex] = useState(null);

    const handleCopy = async (url, index) => {
        try {
            await navigator.clipboard.writeText(url);
            setCopiedIndex(index);
            setTimeout(() => setCopiedIndex(null), 2004);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <div
            style={{
                padding: "20px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
            }}
        >
            {IMG_URLs.map((url, index) => (
                <div
                    key={index}
                    style={{
                        background: "rgba(0, 0, 0, 0.8)",
                        padding: "10px",
                        borderRadius: "10px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        width: "220px",
                        textAlign: "center",
                    }}
                >
                    <img
                        src={url}
                        alt={`Preview ${index + 1}`}
                        width={200}
                        height={220}
                        style={{ borderRadius: "8px", objectFit: "cover" }}
                    />
                    <div style={{ marginTop: "10px", wordBreak: "break-all" }}>
                        {/* <p
                            style={{
                                fontSize: "12px",
                                padding: "6px",
                                borderRadius: "4px",
                                marginBottom: "8px",
                            }}
                        >
                            {url}
                        </p> */}
                        <button
                            onClick={() => handleCopy(url, index)}
                            style={{
                                background: "#007bff",
                                color: "white",
                                border: "none",
                                padding: "6px 10px",
                                borderRadius: "5px",
                                cursor: "pointer",
                                fontSize: "12px",
                            }}
                        >
                            {copiedIndex === index ? "✅ Copied!" : "📋 Copy URL"}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImageURLs;
