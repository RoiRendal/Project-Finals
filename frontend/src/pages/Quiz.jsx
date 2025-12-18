import { useState } from 'react';
import { questions } from '../data/questions';
import { Link } from 'react-router-dom';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  const percentage = Math.round((score / questions.length) * 100);
  let grade = 'F';
  let gradeColor = 'text-red-600';
  let message = 'SUBJECT REQUIRES FURTHER STUDY.';

  if (percentage === 100) { grade = 'S'; gradeColor = 'text-yellow-500'; message = 'PERFECT SCORE. EXCEPTIONAL.'; }
  else if (percentage >= 75) { grade = 'A'; gradeColor = 'text-green-600'; message = 'EXCELLENT KNOWLEDGE BASE.'; }
  else if (percentage >= 50) { grade = 'C'; gradeColor = 'text-blue-600'; message = 'ACCEPTABLE PERFORMANCE.'; }

  return (
    <div className="max-w-2xl mx-auto mt-4 md:mt-8 px-4 pb-10">
      
      {/* HEADER */}
      <div className="text-center mb-6">
        {/* ADJUSTMENT 2: Smaller, crisper title */}
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black drop-shadow-[3px_3px_0_rgba(0,0,0,0.2)]">
            Exam Module
        </h1>
        <div className="inline-block bg-black text-white px-2 py-0.5 font-mono text-[10px] md:text-xs mt-2">
            *** AUTHORIZED PERSONNEL ONLY ***
        </div>
      </div>

      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] relative">
        
        {/* Window Bar */}
        <div className="bg-blue-700 h-6 border-b-4 border-black flex items-center px-2 justify-between">
            <div className="flex gap-1">
                <div className="w-2 h-2 bg-white border border-black"></div>
                <div className="w-2 h-2 bg-white border border-black"></div>
                <div className="w-2 h-2 bg-white border border-black"></div>
            </div>
            <div className="font-mono text-[10px] text-white uppercase font-bold tracking-widest">
                Terminal_01.exe
            </div>
        </div>

        {/* ADJUSTMENT 3: Reduced padding (p-4 md:p-8) */}
        <div className="p-4 md:p-8">
            {showScore ? (
            /* === SCORE SCREEN === */
            <div className="text-center animate-fade-in space-y-6">
                <div className="border-2 border-double border-black p-6 bg-gray-50 relative">
                    <div className={`absolute top-2 right-2 border-2 ${percentage >= 50 ? 'border-green-600 text-green-600' : 'border-red-600 text-red-600'} font-black p-1 transform rotate-12 opacity-80 text-lg md:text-xl uppercase`}>
                        {percentage >= 50 ? 'PASSED' : 'FAILED'}
                    </div>

                    <h2 className="text-xl md:text-2xl font-black uppercase mb-1">Assessment Complete</h2>
                    <p className="font-mono text-xs text-gray-500 mb-4">Generating Report...</p>
                    
                    <div className="flex justify-center items-center gap-6 mb-4">
                        <div className="text-right">
                            <p className="font-mono text-[10px] font-bold uppercase">Accuracy</p>
                            <p className="text-2xl md:text-4xl font-black">{percentage}%</p>
                        </div>
                        <div className="w-px h-10 bg-black"></div>
                        <div className="text-left">
                            <p className="font-mono text-[10px] font-bold uppercase">Grade</p>
                            <p className={`text-3xl md:text-5xl font-black ${gradeColor} drop-shadow-[1px_1px_0_rgba(0,0,0,1)]`}>
                                {grade}
                            </p>
                        </div>
                    </div>
                    
                    <p className="font-serif text-sm md:text-base font-bold italic bg-yellow-200 inline-block px-2 border border-black">
                        "{message}"
                    </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button 
                    onClick={resetQuiz}
                    className="bg-green-500 text-black border-2 border-black px-6 py-2 font-mono text-sm font-bold uppercase hover:bg-green-400 hover:shadow-[3px_3px_0px_0px_#000] active:translate-y-1 active:shadow-none transition-all"
                    >
                    Re-Initialize
                    </button>
                    <Link 
                    to="/"
                    className="bg-gray-200 text-black border-2 border-black px-6 py-2 font-mono text-sm font-bold uppercase hover:bg-gray-300 hover:shadow-[3px_3px_0px_0px_#000] active:translate-y-1 active:shadow-none transition-all text-center"
                    >
                    Term_Exit
                    </Link>
                </div>
            </div>
            ) : (
            /* === QUESTION SCREEN === */
            <div className="w-full">
                
                {/* HUD */}
                <div className="mb-6 flex justify-between items-end gap-2 border-b-2 border-black pb-2">
                    <div className="font-mono text-[10px] md:text-xs font-bold bg-black text-white px-2 py-0.5">
                        QUERY {currentQuestion + 1} / {questions.length}
                    </div>
                    
                    {/* Compact Blocks */}
                    <div className="flex gap-1">
                        {questions.map((_, idx) => (
                            <div 
                                key={idx} 
                                className={`w-3 h-3 md:w-4 md:h-4 border border-black ${idx < currentQuestion ? 'bg-green-500' : idx === currentQuestion ? 'bg-yellow-400 animate-pulse' : 'bg-white'}`}
                            ></div>
                        ))}
                    </div>
                </div>
                
                {/* QUESTION TEXT: Reduced font size for cleaner look */}
                <div className="mb-6 min-h-[60px] flex items-center">
                    <h2 className="text-lg md:text-2xl font-bold font-serif leading-tight">
                        {questions[currentQuestion].questionText}
                    </h2>
                </div>

                {/* OPTIONS GRID: Compact padding */}
                <div className="grid grid-cols-1 gap-3">
                {questions[currentQuestion].options.map((option, index) => (
                    <button
                    key={index}
                    onClick={() => handleAnswerOptionClick(option.isCorrect)}
                    className="group relative w-full text-left p-3 md:p-3 border-2 border-black bg-white hover:bg-yellow-300 transition-all active:bg-black active:text-white shadow-[3px_3px_0px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                    >
                    <div className="flex items-center gap-3">
                        {/* Smaller Letter Box */}
                        <span className="bg-black text-white font-mono text-xs font-bold w-6 h-6 flex items-center justify-center border border-black group-hover:bg-white group-hover:text-black transition-colors">
                            {String.fromCharCode(65 + index)}
                        </span>
                        {/* Smaller Text */}
                        <span className="font-bold font-mono text-xs md:text-base uppercase">
                            {option.text}
                        </span>
                    </div>
                    </button>
                ))}
                </div>
            </div>
            )}
        </div>

        {/* FOOTER BAR */}
        <div className="bg-gray-200 border-t-4 border-black p-1.5 flex justify-between items-center text-[9px] md:text-[10px] font-mono font-bold text-gray-500 uppercase">
            <span>MEM: 64KB OK</span>
            <span>INPUT: READY</span>
        </div>

      </div>
    </div>
  );
}

export default Quiz;
