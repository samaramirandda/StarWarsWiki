import React from "react";
import { CustomText } from './styles';

// children e color são propriedades
export const Text = ({children, color}) => {
    return (
        <CustomText color= {color}>
            {children}
        </CustomText>
    )
}

