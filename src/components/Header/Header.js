import './Header.css';
import { Link } from 'react-router-dom';
import {addUser} from 'reducers/users';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {add} from 'reducers/counter';
import { initAll } from 'reducers/user';

const Header = (step) => {
    let left;
    if(step.step===1){
        left='/';
    }else{
        left=`/new/step${step.step-1}`
    }
    const user=useSelector((state)=>state.user.value);
    const dispatch=useDispatch();
    const addCharacter=()=>{
        if(step.step===3){
            dispatch(addUser({id:localStorage.length,head:user.head,face:user.face,body:user.body,accessory:user.accessory,skinColor:user.skinColor,clothesColor:user.clothesColor,name:user.name}));
            localStorage.setItem(`${localStorage.length}`,JSON.stringify({id:localStorage.length,head:user.head,face:user.face,body:user.body,accessory:user.accessory,skinColor:user.skinColor,clothesColor:user.clothesColor,name:user.name}));
            dispatch(add());
            dispatch(initAll());
        }
    }

    return (
        <div className="Header_wrapper">
            <Link to={left} className="header_arrow_left">
                {(step.step===1)?
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="deeppink" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>:
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="deeppink" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                }
            </Link>
            <div className="header_dots">
                {step.step===1 ?<div className="header_dot_active"></div>:<div className="header_dot"></div>}
                <div className="header_line"></div>
                {step.step===2 ?<div className="header_dot_active"></div>:<div className="header_dot"></div>}
                <div className="header_line"></div>
                {step.step===3 ?<div className="header_dot_active"></div>:<div className="header_dot"></div>}
            </div>
            <Link to={(step.step===3)? `/characters`:`/new/step${step.step+1}`} className="header_arrow_right" onClick={addCharacter}>
                { (step.step===3)?
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="deeppink" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>:
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="deeppink" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
                }
            </Link>
        </div>
    );
}
 
export default Header;