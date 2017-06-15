import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TaskList extends Component{

    delTask(key){
        alert('value: ' + item);
    }

    render(){
        return(
            <tbody>
                {this.props.items.map((item)=>

                    <tr key={Math.random()}>
                        <td className="table-text" width="60%" >
                            {item}
                        </td>
                        <td>
                            <form>          
                                <button type="button" className="btn btn-danger" onClick={this.delTask(key)}>
                                    <i className="fa fa-btn fa-trash"></i>Delete
                                </button>
                            </form>
                        </td>
                    </tr>
                
                )} 
            </tbody>
        );
    }
}

export default TaskList;