import React, { Component } from 'react';
import NoteForm from '../src/components/NoteForm';
import { DB_CONFIG } from './config';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';
import ScrumBoard from './components/ScrumBoard'

class App extends Component {

  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);

    this.apps = firebase.initializeApp(DB_CONFIG);
    this.database = this.apps.database().ref().child('task');

    // We're going to setup the React state of our component
    this.state = {
      notes: [],
    }
  }

  componentWillMount(){
    const previousNotes = this.state.notes;

    // DataSnapshot
    this.database.on('child_added', snap => {
      previousNotes.push({
        id: snap.key,
        name: snap.val().name,
        category:snap.val().category,
        bgcolor:snap.val().bgcolor
      })

      this.setState({
        notes: previousNotes
      })
    })

    this.database.on('child_removed', snap => {
      for(var i=0; i < previousNotes.length; i++){
        if(previousNotes[i].id === snap.key){
          previousNotes.splice(i, 1);
        }
      }

      this.setState({
        notes: previousNotes
      })
    })
  }

  addNote(note,taskType){
    this.database.push().set({ name: note,category:taskType,bgcolor:"pink"});
  }

  removeNote(noteId){
    console.log("from the parent: " + noteId);
    this.database.child(noteId).remove();
  }

  render() {
    return (
      
   
        <div className="container-fluid">
          <div>      
            <NoteForm addNote={this.addNote} />
            
            <ScrumBoard note={this.state.notes}/>  
            </div>
          
        </div>
    
    );
  }
}

export default App;