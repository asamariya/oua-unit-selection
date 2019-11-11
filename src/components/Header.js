import React, {useState, useEffect} from 'react';

export const Header = ({url}) => {
	const [degreeTitle, setDegreeTitle] = useState('');
	const fetchTitle = async () => {
		try {
			let response = await fetch(url);
			let data = await response.json();
			setDegreeTitle(data.title);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchTitle();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="header">
			<h1>{degreeTitle}</h1>
		</div>
	);
};
