import React, {Component} from 'react';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { deleteTodo } from './actions';

class TodoListContainer extends Component {
    render(){
        return(
            <div>
                <TodoList todos={this.props.todos}
                deleteTodo={this.props.deleteTodo}
                />
            </div>    
        );
    }
}

function mapStateToProps(state){
    return{
        todos: state.todos
    }
}

export default connect(mapStateToProps, {deleteTodo})(TodoListContainer);