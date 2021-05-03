import React, { useContext } from 'react';
import './Subform.scss';
import { StateContext } from '../../utils/stateProvider';

export default function SubForm() {
  const { setMobile, setPhone, setEmail } = useContext(StateContext);

  return (
    <div className="subform">
      <div className="subform__mobile">
        <label>Mobile format: 09x xxx(x) xxx</label>
        <input
          onChange={(e) => setMobile(e.target.value)}
          type="tel"
          placeholder="Enter mobile"
          maxLength="12"
          required 
        />
      </div>

      <div className="subform__phone">
        <label>Phone format: 0x(x) xxx(x) xxx</label>
        <input
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          placeholder="Enter phone"
          maxLength="12"
          required
        />
      </div>

      <input
        onChange={(e) => setEmail(e.target.value)}
        className="subform__email"
        type="email"
        placeholder="Enter email"
        required
      />
    </div>
  );
}
