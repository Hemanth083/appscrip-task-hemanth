export default function SubHeader({
    showFilters,
    toggleFilters,
    itemCount,
    sortValue,
    setSortValue
}) {
    return (
        <div className="top-sub-header">

            <div className="sub-left">
                <span className="items-count">{itemCount} ITEMS</span>
                <button className="hide-filter-btn" onClick={toggleFilters}>
                    {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
                </button>
            </div>

            <div className="sub-right">

                <select
                    className="sort-dropdown"
                    value={sortValue}
                    onChange={(e) => setSortValue(e.target.value)}
                >
                    <option value="recommended">RECOMMENDED</option>
                    <option value="newest">NEWEST FIRST</option>
                    <option value="popular">POPULAR</option>
                    <option value="high">PRICE: HIGH TO LOW</option>
                    <option value="low">PRICE: LOW TO HIGH</option>
                </select>


            </div>
        </div>
    );
}
