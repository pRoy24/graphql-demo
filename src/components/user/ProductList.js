import React, {Component} from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


export default class ProductList extends Component {

  leaveReview(row) {
    console.log(row);
  }

  render() {
      const {products} = this.props;
      const self = this;
      function format(cell, row){
          return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
        }
        
        if (!products || products.length === 0) {
            return <span/>;
        } 
        
        let addToCardFormatter = function(val, row) {
          return (
          <div onClick={self.leaveReview.bind(self, row)}>
            <i className="fa fa-cart"></i>
            Buy
          </div>)
        }

      let descriptionDataFormatter = function(val, row) {
        console.log(row);
        return (
          <div>
            <div>Description - {row.description}</div>
            <div>
              Reviews- 
              {row.reviews.map(function(item){
              return <div>{item.title}</div>
            })}
            </div>
          </div>

        )
      }  

      return (
            
            <BootstrapTable
              data={products}
              striped
              pagination
            >
              <TableHeaderColumn hidden dataField="id" isKey></TableHeaderColumn>
              <TableHeaderColumn dataField="title" dataSort>Product Name</TableHeaderColumn>
              <TableHeaderColumn dataField="description" dataAlign="left" dataFormat={descriptionDataFormatter}>Description</TableHeaderColumn>
              <TableHeaderColumn dataField="price" dataAlign="left" >Price</TableHeaderColumn>
              <TableHeaderColumn dataField="rating" dataAlign="left">Average Rating</TableHeaderColumn>
              <TableHeaderColumn dataField="id" dataAlign="center" dataFormat={addToCardFormatter}>
              </TableHeaderColumn>
            </BootstrapTable>
          

      )
  }
}

