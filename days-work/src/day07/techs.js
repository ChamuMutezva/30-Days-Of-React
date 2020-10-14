import React from 'react'

class TechList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {       
        const techsFormatted = this.props.techs.map((tech) => <li key={tech}>{tech}</li>)
        return techsFormatted
    }
}
export default TechList