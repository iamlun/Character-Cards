import CharacterHead from "components/CharacterHead/CharacterHead";
export default {
    title:'CharacterHead',
    component:CharacterHead,

}

const Template = (args) => <CharacterHead {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    face:0,
    head:0,
    accessory:0,
    skin:0,
};
