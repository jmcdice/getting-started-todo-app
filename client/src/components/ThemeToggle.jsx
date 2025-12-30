import { useTheme } from '../ThemeContext';
import Button from 'react-bootstrap/Button';
import './ThemeToggle.scss';

export function ThemeToggle() {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <div className="theme-toggle">
            <Button
                variant="outline-secondary"
                size="sm"
                onClick={toggleTheme}
                title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
                {isDarkMode ? '☀️' : '🌙'}
            </Button>
        </div>
    );
}
