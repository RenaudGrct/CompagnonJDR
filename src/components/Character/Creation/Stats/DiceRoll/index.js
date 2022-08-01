import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import PropTypes from 'prop-types';

import stats from 'src/assets/Data/stats.json';

import './diceRoll.scss';

export default function DiceRoller({
  result,
  diceRoll,
  handleChange,
  diceResultOne,
  diceResultTwo,
  diceResultThree,
  diceResultFour,
  isDiceSum,
  statsDropdown,
}) {
  return (

    <div className="result_diceRoll">

      <div className="result_diceRoll_container">
        <p> {result}</p>
        <div className="result_dice_container">
          <div className="minicube__face">{diceResultOne}</div>
          <div className="minicube__face">{diceResultTwo}</div>
          <div className="minicube__face">{diceResultThree}</div>
          <div className="minicube__face">{diceResultFour}</div>
        </div>
      </div>
      <FormControl sx={{ width: '100%', marginTop: '1rem' }}>
        <InputLabel>Statistique</InputLabel>
        <Select
          value={statsDropdown}
          label="stats"
          onChange={(e) => handleChange(e)}
          sx={{ width: '10rem', marginTop: '1rem' }}
        >
          {
            stats.map((stat) => (

              <MenuItem value={stat.sourceName}>{stat.localizedName}</MenuItem>

            ))
          }

        </Select>
      </FormControl>
      {!isDiceSum && (
      <button
        type="button"
        className="RollBtn"
        onClick={diceRoll}
      >
        Lancer
      </button>
      )}
    </div>

  );
}

DiceRoller.propTypes = {
  result: PropTypes.string.isRequired,
  diceRoll: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  diceResultOne: PropTypes.number.isRequired,
  diceResultTwo: PropTypes.number.isRequired,
  diceResultThree: PropTypes.number.isRequired,
  diceResultFour: PropTypes.number.isRequired,
  isDiceSum: PropTypes.bool.isRequired,
  statsDropdown: PropTypes.string.isRequired,
};
