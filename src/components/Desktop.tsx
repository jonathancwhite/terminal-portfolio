'use client';

import { useState, useEffect } from 'react';
import { useWindowManager, WindowType, WindowState } from './WindowManager';
import StartMenu from './StartMenu';
import Taskbar from './Taskbar';
import TerminalAppWindow from './Apps/TerminalAppWindow';
import NotepadWindow from './Apps/NotepadWindow';
import BrowserWindow from './Apps/BrowserWindow';
import CodeEditorWindow from './Apps/CodeEditorWindow';
import EmailWindow from './Apps/EmailWindow';

const Desktop: React.FC = () => {
	const {
		openWindows,
		activeWindowId,
		isStartMenuOpen,
		openWindow,
		closeWindow,
		minimizeWindow,
		toggleMaximize,
		bringToFront,
		toggleStartMenu,
		closeStartMenu,
	} = useWindowManager();

	// Terminal state for the terminal app
	const [currentPath, setCurrentPath] = useState('~');
	const [commandHistory, setCommandHistory] = useState<string[]>([]);
	const [outputBuffer, setOutputBuffer] = useState<string[]>([]);
	const [isTyping] = useState(false);
	const [typingCommand] = useState('');

	// Initialize terminal with welcome message
	useEffect(() => {
		const welcomeMessage = [
			'Available commands:',
			'  ls          - List files and directories',
			'  cd [dir]    - Navigate to a directory (about, experience, skills, contact)',
			'  cat [file]  - Display file contents (e.g., cat about.txt)',
			'  clear       - Clear terminal',
			'  help        - Show help',
			'  whoami      - Display user info',
			'  neofetch    - System information',
			'  matrix      - Matrix mode',
			'',
			'Try: ls → cd about → ls → cat about.txt',
			'',
		];
		setOutputBuffer(welcomeMessage);
	}, []);

	// Open browser window by default
	useEffect(() => {
		openWindow('browser');
	}, []); // Empty dependency array - only run once on mount

	const handleCommand = (command: string) => {
		if (isTyping) return;

		setCommandHistory((prev) => [...prev, command]);
		setOutputBuffer((prev) => [...prev, `jonathancwhite@portfolio:${currentPath}$ ${command}`]);

		const result = processCommand(command);
		if (result) {
			setOutputBuffer((prev) => [...prev, ...result]);
		}
	};

	const processCommand = (command: string, targetPath?: string): string[] => {
		const [cmd, ...args] = command.trim().split(' ');
		const pathToUse = targetPath || currentPath;

		switch (cmd) {
			case 'ls':
				if (pathToUse === '~') {
					return [
						'',
						'  about/     ',
						'  experience/',
						'  skills/    ',
						'  contact/   ',
						'',
					];
				} else if (pathToUse === 'about') {
					return ['', '  about.txt  ', ''];
				} else if (pathToUse === 'experience') {
					return ['', '  experience.txt', ''];
				} else if (pathToUse === 'skills') {
					return ['', '  skills.txt ', ''];
				} else if (pathToUse === 'contact') {
					return ['', '  contact.txt', ''];
				}
				return ['', '  about/     ', '  experience/', '  skills/    ', '  contact/   ', ''];

			case 'cd':
				const target = args[0] || '~';
				if (target === '~' || target === '..') {
					setCurrentPath('~');
					return [];
				} else if (['about', 'experience', 'skills', 'contact'].includes(target)) {
					setCurrentPath(target);
					return [];
				} else {
					return ['', `cd: ${target}: No such file or directory`, ''];
				}

			case 'cat':
				const file = args[0];
				if (!file) {
					return ['', 'cat: missing file operand', ''];
				}
				return getFileContent(file);

			case 'clear':
				setOutputBuffer([]);
				return [];

			case 'help':
				return [
					'',
					'Available commands:',
					'  ls          - List files and directories',
					'  cd [dir]    - Navigate to a directory (about, experience, skills, contact)',
					'  cat [file]  - Display file contents (e.g., cat about.txt)',
					'  clear       - Clear terminal',
					'  help        - Show this help',
					'  whoami      - Display user information',
					'  neofetch    - System information',
					'  matrix      - Matrix mode',
					'',
				];

			case 'whoami':
				return [
					'',
					'Jonathan White',
					'Senior Software Engineer',
					'',
					'Crafting scalable, modern web applications using React, Next.js, Vue.js, and Node.js',
					'Focused on building performant, intuitive, and maintainable software.',
					'',
				];

			case 'neofetch':
				return [
					'',
					'       .----.   @   jonathancwhite@portfolio',
					'      / .--. \\  ___  ',
					'     / /    \\ \\/ . \\ ',
					'     \\ \\    / /\\ \\_/ ',
					"      \\ `--' /  \\___/ ",
					"       `----'          ",
					'',
					'OS: Portfolio Terminal v1.0',
					'Host: jonathancwhite.com',
					'Kernel: Next.js 15.5.5',
					'Shell: Interactive Terminal',
					'Location: Auburn, AL',
					'',
				];

			case 'matrix':
				return [
					'',
					'Matrix mode activated! (Just kidding)',
					'',
					'01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100',
					'',
					'Hello World in binary!',
					'',
				];

			default:
				return ['', `Command not found: ${cmd}. Type 'help' for available commands.`, ''];
		}
	};

	const getFileContent = (file: string): string[] => {
		switch (file) {
			case 'about.txt':
				return [
					'',
					'=== ABOUT JONATHAN WHITE ===',
					'',
					'Title: Senior Software Engineer',
					'Location: Auburn, AL',
					'',
					'Bio:',
					'Senior Software Engineer crafting scalable, modern web applications',
					'using React, Next.js, Vue.js, and Node.js, focused on building',
					'performant, intuitive, and maintainable software.',
					'',
					'Based in Auburn, AL, I specialize in full-stack development with',
					'expertise in JavaScript/TypeScript, PHP, and modern frameworks.',
					'I lead frontend teams and architect solutions that drive business',
					'growth and technical excellence.',
					'',
					'Interests:',
					'- Software architecture',
					'- UI/UX design',
					'- Sports analytics',
					'- Golf technology',
					'- E-commerce systems',
					'',
				];

			case 'experience.txt':
				return [
					'',
					'=== PROFESSIONAL EXPERIENCE ===',
					'',
					'Current Positions:',
					'',
					'1. SalesWarp / CloudQix (Jan 2024 - Present)',
					'   Senior Software Engineer - Frontend Lead; Financial One',
					'   - Led frontend architecture for financial management system',
					'   - Mentored team of 5 engineers within 12-person dev group',
					'   - Built with React, TypeScript, Redux Toolkit, shadcn UI',
					'',
					'2. DEVGRU, INC (Apr 2023 - Present)',
					'   Software Engineer & Head of Ecommerce Development',
					'   - Custom BigCommerce and Shopify store development',
					'   - Established CI/CD pipelines and performance optimization',
					'',
					'3. Auburn University (Jul 2023 - Present)',
					'   Application Systems Analyst / Software Engineer',
					'   - Built medical courier system for veterinary hospital',
					'   - React, Node.js, MySQL full-stack development',
					'',
					'Previous Experience:',
					'',
					'4. SalesWarp Commerce (Sep 2022 - Apr 2023)',
					'   Software Engineer, Fullstack',
					'   - Improved warehouse picking workflows by 34%',
					'   - Vue.js, PHP, MySQL development',
					'',
					'5. Ballistic Agency (Mar 2021 - Sep 2022)',
					'   Web Developer',
					'   - Built 8+ BigCommerce stores ($1M-$100M revenue clients)',
					'   - Achieved 10x revenue increase for one client',
					'',
				];

			case 'skills.txt':
				return [
					'',
					'=== TECHNICAL SKILLS ===',
					'',
					'Programming Languages:',
					'  JavaScript (Expert)    ████████████████████ 95%',
					'  TypeScript (Advanced)  ████████████████████ 90%',
					'  PHP (Advanced)         ████████████████████ 90%',
					'  HTML/CSS/SCSS (Expert) ████████████████████ 95%',
					'  Java (Intermediate)    ████████████████     75%',
					'  Python (Intermediate)  ████████████████     75%',
					'  SQL (Advanced)         ████████████████████ 90%',
					'',
					'Frameworks & Libraries:',
					'  React (Expert)         ████████████████████ 95%',
					'  Next.js (Advanced)     ████████████████████ 90%',
					'  Vue.js (Advanced)      ████████████████████ 90%',
					'  Redux Toolkit (Adv)    ████████████████████ 90%',
					'  Node.js (Advanced)     ████████████████████ 90%',
					'  CakePHP (Advanced)     ████████████████████ 90%',
					'',
					'Tools & Technologies:',
					'  Vite (Expert)          ████████████████████ 95%',
					'  TailwindCSS (Adv)      ████████████████████ 90%',
					'  Docker (Advanced)      ████████████████████ 90%',
					'  GitLab CI/CD (Adv)     ████████████████████ 90%',
					'  Figma (Advanced)       ████████████████████ 90%',
					'',
					'Certifications:',
					'  BigCommerce BigDev (Apr 2021 - Present)',
					'',
				];

			case 'contact.txt':
				return [
					'',
					'=== CONTACT INFORMATION ===',
					'',
					'Email: contact@jonathancwhite.com',
					'LinkedIn: https://linkedin.com/in/jonathanclwhite',
					'GitHub: https://github.com/jonathancwhite',
					'',
					'Location: Auburn, AL',
					'',
					'Availability:',
					'• Available for full-time positions',
					'• Open to contract work',
					'• Interested in remote opportunities',
					'• Response time: Usually within 24 hours',
					'',
					'To reveal email, use: cat email',
					'',
				];

			case 'email':
				return ['', '=== EMAIL REVEAL ===', '', 'contact@jonathancwhite.com', ''];

			default:
				return ['', `cat: ${file}: No such file or directory`, ''];
		}
	};

	const handleTaskbarClick = (section: string) => {
		if (section === 'home') {
			toggleStartMenu();
		} else {
			// Map section names to window types
			const windowTypeMap: Record<string, WindowType> = {
				terminal: 'terminal',
				about: 'notepad',
				experience: 'browser',
				skills: 'editor',
				contact: 'email',
			};

			const windowType = windowTypeMap[section];
			if (windowType) {
				openWindow(windowType);
			}
		}
	};

	const renderWindow = (window: WindowState) => {
		const commonProps = {
			onClose: () => closeWindow(window.id),
			onMinimize: () => minimizeWindow(window.id),
			onMaximize: () => toggleMaximize(window.id),
			isFullscreen: window.isFullscreen,
		};

		switch (window.type) {
			case 'terminal':
				return (
					<TerminalAppWindow
						key={window.id}
						{...commonProps}
						currentPath={currentPath}
						outputBuffer={outputBuffer}
						commandHistory={commandHistory}
						onCommand={handleCommand}
						isTyping={isTyping}
						typingCommand={typingCommand}
					/>
				);
			case 'notepad':
				return <NotepadWindow key={window.id} {...commonProps} />;
			case 'browser':
				return <BrowserWindow key={window.id} {...commonProps} />;
			case 'editor':
				return <CodeEditorWindow key={window.id} {...commonProps} />;
			case 'email':
				return <EmailWindow key={window.id} {...commonProps} />;
			default:
				return null;
		}
	};

	return (
		<div
			className='min-h-screen flex flex-col relative pb-20'
			style={{
				backgroundImage: 'url(/wallpaper.jpg)',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
			}}>
			{/* Windows */}
			{openWindows
				.filter((window) => !window.isMinimized)
				.map((window) => renderWindow(window))}

			{/* Start Menu */}
			<StartMenu isOpen={isStartMenuOpen} onClose={closeStartMenu} onOpenApp={openWindow} />

			{/* Taskbar */}
			<Taskbar
				openWindows={openWindows}
				activeWindowId={activeWindowId}
				onSectionClick={handleTaskbarClick}
				onWindowClick={bringToFront}
			/>
		</div>
	);
};

export default Desktop;
