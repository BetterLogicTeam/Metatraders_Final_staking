import { Link } from 'react-router-dom';
import './Button.css'
const Button = ({text,onclick}) => {
    return (  
        <div className=" Button py-1 btn rounded-2">
            { onclick != undefined ? <Link to={onclick}><button className='p-1'>{text}</button></Link> : <button className='p-1'>{text}</button> }
        </div>
    );
}
 
export default Button;