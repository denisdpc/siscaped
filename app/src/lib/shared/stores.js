import { writable } from 'svelte/store';

export const objetivo = writable('Este parecer técnico tem por finalidade assessorar o EMAER (4SC3) no processo de classificação de produtos (bem, informação, obra, serviço e/ou projeto) como Produto de Defesa (PRODE) ou Produto Estratégico de Defesa (PED), especificando sua utilização na Defesa Nacional de acordo com as métricas previstas na Portaria Normativa nº 86/GM-MD, de 13 de dezembro de 2018.');
export const aplicacaoAtividadeFinalistica = writable('Exemplos de atividades finalísticas de Força Aérea:\n- Defesa Aérea: A defesa do espaço aéreo de um país contra ameaças, como aeronaves hostis, mísseis balísticos ou drones.\n- Ataque Aéreo: A capacidade de lançar ataques aéreos precisos e eficazes em alvos terrestres, marítimos ou aéreos, como parte de operações militares ou estratégicas.\n- Transporte Aéreo: O transporte de pessoal, suprimentos, equipamentos e carga em apoio a operações militares ou humanitárias.\n- Reconhecimento Aéreo: A coleta de informações e inteligência por meio de aeronaves de reconhecimento para avaliar ameaças, monitorar atividades inimigas e apoiar a tomada de decisões.\n- Resgate e Salvamento: A realização de operações de busca e resgate em áreas remotas ou hostis, muitas vezes em colaboração com agências de resgate civis.\n- Patrulhamento Marítimo: O monitoramento e a vigilância de águas territoriais, zonas econômicas exclusivas e áreas marítimas de interesse estratégico.\n- Operações Especiais: Apoio a operações especiais, como inserção e extração de forças especiais, reconhecimento em áreas de difícil acesso e resgate de reféns.\n- Treinamento e Educação: A formação e preparação de pessoal militar, incluindo pilotos, engenheiros, técnicos e outros especialistas.\n- Pesquisa e Desenvolvimento: O desenvolvimento de tecnologias aeronáuticas, sistemas de armas, aeronaves e equipamentos para melhorar a eficácia operacional e a segurança.\n- Missões Humanitárias: Fornecer assistência humanitária em caso de desastres naturais, conflitos armados ou outras crises, por meio do transporte de suprimentos e equipes médicas.\n- Policiamento do Espaço Aéreo: Monitorar e controlar o espaço aéreo do país para garantir que as aeronaves civis e militares operem de maneira segura e dentro dos regulamentos.\n- Dissuasão: Demonstrar a capacidade de resposta e a prontidão para dissuadir potenciais agressores e proteger os interesses nacionais.\n-Treinamento: A formação de pessoal militar em diversas áreas, como pilotos, tripulações, controladores de tráfego aéreo e técnicos. Isso inclui o desenvolvimento de programas de treinamento avançados, simuladores de voo e exercícios práticos para garantir a proficiência e a capacidade operacional das equipes.');
export const aplicacaoFAB = writable('O Produto (pode ser / é) aplicado no projeto (aeronáutico / de apoio) XXX, trazendo meios adicionais para o incrementando de sua disponibilidade.');

export const empresa = writable('');
export const produto = writable('');
export const orgaoDirecaoSetorial = writable('');
export const organizacaoMilitar = writable('');
export const assessor = writable('');
export const data = writable('');

export const maturidadeTecnologica = writable(0);

export const dominioTecnologico = writable(0);
export const dominioTecnologicoGrau = writable('');
export const cicloTecnologico = writable(0);
export const cicloTecnologicoGrau = writable('');
export const conteudoTecnologico = writable(-1);
export const justificativaConteudoTecnologico = writable('O produto foi enquadrado no domínio tecnológico XXXXX em virtude da empresa deter uma capacidade técnica que lhe permite desenvolver o produto (de forma autônoma / por meio de parceirias junto a terceiros em âmbito nacional, internacional / dispondo exclusivamente de terceiros, sem dispor de meios próprios ou conhecimento para tanto.\nO ciclo tecnógico foi considerado XXXXX, uma vez que o produto trouxe (uma mudança radical a partir do seu emprego, substituindo estruturas antigas / uma evolução a partir da sua aplicação em XXXX, trazendo melhorias às condições pré estabelecidas de uso neste cenário de aplicação / um incremento na capacidade, desempenho, resolução a partir de sua aplicação).');

export const disponibilidadeLogistica = writable(0);
export const disponibilidadeLogisticaGrau = writable('');
export const disponibilidadeProdutiva = writable(0);
export const disponibilidadeProdutivaGrau = writable('');
export const dificuldadeObtencao = writable(-1);
export const justificativaDificuldadeObtencao = writable('Os elementos para a composição do Produto (são / não são) encontrados (parcialmente / integralmente nacional) em território nacional, o que se reflete em uma (maior / menor / reduzida) disponibilidade logística.\nParalelamente, de posse de seus elementos constituintes, (é possível / não é possível) produzi-lo em território nacional, utilizando meios (terceirizados / da própria empresa), o que se reflete em uma (maior / menor / reduzida) disponibilidade produtiva.');

export const necessidadeEstrategica = writable(0);
export const necessidadeEstrategicaGrau = writable('');
export const necessidadeTatica = writable(0);
export const necessidadeTaticaGrau = writable('');
export const imprescindibilidade = writable(-1);
export const justificativaImprescindibilidade = writable('Considerando-se a destinação constitucional e as atribuições legais citadas no prefácio da DCA 1-1, a missão síntese da Aeronáutica é definida como: “MANTER A SOBERANIA DO ESPAÇO AÉREO E INTEGRAR O TERRITÓRIO NACIONAL, COM VISTAS À DEFESA DA PÁTRIA”. A Missão é a razão de ser do Comando da Aeronáutica, pois reflete o seu papel no âmbito das ações que possibilitam a defesa do País. Dessa maneira, a necessidade estratégica do presente produto se traduz como meio para a manutenção da (SOBERANIA DO ESPAÇÕ AÉREO, DEFESA, INTEGRAÇÃO DO TERRITÓRIO).\nAdicionalmente, no campo tático, o produto permite atender às Ações de Força Aérea, sobretudo de Ação Direta, como aquelas delimitadas pelos itens XXXX, YYYY e ZZZZ descritas no Vol II da DCA 1-1.');

export const fomentoOperacional = writable(-1);
export const categorizacao = writable(-1);

export const fotos = writable([]);
