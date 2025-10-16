'use client';

import BaseWindow from '../BaseWindow';
import { useState } from 'react';
import { Send, Mail } from 'lucide-react';

interface EmailWindowProps {
	onClose: () => void;
	onMinimize: () => void;
	onMaximize?: () => void;
	isFullscreen?: boolean;
}

const EmailWindow = ({ onClose, onMinimize, onMaximize, isFullscreen }: EmailWindowProps) => {
	const [emailRevealed, setEmailRevealed] = useState(false);
	const [isSent, setIsSent] = useState(false);

	const handleSend = () => {
		setEmailRevealed(true);
		setTimeout(() => {
			setIsSent(true);
		}, 1000);
	};

	return (
		<BaseWindow
			title='Get In Touch'
			onClose={onClose}
			onMinimize={onMinimize}
			onMaximize={onMaximize}
			isFullscreen={isFullscreen}
			defaultPosition={{ x: 300, y: 250 }}
			defaultSize={{ width: 600, height: 400 }}
			className='bg-gray-100 text-black'>
			{/* Email Header */}
			<div className='bg-gray-50 border-b border-gray-200 px-4 py-3'>
				<div className='flex items-center gap-2'>
					<Mail size={16} className='text-gray-600' />
					<span className='text-sm font-medium text-gray-700'>New Message</span>
				</div>
			</div>

			{/* Email Form */}
			<div className='flex-1 flex flex-col p-4 gap-4 overflow-scroll'>
				{!emailRevealed ? (
					<div className='bg-blue-50 border border-blue-200 rounded-md p-4 flex flex-col gap-2'>
						<div className='flex items-center gap-2 mb-2'>
							<Mail size={16} className='text-blue-600' />
							<span className='text-sm font-medium text-blue-800'>
								Contact Information
							</span>
						</div>
						<p className='text-sm text-blue-700 mb-3'>
							Click the reveal button below to reveal Jonathan&apos;s email address.
						</p>
						<button
							onClick={handleSend}
							className='flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors cursor-pointer'>
							<Send size={16} />
							<span>Reveal Email</span>
						</button>
					</div>
				) : (
					<div className='bg-green-50 border border-green-200 rounded-md p-4 flex flex-col gap-2'>
						<div className='flex items-center gap-2 mb-2'>
							<Mail size={16} className='text-green-600' />
							<span className='text-sm font-medium text-green-800'>
								Contact Information
							</span>
						</div>
						<div>
							<p className='text-sm text-green-700 mb-2'>Email address revealed:</p>
							<div className='bg-white border border-green-300 rounded-md px-3 py-2 mb-3'>
								<a
									href='mailto:contact@jonathancwhite.com'
									className='font-mono text-sm text-green-800 hover:underline cursor-pointer'>
									contact@jonathancwhite.com
								</a>
							</div>
						</div>
					</div>
				)}

				{/* Additional Contact Info */}
				<div className='bg-gray-50 border border-gray-200 rounded-md p-4'>
					<h4 className='text-sm font-medium text-gray-700 mb-2'>
						Other Ways to Connect:
					</h4>
					<div className='gap-1 text-sm text-gray-600'>
						<div>
							LinkedIn:{' '}
							<a
								href='https://linkedin.com/in/jonathancwhite'
								className='text-blue-600 hover:underline'>
								linkedin.com/in/jonathancwhite
							</a>
						</div>
						<div>
							GitHub:{' '}
							<a
								href='https://github.com/jonathancwhite'
								className='text-blue-600 hover:underline'>
								github.com/jonathancwhite
							</a>
						</div>
					</div>
				</div>
			</div>
		</BaseWindow>
	);
};

export default EmailWindow;
