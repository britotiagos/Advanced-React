import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import Nav from '../components/Nav';
import { CURRENT_USER_QUERY } from "../components/User";
import { MockedProvider } from 'react-apollo/test-utils';
import { fakeUser } from '../lib/testUtils';


const notSignedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { me: null } },
  },
];

const SignedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { me: fakeUser() } },
  },
];

describe('<Nav/>', () => {
  it('renders a minimal nav when signed out', async () => {
    const wrapper = mount(
      <MockedProvider mocks={notSignedInMocks} >
        <Nav />
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    console.log(wrapper.debug());
  })
})
