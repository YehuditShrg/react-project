import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import logo from "../project/img/newLogo.png"
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBBadge
} from 'mdb-react-ui-kit';
import { useSelector } from "react-redux";

function Head() {
    let cart = useSelector((state) => state.cartReducer);
    function numOfItems() {
        let num = 0;
        cart.forEach(item => {
            num += item.quantity;
        });
        return num;
    }
    return (
        <div className='fixedNav'>
            <MDBNavbar expand='lg' light bgColor='light' style={{ "boxShadow": "#cdadad !im" }}>
                <MDBContainer fluid >
                    <MDBNavbarNav className='d-flex flex-row'>
                        <MDBNavbarItem>
                            <Link to='/HomePage' activeStyle className="text-decoration-none navLink2">
                                <img src={logo} style={{ "height": "70px" }} alt={"logo"}></img>
                            </Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link to='/ShowMaps' activeStyle className="text-decoration-none navLink">מפות</Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link to='/ShowNapking' activeStyle className="text-decoration-none navLink">מפיות</Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link to='/ShowAccessories' activeStyle className="text-decoration-none navLink">אקססוריז</Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link to='/Shop' activeStyle className="text-decoration-none navLink">קצת עלינו</Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem className='me-3 me-lg-0'>
                            <Link to='/WishList' activeStyle className="text-decoration-none navLink" >
                                <MDBIcon fas icon='heart' />
                            </Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem className='me-3 me-lg-0 '>
                            <Link to='/Cart' activeStyle className="text-decoration-none navLink">
                                <MDBBadge pill color='danger'>{numOfItems()}</MDBBadge>
                                <MDBIcon fas icon='shopping-cart' />
                            </Link>
                        </MDBNavbarItem>

                    </MDBNavbarNav>
                </MDBContainer>
            </MDBNavbar>
        </div>
    );
}
export default Head;