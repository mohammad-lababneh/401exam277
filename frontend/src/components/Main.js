import React, { Component } from 'react'
import axios from 'axios'
import Coffee from './Coffee'
export class Main extends Component {
constructor(props){
super(props);
this.state={
    serverLink:process.env.REACT_APP_BACKEND_URL,
    showCoffees:false,
    coffees:[]
}

}

componentDidMount = async ()=>{
const coffees = await axios.get(`${this.state.serverLink}/coffes?`)
this.setState({
    showCoffees:true,
    coffees:coffees.data
})}

addToFavFunc = async(coffeeData)=>{

    await axios.post(`${this.state.serverLink}/addToFavorite`,coffeeData)
}


    render() {
        return (
            <div>
                {this.state.showCoffees && this.state.coffees.map((coffee,idx)=>{

                    return ( <Coffee coffee = {coffee}
                        idx = {idx}
                        addToFav={this.addToFavFunc}/>
                        )
                })}
            </div>
        )
    }
}

export default Main
