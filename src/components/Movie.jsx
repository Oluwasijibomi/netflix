import React from 'react'
import {Col, Image} from "react-bootstrap"

function Movie(props) {
  return (
    <Col className="mb-2">
      <Image className="img-fluid" src={props.imageSrc} alt={props.title} />

      
    </Col>
  )
}

export default Movie
