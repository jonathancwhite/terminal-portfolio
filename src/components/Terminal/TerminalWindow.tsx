'use client';

import { useState, useEffect, useRef } from 'react';
import TerminalOutput from './TerminalOutput';
import TerminalInput from './TerminalInput';

interface TerminalWindowProps {
	currentPath: string;
	outputBuffer: string[];
	commandHistory: string[];
	onCommand: (command: string) => void;
	isTyping: boolean;
	typingCommand?: string;
}

const TerminalWindow = ({
	currentPath,
	outputBuffer,
	commandHistory,
	onCommand,
	isTyping,
	typingCommand = '',
}: TerminalWindowProps) => {
	const [inputValue, setInputValue] = useState('');
	const [historyIndex, setHistoryIndex] = useState(-1);
	const outputRef = useRef<HTMLDivElement>(null);

	// Auto-scroll to bottom when new output is added
	useEffect(() => {
		if (outputRef.current) {
			// Use requestAnimationFrame to ensure DOM is updated
			requestAnimationFrame(() => {
				if (outputRef.current) {
					outputRef.current.scrollTop = outputRef.current.scrollHeight;
				}
			});
		}
	}, [outputBuffer]);

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (isTyping) {
			e.preventDefault();
			return;
		}

		switch (e.key) {
			case 'Enter':
				e.preventDefault();
				if (inputValue.trim()) {
					onCommand(inputValue.trim());
					setInputValue('');
					setHistoryIndex(-1);
				}
				break;

			case 'ArrowUp':
				e.preventDefault();
				if (commandHistory.length > 0) {
					const newIndex =
						historyIndex === -1
							? commandHistory.length - 1
							: Math.max(0, historyIndex - 1);
					setHistoryIndex(newIndex);
					setInputValue(commandHistory[newIndex] || '');
				}
				break;

			case 'ArrowDown':
				e.preventDefault();
				if (historyIndex !== -1) {
					const newIndex = historyIndex + 1;
					if (newIndex >= commandHistory.length) {
						setHistoryIndex(-1);
						setInputValue('');
					} else {
						setHistoryIndex(newIndex);
						setInputValue(commandHistory[newIndex] || '');
					}
				}
				break;

			case 'Tab':
				e.preventDefault();
				// Auto-complete logic could go here
				break;
		}
	};

	return (
		<div className='w-full h-full bg-gray-800 overflow-hidden'>
			{/* Terminal Header */}
			{/* <TerminalHeader currentPath={currentPath} /> */}

			{/* Terminal Body */}
			<div className='flex flex-col h-full'>
				{/* Output Area */}
				<TerminalOutput ref={outputRef} outputBuffer={outputBuffer} />

				{/* Input Area */}
				<TerminalInput
					inputValue={inputValue}
					setInputValue={setInputValue}
					currentPath={currentPath}
					onKeyDown={handleKeyDown}
					isTyping={isTyping}
					typingCommand={typingCommand}
				/>
			</div>
		</div>
	);
};

export default TerminalWindow;
