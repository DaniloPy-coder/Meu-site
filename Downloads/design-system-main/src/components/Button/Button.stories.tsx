import React from 'react';
import Button from "./Button.tsx";

export default {
  title: 'Button',
  component: Button,
};

export const Base: React.FC = () => (
  <Button onClick={() => console.log('Button clicked')} variant="solid">
    Click me
  </Button>
);

export const Outline: React.FC = () => (
  <Button onClick={() => console.log('Button clicked')} variant="outline">
    Click me
  </Button>
);

export const Text: React.FC = () => (
  <Button onClick={() => console.log('Button clicked')} variant="text">
    Click me
  </Button>
);
