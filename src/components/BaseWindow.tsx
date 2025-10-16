'use client';

import React, { useState, useRef, ReactNode, useCallback } from 'react';

interface BaseWindowProps {
	title: string;
	onClose: () => void;
	onMinimize: () => void;
	onMaximize?: () => void;
	children: ReactNode;
	defaultPosition?: { x: number; y: number };
	defaultSize?: { width: number; height: number };
	className?: string;
	isFullscreen?: boolean;
}

const BaseWindow = ({
	title,
	onClose,
	onMinimize,
	onMaximize,
	children,
	defaultPosition = { x: 100, y: 100 },
	defaultSize = { width: 600, height: 400 },
	className = '',
	isFullscreen = false,
}: BaseWindowProps) => {
	const [position, setPosition] = useState(defaultPosition);
	const [isDragging, setIsDragging] = useState(false);
	const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
	const windowRef = useRef<HTMLDivElement>(null);

	const handleMouseDown = (e: React.MouseEvent) => {
		if (windowRef.current) {
			const rect = windowRef.current.getBoundingClientRect();
			setDragOffset({
				x: e.clientX - rect.left,
				y: e.clientY - rect.top,
			});
			setIsDragging(true);
		}
	};

	const handleMouseMove = useCallback(
		(e: MouseEvent) => {
			if (isDragging) {
				const newX = e.clientX - dragOffset.x;
				const newY = e.clientY - dragOffset.y;

				// Constrain to viewport
				const maxX = window.innerWidth - defaultSize.width;
				const maxY = window.innerHeight - defaultSize.height;

				setPosition({
					x: Math.max(0, Math.min(newX, maxX)),
					y: Math.max(0, Math.min(newY, maxY)),
				});
			}
		},
		[isDragging, dragOffset, defaultSize.width, defaultSize.height],
	);

	const handleMouseUp = useCallback(() => {
		setIsDragging(false);
	}, []);

	// Add global mouse event listeners when dragging
	React.useEffect(() => {
		if (isDragging) {
			document.addEventListener('mousemove', handleMouseMove);
			document.addEventListener('mouseup', handleMouseUp);
			return () => {
				document.removeEventListener('mousemove', handleMouseMove);
				document.removeEventListener('mouseup', handleMouseUp);
			};
		}
	}, [isDragging, dragOffset, handleMouseMove, handleMouseUp]);

	return (
		<div
			ref={windowRef}
			className={`absolute border border-gray-300 shadow-lg overflow-hidden flex flex-col ${className} ${
				isFullscreen ? 'rounded-none' : 'rounded-lg'
			}`}
			style={{
				left: isFullscreen ? 0 : position.x,
				top: isFullscreen ? 0 : position.y,
				width: isFullscreen ? '100vw' : defaultSize.width,
				height: isFullscreen ? '100vh' : defaultSize.height,
				zIndex: 1000,
			}}>
			{/* Title Bar */}
			<div className='px-4 py-2 flex items-center justify-between select-none flex-shrink-0'>
				<div className='flex items-center gap-2'>
					{/* Traffic Light Buttons */}
					<div className='flex gap-1'>
						<button
							onClick={onClose}
							className='w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors pointer-cursor'
							title='Close'
						/>
						<button
							onClick={onMinimize}
							className='w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors pointer-cursor'
							title='Minimize'
						/>
						<button
							onClick={onMaximize}
							className='w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors pointer-cursor'
							title={isFullscreen ? 'Restore' : 'Maximize'}
						/>
					</div>
				</div>

				{/* Draggable Area - Window Title and Right Side */}
				<div
					className='flex-1 flex items-center justify-between cursor-move'
					onMouseDown={handleMouseDown}>
					{/* Window Title */}
					<div className='flex-1 text-center'>
						<h2 className='text-sm font-medium'>{title}</h2>
					</div>

					{/* Spacer for symmetry */}
					<div className='w-12'></div>
				</div>
			</div>

			{/* Window Content */}
			<div className='flex-1 overflow-hidden'>{children}</div>
		</div>
	);
};

export default BaseWindow;
