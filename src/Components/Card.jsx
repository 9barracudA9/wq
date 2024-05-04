import { Button, createTheme } from '@mui/material';
import React from 'react';

const Card = ({ email, body, name,onClick }) => {
	const theme = createTheme({
		palette: {
			primary: {
				light: '#757ce8',
				main: '#3f50b5',
				dark: '#002884',
				contrastText: '#fff',
			},
			secondary: {
				light: '#ff7961',
				main: '#f44336',
				dark: '#ba000d',
				contrastText: '#000',
			},
		},
	});

	return (
		
		<div className="border-white border-2 rounded-2xl bg-gray-600 py-2 px-4 w-[300px] h-[100%] flex">
			<div className="flex flex-col justify-between items-center grow">
				<div>
					<p className="text-white text-[14px] italic shadow-black font-semibold underline">{email}</p>
					<p className="text-black text-[19px] font-extrabold shadow-white">{name}</p>
				</div>
				<div className="mb-[20px]">
					<div className="text-[14px] text-white ">"{body}"</div>
				</div>
				<div className="mt-auto">
					<Button
					onClick={onClick}
						variant="contained"
						color="primary"
						size="2xl"
					>
						Select
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Card;
