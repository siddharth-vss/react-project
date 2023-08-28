/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'

const short = () => {
  
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
  

 
//  console.log(States.sort( (a,b) => a.id > b.id ?  1: -1   ));
 

  
  const sorting =()=>{
    let valu = document.getElementById('sort').value;
    // setShort(e.target.value);
    console.log(valu);
  


   switch (valu) {
    case "lowest":
      setShort("lowest");
      setData(States.sort( (a,b) => a.id > b.id ?  1: -1 ) );
      console.log(data);
    break;
    case "highest":
      setShort("highest");
      setData(States.sort( (a,b)=> a.id > b.id ?  -1 : 1 ));
      console.log(data);
    break;
    case "a-z":
      setShort("a-z");
      setData(States.sort( (a,b)=> a.name > b.name ?  1 : -1 ));
      console.log(data);
    break;
    case "z-a":
      setShort("z-a");
      setData(States.sort( (a,b)=> a.name < b.name ?  1 : -1 ));
      console.log(data);
    break;
    default:
      setShort("ayo");
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
 </div>
     

  )
  
  }

export default short
