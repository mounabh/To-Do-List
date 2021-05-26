import React, { Component } from "react";
import TodoList from "./Components/TodoList";
import AddTask from "./Components/AddTask";

class App extends Component {
    state = {
        tasks: [
            {
                id: 1,
                description: "wake up !",
                done: false,
            },
            {
                id: 2,
                description: "wash your face !",
                done: false,
            },
            {
                id: 3,
                description: "get your breakfast !",
                done: false,
            },
        ],
    };
    addTask = (task) => this.setState({ tasks: [...this.state.tasks, task] });
    doneTask = (id) =>
        this.setState({
            tasks: this.state.tasks.map((el) =>
                el.id === id ? { ...el, done: !el.done } : el
            ),
        });
    deleteTask = (id) =>
        this.setState({
            tasks: this.state.tasks.filter((el) => el.id !== id),
        });
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <h1>Here is a list of what you should do</h1>
                </div>
                <TodoList
                    todos={this.state.tasks}
                    handleDelete={this.deleteTask}
                    handleDone={this.doneTask}
                />
                <AddTask handleAdd={this.addTask} />
            </div>
        );
    }
}
export default App;
