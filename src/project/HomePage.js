import React from 'react';
import {MDBCarousel ,MDBCarouselItem} from 'mdb-react-ui-kit';
import img1 from "../project/img/Slider/1.jpg"
import img2 from "../project/img/Slider/2.jpg"
import img3 from "../project/img/Slider/3.jpg"
import img4 from "../project/img/Slider/4.jpg"
import img5 from "../project/img/Slider/5.jpg"

function HomePage() {

    return (
        
        <center>
             <div style={{ "height": "107px" }}></div>
           
            <MDBCarousel showControls showIndicators style={{ "height":"80%", "width":"70%"}}>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={1}
                    src={img1}
                    alt='מפות שולחן'
                    style={{ "height": "100%", "width": "100%" }}
                >
                   <center> <h1>מפות שולחן</h1> </center>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src={img2}
                    alt='מפיות'
                    style={{ "height": "100%", "width": "100%" }}
                >
                  <center>   <h1>מפיות</h1></center>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src={img3}
                    alt='חבקים'
                    style={{ "height": "100%", "width": "100%" }}
                >
                   <center>  <h1>חבקים</h1></center>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={4}
                    src={img4}
                    alt='אגרטלים ואקססוריז'
                    style={{ "height": "100%", "width": "100%" }}
                >
                    <center> <h1>אגרטלים ואקססוריז</h1></center>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={5}
                    src={img5}
                    alt='פרחים מיובשים'
                    style={{ "height": "100%", "width": "100%" }}
                >
                     <center> <h1>פרחים מיובשים</h1></center>
                </MDBCarouselItem>
            </MDBCarousel>
        </center>
    );
}

export default HomePage;





