import React, { Component } from 'react'
import axios from 'axios'
import Coffee from './Coffee'
import FavCoffee from './FavCoffee'
import UpdateForm from './UpdateForm'

export class FavCoffee2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serverLink: process.env.REACT_APP_BACKEND_URL,
            coffees: [],
            showFavCoffees: false,
            showForm: false,
            coffeeName: '',
            coffeeImage: '',
            index: 0

        }

    }

    componentDidMount = async () => {
        const coffees = await axios.get(`${this.state.serverLink}/getFavoriteCoffees`)
        this.setState({
            coffees: coffees.data,
            showFavCoffees: true
        })


    }


    deleteCoffeeFunc = async (index) => {
        const id = this.state.coffees[index]._id;
        const coffees = await axios.delete(`${this.state.serverLink}/deleteCoffee/${id}`);
        this.setState({
            coffees: coffees.data
        })


    }


    showupdateFormFunc = (idx) => {
        const chosenCoffee = this.state.coffees[idx];
        this.setState({

            showForm: true,
            chosenCoffee: chosenCoffee,
            coffeeName: chosenCoffee.label,
            coffeeImage: chosenCoffee.image,
            index: idx
        })
    }

    updateLabelFunc = (e => this.setState({ coffeeName: e.target.value }))
    updateImageFunc = (e => this.setState({ coffeeImage: e.target.value }))

    updateCoffee = async (e) => {
        e.preventDefault();
        const id = this.state.coffees[this.state.index]._id;
        const coffeeData = {
            coffeeName: this.state.coffeeName,
            coffeeImage: this.state.coffeeImage
        }
        let coffeeUpdate = await axios.put(`${this.state.serverLink}/updateCoffee/${id}`, coffeeData)
        this.setState({
            coffees: this.updateCoffee.data // fixe
        })
    }





    render() {
        return (
            <div>
                {this.state.showForm &&
                    <UpdateForm
                        coffeeName={this.state.coffeeName}
                        coffeeImage={this.state.coffeeImage}
                        updateLabelFunc={this.updateLabelFunc}
                        updateImageFunc={this.updateImageFunc}
                        updateCoffee={this.updateCoffee}
                    />
                }
                {this.state.showFavCoffees
                    &&
                    this.state.coffees.map((coffee, idx) => {
                        return (
                            <FavCoffee
                                index={idx}
                                coffee={coffee}
                                deleteCoffee={this.deleteCoffeeFunc}
                                updateCoffee={this.showupdateFormFunc}

                            />


                        )

                    })
                }


            </div>
        )
    }
}

export default FavCoffee2
