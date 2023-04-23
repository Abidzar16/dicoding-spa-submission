import { React, useState } from 'react';
import SearchBar from './SearchBar'
import NotesList from './NotesList'
import HomepageAction from './HomepageAction'
import { getActiveNotes } from './../utils/local-data'

export function Homepage() {
  const [query, setQuery] = useState("");

  const filteredList = getActiveNotes().filter((item) => {
    return (item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  });
  
  return (
    <>
      <section className="homepage">
        <h2>Catatan Aktif</h2>
        <SearchBar query={query} setQuery={setQuery}/>
        <NotesList notes={filteredList}/>
        <HomepageAction />
      </section>
    </>
  )
}