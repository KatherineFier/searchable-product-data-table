import React from "react";



export const ProductCategoryRow = ({category}) => {

    return(
        <tr>
            <th colSpan="2" >
                {category}
            </th>
        </tr>
    )
}