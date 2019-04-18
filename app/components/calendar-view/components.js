import styled from 'styled-components';

export const TopNavigationBar = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
padding: 5%;
box-sizing: border-box;
`;

export const InnerBar = styled.div`
display: flex;
width: 65%;
justify-content: space-between;
align-items: center;
grid-template-columns: auto auto auto auto auto;
`;

export const NavigationButton = styled.div`
cursor: pointer;
display: flex;
flex: 1;
padding: 5%;
box-sizing: border-box;
`;
