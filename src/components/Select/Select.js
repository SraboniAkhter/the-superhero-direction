import React from 'react';
import './Select.css';

const Select = (props) => {
    // console.log(props);
    const {select} =props;
    // const {select} =props.select;
      console.log(select);
     const totalSalary=select.reduce((sum,writer) => sum + writer.salary,0);
     let writerName = [];
     console.log(writerName);
     for(const writer of select) {
         writerName.push(writer.name);
     }
    return (
        <div>
            <h2>Writer selected: {select.length}</h2>
            <p>Total Salary:{totalSalary}</p>
            <div>
          <ol>
            {writerName.map((name) => (
              <li key={select.id}>{name}</li>
            ))}
          </ol>
        </div>
        </div>
    );
};

export default Select;