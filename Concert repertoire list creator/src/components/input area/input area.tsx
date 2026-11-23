import { useState } from "react"

export function Input ({id, labelText, value, changeFunction}) {
    return(
        <div>
            <label htmlFor={id}>{labelText}</label>
            <input id={id} value={value} type="text" required onChange={changeFunction}/>  
        </div>
    )
    
}

export function InputArea () {
    const [mainInput, setMainInput] = useState({title: '', 
                                                key: ''
    });

    function handleChange (inputIdentifier, newValue) {
        setMainInput (prev => {
            return {
                ...prev,
                [inputIdentifier]: newValue
            }
        })
    }
    return (
        <div>
            <Input id='titleInput' value={mainInput.title} labelText='Title' changeFunction={(e) => handleChange ('title', e.target.value)}/>
        </div>
    )
}