'use client';

import { ChangeEvent, FC, useState } from 'react';
import { Divider } from '@/components/Ui/Divider';
import { Checkbox } from '@/components/Ui/Checkbox';

export const FilterCriteria: FC = () => {
	const [filterOptions, setFilterOptions] = useState([
		{ name: 'canGather', label: 'Можно собирать', checked: false },
		{ name: 'isNew', label: 'Новинки', checked: false },
	]);

	const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, checked } = e.target;
		setFilterOptions((prevOptions) => prevOptions.map((option) => (option.name === name ? { ...option, checked } : option)));
	};

	return (
		<>
			{filterOptions.map((option) => (
				<Checkbox key={option.name} name={option.name} label={option.label} checked={option.checked} onChange={handleCheckboxChange} />
			))}
			<Divider />
		</>
	);
};
