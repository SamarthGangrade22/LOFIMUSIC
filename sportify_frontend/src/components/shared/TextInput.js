const TextInput=({label,placeholder,className,value,setValue,labelClassName})=>{
    
    return(
        <div className={`textInputDiv flex flex-col space-y-2 w-full h-20 ${className}`}> 
            <label for={label} className={`font-bold h-full ${labelClassName}`}> 
                {label}
            </label>
            <input type="text" 
            placeholder={placeholder}
            className="p-2 border border-gray-400 border-solid rounded placeholder-gray-500 h-full"
            id={label}
            value={value}
            onChange={(e)=>{
                setValue(e.target.value);
            }}
            />
        </div>
    );
};

export default TextInput;