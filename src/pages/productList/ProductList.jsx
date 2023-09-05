import React, { useState } from 'react'
import './ProductList.css'
import { DataGrid } from '@mui/x-data-grid';
import * as FaIcons from 'react-icons/fa';
import { productRows } from '../../dummyData';
import {Link} from 'react-router-dom';

function ProductList() {

    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID',  width: 90, height: 50, },
        {
          field: 'product',
          headerName: 'Product',
          width: 250,
          height: 50,
          renderCell: (params) => {
            return (
              <div className='productList'>
                {params.row.avatar}
                <div className='productListDetail'>
                  <span>{params.row.product}</span>
                  {/* <span>{params.row.subHeading}</span> */}
                </div>
              </div>
            );
          } 
        },
        {
          field: 'stock',
          headerName: 'Stock',
          width: 150,
          height: 50,  
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 150,
          height: 50,  
        },
        
        {
          field: 'price',
          headerName: 'Price',
          width: 210,
          height: 50,  
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 210,
          height: 50,
          renderCell:( params) => {
            return (
              <>
                <Link to={'/products/' + params.row.id}>
                  <FaIcons.FaEdit className='productListEdit'  />
                </Link>
                <FaIcons.FaTrashAlt className='productListDelete' 
                onClick={() => handleDelete(params.row.id)}
                />
              </>
            )
          }         
        },       
      ];


  return (
    <div className='productList'>
      <DataGrid
        rows={productRows}
        columns={columns}
        pageSize={7}
        checkboxSelection  
      />
    </div>
  )
}

export default ProductList
