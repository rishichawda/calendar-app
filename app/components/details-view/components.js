import styled from 'styled-components';

export const TopBar = styled.div`
display: flex;
flex-direction: row;
box-sizing: border-box;
justify-content: space-between;
padding: 5% 5%;
padding-bottom: 0;
padding-left: 3%;
width: 100%;
`;

export const DisplayDate = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
color: aliceblue;
  h2 {
    margin: auto;
    font-size: 1.33em;
  }
`;

export const ContentContainer = styled.div`
  width: 90%;
  border-radius: 11px;
  height: fit-content;
  padding: 20px;
  box-sizing: border-box;
  background-color: #222425;
  color: white;
  display: flex;
  justify-content: center;
  height: -webkit-fill-available;
  max-height: 80.8vh;
  margin: auto;
  margin-top: 20px;
`;

export const NoContentInfo = styled.div`
display: flex;
flex-direction: column;
align-self: center;
margin-top: -50px;
& > .p {
  align-self: center;
  justify-self: center;
  margin: 0 auto;
  font-size: 16px;
}

& > div {
  display: flex;
  margin: 0 auto;
  padding: 5px;
  margin-top: 16px;
  align-items: center;
  cursor: pointer;

  &:active {
    opacity: 0.5;
  }

  p {
    font-size: 11px;
  }

  img {
    margin-right: 7px;
    height: 20px;
  }
}`;