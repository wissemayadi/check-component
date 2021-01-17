import logo from './logo.svg';
import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import Imagep from './Component/Profile/ProfilPhoto';
import Nameprofil from './Component/Profile/FullName';
import FullAdress from './Component/Profile/Addresse';
import './Component/Profile/style.css';
import Intr from './Component/Profile/intro';
function App() {
  return (
    <div className="App">
      <Intr/>
      <Card>
    <Card.Img />
    <Imagep/>
    <Card.Body>
      <Card.Text>
       <Nameprofil/>
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  <Card>
    <Card.Body>
      <Card.Text>
       <FullAdress/>
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
  )}
export default App;
