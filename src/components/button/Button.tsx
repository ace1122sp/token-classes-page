import './Button.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  label: string;
  onClick: () => void;
}

const className: string = 'c-Button';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  label,
  onClick,
}) => (
  <button
    className={`${className} ${
      variant === 'primary'
        ? `${className}--primary`
        : `${className}--secondary`
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
