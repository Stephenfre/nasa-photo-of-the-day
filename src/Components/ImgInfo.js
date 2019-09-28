import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col
} from "reactstrap";

export default function NasaInfo(props) {
  return (
    <Col>
      <Card className="nasa-info" key={props.id}>
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.date}</CardSubtitle>
          <CardText>{props.explanation}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
}
