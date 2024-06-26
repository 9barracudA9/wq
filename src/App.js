import { useEffect, useState } from 'react';
import CommentCard from './Components/CommentCard';
import './index.css';
import { BASE_URL, axiosInstance } from './API/axios';
import { Comment } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { loadedToggler, openModal, pushComments, selectComments } from './Redux/commentsSlice';
import Modal from './Components/Modal';
import { Container, Grid } from '@mui/material';

function App() {
	const dispatch = useDispatch();
	const comments = useSelector(state => state.toolkit.comments);
	const isLoaded = useSelector(state => state.toolkit.isLoaded);
	const isSelected = useSelector(state => state.toolkit.selected);
	// const isActive = useSelector(state => state.toolkit.modalActive);
	// const  [comments,setComments]=useState([])
	// const  [isLoaded,setIsLoaded]=useState(false)
	const [modalOpen, setModalOpen] = useState(false);
	useEffect(() => {
		const getComments = async () => {
			try {
				const commentsResponse = await axiosInstance(BASE_URL);
				console.log(commentsResponse.data);
				dispatch(pushComments(commentsResponse.data));
				dispatch(loadedToggler());

				// setComments(commentsResponse.data)
				// setIsLoaded(true)
			} catch (error) {
				console.warn(error);
			}
		};

		getComments();
	}, []);
	console.log(isSelected);

	return !!isLoaded ? (
		<div className="App">
			<Container
				maxWidth="lg"
				sx={{ padding: '50px' }}
			>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					<ul className="flex justify-between flex-wrap w-[100%] gap-8">
						{comments.map(item => (
							<Grid
								item
								sx={{ flexGrow: 1, display: 'flex' }}
								xs={2}
								sm={4}
								md={3}
								key={item.id}
							>
								<CommentCard
									onClick={() => dispatch(selectComments(item))}
									email={item.email}
									name={item.name}
									body={item.body}
								/>
							</Grid>
						))}
					</ul>

					<div className="flex justify-start  items-center  flex-row-reverse">
						<div className="text-[18px] text-white font-extrabold mt-6  flex justify-center items-center  bg-red-600 border border-white h-[30px] w-[30px] rounded-[50%]">
							<p>{isSelected.length}</p>
						</div>
						<button onClick={() => setModalOpen(true)}>
							<img
								className="h-[100px] w-[100px]"
								src={require('./1200px-Shopping_Basket_Flat_Icon_Vector.svg.png')}
								alt="Error"
							></img>
						</button>
					</div>
					<Modal
						children={isSelected.map(item => {
							return <li className="mb-4">{item.email}</li>;
						})}
						active={modalOpen}
						setActive={() => setModalOpen(false)}
					/>
				</Grid>
			</Container>
		</div>
	) : (
		<div className="flex justify-center items-center">
			<Comment
				visible={true}
				height="80"
				width="80"
				ariaLabel="comment-loading"
				wrapperStyle={{}}
				wrapperClass="comment-wrapper"
				color="#fff"
				backgroundColor="#F4442E"
			/>
		</div>
	);
}
export default App;
