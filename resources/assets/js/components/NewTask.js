import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TaskList from './TaskList';

class NewTask extends Component {
	constructor(props) {
    super(props);
    this.state = {
		value : '',
		item : []
	};
  }

	handleChange(event) {
    	this.setState({value: event.target.value});
  	}

  	addTask(event) {
		if(this.state.value==''){
			alert('Please Enter Task');
		}else{
			this.setState({
				item: this.state.item.concat([this.state.value]),
				value: ''
			});
		}
    	event.preventDefault();
  	}

    render() {
        return (
		<div>
        	<div className="panel panel-default">
        		<div className="panel-heading">
        			New Task
            	</div>

            	<div className="panel-body">
            		<form className="form-horizontal">

            		<div className="form-group">
        				<label className="col-sm-3 control-label">Task</label>
        				<div className="col-sm-6">
                        	<input type="text" className="form-control" value={this.state.value} onChange={(event)=>this.handleChange(event)} />
                    	</div>
        			</div>

        			<div className="form-group">
                        <div className="col-sm-offset-3 col-sm-6">
                            <button type="button" className="btn btn-default" onClick={(event)=>this.addTask(event)}>
                                <i className="fa fa-btn fa-plus"></i>Add Task
                            </button>
                        </div>
                    </div>

      				</form>
      			</div>
            </div>

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
						<TaskList item={this.state.item} />
                	</table>
            	</div>
			</div>
        </div>
        );
    }
}

export default NewTask;
