import React from "react";
import earth from "../assets/images/Paisajes-uruguay-4.jpg"
import meating from "../assets/images/Paisajes-uruguay-5.jpg"
import smart from "../assets/images/uruguay-punta-del-este.jpg"
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';

const useGlobalState = () => [
    React.useContext(GlobalStateContext),
    React.useContext(DispatchStateContext)
  ];

export default function Home() {

    const [state, dispatch] = useGlobalState();

    return (
<>


      <MDBCarousel showIndicators showControls fade>
        <MDBCarouselInner>
        <Button variant="primary" onClick={()=>{ dispatch({bool : true })}}>
            Launch
        </Button>
          <MDBCarouselItem className='active'>
            <MDBCarouselElement src={earth} alt='...' className="min-vh-100" />
            <MDBCarouselCaption>
              <h6>Uruguay</h6>
              <h2>El Mejor<br />Pais</h2>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement src={meating} alt='...' className="min-vh-100"  />
            <MDBCarouselCaption>
              <h6>Punta del Este</h6>
              <h2>Los<br />Dedos</h2>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement src={smart} alt='...' className="min-vh-100"  />
            <MDBCarouselCaption>
              <h6>Punta del Este</h6>
              <h2>Casa<br />Pueblo</h2>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      
      </>

    );
};
