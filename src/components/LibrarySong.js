import React from "react";

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  id
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    if (!song) return; 
    const newSongs = songs.map(s => ({
      ...s,
      active: s.id === id
    }));
    setSongs(newSongs);
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song && song.active ? "selected" : ""}`}
    >
      {song && (
        <>
          <img src={song.cover} alt={song.name} />
          <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
          </div>
        </>
      )}
    </div>
  );
};

export default LibrarySong;
