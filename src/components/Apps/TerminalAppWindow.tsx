'use client';

import BaseWindow from '../BaseWindow';
import TerminalWindow from '../Terminal/TerminalWindow';

interface TerminalAppWindowProps {
	currentPath: string;
	outputBuffer: string[];
	commandHistory: string[];
	onCommand: (command: string) => void;
	isTyping: boolean;
	typingCommand: string;
	onClose: () => void;
	onMinimize: () => void;
	onMaximize?: () => void;
	isFullscreen?: boolean;
}

const TerminalAppWindow = ({
	currentPath,
	outputBuffer,
	commandHistory,
	onCommand,
	isTyping,
	typingCommand,
	onClose,
	onMinimize,
	onMaximize,
	isFullscreen,
}: TerminalAppWindowProps) => {
	return (
		<BaseWindow
			title='Terminal'
			onClose={onClose}
			onMinimize={onMinimize}
			onMaximize={onMaximize}
			isFullscreen={isFullscreen}
			defaultPosition={{ x: 100, y: 100 }}
			defaultSize={{ width: 800, height: 500 }}
			className='bg-black text-white'>
			<TerminalWindow
				currentPath={currentPath}
				outputBuffer={outputBuffer}
				commandHistory={commandHistory}
				onCommand={onCommand}
				isTyping={isTyping}
				typingCommand={typingCommand}
			/>
		</BaseWindow>
	);
};

export default TerminalAppWindow;
