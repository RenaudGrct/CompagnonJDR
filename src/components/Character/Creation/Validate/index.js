import CharacterCreation from 'src/components/Character/Creation';
import Character from 'src/components/Character/Details';

import Button from '@mui/material/Button';

export default function Validate() {
  return (
    <>
      <CharacterCreation />
      <Character />
      <Button
        color="secondary"
        variant="contained"
        type="submit"
      >
        Enregistrer
      </Button>

    </>

  );
}
