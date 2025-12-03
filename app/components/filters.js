import { useState } from "react";

export default function Filters() {
    const [openSection, setOpenSection] = useState("ideal");

    const toggle = (name) => {
        setOpenSection(openSection === name ? null : name);
    };

    return (
        <aside className="filters-container">

            <div className="filter-row no-border">
                <label className="checkbox-label">
                    <input type="checkbox" />
                    CUSTOMIZABLE
                </label>
            </div>

            <div className="filter-row" onClick={() => toggle("ideal")}>
                <p className="filter-title">IDEAL FOR</p>
                <span className={`arrow ${openSection === "ideal" ? "open" : ""}`}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.72125 6.00018L7.06792 10.3468C7.58125 10.8602 8.42125 10.8602 8.93458 10.3468L13.2813 6.00018" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </span>
            </div>

            {openSection === "ideal" && (
                <div className="filter-content">
                    <p className="filter-sub">All</p>
                    <button className="unselect-btn">Unselect all</button>

                    <label className="checkbox-label">
                        <input type="checkbox" /> Men
                    </label>

                    <label className="checkbox-label">
                        <input type="checkbox" /> Women
                    </label>

                    <label className="checkbox-label">
                        <input type="checkbox" /> Baby & Kids
                    </label>
                </div>
            )}

            <div className="filter-row" onClick={() => toggle("occasion")}>
                <p className="filter-title">OCCASION</p>
                <span className={`arrow ${openSection === "occasion" ? "open" : ""}`}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.72125 6.00018L7.06792 10.3468C7.58125 10.8602 8.42125 10.8602 8.93458 10.3468L13.2813 6.00018" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </span>
            </div>
            {openSection === "occasion" && (
                <div className="filter-content">
                    <p className="filter-sub">All</p>
                </div>
            )}

            <div className="filter-row" onClick={() => toggle("work")}>
                <p className="filter-title">WORK</p>
                <span className={`arrow ${openSection === "work" ? "open" : ""}`}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.72125 6.00018L7.06792 10.3468C7.58125 10.8602 8.42125 10.8602 8.93458 10.3468L13.2813 6.00018" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </span>
            </div>
            {openSection === "work" && (
                <div className="filter-content">
                    <p className="filter-sub">All</p>
                </div>
            )}

            <div className="filter-row" onClick={() => toggle("fabric")}>
                <p className="filter-title">FABRIC</p>
                <span className={`arrow ${openSection === "fabric" ? "open" : ""}`}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.72125 6.00018L7.06792 10.3468C7.58125 10.8602 8.42125 10.8602 8.93458 10.3468L13.2813 6.00018" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </span>
            </div>
            {openSection === "fabric" && (
                <div className="filter-content">
                    <p className="filter-sub">All</p>
                </div>
            )}

            <div className="filter-row" onClick={() => toggle("segment")}>
                <p className="filter-title">SEGMENT</p>
                <span className={`arrow ${openSection === "segment" ? "open" : ""}`}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.72125 6.00018L7.06792 10.3468C7.58125 10.8602 8.42125 10.8602 8.93458 10.3468L13.2813 6.00018" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </span>
            </div>
            {openSection === "segment" && (
                <div className="filter-content">
                    <p className="filter-sub">All</p>
                </div>
            )}

        </aside>
    );
}
