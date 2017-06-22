import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTasks, delTask } from '../actions';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class TaskCurrent extends Component{
    componentDidMount(){
        // console.log(this.props.getTasks())
        this.props.getTasks();
    }

    onDeleteClick(id){
        console.log(id)
        this.props.delTask(id);
    }

    // this.props.tasks.map((task) => {
    //         return(                
    //         );
    //     });
    
    renderTasks(){
        // console.log(this.props.tasks)
        return _.map(this.props.tasks, task => {
            return (
                <tr key={task.id}>
                    <td className="table-text" width="60%" >
                        {task.name}
                    </td>
                    <td>
                        <form>         
                            <button type="button" className="btn btn-danger" onClick={() => this.onDeleteClick(task.id, this.props.getTasks())} >
                                Delete
                            </button>
                        </form>
                    </td>
                </tr>
            );
        });
    }

    renderReact(){
        return _.map(this.props.reacttasks, reacttask => {
            return(
                <tr key={reacttask.id}>
                    <td className="table-text" width="60%" >
                        {reacttask.name}
                    </td>
                    <td>
                        <form>         
                            <button type="button" className="btn btn-danger" onClick={() => this.onDeleteClick(reacttask.id)} >
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
                                {this.renderTasks()}
                                {this.renderReact()}
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
        tasks: state.tasks,
        reacttasks: state.reacttasks
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getTasks:getTasks, delTask:delTask}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps )(TaskCurrent);