import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import pages
import { Home } from './pages/Home';
import { App } from './pages/App';
import { Variables } from './pages/Variables';
import { Tutorials } from './pages/Tutorials';
import { Channel, Channels } from './pages/Channels';
import { Audit, Audits } from './pages/Audits';
// import { Source, Sources } from './pages/Sources';
// import { Dataset, Datasets } from './pages/Datasets';
// import { Solution, Solutions } from './pages/Solutions';
import { Solutions } from './pages/Solutions';
import { Model, Models } from './pages/Models';
// import { Version, Versions } from './pages/Versions';
// import { Recommender, Recommenders } from './pages/Recommenders';
import { NotFoundPage } from './pages/NotFoundPage';

// Import componentes
import { Header } from './components/Header'

// Import Modals
import { DeleteModal } from './Modals/DeleteModal'
import { TutorialSidebar } from './Modals/TutorialSidebar'

// Sources
// Datasets
// Solutions
// Models
// Versions
// Recommenders
function Pages() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/apps/:id" element={ <App />} />
        <Route path="/variables" element={ <Variables />} />
        <Route path="/tutorials" element={ <Tutorials />} />
        <Route path="/channels" element={ <Channels />} />
        <Route path="/channels/:id" element={ <Channel />} />
        <Route path="/audits" element={ <Audits />} />
        <Route path="/audits/:id" element={ <Audit />} />
        {/* <Route path="/sources" element={ <Sources />} />
        <Route path="/sources/:id" element={ <Source />} /> */}
        {/* <Route path="/datasets" element={ <Datasets />} />
        <Route path="/datasets/:id" element={ <Dataset />} /> */}
        <Route path="/solutions" element={ <Solutions />} />
        {/* <Route path="/solutions/:id" element={ <Solution />} /> */}
        <Route path="/models" element={ <Models />} />
        <Route path="/models/:id" element={ <Model />} />
        {/* <Route path="/versions" element={ <Versions />} />
        <Route path="/versions/:id" element={ <Version />} /> */}
        {/* <Route path="/recommenders" element={ <Recommenders />} />
        <Route path="/recommenders/:id" element={ <Recommender />} /> */}
        <Route path="*" element={ <NotFoundPage />} />
      </Routes>
      <DeleteModal />
      <TutorialSidebar />
    </Router>
  );
}

export { Pages };
