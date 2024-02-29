import { useState } from 'react';
import styles from './Form.module.scss';
import FormInput from "./FormInput/FormInput.jsx";

const Form = ({ onSubmit, checkboxesData }) => {
    const [areNotValid, setAreNotValid] = useState(checkboxesData.length);
    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        onSubmit(formData);
    }


    // const inputs = inputsData.map(
    //     inputData => <FormInput
    //         labelText={inputData.label}
    //         name={inputData.name}
    //         type={inputData.type}
    //         pattern={inputData.regex}
    //         key={inputData.id}
    //     />
    // )

    const inputs = checkboxesData.map(
        checkboxData => {
            return <FormInput {...checkboxData} key={checkboxData.id} checkboxDataLength={checkboxesData.length} areNotValid={areNotValid} setAreNotValid={setAreNotValid} />
        }
    )

    console.log(areNotValid);

    return (
        <form onSubmit={handleSubmit} className={styles.form} data-is-valid={areNotValid==0?"true":"false"}>
            <legend>Full name</legend>

            {inputs}

            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;