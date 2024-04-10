import { useSelector, useDispatch } from 'react-redux';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import DiceRoll from 'src/components/Character/Creation/Stats/DiceRoll';

import './stats.scss';

import {
  handleDiceClass,
  sumDiceThrowOne,
  sumDiceThrowTwo,
  sumDiceThrowThree,
  sumDiceThrowFour,
  sumDiceThrowFive,
  sumDiceThrowSix,
  resetThrows,
  selectStat,
} from 'src/actions/characters';

function getRandomInt() {
  const randomNumber = Math.floor((Math.random() * (7 - 1)) + 1);

  return randomNumber;
}

function sumOfDice(array) {
  const sortedArray = array.sort().splice(1, 3);
  const initialValue = 0;
  const sum = sortedArray
    .reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
  return sum;
}

export default function Stats() {
  const {
    sumOne,
    sumTwo,
    sumThree,
    sumFour,
    sumFive,
    sumSix,
    isDiceSumOne,
    isDiceSumTwo,
    isDiceSumThree,
    isDiceSumFour,
    isDiceSumFive,
    isDiceSumSix,
    miniDice1,
    miniDice2,
    miniDice3,
    miniDice4,
    miniDice5,
    miniDice6,
    miniDice7,
    miniDice8,
    miniDice9,
    miniDice10,
    miniDice11,
    miniDice12,
    miniDice13,
    miniDice14,
    miniDice15,
    miniDice16,
    miniDice17,
    miniDice18,
    miniDice19,
    miniDice20,
    miniDice21,
    miniDice22,
    miniDice23,
    miniDice24,
  } = useSelector((state) => state.characters.dice.resultDisplay);

  const {
    diceResultOne,
    diceResultTwo,
    diceResultThree,
    diceResultFour,
  } = useSelector((state) => state.characters.dice.result);

  const dispatch = useDispatch();

  const handleDiceRollOnClickOne = () => {
    const randomNumber1 = getRandomInt();
    const randomNumber2 = getRandomInt();
    const randomNumber3 = getRandomInt();
    const randomNumber4 = getRandomInt();

    const arraySum = sumOfDice([randomNumber1, randomNumber2, randomNumber3, randomNumber4]);

    dispatch(handleDiceClass(randomNumber1, 'diceResultOne', 'miniDice1'));
    dispatch(handleDiceClass(randomNumber2, 'diceResultTwo', 'miniDice2'));
    dispatch(handleDiceClass(randomNumber3, 'diceResultThree', 'miniDice3'));
    dispatch(handleDiceClass(randomNumber4, 'diceResultFour', 'miniDice4'));

    dispatch(sumDiceThrowOne(arraySum));
  };

  const handleDiceRollOnClickTwo = () => {
    const randomNumber1 = getRandomInt();
    const randomNumber2 = getRandomInt();
    const randomNumber3 = getRandomInt();
    const randomNumber4 = getRandomInt();

    const arraySum = sumOfDice([randomNumber1, randomNumber2, randomNumber3, randomNumber4]);

    dispatch(handleDiceClass(randomNumber1, 'diceResultOne', 'miniDice5'));
    dispatch(handleDiceClass(randomNumber2, 'diceResultTwo', 'miniDice6'));
    dispatch(handleDiceClass(randomNumber3, 'diceResultThree', 'miniDice7'));
    dispatch(handleDiceClass(randomNumber4, 'diceResultFour', 'miniDice8'));

    dispatch(sumDiceThrowTwo(arraySum));
  };
  const handleDiceRollOnClickThree = () => {
    const randomNumber1 = getRandomInt();
    const randomNumber2 = getRandomInt();
    const randomNumber3 = getRandomInt();
    const randomNumber4 = getRandomInt();

    const arraySum = sumOfDice([randomNumber1, randomNumber2, randomNumber3, randomNumber4]);

    dispatch(handleDiceClass(randomNumber1, 'diceResultOne', 'miniDice9'));
    dispatch(handleDiceClass(randomNumber2, 'diceResultTwo', 'miniDice10'));
    dispatch(handleDiceClass(randomNumber3, 'diceResultThree', 'miniDice11'));
    dispatch(handleDiceClass(randomNumber4, 'diceResultFour', 'miniDice12'));

    dispatch(sumDiceThrowThree(arraySum));
  };

  const handleDiceRollOnClickFour = () => {
    const randomNumber1 = getRandomInt();
    const randomNumber2 = getRandomInt();
    const randomNumber3 = getRandomInt();
    const randomNumber4 = getRandomInt();

    const arraySum = sumOfDice([randomNumber1, randomNumber2, randomNumber3, randomNumber4]);

    dispatch(handleDiceClass(randomNumber1, 'diceResultOne', 'miniDice13'));
    dispatch(handleDiceClass(randomNumber2, 'diceResultTwo', 'miniDice14'));
    dispatch(handleDiceClass(randomNumber3, 'diceResultThree', 'miniDice15'));
    dispatch(handleDiceClass(randomNumber4, 'diceResultFour', 'miniDice16'));

    dispatch(sumDiceThrowFour(arraySum));
  };

  const handleDiceRollOnClickFive = () => {
    const randomNumber1 = getRandomInt();
    const randomNumber2 = getRandomInt();
    const randomNumber3 = getRandomInt();
    const randomNumber4 = getRandomInt();

    const arraySum = sumOfDice([randomNumber1, randomNumber2, randomNumber3, randomNumber4]);

    dispatch(handleDiceClass(randomNumber1, 'diceResultOne', 'miniDice17'));
    dispatch(handleDiceClass(randomNumber2, 'diceResultTwo', 'miniDice18'));
    dispatch(handleDiceClass(randomNumber3, 'diceResultThree', 'miniDice19'));
    dispatch(handleDiceClass(randomNumber4, 'diceResultFour', 'miniDice20'));

    dispatch(sumDiceThrowFive(arraySum));
  };

  const handleDiceRollOnClickSix = () => {
    const randomNumber1 = getRandomInt();
    const randomNumber2 = getRandomInt();
    const randomNumber3 = getRandomInt();
    const randomNumber4 = getRandomInt();

    const arraySum = sumOfDice([randomNumber1, randomNumber2, randomNumber3, randomNumber4]);

    dispatch(handleDiceClass(randomNumber1, 'diceResultOne', 'miniDice21'));
    dispatch(handleDiceClass(randomNumber2, 'diceResultTwo', 'miniDice22'));
    dispatch(handleDiceClass(randomNumber3, 'diceResultThree', 'miniDice23'));
    dispatch(handleDiceClass(randomNumber4, 'diceResultFour', 'miniDice24'));

    dispatch(sumDiceThrowSix(arraySum));
  };

  return (
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
          letterSpacing: '.2rem',
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
          <div value="diceResult1" className={`cube show-${diceResultOne}`}>
            <div className="cube__face cube__face--1">1</div>
            <div className="cube__face cube__face--2">2</div>
            <div className="cube__face cube__face--3">3</div>
            <div className="cube__face cube__face--4">4</div>
            <div className="cube__face cube__face--5">5</div>
            <div className="cube__face cube__face--6">6</div>
          </div>
        </div>

        <div className="scene">
          <div value="diceResult2" className={`cube show-${diceResultTwo}`}>
            <div className="cube__face cube__face--1">1</div>
            <div className="cube__face cube__face--2">2</div>
            <div className="cube__face cube__face--3">3</div>
            <div className="cube__face cube__face--4">4</div>
            <div className="cube__face cube__face--5">5</div>
            <div className="cube__face cube__face--6">6</div>
          </div>
        </div>

        <div className="scene">
          <div value="diceResult3" className={`cube show-${diceResultThree}`}>
            <div className="cube__face cube__face--1">1</div>
            <div className="cube__face cube__face--2">2</div>
            <div className="cube__face cube__face--3">3</div>
            <div className="cube__face cube__face--4">4</div>
            <div className="cube__face cube__face--5">5</div>
            <div className="cube__face cube__face--6">6</div>
          </div>
        </div>

        <div className="scene">
          <div value="diceResult4" className={`cube show-${diceResultFour}`}>
            <div className="cube__face cube__face--1">1</div>
            <div className="cube__face cube__face--2">2</div>
            <div className="cube__face cube__face--3">3</div>
            <div className="cube__face cube__face--4">4</div>
            <div className="cube__face cube__face--5">5</div>
            <div className="cube__face cube__face--6">6</div>
          </div>
        </div>
      </div>
      <Button
        color="secondary"
        variant="contained"
        type="button"
        sx={{
          width: '15rem',
          marginTop: '5rem',
        }}
        onClick={() => {
          dispatch(resetThrows());
        }}
      >
        Relancés les Dés
      </Button>

      <div className="result_dice">

        <DiceRoll
          handleChange={(e) => dispatch(selectStat(e.target.value, sumOne))}
          result={sumOne.toString()}
          diceRoll={handleDiceRollOnClickOne}
          diceResultOne={miniDice1.toString()}
          diceResultTwo={miniDice2.toString()}
          diceResultThree={miniDice3.toString()}
          diceResultFour={miniDice4.toString()}
          isDiceSum={isDiceSumOne}
        />
        <DiceRoll
          handleChange={(e) => dispatch(selectStat(e.target.value, sumTwo))}
          result={sumTwo.toString()}
          diceRoll={handleDiceRollOnClickTwo}
          diceResultOne={miniDice5.toString()}
          diceResultTwo={miniDice6.toString()}
          diceResultThree={miniDice7.toString()}
          diceResultFour={miniDice8.toString()}
          isDiceSum={isDiceSumTwo}
        />
        <DiceRoll
          handleChange={(e) => dispatch(selectStat(e.target.value, sumThree))}
          result={sumThree.toString()}
          diceRoll={handleDiceRollOnClickThree}
          diceResultOne={miniDice9.toString()}
          diceResultTwo={miniDice10.toString()}
          diceResultThree={miniDice11.toString()}
          diceResultFour={miniDice12.toString()}
          isDiceSum={isDiceSumThree}
        />
        <DiceRoll
          handleChange={(e) => dispatch(selectStat(e.target.value, sumFour))}
          result={sumFour.toString()}
          diceRoll={handleDiceRollOnClickFour}
          diceResultOne={miniDice13.toString()}
          diceResultTwo={miniDice14.toString()}
          diceResultThree={miniDice15.toString()}
          diceResultFour={miniDice16.toString()}
          isDiceSum={isDiceSumFour}

        />
        <DiceRoll
          handleChange={(e) => dispatch(selectStat(e.target.value, sumFive))}
          result={sumFive.toString()}
          diceRoll={handleDiceRollOnClickFive}
          diceResultOne={miniDice17.toString()}
          diceResultTwo={miniDice18.toString()}
          diceResultThree={miniDice19.toString()}
          diceResultFour={miniDice20.toString()}
          isDiceSum={isDiceSumFive}

        />
        <DiceRoll
          handleChange={(e) => dispatch(selectStat(e.target.value, sumSix))}
          result={sumSix.toString()}
          diceRoll={handleDiceRollOnClickSix}
          diceResultOne={miniDice21.toString()}
          diceResultTwo={miniDice22.toString()}
          diceResultThree={miniDice23.toString()}
          diceResultFour={miniDice24.toString()}
          isDiceSum={isDiceSumSix}

        />

      </div>
    </Container>
  );
}
