import React from 'react';
import { showFormattedDate } from '../utils';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NotesList({notes}) {

  const list_notes = notes.map((note) => {
    return (
        <article className="note-item" key={`${note.id}`}>
          <h3 className="note-item__title">
            <Link to={`/notes/${note.id}`}>{note.title}</Link>
          </h3>
          <p className="note-item__createdAt">{showFormattedDate(note.createdAt)}</p>
          <p className="note-item__body">{note.body}</p>
        </article>  
    );
  });

  if (notes.length === 0){
    return (
        <p class="notes-list__empty-message">Tidak ada catatan</p>
    );
  } else {
    return (
      <section className="notes-list">
        {list_notes}
      </section>
    );
  }
}

NotesList.propTypes = {
  notes: PropTypes.array
};

export default NotesList;