import Button from "components/Button";
import { MemoryRouter } from "react-router-dom";
export default {
    title:'Button',
    component:Button,
    decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)] 

}

const Template = (args) => <Button {...args} />;

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
    btn:{
        type:'normal',
        url:'./characters',
        text:'characters',
    }
};
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    btn:{
        type:'primary',
        url:'./new/step1',
        text:'New Character',
    }
};
