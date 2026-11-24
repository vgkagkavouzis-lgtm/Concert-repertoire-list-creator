import { useState, type ChangeEvent } from "react"

type InputIdentifier = 'title' | 'keySignature' ;

type InputProps = {
    id: string;
    labelText: string;
    value: string;
    changeFunction: (e: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    type?: string;
}

type FormValues = {
    title: string;
    keySignature: string;
}

const emptyForm = {title: '', keySignature: ''};

export function Input ({id, labelText, changeFunction, value, type = 'text', ...props}: InputProps) {
    return(
        <div>
            <label htmlFor={id}>{labelText}</label>
            <input id={id} value={value} type={type} onChange={changeFunction} {...props}/>  
        </div>
    )
    
}

export function InputArea () {
    const [mainInput, setMainInput] = useState<FormValues>(emptyForm);

    function handleChange (inputIdentifier: InputIdentifier, newValue: string) {
        setMainInput (prev => {
            return {
                ...prev,
                [inputIdentifier]: newValue
            }
        })
    }

    function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(mainInput.title, mainInput.keySignature);
        setMainInput(emptyForm);
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <Input  id='titleInput' 
                        labelText='Title' 
                        value={mainInput.title}     
                        changeFunction={(e) => {handleChange ('title', e.target.value)}}/>
                <Input  id='keySignature' 
                        labelText='Key signature' 
                        value={mainInput.keySignature}     
                        changeFunction={(e) => {handleChange ('keySignature', e.target.value);}}/>
                <button type='submit'></button>
            </form>
        </div>
    )
}