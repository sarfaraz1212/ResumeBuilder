import thumbnail from '../images/classic.png';
import Classic from '../../componenets/templates/classic/Classic';

const BLUEPRINT = {
    id: "CLASSIC",
    name: "classic",
    description: "A timeless centered-header resume with underlined sections.",
    component: Classic,
    thumbnail,
    sections:{
        about:{
            allowedFields:[
                {name:"name", type:"text"},
                {name:"title", type:"text"},
                {name:"email", type:"email"},
                {name:"phone", type:"tel"},
                {name:"description", type:"textarea"}
            ]
        },
        skills:{
            allowedSkills:[
                {name:"languages", label:"Languages"},
                {name:"frameworks", label:"Frameworks"},
                {name:"libraries", label:"Libraries"},
                {name:"apis", label:"APIs"},
                {name:"databases", label:"Databases"},
                {name:"realtime", label:"Real-Time"},
                {name:"versionControl", label:"Version Control"}
            ]
        },
        experience:{
            allowedFields:[
                {name:"company", label:"Company", type:"text"},
                {name:"title", label:"Title", type:"text"},
                {name:"description", label:"Description", type:"editor"},
                {name:"startedAt", label:"Started At", type:"text"},
                {name:"endedAt", label:"Ended At", type:"text"},
            ]
        },
        education:{
            allowedFields:[
                {name:"degree", label:"Degree", type:"text"},
                {name:"school", label:"School", type:"text"},
                {name:"startedAt", label:"Started At", type:"text"},
                {name:"endedAt", label:"Ended At", type:"text"},
            ]
        }
    }
}

export default BLUEPRINT;