import ProductCard from "../components/productCard";

export default function ProductGrid({ products, showFilters }) {
    return (
        <div className={`grid-wrapper ${showFilters ? "three-col" : "four-col"}`}>
            {products.map((p, idx) => (
                <ProductCard key={p.id} product={p} index={idx} />
            ))}
        </div>
    );
}
