import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchShows } from '../../services/tvShowsApi';

import './ShowSummaryScreen.css';

const ShowSummaryScreen = () => {
	const { id } = useParams();
	const [ showSummary, setShowSummary ] = useState(null);
	const [ showName, setShowName ] = useState('');
	const [ showImage, setShowImage ] = useState('');
	const [ bookingFormVisible, setBookingFormVisible ] = useState(false);
	const [ ticketBooked, setTicketBooked ] = useState(false);

	useEffect(
		() => {
			const fetchShowSummary = async () => {
				const shows = await fetchShows();
				const show = shows.find((show) => show.show.id === parseInt(id));
				setShowSummary(show.show.summary);
				setShowName(show.show.name);
				setShowImage(show.show.image.medium);
			};
			fetchShowSummary();
		},
		[ id ]
	);

	const handleBookTicket = () => {
		setBookingFormVisible(!bookingFormVisible);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		setBookingFormVisible(!bookingFormVisible);
		setTicketBooked(!ticketBooked);
	};

	if (bookingFormVisible) {
		return (
			<div className="book-form-container">
				<h2>Book Your Show Ticket</h2>
				<div className="book-form">
					<div>
						<img src={showImage} alt={showName} />
					</div>
					<form onSubmit={handleFormSubmit} className="form">
						<label>
							Movie Name :
							<input type="text" value={showName} disabled />
						</label>
						<label>
							Your Name :
							<input type="text" />
						</label>
						<label>
							Your Email :
							<input type="email" />
						</label>
						<label>
							No. of Tickets :
							<input type="number" />
						</label>
						<div className="form-btn">
							<button type="submit">Submit</button>
							<button type="reset">Reset</button>
						</div>
					</form>
				</div>
			</div>
		);
	} else {
		return (
			<div className="show-summary-screen">
				<div className="summary-container">
					<h1>Summary of {showName && <span>{showName}</span>}</h1>
					<div id="summaryBox">
						<div>{showImage && <img src={showImage} alt={showName} />}</div>
						<div className="summary-box">
							{showSummary ? (
								<div dangerouslySetInnerHTML={{ __html: showSummary }} />
							) : (
								<p>Loading...</p>
							)}
						</div>
					</div>
					<button onClick={handleBookTicket}>{ticketBooked ? 'Ticket Booked' : 'Book Your Ticket'}</button>
				</div>
			</div>
		);
	}
};

export default ShowSummaryScreen;
