'use client';

interface TerminalHeaderProps {
	currentPath: string;
}

const TerminalHeader = ({ currentPath }: TerminalHeaderProps) => {
	const getWindowTitle = () => {
		if (currentPath === '~') {
			return 'jonathancwhite@portfolio:~';
		}
		return `jonathancwhite@portfolio:${currentPath}`;
	};

	return (
		<div className='bg-gray-700 terminal-header-padding flex items-center justify-between border-b border-gray-600'>
			{/* Traffic Light Buttons */}
			<div className='flex items-center gap-2'>
				<div className='w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer'></div>
				<div className='w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer'></div>
				<div className='w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer'></div>
			</div>

			{/* Window Title */}
			<div className='flex-1 text-center'>
				<h1 className='text-gray-300 text-sm font-mono'>{getWindowTitle()}</h1>
			</div>

			{/* Spacer for symmetry */}
			<div className='w-12'></div>
		</div>
	);
};

export default TerminalHeader;
