import css from 'styled-jsx/css';

export default css`
  ul {
    list-style: none;
  }

  ol {
    list-style: none;
    display: none;
  }
  ul ol li {
    margin: 3px 0;
  }
  ul:hover {
    background: #45b1f0;
  }
  ul:hover ol {
    display: block;
  }
`;
