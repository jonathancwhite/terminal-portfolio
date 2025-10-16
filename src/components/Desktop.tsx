'use client';

import { useState, useEffect } from 'react';
import TerminalWindow from './Terminal/TerminalWindow';
import Taskbar from './Taskbar';

const Desktop: React.FC = () => {
	const [currentPath, setCurrentPath] = useState('~');
	const [commandHistory, setCommandHistory] = useState<string[]>([]);
	const [outputBuffer, setOutputBuffer] = useState<string[]>([]);
	const [isTyping, setIsTyping] = useState(false);
	const [typingCommand, setTypingCommand] = useState('');

	// Initialize with welcome message
	useEffect(() => {
		const welcomeMessage = [
			'Available commands:',
			'  ls          - List files and directories',
			'  cd [dir]    - Navigate to a directory (about, experience, skills, contact)',
			'  cat [file]  - Display file contents (e.g., cat about.txt)',
			'  clear       - Clear terminal',
			'  help        - Show help',
			'  whoami      - Display user info',
			'',
			'Try: ls → cd about → ls → cat about.txt',
			'',
		];
		setOutputBuffer(welcomeMessage);
	}, []);

	const handleCommand = (command: string) => {
		if (isTyping) return; // Prevent commands while typing animation is running

		// Add command to history
		setCommandHistory((prev) => [...prev, command]);

		// Add command to output
		setOutputBuffer((prev) => [...prev, `jonathancwhite@portfolio:${currentPath}$ ${command}`]);

		// Process command
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

	const animateTyping = (text: string, onComplete: () => void) => {
		let typedText = '';
		let i = 0;

		const typeInterval = setInterval(() => {
			if (i < text.length) {
				typedText += text[i];
				setTypingCommand(typedText);
				i++;
			} else {
				clearInterval(typeInterval);
				setTypingCommand('');
				onComplete();
			}
		}, 50);
	};

	const handleTaskbarClick = (section: string) => {
		if (isTyping) return;

		setIsTyping(true);
		const command = section === 'home' ? 'cd ~' : `cd ${section}`;

		// Step 1: Animate typing the cd command
		animateTyping(command, () => {
			// Add command to output after typing animation is complete
			setOutputBuffer((prev) => [
				...prev,
				`jonathancwhite@portfolio:${currentPath}$ ${command}`,
			]);

			// Step 2: Process the cd command after adding to output
			setTimeout(() => {
				const result = processCommand(command);
				if (result) {
					setOutputBuffer((prev) => [...prev, ...result]);
				}

				// Step 3: Wait 350ms, then animate typing "ls"
				if (command.startsWith('cd')) {
					setTimeout(() => {
						const targetPath = command === 'cd ~' ? '~' : command.split(' ')[1];

						// Add ls command to output
						setOutputBuffer((prev) => [
							...prev,
							`jonathancwhite@portfolio:${targetPath}$ ls`,
						]);

						// Step 4: Animate typing "ls"
						animateTyping('ls', () => {
							// Step 5: Execute ls command after typing animation completes
							setTimeout(() => {
								const lsResult = processCommand('ls', targetPath);
								if (lsResult) {
									setOutputBuffer((prev) => [...prev, ...lsResult]);
								}

								// Step 6: Wait 350ms, then animate typing the appropriate command
								setTimeout(() => {
									if (targetPath === '~') {
										// For home directory, show help command
										setOutputBuffer((prev) => [
											...prev,
											`jonathancwhite@portfolio:${targetPath}$ help`,
										]);

										// Step 7: Animate typing "help"
										animateTyping('help', () => {
											// Step 8: Execute help command after typing animation completes
											setTimeout(() => {
												const helpResult = processCommand('help');
												if (helpResult) {
													setOutputBuffer((prev) => [
														...prev,
														...helpResult,
													]);
												}
												setIsTyping(false);
											}, 200);
										});
									} else {
										// For other directories, show cat command
										const fileName = `${targetPath}.txt`;

										setOutputBuffer((prev) => [
											...prev,
											`jonathancwhite@portfolio:${targetPath}$ cat ${fileName}`,
										]);

										// Step 7: Animate typing "cat [file].txt"
										animateTyping(`cat ${fileName}`, () => {
											// Step 8: Execute cat command after typing animation completes
											setTimeout(() => {
												const catResult = processCommand(`cat ${fileName}`);
												if (catResult) {
													setOutputBuffer((prev) => [
														...prev,
														...catResult,
													]);
												}
												setIsTyping(false);
											}, 200);
										});
									}
								}, 350);
							}, 200);
						});
					}, 350);
				} else {
					setIsTyping(false);
				}
			}, 300);
		});
	};

	return (
		<div
			className='min-h-screen flex flex-col relative'
			style={{
				backgroundImage: 'url(/wallpaper.webp)',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
			}}>
			{/* Dark overlay for better terminal visibility */}
			<div className='absolute inset-0 bg-black/40'></div>

			{/* Main Terminal Area */}
			<div className='flex-1 flex items-center justify-center p-8 relative z-10'>
				<TerminalWindow
					currentPath={currentPath}
					outputBuffer={outputBuffer}
					commandHistory={commandHistory}
					onCommand={handleCommand}
					isTyping={isTyping}
					typingCommand={typingCommand}
				/>
			</div>

			{/* Taskbar */}
			<Taskbar currentPath={currentPath} onSectionClick={handleTaskbarClick} />
		</div>
	);
};

export default Desktop;
