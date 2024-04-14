import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  max-width: 900px;
  width: fit-content;
  border-radius: 20px;
  margin: 1px;
  border: #e9ecef 1px solid;
  
  .app_id {
    cursor: pointer;
    text-align: center;
    width: 200px;
    &:hover {
      text-decoration: underline;
    }
  }
  .name {
    width: 300px;
  }

  .column {
    padding: 5px 10px;
    max-width: 400px;
    border-right: #e9ecef 1px solid;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .details {
    display: flex;
  }
  .value {
    width: 200px;
    text-align: center;
  }
  .icon {
    width: 40px;
    cursor: pointer;
    // margin: 0 10px;
    padding: 0 10px;
  }
  .icon-show {
    border-right: #e9ecef 1px solid;
  }
  .delete-button {
    padding: 0 11px;
  }
`;

export { Wrapper };

