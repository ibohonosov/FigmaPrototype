import React from "react";
import { connect } from "react-redux";
import { getPlayersThunkCreator } from "../../Redux/players-reducer";
import Players from "./Players";

class PlayersContainer extends React.Component {

    componentDidMount() {
        this.props.getPlayers()
    }

    render() {
        return (
            <Players 
                players={this.props.players}
                meta={this.props.meta}
                totalPlayersCount={this.props.totalPlayersCount}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        players: state.playersPart.players,
        meta: state.playersPart.meta,
        totalPlayersCount: state.playersPart.totalPlayersCount
    }
}

export default connect(mapStateToProps, {
    getPlayers: getPlayersThunkCreator
})(PlayersContainer) ;

