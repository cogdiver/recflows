import styled from 'styled-components';

const WrapperDescription = styled.div`
  display: flex;
  // width: fit-content;
  border-radius: 20px;
  margin: 1px;
  border: #e9ecef 1px solid;

  .details {
    display: flex;

    div {
      padding: 10px 15px;
      border-right: #e9ecef 1px solid;
    }
  }
  .icons {
    display: flex;
    margin-left: auto;
  }
  .icon {
    cursor: pointer;
    width: 40px;
    heigth: 40px;
    padding: 10px;
    &:hover {
      background-color: #e9ecef;
    }
  }
  .app_id {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

`;


const WrapperList = styled.div`
`;

export { WrapperDescription, WrapperList };
