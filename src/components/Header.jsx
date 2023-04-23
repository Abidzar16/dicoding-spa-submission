import React from 'react';
import { Link } from 'react-router-dom';

export function Header(){
  return (
    <>
      <header>
        <h1>
          <Link to="/">
            <a href="/">Aplikasi Catatan</a>
          </Link>
        </h1>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/archives">
                <a href="/archives">Arsip</a>
              </Link>
            </li>
          </ul>
        </nav>        
      </header>
    </>
  )
}