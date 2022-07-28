import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../component/Header';

test('Test that Header render correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Header />
      </Router>,
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
