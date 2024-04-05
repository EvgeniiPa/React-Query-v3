interface InputType{
    type: string,
    placeholder?: string,
}


export default function Input({type, placeholder}: InputType){
    return(
        <input type={type} placeholder={placeholder}/>
    )
}