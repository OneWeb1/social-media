import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import NotFoundPage from './pages/NotFoundPage';

const App: FC = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<HomePage />}></Route>
					<Route path='/profile' element={<Profile />}></Route>
					<Route path='*' element={<NotFoundPage />}></Route>
				</Routes>
			</Router>
		</>
	);
};

export default App;
