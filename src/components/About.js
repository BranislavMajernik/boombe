import React,{Component} from 'react';
import {Container,Jumbotron,UncontrolledCarousel, Row, Col} from 'reactstrap';


export default class About extends Component{

    items = [
        {
          src: './desert.png',
          altText: 'Spájame sa v pomoci',
          caption: 'Dáta',
          header: 'Digitálne zdravotné služby',
          key: '1'
        },
        {
          src: './desert.png',
          altText: 'Spájame sa v pomoci',
          caption: 'Integrácia',
          header: 'Digitálne zdravotné služby',
          key: '2'
        },
        {
          src: './desert.png',
          altText: 'Spájame sa v pomoci',
          caption: 'Aplikácie',
          header: 'Digitálne zdravotné služby',
          key: '3'
        }
      ];

    render(){
        return(
            <div>
                <Jumbotron fluid>
                <Container fluid>
                <h1 className="display-5">COVID Pomoc</h1>
                <p className="lead">Rýchla pomoc.</p>
                <hr className="my-2" />
                <p></p>
                <Row>
                <Col sm="4"></Col> 
                <Col sm="4"><UncontrolledCarousel items={this.items} /></Col>
                
                </Row>
              </Container>
                </Jumbotron>
            </div>
        );
    }
}