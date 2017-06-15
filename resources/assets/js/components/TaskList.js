import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TaskList extends Component{

    delTask(event){
        alert('value: ' );
        event.preventDefault();
    }


    render(){
        var display = function(value){
            return (
                <tr>
                    <td className="table-text" width="60%">
                        {value}
                    </td>
                    <td>
                        <form>          
                            <button type="submit" className="btn btn-danger" onClick={(event)=>this.delTask(event)}>
                                <i className="fa fa-btn fa-trash"></i>Delete
                            </button>
                        </form>
                    </td>
                </tr>
            )
        }
        
        return(
            <tbody>
                {this.props.item.map(display)} 
            </tbody>
        );
    }
}

export default TaskList;