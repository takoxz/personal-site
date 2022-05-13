import React, {useState} from 'react'
import "../styles/experience.scss";
import {jobDescription} from "../config"

function Experience({title, id}) {
  const [activeTab, setActive] = useState(0);


  return (
    <div className='divContent'>
      <div className="divContent__center" id="experience_div">
        <div id={id} className='divContent__title'>{title}</div>
            <div className="divContent__text">
            <div className="tab__list">            
            {jobDescription && jobDescription.map(({company}, i) => { return(
              <button className={activeTab === i ? "active tab__button" : "tab__button"}  key={i} id={i} onClick={()=> setActive(i)}>{company}</button>
            )
            })}
            </div>

            {jobDescription && jobDescription.map(({jobtitle,company, range, description}, i) => { return(
            <div key={i} className='tab__content' hidden={activeTab !== i }>
              <div className='jobtitle'>{jobtitle} @ {company}</div>
              <div className='range'>{range}</div>
              {description.split("\n").map((str,j) => <p key={j} className='jobdesc'>{str}</p>)}
            </div>
            )
            })}

           

          
            
          </div>
        </div>
      </div>
  )
}

export default Experience