
import './CreateStep.css';
import Character from 'components/Character';
import Header from 'components/Header/Header';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setName } from 'reducers/user';

function CreateStep3(){
        const user=useSelector((state)=>state.user.value);
        const dispatch=useDispatch();

        return(
            <div className="create_step_withHeader_wrapper">
            <Header step={3} />
            <div className="create_step_wrapper">
                <div className="editor_wrapper">
                    <div className="editor_controlPanes">
                        <div className="input_wrapper">
                            <h2 className="input_title">Name</h2>
                            <input type="text" className="input_input" value={user.name} onChange={(e)=>dispatch(setName(e.target.value))}/>
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
export default CreateStep3;