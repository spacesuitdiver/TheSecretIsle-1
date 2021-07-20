import React, {useEffect, useState} from "react";
import Container from "../components/Container";
import axios from "axios"
import Row from "../components/Row";
import Col from "../components/Col";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState=("");

 // put this on the submit button for the sign up
  function createUser(){
    
    axios.get(`/api/story/`)
    .then(res => {
      console.log(res.data)
    })
    
      
  }

  function handleSubmit () {

  }
    return (
        <Container>
        <Row>
          <Col size="md-12">
            <h1>Test Sign Up Page</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
              consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Pellentesque et dui id justo finibus
              sollicitudin at et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi
              gravida. Duis eget vestibulum quam, ut porttitor sem. Donec sagittis mi sollicitudin
              turpis semper, et interdum risus lobortis. Vestibulum suscipit nunc non egestas
              tristique. Proin hendrerit efficitur malesuada. Mauris lorem urna, sodales accumsan
              quam non, tristique tempor erat. Nullam non sem facilisis, tempus tortor sit amet,
              volutpat nisl. Ut et turpis non nunc maximus mollis a vitae tortor. Pellentesque
              mattis risus ac quam laoreet cursus. Praesent suscipit orci neque, vestibulum
              tincidunt augue tincidunt non. Duis consequat mattis tortor vitae mattis.
            </p>
          </Col>
        </Row>
      </Container>
    )
}

export default SignUp