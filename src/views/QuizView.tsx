import React, { useState } from 'react';
import { Question, QuizSession } from '../types';
import { ArrowLeft, BookOpen, Clock, Check, X, Star, Sparkles, TrendingUp, HelpCircle, ArrowRight } from 'lucide-react';

interface QuizViewProps {
  session: QuizSession;
  onBackToUnit: () => void;
  onFinishQuiz: (score: number, totalQuestions: number, xpEarned: number) => void;
}

export const QuizView: React.FC<QuizViewProps> = ({ session, onBackToUnit, onFinishQuiz }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [accumulatedXp, setAccumulatedXp] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const { questions, type } = session;
  const currentQuestion = questions[currentIdx];
  const isLastQuestion = currentIdx === questions.length - 1;

  const handleSelectOption = (idx: number) => {
    if (isSubmitted) return;
    setSelectedIdx(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedIdx === null || isSubmitted) return;

    const isCorrect = selectedIdx === currentQuestion.correctIndex;
    let earnedXp = 0;

    // Loop de feedback imediato de resposta
    if (isCorrect) {
      setCorrectAnswersCount(prev => prev + 1);
      if (type === 'exercise') {
        earnedXp = 5;
      }
    } else {
      if (type === 'exercise') {
        earnedXp = 1;
      }
    }

    setAccumulatedXp(prev => prev + earnedXp);
    setIsSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      // Calcula bônus de XP final da atividade
      let finalXpBonus = accumulatedXp;
      const isPerfectScore = correctAnswersCount === questions.length;
      const finalCorrectCount = correctAnswersCount;

      if (type === 'exercise') {
        // Já monitorado durante as submissões individuais
        finalXpBonus = finalCorrectCount * 5 + (questions.length - finalCorrectCount) * 1;
      } else if (type === 'simulado1' || type === 'simulado2') {
        finalXpBonus = 20 + (isPerfectScore ? 25 : 0);
      } else if (type === 'avaliacao' || type === 'substituta') {
        finalXpBonus = 25 + (isPerfectScore ? 30 : 0);
      }

      setAccumulatedXp(finalXpBonus);
      setCorrectAnswersCount(finalCorrectCount);
      setIsFinished(true);
    } else {
      setCurrentIdx(prev => prev + 1);
      setSelectedIdx(null);
      setIsSubmitted(false);
    }
  };

  // Identificadores em letras humanas para alternativas
  const LETTERS = ['A', 'B', 'C', 'D', 'E'];

  // Renderizador da tela final de conclusão
  if (isFinished) {
    const doublePercentage = (correctAnswersCount / questions.length) * 100;
    const isApproved = type === 'exercise' || doublePercentage >= 75; // Aprovado se >=75% nos testes de exames (exercício é livre)

    return (
      <div className="max-w-2xl mx-auto py-10 px-6 bg-white border border-slate-100 rounded-3xl shadow-sm text-center space-y-8 animate-fade-in my-8 text-slate-800">
        {/* Ícone de sucesso */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-gradient-to-tr from-[#03ad3c] to-[#006120] rounded-full flex items-center justify-center p-0.5 shadow-md shadow-green-500/10">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
              <Star className="w-10 h-10 text-[#03ad3c] fill-[#03ad3c] animate-pulse" />
            </div>
          </div>
        </div>

        {/* Títulos informativos */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#03ad3c] bg-green-50 px-3 py-1 rounded-full border border-green-100 uppercase">
            ATIVIDADE FINALIZADA!
          </span>
          <h3 className="text-3xl font-black text-slate-900 pt-2">
            {type === 'exercise'
              ? 'Excelente Treino!'
              : isApproved
              ? 'Módulo Concluído com Sucesso!'
              : 'Resultado Salvo'}
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Seus dados de progresso e recompensas foram calculados e prontos para sincronização definitiva com o Firebase Cloud.
          </p>
        </div>

        {/* Resumo de dados e pontuação obtida */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto py-4 px-6 bg-slate-50 rounded-2xl border border-slate-105 font-mono">
          <div className="text-center">
            <span className="block text-slate-450 text-[9px] uppercase tracking-wider">Questões</span>
            <span className="text-base font-bold text-slate-800">{questions.length}</span>
          </div>
          <div className="text-center border-x border-slate-200">
            <span className="block text-slate-450 text-[9px] uppercase tracking-wider">Acertos</span>
            <span className={`text-base font-bold ${isApproved ? 'text-emerald-600' : 'text-slate-500'}`}>
              {correctAnswersCount}
            </span>
          </div>
          <div className="text-center">
            <span className="block text-slate-450 text-[9px] uppercase tracking-wider">Premiação</span>
            <span className="text-base font-bold text-[#03ad3c]">+{accumulatedXp} XP</span>
          </div>
        </div>

        {/* Mensagens de orientação pedagógica */}
        <div className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
          {type === 'exercise' ? (
            <span>Você concluiu todos os exercícios deste tópico e liberou pontos na barra de progresso. Estude os demais capítulos!</span>
          ) : isApproved ? (
            <span className="text-emerald-700 font-semibold bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-100 block">
              Parabéns! Você alcançou a pontuação mínima de corte da escola e passou nesta qualificação.
            </span>
          ) : (
            <span className="text-amber-700 font-semibold bg-amber-50 px-3 py-2 rounded-lg border border-amber-100 block">
              Aviso: Nota inferior ao rendimento esperado. Releia os resumos do módulo e tente mais tarde.
            </span>
          )}
        </div>

        {/* Botão de ação para salvar resultados */}
        <div className="flex justify-center">
          <button
            id="btn-quiz-save-exit"
            onClick={() => onFinishQuiz(correctAnswersCount, questions.length, accumulatedXp)}
            className="px-8 py-3 bg-[#03ad3c] hover:bg-[#019432] text-white font-extrabold rounded-full text-sm transition-all shadow-sm cursor-pointer w-full max-w-xs"
          >
            Gravar Resultados e Sair
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in pb-20 text-slate-800">
      {/* Links e cabeçalho de retorno */}
      <div className="flex justify-between items-center">
        <button
          id="btn-quiz-cancel"
          onClick={onBackToUnit}
          className="inline-flex items-center space-x-2 text-slate-500 hover:text-[#03ad3c] text-sm font-semibold transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform stroke-[2.2px]" />
          <span>Abandonar Teste</span>
        </button>

        <div className="text-xs font-mono font-bold text-[#03ad3c] bg-green-50 px-3 py-1.5 rounded-lg border border-green-100 flex items-center space-x-1.5">
          <Clock className="w-3.5 h-3.5" />
          <span>ATIVIDADE: {type.toUpperCase()}</span>
        </div>
      </div>

      {/* Status de progresso do teste */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
        <div className="flex justify-between text-xs font-semibold mb-2 text-slate-500 font-mono">
          <span>Questão {currentIdx + 1} de {questions.length}</span>
          <span>Acumulado: {accumulatedXp} XP</span>
        </div>
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-[#03ad3c] transition-all duration-300 pointer-events-none"
            style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Bloco principal do enunciado da questão */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div>
          <span className="text-[10px] font-mono font-black text-[#03ad3c] uppercase tracking-widest bg-green-50 px-2 py-1 rounded border border-green-100">
            ENUNCIADO
          </span>
          <h4 id="quiz-question-body text-white" className="text-base font-bold text-slate-900 leading-relaxed mt-4 whitespace-pre-line">
            {currentQuestion.text}
          </h4>
        </div>

        {/* Laço de exibição das alternativas */}
        <div className="space-y-3 pt-2">
          {currentQuestion.options.map((option, idx) => {
            const isSel = selectedIdx === idx;
            const isCorr = idx === currentQuestion.correctIndex;

            let alternativeClass = 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/50 text-slate-700';
            if (isSubmitted) {
              if (isCorr) {
                alternativeClass = 'border-emerald-500 bg-emerald-50 text-emerald-800';
              } else if (isSel) {
                alternativeClass = 'border-red-500 bg-red-50 text-red-800';
              } else {
                alternativeClass = 'border-slate-100 opacity-40 bg-slate-50/40 pointer-events-none';
              }
            } else if (isSel) {
              alternativeClass = 'border-[#03ad3c] bg-green-50/50 text-slate-900 ring-2 ring-[#03ad3c]/10';
            }

            return (
              <button
                key={idx}
                id={`quiz-option-${idx}`}
                disabled={isSubmitted}
                onClick={() => handleSelectOption(idx)}
                className={`w-full p-4 border text-left text-sm rounded-2xl transition-all flex items-start space-x-3 cursor-pointer ${alternativeClass}`}
              >
                <div className={`w-6 h-6 rounded-lg text-xs font-mono font-bold shrink-0 flex items-center justify-center border ${
                  isSel ? 'bg-[#03ad3c] text-white border-green-500' : 'bg-white border-slate-200 text-slate-450'
                }`}>
                  {LETTERS[idx]}
                </div>
                <div className="flex-1 font-medium leading-normal">{option}</div>

                {isSubmitted && isCorr && <Check className="w-5 h-5 text-emerald-600 shrink-0 self-center" />}
                {isSubmitted && !isCorr && isSel && <X className="w-5 h-5 text-red-600 shrink-0 self-center" />}
              </button>
            );
          })}
        </div>

        {/* Detalhes da explicação conceitual após o envio */}
        {isSubmitted && (
          <div id="quiz-explanation-box" className="p-5 bg-slate-50 border border-slate-100 rounded-2xl space-y-2.5 leading-relaxed animate-fade-in text-slate-700">
            <div className="flex items-center space-x-1.5 text-xs text-amber-600 font-bold tracking-wide uppercase">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Resolução Pedagógica Detalhada</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-sans whitespace-pre-line">
              {currentQuestion.explanation}
            </p>
          </div>
        )}

        {/* Ações e botões de navegação inferiores */}
        <div className="pt-4 border-t border-slate-100 flex justify-end">
          {!isSubmitted ? (
            <button
              id="btn-quiz-submit"
              disabled={selectedIdx === null}
              onClick={handleSubmitAnswer}
              className="px-6 py-3 bg-[#03ad3c] hover:bg-[#019432] disabled:opacity-40 text-white font-extrabold text-sm rounded-xl cursor-pointer shadow-sm transition-colors"
            >
              Responder
            </button>
          ) : (
            <button
              id="btn-quiz-next"
              onClick={handleNextQuestion}
              className="px-6 py-3 bg-gradient-to-r from-[#03ad3c] to-[#006120] text-white font-extrabold text-sm rounded-xl flex items-center space-x-1.5 hover:opacity-95 cursor-pointer shadow-sm"
            >
              <span>{isLastQuestion ? 'Finalizar Atividade' : 'Próxima Questão'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
