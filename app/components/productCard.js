"use client";
import { useState } from "react";
import Link from "next/link";


export default function ProductCard({ product, index }) {
    const [liked, setLiked] = useState(false);

    return (
        <div className="product-card">

            
            <img
                src={product.image}
                alt={product.title}
                className="product-image"
            />

            <h3 className="product-title">
                {product.title.length > 25
                    ? product.title.substring(0, 25) + "..."
                    : product.title}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                <p className="product-meta text-sm text-gray-600">
                    <Link href="/" className="text-blue-600 hover:underline font-medium">
                        Sign in
                    </Link>{" "}
                    or{" "}
                    Create an account

                    to see pricing
                </p>
                <button
                    className="heart-btn"
                    onClick={() => setLiked(!liked)}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill={liked ? "red" : "none"}
                        stroke={liked ? "red" : "#292D32"}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.62 20.8116C12.28 20.9316 11.72 20.9316 11.38 20.8116C8.48 19.8216 2 15.6916 2 8.69156C2 5.60156 4.49 3.10156 7.56 3.10156C9.38 3.10156 10.99 3.98156 12 5.34156C13.01 3.98156 14.63 3.10156 16.44 3.10156C19.51 3.10156 22 5.60156 22 8.69156C22 15.6916 15.52 19.8216 12.62 20.8116Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
