import axios from 'axios';
export const fetchShows = async () => {
	let url = 'https://api.tvmaze.com/search/shows?q=all';
	try {
		const response = await axios.get(url);
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
