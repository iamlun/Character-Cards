
import './CreateStep.css';
import Header from 'components/Header/Header';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {setAcc,setSkin,setClothe} from '../reducers/user';
import Character from 'components/Character';


function CreateStep2(){
    const user=useSelector((state)=>state.user.value);
    const dispatch=useDispatch();
    const accnum=[0,1,2,3,4,5];
    const skinnum=['rgb(244, 213, 189)','rgb(239, 208, 169)','rgb(242, 197, 145)','rgb(219, 185, 143)','rgb(222, 178, 125)','rgb(209, 150, 87)','rgb(199, 146, 77)','rgb(189, 126, 71)','rgb(172, 111, 57)','rgb(134, 82, 39)','rgb(106, 67, 37)'];
    const clothenum=['#E16B8C','#F17C67','#FB966E','#FBE251','#6C6024','#90B44B','#A8D8B9','#6699A1','#2E5C6E','#6A4C9C','#828282'];

        return(
            <div className="create_step_withHeader_wrapper">
                <Header step={2} />
                <div className="create_step_wrapper">
                <div className="editor_wrapper">
                    <div className="editor_controlPanes">
                        <div className="editor_controlPane">
                            <h2 className="controlPane-title">
                                Accessory
                                <span className="controlPane-title-metadata">6 options</span>
                            </h2>
                            <div className="controlPane-buttonRow">
                                {accnum.map((a,i)=>(
                                    <button key={i} className={user.accessory===i?'controlPane-button--pressed':'controlPane-button'} onClick={()=>{dispatch(setAcc(i))}}>{`0${i+1}`}</button>
                                ))}
                            </div>
                        </div>
                        <div className="editor_controlPane">
                            <h2 className="controlPane-title">
                                Skin Color
                                <span className="controlPane-title-metadata">11 options</span>
                            </h2>
                            <div className="controlPane-buttonRow">
                                {skinnum.map((s,i)=>(
                                    <button key={i} style={{backgroundColor:`${s}`}} className={user.skinColor===i?'controlPane-button--pressed':'controlPane-button'} onClick={()=>{dispatch(setSkin(i))}}></button>
                                ))}
                            </div>
                        </div>
                        <div className="editor_controlPane">
                            <h2 className="controlPane-title">
                                Clothing color
                                <span className="controlPane-title-metadata">11 options</span>
                            </h2>
                            <div className="controlPane-buttonRow">
                                {clothenum.map((c,i)=>(
                                    <button key={i} style={{backgroundColor:`${c}`}} className={user.clothesColor===i?'controlPane-button--pressed':'controlPane-button'} onClick={()=>{dispatch(setClothe(i))}}></button>
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
        );
};
export default CreateStep2;