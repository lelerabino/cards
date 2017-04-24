import React from 'react';
import {shallow} from 'enzyme';
import Header from '../components/Header';

describe('Header Component', () => {

  it('Header text', () => {

    const cmpHeader = shallow(
      <Header text="lorem-ipsum"/>
    );

    expect(cmpHeader.text()).toEqual('lorem-ipsum');
  });

});


