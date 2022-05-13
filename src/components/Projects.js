import "../styles/projects.scss";
import React from 'react'
import {projectDetails} from "../config"
import LinkIcon from '@mui/icons-material/Link';

const iconSize = {
  fontSize: "1.5vw",

}
function Projects({title, id}) {
  return (
    <div className='divContent'>
      <div className="divContent__center" id="projects_div">
        <div id={id} className='divContent__title'>{title}</div>
          <div className="project_grids">
            {projectDetails.map(({ title, description, techstack, gitlink, url }, i) => (
                    <div key={i} className="grid_item">
                      <h4 className="grid_title">
                       {url ? <a href={url} target="_blank" >{title}</a> : <a>{title}</a>}
                        <LinkIcon sx={iconSize} className="git_icon" onClick={(e)=>{
                        window.open(gitlink,"_blank")
                      }}/>               
                      </h4>
                      <div className="grid_text">{description}</div>
                      <div className="techstack">
                      {techstack.map((tech, i) => <li id="tech" key={i}>{tech}</li>)}
                      </div>
                    </div>
                ))}
          </div>
        </div>
    </div>
  )
}

export default Projects