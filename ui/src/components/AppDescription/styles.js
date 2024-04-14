import styled from 'styled-components';

const Wrapper = styled.div`
  cursor: pointer;
  padding: 5px 10px;
  margin: 1px;
  border-radius: 20px;
  display: flex;
  border: #e9ecef 1px solid;

  .app-details {
    width: -webkit-fill-available;
  }
  .app-name {
    font-size: 20px;
  }
  .app-description {
    font-size: 15px;
    margin: 0;
  }
  .delete-button {
    width: 20px;
  }

  &:hover {
    background-color: #e9ecef;
  }
`;

export { Wrapper };
