import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import Homepage from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Projects from './pages/projects'
import Skills from './pages/skills'
import SkillsDrupal from './pages/skillsDrupal'
import SkillsWordpress from './pages/skillsWordpress'
import SkillsAEM from './pages/skillsAEM'
import SkillsESPIRIT from './pages/skillsESPIRIT'
import SkillsJS from './pages/skillsJS'
import SkillsHTML from './pages/skillsHTML'
import SkillsCSS from './pages/skillsCSS'
import SkillsReact from './pages/skillsReact'





const Navigation = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Homepage }/>
                <Route path="/about" exact component={ About }/>
                <Route path="/skills" exact component={ Skills }/>
                <Route path="/skills/drupal" exact component={ SkillsDrupal }/>
                <Route path="/skills/wordpress" exact component={ SkillsWordpress }/>
                <Route path="/skills/aem" exact component={ SkillsAEM }/>
                <Route path="/skills/e-spirit" exact component={ SkillsESPIRIT }/>
                <Route path="/skills/javascript" exact component={ SkillsJS }/>
                <Route path="/skills/html" exact component={ SkillsHTML }/>
                <Route path="/skills/css" exact component={ SkillsCSS }/>
                <Route path="/skills/react" exact component={ SkillsReact }/>
                <Route path="/projects" exact component={ Projects }/>
                <Route path="/contact" exact component={ Contact }/>
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation