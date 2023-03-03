import React from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromWishList } from "../redux/actions/wishListAction";
import { addToCart } from '../redux/actions/cartActions';

export default function WishList() {
    const dispatch = useDispatch();
    let wishList = useSelector((state) => state.wishListReducer);
    return (
        <section className="h-100" style={{ backgroundColor: "#eee" }}>
            <div style={{ "height": "100px" }}></div>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol md="10">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                                רשימת משאלות
                            </MDBTypography>
                        </div>
                        {wishList.map((e, index) => (
                            <MDBCard className="rounded-3 mb-4">
                                <MDBCardBody className="p-4">
                                    <MDBRow className="justify-content-between align-items-center">
                                        <MDBCol md="2" lg="2" xl="2">
                                            <MDBCardImage className="rounded-3" fluid
                                                src={e.img} />
                                        </MDBCol>
                                        <MDBCol md="3" lg="3" xl="3">
                                            <p className="lead fw-normal mb-2">{e.name}</p>
                                            <p>
                                                <span className="text-muted">{e.description}</span>
                                            </p>
                                        </MDBCol>
                                        <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                                            <MDBTypography tag="h5" className="mb-0">
                                                {e.price}₪
                                            </MDBTypography>
                                        </MDBCol>
                                        <MDBCol md="1" lg="1" xl="1" className="text-end">
                                            <a href="#!" className="text-danger" onClick={(el) => {
                                                el.preventDefault();
                                                dispatch(deleteFromWishList(e))
                                            }}>
                                                <MDBIcon fas icon="trash text-danger" size="lg" />
                                            </a>
                                        </MDBCol>
                                        <MDBCol md="1" lg="1" xl="1" className="text-end">
                                            <a href="#!" color="#cdadad" onClick={(el) => {
                                                el.preventDefault();
                                                dispatch(addToCart(e))
                                            }}>
                                                <MDBIcon class="fas fa-shopping-cart" size="lg"/>
                                            </a>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        ))}
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}
