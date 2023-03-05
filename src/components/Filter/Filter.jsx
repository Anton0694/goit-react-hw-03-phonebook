import { Input } from './Filter.styled'
import PropTypes from 'prop-types';

export function Filter({ onFilterChange }) {

    return (
        <>  
            <label htmlFor="search"> Find contacts by name: </label>
            <Input onChange={onFilterChange}  type="text" id="search" />
        </>
    )

}


Filter.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
  
};