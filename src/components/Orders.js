import React, {Component} from 'react';

class Orders extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orderItems: [
                {item: 'Htc Mobile', custumer: 'Alan B', price: '$438', product: 'B-ZIF'},
                {item: 'Samsung Mobile', custumer: 'Joe Smith', price: '$680', product: 'C-567'},
                {item: 'Apple Mobile', custumer: 'Patrick J', price: '$680', product: 'E-567'},
                {item: 'LG Mobile', custumer: 'Annan Han', price: '$340', product: 'Z-424'},
                {item: 'Nokia Mobile', custumer: 'Mark Mule', price: '$230', product: 'W-225'}
            ]
        }
    }

    eachOrder = (order, index) => {
        return <tr key={index}>
            <td>{order.item}</td>
            <td>{order.custumer}</td>
            <td style={{color: '#2196f3'}}>{order.price}</td>
            <td>{order.product}</td>
        </tr>;
    };

    render() {
        return (
            <div id="order">
                <h5>Your Orders</h5>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Item</th>
                        <th>Costumer</th>
                        <th>Price</th>
                        <th>Product</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.orderItems.map(this.eachOrder)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Orders;