import { type FormValues } from "../../../types/types"
import Styles from './songLibrary.module.css'


function LibraryRow ({song, addToPlaylist, deleteFromLibrary}: {
    song: FormValues, 
    addToPlaylist: (song: FormValues) => void, 
    deleteFromLibrary: (song: FormValues) => void}) {
    
    return(
        <tr>
            <td>{song.title}</td>
            <td>{song.keySignature}
                <div className={Styles['buttons-div']}>
                    <button onClick={() => addToPlaylist(song)}>
                        <img src="images/add.svg" alt="add button" />
                    </button>
                    <button onClick={() => deleteFromLibrary(song)}>
                        <img src="images/delete.svg" alt="delete button" />
                    </button>
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
            <div className={Styles['table-and-button-container']}>
                <table>
                    <thead>
                        <tr>
                            <td>Song Name</td>
                            <td>Key Signature</td>
                        </tr>
                    </thead>
                    <tbody>
                        {props.library.map(item => 
                            <LibraryRow key={item.id} 
                            song={item} 
                            addToPlaylist={props.addToPlaylist} 
                            deleteFromLibrary={props.deleteFromLibrary}/>)}
                    </tbody>
                </table>
                <div className={Styles['buttons-visual-container']}></div>
            </div>
        </div>
    )
}