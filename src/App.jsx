import './App.css';
import Form from './components/Form/Form.jsx';

const App = () => {
	const handleSubmit = formData => {
		console.log(formData);
	}

	const checkboxesData = [
		{
			name: 'Some name',
			min: 2,
			max: 3,
			children: [
				{
					label: 'Some label',
					value: 'Some value'
				},
				{
					label: 'Some label',
					value: 'Some value'
				},
			]
		},
		{
			name: 'Some name',
			min: 1,
			max: 5,
			children: [
				{
					label: 'Some label',
					value: 'Some value'
				},
				{
					label: 'Some label',
					value: 'Some value'
				},
			]
		}
	].map(checkboxesData => {
		checkboxesData.id = crypto.randomUUID();

		return checkboxesData;
	})

	return (
		<Form onSubmit={handleSubmit} checkboxesData={checkboxesData} />
	);
}

export default App;