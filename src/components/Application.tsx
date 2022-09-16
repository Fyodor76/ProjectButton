import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import Button from '@src/components/Button';



const Application: React.FC = () => {

  const [value, setValue] = useState<number>(1)

  const onClick = () => {
    setValue(prevState => prevState+1)
  }

  return (
    <React.Fragment>
      <h1>Привет, Сергей!</h1>
      <h2>Value is equal to {value}</h2>
      <div>
        <Button>Button</Button>
      </div>

    </React.Fragment>
  );
};

export default hot(module)(Application);
