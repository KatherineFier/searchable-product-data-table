import React from "react";

const products = [
    {category: "Coffee Beans", price: "$20", stocked: true, name: "Dark"},
    {category: "Coffee Beans", price: "$20", stocked: true, name: "Medium"},
    {category: "Coffee Beans", price: "$20", stocked: true, name: "Light"},
    {category: "Tea", price: "$35", stocked: true, name: "English Breakfast"},
    {category: "Tea", price: "30", stocked: true, name: "Breakfast Blend"},
    {category: "Tea", price: "$29", stocked: true, name: "Chai"},
    {category: "Tea", price: "$45", stocked: true, name: "White Rose"},
]

export const FilterableProductTable = ({products}) =>{
    return(
        <div>
            <SearchBar/>
        </div>
    )
}