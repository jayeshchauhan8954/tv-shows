import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchShows } from '../../services/tvShowsApi';
import ShowCard from '../../components/ShowCard/ShowCard';
import { Container, Button } from 'react-bootstrap';

import './HomeScreen.css';
const HomeScreen = () => {
	const [ shows, setShows ] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchShows();
			setShows(data);
		};
		fetchData();
	}, []);
	return (
		<Container className="container">
			<h1>TV Shows</h1>
			<div className="container-data">
				{shows.map((show) => (
					<div key={show.show.id} className="container-card">
						<ShowCard show={show} />
						<Link to={`/summary/${show.show.id}`}>
							<Button variant="primary" id="summary-btn">
								Show Summary
							</Button>
						</Link>
					</div>
				))}
			</div>
		</Container>
	);
};

export default HomeScreen;
