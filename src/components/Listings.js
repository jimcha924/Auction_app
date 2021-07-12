import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Fade from 'react-reveal';
import { loadData } from '../actions/loadData';



const Listings = () => {
    
    const starshipData = useSelector(state => state.starships.starships)
    // const dispatch = useDispatch();

    // useEffect(() => {
      
    //     dispatch(loadData());

    // }, [])

    return (
        <>
            <div>
   <div className="container">
        <div className="row">
            <div className="col-9">
                <Fade bottom cascade>
                <div className="row">
                    {starshipData.map(ship=>{
                        return <div key={ship.name} className="col-4 mb-4 product">

                                    <p className="mt-3">Model: {ship.model}</p>
                                    <p className="mt-3">Hyperdrive Rating: {ship.hyperdriveRating}</p>
                                    <p className="mt-3">Passenger rating: {ship.passengers}</p>
                                    <p className="mt-3">Cargo capacity: {ship.cargoCapacity}</p>
                                    <p className="mt-3">Starship class: {ship.starshipClass}</p>


                                <div className="d-flex justify-content-around">
                                    <div>{(ship.costInCredits)} Galactic Credits             </div>
                                    <button 
                                    className="btn btn-warning"
                                    // onClick={()=> dispatch(addToCart(product))}

                                    >Buy now</button>
                                </div>
                                </div>
                            })}
                        </div>
                </Fade>
            </div>
{/* 
            <div className="col-4">
                Cart Items

                <CartItems />
            </div> */}
        </div>
    </div>


                
            </div>
        </>
      )
    }
export default Listings;


