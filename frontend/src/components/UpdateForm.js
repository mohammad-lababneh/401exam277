import React, { Component } from 'react'

 class UpdateForm extends Component {
    render() {
        return (
            <div>
                
<form onSubmit = {e => this.props.updateCoffee(e)}>
<label>
coffee Name : </label>

<input type = 'text' value={this.props.coffeeName} onchange={this.props.updatelabelFunc}/>

<label>
coffee image : </label>


<input type='text' value={this.props.coffeeimage}/>
<input type='submit' value='update' onchange={this.props.updateImageFunc}/>

</form>



            </div>
        )
    }
}

export default UpdateForm
