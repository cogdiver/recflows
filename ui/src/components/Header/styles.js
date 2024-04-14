import styled from 'styled-components';

const Wrapper = styled.div`
  #navbar-brand {
    text-decoration: none;
    color: #fff;
    font-size: 20px
  }
  .dropdown-menu {
    left: -95px;
    right: 0px;
  }
  .resources {
    text-decoration: none;
    color: #ffffff8c;
    font-size: 16px;
    padding: 8px;
    margin: auto;

    &:hover {
      color: #ffffffbf;
    }
  }
`;

export { Wrapper };
