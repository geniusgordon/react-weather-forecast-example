import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const WeatherForm = ({ onChange, onSubmit }) => (
  <Form inline onSubmit={onSubmit}>
    <FormGroup>
      <Input
        name="city"
        id="city"
        placeholder="City"
        onChange={onChange}
      />
    </FormGroup>
    <FormGroup>
      <Input
        type="select"
        name="unit"
        id="unit"
        onChange={onChange}
      >
        <option value="C">°C</option>
        <option value="F">°F</option>
      </Input>
    </FormGroup>
    <Button color="primary">Check</Button>
  </Form>
);

export default WeatherForm;
