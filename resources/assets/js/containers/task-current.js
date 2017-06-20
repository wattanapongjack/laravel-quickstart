import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class TaskCurrent extends Component{
    renderList(){
        return this.props.tasks.map((task) => {
            return(
                    <tr key={task.id}>
                        <td className="table-text" width="60%" >
                            {task.text}
                        </td>
                        <td>
                            <form>         
                                <button type="button" className="btn btn-danger" onClick={() => this.props.deleteTask(task.id)}>
                                    Delete
                                </button>
                            </form>
                        </td>
                    </tr>
            );
        });
    }

    render(){
        
        return(
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        Current Tasks
                    </div>
                        
                    <div className="panel-body">
                        <table className="table table-striped task-table">
                            <thead>
                                <th>Task</th>
                                <th>&nbsp;</th>
                            </thead>
                            <tbody>
                                {this.renderList()}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Link className="btn btn-primary" to="/home">
                    Back
                </Link>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        tasks : state.tasks
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({deleteTask : deleteTask}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskCurrent);