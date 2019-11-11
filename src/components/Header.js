/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';

import { DegreeContext } from './DegreeContext'

export const Header = () => {

	const [degree] = useContext(DegreeContext)
	const { title, studyLevel, code } = degree


	return (
		<div className="header">
			<p>
				{studyLevel} | {code}
			</p>
			<h1>{title}</h1>
		</div>
	);
};
