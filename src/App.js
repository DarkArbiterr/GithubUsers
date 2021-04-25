import React, { Component } from 'react';
import Repo from "./Repo"
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner'
import Toast from 'react-bootstrap/Toast'


// g³ówny komponent
class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			value: "",
			data: [],
			isValue: false,
			loading: false,
			show: false,
			isPublic: true
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.setShow = this.setShow.bind(this);
    }

	// obs³uga wprowadzanego napisu w formularzu
	handleChange(e) {
		this.setState({ value: e.target.value })

		// blokowanie przycisku przy pustym formularzu
		if (e.target.value === "") {
			this.setState({ isValue: false })
		}
		else {
			this.setState({ isValue: true })
		}
	};

	// obs³uga przycisku 'szukaj'
	handleSubmit(e) {
		this.setState({ isPublic: true })
		this.setState({data: []})
		this.setState({ loading: true });

		// pobieranie danych z API Githuba za pomoc¹ fetch()
		const url = "https://api.github.com/users/" + this.state.value + "/repos?per_page=1000";
		fetch(url)
			.then(response => response.json())
			.then(data => {
				this.setState({ data })
				this.setState({ loading: false })

				// pokazywanie komunikatu gdy brak publicznych repozytoriow
				if (this.state.data.length === 0) {
					this.setState({ isPublic: false })
				}
				else {
					this.setState({ isPublic: true })
				}
			}
		);
		this.setState({ show: true });
		e.preventDefault();
	}

	// funkcja pokazuj¹c¹ komunikat
	setShow(e) {
		this.setState({ show: false });
    }
	

	render() {
		const isSetValue = this.state.isValue;
		const loading = this.state.loading;
		const isPublic = this.state.isPublic;

		// ustawienie widocznosci przycisku
		let button = <Button className="my-1" type="submit" variant="warning" disabled >Szukaj</Button>;
		if (isSetValue) {
			button = <Button className="my-1" type="submit" variant="warning" >Szukaj</Button>
		}
		else {
			button = <Button className="my-1" type="submit" variant="warning" disabled >Szukaj</Button>
		}

		return (
			<Container >
				<span>&nbsp;&nbsp;</span>
				<Row className="justify-content-md-center">
					<h3 style={{ color: 'white' }}>User Github Repositories Searcher</h3>
				</Row>
				<span>&nbsp;&nbsp;</span>
				<Row className="justify-content-md-center">
					<Form inline onSubmit={this.handleSubmit} className="justify-content-md-center">
						<Form.Control name="input" type="text" onChange={this.handleChange} />
						{button}
					</Form>
				</Row>
				<span>&nbsp;&nbsp;</span>
				<Row className="justify-content-md-center">
					{loading && (<Spinner style={{width: 70, height: 70}} animation="border" variant="warning" />)}
				</Row>

				<Row className="justify-content-md-center">
					{this.state.data.length != null
						?   <ListGroup style={{paddingTop: "10"}}>
								{this.state.data.sort((a, b) => b.stargazers_count - a.stargazers_count).map(repo => <Repo info={repo} />)}
						    </ListGroup>
						:   <Toast onClose={this.setShow} style={{ position: 'absolute', top: 10, right: 10, }} show={this.state.show} delay={3000} autohide>
								<Toast.Header>
									<strong className="mr-auto">Github Repository Searcher</strong>
								</Toast.Header>
								<Toast.Body>Podany uzytkownik nie istnieje!</Toast.Body>
							</Toast>		
					}
					{!isPublic &&
						<Toast onClose={this.setShow} style={{ position: 'absolute', top: 10, right: 10, }} show={this.state.show} delay={3000} autohide>
							<Toast.Header>
								<strong className="mr-auto">Github Repository Searcher</strong>
							</Toast.Header>
							<Toast.Body>Podany uzytkownik nie posiada publicznych repozytoriow!</Toast.Body>
						</Toast>	
                    }
				</Row>
			</Container>
		);
	}
}

export default App;
