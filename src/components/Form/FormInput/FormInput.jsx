import { useState } from 'react';
import styles from './FormInput.module.css';

const FormInput = ({ children, type = 'text', name, pattern, areNotValid, setAreNotValid, checkboxDataLength: checkboxesDataLength }) => {
    const [isValid, setIsValid] = useState(false);

    const handleInput = e => {
        const value = e.target.checked;
        console.log(value);
        setIsValid(value);
        if (isValid) setAreNotValid(Math.min(areNotValid + 1,checkboxesDataLength));
        else setAreNotValid(Math.max(areNotValid - 1,0));
    }

    return (
        <label className={styles['form-input']}>
            {name}
            <input
                type="checkbox"
                name={children.label}
                data-is-valid={isValid}
                onInput={handleInput}
            />
        </label>
    )
}

export default FormInput;

