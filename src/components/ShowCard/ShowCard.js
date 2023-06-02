import React from 'react';
import Card from 'react-bootstrap/Card';
import './ShowCard.css';

const ShowCard = ({ show }) => {
	const { name, language, premiered, image } = show.show;
	return (
		<Card style={{ width: '18rem' }} className="card">
			<Card.Img variant="top" src={image.medium} className="card-img" />
			<Card.Body className="card-body">
				<Card.Title className="card-title">{name}</Card.Title>
				<Card.Text className="card-text">
					<p>
						<em>Language:</em> {language}
					</p>
					<p>
						<em>Premiered:</em> {premiered}
					</p>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default ShowCard;
