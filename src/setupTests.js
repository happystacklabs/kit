import 'raf/polyfill'; // eslint-disable-line import/no-extraneous-dependencies
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';


// React 16 Enzyme adapter
configure({ adapter: new Adapter() });
