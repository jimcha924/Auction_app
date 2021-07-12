import React from 'react';
import { useSelector } from 'react-redux';

const About = () => {

  // const starshipData = useSelector(state => state.starships.starships)

  return (
    <>
      <div className="container">
        <div className="col-md-8">
          <h2>About dreamPilot</h2><br/>
          <h5>"Auctions are a time-honored tradition throughout all of space and time." - Watto </h5>
          <h5>"...also, your Jedi mind-tricks won't work on me." - Watto </h5>
        </div>
      </div>
        <br/>
    <section className="why-us">
					<div className="container">
						<div className="row">
							<div className="col-md-8">
								<div className="left-content">
									<div className="heading-section">
										<h2>Why choose us?</h2>
										<span>We offer customized services to pilots, fleets and hobbyists. Find your next armada, fleet, passenger liner, cargo ship or the starship of your dreams.</span>
										<div className="line-dec"></div>
									</div>
                  <br/>
									<div className="services">
										<div className="col-md-6">
											<div className="service-item">
												<i className="fa fa-bar-chart-o"></i>
												<div className="tittle">
													<h2>Pilots love us!</h2>
												</div>
												<p>We're the first choice of pilots in the Galaxy!</p>
											</div>
										</div>
										<div className="col-md-6">
											<div className="service-item">
												<i className="fa fa-gears"></i>
												<div className="tittle">
													<h2>Performance + Customization</h2>
												</div>
												<p>We can accomodate all your upgrades--performance or comfort...let us make your starship the best!</p>
											</div>
										</div>
										<div className="col-md-6">
											<div className="service-item second-row">
												<i className="fa fa-pencil"></i>
												<div className="tittle">
													<h2>Service</h2>
												</div>
												<p>Our technicians and droids are the best in the Inner Rim. We'll treat your ship like it was our own!</p>
											</div>
										</div>
										<div className="col-md-6">
											<div className="service-item second-row last-service">
												<i className="fa fa-wrench"></i>
												<div className="tittle">
													<h2>Fast Service</h2>
												</div>
												<p>Call today to schedule your appointment:</p>
												<p>Intergalactic Exchange: +999 dreamPilot: Bestine</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="right-img">
									<img width="370px" height="370px" src="https://cdna.artstation.com/p/assets/covers/images/025/581/316/medium/max-degtyarev-rc-inst-02.jpg" alt="" />
									<div className="img-bg"></div>
								</div>
							</div>
						</div>
					</div>
				</section>

    </>
  )
}

export default About
