// import styles from './Button.module.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './Button.css';

function Button(n){
    return(
            <Link to={n.btn.url} className={`button_wrapper_${n.btn.type}`} >{n.btn.text}</Link>        
    )
}

export default Button;