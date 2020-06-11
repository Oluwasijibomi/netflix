import React from "react"
import {Container, Row, Dropdown, Col} from "react-bootstrap"
import Gallery from "./Gallery"

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state={
      initialState: true,
    }
  }

  componentDidMount() {
    this.setState({displayGallery: true})
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.displayGallery === true) {
  //     this.setState({ displayGallery: false})
  //   };
  // }

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
        
        {this.state.initialState ? (
          <div>
            <Gallery imageSrc={"/assets/6.png"}/>
          <Gallery title={"Trending"} imageSrc={"/assets/8.png"} />
          <Gallery title={"Horror"} imageSrc={"/assets/7.png"} />
          <Gallery />
        </div>
        ) : (<p style={{color: "white"}}>Nothing to be displayed</p>)}
        
      </Container>

    )
  }
}

export default Home