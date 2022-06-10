import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
            title="Model S"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtntext="Custom Order"
            rightBtntext="Existing Invetory"
        />
        <Section 
            title="Model Y"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtntext="Custom Order"
            rightBtntext="Existing Invetory"
        />
        <Section 
            title="Model 3"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtntext="Custom Order"
            rightBtntext="Existing Invetory"
        />
        <Section 
            title="Model X"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtntext="Custom Order"
            rightBtntext="Existing Invetory"
        />

        <Section 
            title="Lowest Cost Solar Panels America"
            description="Money-Back Gurantee"
            backgroundImg="solar-panel.jpg"
            leftBtntext="Order Now"
            rightBtntext="Learn More"
        />
        <Section 
            title="Solar for New Roofs"
            description="Solar Roof Costs Less Than a New Roof Plus Panels"
            backgroundImg="solar-roof.jpg"
            leftBtntext="Order Now"
            rightBtntext="Learn More"
        /> 
        <Section 
            title="Accessories"
            description=""
            backgroundImg="accessories.jpg"
            leftBtntext="Shop Now"
        /> 
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
    z-index: 10;

`