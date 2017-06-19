import React from 'react';
import TaskListItem from './TaskListItem';

class CurrentTask extends React.Component{
    
    render(){
        return (
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
                        <TaskListItem items={this.props.items} delete={this.props.delete.bind(this)}/>
                    </table>
                </div>
            </div>
        );
    }
}

export default CurrentTask;