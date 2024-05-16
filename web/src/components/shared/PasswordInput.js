const TextInput = ({ label, placeholder, className, value,setValue }) => {
    return (
      <div className="textInputDiv flex flex-col space-y-2 h-20 w-full">
        <label htmlFor={label} className="font-bold h-full">
          {label}
        </label>
        <input
          type="password"
          placeholder={placeholder}
          className="p-2 border border-gray-400 border-solid rounded placeholder-gray-500 h-full"
          id={label}
          value={value}
          onChange={(e) => {
            setValue(e.target.value); // Update the input value using setValue prop
          }}
        />
      </div>
    );
  };
  
  export default TextInput;
  