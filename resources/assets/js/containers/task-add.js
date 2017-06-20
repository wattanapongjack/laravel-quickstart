import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clickAdd } from '../actions/index';
import { bindActionCreators } from 'redux';

class TaskAdd extends Component{

    constructor(props){
        super(props);

        this.state = {value: ''};
    }

    handleChange(event) {
    	this.setState({value: event.target.value})
  	}

    render(){
        if(this.props.value==''){
            return alert('enter task');
        }
        return(
                <div className="panel panel-default">
                    <div className="panel-heading">
                        New Task
                    </div>

                    <div className="panel-body">
                        <form className="form-horizontal">
                            <div className="form-group">
                                <label className="col-sm-3 control-label">Task</label>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" value={this.state.value} onChange={(event) => this.handleChange(event)} />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-offset-3 col-sm-6">
                                    <button type="button" className="btn btn-default" onClick={(event) => this.props.clickAdd(this.state.value,this.state.value='')} >
                                        Add Task
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        )
    }
}

function mapStateToProps(state){
    return { tasks: state.tasks };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({clickAdd : clickAdd}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskAdd);