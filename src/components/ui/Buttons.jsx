import { Link } from "react-router";

const Button = ({ text, to, onClick, variant = "get", icon: Icon, iconPosition = "right" }) => {
  const baseStyle =
    "px-4 py-2 rounded-md font-semibold transition duration-200";

  const variants = {
    get: "bg-brand hover:bg-brand-dark text-white px-5 py-3 lg:px-8 lg:py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-heading cursor-pointer",
    borderDark:
      "border-2 border-brand text-brand-50 font-body font-semibold px-8 py-4 rounded-lg flex items-center justify-center hover:bg-brand hover:text-brand-50 transition-all duration-300 cursor-pointer",
    borderLight:
      "border-2 border-brand text-maroon-dark font-body font-semibold px-8 py-4 rounded-lg flex items-center justify-center hover:bg-brand hover:text-brand-50 transition-all duration-300 cursor-pointer",
    know: "relative overflow-hidden px-8 py-4 rounded-xl font-semibold text-white flex items-center justify-center space-x-3 group z-10 hover:scale-105 transform transition-all duration-300 font-body cursor-pointer bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-brand-dark)] before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-500 hover:before:left-[100%]",
  };

  const content = (
    <div className="flex items-center">
      {iconPosition === "left" && Icon && (
        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-12 mx-2" />
      )}
      <span>{text}</span>
      {iconPosition === "right" && Icon && (
        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 mx-2" />
      )}
    </div>
  );

  // If `to` is provided, it's a link button
  if (to) {
    return (
      <Link to={to} className={`${baseStyle} ${variants[variant]}`}>
        {content}
      </Link>
    );
  }

  // Otherwise, it's a normal button
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]}`}>
      {content}
    </button>
  );
};

export default Button;
