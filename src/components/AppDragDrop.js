import React, { Component } from 'react'
import '../App.css'

export default class AppdraDrop extends Component{
    constructor(props){
        super(props)
       
     this.state = {
        tasks: []

        }
    }
    componentWillMount(){
        const previousNotes = this.props.note
        this.setState({
            tasks:previousNotes
        })    
    }


    onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
       let id = ev.dataTransfer.getData("id");
       
       let tasks = this.state.tasks.filter((task) => {
           if (task.id === id) {
               task.category = cat;           
           }
           return task;
       });

       this.setState({
           ...this.state,
           tasks
       });

    }
    render() {
        var tasks = {
            Todo: [],
            complete: []
        }

        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(
                <div key={t.name} 
                    onDragStart = {(e) => this.onDragStart(e, t.id)}
                    draggable
                    className="draggable"
                    style = {{backgroundColor: t.bgcolor}} >
                    {t.name}
                </div>
            );
        });

        return (

            <div className="container-drag">
            <div>
            </div>
                <h2 className="header">DRAG & DROP DEMO</h2>
                <div className="todo"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "Todo")}}>
                    <span className="task-header">todo</span>
                    {tasks.Todo}
                </div>
        
                <div className="droppable" 
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "complete")}>
                     <span className="task-header">COMPLETED</span>
                     {tasks.complete}
                </div>

            </div>
        );
    }
}