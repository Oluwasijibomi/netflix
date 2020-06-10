import React from "react"
import {Container, Row, Dropdown, Col} from "react-bootstrap"
import Gallery from "./Gallery"

class Home extends React.Component {
  render () {
    return (
      <Container fluid className="px-4">
        <Row className="justify-content-between mb-4">
          <Col className="d-flex align-item-center">
            <h2 className="mb-0">TV Show</h2>
            

            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="btn btn-sm dropdown-toggle rounded-0 ml-3"
              style={{ backgroundColor: "#221f1f" }}>
                Genre
              </Dropdown.Toggle>

              <Dropdown.Menu className="bg-dark" >
                <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>


          </Col>
          <div className="d-none d-md-block">
            <i className="fa fa-th-large icons mr-2"></i>
            <i className="fa fa-th icons mr-4"></i>
          </div>
          
        </Row>
        <Gallery />
        <Gallery />
        <Gallery />
        <Gallery />
        
      </Container>

    )
  }
}

export default Home