import React from 'react'

const List = (prop) => {
    const {news} = prop;
    const {title} = news;
  return (
    <div>
        <ul className='main'>
            <li className='list'>{title}</li>
        </ul>
      
    </div>
  )
}

export default List
