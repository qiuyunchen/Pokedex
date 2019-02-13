import React from 'react';
import Home from '../components/profileComponents/homeButton';
import Images from '../components/profileComponents/images';

import Stats from '../components/profileComponents/stats';
import Moves from '../components/profileComponents/moves';
import Axios from 'axios';
import react, {Component} from 'react';



class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: props.name,
            url: props.url,
            pokeData: null
            }
    }

    componentDidMount() {
        Axios.get(this.state.url)
            .then((data) => {
                this.setState({pokeData: data.data});
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return <>
            <Home name={this.state.name} data={this.state.pokeData} /> 
            <Images name={this.state.name} data={this.state.pokeData} />
            
            <Stats name={this.state.name} data={this.state.pokeData} />
            <Moves name={this.state.name} data={this.state.pokeData} />
        </>
    }
}

export default Profile;