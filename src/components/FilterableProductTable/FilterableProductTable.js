import React from "react";
import {SearchBar} from "../SearchBar/SearchBar";
import {ProductTable} from "../ProductTable/ProductTable";




export const FilterableProductTable = ({products}) =>{
    return(
        <div>
            <SearchBar/>
            <ProductTable products={products}/>
        </div>
    )
}