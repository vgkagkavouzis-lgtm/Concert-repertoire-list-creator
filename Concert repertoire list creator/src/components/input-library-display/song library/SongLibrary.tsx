import { type FormValues } from "../../../types/types"

function List ({song}: {song: FormValues}) {
    return(
        <li><span>{`${song.title} - ${song.keySignature}`}</span></li>
    )
}

export function SongLibrary (props: {library: FormValues[]}) {
    
    return(
        <ul>
            {props.library.map(item => <List key={item.title} song={item}/>)}
        </ul>
    )
}