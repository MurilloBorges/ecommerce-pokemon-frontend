import React from 'react';

import { QuantitativeGroupButtonProps } from '../../@types';

import Button from '../atoms/Button';
import Input from '../atoms/Input';

const QuantitativeGroupButton: React.FC<QuantitativeGroupButtonProps> = ({
  handleQuantity,
  quantity,
  labelValue,
}: QuantitativeGroupButtonProps) => (
  <div className="group-input-button">
    <Button
      type="button"
      text="-"
      handleClick={() => handleQuantity('subtract', quantity)}
    />
    <Input
      name={`number-input-${Math.floor(Math.random() * 9999)}`}
      type="text"
      value={`${quantity} ${labelValue}`}
      handleChange={() => {}}
    />
    <Button
      type="button"
      text="+"
      handleClick={() => handleQuantity('sum', quantity)}
    />
  </div>
);

export default QuantitativeGroupButton;
