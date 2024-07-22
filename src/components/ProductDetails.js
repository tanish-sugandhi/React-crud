import { useLocation, useParams } from "react-router"
import product from "./Data";
import { Carousel } from 'antd';
export default function ProductDetails(){
    const {state}=useLocation();
    return (
      <div className="d-flex">
        <div><img src={state.thumbnail} class="show" /></div>
        <div class="color-back">
            
            <div class="text">
               <h6>Id:{state.id}</h6>
              <p>Title:{state.title}</p>
              <p>Description:{state.description}</p>
              <h6>Price:{state.price} Rs.</h6>
              <p>Rating:{state.rating}</p>
          </div>
         </div> 
        </div>    
    );
}