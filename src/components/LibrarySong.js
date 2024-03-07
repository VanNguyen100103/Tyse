import React from 'react';

function LibrarySong({id, song, songs, setSongs, setCurrentSong, audioRef, isPlying}) {
    const songSelectedHandler = () =>{
        const newSongs = songs.map(s=>{
            if(s.id === id){
                return {...s, active : true}
            }else{
                return {...s, active : false}
            }
        })
        setSongs(newSongs)
        if(isPlying){
            audioRef.current.play()
        }
    }

  return (
    <div onClick={songSelectedHandler} className={`library-song ${song.active ? 'active' : ''}`}>
        <img src={song.cover} alt={song.name}/>
        <div className='song-description'>
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
        </div>
    </div>
  )
}

export default LibrarySong
