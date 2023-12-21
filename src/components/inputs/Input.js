const Input = ({ disabled = false, className, ...props }) => (
    <input
        disabled={disabled}
        className={`${className} border-b-2 border-b-gray-400 focus:border-b-violet hover:border-b-violet placeholder:text-gray-400 focus:outline-none px-1`}
        {...props}
    />
)

export default Input
