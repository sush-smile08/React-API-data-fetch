import React, { Component } from 'react';


class Todo extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            items : []
        };

        this.componentWillMount = this.componentWillMount.bind(this);
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then( data => this.setState({ items : data }) );
    }

    handlePageClick = data => {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.props.perPage);
    
        this.setState({ offset: offset }, () => {
          this.loadCommentsFromServer();
        });
    };

    render() {

       const { items } = this.state;

        return (
            <div className="Todo" class="container-fluid">
                <table class="table-bordered table-striped table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item =>
                            <tr key={items}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default Todo;