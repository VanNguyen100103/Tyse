import React from 'react';
import LibrarySong from './LibrarySong';


function Library({songs, setSongs, audioRef, isPlaying, setCurrentSong, libraryStatus, setLibraryStatus}) {
  return (
    <div className={`library ${libraryStatus ? 'active' : ''}`}>
      <h3>All songs</h3>
      <div className='library-songs'>
        {songs.map(song => <LibrarySong setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} songs={songs} song={song} setCurrentSong={setCurrentSong} id={song.id} key={song.id} />)}
      </div>
    </div>
  )
}

export default Library
