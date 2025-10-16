'use client';

interface FileListProps {
	currentPath: string[];
	onNavigateToFile: (fileName: string) => void;
}

const FileList = ({ currentPath, onNavigateToFile }: FileListProps) => {
	const isRoot = currentPath.length === 1;

	const getCurrentDirectoryContents = () => {
		return [
			{ name: 'about.txt', type: 'file' },
			{ name: 'experience.txt', type: 'file' },
			{ name: 'skills.txt', type: 'file' },
			{ name: 'contact.txt', type: 'file' },
		];
	};

	const contents = getCurrentDirectoryContents();

	return (
		<div className='min-h-screen bg-gray-900 text-white font-mono'>
			{/* Header */}
			<div className='bg-gray-800 px-4 py-3 border-b border-gray-700'>
				<div className='flex items-center space-x-2'>
					<span className='text-sm text-gray-300'>{currentPath.join('/')}/</span>
				</div>
			</div>

			{/* File List */}
			<div className='p-4'>
				{contents.map((item, index) => (
					<div
						key={index}
						onClick={() => onNavigateToFile(item.name)}
						className='flex items-center py-3 px-2 hover:bg-gray-800 rounded cursor-pointer'>
						<span className='mr-3'>{item.type === 'folder' ? '📁' : '📄'}</span>
						<span className='text-white'>{item.name}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default FileList;
