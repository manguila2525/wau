import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import DetailArchive from '../index';
import AppLocaleProvider from '../../../../@crema/utility/AppLocaleProvider';
import AppThemeProvider from '../../../../@crema/utility/AppThemeProvider';
import {props} from './mock';
describe('/visor-archivos/detalle/:id', () => {
  let renderInstance;

  const mockedProps = props;

  beforeEach(() => {
    renderInstance = render(
      <AppThemeProvider>
        <AppLocaleProvider>
          <DetailArchive dataPedimentos={mockedProps} />
        </AppLocaleProvider>
      </AppThemeProvider>,
    );
  });

  afterEach(jest.clearAllMocks);

  it('Render Detalle de Archivos', () => {
    expect(renderInstance).toBeTruthy;
  });
});
