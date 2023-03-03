import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBListGroup,
    MDBListGroupItem,
    MDBRipple,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromCart } from '../redux/actions/cartActions';
import { decreaseQty, addQty } from '../redux/actions/cartActions';
import { useNavigate } from "react-router-dom";
import { addToWishList} from "../redux/actions/wishListAction";


export default function PaymentMethods({ navigation, route }) {
 
    const navigate = useNavigate()

    function numOfItems() {
        let num = 0;
        cart.forEach(item => {
            num += item.quantity;
        });
        return num;
    }

    function totalPrice() {
        let sum = 0;
        cart.forEach(item => {
            sum += (item.quantity * item.price);
        });
        return sum > 250 ? sum + 30 : sum;
    }

    const dispatch = useDispatch();
    let cart = useSelector((state) => state.cartReducer);
    return (
        <section className="h-100 gradient-custom">
            <div style={{ "height": "100px" }}></div>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center my-4">
                    <MDBCol md="8">
                        <MDBCard className="mb-4">
                            <MDBCardHeader className="py-3">
                                <MDBTypography tag="h5" className="mb-0">
                                    עגלה - {numOfItems()} פריטים
                                </MDBTypography>
                            </MDBCardHeader>
                            <MDBCardBody>
                                {cart.map((e, index) => (
                                    <MDBCardHeader>
                                    <MDBRow  >
                                        <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                                            <MDBRipple rippleTag="div" rippleColor="light"
                                                className="bg-image rounded hover-zoom hover-overlay">
                                                <img
                                                    src={e.img}
                                                    className="w-100" style={{ "width": "200px", "height": "200px" }} />
                                                <a href="#!">
                                                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)", }}>
                                                    </div>
                                                </a>
                                            </MDBRipple>
                                        </MDBCol>
                                        <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                                            <p><strong>{e.name}</strong> </p>
                                            <MDBBtn wrapperProps={{ size: "sm" }} wrapperClass="me-1 mb-2" className="MDBBtn"
                                            
                                                title="הסר פריט מהעגלה"
                                                onClick={(el) => {
                                                    el.preventDefault();
                                                    dispatch(deleteFromCart(e))
                                                }}  >
                                                <MDBIcon fas icon="trash" color="white"
                                                />
                                            </MDBBtn>
                                            <MDBBtn color = "danger" wrapperProps={{ size: "sm", color: "red" }} wrapperClass="me-1 mb-2" onClick={(el) => {
                                                el.preventDefault();
                                                dispatch(addToWishList(e))
                                            }}
                                                title="העבר לרשימת משאלות" /*color="#cdadad"*/ style={{"backgroundColor": "#cdadad"}}>
                                                <MDBIcon fas icon="heart" />
                                            </MDBBtn>
                                        </MDBCol>
                                        <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                                            <div className="d-flex mb-4" style={{ maxWidth: "300px", "direction":"ltr"}}>
                                                <MDBBtn className="px-3 ms-2 MDBBtn"
                                                    onClick={(el) => {
                                                        el.preventDefault();
                                                        console.log("plus");
                                                        dispatch(addQty(index))
                                                    }}>
                                                    <MDBIcon fas icon="plus" />
                                                </MDBBtn>
                                                <MDBInput value={e.quantity} label="כמות" disabled >
                                                </MDBInput>
                                                <MDBBtn className="px-3 me-2 MDBBtn" onClick={(el) => {
                                                    el.preventDefault();
                                                    dispatch(decreaseQty(index))
                                                }}>
                                                    <MDBIcon fas icon="minus" />
                                                </MDBBtn>
                                            </div>
                                            <p className="text-start text-md-center">
                                                <strong>{e.price} ₪</strong>
                                            </p>

                                        </MDBCol>
                                        
                                  </MDBRow>
                                    </MDBCardHeader>
                                ))}
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBCard className="mb-4">
                            <MDBCardHeader>
                                <MDBTypography tag="h5" className="mb-0">
                                    סך הכל
                                </MDBTypography>
                            </MDBCardHeader>
                            <MDBCardBody>
                                <MDBListGroup flush>
                                    <MDBListGroupItem
                                        className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        פריטים
                                        <span>{numOfItems()}</span>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                                        משלוח
                                        <span>{totalPrice() > 250 ? "חינם" : "30 ₪"}</span>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem
                                        className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                            <strong>לתשלום</strong>
                                        </div>
                                        <div>
                                            <strong>{totalPrice()} ₪</strong>
                                        </div>
                                    </MDBListGroupItem>
                                </MDBListGroup>
                                <MDBBtn block className="px-3 me-2 MDBBtn"
                               disabled={totalPrice()===0}
                                onClick={(el) => {
                                    el.preventDefault();
                                    navigate(`/Payment/${totalPrice()}`)
                                }}>
                                    המשך לתשלום
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}


// https://mdbootstrap.com/docs/react/extended/shopping-carts/#section-3