import { useState, type JSXElementConstructor } from "react"
import { InputArea } from "./input area/InputArea"
import { SongLibrary } from "./song library/SongLibrary"
import { type FormValues } from "../../types/types"

export function InputLibraryDisplay () {
    const [song, setSong] = useState<FormValues>({title: '',
                                                  keySignature: 'string'
                                                 });
    const [library, setLibrary] = useState<FormValues[]>([]);

    function addToLibrary (newSong: FormValues) {
        setLibrary(prev => [...prev, newSong])
    }


    return (
        <>
            <InputArea onAddSong={addToLibrary}/>
            <SongLibrary library={library}/>
        </>
    )
}