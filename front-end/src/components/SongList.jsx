import React, { useState } from 'react';
import SongItem from './SongItem';

const SongList = ({ songsArray }) => {
  const [items, setItems] = useState(5);

  // Garantir que songsArray é um array válido
  if (!Array.isArray(songsArray)) {
    return <p>Erro ao carregar as músicas</p>;
  }

  return (
      <div className="song-list">
        {songsArray
          .slice(0, items) // Usar slice para pegar as primeiras 'items' músicas
          .map((currentSongObj, index) => (
            <SongItem {...currentSongObj} index={index} key={index} />
          ))}

        {songsArray.length > items && (
          <p
            className="song-list__see-more"
            onClick={() => setItems((prevItems) => prevItems + 5)}
          >
            Ver mais
          </p>
        )}
      </div>
  );
};

export default SongList;
