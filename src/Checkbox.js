import React from 'react';
import './Checkbox.css';

export default function Checkbox({ label, onChange }) {
  return (
    <div className="checkbox-container">
      <label>
        <input 
          name={label} 
          type="checkbox"
          key={label}
          onChange={onChange}
        />
        {label}
      </label>
    </div>
  )
}