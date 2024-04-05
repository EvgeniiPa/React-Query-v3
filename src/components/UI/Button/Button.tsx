interface ButtonComponent{
    text: string,
    onClick?:()=> void,
    type?:   "submit" | "reset" | "button" | undefined,
}


export default function Button({text, onClick, type}: ButtonComponent){
    return (
        <button  type={type} onClick={onClick} style={{margin:'10px'}}>{text}</button>
    )
}