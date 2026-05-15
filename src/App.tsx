/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from './components/sections/Hero';
import { ExecutiveSummary } from './components/sections/ExecutiveSummary';
import { MarketOpportunity } from './components/sections/MarketOpportunity';
import { MultiCityPresence } from './components/sections/MultiCityPresence';
import { CompetitorAnalysis } from './components/sections/CompetitorAnalysis';
import { AudiencePsychology } from './components/sections/AudiencePsychology';
import { BrandPositioning } from './components/sections/BrandPositioning';
import { ContentEcosystem } from './components/sections/ContentEcosystem';
import { ContentPillars } from './components/sections/ContentPillars';
import { CinematicCampaigns } from './components/sections/CinematicCampaigns';
import { ExecutionSystem } from './components/sections/ExecutionSystem';
import { ContentEngine } from './components/sections/ContentEngine';
import { ReelPsychology } from './components/sections/ReelPsychology';
import { PerformanceMarketing } from './components/sections/PerformanceMarketing';
import { StrategicRequirements } from './components/sections/StrategicRequirements';
import { InvestmentValue } from './components/sections/InvestmentValue';
import { ExecutionFramework } from './components/sections/ExecutionFramework';
import { FinalVision } from './components/sections/FinalVision';
import { Header } from './components/ui/Header';
import { Footer } from './components/sections/Footer';

import { GoToTop } from './components/ui/GoToTop';

export default function App() {
  return (
    <main className="bg-dark text-white selection:bg-brand selection:text-white pb-0">
      <Header />
      <Hero />
      <div id="summary">
        <ExecutiveSummary />
        <MarketOpportunity />
      </div>
      <div id="operations">
        <MultiCityPresence />
      </div>
      <div id="strategy">
        <CompetitorAnalysis />
        <AudiencePsychology />
        <BrandPositioning />
      </div>
      <div id="content">
        <ContentEcosystem />
        <ContentPillars />
        <ContentEngine />
        <ReelPsychology />
      </div>
      <div id="performance">
        <PerformanceMarketing />
      </div>
      <div id="execution">
        <CinematicCampaigns />
        <ExecutionSystem />
        <StrategicRequirements />
        <InvestmentValue />
        <ExecutionFramework />
      </div>
      <FinalVision />
      <Footer />
      <GoToTop />
    </main>
  );
}
