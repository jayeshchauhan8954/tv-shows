import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ShowSummaryScreen from './screens/ShowSummaryScreen/ShowSummaryScreen';

import './App.css';
import Header from './components/Header/Header';

const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" exact element={<HomeScreen />} />
				<Route path="/summary/:id" element={<ShowSummaryScreen />} />
			</Routes>
		</Router>
	);
};

export default App;
