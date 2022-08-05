import CharacterCreation from 'src/components/Character/Creation';
import Character from 'src/components/Character/Details';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';

import { submitCharacterCreation } from 'src/actions/characters';

export default function Validate() {
  const dispatch = useDispatch();

  const { characters } = useSelector((state) => state.characters.character);

  const handleCreationSubmit = (e) => {
    e.preventDefault();
    console.log('a la bien cousin');
    dispatch(submitCharacterCreation());
  };

  return (
    <>
      <CharacterCreation />
      <Character />
      <FormControl
        component="form"
        onSubmit={(e) => {
          handleCreationSubmit(e);
        }}
      >

        <Button
          color="secondary"
          variant="contained"
          type="submit"
          value="zbozbozobzob"
        >
          Enregistrer
        </Button>
      </FormControl>

    </>

  );
}
//
