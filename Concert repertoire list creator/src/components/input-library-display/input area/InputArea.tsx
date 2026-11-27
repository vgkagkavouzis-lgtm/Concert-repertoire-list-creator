import { useState, type SubmitEvent } from "react";
import { type InputIdentifier, type InputProps, type FormValues } from "../../../types/types";
import Styles from './inputArea.module.css'
const emptyForm = {title: '', keySignature: ''};

export function Input ({id, labelText, changeFunction, value, type = 'text', ...props}: InputProps) {
    return(
        <div className={Styles['parent-label-input-container']}>
            <label htmlFor={id}>{labelText}</label>
            <input id={id} value={value} type={type} onChange={changeFunction} {...props}/>  
        </div>
    )
    
}

export function InputArea (props: { onAddSong: (song: FormValues) => void}) {

const [mainInput, setMainInput] = useState<FormValues>(emptyForm);

    function handleChange (inputIdentifier: InputIdentifier, newValue: string) {
        setMainInput (prev => {
            return {
                ...prev,
                [inputIdentifier]: newValue
            }
        })
    }

    function handleFormSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        props.onAddSong(mainInput);
        setMainInput(emptyForm);
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit} className={Styles['inputs-container-form']}>
                <Input  id='titleInput' 
                        labelText='Title' 
                        value={mainInput.title}     
                        changeFunction={(e) => {handleChange ('title', e.target.value)}}/>
                <Input  id='keySignature' 
                        labelText='Key signature' 
                        value={mainInput.keySignature}     
                        changeFunction={(e) => {handleChange ('keySignature', e.target.value);}}/>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}