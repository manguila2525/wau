import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import ProcesarArchivo from '../index';
import AppLocaleProvider from '../../../../@crema/utility/AppLocaleProvider';
import AppThemeProvider from '../../../../@crema/utility/AppThemeProvider';
describe('/procesarArchivo', () => {
  let renderInstance;
  console.log(window.location.pathname);
  beforeEach(() => {
    renderInstance = render(
      <AppThemeProvider>
        <AppLocaleProvider>
          <ProcesarArchivo />
        </AppLocaleProvider>
      </AppThemeProvider>,
    );
  });

  afterEach(jest.clearAllMocks);

  it('Render Validar Archivos', () => {
    expect(renderInstance).toBeTruthy;
  });
});
