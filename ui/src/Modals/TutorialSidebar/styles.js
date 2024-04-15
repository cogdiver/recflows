import styled from 'styled-components';

const Wrapper = styled.div`
  display: ${(props) => (props.expanded ? 'block' : 'none')};
  color: black;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 350px;
  padding: 20px 10px;
  background-color: white;
  border-left: #c5c5c5 1px solid;
  border-radius: 15px 0 0 15px;
  box-shadow: -2px 2px #c5c5c5;
  
  .icon-close-tutorial {
    width: 30px;
    margin-right: 15px;
    cursor: pointer;
  }
  .title {
    border-bottom: #c5c5c5 1px solid;
    display: flex;
    padding-bottom: 10px;
  }
  .content {
    padding: 10px;
  }
`;

export { Wrapper };
