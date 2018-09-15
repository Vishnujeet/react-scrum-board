import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';

class Note extends Component{

    constructor(props){
        super(props);
        this.noteContent = props.noteContent; 
        this.noteType=props.noteType
        this.noteId = props.noteId; 
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
    }

    handleRemoveNote(id){
        this.props.removeNote(id);
    }

    render(){
        return(
            <div className="note fade-in">
                <span className="closebtn" 
                      onClick={() => this.handleRemoveNote(this.noteId)}>
                      &times;
                </span>
                <p className="noteContent">{ this.noteContent }</p>
                <p className="noteContent">{ this.noteType }</p>
            </div>
        )
    }
}

Note.propTypes = {
    noteContent: PropTypes.string,
    noteType:PropTypes.string
}

export default Note;