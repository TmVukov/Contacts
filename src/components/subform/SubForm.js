import { useStateContext } from '../../utils/stateProvider';
import { SET_MOBILE, SET_PHONE, SET_EMAIL } from '../../constants';
import './Subform.scss';

export default function SubForm() {
  const { dispatch } = useStateContext();

  return (
    <div className="subform">
      <div className="subform__mobile">
        <label>Mobile format: 09x xxx(x) xxx</label>
        <input
          onChange={(e) =>
            dispatch({
              type: SET_MOBILE,
              payload: { key: 'mobile', value: e.target.value },
            })
          }
          type="tel"
          placeholder="Enter mobile"
          maxLength="12"
          required
        />
      </div>

      <div className="subform__phone">
        <label>Phone format: 0x(x) xxx(x) xxx</label>
        <input
          onChange={(e) =>
            dispatch({
              type: SET_PHONE,
              payload: { key: 'phone', value: e.target.value },
            })
          }
          type="tel"
          placeholder="Enter phone"
          maxLength="12"
          required
        />
      </div>

      <input
        onChange={(e) =>
          dispatch({
            type: SET_EMAIL,
            payload: { key: 'email', value: e.target.value },
          })
        }
        className="subform__email"
        type="email"
        placeholder="Enter email"
        required
      />
    </div>
  );
}
