import Button from "components/Button";
import './IntroPage.css';
import {useSelector} from "react-redux";

function IntroPage(){
    const user=useSelector((state)=>state.user.value);
    return(
        <div className="intropage_wrapper">
            <div className="intro_title">
                Welcome
            </div>
            <div className="intro_button">
                <Button btn={{type:'primary',text:'New Character',url:'./new/step1'}} />
                <Button btn={{type:'normal',text:'Characters',url:'./characters'}} />
            </div>
        </div>
    )
}
export default IntroPage;