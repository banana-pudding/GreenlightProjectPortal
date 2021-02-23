import React from "react";
import "./ProjectView.css";

export default class ProjectView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Pupil Tracking for Diagnosis of Parkinson's Disease",
            description: "Parkinson's disease is a neurodegenerative disease, in which its symptoms do not appear until the latter years of a patient's life. As of right now, there is no completely consistent and effective manner to determine if a patient has Parkinson's during its earliest stages. However, a 2010 study shows that there is a significant link between the onset of Parkinson's Disease and a patient's post-illumination pupil response, which is essentially the change in a pupil's diameter as it contracts in the presence of various wavelengths. In order to determine the pupil's diameters, researchers and medical professionals used to have to sit in a lab for long periods of time and physically measure each frame as the pupil constricts. Therefore, our objective was to augment a working digitall system which automatically measures each pupil frame, omitting the need for medical professionals to manually fit each frame. Eventually, the goal of the program is to have it fully run on its own and generate accurate data with little effort from the user.\nFor this sub-project, the main goal was to run this program on subjects and generate fits to determine the presence of Parkinson's' disease in patients, as well as determining the reliability of the program. The data that we received from this program depicted the pupil diameters as a result of adding droplets in the eyes. The eye dropllet medication added in these experiments were intended to capture nuances of pupil movement. Once pupil diameters are measured, the pharmacokinetic modeling of the drug effect can be measured in order to determine the drug response.",
            sponsor: "John Smith",
            contibutors: ["John Smith", "Paula Perkins", "Taylor Crosby", "Dominik Chang", "Allison Weeks", "Wyatt Greer"],
            github: "https://github.com/sendgrid/docs",
            status: {
                new: true,
                recruiting: true,
                active: true,
                paused: false,
                stopped: false,
                archived: false,
                proposals: false
            }
        }
    }

    render() {
        return (
            <div className={"projectView-outer-container"}>
                <div className={"projectView-name-desc-container"}>
                    <div className={"projectView-name"}>{this.state.name}</div>
                    <div className={"projectView-descTitle"}>Description</div>
                    <div className={"projectView-description"}>{this.state.description.split('\n').map(str => <p>{str}</p>)}</div>
                </div>
                <div className={"projectView-details-desc"}>
                    <div className={"projectView-row"}><span style={{fontWeight: "bold"}}>{"Sponsored by: "}</span>{this.state.sponsor}</div>
                    <div className={"projectView-row"}>
                        <div>
                            <span style={{fontWeight: "bold"}}>{"Contributors:\n"}</span>
                        </div>
                        <div>
                            {this.state.contibutors.join(" | ")}
                        </div>
                    </div>
                    <div className={"projectView-row"}><span style={{fontWeight: "bold"}}>{"Repository: "}</span><a href={this.state.github}>{this.state.github}</a></div>
                    <div className={"projectView-lastrow"}><span style={{fontWeight: "bold"}}>{"Project Status:"}</span></div>
                </div>
            </div>
        )
    }
}