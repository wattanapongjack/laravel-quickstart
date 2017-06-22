import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTask } from '../actions';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';

class TaskAdd extends Component{

    renderField(field){
        return(
            <div className="form-group has-danger" >
                <label className="col-sm-3 control-label">{field.label}</label>
                <div className="col-sm-6">
                    <input 
                        className="form-control"
                        type="text"
                        {...field.input}
                    />
                    <div className="text-help">
                        {field.meta.touched ? field.meta.error : ''}
                    </div>
                </div>
            </div>
        );
    }

    // constructor(props){
    //     super(props);

    //     this.state = {value: ''};
    // }

    // handleChange(event) {
    // 	this.setState({value: event.target.value})
  	// }

    onSubmit(values){
        this.props.createTask(values);
    }
    
    render(){
        const { handleSubmit } = this.props;

        return(
                <div className="panel panel-default">
                    <div className="panel-heading">
                        New Task
                    </div>

                    <div className="panel-body">
                        <form className="form-horizontal" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                            <Field
                                label="Task" 
                                name="name"
                                component={this.renderField} />
                            {/* <div className="form-group">
                                <label className="col-sm-3 control-label">Task</label>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" value={this.state.value} onChange={(event) => this.handleChange(event)} />
                                </div>
                            </div> */}

                            <div className="form-group">
                                <div className="col-sm-offset-3 col-sm-6">
                                    <button type="submit" className="btn btn-default" >
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

function validate(values){
    const errors = {};

    if(!values.name){
        errors.name = "Enter some task";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'NewTaskForm'
})(
    connect(null,{ createTask })(TaskAdd)
);

// function mapStateToProps(state){
//     return { tasks: state.tasks };
// }

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({createTask : createTask}, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(TaskAdd);