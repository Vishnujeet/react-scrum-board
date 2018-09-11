import React, { Component } from 'react'
import Note from './Note'
import FaPlus from 'react-icons/lib/fa/plus'

class Board extends Component{
   constructor(porps){
       super(porps)
       this.state={
           notes:[
           
           ]
       }
       this.eachNote=this.eachNote.bind(this)
       
       this.add=this.add.bind(this)
       this.nextId=this.nextId.bind(this)
   }

 

   add(text){
       this.setState(prevState => ({
           notes: [
               ...prevState.notes,
               {
                   id:this.nextId,
                   note:text
               }
           ]
       }))
   }

   nextId(){
       this.uniqueId=this.update || 0
       return this.uniqueId++
   }
   
   eachNote(note,i){
       return(
        <Note key={note.id}
                 index={note.id}
                 onChange={this.update}
                 onRemove={this.remove}>
                 {note.note}
                </Note>
       )
   }


    render(){
        return(
            <div className='board'>
                {this.state.notes.map(this.eachNote)}
                <button onClick={this.add.bind(null,'Add Note')} id='add'><FaPlus/></button>
            </div>
        )
    }
}
export default Board 