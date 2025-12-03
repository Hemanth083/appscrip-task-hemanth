"use client";
import { useEffect, useState } from "react";

export default function AdStrip({
    id = "top-ad",
    message = "Free shipping over ₹999 • Use code FREESHIP",
    ctaText = "Shop Now",
    ctaHref = "/shop",
    bgColor = "#072f4f",      
    textColor = "#ffffff",     
}) {
  

   

    if (closed) return null;

    return (
        <div
            className="ad-strip"
            role="region"
            aria-label="Top advertisement"
            style={{ background: bgColor, color: textColor }}
        >
            <div className="ad-inner">
                <div className="ad-message">
                    <strong>{message}</strong>
                </div>

            
            </div>
        </div>
    );
}
