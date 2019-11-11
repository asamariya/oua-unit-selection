/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';

const Subject = ({subject}) => {
	const subjectUrl = `https://catalog.prd1.env.opendev.edu.au/v3/subjects/${subject.unitCode}`;

	const [subjectInfo, setSubjectInfo] = useState({});
	const fetchSubject = async () => {
		let response = await fetch(subjectUrl);
		let data = await response.json();
		setSubjectInfo(data);
	};

	useEffect(() => {
		fetchSubject();
	}, []);

	return (
		<div>
			<p>
				<small>{subjectInfo.subjectCode}</small> | <strong>{subjectInfo.title}</strong>
			</p>
		</div>
	);
};

export default Subject;
