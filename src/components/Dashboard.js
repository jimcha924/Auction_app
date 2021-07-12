import React, { Component } from 'react'
import PubNubReact from 'pubnub-react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Cards from './Cards'

class Dashboard extends Component {
	constructor(props) {
    	super(props);
			this.state = {highest: 0, people: 0};
			//this.last_message = 0;
    	this.pubnub = new PubNubReact({
            publishKey: 'pub-c-8722bb03-a521-41d7-9c91-40bde3dffaa2',
            subscribeKey: 'sub-c-81922b34-e0f0-11eb-93ac-9ef4385fbd63'
        });
    	this.pubnub.init(this);
			// this.state = { highest : 0 };
			console.log({ pubnub: this.pubnub });

    }

		componentWillMount() {
			this.pubnub.subscribe({
					channels: ['DreamPilot'],
					withPresence: true
			});
			this.pubnub.getMessage('DreamPilot', (msg) => {
					console.log('***'+msg.message);
					//this.last_message = msg.message;
					this.setState ({
						highest: msg.message
					});
			});
			this.pubnub.hereNow({
				channels: ["DreamPilot"],
				includeState: true
			},(status,response)=> {
				console.log(response.totalOccupancy);
				this.setState ({
					people: response.totalOccupancy
				});
			});

		}

	render() {
		const messages = this.pubnub.getMessage('DreamPilot');
		const presence = this.pubnub.hereNow('DreamPilot');
	    return (
	    		<div>
						<Cards data={messages.length} highest={this.state.highest} people={this.state.people}/>

						<br/>
						<br/>
							<ListGroup flush>{messages.map((m, index) => <ListGroupItem><h1 key={'message' + index}>{m.message}</h1></ListGroupItem>)}</ListGroup>
					</div>
				);
	}
}

export default Dashboard;