/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';

export const Header = ({url}) => {
	const [degreeTitle, setDegreeTitle] = useState('');
	const [studyLevel, setStudyLevel] = useState('');
	const [degreeCode, setDegreeCode] = useState('');

	const capitalizeFirstLetter = str => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	const fetchDegree = async () => {
		try {
			let response = await fetch(url);
			let data = await response.json();
			setDegreeTitle(data.title);
			setStudyLevel(data.studyLevel);
			setDegreeCode(data.code);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchDegree();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="header">
			<p>
				{capitalizeFirstLetter(studyLevel)} | {degreeCode}
			</p>
			<h1>{degreeTitle}</h1>
		</div>
	);
};
