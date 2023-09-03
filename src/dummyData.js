import User1 from './assets/User1.png';
import User2 from './assets/User2.png';
import User3 from './assets/User3.png';
import User4 from './assets/User4.png';
import User5 from './assets/User5.png';
import User6 from './assets/User6.png';
import User7 from './assets/User7.png';

import Product1 from './assets/Product1.png';
import Product2 from './assets/Product2.png';
import Product3 from './assets/Product3.png';
import Product4 from './assets/Product4.png';
import Product5 from './assets/Product5.png';
import Product6 from './assets/Product6.png';


export const userData = [
    {
      name: 'Jan',
      "Active User": 4000, 
    },
    {
      name: 'Feb',
      "Active User": 3000,
    },
    {
      name: 'Mar',
      "Active User": 2000,
    },
    {
      name: 'Apr',
      "Active User": 2780,
    },
    {
      name: 'May',
      "Active User": 5890,
    },
    {
      name: 'Jun',
      "Active User": 2390,
    },
    {
      name: 'July',
      "Active User": 3490,
    },
    {
        name: 'Aug',
        "Active User": 2190,
    },
   {
        name: 'Sep',
        "Active User": 4490,
    },
    {
        name: 'Oct',
        "Active User": 7490,
    },
    {
        name: 'Nov',
        "Active User": 1490,
    },
    {
        name: 'Dec',
        "Active User": 5490,
    }, 

  ];


export const data1 = [
  {
    name: 'Jan',
    "Active User": 8000,
    "color": 'red', 
  },
  {
    name: 'Feb',
    "Active User": 3000,
    "color": 'red',
  },
  {
    name: 'Mar',
    "Active User": 4000,
    "color": 'red',
  },
  {
    name: 'Mar',
    "Active User": 2000,
    "color": 'red',
  },
]; 

export const data2 = [
  {
    name: 'Jan',
    "Active User": 2000,
    "color": 'green', 
  },
  {
    name: 'Feb',
    "Active User": 5200,
    "color": 'green',
  },
  {
    name: 'Mar',
    "Active User": 2200,
    "color": 'green',
  },
  {
    name: 'Feb',
    "Active User": 7500,
    "color": 'green',
  },
]; 

export const data3 = [
  {
    name: 'Jan',
    "Active User": 8000,
    "color": 'red' 
  },
  {
    name: 'Feb',
    "Active User": 3000,
    "color": 'red'
  },
  {
    name: 'Mar',
    "Active User": 4000,
    "color": 'red'
  },
  {
    name: 'Mar',
    "Active User": 2000,
    "color": 'red'
  },
]; 


export const userRows = [
  { id: 1, company: 'Catalog',
  subHeading: "catalogapp.io",
  avatar: <img className='userListImg'  src={User1} alt="" />,
   status: "active",
  assessed: "22 Jan 2021", 
   about: "Content curatine app." },
   { id: 2, company: 'Circooles',
   subHeading: "getcircooles.com",
  avatar: <img className='userListImg'  src={User2} alt="" />,
   status: "active",
   assessed: "20 Jan 2022",  
   about: "Content curatine app." },
   { id: 3, company: 'Command',
   subHeading: "smdr.ai",
  avatar: <img className='userListImg'  src={User3} alt="" />, 
   status: "inactive",
   assessed: "24Jan 2022",  
   about: "Content curatine app." },
   { id: 4, company: 'Hourglass',
   subHeading: "hourglass.app",
  avatar: <img className='userListImg'  src={User4} alt="" />,
   status: "active",
   assessed: "26 Jan 2022",  
   about: "Content curatine app." },
   { id: 5, company: 'Layers',
   subHeading: "getlayers.io",
  avatar: <img className='userListImg'  src={User5} alt="" />,
   status: "active",
   assessed: "18 Jan 2022",   
   about: "Content curatine app." },
   { id: 6, company: 'Quotient',
   subHeading: "quotient.co",
  avatar: <img className='userListImg'  src={User6} alt="" />,
   status: "active", 
   assessed: "28 Jan 2022", 
   about: "Content curatine app." },
   { id: 7, company: 'Sisyphus',
   subHeading: "sisyphus.com",
  avatar: <img className='userListImg'  src={User7} alt="" />,
   status: "inactive",
   assessed: "22 Jan 2022",  
   about: "Content curatine app." },
 
];

export const productRows = [
  { id: 1, product: 'Spotify',
  subHeading: "catalogapp.io",
  avatar: <img className='productListImg'  src={Product1} alt="" />,
   status: "active",
  price: "$230.00", 
   stock: 23 },

   { id: 2, product: 'Figma',
   subHeading: "getcircooles.com",
  avatar: <img className='productListImg'  src={Product2} alt="" />,
   status: "active",
   price: "$530.00", 
   stock: 243 },

   { id: 3, product: 'Stripe',
   subHeading: "smdr.ai",
  avatar: <img className='productListImg'  src={Product3} alt="" />, 
   status: "inactive",
   price: "$130.00", 
   stock: 230 },

   { id: 4, product: 'A Coffee',
   subHeading: "hourglass.app",
  avatar: <img className='productListImg'  src={Product4} alt="" />,
   status: "active",
   price: "$230.00", 
   stock: 231 },

   { id: 5, product: 'TB Bakery',
   subHeading: "getlayers.io",
  avatar: <img className='productListImg'  src={Product5} alt="" />,
   status: "active",
   price: "$230.00", 
   stock: 273 },

   { id: 6, product: 'Fresh F&V',
   subHeading: "quotient.co",
  avatar: <img className='productListImg'  src={Product6} alt="" />,
   status: "active", 
   price: "$730.00", 
   stock: 213 },

   { id: 7, product: 'Stripe',
   subHeading: "sisyphus.com",
  avatar: <img className='productListImg'  src={Product3} alt="" />,
   status: "inactive",
   price: "$430.00", 
   stock: 283 },
 
];

export const productData = [
  {
    name: 'Jan',
    "Sales": 4000, 
  },
  {
    name: 'Feb',
    "Sales": 5000,
  },
  {
    name: 'Mar',
    "Sales": 2000,
  },
  {
    name: 'Apr',
    "Sales": 3080,
  },
  {
    name: 'May',
    "Sales": 5890,
  },
  {
    name: 'Jun',
    "Sales": 2390,
  },
  
];