import React from 'react';
import ReactDOM from 'react-dom';

import { render } from '@testing-library/react';
import GeneralAPP from './App';

test('renders learn react link', () => {
  const { getByText } = render(<GeneralAPP />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders without crashing', ()=>{
const div = document.createElement('div');
ReactDOM.render(<GeneralAPP />, div);
ReactDOM.unmountComponentAtNode(div);
});

