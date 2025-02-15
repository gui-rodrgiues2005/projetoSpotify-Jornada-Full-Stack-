import React from 'react'
import SingleItem from './SingleItem';
import { Link, useLocation } from 'react-router-dom';

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  console.log(title)

  const { pathname } = useLocation();
  const isHome = pathname === '/'


  const finalItems = isHome ? items : itemsArray.length;



  return (
    <div>
      <div className='item__list'>
        <div className='item-list__header'>
          <div className='main__texts'>
            <h2>{title}</h2>

            {isHome ? (
              <Link to={path} className='item-list__link' >Mostrar tudo</Link>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className='item-list__container'>
          {itemsArray
            .filter((currentValue, index) => index < finalItems)
            .map((currObj, index) => (
              <SingleItem
                idPath={idPath}
                {...currObj}
                key={`${title}-${index}`} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default ItemList
