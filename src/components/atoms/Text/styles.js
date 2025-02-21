import styled from "styled-components";

// branco como padrão mas se escolher outra cor no splash screen ele muda
export const CustomText = styled.Text`
    color: ${({color}) => color || 'white'};
    font-size: 24;
    fontWeight: bold;
    margin-top: 20;
`;


