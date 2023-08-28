import React from 'react'
import { Link } from 'react-router-dom';
import './index.css'

const List = () => {
  return (
    <>
    <div className="list">
    
    <ol>
        <li><Link to='/pointer' className='pjlist' >Cursor Pointer</Link></li>
        <li><Link to='/avengers' className='pjlist' >Avengers Craft</Link></li>
        <li><Link to='/short' className='pjlist' >Shorting system</Link></li>
    </ol>

    </div>
    </>
  )
}

export default List;
