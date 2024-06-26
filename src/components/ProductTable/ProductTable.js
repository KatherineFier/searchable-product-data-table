import React from "react";
import {ProductCategoryRow} from "../ProductCategoryRow/ProductCategoryRow";
import {ProductRow} from "../ProductRow/ProductRow";

export const ProductTable = ({products, filterText, inStockOnly}) => {

    //bug in below logic

    const rows =[]
    let lastCategory = null;

    products.forEach((product) => {
        if(product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1
        ){
            return;
        }
        if(inStockOnly && !product.stocked){
            return;
        }
        if (product.category !==lastCategory){
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category}/>
            );
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.category}/>
        );
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );

}