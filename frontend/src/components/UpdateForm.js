import React, { Component } from 'react'

 class UpdateForm extends Component {
    render() {
        return (
            <div>
                
<form onSubmit = {e => this.props.updateCoffee(e)}>
<label>
coffee Name : </label>

</label>




</form>



            </div>
        )
    }
}

export default UpdateForm
