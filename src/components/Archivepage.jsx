import { React, useState } from 'react';
import SearchBar from './SearchBar';
import NotesList from './NotesList'
import { getArchivedNotes } from './../utils/local-data'

export function Archivepage(){

  const [query, setQuery] = useState("");

  const filteredList = getArchivedNotes().filter((item) => {
    return (item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1) || (item.body.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  });
  
  return (
    <>
      <section className="archives-page">
        <h2>Catatan Arsip</h2>
        <SearchBar query={query} setQuery={setQuery} />
        <NotesList notes={filteredList}/>
      </section>
    </>
  )
}