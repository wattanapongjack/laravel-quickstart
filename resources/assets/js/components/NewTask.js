import React from 'react';
import CurrentTask from './CurrentTask';

class NewTask extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
			value : '',
			items : []
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
				items: this.state.items.concat([this.state.value]),
				value: ''
			});  
		}
  	}

    delete(item){
		const newState = this.state.items;
		if (newState.indexOf(item) > -1) {
			newState.splice(newState.indexOf(item), 1);
			this.setState({items: newState})
	  }
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
                                    <input type="text" className="form-control" value={this.state.value} onChange={event => this.handleChange(event)} />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-offset-3 col-sm-6">
                                    <button type="button" className="btn btn-default" onClick={event => this.addTask(event)}>
                                        Add Task
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <CurrentTask items={this.state.items} delete={this.delete.bind(this)}/>
            </div>
        );
    }
}
export default NewTask;