import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/about'
import Home from './pages/home'
import Skill from './pages/skill'
import Education from './pages/education'
import Work from './pages/work'
import Contact from './pages/contact'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core'
import Sidebar from './component/Sidebar'
import Graphics from './component/work/graphics'
import Web from './component/work/web'

const pages = [
  {
    id: 1,
    page: "HOME",
    path: '/'
  },
  {
    id: 2,
    page: "ABOUT",
    path: '/about'
  },
  {
    id: 3,
    page: "SKILLS",
    path: '/skill'
  },
  {
    id: 4,
    page: "EDUCATION",
    path: '/education'
  },
  {
    id: 5,
    page: "WORK",
    path: '/work'
  },
  {
    id: 6,
    page: "CONTACT",
    path: '/contact'
  }
];
function App() {

  return (
    <>
      <MantineProvider>
        <BrowserRouter>
          <Sidebar pages={pages}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path='/skill' element={<Skill />}></Route>
              <Route path='/education' element={<Education />}></Route>
              <Route path="/work" element={<Work />} />
              <Route path="/graphics" element={<Graphics />} />
              <Route path="/web" element={<Web />} />
              <Route path='/contact' element={<Contact />}></Route>
            </Routes>
          </Sidebar>
        </BrowserRouter >
      </MantineProvider>
    </>
  )
}

export default App
