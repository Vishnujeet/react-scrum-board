import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            category:'Todo'
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeNote = this.writeNote.bind(this);
    }


    handleUserInput(e){
        this.setState({
            name: e.target.value, // the value of the text input
        })
    }

    writeNote(){
       
        this.props.addNote(this.state.name,this.state.category);

        // Set newNoteContent back to an empty string.
        this.setState({
            name: '',
        })
    }

    render(){
        return(
            <div className="formWrapper">
                <input className="noteInput"
                placeholder="Add your task..."
                value={this.state.name} 
                onChange={this.handleUserInput} />
                <button className="noteButton"
                onClick={this.writeNote}>Add Task</button>
            </div>
        )
    }
}

export default NoteForm;