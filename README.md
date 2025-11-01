# Interactive Terminal Portfolio

A unique, interactive portfolio website built with Next.js that presents professional information through an authentic terminal interface. Experience a developer's portfolio like never before - navigate through directories, execute commands, and explore content just like you would in a real terminal.

## Features

### Desktop Interface

-   **Custom Wallpaper**: Personal desktop background
-   **Terminal Window**: macOS-inspired floating window with traffic light buttons
-   **Taskbar Navigation**: Bottom dock with navigation icons and real-time clock - similar to windows 11
-   **Responsive Design**: Works seamlessly across all device sizes

### Interactive Terminal Experience

-   **Authentic Commands**: Real terminal commands (`ls`, `cd`, `cat`, `clear`, `help`, `whoami`)
-   **Typing Animations**: Watch commands being typed character by character
-   **Command History**: Navigate through previous commands with arrow keys
-   **Auto-scroll**: Terminal automatically scrolls to show latest output
-   **Easter Eggs**: Hidden commands like `neofetch` and `matrix`

### File System Navigation

-   **Directory Structure**: Navigate through `about/`, `experience/`, `skills/`, `contact/`
-   **File Contents**: Use `cat` command to read detailed information
-   **Smart Navigation**: Click taskbar icons for guided navigation
-   **Help System**: Built-in help command shows available options

### Professional Content

-   **About Section**: Personal bio, location, and interests
-   **Experience**: Detailed job history with achievements and technologies
-   **Skills**: Technical skills with proficiency indicators
-   **Contact**: Social links and professional contact information

## Tech Stack

-   **Framework**: Next.js 15 with App Router
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS
-   **Icons**: Lucide React
-   **Deployment**: Netlify

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and terminal theme
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page (renders Desktop)
├── components/
│   ├── Desktop.tsx          # Main desktop layout with wallpaper
│   ├── Taskbar.tsx          # Bottom navigation dock
│   └── Terminal/
│       ├── TerminalWindow.tsx   # Main terminal container
│       ├── TerminalHeader.tsx   # Title bar with traffic lights
│       ├── TerminalOutput.tsx   # Scrollable output display
│       └── TerminalInput.tsx    # Command input with animations
└── public/
    └── wallpaper.webp       # Desktop background image
```

## 🎮 How to Use

### Navigation

1. **Click Taskbar Icons**: Click any icon in the bottom taskbar to navigate
2. **Manual Commands**: Type commands directly in the terminal
3. **Command History**: Use ↑/↓ arrows to navigate previous commands

### Available Commands

| Command      | Description                     | Example         |
| ------------ | ------------------------------- | --------------- |
| `ls`         | List files and directories      | `ls`            |
| `cd [dir]`   | Navigate to directory           | `cd about`      |
| `cat [file]` | Display file contents           | `cat about.txt` |
| `clear`      | Clear terminal history          | `clear`         |
| `help`       | Show available commands         | `help`          |
| `whoami`     | Display user information        | `whoami`        |
| `neofetch`   | System information (easter egg) | `neofetch`      |
| `matrix`     | Matrix effect (easter egg)      | `matrix`        |

### Navigation Flow

```
Home (~) → ls → cd about → ls → cat about.txt
         → cd experience → ls → cat experience.txt
         → cd skills → ls → cat skills.txt
         → cd contact → ls → cat contact.txt
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

-   Inspired by terminal interfaces and developer workflows
-   Icons provided by [Lucide React](https://lucide.dev/)
-   Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)
