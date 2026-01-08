
import React, { useState, useEffect } from 'react';

interface Step {
  title: string;
  description: string;
  targetId?: string;
}

const STEPS: Step[] = [
  {
    title: "WELCOME TO ZETSU EDU",
    description: "Your ultimate cyber-suite for school projects and media creation. Let's show you around your new command center."
  },
  {
    title: "FEATURED ARSENAL",
    targetId: "carousel-section",
    description: "Check out our top-tier featured tools right here in the carousel. New updates land here every week!"
  },
  {
    title: "LEVEL UP YOUR SKILLS",
    targetId: "progress-hub",
    description: "Complete tasks and use tools to earn XP. Level up your profile and unlock the status of a ZETSU Master."
  },
  {
    title: "ZETSU AI ASSISTANT",
    targetId: "command-center",
    description: "Not sure which tool to use? Just ask our AI Assistant! It knows exactly what you need for any project."
  },
  {
    title: "YOU'RE READY!",
    description: "Explore the categories below to find the perfect tool for your next masterpiece. Happy creating!"
  }
];

const TutorialWalkthrough: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenTutorial = localStorage.getItem('zetsu_tutorial_seen');
    if (!hasSeenTutorial) {
      // Delay slightly for better entrance effect
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
      scrollToTarget(STEPS[currentStep + 1].targetId);
    } else {
      handleClose();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      scrollToTarget(STEPS[currentStep - 1].targetId);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('zetsu_tutorial_seen', 'true');
  };

  const scrollToTarget = (id?: string) => {
    if (id) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  const step = STEPS[currentStep];

  return (
    <div className="fixed inset-0 z-[3000] pointer-events-none animate-in fade-in duration-500">
      {/* Positioned top-right under the h-28 header (approx 112px + margin) */}
      <div className="absolute top-[120px] right-6 max-w-sm w-full bg-zinc-900 border-2 border-emerald-500/40 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(16,185,129,0.1)] overflow-hidden pointer-events-auto">
        {/* Animated Background Pulse */}
        <div className="absolute inset-0 bg-emerald-500/5 animate-pulse pointer-events-none"></div>
        
        <div className="p-8 relative z-10">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex flex-col">
              <span className="text-[9px] mono font-black text-emerald-500 uppercase tracking-[0.3em] mb-1">SYSTEM_GUIDE</span>
              <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter leading-none">
                {step.title}
              </h3>
            </div>
            <button 
              onClick={handleClose}
              className="text-zinc-600 hover:text-white transition-colors p-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Body */}
          <p className="text-zinc-400 text-sm font-medium leading-relaxed mb-8">
            {step.description}
          </p>

          {/* Progress Dots */}
          <div className="flex gap-1.5 mb-8">
            {STEPS.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === currentStep ? 'w-6 bg-emerald-500' : 'w-1.5 bg-zinc-800'
                }`}
              />
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between gap-3">
            <button 
              onClick={handleClose}
              className="text-[9px] mono font-black text-zinc-600 hover:text-zinc-400 uppercase tracking-widest"
            >
              Skip
            </button>
            
            <div className="flex gap-2">
              {currentStep > 0 && (
                <button 
                  onClick={handleBack}
                  className="bg-zinc-800 text-white px-4 py-2 rounded-lg font-black text-[9px] uppercase mono hover:bg-zinc-700 transition-colors"
                >
                  Back
                </button>
              )}
              <button 
                onClick={handleNext}
                className="bg-emerald-500 text-zinc-950 px-5 py-2 rounded-lg font-black text-[9px] uppercase mono hover:scale-105 active:scale-95 transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]"
              >
                {currentStep === STEPS.length - 1 ? 'START' : 'NEXT'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialWalkthrough;
