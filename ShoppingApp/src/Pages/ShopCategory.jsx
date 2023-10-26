import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Component/Assets/dropdown_icon.png'

export const ShopCategory = (props) => {
 const {all_product} = useContext(ShopContext)

  
  return (
    <div className='shop-ctegory'>
       <img src={props.banner} alt="" />
       <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span>Out of 36 Product
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon} alt="" />
        </div>
       </div>
    </div>
  )
}
