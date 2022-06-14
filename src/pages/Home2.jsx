import React from "react";
import earth from "../assets/images/Paisajes-uruguay-4.jpg"
import meating from "../assets/images/Paisajes-uruguay-5.jpg"
import smart from "../assets/images/uruguay-punta-del-este.jpg"
import Carousel from 'react-bootstrap/Carousel'



export default function Home2() {
    return (
        <>
            <Carousel>
                <Carousel.Item  >
                    <img
                    className="d-block w-100"
                    src={earth}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  >
                    <img
                    className="d-block w-100"
                    src={meating}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  >
                    <img
                    className="d-block w-100"
                    src={smart}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}