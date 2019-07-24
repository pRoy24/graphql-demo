import React, {Component} from 'react';
import ProductList from './ProductList';

import client from '../../model/FaunaQL';
var faunadb = require('faunadb'),
q = faunadb.query

export default class Landing extends Component {

    constructor(props) {
        super(props);
        this.state ={"productList": []};
    }

    componentWillMount() {
     const self = this;
     var helper = client.paginate(
        q.Match(
          q.Index('all_product')
        )
      )

      helper.map(function(ref) { return q.Get(ref); }).each(function(page) {
        let productList = page.map(function(pItem){ 
            return Object.assign({}, {"id": pItem.ref.value.id}, pItem.data);
        });
        self.setState({"productList": productList});
      });
    }

    render() {
        return (
            <div className="container-fluid">
                <div>
                    <ProductList products={this.state.productList}/> 
                </div>
            </div>
        )
    }
}