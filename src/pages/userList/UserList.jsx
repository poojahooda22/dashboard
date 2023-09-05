import React, { useState } from 'react'
import './UserList.css';
import { DataGrid } from '@mui/x-data-grid';
import * as FaIcons from 'react-icons/fa';
import { userRows } from '../../dummyData';
import {Link} from 'react-router-dom';

const UserList = () => {

  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  }

    const columns = [
        { field: 'id', headerName: 'ID',  width: 90, height: 50, },
        {
          field: 'company',
          headerName: 'Company',
          width: 250,
          height: 50,
          renderCell: (params) => {
            return (
              <div className='userListUser'>
                {params.row.avatar}
                <div className='userListDetail'>
                  <span>{params.row.company}</span>
                  {/* <span>{params.row.subHeading}</span> */}
                </div>
              </div>
            );
          } 
        },
        {
          field: 'assessed',
          headerName: 'Assessed',
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
          field: 'about',
          headerName: 'About',
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
                <Link to={'/user/' + params.row.id}>
                  <FaIcons.FaEdit className='userListEdit'  />
                </Link>
                <FaIcons.FaTrashAlt className='userListDelete' 
                onClick={() => handleDelete(params.row.id)}
                />
              </>
            )
          }         
        },       
      ];
      
      
  return (
    <div className='userList'>
      <DataGrid
        rows={userRows}
        columns={columns}
        pageSize={7}
        checkboxSelection  
      />
    </div>
  );
}

export default UserList;

// Company: 'Catalog',
// Status: 'Customer',
// Users: <img alt="" src={AvatarGroup} />,
// About: "Content curatine app.",