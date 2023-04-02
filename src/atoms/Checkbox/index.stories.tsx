// import React from 'react';
// import { Meta, Story } from '@storybook/react';
// import { Checkbox, CheckboxProps } from './Checkbox';

// export default {
//   title: 'Atoms/Checkbox',
//   component: Checkbox,
//   argTypes: {
//     label: { control: 'text' },
//     checked: { control: 'boolean' },
//     disabled: { control: 'boolean' },
//     onChange: { action: 'changed' },
//   },
// } as Meta;

// const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

// export const WithLabel = Template.bind({});
// WithLabel.args = {
//   label: 'I agree to the Privacy Policy',
// };

// // export const Checked = Template.bind({});
// // Checked.args = {
// //   checked: true,
// // };

// // export const CheckedDisabled = Template.bind({});
// // CheckedDisabled.args = {
// //   checked: true,
// //   disabled: true,
// // };

import React from "react";
import Checkbox from ".";

export default {
  title: "Atoms/Checkbox",
  component: Checkbox,
};

export const ThePrivacyPolicy = () => (
  <Checkbox
    label="I agree to the Privacy Policy"
    isChecked={false}
    onChange={(isChecked) =>
      console.log(
        `Unchecked checkbox is now ${isChecked ? "checked" : "unchecked"}`
      )
    }
  />
);

export const RememberMe = () => (
  <Checkbox
    label="Remember Me"
    isChecked={true}
    onChange={(isChecked) =>
      console.log(
        `Checked checkbox is now ${isChecked ? "checked" : "unchecked"}`
      )
    }
  />
);
