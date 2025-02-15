import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SingleItem = ({_id, name, image, banner, artist, idPath}) => {
    return (
        <div>
            <Link to={`${idPath}/${_id}`} className='single-item'>
                <div className='single-item__div-image-button'>
                    <div className='single-item__div-image'>
                        <img src={image} 
                        className='single-item__image' 
                        alt={`Imagem do Artista ${name}`} />
                    </div>

                    <FontAwesomeIcon className='single-item__icon' icon={faCirclePlay} size="2x" />

                    <div className='single-item__texts'>
                        <div className='single-item__2lines'>
                            <p className='single-item__title'>{name}</p>
                            <p className='single-item__text'>{artist ?? "Artista"}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default SingleItem
