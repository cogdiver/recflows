import styled from 'styled-components';

const WrapperDescription = styled.div`
  display: flex;
  max-width: 1000px;
  width: fit-content;
  border-radius: 20px;
  margin: 1px;
  border: #e9ecef 1px solid;

  .solution_id {
    width: 300px;
    text-align: center;
    border-right: #e9ecef 1px solid;
  }
  .solution_scope {
    cursor: pointer;
  }
  .column {
    padding: 5px 10px;
    overflow: hidden;
  }
  .details {
    display: flex;
  }
  .start-tutorial {
    width: 40px;
    cursor: pointer;
    padding: 0 10px;
  }
`;

const WrapperList = styled.div`
`;

export { WrapperDescription, WrapperList };
