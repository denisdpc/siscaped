import { writable } from 'svelte/store';

export const objetivo = writable('Este parecer técnico tem por finalidade assessorar o EMAER (4SC3) no processo de classificação de produtos (bem, informação, obra, serviço e/ou projeto) como Produto de Defesa (PRODE) ou Produto Estratégico de Defesa (PED), especificando sua utilização na Defesa Nacional de acordo com as métricas previstas na Portaria Normativa nº 86/GM-MD, de 13 de dezembro de 2018.');
export const aplicacaoAtividadeFinalistica = writable('');
export const aplicacaoFAB = writable('');

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
export const justificativaConteudoTecnologico = writable('');

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
