import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import * as types from './Constants';

const SortButton = (props: any) => {

    const {setSortType, handleFetch, page, genre} = props;
    const [value, setValue] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSortType((event.target as HTMLInputElement).value);
        setValue((event.target as HTMLInputElement).value);
        handleFetch((event.target as HTMLInputElement).value, genre, page);
    };

    return (
        <FormControl component="fieldset">
             <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                 <FormControlLabel value={types.SORT_BY_RATE_UP} control={<Radio/>} label="By Rate_up"/>
                 <FormControlLabel value={types.SORT_BY_RATE_DOWN} control={<Radio/>} label="By Rate_down"/>
                 <FormControlLabel value={types.SORT_BY_POPULARITY_UP} control={<Radio/>} label="By Popularity_up"/>
                 <FormControlLabel value={types.SORT_BY_POPULARITY_DOWN} control={<Radio/>} label="By Popularity_down"/>
                 <FormControlLabel value={types.SORT_BY_DATE_UP} control={<Radio/>} label="By Date Of Release_up"/>
                 <FormControlLabel value={types.SORT_BY_DATE_DOWN} control={<Radio/>} label="By Date Of Release_down"/>
             </RadioGroup>
        </FormControl>
    );
}

export default SortButton;