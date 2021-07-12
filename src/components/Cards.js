import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

class Cards extends Component {


  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="3">
            <Card className="text-white bg-info card text-center">
              <CardBody>
                <blockquote className="card-bodyquote">
                  <header>Number of Bids</header>
                  <h1>{this.props.data}</h1>
                </blockquote>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-warning card text-center">
              <CardBody>
                <blockquote className="card-bodyquote">
                  <header>Highest bid</header>
                  <h1>{this.props.highest}</h1>
                </blockquote>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-success card text-center">
              <CardBody>
                <blockquote className="card-bodyquote">
                  <header>Users online</header>
                  <h1>{this.props.people}</h1>
                </blockquote>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

Cards.propTypes = {
  data: PropTypes.string,
  highest: PropTypes.string,
  people: PropTypes.string
};

export default Cards;