'use strict';
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());


const port = process.env.PORT;


// const {
//     home,
//     getFavoriteCoffee,
//     createItemController,
//     updateItemController,
//     deleteItemController,
//     retreiveItemsController

// }=require('./controllers/coffee.controller');

mongoose.connect(`mongodb://127.0.0.1:27017/finalexam`,
    { useNewUrlParser: true, useUnifiedTopology: true });

const coffeeSchema = new mongoose.Schema({

    label: String,
    image: String,
    ingredientLInes: Array,

})

const myCoffeModel = mongoose.model('coffee',coffeeSchema);

app.get('/', home);
app.get('/fav-list', getFavoriteCoffee);
app.get('/retreive', retreiveItemsController);
app.post('/create', createItemController);
app.put('/update/:id',updateItemController);
app.delete('/delete/:id',deleteItemController);


function retreiveItemsController(req, res) {
    console.log(req.query);
    const ingredients = req.query.ingredients;
    const url = `https://coffeepedias.herokuapp.com/coffee-list/`;
    axios.get(url).then(
        results => {
            // console.log(results.data);
            const coffeeArray = results.data.map(recipe => {

                return new Coffee(coffee)
            })
            console.log(coffeeArray);
            res.send(coffeeArray);


        }
    )

}


function createItemController(req, res) {
    console.log(req.body);
    const { label, image, ingredientLInes } = req.body;
    const newCoffe = new myCoffeModel({
        label: label,
        image: image,
        ingredientLInes, ingredientLInes
    })
    newCoffe.save();

}





function getFavoriteCoffee(req, res) {
    myCoffeModel.find({}, (error, favData) => {
        res.send(favData)
    })
    console.log(favData);

}




function deleteItemController(req, res) {
  const id = req.params.id;
  myCoffeModel.remove({_id:id},(error,data)=>{
myCoffeModel.find({},(error,data)=>{
    res.send(data);
})
  })
}










function updateItemController(req, res) {
const {coffeeName , coffeeImage} = req.body;
const id = req.params.id;
myCoffeModel.findOne({_id,id},(error,data1)=>{
data1.label=coffeeName;
data1.image=coffeeImage;
data1.save.then(()=>{

    myCoffeModel.find({},(error,data)=>{

        res.send(data);
    })
}
)
})
}



class Coffee {
constructor(data){
this.label = data.coffee.label;
this.image = data.coffee.image;
this.ingredientLInes = data.coffee.ingredientLInes;


}


}






function home(req, res) {
    res.send('test')
}









app.listen(port, () => {
    console.log(`listening to port 3001`);
});