import React from 'react';
import './Writer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'
const Writer = (props) => {
    const {name,Born,Book,img,salary,nationality} = props.writer
   const handleAddWriter = props.handleAddWriter
    return (
        <div className="col-md-4">
             <div className="card  writer">
      <img style={{ height:'300px'}} src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Writer Name: {name}</h5>
        <p className="card-text">Born: {Born}</p>
        <h5>Salary:${salary}</h5>
    <p><small>Books: {Book}</small></p>
    <p><small>Nationality: {nationality}</small></p>
    <button className="btn btn-outline-info" onClick={() => handleAddWriter(props.writer)}><FontAwesomeIcon  icon ={faCheckCircle}/>Add Writers</button>
      </div>
        </div>
        </div>
    );
};

export default Writer;