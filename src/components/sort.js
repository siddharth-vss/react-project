/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import '../App.css'
import a from './image/bz1.png';
import b from './image/bz2.png';
import c from './image/bz4.png';
import d from './image/one.png';
import e from './image/samsung.png';
import f from './image/so.png';
import g from './image/so1.png';
import h from './image/so2.png';
import i from './image/so3.png';
import j from './image/wa1.png';
import k from './image/wa2.png';
import l from './image/wa3.png';


const short = () => {

  const products = [
    {
      id: 7,
      img: g,
      name: 'SHOES',
      price: 2500
    },
    {
      id: 2,
      img: b,
      name: 'BLEZER',
      price: 550,
    },
    {
      id: 5,
      img: e,
      name: 'SAMSUNG',
      price: 15000
    },
    {
      id: 3,
      name: 'BLEZER',
      img: c,
      price: 600
    },
    {
      id: 6,
      img: f,
      name: 'SHOES',
      price: 3000
    },
    {
      id: 12,
      name: 'WATCH',
      img: l,
      price: 512
    },
    {
      id: 8,
      img: h,
      name: 'SHOES',
      price: 900
    },
    {
      id: 4,
      img: d,
      name: '1+',
      price: 5000
    },
    {
      id: 9,
      name: 'SHOES',
      img: i,
      price: 4000
    },
    {
      id: 10,
      img: j,
      name: 'WATCH',
      price: 450
    },
    {
      id: 1,
      img: a,
      name: 'BLEZER',
      price: 500
    },
    {
      id: 11,
      img: k,
      name: 'WATCH',
      price: 150
    },
  ]


  const States = [
    { name: "Andhra Pradesh", value: "Andhra Pradesh" ,id:75     },
    { name: "Arunachal Pradesh", value: "Arunachal Pradesh" ,id:  55   },
    { name: "Assam", value: "Assam" ,id:   27  },
    { name: "Bihar", value: "Bihar" ,id: 76    },
    { name: "Chhattisgarh", value: "Chhattisgarh" ,id:43     },
    { name: "Goa", value: "Goa" ,id:  44   },
    { name: "Gujarat", value: "Gujarat" ,id:   34  },
    { name: "Haryana", value: "Haryana" ,id:   35  },
    { name: "Himachal Pradesh", value: "Himachal Pradesh" ,id:  40   },
    { name: "Jharkhand", value: "Jharkhand" ,id: 45    },
    { name: "Karnataka", value: "Karnataka" ,id:47     },
    { name: "Kerala", value: "Kerala" ,id: 0    },
    { name: "Madhya Pradesh", value: "Madhya Pradesh" ,id: 13    },
    { name: "Maharashtra", value: "Maharashtra" ,id:  12   },
    { name: "Manipur", value: "Manipur" ,id: 42    },
    { name: "Meghalaya", value: "Meghalaya" ,id:  20   },
    { name: "Mizoram", value: "Mizoram" ,id:     78},
    { name: "Nagaland", value: "Nagaland" ,id: 41   },
    { name: "Odisha", value: "Odisha" ,id:  40   },
    { name: "Punjab", value: "Punjab" ,id:    67 },
    { name: "Rajasthan", value: "Rajasthan" ,id:  24   },
    { name: "Sikkim", value: "Sikkim" ,id:   7  },
    { name: "Tamil Nadu", value: "Tamil Nadu" ,id:   18 },
    { name: "Telangana", value: "Telangana" ,id:  17   },
    { name: "Tripura", value: "Tripura" ,id: 11  },
    { name: "Uttar Pradesh", value: "Uttar Pradesh"  ,id:  120   },
    { name: "Uttarakhand", value: "Uttarakhand" ,id: 10    },
    { name: "West Bengal", value: "West Bengal" ,id:155  }
  ]
  
  
  
  

  
  const[ short,setShort ] = useState("lowest");
  const[ data,setData ] = useState(States.sort( (a,b) => a.id > b.id ?  1: -1 ));
  const[ image,setImage ] = useState(products);
  

 
//  console.log(States.sort( (a,b) => a.id > b.id ?  1: -1   ));
 

  
  const sorting =()=>{
    let valu = document.getElementById('sort').value;
    // setShort(e.target.value);
    console.log(valu);
  


   switch (valu) {
    case "lowest":
      setShort("lowest");
      setData(States.sort( (a,b) => a.id > b.id ?  1: -1 ) );
      setImage(products.sort( (a,b) => a.price > b.price ?  1: -1 ) );
      console.log(data);
    break;
    case "highest":
      setShort("highest");
      setData(States.sort( (a,b)=> a.id > b.id ?  -1 : 1 ));
      setImage(products.sort( (a,b)=> a.price > b.price ?  -1 : 1 ));
      console.log(data);
    break;
    case "a-z":
      setShort("a-z");
      setData(States.sort( (a,b)=> a.name > b.name ?  1 : -1 ));
      setImage(products.sort( (a,b)=> a.name > b.name ?  1 : -1 ));
      console.log(data);
    break;
    case "z-a":
      setShort("z-a");
      setData(States.sort( (a,b)=> a.name < b.name ?  1 : -1 ));
      setImage(products.sort( (a,b)=> a.name < b.name ?  1 : -1 ));
      console.log(data);
    break;
    default:
      setShort("z-a");
      setData(States.sort( (a,b)=> a.name < b.name ?  1 : -1 ));
      setImage(products.sort( (a,b)=> a.name < b.name ?  1 : -1 ));
      console.log(data);
      break;
   }
  }
  
  
  
  return (
  
    <div>
      <form action='#'  >
        <label htmlFor='sort'></label>
        <select name='sort' id='sort' onClick={sorting}>
          <option value="lowest">price(lowest)</option>
          <option value="#" disabled></option>
          <option value="highest">price(highest)</option>
          <option value="#" disabled ></option>
          <option value="a-z">a-z</option>
          <option value="#" disabled></option>
          <option value="z-a">z-a</option>
        </select>
        <select name='states' id='states'>
        {data.map( (e) =>{
        return <option key={e.value} >{e.name}  {e.id}</option>
      } )}
        </select>

      </form>
      <h1>{short}</h1>

      {data.map( (e) =>{
        return <li key={e.value} >{e.name}  {e.id}</li>
      } )}
    <div className='spa'>
      {image.map( (product) => {
        return (
          <div    >
          <div className="card" key={product.id} >
            <img src={product.img} className="card-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">₹{product.price} </p>

            </div>
          </div>

        </div>
        )
      } )}
      </div>
 </div>
     

  )
  
  }

export default short
