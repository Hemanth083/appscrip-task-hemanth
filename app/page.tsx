"use client";

import { useState, useEffect } from "react";
import Header from "./components/header";
import SubHeader from "./components/subHeader";
import Filters from "./components/filters";
import Footer from "./components/footer";
import AdStrip from "./components/ADstrip";

import ProductGrid from "./products/productGrid";

export default function HomePage() {
  const [showFilters, setShowFilters] = useState(true);
  const [products, setProducts] = useState([]);
  const [sortValue, setSortValue] = useState("recommended");
  const [loading, setLoading] = useState(true);



  const toggleFilters = () => setShowFilters((prev) => !prev);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setProducts(data);
        setLoading(false);
      });
  }, []);


  return (
    <main className="page-container">
      <AdStrip
        id="promo-1"
        message="Flat 20% off on SELECT styles — Limited time only!"
        ctaText="Shop Sale"
        ctaHref="/sale"
        bgColor="#000"
        textColor="#fff"
      />
      <Header />

      <section className="hero-section">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </section>

      <SubHeader
        showFilters={showFilters}
        toggleFilters={toggleFilters}
        itemCount={products.length}
        sortValue={sortValue}
        setSortValue={setSortValue}
      />

      <section className="main-content">
        {showFilters && <Filters />}

        {loading ? (
          <Loader />
        ) : (
          <ProductGrid
            products={products}
            showFilters={showFilters}
          />
        )}
      </section>

      <Footer />


    </main>
  );
}

function Loader() {
  return (
    <div className="loader-wrapper">
      <div className="spinner"></div>
    </div>
  );
}
