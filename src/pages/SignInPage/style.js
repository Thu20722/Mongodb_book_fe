import styled from "styled-components";

export const WrapperContainerLeft = styled.div`
    flex: 1;
    padding: 40px 45px 24px;

`
export const WrapperContainerRight = styled.div`
    width: 300px;
    background: linear-gradient(136deg, #F0F0F0 -1%, #F0F0F0 85%);
    display: flex;
    justify-content: center;
    flex-direction: column; 
    align-items: center;
    gap: 6px;
    border-radius: 0px 8px 8px 0px;
`;

export const WrapperTextLight = styled.span`
    color: #000;
    font-weight: 400;
    font-size: 13px;
    cursor: pointer;

    &:hover {
        color: #808080; 
    }
`;

