import React ,{Component} from 'react';
import CardList from '../components/CardList';
//import {robos} from './robos';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component{
constructor() {
	super();
	this.state = {
		robos: [],
		searchfield:''
	}
}

componentDidMount(){
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({robos: users}))
}


 onSearchChange = (event) =>{
 	this.setState({searchfield: event.target.value})
 	
 }

render(){
	const {robos, searchfield} = this.state;
	const filteredRobos = robos.filter(robos =>{
 		return robos.name.toLowerCase().includes(searchfield.toLowerCase());
 	})
 	return !robos.length ?
 		<h1> Loading </h1>:
 	
	 (
		<div className='tc'>
		<h1>YOUR ROBO</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
		<CardList robos={filteredRobos}/>
		</Scroll>
		</div>
		);
	}
	}

export default App;
