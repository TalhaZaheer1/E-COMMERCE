import { Link } from "react-router-dom";

export default function HomeLink({ left,setLeft,text,to }){
    return(
        <Link onMouseEnter={() => setLeft(true)} onMouseLeave={() => setLeft(false)} className={`underLineHome ${left ? "before:left-0" : "before:right-0" }`}>{text}</Link>
    )
}