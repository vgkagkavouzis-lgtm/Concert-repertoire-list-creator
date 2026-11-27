import type { FormValues } from "../../../types/types";
import Styles from './playlist.module.css'

function List ({song, deleteFromPlaylist}: {song: FormValues, deleteFromPlaylist: (song: FormValues) => void}){
    return(
        <tr>
            <td>{song.title}</td>
            <td>{song.keySignature}
               <div className={Styles['buttons-div']}>
                    <button onClick={() => deleteFromPlaylist(song)}>
                        <img src="images/delete.svg" alt="delete button" />
                    </button>
                </div>
            </td>
        </tr>
    )
}

export function Playlist ({list, deleteFromPlaylist}: {list: FormValues[], deleteFromPlaylist: (song: FormValues) => void}) {
    return (
        <div className={Styles['table-container']}>
            <div className={Styles['table-title']}>
                <h3>My Playlist</h3>
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
                {list.map(item=> <List key={item.title} song={item} deleteFromPlaylist={deleteFromPlaylist}/>)}
                    </tbody>
                </table>
                <div className={Styles['buttons-visual-container']}></div>
            </div>
        </div>

    )
}