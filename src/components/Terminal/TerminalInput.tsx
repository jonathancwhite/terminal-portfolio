'use client';

import { useState, useEffect } from 'react';

interface TerminalInputProps {
	inputValue: string;
	setInputValue: (value: string) => void;
	currentPath: string;
	onKeyDown: (e: React.KeyboardEvent) => void;
	isTyping: boolean;
	typingCommand?: string;
}

const TerminalInput = ({
	inputValue,
	setInputValue,
	currentPath,
	onKeyDown,
	isTyping,
	typingCommand = '',
}: TerminalInputProps) => {
	const [showCursor, setShowCursor] = useState(true);

	// Blinking cursor effect
	useEffect(() => {
		const interval = setInterval(() => {
			setShowCursor((prev) => !prev);
		}, 500);

		return () => clearInterval(interval);
	}, []);

	const getPrompt = () => {
		if (currentPath === '~') {
			return 'jonathancwhite@portfolio:~$';
		}
		return `jonathancwhite@portfolio:${currentPath}$`;
	};

	return (
		<div className='bg-black border-t border-gray-600 p-2'>
			<div className='flex items-center'>
				<span className='text-cyan-400 font-mono text-sm mr-2'>{getPrompt()}</span>
				{isTyping ? (
					<span className='text-green-400 font-mono text-sm'>
						{typingCommand}
						{showCursor && <span className='animate-pulse'>_</span>}
					</span>
				) : (
					<div className='flex-1 flex items-center min-h-[30px]'>
						<input
							type='text'
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							onKeyDown={onKeyDown}
							className='flex-1 bg-transparent text-gray-300 font-mono text-sm pl-2 outline-none focus:outline-none'
							placeholder=''
							autoFocus
						/>
						{showCursor && <span className='text-green-400 animate-pulse'>_</span>}
					</div>
				)}
			</div>
		</div>
	);
};

export default TerminalInput;
