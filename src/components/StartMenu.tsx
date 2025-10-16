'use client';

import { Terminal, FileText, Globe, Code, Mail } from 'lucide-react';

interface StartMenuProps {
	isOpen: boolean;
	onClose: () => void;
	onOpenApp: (type: 'notepad' | 'browser' | 'editor' | 'email' | 'terminal') => void;
}

const StartMenu = ({ isOpen, onClose, onOpenApp }: StartMenuProps) => {
	if (!isOpen) return null;

	const apps = [
		{
			id: 'terminal' as const,
			name: 'Terminal',
			icon: Terminal,
		},
		{
			id: 'notepad' as const,
			name: 'About Me',
			icon: FileText,
		},
		{
			id: 'browser' as const,
			name: 'Experience',
			icon: Globe,
		},
		{
			id: 'editor' as const,
			name: 'Skills',
			icon: Code,
		},
		{
			id: 'email' as const,
			name: 'Contact',
			icon: Mail,
		},
	];

	const handleAppClick = (appId: (typeof apps)[0]['id']) => {
		onOpenApp(appId);
		onClose();
	};

	return (
		<>
			{/* Backdrop */}
			<div className='fixed inset-0 z-40' onClick={onClose} />

			{/* Start Menu Popover */}
			<div className='fixed bottom-20 left-6 z-50'>
				<div className='bg-gray-800/95 backdrop-blur-md rounded-lg shadow-2xl border border-gray-700 min-w-64'>
					{/* App List */}
					<div className='py-2'>
						{apps.map((app) => {
							const Icon = app.icon;
							return (
								<button
									key={app.id}
									onClick={() => handleAppClick(app.id)}
									className='w-full flex items-center px-4 py-3 gap-2 text-left hover:bg-gray-700/60 transition-colors duration-150 group'>
									<Icon
										size={20}
										className='text-gray-300 mr-3 group-hover:text-white transition-colors'
									/>
									<span className='text-gray-300 group-hover:text-white font-medium transition-colors'>
										{app.name}
									</span>
								</button>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default StartMenu;
