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
import SkillsTypescript from './pages/skillsTypescript'
import SkillsNodeJS from './pages/skillsNodeJS'
import SkillsMySQL from './pages/skillsMySQL'
import SkillsPHP from './pages/skillsPHP'






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
                <Route path="/skills/typescript" exact component={ SkillsTypescript }/>
                <Route path="/skills/nodejs" exact component={ SkillsNodeJS }/>
                <Route path="/skills/mysql" exact component={ SkillsMySQL }/>
                <Route path="/skills/php" exact component={ SkillsPHP }/>
                <Route path="/projects" exact component={ Projects }/>
                <Route path="/contact" exact component={ Contact }/>
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation