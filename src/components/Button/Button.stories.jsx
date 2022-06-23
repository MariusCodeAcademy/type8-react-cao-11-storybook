import React from 'react';
import Button from './Button';

export default {
  title: 'UI/Button',
  component: Button,
};

export const PrimaryButton = () => <Button>Click me</Button>;

export const PrimaryButtonLongText = () => (
  <Button>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, nulla.
  </Button>
);

export const SecondaryButton = () => <Button variant='secondary'>Click me</Button>;

//  jei norim kad mums veiktu controlls reikia naudoti args mechanizma
const Template = (args) => <Button {...args} />;
// funcijos kopija
export const SecondaryButtonArgs = Template.bind({});
SecondaryButtonArgs.args = {
  variant: 'secondary',
  children: 'Click me args',
};
export const PrimaryButtonArgs = Template.bind({});
PrimaryButtonArgs.args = {
  variant: 'primary',
  children: 'Click me args',
};
