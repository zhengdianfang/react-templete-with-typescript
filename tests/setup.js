import axios from 'axios';
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import httpAdapter from 'axios/lib/adapters/http';

configure({ adapter: new Adapter(), disableLifecycleMethods: true });

if (process.env.NODE_ENV === 'test') {
  axios.defaults.baseURL = 'http://localhost';
  axios.defaults.adapter = httpAdapter;
}
