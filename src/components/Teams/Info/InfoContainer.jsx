import React from "react";
import Info from "./Info";
import { connect } from "react-redux";
import { AddTeam, getTeamsThunkCreator } from "../../../Redux/teams-reducer";

class InfoContainer extends React.Component {
    
    componentDidMount() {
        this.props.getTeams()
    }

    render() {
        return (
            <>
            <Info 
                teams={this.props.teams}
                meta={this.props.meta}
                totalTeamsCount={this.props.totalTeamsCount}
                AddTeam={this.props.AddTeam}
                newTeam={this.props.newTeam}
            />
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        teams: state.teamsPart.teams,
        meta: state.teamsPart.meta,
        totalTeamsCount: state.teamsPart.totalTeamsCount,
        newTeam: state.teamsPart.newTeam
    };
};

export default connect(mapStateToProps, {
    AddTeam,
    getTeams: getTeamsThunkCreator
})(InfoContainer);

