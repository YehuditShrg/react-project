import { useSelector } from "react-redux"
import DeatailsModel from "./DeatailsModel";

function Shop() {
    const maps = useSelector((state) => state.mapReducer)
    return (
        <div>
            <div style={{ "height": "100px" }}></div>

            <center class='parent'>
                {maps.map((e, index) => (
                    <div className="card" class='child' style={{ "width": "300px", "height": "520px" }}>
                        <img className="card-img-top" src={e.img} alt={e.name}></img>

                        <div className="card-body">
                            <p className="card-title"><strong>{e.name}</strong></p>
                            <p className="card-text">{e.price} ₪</p>
                            <p><i class={index % 3 === 0 ? "fa fa-star-half" :
                                index % 4 === 0 ? null : "fa fa-star"} aria-hidden="true"></i>

                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                            </p>
                            <DeatailsModel id={e.id} index={index}></DeatailsModel>
                        </div>
                    </div>
                ))}
            </center>
        </div>
    );
}
export default Shop;
