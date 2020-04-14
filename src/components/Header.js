import React, {Component} from 'react';
import {Jumbotron, Button} from 'reactstrap';
import bgimage from './gear1.png'
import MenuCard from './MenuCard';
import Tabs from './Tabs'


export default class Header extends Component{
    render(){
        return (
            <div>
              <Jumbotron style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}>
              <Tabs />
              </Jumbotron>
            </div>
          );
    }
}

