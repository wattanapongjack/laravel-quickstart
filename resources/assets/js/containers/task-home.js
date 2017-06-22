import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class TaskHome extends Component{
    render(){
        return(
                <div className="panel panel-default">
                    <div className="panel-heading">
                        Welcome to Dashboard
                    </div>
                        
                    <div className="panel-body">
                        <Link className="btn btn-primary" to="/tasks">
                            Add Task
                        </Link>
                    </div>
                </div>
        );
    }
}
