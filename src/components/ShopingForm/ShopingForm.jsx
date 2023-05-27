import React from 'react';
import {
  Form,
  Label,
  Input,
  CheckboxLabel,
  CheckboxInput,
  Button,
} from './ShopingForm.styled';

const INITIAL_STATE = {
  name: '',
  phone: '',
  email: '',
  address: '',
  callback: false,
};

export class ShopingForm extends React.Component {
  state = {
    ...INITIAL_STATE,
    historyArr: [],
  };

  handleChange = e => {
    const { name, value, checked, type } = e.target;

    const newValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: newValue });
  };

  handleSubmitOrder = e => {
    e.preventDefault();
    // const historyArrToAdd = this.handleCreateHistoryArrItem();

    // this.setState(prevState => {
    //   if (prevState.historyArr.length === 0) {
    //     return { historyArr: historyArrToAdd };
    //   }
    //   console.log(this.state.historyArr);
    //   return { historyArr: prevState.historyArr, historyArrToAdd };
    // });

    console.log(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleCreateHistoryArrItem = () => {
    const historyArrItem = [...this.props.productsSelected, this.state];
    return historyArrItem;
  };

  render() {
    const { name, email, phone, address, callback } = this.state;
    const countTotalPrice = this.props.productsSelected.reduce(
      (total, { price, quantity }) => (total = total + price * quantity),
      0
    );

    return (
      <Form onSubmit={this.handleSubmitOrder}>
        <Label>
          Name
          <Input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
            value={name}
            onChange={this.handleChange}
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
            onChange={this.handleChange}
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
            onChange={this.handleChange}
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
            onChange={this.handleChange}
          />
        </Label>

        <CheckboxLabel>
          Сall back after ordering?
          <CheckboxInput
            name="callback"
            type="checkbox"
            checked={callback}
            onChange={this.handleChange}
          />
        </CheckboxLabel>

        <Button type="submit">Place Order to {countTotalPrice}$</Button>
      </Form>
    );
  }
}
