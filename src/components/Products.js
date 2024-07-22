// import {FaShoppingCart,FaRegBookmark,FaStar,FaFireAlt} from 'react-icons/fa';
import { Carousel } from 'antd';
import product from "./Data";
import { useNavigate } from 'react-router';



export function Products(props){
  const navigate = useNavigate()
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  }
  const productDetail= (item) =>{
    navigate(`/productDetail/${item.id}`,{state:item});
    console.log(item);
  }
    return(
      <div class="product mt-5 ">
        <div className="row">
        {    
                product.map((item, index) =>
                    <div className="col-md-4">
                      <div className="card">
                       {/*<img src={item.thumbnail} className="card-img" >*/}
                        <div>
                          <Carousel afterChange={onChange}>
                          {
                                item.images.map((image,i)=>
                                  <div className="image" style={{height:'200px'}}>
                                  <img src={image} style={{width:'100%' , height:'200px'}}/>
                                  </div>
                                )
                           }
                          </Carousel>
                        </div>

                            <div class="card-body">
                                <h5 class="card-title text-center">{item.title}</h5>
                                <p class="card-text">{item.description.slice(0, 40)}...</p>
                                <p class="card-text text-center">Price : {item.price} Rs.</p>
                                <div>
                                <a href="" onClick={()=>productDetail(item)}>View More</a>
                                <button className="btn btn-primary" type="submit">Add To Cart</button>
                              </div>
                          </div>
                      </div>
                    </div>
            )} 
        </div>
        </div>
      );
}
