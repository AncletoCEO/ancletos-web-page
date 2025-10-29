import React from 'react';
import Curtain from './components/Curtain';
import Title from './components/Title';
import Table from './components/Table';
import AudioPlayer from './components/AudioPlayer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Curtain />
      <Title />
      <Table />
      <AudioPlayer />
    </div>
  );
}

export default App;
