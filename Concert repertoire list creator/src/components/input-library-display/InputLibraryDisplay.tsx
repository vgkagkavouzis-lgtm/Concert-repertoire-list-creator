import { useState, type JSXElementConstructor } from "react"
import { InputArea } from "./input area/InputArea"
import { SongLibrary } from "./song library/SongLibrary"
import { type FormValues, type ListFormat } from "../../types/types"
import { Playlist } from "./Playlist/Playlist"
import { v4 as uuidv4 } from 'uuid';
import Styles from './InputLibraryDisplay.module.css'


export function InputLibraryDisplay () {
    const [library, setLibrary] = useState<ListFormat[]>([]);

    const [playlist, setPlaylist] = useState<ListFormat[]>([])

    function addToLibrary (newSong: FormValues) {
        //unique id for every new input
        const id = uuidv4()
        setLibrary(prev => [...prev, {id: id, ...newSong}])
    }
    
    function deleteFromList ({list, song}: {list: ListFormat[], song: FormValues}) {
        const updatedList: ListFormat[] = list.filter(item => item!==song);
        if(list === library) {
            setLibrary(updatedList)
        } else if (list === playlist) {
            setPlaylist(updatedList)}
    }
    
    function addToPlaylist (newPlaylistSong: FormValues) {
        const id = uuidv4()
        setPlaylist(prev => [...prev, {id: id, ...newPlaylistSong}]);
    }

    return (
        <div className={Styles['container']}>
            <div>
                <InputArea onAddSong={addToLibrary}/>
                <Playlist 
                    list={playlist} 
                    deleteFromPlaylist={(song) => deleteFromList({list: playlist, song})}/>
            </div>
            <SongLibrary 
                library={library} 
                addToPlaylist={addToPlaylist} 
                deleteFromLibrary={(song) => deleteFromList({list: library, song})}/>
        </div>
    )
}