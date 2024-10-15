import { ChangeEvent, FC } from 'react';

type Props = {
	name: string;
	label: string;
	checked: boolean;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox: FC<Props> = ({ name, checked, onChange, label }) => {
	const styles = {
		label: {
			display: 'flex' as const,
			cursor: 'pointer' as const,
			marginBottom: '10px',
		},
		checkbox: {
			opacity: 0,
			position: 'absolute' as const,
			width: '24px',
			height: '24px',
		},
		checkboxNew: {
			width: '24px',
			height: '24px',
			borderRadius: '8px',
			border: '1px solid #f1f1f1',
			backgroundColor: checked ? '#fe5f00' : '#f1f1f1',
			display: 'block',
			marginRight: '12px',
			position: 'relative' as const,
			transition: 'background-color 0.3s',
		},
		checkboxAfter: {
			height: '24px',
			width: '24px',
			position: 'absolute' as const,
			content: '✓',
			left: '50%',
			top: '50%',
			borderRadius: '8px',
			transform: 'translate(-50%, -50%)',
			color: 'white',
			textAlign: 'center' as const,
			fontSize: '15px',
			fontWeight: 'bold',
			opacity: checked ? 1 : 0,
			transition: 'opacity 0.3s',
		},
	};

	return (
		<label style={styles.label}>
			<input style={styles.checkbox} type='checkbox' name={name} checked={checked} onChange={onChange} />
			<span style={styles.checkboxNew}>
				<span style={styles.checkboxAfter}>✓</span>
			</span>
			<span>{label}</span>
		</label>
	);
};
