import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import VisorResul from '../index';
import AppLocaleProvider from '../../../../@crema/utility/AppLocaleProvider';
import AppThemeProvider from '../../../../@crema/utility/AppThemeProvider';
import {props} from './mock';
describe('/visor-archivos lista de archivos', () => {
  let renderInstance;

  const mockedProps = props;

  beforeEach(() => {
    renderInstance = render(
      <AppThemeProvider>
        <AppLocaleProvider>
          <VisorResul data={mockedProps} />
        </AppLocaleProvider>
      </AppThemeProvider>,
    );
  });

  afterEach(jest.clearAllMocks);

  it('Render Lista de Archivos', () => {
    expect(renderInstance).toBeTruthy;
  });
});
