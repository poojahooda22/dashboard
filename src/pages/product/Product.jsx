import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import Chart from '../../components/chart/Chart';
import { productData } from '../../dummyData';
import Product1 from '../../assets/Product1.png';
import * as FaIcons from 'react-icons/fa';

function Product() {
  return (
    <div className='product'>
        <div className='productTitleContainer'>
            <h2 className='productTitle'>Product</h2>
            <Link to='/newproduct'>
                <button className='productAddButton'>Create</button>
            </Link>
        </div>
        <div className='productTop'>
          <div className='productTopLeft'>
            <Chart data={productData}  dataKey="Sales" title="Sales Performance" />
          </div>
          <div className='productTopRight'>
            <div className='productInfoTop'>
              <img src={Product1} alt="" className='productInfoImg'/>
              <span className='productName'>Spotify</span>
            </div>
            <div className='productInfoBottom'>
              <div className='productInfoItem'>
                <span className='productInfoKey'>id:</span>
                <span className='productInfoValue'>123</span>
              </div>
              <div className='productInfoItem'>
                <span className='productInfoKey'>Sales:</span>
                <span className='productInfoValue'>7123</span>
              </div>
              <div className='productInfoItem'>
                <span className='productInfoKey'>Active:</span>
                <span className='productInfoValue'>Yes</span>
              </div>
              <div className='productInfoItem'>
                <span className='productInfoKey'>In Stock:</span>
                <span className='productInfoValue'>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className='productBottom'>
          <form className='productForm'>
            <div className='productFormLeft'>
              <label>Product Name</label>
              <input type="text" placeholder='Spotify' />
              <label>In Stock</label>
              <select name='inStock' id='inStock'>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <label>Active</label>
              <select name='active' id='active'>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className='productFormRight'>
              <div className='productUpload'>
                  <img src={Product1} alt="" className='productUploadImg' />
                  <label for='file'>
                    <FaIcons.FaUpload className='productUpdateIcon'/> 
                  </label>
                  <input type='file' id='file' style={{display: 'none'}} />
                </div>
                <button className='productButton'>Update</button>
            </div>
          </form>
        </div>  
    </div>
  )
}

export default Product
