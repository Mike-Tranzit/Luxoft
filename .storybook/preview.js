import React from "react";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {default as mockApp} from './fixtures/mockApp.json';
import {default as mockCivilizations} from './fixtures/mock.json';

const mockStore = configureStore();

const store = mockStore({
  civilizationsData: mockCivilizations,
  appData: mockApp
});

export const decorators = [
  (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
  )
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true }
}
