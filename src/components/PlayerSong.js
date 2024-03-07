/* eslint-disable no-unused-expressions */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAlignRight, faPause, faPlay } from '@fortawesome/free-solid-svg-icons'

function PlayerSong({id, songs, setSongs, songInfo, setSongInfo ,currentSong, setCurrentSong, isPlaying, setIsPlaying, audioRef}) {
    const activeLibraryHandler = nextPrev => {
        const newSongs = songs.map(s =>{
            if(s.id === nextPrev.id){
                return {...s, active : true}
            }else{
                return {...s, active : false}
            }
        }
        )
        setSongs(newSongs);
        if(isPlaying){
            audioRef.current.play()
        }
    }
    const dragHandler = e => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime : e.target.value})
    }
    const playSongHandler = () => {
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying)
        }else{
            audioRef.current.play();
            setIsPlaying(!isPlaying)
        }
    }
    const getTime = time => {
        Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2);
        const skipTrackHandler = async (direction) => {
            let currentIndex = songs.findIndex(s => {s.id === currentSong.id})
            if(direction === 'skip-forward'){
                await setCurrentSong(songs[(currentIndex+1)%songs.length])
                activeLibraryHandler(songs[(currentIndex+1)%songs.length])
            }
            if(direction === 'skip-back'){
                if((currentIndex-1) % songs.length === -1){
                    setCurrentSong(songs[songs.length - 1])
                    activeLibraryHandler(songs[songs.length - 1])
                    return;
                }
                await setCurrentSong(songs[(currentIndex - 1)%songs.length])
                activeLibraryHandler(songs[(currentIndex - 1)%songs.length])
            }
            if(isPlaying){
                audioRef.current.play()
            }
        }
    }

    const trackAnim = {transform : `translateX(${songInfo.animationPercentage}%)`}

  return (
    <div className='player'>
      <div className='time-control'>
        <p>{getTime(songInfo.currentTime)}</p>
        <div style={{background : `linear-gradient(to right, ${currentSong.color[0]}), ${currentSong.color[1]}`}} className='track'>
            <input type='range' min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragHandler}/>
            <div style={trackAnim} className='animate-track'></div>
        </div>
        <p>{songInfo}</p>
      </div>
    </div>
  )
}

export default PlayerSong
