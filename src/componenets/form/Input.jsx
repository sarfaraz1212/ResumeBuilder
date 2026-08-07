const Input = ({ name, type = "text", label, placeholder, value, onChange, ...rest }) => {
    return (
        <div>
            <label htmlFor={name} className="mb-1 block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                {...rest}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
        </div>
    )
}

export default Input