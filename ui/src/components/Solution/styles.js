import styled from 'styled-components';

const Wrapper = styled.div`
  border: #e9ecef 1px solid;
  border-radius: 10px;
  padding: 15px;
  margin: 1px;

  .solution-container {
    display: flex;
    align-items: center;
  }
  .details {
    margin-right: 15px;
  }
  .icon-collapse-tutorials {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
    padding: 10px;

    &:hover {
      background-color: #e9ecef;
    }
  }
  .module {
    color: #8d8d8d;
  }
  .tutorials {
    display: ${(props) => (props.expanded ? 'block' : 'none')};
    border-top: #e9ecef 1px solid;
    padding-top: 15px;
    margin-top: 15px;
    padding-left: 10px;
  }
`;

export { Wrapper };
