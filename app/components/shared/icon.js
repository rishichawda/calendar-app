import styled from 'styled-components';

const Icon = styled.img`
margin: auto;
height: ${props => props.height ? props.height : 'auto'};
width: ${props => props.width ? props.width : 'auto'};
`;

export default Icon;