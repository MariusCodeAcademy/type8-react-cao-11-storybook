import React from 'react';
import { PrimaryButton } from '../Button/Button.stories';
import { PasswordInput } from '../Input/Input.stories';
import { EmailInput } from './../Input/Input.stories';

export default {
  title: 'Form/Login',
};

export const LoginForm = () => (
  <div>
    <EmailInput />
    <PasswordInput />
    <PrimaryButton />
  </div>
);
