import React from 'react';
import LibrarySong from './LibrarySong';


function Library({songs, setSongs, audioRef, isPlaying, setCurrentSong, libraryStatus, setLibraryStatus}) {
  return (
    <div>
      {songs.map(song => 
        <LibrarySong key={song.id} id={song.id} setSongs={setSongs} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlying={isPlaying}/>
      )}
    </div>
  )
}

export default Library
