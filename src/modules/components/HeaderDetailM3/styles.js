import css from 'styled-jsx/css';

export default css`
  .download-table-xls-button {
    padding: 10px;
  }
  .headerDetail {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .table-to-xls {
    display: none;
  }
  .btn-excel-left {
    padding: 5px;
    border: solid 1px gray;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    margin-right: 1px;
    margin-left: 2px;
    cursor: pointer;
  }
  .btn-excel-right {
    padding: 5px;
    border: solid 1px gray;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    cursor: pointer;
  }
  .btn-primary {
    background: #0a8fdc;
    font-weight: bold;
    color: #2b2a2a;
  }
  .flex {
    display: flex;
    align-items: center;
  }
  .ocultar {
    display: none;
  }
  .pointer {
    cursor: pointer;
  }
`;
