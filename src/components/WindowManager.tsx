'use client';

import { useState, useCallback } from 'react';

export type WindowType = 'notepad' | 'browser' | 'editor' | 'email' | 'terminal';

export interface WindowState {
	id: string;
	type: WindowType;
	isMinimized: boolean;
	isFullscreen: boolean;
	position: { x: number; y: number };
	zIndex: number;
}

interface WindowManagerState {
	openWindows: WindowState[];
	activeWindowId: string | null;
	isStartMenuOpen: boolean;
}

interface WindowManagerReturn extends WindowManagerState {
	openWindow: (type: WindowType) => void;
	closeWindow: (id: string) => void;
	minimizeWindow: (id: string) => void;
	toggleMaximize: (id: string) => void;
	bringToFront: (id: string) => void;
	toggleStartMenu: () => void;
	closeStartMenu: () => void;
}

export const useWindowManager = (): WindowManagerReturn => {
	const [state, setState] = useState<WindowManagerState>({
		openWindows: [],
		activeWindowId: null,
		isStartMenuOpen: false,
	});

	const getNextZIndex = useCallback(() => {
		if (state.openWindows.length === 0) return 1000;
		return Math.max(...state.openWindows.map((w) => w.zIndex)) + 1;
	}, [state.openWindows]);

	const openWindow = useCallback(
		(type: WindowType) => {
			// Check if window of this type is already open
			const existingWindow = state.openWindows.find((w) => w.type === type && !w.isMinimized);

			if (existingWindow) {
				// Bring existing window to front
				bringToFront(existingWindow.id);
				return;
			}

			// Check if there's a minimized window of this type
			const minimizedWindow = state.openWindows.find((w) => w.type === type && w.isMinimized);

			if (minimizedWindow) {
				// Restore minimized window
				setState((prev) => ({
					...prev,
					openWindows: prev.openWindows.map((w) =>
						w.id === minimizedWindow.id
							? { ...w, isMinimized: false, zIndex: getNextZIndex() }
							: w,
					),
					activeWindowId: minimizedWindow.id,
					isStartMenuOpen: false,
				}));
				return;
			}

			// Create new window
			const newWindow: WindowState = {
				id: `${type}-${Date.now()}`,
				type,
				isMinimized: false,
				isFullscreen: false,
				position: {
					x: 100 + state.openWindows.length * 30,
					y: 100 + state.openWindows.length * 30,
				},
				zIndex: getNextZIndex(),
			};

			setState((prev) => ({
				...prev,
				openWindows: [...prev.openWindows, newWindow],
				activeWindowId: newWindow.id,
				isStartMenuOpen: false,
			}));
		},
		[state.openWindows, getNextZIndex],
	);

	const closeWindow = useCallback((id: string) => {
		setState((prev) => ({
			...prev,
			openWindows: prev.openWindows.filter((w) => w.id !== id),
			activeWindowId: prev.activeWindowId === id ? null : prev.activeWindowId,
		}));
	}, []);

	const minimizeWindow = useCallback((id: string) => {
		setState((prev) => ({
			...prev,
			openWindows: prev.openWindows.map((w) =>
				w.id === id ? { ...w, isMinimized: true } : w,
			),
			activeWindowId: prev.activeWindowId === id ? null : prev.activeWindowId,
		}));
	}, []);

	const bringToFront = useCallback(
		(id: string) => {
			setState((prev) => ({
				...prev,
				openWindows: prev.openWindows.map((w) =>
					w.id === id ? { ...w, zIndex: getNextZIndex() } : w,
				),
				activeWindowId: id,
			}));
		},
		[getNextZIndex],
	);

	const toggleStartMenu = useCallback(() => {
		setState((prev) => ({
			...prev,
			isStartMenuOpen: !prev.isStartMenuOpen,
		}));
	}, []);

	const closeStartMenu = useCallback(() => {
		setState((prev) => ({
			...prev,
			isStartMenuOpen: false,
		}));
	}, []);

	const toggleMaximize = useCallback((id: string) => {
		setState((prev) => ({
			...prev,
			openWindows: prev.openWindows.map((w) =>
				w.id === id ? { ...w, isFullscreen: !w.isFullscreen } : w,
			),
		}));
	}, []);

	return {
		...state,
		openWindow,
		closeWindow,
		minimizeWindow,
		toggleMaximize,
		bringToFront,
		toggleStartMenu,
		closeStartMenu,
	};
};
