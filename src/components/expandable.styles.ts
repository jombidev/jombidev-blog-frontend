import styled from 'styled-components';

export const Hamburger = styled.button`
    border: none;
    background-color: unset;

    padding: 10px 0 0;

    font-size: 24px;
`;

export const PopOver = styled.div`
    inset: unset;
    position: fixed;
    
    top: 5rem;
    right: 10%;
    
    border: black 1px solid;
    border-radius: 10px;
`;

export const HamburgerBody = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    gap: 10px;
    
    margin: 10px;
`;