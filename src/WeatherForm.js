import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import styled from 'styled-components';
import taiwanCities from './taiwanCities.json';

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const WeatherForm = ({ onChange, onSubmit }) => (
  <FormContainer>
    <Form inline onSubmit={onSubmit}>
      <FormGroup>
        <Input
          id="city"
          type="select"
          name="city"
          defaultValue=""
          onChange={onChange}
        >
          <option value="" disabled>選擇城市</option>
          {Object.keys(taiwanCities).map(city => (
            <option key={city} value={city}>{taiwanCities[city]}</option>
          ))}
        </Input>
      </FormGroup>
      <FormGroup>
        <Input type="select" name="unit" id="unit" onChange={onChange}>
          <option value="C">°C</option>
          <option value="F">°F</option>
        </Input>
      </FormGroup>
    </Form>
  </FormContainer>
);

export default WeatherForm;
