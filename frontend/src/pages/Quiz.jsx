import { useState } from 'react';
import { quizData } from '../data/questions';
import { Link } from 'react-router-dom';

function Quiz() {
  const [gameState, setGameState] = useState('menu');
  const [difficulty, setDifficulty] = useState('easy');
  const [currentQuestions, setCurrentQuestions] = useState([]);
  
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);

  const shuffleArray = (array) => {
  // Create a copy to avoid mutating the original data
  const shuffled = [...array]; 
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
  };

  const startGame = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
    
    // 1. Get the raw list from data
    const rawQuestions = quizData[selectedDifficulty];
    
    // 2. Shuffle the QUESTIONS order
    const questionsShuffled = shuffleArray(rawQuestions);

    // 3. Shuffle the OPTIONS inside each question
    // We map over the questions to create a new array with shuffled options
    const fullyShuffled = questionsShuffled.map((question) => ({
      ...question,
      options: shuffleArray(question.options)
    }));

    setCurrentQuestions(fullyShuffled);
    setCurrentQuestionIdx(0);
    setScore(0);
    setLives(5);
    setGameState('playing');
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      advanceGame(); // Correct? Move on.
    } else {
      // Wrong Answer Logic
      const newLives = lives - 1;
      setLives(newLives);
      
      if (newLives === 0) {
        // No hearts left? Game Over immediately.
        setGameState('gameover');
      } else {
        // Hearts remaining? Take the hit, but MOVE ON.
        advanceGame(); 
      }
    }
  };
  // -----------------------

  const advanceGame = () => {
    const nextQuestion = currentQuestionIdx + 1;
    if (nextQuestion < currentQuestions.length) {
      setCurrentQuestionIdx(nextQuestion);
    } else {
      setGameState('finished');
    }
  };

  const resetGame = () => {
    setGameState('menu');
    setLives(5);
    setScore(0);
  };

  // --- HELPERS ---

  // Renders hearts (Full vs Empty)
  const renderHearts = () => {
    const hearts = [];
    for (let i = 0; i < 5; i++) {
      hearts.push(
        <span key={i} className={`text-xl md:text-2xl transition-all ${i < lives ? 'text-red-600 animate-pulse' : 'text-gray-300 grayscale'}`}>
          {i < lives ? '♥' : '♡'}
        </span>
      );
    }
    return <div className="flex gap-1">{hearts}</div>;
  };

  // Calculate Grade
  const calculateGrade = () => {
    if (!currentQuestions.length) return { grade: 'F', message: 'N/A' };
    const percentage = Math.round((score / currentQuestions.length) * 100);
    if (percentage === 100) return { grade: 'S', color: 'text-yellow-500', message: 'PERFECT RUN.' };
    if (percentage >= 80) return { grade: 'A', color: 'text-green-600', message: 'EXCELLENT WORK.' };
    if (percentage >= 50) return { grade: 'C', color: 'text-blue-600', message: 'ACCEPTABLE.' };
    return { grade: 'F', color: 'text-red-600', message: 'FAILED.' };
  };

  return (
    <div className="max-w-2xl mx-auto mt-4 md:mt-8 px-4 pb-10">
      
      {/* HEADER */}
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black drop-shadow-[3px_3px_0_rgba(0,0,0,0.2)]">
            Exam Module
        </h1>
        <div className="inline-block bg-black text-white px-2 py-0.5 font-mono text-[10px] md:text-xs mt-2">
            *** AUTHORIZED PERSONNEL ONLY ***
        </div>
      </div>

      {/* MAIN CONSOLE WINDOW */}
      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] relative min-h-[400px]">
        
        {/* Window Bar */}
        <div className="bg-blue-700 h-6 border-b-4 border-black flex items-center px-2 justify-between">
            <div className="flex gap-1">
                <div className="w-2 h-2 bg-white border border-black"></div>
                <div className="w-2 h-2 bg-white border border-black"></div>
                <div className="w-2 h-2 bg-white border border-black"></div>
            </div>
            <div className="font-mono text-[10px] text-white uppercase font-bold tracking-widest">
                {gameState === 'menu' ? 'Select_Diff.exe' : `Quiz_${difficulty.toUpperCase()}.exe`}
            </div>
        </div>

        <div className="p-6 md:p-8">
            
            {/* === STATE 1: MENU (DIFFICULTY SELECT) === */}
            {gameState === 'menu' && (
                <div className="text-center space-y-6 animate-fade-in">
                    <h2 className="font-black uppercase text-xl md:text-2xl">Select Difficulty</h2>
                    <p className="font-mono text-xs text-gray-500">CHOOSE YOUR CLEARANCE LEVEL:</p>
                    
                    <div className="grid grid-cols-1 gap-4 max-w-sm mx-auto">
                        <button onClick={() => startGame('easy')} className="bg-green-100 border-2 border-black p-4 hover:bg-green-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_0px_#000] transition-all text-left flex justify-between items-center group">
                            <span className="font-bold font-mono text-green-800">LEVEL 1: EASY</span>
                            <span className="text-xs bg-green-800 text-white px-2 py-1 opacity-0 group-hover:opacity-100">START &gt;</span>
                        </button>
                        <button onClick={() => startGame('medium')} className="bg-yellow-100 border-2 border-black p-4 hover:bg-yellow-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_0px_#000] transition-all text-left flex justify-between items-center group">
                            <span className="font-bold font-mono text-yellow-800">LEVEL 2: MEDIUM</span>
                            <span className="text-xs bg-yellow-800 text-white px-2 py-1 opacity-0 group-hover:opacity-100">START &gt;</span>
                        </button>
                        <button onClick={() => startGame('hard')} className="bg-red-100 border-2 border-black p-4 hover:bg-red-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_0px_#000] transition-all text-left flex justify-between items-center group">
                            <span className="font-bold font-mono text-red-800">LEVEL 3: HARD</span>
                            <span className="text-xs bg-red-800 text-white px-2 py-1 opacity-0 group-hover:opacity-100">START &gt;</span>
                        </button>
                    </div>
                </div>
            )}

            {/* === STATE 2: PLAYING === */}
            {gameState === 'playing' && (
                <div className="w-full">
                    {/* HUD: Lives & Progress */}
                    <div className="mb-6 flex justify-between items-end border-b-2 border-black pb-2">
                        <div className="font-mono text-[10px] md:text-xs font-bold bg-black text-white px-2 py-0.5">
                            Q {currentQuestionIdx + 1}/{currentQuestions.length}
                        </div>
                        <div className="flex flex-col items-end">
                             <span className="text-[9px] font-bold uppercase mb-0.5">Vitality</span>
                             {renderHearts()}
                        </div>
                    </div>

                    {/* Question */}
                    <div className="mb-6 min-h-[60px] flex items-center">
                        <h2 className="text-lg md:text-2xl font-bold font-serif leading-tight">
                            {currentQuestions[currentQuestionIdx].questionText}
                        </h2>
                    </div>

                    {/* Options */}
                    <div className="grid grid-cols-1 gap-3">
                        {currentQuestions[currentQuestionIdx].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(option.isCorrect)}
                                className="group relative w-full text-left p-3 border-2 border-black bg-white hover:bg-yellow-300 transition-all active:bg-black active:text-white shadow-[3px_3px_0px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="bg-black text-white font-mono text-xs font-bold w-6 h-6 flex items-center justify-center border border-black group-hover:bg-white group-hover:text-black transition-colors">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                    <span className="font-bold font-mono text-xs md:text-base uppercase">
                                        {option.text}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* === STATE 3: GAME OVER (Lost all hearts) === */}
            {gameState === 'gameover' && (
                <div className="text-center animate-pulse">
                    <div className="text-6xl mb-4">💀</div>
                    <h2 className="text-3xl font-black text-red-600 uppercase mb-2">System Failure</h2>
                    <p className="font-mono text-sm mb-8 font-bold">VITAL SIGNS TERMINATED.</p>
                    <button onClick={resetGame} className="bg-black text-white border-2 border-black px-6 py-2 font-mono font-bold uppercase hover:bg-gray-800 transition-all">
                        Reboot System
                    </button>
                </div>
            )}

            {/* === STATE 4: FINISHED (Success) === */}
            {gameState === 'finished' && (
                <div className="text-center animate-fade-in space-y-6">
                    <div className="border-2 border-double border-black p-6 bg-gray-50 relative">
                        {/* Stamp */}
                        <div className={`absolute top-2 right-2 border-2 ${calculateGrade().color} font-black p-1 transform rotate-12 opacity-80 text-lg md:text-xl uppercase`}>
                            {calculateGrade().grade === 'F' ? 'FAIL' : 'PASS'}
                        </div>

                        <h2 className="text-xl md:text-2xl font-black uppercase mb-1">Mission Report</h2>
                        
                        <div className="flex justify-center items-center gap-6 mb-4 mt-6">
                            <div className="text-right">
                                <p className="font-mono text-[10px] font-bold uppercase">Score</p>
                                <p className="text-2xl md:text-4xl font-black">{score}/{currentQuestions.length}</p>
                            </div>
                            <div className="w-px h-10 bg-black"></div>
                            <div className="text-left">
                                <p className="font-mono text-[10px] font-bold uppercase">Rank</p>
                                <p className={`text-3xl md:text-5xl font-black ${calculateGrade().color} drop-shadow-[1px_1px_0_rgba(0,0,0,1)]`}>
                                    {calculateGrade().grade}
                                </p>
                            </div>
                        </div>
                        
                        <p className="font-serif text-sm font-bold italic bg-yellow-200 inline-block px-2 border border-black">
                            "{calculateGrade().message}"
                        </p>
                    </div>
                    
                    <div className="flex justify-center gap-4">
                        <button onClick={resetGame} className="bg-green-500 text-black border-2 border-black px-4 py-2 font-mono text-sm font-bold uppercase hover:shadow-[3px_3px_0px_0px_#000] transition-all">
                            Main Menu
                        </button>
                        <Link to="/" className="bg-gray-200 text-black border-2 border-black px-4 py-2 font-mono text-sm font-bold uppercase hover:shadow-[3px_3px_0px_0px_#000] transition-all">
                            Exit
                        </Link>
                    </div>
                </div>
            )}

        </div>

        {/* FOOTER BAR */}
        <div className="bg-gray-200 border-t-4 border-black p-1.5 flex justify-between items-center text-[9px] md:text-[10px] font-mono font-bold text-gray-500 uppercase">
            <span>MEM: 64KB OK</span>
            <span>STATUS: {gameState === 'playing' ? 'RUNNING' : 'IDLE'}</span>
        </div>

      </div>
    </div>
  );
}

export default Quiz;
