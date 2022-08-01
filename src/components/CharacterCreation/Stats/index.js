import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CharacterCreation from 'src/components/CharacterCreation';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import './stats.scss';

import { handleDiceClass, CalculDiceSum, resetDice } from 'src/actions/characters';

function getRandomInt() {
  const randomNumber = Math.floor((Math.random() * (7 - 1)) + 1);
  return randomNumber;
}

export default function Stats() {
  const {
    isDiceSum1,
  } = useSelector((state) => state.characters.dice);

  const {
    diceResult1,
    diceResult2,
    diceResult3,
    diceResult4,
  } = useSelector((state) => state.characters.dice.result);

  const random1 = useSelector(getRandomInt);
  const random2 = useSelector(getRandomInt);
  const random3 = useSelector(getRandomInt);
  const random4 = useSelector(getRandomInt);

  // listNumber.sort((a, b) => a - b);

  const dispatch = useDispatch();

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <CharacterCreation />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '5rem',
        }}
      >
        <Typography
          variant="h5"
          noWrap
          sx={{
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            // color: 'primary.contrastText',
            textDecoration: 'none',
            marginBottom: '5rem',
          }}
        >Choix des Statistiques
        </Typography>
        <div className="maxiscene">
          <div className="maxicube show-1">
            <div className="maxicube__face maxicube__face--1">2</div>
            <div className="maxicube__face maxicube__face--2">1</div>
            <div className="maxicube__face maxicube__face--3">3</div>
            <div className="maxicube__face maxicube__face--4">4</div>
            <div className="maxicube__face maxicube__face--5">5</div>
            <div className="maxicube__face maxicube__face--6">6</div>
          </div>
        </div>
        <div className="diceContainer">
          <div className="scene">
            <div value="diceResult1" className={`cube show-${diceResult1}`}>
              <div className="cube__face cube__face--1">1</div>
              <div className="cube__face cube__face--2">2</div>
              <div className="cube__face cube__face--3">3</div>
              <div className="cube__face cube__face--4">4</div>
              <div className="cube__face cube__face--5">5</div>
              <div className="cube__face cube__face--6">6</div>
            </div>
          </div>

          <div className="scene">
            <div value="diceResult2" className={`cube show-${diceResult2}`}>
              <div className="cube__face cube__face--1">1</div>
              <div className="cube__face cube__face--2">2</div>
              <div className="cube__face cube__face--3">3</div>
              <div className="cube__face cube__face--4">4</div>
              <div className="cube__face cube__face--5">5</div>
              <div className="cube__face cube__face--6">6</div>
            </div>
          </div>

          <div className="scene">
            <div value="diceResult3" className={`cube show-${diceResult3}`}>
              <div className="cube__face cube__face--1">1</div>
              <div className="cube__face cube__face--2">2</div>
              <div className="cube__face cube__face--3">3</div>
              <div className="cube__face cube__face--4">4</div>
              <div className="cube__face cube__face--5">5</div>
              <div className="cube__face cube__face--6">6</div>
            </div>
          </div>

          <div className="scene">
            <div value="diceResult4" className={`cube show-${diceResult4}`}>
              <div className="cube__face cube__face--1">1</div>
              <div className="cube__face cube__face--2">2</div>
              <div className="cube__face cube__face--3">3</div>
              <div className="cube__face cube__face--4">4</div>
              <div className="cube__face cube__face--5">5</div>
              <div className="cube__face cube__face--6">6</div>
            </div>
          </div>
        </div>
        <div className="result_dice">
          { isDiceSum1
            ? (
              <>
                <div className="result_dice_sum">10</div>
                <div className="result_dice_container">
                  <div className="minicube__face">{diceResult1}</div>
                  <div className="minicube__face">{diceResult2}</div>
                  <div className="minicube__face">{diceResult3}</div>
                  <div className="minicube__face">{diceResult4}</div>
                </div>
                <FormControl sx={{ width: 'auto', marginTop: '1rem' }}>
                  <InputLabel>1er</InputLabel>
                  <Select
                    // labelId="demo-simple-select-label"
                    // id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    sx={{ width: '10rem', marginTop: '1rem' }}
                  >
                    <MenuItem value={10}>Force</MenuItem>
                    <MenuItem value={20}>Dexterité</MenuItem>
                    <MenuItem value={30}>Charisme</MenuItem>
                  </Select>
                </FormControl>
                <button
                  type="button"
                  className="rollBtn"
                  onClick={() => {
                    dispatch(resetDice());
                  }}
                >
                  retry
                </button>
              </>

            )
            : (

              <button
                type="button"
                className="rollBtn"
                onClick={() => {
                  dispatch(handleDiceClass(random1, 'diceResult1'));
                  dispatch(handleDiceClass(random2, 'diceResult2'));
                  dispatch(handleDiceClass(random3, 'diceResult3'));
                  dispatch(handleDiceClass(random4, 'diceResult4'));
                  dispatch(CalculDiceSum());
                }}
              >
                Lancez
              </button>
            )}
        </div>
      </Container>
    </>

  );
}
