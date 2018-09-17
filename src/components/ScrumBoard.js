import React, { Component } from 'react'
import '../App.css'

export default class ScrumBoard extends Component{
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
               console.log(task)         
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
            WIP:[],
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
            <div className="row">
                <h2 className="header">SCRUM BOARD</h2>
                    <div className="todo col-sm-4"
                        onDragOver={(e)=>this.onDragOver(e)}
                        onDrop={(e)=>{this.onDrop(e, "Todo")}}>
                        <span className="task-header">TO DO</span>
                        {tasks.Todo}
                    </div>

                    <div className="col-sm-4 wip" 
                        onDragOver={(e)=>this.onDragOver(e)}
                        onDrop={(e)=>this.onDrop(e, "WIP")}>
                        <span className="task-header">IN PROGRESS</span>
                        {tasks.WIP}
                    </div>
            
                    <div className="droppable col-sm-4" 
                        onDragOver={(e)=>this.onDragOver(e)}
                        onDrop={(e)=>this.onDrop(e, "complete")}>
                        <span className="task-header">DONE :)</span>
                        {tasks.complete}
                    </div>
            </div>
             



            </div>
        );
    }
}