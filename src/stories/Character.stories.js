import Character from "components/Character";

export default {
    title:'Character',
    component:Character,

}

const Template = (args) => <Character {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    body:0,
    face:0,
    head:0,
    accessory:0,
    skin:0,
    clothe:0
};
