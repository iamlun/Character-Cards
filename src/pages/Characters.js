import { Link } from 'react-router-dom';
import './Characters.css';
import React from 'react';
import ShowUser from 'components/ShowUser';
const Chracters = () => {
    const listAlluser=()=>{
        let usersArray=[];
        for(let i=0;i<localStorage.length;i++){
            usersArray[i]=JSON.parse(localStorage.getItem(`${i}`));            
        }
        return usersArray;
    }
    return (
        <div className="charactersPage_background">
            <div className="charactersPage_wrapper">
                <div className="charactersPage_header">
                    <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="deeppink" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline></svg>
                    </Link>
                    All Characters
                </div>
                <div className="charactersPage_characters">
                    {listAlluser().map((user,i)=>(
                        <ShowUser name={user.name} id={user.id} face={user.face} head={user.head} acc={user.accessory} skin={user.skinColor} clothe={user.clothesColor} body={user.body} key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Chracters;