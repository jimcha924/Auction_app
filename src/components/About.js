import React from 'react';
import { useSelector } from 'react-redux';

const About = () => {

  // const starshipData = useSelector(state => state.starships.starships)

  return (
    <>
      <div className="justify-content-center">
        {/* {starshipData.map(ship=>{
          return <div>{ship.name}</div>
        })} */}
        <h2>About dreamPilot</h2><br/><br/>
        <h5>Auctions are a time-honored tradition throughout all of space and time. </h5><br/>
        <h5>We offer customized services to pilots, fleets and hobbyists. Find your next armada, fleet, passenger liner, cargo ship or the starship of your dreams </h5><br/>
        <h5>Appraisal Services We offer two types of appraisal services. A walk-through auction estimate appraisal. Which can be done on your starship, or virtually through official channels. </h5><br/>
        <h5>At dreamPilot, our &quot;Auction Advantage Prices&quot; that are set at open and competive auctions are reflective of an items &quot;true&quot; market value, and not just one individuals opinion. Our goal is to realize the highest possible price for each item, and provide a direct benefit to the seller, as well as a valuable service to the buyer. </h5><br/>
        <h2>Aim for the stars with dreamPilot! </h2>
      </div>
    </>
  )
}

export default About
