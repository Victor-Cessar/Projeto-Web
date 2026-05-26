import { Question } from '../types';

export const QUESTIONS_BY_UNIT: Record<string, Record<string, Question[]>> = {
  unit1: {
    exercises: [
      {
        id: 'u1_q1',
        text: 'Na cidade de João e Maria, haverá shows em uma boate. Pensando em todos, a boate propôs pacotes para que os fregueses escolhessem o que seria melhor para si. Pacote 1: taxa de 40 reais por show. Pacote 2: taxa de 80 reais mais 10 reais por show. Pacote 3: taxa de 60 reais para 4 shows, e 15 reais por cada show a mais. João assistirá a 7 shows e Maria, a 4. As melhores opções para João e Maria são, respectivamente, os pacotes:',
        options: ["1 e 2.", "2 e 2.", "3 e 1.", "2 e 1.", "3 e 3."],
        correctIndex: 4,
        explanation: "Para João (7 shows): P1 = 7×40 = R$280 | P2 = 80 + 7×10 = R$150 | P3 = 60 + 3×15 = R$105 ✅ (Melhor: P3). Para Maria (4 shows): P1 = 4×40 = R$160 | P2 = 80 + 4×10 = R$120 | P3 = R$60 (fixo para 4 shows) ✅ (Melhor: P3). ⚠️ Dica: Para Maria, o Pacote 3 (R$60) é mais barato que o Pacote 1 (R$160). Resposta correta: Pacote 3 e 3 (Alternativa E)."
      },
      {
        id: 'u1_q2',
        text: 'Estamos vivendo em um período em que a água está ficando escassa no planeta. De acordo com a Organização das Nações Unidas (ONU), cada pessoa deve consumir, diariamente, 50 litros de água para suprir suas necessidades diárias. Nesse sentido, João consome, em média, por dia, 57 litros de água. Mensalmente, ele ultrapassa a orientação da ONU em:',
        options: ["7 litros.", "107 litros.", "210 litros.", "1500 litros.", "1710 litros."],
        correctIndex: 2,
        explanation: "Excesso diário: 57 - 50 = 7 litros | Em 30 dias: 7 × 30 = 210 litros excedentes no mês ✅ | Resposta correta: Alternativa C (210 litros)."
      },
      {
        id: 'u1_q3',
        text: 'O Ministério da Saúde acompanha a difusão da tuberculose no Brasil por taxas de incidência. Se a prioridade na distribuição de recursos for dada ao estado que tiver maior aumento absoluto em suas taxas de incidência entre 2000 e 2004, a prioridade será dada para:\n\n• Amapá: 9,0 para 37,1\n• Amazonas: 72,8 para 69,0\n• Minas Gerais: 0,3 para 27,2\n• Pernambuco: 43,3 para 51,0\n• Rio de Janeiro: 90,7 para 79,7',
        options: ["Amapá.", "Amazonas.", "Minas Gerais.", "Pernambuco.", "Rio de Janeiro."],
        correctIndex: 0,
        explanation: "Variação absoluta (2004 - 2000): Amapá +28,1 (37,1-9,0) ✅ | Minas Gerais +26,9 (27,2-0,3) | Pernambuco +7,7 (51,0-43,3) | Amazonas e RJ tiveram queda. Maior aumento absoluto: Amapá | Resposta correta: Alternativa A."
      },
      {
        id: 'u1_q4',
        text: 'Camile caminha no sentido anti-horário em praça circular de 500m de extensão. Os pontos igualmente localizados são: Centro Cultural (a 1/8 de volta), Padaria (a 2/8 de volta), Sorveteria (a 4/8), Academia (a 6/8) e Drogaria (a 7/8). Se ela caminhou 4125 m partindo do marco zero, em qual ponto ela parou mais próxima?',
        options: ["Centro Cultural.", "Drogaria.", "Academia.", "Ponto de Partida.", "Padaria."],
        correctIndex: 4,
        explanation: "4125 ÷ 500 = 8 voltas completas + resto de 125m. 125m equivale a 1/4 da volta (ou 2/8), posicionando-se exatamente na Padaria ✅."
      },
      {
        id: 'u1_q5',
        text: 'Lucas adquiriu 6 artigos: laptop por R$ 1.800,00, impressora por R$ 960,00 e 4 cartuchos de tinta por R$ 75,00 cada. Se as compras foram divididas em 6 parcelas iguais mensais, qual o valor de cada prestação?',
        options: ["R$ 3.060,00.", "R$ 1.530,00.", "R$ 1.020,00.", "R$ 510,00.", "R$ 320,00."],
        correctIndex: 3,
        explanation: "Custo total = 1800 + 960 + (4 × 75) = R$ 3.060,00. Parcelas = 3060 ÷ 6 = R$ 510,00 ✅."
      },
      {
        id: 'u1_q6',
        text: 'Considere uma fatura de água: taxa mínima de R$ 5,50 até 10 m³, R$ 0,85 por m³ de 11 a 20 m³. O cliente consumiu 17 m³ e pagou R$ 11,45. Se o consumo duplicar (34 m³), sabendo que a tarifa de 21 a 50 m³ é de R$ 2,13 por excedente, qual será a nova cobrança?',
        options: ["R$ 22,90.", "R$ 106,46.", "R$ 43,82.", "R$ 17,40.", "R$ 22,52."],
        correctIndex: 2,
        explanation: "Primeiros 10m³ = R$ 5,50. De 11 a 20m³ (10m³) = 10 × 0,85 = R$ 8,50. De 21 a 34m³ (14m³) = 14 × 2,13 = R$ 29,82. Total = 5,50 + 8,50 + 29,82 = R$ 43,82 ✅."
      },
      {
        id: 'u1_q7',
        text: 'Eleição com candidatos A, B, C e 33 eleitores: 1º lugar vale 3 pt, 2º lugar vale 2 pt, 3º lugar vale 1 pt. Os votos foram: ABC (10), ACB (4), BAC (2), BCA (7), CAB (3) e CBA (7). Qual o score do vencedor da contagem?',
        options: ["A é eleito com 66 pontos.", "A é eleito com 68 pontos.", "B é eleito com 68 pontos.", "B é eleito com 70 pontos.", "C é eleito com 73 pontos."],
        correctIndex: 2,
        explanation: "Pontuação total: A = 66 | B = (10×2)+(4×1)+(2×3)+(7×3)+(3×1)+(7×2) = 68 ✅ | C = (10×1)+(4×2)+(2×1)+(7×2)+(3×3)+(7×3) = 64. O vencedor é B com 68 pontos."
      },
      {
        id: 'u1_q8',
        text: 'Um passageiro avalia as filas do raio-X do aeroporto pelo tempo médio de escaneamento multiplicando pelo número de concorrentes:\n\nM1: 35s / 5 pessoas\nM2: 25s / 6 pessoas\nM3: 22s / 7 pessoas\nM4: 40s / 4 pessoas\nM5: 20s / 8 pessoas\n\nPara aguardar o menor tempo geral, qual deles escolher?',
        options: ["Fila 1.", "Fila 2.", "Fila 3.", "Fila 4.", "Fila 5."],
        correctIndex: 1,
        explanation: "Tempo total (s × pessoas): M1=175 | M2=150 ✅ | M3=154 | M4=160 | M5=160. Fila 2 tem o menor tempo acumulado (150s)."
      },
      {
        id: 'u1_q9',
        text: 'A OCDE previu crescimento do PIB mundial em 2,9% em novembro de 2019, vindo a diminuir para 2,4% no início de 2020. Contudo, em caso de surto viral longo, prevê declínio drástico para 1,5%. A retração total gerada pelo pior cenário, comparada com as previsões de novembro, representa qual decréscimo relativo?',
        options: ["O PIB não irá desacelerar econômico.", "Queda de 1,5% nas exportações diretas.", "A retração mundial do pior caso representará estimativa de 1,4% de queda comparativa.", "Apenas a união europeia sofrerá retrocesso.", "A queda mundial projetada será linearmente de 4%."],
        correctIndex: 2,
        explanation: "Diferença entre a previsão original e o pior cenário: 2,9% - 1,5% = 1,4 pontos percentuais de queda ✅."
      }
    ],
    simulado1: [
      {
        id: 'u1_s1_q1',
        text: 'Seja A o conjunto dos números naturais pares de 1 a 10 e B o conjunto composto pelos divisores inteiros de 12. A intersecção A ∩ B contém quantos elementos?',
        options: ["1 elemento", "2 elementos", "3 elementos", "4 elementos", "Nenhum"],
        correctIndex: 2,
        explanation: "A = {2, 4, 6, 8, 10}. Divisores positivos de 12 em B: {1, 2, 3, 4, 6, 12}. Os elementos comuns são {2, 4, 6}, totalizando 3 elementos."
      },
      {
        id: 'u1_s1_q2',
        text: 'No dispositivo de cálculo do MDC de 36 e 24 por divisões sucessivas (Euclides), qual o penúltimo resto que determina o divisor máximo comum?',
        options: ["12", "6", "2", "3", "Zero"],
        correctIndex: 0,
        explanation: "36 dividido por 24 dá quociente 1 e resto 12. 24 dividido por 12 dá quociente 2 e resto zero. O divisor comum final (MDC) é 12."
      }
    ],
    simulado2: [
      {
        id: 'u1_s2_q1',
        text: 'Calcule a dízima periódica simples 0,777... expressa sob forma de fração geratriz irredutível.',
        options: ["77/100", "7/9", "77/90", "7/10", "1/7"],
        correctIndex: 1,
        explanation: "Pelo padrão de dízimas simples de período único, a geratriz é x = 7/9."
      }
    ],
    avaliacao: [
      {
        id: 'u1_av_q1',
        text: 'Ao simplificar a expressão matemática [(2³ · 2²)⁴] / 2¹⁵ , qual a potência simplificada restante?',
        options: ["2⁵", "2¹", "2⁰", "2⁸", "2²"],
        correctIndex: 0,
        explanation: "Dentro dos colchetes: 2³ · 2² = 2⁵. Elevado à quarta potência: (2⁵)⁴ = 2²⁰. Dividido por 2¹⁵: 2²⁰ / 2¹⁵ = 2⁵."
      },
      {
        id: 'u1_av_q2',
        text: 'Em uma sala de aula, 2/3 dos matriculados gostam de conjuntos numéricos. Se foram catalogados 24 alunos que aderem a esse perfil, qual a contagem de discentes total da turma?',
        options: ["30 alunos", "36 alunos", "48 alunos", "18 alunos", "24 alunos"],
        correctIndex: 1,
        explanation: "Se 2/3 = 24, logo 1/3 = 12. O total correspondente é 3 x 12 = 36 alunos matriculados."
      }
    ],
    substituta: [
      {
        id: 'u1_sub_q1',
        text: 'Resolva a soma simplificada das frações 4/5 e 1/2.',
        options: ["5/7", "5/10", "13/10", "8/5", "2/5"],
        correctIndex: 2,
        explanation: "MMC de 5 e 2 é 10. Multiplicando: (8 + 5) / 10 = 13/10."
      }
    ]
  },
  unit2: {} as Record<string, Question[]>,
  unit3: {} as Record<string, Question[]>,
  unit4: {} as Record<string, Question[]>
};

// Auto-fill mock sets for other units list so we don't crash
const MOCK_OPTIONS = ["Opção A", "Opção B", "Opção C", "Opção D", "Opção E"];
const unitIds = ['unit1', 'unit2', 'unit3', 'unit4'];
const quizTypes = ['exercises', 'simulado1', 'simulado2', 'avaliacao', 'substituta'];

unitIds.forEach((uId) => {
  if (!QUESTIONS_BY_UNIT[uId]) {
    QUESTIONS_BY_UNIT[uId] = {};
  }
  quizTypes.forEach((type) => {
    if (!QUESTIONS_BY_UNIT[uId][type] || QUESTIONS_BY_UNIT[uId][type].length === 0) {
      QUESTIONS_BY_UNIT[uId][type] = [
        {
          id: `${uId}_${type}_q1`,
          text: `Questão Prática do Módulo ${uId.toUpperCase()} - Tipo ${type.toUpperCase()}: Qual a resposta correta para a proporção algébrica?`,
          options: MOCK_OPTIONS,
          correctIndex: 1,
          explanation: "Resposta simplificada de simulação do Gabarito."
        },
        {
          id: `${uId}_${type}_q2`,
          text: `Questão Avançada de Estudos do Módulo ${uId.toUpperCase()} - Tipo ${type.toUpperCase()}: Determine a constante do problema matemático.`,
          options: MOCK_OPTIONS,
          correctIndex: 0,
          explanation: "Processo demonstrativo de resolução de exercícios."
        }
      ];
    }
  });
});
