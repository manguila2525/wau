import css from 'styled-jsx/css';

export default css`
  textarea {
    width: 100%;
    margin-bottom: 25px;
    resize: none;
  }
  ul {
    list-style: none;
  }
  li {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  section {
    display: flex;
    justify-content: flex-end;
  }
  input[type='file'] {
    display: none;
  }
  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }
`;
