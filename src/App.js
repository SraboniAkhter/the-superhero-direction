import { useEffect, useState } from 'react';
import './App.css';
import writerData from './fakeData/data.json';
import Header from './components/Header/Header'
import Writer from './components/Writer/Writer';
import Select from './components/Select/Select';
function App() {
  const [writer,setWriter] =useState([]);
  const [select,setSelect] =useState([]);
  // console.log(select);
  useEffect(() => {
    setWriter(writerData);
    //  console.log(writerData);
     }, [])
     const handleAddWriter = (writer) => {
      const newSelect = [...select, writer];
      setSelect(newSelect)
      }
  return (
    <div>
      <Header></Header>
        <div className="container">
          <div className="app">
          <h2>Writer Association Team</h2>
          <h4>Total Budget: 100Millions</h4>
          </div>
        
          <div className="row g-col-6 g-col-md-4">
            <div className="col-md-8">

           <div className="row">
           {
          writer.map(writer => <Writer handleAddWriter={handleAddWriter} writer={writer} key={writer.id}></Writer>)
        }
           </div>
            </div>
            <div className="col-md-4">
            <h1>Added Writer</h1>
          
      <h4>Total Writer on Team: {writer.length}</h4>
    <h4>Selected Writer: {select.length}</h4>
    <Select select={select}></Select>
    <button className="btn btn-info">Done</button>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
