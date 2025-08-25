const Button = ({ children, className, ...props }) => (
    <button className={`px-4 py-2 font-semibold text-white bg-primary hover:bg-primary-dark rounded-lg shadow-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`} {...props}>
        {children}
    </button>
);

export default Button;
