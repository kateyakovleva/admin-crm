import React from 'react';
import '../styles/notes.scss';

const Notes = () => {
  return (
    <div className='notes column'>
      <div className='notesTitle'>Notes:</div>
      <ul className='notesUl'>
        <li className='notesLi mb-10'>Administrator module will list all users on this page.</li>
        <li className='notesLi mb-10'>Administrator module will list all users on this page.</li>
        <li className='notesLi'>Administrator module will list all users on this page.</li>
      </ul>
    </div>
  );
};

export default Notes;