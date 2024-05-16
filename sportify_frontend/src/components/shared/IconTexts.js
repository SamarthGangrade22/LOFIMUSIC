import {Icon} from "@iconify/react";
import { Link } from "react-router-dom";

const IconText = ({iconName, displayText,active,targetLink,onClick}) => {
    return (
        <Link to={targetLink} className="block">
            <div
                className="flex items-center justify-start cursor-pointer" onClick={onClick}
                
            >
                <div className="px-5 py-2">
                    <Icon
                        icon={iconName} color={active?"white":"white"} fontSize={30}    
                    />
                </div>
                <div
                    className={`${active?"text-blue-300":"text-white"} text-lg font-semi-bold hover:text-red-200`}
                >
                    {displayText} 
                </div>
            </div>
            </Link>
    );
};

export default IconText;
