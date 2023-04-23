import React from 'react';
import { getNote } from './../utils/local-data'
import { showFormattedDate } from '../utils';
import { useParams } from 'react-router-dom';
import { Detailpageaction } from './Detailpageaction';

export function Detailpage() {
  const { id } = useParams();
  const note = getNote(id);
  
  return (
    <>
      <main>
        <section className="detail-page">
          <h3 className="detail-page__title">{note.title}</h3>
          <p className="detail-page__createdAt">{showFormattedDate(note.createdAt)}</p>
          <div className="detail-page__body">{note.body}</div>
          <Detailpageaction />
        </section>
      </main>
    </>
  )
}