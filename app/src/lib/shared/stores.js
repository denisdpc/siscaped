import { writable } from 'svelte/store';

export const maturidadeTecnologica = writable(0);

export const cicloTecnologico = writable(0);
export const dominioTecnologico = writable(0);
export const conteudoTecnologico = writable(-1);
export const justificativaConteudoTecnologico = writable('');

export const disponibilidadeLogistica = writable(0);
export const disponibilidadeProdutiva = writable(0);
export const dificuldadeObtencao = writable(-1);
export const justificativaDificuldadeObtencao = writable('');

export const necessidadeEstrategica = writable(0);
export const necessidadeTatica = writable(0);
export const imprescindibilidade = writable(-1);
export const justificativaImprescindibilidade = writable('');

export const fomentoOperacional = writable(-1);
export const categorizacao = writable(-1);