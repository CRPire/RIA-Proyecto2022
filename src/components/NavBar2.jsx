import React, { useContext, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'
import { UserContext } from '../App';


export default function NavBar2() {
    const [show, setShow] = useContext(UserContext)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



  return (

      <>
        <Button variant="primary" onClick={handleShow}>
            Launch
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
        </Offcanvas>
  </>
  )
}