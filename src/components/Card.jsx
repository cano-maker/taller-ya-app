const Card = ({ children, className, ...props }) => (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden ${className}`} {...props}>
        {children}
    </div>
);

export default Card;
