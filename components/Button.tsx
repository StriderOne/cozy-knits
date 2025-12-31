import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'wb' | 'ozon' | 'yandex';
  children: React.ReactNode;
  className?: string;
  href?: string; // If present, renders as 'a' tag
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed text-sm uppercase tracking-wider";
  
  const variants = {
    primary: "bg-primary-800 text-white hover:bg-primary-700 shadow-md hover:shadow-lg",
    outline: "border-2 border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white",
    ghost: "text-primary-800 hover:bg-primary-100",
    wb: "bg-[#cb11ab] text-white hover:bg-[#a90e8f] shadow-md",
    ozon: "bg-[#005bff] text-white hover:bg-[#004bcc] shadow-md",
    yandex: "bg-[#fc3f1d] text-white hover:bg-[#d93012] shadow-md",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};
