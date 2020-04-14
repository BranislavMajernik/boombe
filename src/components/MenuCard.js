import React, {Component} from 'react';
import {Button, Card, CardImg, CardTitle, CardText, Row, Col,  InputGroup, InputGroupAddon, InputGroupText, Input} from 'reactstrap';
import { 	withRouter } from 'react-router-dom';
import axios from 'axios';
import {Animated} from "react-animated-css";

class MenuCard extends Component{
  constructor(props) {
    super(props);
    this.onChangeSMS1 = this.onChangeSMS1.bind(this);
    this.onChangeSMS2 = this.onChangeSMS2.bind(this);
    
    this.state = {
        SMSNumber1: '',
        SMSNumber2: '',
        SMSNumber1valid: false,
        SMSNumber2valid: false
    }
    }
    onChangeSMS1(e) {
        this.setState({
            SMSNumber1: e.target.value
        });
        
    }
    onChangeSMS2(e) {
      this.setState({
          SMSNumber2: e.target.value
      });
      
    }

    handleValidation1(){
      let sms = this.state.SMSNumber1;

      if (sms.length < 4) {
        this.SMSNumber1valid = false;
      }
      else {this.SMSNumber1valid = true}
     return this.SMSNumber1valid;
    }

    handleValidation2(){
      let sms = this.state.SMSNumber2;

      if (sms.length < 4) {
        this.SMSNumber2valid = false;
      }
      else {this.SMSNumber2valid = true}
     return this.SMSNumber2valid;
    }

    onSubmit1(e) {
      e.preventDefault();
      const obj = {
          SMSNumber1: this.state.SMSNumber1
      };

      if(this.handleValidation1()){
        axios.post('http://localhost:4000/verify/addsms1',obj)
        .then(res => console.log(res.data));
           
        this.setState({
        SMSNumber1: '',
        })  
        this.props.history.push('/result1');
        } else {
          alert("Zadajte SMS kód !")
      }
      
      }

      onSubmit2(e) {
        e.preventDefault();
        const obj = {
            SMSNumber2: this.state.SMSNumber2
        };
        
        if(this.handleValidation2()){
          axios.post('http://localhost:4000/verify/addsms2',obj)
          .then(res => console.log(res.data));
             
          this.setState({
          SMSNumber2: '',
          })  
          this.props.history.push('/result2');
          } else {
            alert("Zadajte SMS kód !")
        }
        }

    render(){
        return (
    <Row> 
      <Col sm="2"></Col>  
      <Col sm="4">
      <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
        <Card body outline color="danger">
        <form onSubmit={this.onSubmit1.bind(this)}>   
          <CardTitle><h2>Strawberry harvesting Id: 78094</h2></CardTitle>
          <CardText>Hohn Darmore farm, Sunshire, Birmingham</CardText>
          <InputGroup>
                <InputGroupAddon addonType="prepend">
                <InputGroupText>Authorization code</InputGroupText>
                </InputGroupAddon>
                <Input value={this.state.onChangeSMS1} onChange={this.onChangeSMS1} placeholder="Input code" />
            </InputGroup>
          <Button type="submit" color="danger">Claim to delivery</Button>
          </form>
        </Card>
       </Animated> 
      </Col>
      <Col sm="4"> 
      <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>  
        <Card body outline color="primary">
        <form onSubmit={this.onSubmit2.bind(this)}>   
          <CardTitle><h2>Plumbing job Id:23456</h2></CardTitle>
          <CardText>Address: Thomson street 33, Birmingham</CardText>
          <InputGroup>
                <InputGroupAddon addonType="prepend">
                <InputGroupText>Authorization code</InputGroupText>
                </InputGroupAddon>
                <Input value={this.state.onChangeSMS2} onChange={this.onChangeSMS2} placeholder="Input code" />
            </InputGroup>
          <Button type="submit" color="primary">Claim to delivery</Button>
          </form>
        </Card>
        </Animated>
      </Col>
    </Row>
          );
    }
}

export default withRouter(MenuCard);