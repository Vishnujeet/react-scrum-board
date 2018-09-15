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

    // When the user input changes, set the newNoteContent
    // to the value of what's in the input box.
    handleUserInput(e){
        this.setState({
            name: e.target.value, // the value of the text input
        })
    }

    writeNote(){
        // call a method that sets the noteContent for a note to
        // the value of the input
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
                placeholder="Write a new note..."
                value={this.state.name} 
                onChange={this.handleUserInput} />
                <button className="noteButton"
                onClick={this.writeNote}>Add Task</button>
            </div>
        )
    }
}

export default NoteForm;