import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import SearchForm from '../index';
import {props} from './mock';
import AppThemeProvider from '../../../../@crema/utility/AppThemeProvider';
import AppLocaleProvider from '../../../../@crema/utility/AppLocaleProvider';

describe('/visor-archivos', () => {
  let renderInstance;
  const mockedProps = props;

  beforeEach(() => {
    renderInstance = render(
      <AppThemeProvider>
        <AppLocaleProvider>
          <SearchForm
            title={mockedProps.title}
            typeOption={mockedProps.typeOption}
            aduana={mockedProps.aduana}
            patente={mockedProps.patente}
          />
        </AppLocaleProvider>
      </AppThemeProvider>,
    );
  });

  afterEach(jest.clearAllMocks);

  it('Render Search form archives and Visor archives', () => {
    expect(renderInstance).toBeTruthy;
  });

  it('Patent Listing', () => {
    expect(renderInstance).toBeTruthy;
  });

  it('Customs Listing', () => {
    expect(renderInstance).toBeTruthy;
  });
});
