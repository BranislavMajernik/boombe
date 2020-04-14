import React, {Component} from 'react';
import {Button, Card, CardImg, CardTitle, CardText} from 'reactstrap';
import {Animated} from "react-animated-css";

export default class BCard extends Component{
  render(){
    return (
      <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
        <Card body>
                <CardTitle>Special Treatment</CardTitle>
                <CardText>Adding complete information about your business helps you tell the best story about your business. You can add photos of your business & services, hours of operation, services offered and list the various ways customers can reach your business.</CardText>
                <Button>Update</Button>
        </Card>
       </Animated> 
    )}
  }
