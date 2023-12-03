import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Video from '../../video/Video'
import CategoriesBar from '../../categoriesbar/CategoriesBar'

const HomeScreen = () => {
  return (
    <div>
      <Container>

        <CategoriesBar/>
        <Row>
{
  [...new Array(20)].map(()=><Col Lg={3} md={4}><Video/></Col>)
}
        </Row>

      </Container>


    </div>
  )
}

export default HomeScreen
