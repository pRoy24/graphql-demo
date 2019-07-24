import React, {Component} from 'react';
import {Button, FormGroup, FormControl} from 'react-bootstrap';
import client from '../../model/FaunaQL';
var faunadb = require('faunadb'),
q = faunadb.query
console.log(client);

export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {"productAdded": false}; 
    }

    submitForm(e) {
        e.preventDefault();
        const self = this;
        const addProductForm = document.forms[0];
        const productTitle = addProductForm.productName.value;
        const productDescription = addProductForm.productDescription.value;
        const productPrice = addProductForm.productPrice.value;

        var createP = client.query(q.Create(q.Collection('Product'),
         { data: 
            { title: productTitle,
              description: productDescription,
              price: productPrice } }));

        createP.then(function(response) {
          self.setState({"productAdded": true});
        }); 
    }

    componentWillMount() {
       
    }

    render() {
        let productAddedSuccess = <span/>;
        if (this.state.productAdded) {
            productAddedSuccess = <div>Product added successfully</div>;
        }
        return (
            <div className="container">
              {productAddedSuccess}
               <h4 className="add-form-header">Add a new product</h4>     
                <form name="addProductForm" onSubmit={this.submitForm}>
                    <FormGroup>
                    <input type="text" className="form-control" name="productName" 
                        placeHolder="Product Title"/>
                    </FormGroup>   
                    <FormGroup>
                    <textarea  rows={3} className="form-control" name="productDescription"
                        placeHolder="Product Description"/>
                    </FormGroup>    
                    <FormGroup>
                     <input type="text" className="form-control" name="productPrice"
                        placeHolder="Product Price"/> 
                    </FormGroup>
                    <Button type="submit" className="btn btn-default btn-lg">Submit</Button>
                </form>
            </div>
        )
    }
}