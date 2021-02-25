import React from "react";
import "./ProjectView.css";

export default class ProjectView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.project ? props.project.name : "Project Name",
            description: props.project ? props.project.description : "Project Description",
            sponsor: props.project ? props.project.sponsor : "Project Sponsor",
            contributors: props.project ? props.project.contibutors : ["Currently no contributors"],
            github: props.project ? props.project.github : "No GitHub Available",
            status: props.project ? props.project.status : {
                new: false,
                recruiting: false,
                active: false,
                paused: false,
                stopped: false,
                archived: false,
                proposal: false
            }
        }
    }

    render() {
        //shorten github link if it doesn't fit on page
        let githubLink = window.outerWidth < 700 ? this.state.github.substring(0, 25) + "..." : this.state.github;
        //display currently no contributors if there are none
        let projectContributors = this.state.contributors.length > 0 ? this.state.contributors.join(" | ") : ["Currently no Contributors"];

        return (
            <div className={"projectView-outer-container"}>
                <div className={"projectView-name-desc-container"}>
                    <div className={"projectView-name"}>{this.state.name}</div>
                    <div className={"projectView-descTitle"}>Description</div>
                    <div className={"projectView-description"}>{this.state.description.split('\n').map(str => <p key={str}>{str}</p>)}</div>
                </div>
                <div className={"projectView-details-desc"}>
                    <div className={"projectView-row"}><span style={{fontWeight: "bold"}}>{"Sponsored by: "}</span>{this.state.sponsor}</div>
                    <div className={"projectView-row"}>
                        <div>
                            <span style={{fontWeight: "bold"}}>{"Contributors:\n"}</span>
                        </div>
                        <div>
                            {projectContributors}
                        </div>
                    </div>
                    <div className={"projectView-row"}>
                        <span style={{fontWeight: "bold"}}>{"Repository: "}</span>
                        {this.state.github == "No GitHub Available" ? <div>{this.state.github}</div> : <a href={this.state.github}>{githubLink}</a>}
                    </div>
                    <div className={"projectView-lastrow"}>
                        <div>
                            <span style={{fontWeight: "bold"}}>{"Project Status:"}</span>
                        </div>
                        <div>
                            <button className={`projectView-status-button ${this.state.status.new ? "projectView-new-filled" : "projectView-new-outline"}`}>New</button>
                            <button className={`projectView-status-button ${this.state.status.recruiting ? "projectView-recruiting-filled" : "projectView-recruiting-outline"}`}>Recruiting</button>
                            <button className={`projectView-status-button ${this.state.status.active ? "projectView-active-filled" : "projectView-active-outline"}`}>Active</button>
                            <button className={`projectView-status-button ${this.state.status.paused ? "projectView-paused-filled" : "projectView-paused-outline"}`}>Paused</button>
                            <button className={`projectView-status-button ${this.state.status.stopped ? "projectView-stopped-filled" : "projectView-stopped-outline"}`}>Stopped</button>
                            <button className={`projectView-status-button ${this.state.status.archived ? "projectView-archived-filled" : "projectView-archived-outline"}`}>Archived</button>
                            <button className={`projectView-status-button ${this.state.status.proposal ? "projectView-proposal-filled" : "projectView-proposal-outline"}`}>Proposal</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}