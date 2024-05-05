import { Button, CardContent, Typography, Card, CardActions } from '@mui/material';
import { Container, CardHeader } from '@mui/material';
import React from 'react';

const CommentCard = ({ email, body, name, onClick }) => {
	return (
		<>
			<Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
				<CardContent
					variant="contained"
					sx={{ flex: 1 }}
				>
					<Typography
						variant="h5"
						component="h2"
						sx={{ fontSize: 14, fontWeight: 800 }}
						color="secondary"
					>
						{email}
					</Typography>

					<Typography
						variant="body1"
						color="primary"
						sx={{ mt: '10px' }}
					>
						{name}
					</Typography>
					<Typography
						variant="body2"
						component="div"
						sx={{ color: '#00000', fontWeight: 600, mt: '10px' }}
					>
						{body}
					</Typography>
				</CardContent>
				<CardActions sx={{ justifySelf: 'flex-end' }}>
					<Button
						onClick={onClick}
						variant="outlined"
						color="primary"
						size="2xl"
					>
						Select
					</Button>
				</CardActions>
			</Card>
		</>
	);
};

export default CommentCard;
