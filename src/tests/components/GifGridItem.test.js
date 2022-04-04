import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { GifGridItem } from '../../components/GifGridItem';

describe(('Test GifGridItem'),()=>{
    it(('should render correctly'),()=>{
        const title = 'prub Title'
        const url = 'https://media4.giphy.com/media/W79wfYWCTWidO/200w.webp?cid=ecf05e47mp09ja27m0vm7376roucymx59cst0ahcwpjsapbl&rid=200w.webp&ct=g'
        const wrapper = shallow(
        <GifGridItem 
            title={title}  
            url={url}
        />)
        expect(wrapper).toMatchSnapshot()
    })
})