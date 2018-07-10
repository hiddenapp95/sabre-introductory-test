import { connect } from 'react-redux';
import * as React from 'react';
import { createStructuredSelector } from 'reselect';
import {
    PlayerFilters,
    fetchPlayers,
    getVisiblePlayers,
    filterPlayersBy,
    PlayersTable,
    fetchingPlayers,
    getFilter,
    AlertDialog
} from '../../playerFinder';
import {filtersInfo} from "../../assignmentConstants";
import Toolbar from "./toolbar";
import Loader from "../../playerFinder/components/loader";

class Main extends React.Component{

  state = {dialogIsOpen:false,error:null};

  componentWillMount(){
      this.fetchPlayers();
  }

  fetchPlayers = () =>
      this.props.dispatch(fetchPlayers)
          .catch((error)=> this.handleOpenDialog(error));

  handleOpenDialog = (error) => this.setState({dialogIsOpen:true,error:error});

  handleCloseDialog = () => {
      this.setState({dialogIsOpen:false,error:null});
      this.fetchPlayers();
  };

  render() {
    const { players, fetchingPlayers, filters, dispatch} = this.props;

    return (
      <div id="players-app">
        <Toolbar handleButtonClick={this.fetchPlayers}/>
        {fetchingPlayers? <Loader/>:null}
        <AlertDialog id="alert-dialog-container" open={this.state.dialogIsOpen} error={this.state.error} handleClose={this.handleCloseDialog}/>
        <PlayerFilters
            id="player-filters-container"
            filtersInfo={filtersInfo}
            filters={filters}
            filterPlayersBy={(name,value) => dispatch(filterPlayersBy(name,value))}
        />
        <PlayersTable players={players}/>
      </div>
    );
  }
}
export default connect(
    createStructuredSelector({
        players: getVisiblePlayers,
        fetchingPlayers: fetchingPlayers,
        filters: getFilter
    })
)(Main);