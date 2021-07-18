import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core'
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    //optional
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const { form, name, label, disabled } = props;
    return (
        <Controller
            render={({
                field: { name, value, ref },
            }) => (
                <TextField
                    name={name}
                    label={label}
                    checked={value}
                    inputRef={ref}
                    fullWidth
                />
            )}
            name={name}
            control={form.control}


            label={label}
            disabled={disabled}
        />
    );
}

export default InputField;