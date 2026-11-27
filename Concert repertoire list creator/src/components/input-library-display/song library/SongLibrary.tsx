import { type FormValues } from "../../../types/types"
import Styles from './songLibrary.module.css'


function LibraryRow ({song, addToPlaylist, deleteFromLibrary}: {
    song: FormValues, 
    addToPlaylist: (song: FormValues) => void, 
    deleteFromLibrary: (song: FormValues) => void}) {
    
    return(
        <tr>
            <td className={Styles['title-cell']}>{`${song.title} - `}</td>
            <td className={Styles['keyS-cell']}>{song.keySignature}</td>
            <td>
                <div className={Styles['buttons-div']}>
                    <button onClick={() => addToPlaylist(song)}>+</button>
                    <button onClick={() => deleteFromLibrary(song)}>x</button>
                </div>
            </td>
        </tr>
    )
}

export function SongLibrary (props: {
    library: FormValues[], 
    addToPlaylist: (song: FormValues) => void, 
    deleteFromLibrary: (song: FormValues) => void}) {
    
    

    return(
        <div className={Styles['table-container']}>
            <div className={Styles['table-title']}>
            <h3>Song Library</h3>
            </div>
            <table>
                <tbody>
                    {props.library.map(item => 
                        <LibraryRow key={item.id} 
                        song={item} 
                        addToPlaylist={props.addToPlaylist} 
                        deleteFromLibrary={props.deleteFromLibrary}/>)}
                </tbody>
            </table>
        </div>
    )
}