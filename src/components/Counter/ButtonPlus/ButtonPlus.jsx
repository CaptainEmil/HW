import Button from "../../Button/Button";

const ButtonPlus = ({ setCount, count }) => {
    const handlePlus = () => {
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }

    return (
        <Button onClick={handlePlus}>+</Button>
    )
}

export default ButtonPlus;