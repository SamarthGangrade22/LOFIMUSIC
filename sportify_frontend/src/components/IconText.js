import {Icon} from "@iconify/react";


const IconText = ({iconName, displayText,active}) => {
    return (
        
            <div
                className="flex items-center justify-start "
                
            >
                <div className="p-5">
                    <Icon
                        icon={iconName} color="white" fontSize={23}    
                    />
                </div>
                <div
                    className="text-white text-sm font-bold "
                >
                    {displayText} 
                </div>
            </div>
        
    );
};

export default IconText;
