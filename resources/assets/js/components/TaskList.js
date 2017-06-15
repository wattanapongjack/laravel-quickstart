import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TaskList extends Component{

    delete(id){
        this.props.delete(id);
        console.log(id);
    }

    render(){
        return(
            <tbody>
                {this.props.items.map((item,id)=>

                    <tr key={id}>
                        <td className="table-text" width="60%" >
                            {item}
                        </td>
                        <td>
                            <form>         
                                <button type="button" className="btn btn-danger" onClick={()=>this.delete(id)}>
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