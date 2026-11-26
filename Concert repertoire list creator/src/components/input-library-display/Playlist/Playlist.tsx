import type { FormValues } from "../../../types/types";

function List ({song, deleteFromPlaylist}: {song: FormValues, deleteFromPlaylist: (song: FormValues) => void}){
    return(
        <li>
            <span>`${song.title} - ${song.keySignature}`</span>
            <button onClick={() => deleteFromPlaylist(song)}>Delete</button>
        </li>
    )
}

export function Playlist ({list, deleteFromPlaylist}: {list: FormValues[], deleteFromPlaylist: (song: FormValues) => void}) {
    return (
        <div>
            <h3>My playlist</h3>
            <ul>
                {list.map(item=> <List key={item.title} song={item} deleteFromPlaylist={deleteFromPlaylist}/>)}
            </ul>
        </div>
    )
}