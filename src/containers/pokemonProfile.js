import Home from '../components/profileComponents/homeButton';
import Images from '../components/profileComponents/images';
import Stats from '../components/profileComponents/stats';
import Moves from '../components/profileComponents/moves';
import Axios from 'axios';
import React, {Component} from 'react';
import './pokemonProfile.css'

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: props.name,
            url: props.url,
            pokeData: null,
            home: props.home
            }
            
        this.forceRender = this.forceUpdate()    
    }

    componentDidMount() {
        Axios.get(this.state.url)
            .then((data) => {
                this.setState({pokeData: data.data});
                console.log(data.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    componentDidUpdate() {
        console.log('updated')
    }

    render() {

        return <div className='profile-wrap'>
            <Home name={this.state.name} data={this.state.pokeData} home={this.state.home}/> 
            <Images name={this.state.name} data={this.state.pokeData} />
            
            <Stats name={this.state.name} data={this.state.pokeData} />
            <Moves name={this.state.name} data={this.state.pokeData} />
        </div>
    }
}

export default Profile;