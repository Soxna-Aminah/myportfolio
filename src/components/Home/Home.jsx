import React from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import me from "../../assets/me.png"
function Home() {
  return (
    <section>
      <Container fluid id='home'>
        <Row>
            <Col className='head'>
            <h1 style={{ paddingBottom: 15}} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> AMY FAll</strong>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Full Stack Developper </strong>
              </h1>
            </Col>
            <Col>
                <img 
                     src={me}
                     alt="home pic"
                     className="img-fluid"
                 />
            </Col>
        </Row>
      </Container>
    </section>
    
  )
}

export default Home