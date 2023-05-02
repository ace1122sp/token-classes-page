import ArrowIcon from '../icons/arrow-icon';
import './WideCTA.css';

interface WideCTAProps {
  variant?: 'primary' | 'secondary';
  label: string;
  onClick: () => void;
}

const className: string = 'c-WideCTA';

const WideCTA: React.FC<WideCTAProps> = ({ label, onClick }) => (
  <button className={className} onClick={onClick}>
    {label}
    <ArrowIcon />
  </button>
);

export default WideCTA;
