/* eslint-disable no-unused-vars */
// == Import : npm
import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';

// == Import : local
import './style.scss';

// == Composant
function Field({
  value,
  type,
  label,
  name,
  placeholder,
  onChange,
}) {
  const handleChange = (evt) => {
    // on appelle la propriété onChange
    // du composant Field. On donne 2 parametres : nouvelle valeur saisie (event.target.value)
    // et le nom du champ (qui provient de la propriété name)
    onChange(evt.target.value, name);
  };

  const inputId = `field-${label}`;

  return (

    <TextField
      sx={{ input: { color: 'primary', backgroundColor: 'primary.contrastText' } }}
      color="secondary"
      required
      label={label}
      name={name}
      value={value}
      type={type}
      onChange={handleChange}
      placeholder={placeholder}
      variant="filled"
    />
  );
}

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: '',
  type: 'text',
  placeholder: '',
};

// == Export
export default Field;
