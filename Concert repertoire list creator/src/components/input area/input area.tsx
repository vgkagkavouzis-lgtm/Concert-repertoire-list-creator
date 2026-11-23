export function Input ({id, labelText}) {
    return(
        <>
            <label htmlFor={id}>{labelText}</label>
            <input id={id} type="text" required />  
        </>
    )
    
}

export function InputArea () {
    return (
        <div>
            <Input id={}/>
        </div>
    )
}