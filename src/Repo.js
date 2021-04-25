import React, { Component } from 'react';
import { StarFill } from 'react-bootstrap-icons';
import ListGroup from 'react-bootstrap/ListGroup'

// komponent zawierajacy jedno repozytorium
class Repo extends Component {
	render() {
		return (
			<div>
			<ListGroup.Item>
				<p></p>
				<p><strong>Nazwa Repozytorium: </strong>{this.props.info.name}</p>
				<p><strong>Opis: </strong>{this.props.info.description}</p>
				<p><strong>Link: </strong><a href={this.props.info.html_url}>{this.props.info.html_url}</a></p>
				<p><StarFill color="#e8b305" alignmentBaseline="central" /> {this.props.info.stargazers_count}</p>
				</ListGroup.Item>
				<span>&nbsp;&nbsp;</span>
			</div>
			
		)
	}
}

export default Repo;