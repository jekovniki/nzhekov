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





const Navigation = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Homepage }/>
                <Route path="/about" exact component={ About }/>
                <Route path="/skills" exact component={ Skills }/>
                <Route path="/skills/drupal" exact component={ SkillsDrupal }/>
                <Route path="/projects" exact component={ Projects }/>
                <Route path="/contact" exact component={ Contact }/>
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation