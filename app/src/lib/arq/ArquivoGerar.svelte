<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { Modal, modalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings } from '@skeletonlabs/skeleton';

    const dispatch = createEventDispatcher();

    import { empresa, produto, data, 
             orgaoDirecaoSetorial, organizacaoMilitar, 
             assessor, objetivo,             
             aplicacaoFAB, aplicacaoAtividadeFinalistica,
             maturidadeTecnologica, 
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
             categorizacao,
             justificativaConteudoTecnologico,
             justificativaDificuldadeObtencao,
             justificativaImprescindibilidade
            } from "$lib/shared/stores";

    const jsonData = {
        'empresa': $empresa, 
        'produto': $produto, 
        'orgaoDirecaoSetorial': $orgaoDirecaoSetorial,
        'organizacaoMilitar': $organizacaoMilitar,
        'assessor': $assessor,  
        'data': $data,
        'objetivo': $objetivo,                  
        'maturidadeTecnologica': $maturidadeTecnologica,
        'cicloTecnologico': $cicloTecnologico,
        'dominioTecnologico': $dominioTecnologico,
        'disponibilidadeLogistica': $disponibilidadeLogistica,
        'disponibilidadeProdutiva': $disponibilidadeProdutiva,
        'necessidadeEstrategica': $necessidadeEstrategica,
        'necessidadeTatica': $necessidadeTatica,
        calculados: {
            'conteudoTecnologico': $conteudoTecnologico,
            'dificuldadeObtencao': $dificuldadeObtencao,
            'imprescindibilidade': $imprescindibilidade,
            'fomentoOperacional': $fomentoOperacional,
            'categorizacao': $categorizacao
        },
        justificativas: {
            'aplicacaoAtividadeFinalistica': $aplicacaoAtividadeFinalistica,
            'aplicacaoFAB': $aplicacaoFAB,            
            'conteudoTecnologico' : $justificativaConteudoTecnologico,
            'dificuldadeObtencao': $justificativaDificuldadeObtencao,
            'imprescindibilidade': $justificativaImprescindibilidade,
        }
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