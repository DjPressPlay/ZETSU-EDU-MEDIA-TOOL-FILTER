
import React, { useState } from 'react';
import { GoogleGenAI, Type } from '@google/genai';
import { TOOLS } from '../constants';
import { AISuggestion } from '../types';
import { Link } from 'react-router-dom';

const AISearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<AISuggestion | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAISuggest = async () => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    setError(null);
    setSuggestion(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const toolList = TOOLS.map(t => ({ id: t.id, name: t.name, desc: t.description }));
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `A student needs help with this task: "${query}". 
        Available Tools: ${JSON.stringify(toolList)}. 
        1. Pick the best tool for a beginner. 
        2. Give very easy, enthusiastic, and simple step-by-step advice. No jargon. 
        3. Respond in JSON.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              toolId: { type: Type.STRING },
              reasoning: { type: Type.STRING, description: "Friendly and easy advice for the student." }
            },
            required: ["toolId", "reasoning"]
          }
        }
      });

      const data = JSON.parse(response.text || '{}');
      if (data.toolId) {
        setSuggestion(data);
      } else {
        setError("I'm not sure which tool is best for that. Try saying something like 'I need to edit a photo'!");
      }
    } catch (err) {
      setError("The helper is busy right now. Please try again in a moment!");
    } finally {
      setIsLoading(false);
    }
  };

  const recommendedTool = TOOLS.find(t => t.id === suggestion?.toolId);

  return (
    <div className="bg-zinc-900 border-2 border-zinc-800 p-8 rounded-3xl shadow-2xl flex flex-col h-full relative overflow-hidden">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
          <svg className="w-5 h-5 text-zinc-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-black text-white tracking-tighter uppercase">❤️‍🔥ZETSU HELPER</h3>
          <p className="text-[10px] mono font-bold text-zinc-500 uppercase">Not sure what to do? Ask Artworqq!</p>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <input 
          type="text" 
          placeholder="e.g. 'How do I make a cool name for my project?'"
          className="flex-grow px-6 py-5 rounded-xl bg-zinc-950 border-2 border-zinc-800 focus:border-emerald-500/50 outline-none text-white font-bold placeholder-zinc-800 transition-all"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAISuggest()}
        />
        <button 
          onClick={handleAISuggest}
          disabled={isLoading || !query.trim()}
          className="bg-white text-zinc-950 px-8 py-5 rounded-xl font-black uppercase text-xs hover:bg-emerald-500 transition-all disabled:bg-zinc-800 disabled:text-zinc-600 shrink-0"
        >
          {isLoading ? 'THINKING...' : 'ASK'}
        </button>
      </div>

      {suggestion && recommendedTool && (
        <div className="mt-8 p-6 bg-zinc-950 border border-zinc-800 rounded-2xl animate-in fade-in zoom-in-95 duration-300">
          <div className="flex items-start gap-5">
            <div className="text-4xl shrink-0 p-3 bg-zinc-900 rounded-xl border border-zinc-800">{recommendedTool.icon}</div>
            <div>
              <h4 className="text-emerald-400 font-black text-sm uppercase italic mb-2">My Advice for You:</h4>
              <p className="text-zinc-400 text-xs font-medium leading-relaxed mb-4">
                {suggestion.reasoning}
              </p>
              <Link 
                to={recommendedTool.href.replace('#', '')}
                className="inline-flex items-center gap-2 text-white font-black uppercase text-[10px] mono hover:text-emerald-400 transition-colors"
              >
                GO TO TOOL
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 bg-red-500/10 text-red-400 rounded-xl text-[10px] font-black uppercase mono text-center border border-red-500/10">
          {error}
        </div>
      )}
      
      {isLoading && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500/10 overflow-hidden">
          <div className="h-full bg-emerald-500 animate-[scan_2s_infinite]"></div>
        </div>
      )}
    </div>
  );
};

export default AISearch;
