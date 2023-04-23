import { React, useState } from 'react';
import { addNote } from './../utils/local-data';
import { useNavigate } from 'react-router-dom';

export function NewNote() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleTitle = (event) => {
    const value = event.target.value;
    setTitle(value);
  };

  const handleBody = (event) => {
    const value = event.target.innerHTML;
    setBody(value);
  };

  const handleNote = (event) => {
    event.preventDefault();
    addNote({title: title, body: body});
    navigate('/');
  };

  return (
    <>
      <section className="add-new-page">
        <div className="add-new-page__input">
          <input className="add-new-page__input__title" placeholder="Catatan rahasia" onChange={handleTitle} value={title} />
            <div className="add-new-page__input__body" contentEditable="true"  onInput={handleBody} data-placeholder="Sebenarnya saya adalah ...."       
             >
            </div>
          </div>
          <div className="add-new-page__action">
            <button className="action" type="button" title="Simpan">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" onClick={handleNote}>
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z">
              </path>
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}

// export default NewNote;