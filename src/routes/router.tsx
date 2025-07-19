import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout'; // adjust path
import Hero from '../pages/hero/hero';
import { Skills } from '../pages/skills/skills';
import { About } from '../pages/about/about';
import { TechStack } from '../pages/tech-stack/tech-stack';
import { Experience } from '../pages/experience/experience';
import Projects from '../pages/projects/projects';
import { Contact } from '../pages/contacts/contact';
import { ProjectGallery } from '../pages/projects/all-projects';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <>
              <Hero />
              <Skills />
              <About />
              <TechStack />
              <Experience />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="project/gallery" element={<ProjectGallery />} />
      </Route>
    </Routes>
  );
};
