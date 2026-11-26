import { type FormValues } from "../../../types/types"

function LibraryList ({song, addToPlaylist, deleteFromLibrary}: {
    song: FormValues, 
    addToPlaylist: (song: FormValues) => void, 
    deleteFromLibrary: (song: FormValues) => void}) {
    
    return(
        <li><span>{`${song.title} - ${song.keySignature} `}</span>
            <button onClick={() => addToPlaylist(song)}>Add to program</button>
            <button onClick={() => deleteFromLibrary(song)}>Delete</button>
        </li>
    )
}

export function SongLibrary (props: {
    library: FormValues[], 
    addToPlaylist: (song: FormValues) => void, 
    deleteFromLibrary: (song: FormValues) => void}) {
    
    return(
        <div>
            <h4>Song Library</h4>
            <ul>
                {props.library.map(item => 
                    <LibraryList key={item.title} 
                    song={item} 
                    addToPlaylist={props.addToPlaylist} 
                    deleteFromLibrary={props.deleteFromLibrary}/>)}
            </ul>
        </div>
    )
}