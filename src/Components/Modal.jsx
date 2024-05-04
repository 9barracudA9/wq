import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../Redux/commentsSlice';

const Modal = ({ children, active = false, setActive }) => {
	// const dispatch = useDispatch();
	return (
		<div
			className={active ? 'modal active' : 'modal'}
			onClick={() => setActive(false)}
		>
			<div
				className="modal_content"
				onClick={e => e.stopPropagation()}
			>
				<ol className='font-bold text-white underline py-2 px-4 '>{children}</ol>
				<button className='button_box'
				onClick={()=>setActive(false)}>
					<span className="close_button"></span>
				</button>
			</div>
		</div>
	);
};

export default Modal;
