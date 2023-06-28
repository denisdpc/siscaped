<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { Modal, modalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';

    const dispatch = createEventDispatcher();

    import { maturidadeTecnologica, 
             cicloTecnologico, 
             dominioTecnologico,
             conteudoTecnologico,
             disponibilidadeLogistica,
             disponibilidadeProdutiva,
             dificuldadeObtencao,
             necessidadeEstrategica,
             necessidadeTatica,
             imprescindibilidade,
             fomentoOperacional,
             categorizacao
            } from "$lib/shared/stores";

    const jsonData = {
        maturidadeTecnologica: $maturidadeTecnologica,
        cicloTecnologico: $cicloTecnologico,
        dominioTecnologico: $dominioTecnologico,
        conteudoTecnologico: $conteudoTecnologico,
        disponibilidadeLogistica: $disponibilidadeLogistica,
        disponibilidadeProdutiva: $disponibilidadeProdutiva,
        dificuldadeObtencao: $dificuldadeObtencao,
        necessidadeEstrategica: $necessidadeEstrategica,
        necessidadeTatica: $necessidadeTatica,
        imprescindibilidade: $imprescindibilidade,
        fomentoOperacional: $fomentoOperacional,
        categorizacao: $categorizacao
    };
        
    new Promise<boolean>((resolve) => {
        const modal: ModalSettings = {
            type: 'prompt',
            title: 'Nome do arquivo',
        	valueAttr: { type: 'text', minlength: 3, maxlength: 10, required: true },
            response: (r: boolean) => {
                resolve(r);
            }
        };
        modalStore.trigger(modal);
    }).then((r: any) => {
        console.log('resolved response:', r);
        if (r) {
            const content = JSON.stringify(jsonData);
            const a = document.createElement("a");
            const file = new Blob([content], {type: "text/plain"});
            a.href = URL.createObjectURL(file);
            a.download = r.concat('.ped');
            a.click();
        }        
        
        dispatch('message', {
            text: 'fecharJanela'
        });
    });
	

</script>

<Modal />