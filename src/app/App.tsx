import * as React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { History } from 'history';

import ListView from './components/list-view';
import Counter from './components/counter';

interface Props {
  store: Store<any>;
  history: History;
}

export class App extends React.Component<Props, {}> {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route
            exact={true}
            path="/"
            render={() => (
              <ListView title="List of counters:" >
                <Counter />
                <Counter startWith={31} />
              </ListView>
            )}
          />
        </ConnectedRouter>
      </Provider>
    );
  }
}
