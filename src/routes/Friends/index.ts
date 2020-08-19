import Loadable from 'react-loadable';

import Loading from '../../components/Loading';

const LoadableFriends = Loadable({
  loader: () => import('./Friends'),
  loading: Loading,
});

export default LoadableFriends;
