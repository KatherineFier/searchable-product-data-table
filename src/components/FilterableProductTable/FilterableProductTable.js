import React, {useState} from "react";
import {SearchBar} from "../SearchBar/SearchBar";
import {ProductTable} from "../ProductTable/ProductTable";




export const FilterableProductTable = ({products}) =>{
    const [filterText, setFilterText] = useState('Tea');
    const [inStockOnly, setInStockOnly] = useState(false);

    return(
        <div>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly}/>
            <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly}/>
        </div>
    )
}