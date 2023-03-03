import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { MDBBtn} from "mdb-react-ui-kit";

function MyVerticallyCenteredModal(props) {
    const dispatch = useDispatch();
    const maps = useSelector((state) => state.mapReducer)
    const napkings = useSelector((state) => state.napkingReducer)
    const accessories = useSelector((state) => state.accessoriesReducer)
  
    function catchElement(id, index) {
        if (id >= 300)
            return accessories[index];
        if (id >= 200)
            return napkings[index];
        if (id >= 100)
            return maps[index];
    }

    const thisItem = catchElement(props.id, props.index);
    return (
        <Modal style={{ "text-align": "center" }}
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header style={{ "text-align": "right" }}>
                <Modal.Title id="contained-modal-title-vcenter" >
                    {thisItem.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={thisItem.img}></img>
                <br></br>
                <br></br>
                <h6>
                    {thisItem.description}
                </h6>
                <p>
                    {thisItem.price} ₪
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="contained" onClick={(e) => {
                    e.preventDefault();
                    dispatch(addToCart(thisItem))
                    props.onHide();
                }
                } >הוסף לסל</Button>
                <Button variant="contained" onClick={props.onHide}>סגור</Button>
            </Modal.Footer>
        </Modal>
    );
}

function DeatailsModel(props) {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <MDBBtn color='#cdadad' variant="primary" onClick={() => setModalShow(true)} className="MDBBtn">
                פרטים
            </MDBBtn>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                id={props.id}
                index={props.index}
            />
        </>
    );
}
export default DeatailsModel;
// render(<DeatailsModel />);