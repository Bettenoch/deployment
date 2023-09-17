import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import TownInfo from '../component/townInfo';

describe('testing page elements', () => {
  it('should give correct country name ', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <TownInfo />
        </BrowserRouter>
      </Provider>,
    );
    const info = screen.findByText('Weather Today');
    expect(info).toMatchSnapshot();
  });
});
