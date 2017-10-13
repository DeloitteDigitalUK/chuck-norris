import * as React from 'react';
import { bindActionCreators, Action } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { searchJokes, IJoke, IState as IGlobalState } from '../../ducks/JokesDucks';
import AppLayout from '../../layouts/AppLayout';

interface IProps {}

interface IMapDispatchFromProps {
  searchJokes: (query: string) => Action;
}

interface IMapStateFromProps {
  jokes: IJoke[];
  isLoading: boolean;
  hasError: boolean;
  query: string;
}

export interface IConnectedProps extends IProps, IMapDispatchFromProps, IMapStateFromProps {
}

export class AppContainer extends React.Component<IConnectedProps, {}> {

  handleSearchJokes = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.searchJokes(e.target.value);
  }

  render() {
    return <AppLayout {...this.props} onSearchJokes={this.handleSearchJokes} />;
  }
}

const mapStateToProps = (state: IGlobalState, props: IProps): IMapStateFromProps => ({
  jokes: state.jokes,
  isLoading: state.isLoading,
  hasError: state.hasError,
  query: state.query
});

const mapDispatchToProps = (dispatch: Dispatch<IGlobalState>): IMapDispatchFromProps => 
  bindActionCreators(
    {
      searchJokes
    },
    dispatch
  );

export default connect<IMapStateFromProps, IMapDispatchFromProps, IProps>(
  mapStateToProps, mapDispatchToProps
)(AppContainer);
