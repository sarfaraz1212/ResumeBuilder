import thumbnail from '../images/modern.png';
import Modern from '../../componenets/templates/modern/Modern';

const BLUEPRINT = {
    id: "MODERN",
    name: "modern",
    description: "A modern resume template.",
    component: Modern,
    thumbnail,
    sections:{
        about:{
            allowedFields:[
                {name:"name", type:"text"},
                {name:"email", type:"email"},
                {name:"title", type:"text"},
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
                {name:"versionControl", label:"Version Control"},
                {name:"designPatterns", label:"Design Patterns"}
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
