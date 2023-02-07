import { FunctionComponent } from 'react';

interface ButtonProps {
  label: string;
}

const Button: FunctionComponent<ButtonProps> = ({ label }) => {
  return (
    <button className="py-3 px-5 bg-slate-900 hover:bg-slate-700 font-sans text-white rounded-full transition duration-300">
      {label}
    </button>
  );
};

export default Button;
