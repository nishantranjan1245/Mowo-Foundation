import Layout from "./Layout.jsx";

import Home from "./Home";

import About from "./About";

import Programs from "./Programs";

import GetInvolved from "./GetInvolved";

import Impact from "./Impact";

import Contact from "./Contact";

import Donate from "./Donate";

import PrivacyPolicy from "./PrivacyPolicy";

import TermsOfService from "./TermsOfService";

import RefundPolicy from "./RefundPolicy";

import Disclaimer from "./Disclaimer";

import Sitemap from "./Sitemap";

import TreePlantationDrives from "./TreePlantationDrives";

import SaveTreesCampaign from "./SaveTreesCampaign";

import WateringMaintenance from "./WateringMaintenance";

import CommunityAwarenessPrograms from "./CommunityAwarenessPrograms";

import VolunteerActivities from "./VolunteerActivities";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    About: About,
    
    Programs: Programs,
    
    GetInvolved: GetInvolved,
    
    Impact: Impact,
    
    Contact: Contact,
    
    Donate: Donate,
    
    PrivacyPolicy: PrivacyPolicy,
    
    TermsOfService: TermsOfService,
    
    RefundPolicy: RefundPolicy,
    
    Disclaimer: Disclaimer,
    
    Sitemap: Sitemap,
    
    TreePlantationDrives: TreePlantationDrives,
    
    SaveTreesCampaign: SaveTreesCampaign,
    
    WateringMaintenance: WateringMaintenance,
    
    CommunityAwarenessPrograms: CommunityAwarenessPrograms,
    
    VolunteerActivities: VolunteerActivities,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/About" element={<About />} />
                
                <Route path="/Programs" element={<Programs />} />
                
                <Route path="/GetInvolved" element={<GetInvolved />} />
                
                <Route path="/Impact" element={<Impact />} />
                
                <Route path="/Contact" element={<Contact />} />
                
                <Route path="/Donate" element={<Donate />} />
                
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                
                <Route path="/TermsOfService" element={<TermsOfService />} />
                
                <Route path="/RefundPolicy" element={<RefundPolicy />} />
                
                <Route path="/Disclaimer" element={<Disclaimer />} />
                
                <Route path="/Sitemap" element={<Sitemap />} />
                
                <Route path="/TreePlantationDrives" element={<TreePlantationDrives />} />
                
                <Route path="/SaveTreesCampaign" element={<SaveTreesCampaign />} />
                
                <Route path="/WateringMaintenance" element={<WateringMaintenance />} />
                
                <Route path="/CommunityAwarenessPrograms" element={<CommunityAwarenessPrograms />} />
                
                <Route path="/VolunteerActivities" element={<VolunteerActivities />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}