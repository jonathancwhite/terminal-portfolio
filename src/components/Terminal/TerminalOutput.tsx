'use client';

import { forwardRef } from 'react';

interface TerminalOutputProps {
	outputBuffer: string[];
}

const TerminalOutput = forwardRef<HTMLDivElement, TerminalOutputProps>(({ outputBuffer }, ref) => {
	return (
		<div
			ref={ref}
			className='flex-1 bg-black text-green-400 font-mono text-sm px-4 pt-16 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 min-h-full'
			style={{
				scrollbarWidth: 'thin',
				scrollbarColor: '#4b5563 #1f2937',
				scrollBehavior: 'smooth',
			}}>
			{outputBuffer.map((line, index) => (
				<div key={index} className='whitespace-pre-wrap leading-relaxed'>
					{line}
				</div>
			))}
		</div>
	);
});

TerminalOutput.displayName = 'TerminalOutput';

export default TerminalOutput;
