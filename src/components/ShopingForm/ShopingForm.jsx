import React from 'react';
import {
  Form,
  Label,
  Input,
  CheckboxLabel,
  CheckboxInput,
  Button,
} from './ShopingForm.styled';

export const ShopingForm = ({
  options,
  handleChange,
  handleSubmitOrder,
  productsSelected,
}) => {
  const { name, email, phone, address, callback } = options;
  const countTotalPrice = productsSelected.reduce(
    (total, { price, quantity }) => (total = total + price * quantity),
    0
  );

  return (
    <Form onSubmit={handleSubmitOrder}>
      <Label>
        Name
        <Input
          type="text"
          placeholder="Enter your name"
          name="name"
          required
          value={name}
          onChange={handleChange}
        />
      </Label>

      <Label>
        Email
        <Input
          type="email"
          placeholder="Enter your email"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />
      </Label>

      <Label>
        Phone
        <Input
          type="tel"
          placeholder="Enter phone"
          name="phone"
          required
          value={phone}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Address
        <Input
          type="address"
          placeholder="Enter adress"
          name="address"
          required
          value={address}
          onChange={handleChange}
        />
      </Label>

      <CheckboxLabel>
        Сall back after ordering?
        <CheckboxInput
          name="callback"
          type="checkbox"
          checked={callback}
          onChange={handleChange}
        />
      </CheckboxLabel>

      <Button type="submit">Place Order to {countTotalPrice}$</Button>
    </Form>
  );
};
