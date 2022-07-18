
import './CreateStep.css';
import Character from 'components/Character';
import Header from 'components/Header/Header';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {setHead,setFace,setBody} from'../reducers/user';

const HEAD_NUM=[0,1,2,3,4,5,6,7,8,9,10,11];
const FACE_NUM=[0,1,2,3,4,5,6,7,8];
const BODY_NUM=[0,1,2,3,4,5,6];

function CreateStep1 (){
    const user=useSelector((state)=>state.user.value);
    const dispatch=useDispatch();
    return(
        <div className="create_step_withHeader_wrapper">
            <Header step={1} />
            <div className="create_step_wrapper">
            <div className="editor_wrapper">
                <div className="editor_controlPanes">
                    <div className="editor_controlPane">
                        <h2 className="controlPane-title">
                            Heads
                            <span className="controlPane-title-metadata">12 options</span>
                        </h2>
                        <div className="controlPane-buttonRow">
                            {HEAD_NUM.map((h,i)=>(
                                <button key={i} className={user.head===i?'controlPane-button--pressed':'controlPane-button'} onClick={()=>{dispatch(setHead(i))}}>{`0${i+1}`}</button>
                            ))}
                        </div>
                    </div>
                    <div className="editor_controlPane">
                        <h2 className="controlPane-title">
                            Faces
                            <span className="controlPane-title-metadata">9 options</span>
                        </h2>
                        <div className="controlPane-buttonRow">
                            {FACE_NUM.map((f,i)=>(
                                <button key={i} className={user.face===i?'controlPane-button--pressed':'controlPane-button'} onClick={()=>{dispatch(setFace(i))}}>{`0${i+1}`}</button>
                            ))}
                        </div>
                    </div>
                    <div className="editor_controlPane">
                        <h2 className="controlPane-title">
                            Bodies
                            <span className="controlPane-title-metadata">7 options</span>
                        </h2>
                        <div className="controlPane-buttonRow">
                            {BODY_NUM.map((b,i)=>(
                                <button key={i} className={user.body===i?'controlPane-button--pressed':'controlPane-button'} onClick={()=>{dispatch(setBody(i))}}>{`0${i+1}`}</button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="character_wrapper">
                <div style={{ height: 570 }}>
                <Character body={user.body} face={user.face} head={user.head} accessory={user.accessory} skin={user.skinColor} clothe={user.clothesColor}/>
                </div>
            </div>
            </div>
        </div>
    )
};

export default CreateStep1;