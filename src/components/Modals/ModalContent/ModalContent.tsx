import { useEffect } from "react";

type ModalContentProps = {
	onClose: React.MouseEventHandler<HTMLButtonElement>;
}

const ModalContent = ({ onClose }: ModalContentProps) => {
	useEffect(()=>{
		console.log('Modal window created');
		return ()=>{
			console.log('Modal window deleted');
		}
	},[])

	return (
		<div className="modal">
			<div id='modal-text'>I'm a modal dialog</div>
			<button onClick={onClose} id='button-close'>X</button>
		</div>
	);
}

export default ModalContent;