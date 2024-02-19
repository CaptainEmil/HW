import ModalContent from '../ModalContent/ModalContent';
import { createPortal } from 'react-dom';
import { useState } from 'react';

const PortalExample = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<button onClick={ () => setShowModal(true) }>
				Show modal using a portal
			</button>

			{ showModal && createPortal(
				<ModalContent onClose={ () => setShowModal(false) } />,
				document.querySelector('#modals')!
			) }
		</>
	);
}

export default PortalExample;