import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromCart } from '../redux/actions/cartActions';
import { purchaseNapkings, purchaseAccessoris, purchaseMaps } from '../redux/actions/productAction';

export default function Payment() {
    const { sum } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        alert("להמשך תשלום דרושים פרטי אשראי.")
    }, [])

    const dispatch = useDispatch();
    let cart = useSelector((state) => state.cartReducer);

    function clearCart() {
        cart.forEach(item => {
            if (item.id > 300) {
                dispatch(purchaseAccessoris(item.id, item.quantity))
            }
            else {
                if (item.id > 200) {
                    dispatch(purchaseNapkings(item.id, item.quantity))
                }
                dispatch(purchaseMaps(item.id, item.quantity))
            }
            dispatch(deleteFromCart(item))
        });
    }

    return (
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" ,direction:"ltr",textAlign: "center"}}>
            <div style={{ "height": "160px" }}></div>

            <MDBCardBody className="p-4" style={{textAlign: "center", margin: "0 40vw !important" }}>
                <MDBCol lg="5" style={{"textAlign": "center"}}>
                    <MDBCard className="bg-primary text-white rounded-3">
                        <MDBCardBody style={{"textAlign": "center"}}>
                            <div className="d-flex justify-content-between align-items-center mb-4" style={{"direction": "rtl"}}>
                                <MDBTypography tag="h5" className="mb-0">
                                    פרטי כרטיס אשראי
                                </MDBTypography>
                            </div>

                            <p className="small">סוג</p>
                            <a href="#!" type="submit" className="text-white">
                                <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                            </a>
                            <a href="#!" type="submit" className="text-white">
                                <MDBIcon fab icon="cc-visa fa-2x me-2" />
                            </a>
                            <a href="#!" type="submit" className="text-white">
                                <MDBIcon fab icon="cc-amex fa-2x me-2" />
                            </a>
                            <a href="#!" type="submit" className="text-white">
                                <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                            </a>

                            <form className="mt-4">
                                <MDBInput className="mb-4" label="שם בעל הכרטיס" type="text" size="lg"
                                    placeholder="שם בעל הכרטיס" contrast style={{ "opacity": "0", "direction": "ltr" }} />

                                <MDBInput className="mb-4" label="מספר כרטיס אשראי" type="text" size="lg"
                                    minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast style={{ "opacity": "0", "direction": "ltr" }} />

                                <MDBRow className="mb-4">
                                    <MDBCol md="6">
                                        <MDBInput className="mb-4" label="תוקף" type="text" size="lg"
                                            minLength="7" maxLength="7" placeholder="MM/YYYY" contrast style={{ "opacity": "0", "direction": "ltr" }} />
                                    </MDBCol>
                                    <MDBCol md="6">
                                        <MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
                                            maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast style={{ "opacity": "0", "direction": "ltr" }} />
                                    </MDBCol>
                                </MDBRow>
                            </form>

                            <hr />
                            <div className="d-flex justify-content-between">
                                <p className="mb-2">{sum} ₪</p>
                                <p className="mb-2">לתשלום</p>

                            </div>

                            <div className="d-flex justify-content-between">
                                <p className="mb-2">{sum > 250 ? 0 : 30} ₪</p>
                                <p className="mb-2">משלוח</p>

                            </div>

                            <div className="d-flex justify-content-between">
                                <p className="mb-2">{sum > 250 ? sum : (parseInt(sum) + 30)} ₪</p>
                                <p className="mb-2">סה"כ</p>

                            </div>

                            <MDBBtn color="info" block size="lg" className="MDBBtn"
                            onClick={() => {
                                clearCart()
                                alert("התשלום התבצע בהצלחה")
                                navigate('/HomePage')
                            }}>
                                <div className="d-flex justify-content-between">
                                    <span>
                                        שלם עכשיו{" "}
                                        <i className="fas fa-long-arrow-alt-right ms-2"></i>
                                    </span>
                                </div>
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBCardBody>
        </section >
    );
}

