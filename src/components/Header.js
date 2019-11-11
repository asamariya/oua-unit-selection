/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';

import { DegreeContext } from './DegreeContext'

export const Header = () => {

	const [degree] = useContext(DegreeContext)
	const { title, studyLevel, code } = degree

	const capitalize = str => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	return (
		<div className="header">
			<p>
				{studyLevel && capitalize(studyLevel)} | {code}
			</p>
			<h1>{title}</h1>
		</div>
	);
};
