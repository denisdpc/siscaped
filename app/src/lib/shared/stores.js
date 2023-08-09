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
export const justificativaDificuldadeObtencao = writable('');

export const necessidadeEstrategica = writable(0);
export const necessidadeEstrategicaGrau = writable('');
export const necessidadeTatica = writable(0);
export const necessidadeTaticaGrau = writable('');
export const imprescindibilidade = writable(-1);
export const justificativaImprescindibilidade = writable('');

export const fomentoOperacional = writable(-1);
export const categorizacao = writable(-1);

export const fotos = writable([]);