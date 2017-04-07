import React from 'react';
import taiwanCities from './taiwanCities.json';
import {
  Button,
  Container,
  Col,
  Form,
  FormGroup,
  Input,
  Row,
} from 'reactstrap';

const WeatherForm = ({ onChange, onSubmit }) => (
  <Container>
    <Col sm="12" md={{ size: 8, offset: 2 }}>
      <Form inline onSubmit={onSubmit}>
        <FormGroup>
          <Input
            type="select"
            name="city"
            id="city"
            placeholder="City"
            onChange={onChange}
          >
            {Object.keys(taiwanCities).map((city, key) => (
              <option key={key} value={city}>{taiwanCities[city]}</option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Input type="select" name="unit" id="unit" onChange={onChange}>
            <option value="C">°C</option>
            <option value="F">°F</option>
          </Input>
        </FormGroup>
        <Button color="primary">Check</Button>
      </Form>
    </Col>
  </Container>
);

export default WeatherForm;
