'use client';

import { useState } from 'react';
import FileList from './FileList';
import FileViewer from './FileViewer';

type MobileState = {
	currentPath: string[]; // e.g., ['jonathancwhite']
	viewingFile: string | null; // e.g., 'about.txt'
};

const MobilePortfolio = () => {
	const [state, setState] = useState<MobileState>({
		currentPath: ['jonathancwhite'],
		viewingFile: null,
	});

	const navigateToFile = (fileName: string) => {
		setState((prev) => ({
			...prev,
			viewingFile: fileName,
		}));
	};

	const goBack = () => {
		setState((prev) => ({
			...prev,
			viewingFile: null,
		}));
	};

	return (
		<div className='min-h-screen bg-gray-900 text-white font-mono'>
			{state.viewingFile ? (
				<FileViewer
					currentPath={state.currentPath}
					fileName={state.viewingFile}
					onBack={goBack}
				/>
			) : (
				<FileList currentPath={state.currentPath} onNavigateToFile={navigateToFile} />
			)}
		</div>
	);
};

export default MobilePortfolio;
