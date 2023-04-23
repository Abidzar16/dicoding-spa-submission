import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Archivepage } from './components/Archivepage';
import { Homepage } from './components/Homepage';
import { Detailpage } from './components/Detailpage';
import { NewNote } from './components/NewNote';
import { Page404 } from './components/Page404';

class App extends React.Component {
  
  constructor(props) {
    super(props);
 
    // inisialisasi state
    this.state = {
      page: '/'
    };

    this.navigate = this.navigate.bind(this);
  }

  navigate(target) {
    this.setState(() => {
      return {
        page: target
      };
    });
  }
  
  render() {
    return (
      <>
        <div className="app-container">
          <Header />
          <main className="body">
            <Routes>
              <Route path='/*' element={<Page404 />} />
              <Route path="/" element={<Homepage />} />
              <Route path="/archives" element={<Archivepage />} />
              <Route path="/notes/new" element={<NewNote />} />
              <Route path="/notes/:id" element={<Detailpage />} />
            </Routes>
          </main>
        </div>
      </>
    );
  }
}

export default App;