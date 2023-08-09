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
             cicloTecnologico, cicloTecnologicoGrau,
             dominioTecnologico, dominioTecnologicoGrau,
             conteudoTecnologico,
             disponibilidadeLogistica, disponibilidadeLogisticaGrau,
             disponibilidadeProdutiva, disponibilidadeProdutivaGrau,
             dificuldadeObtencao,
             necessidadeEstrategica, necessidadeEstrategicaGrau,
             necessidadeTatica, necessidadeTaticaGrau,
             imprescindibilidade,
             fomentoOperacional,
             categorizacao,
             justificativaConteudoTecnologico,
             justificativaDificuldadeObtencao,
             justificativaImprescindibilidade,
             fotos
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
        'cicloTecnologicoGrau': $cicloTecnologicoGrau,
        'dominioTecnologico': $dominioTecnologico,
        'dominioTecnologicoGrau': $dominioTecnologicoGrau,
        'disponibilidadeLogistica': $disponibilidadeLogistica,
        'disponibilidadeLogisticaGrau': $disponibilidadeLogisticaGrau,
        'disponibilidadeProdutiva': $disponibilidadeProdutiva,
        'disponibilidadeProdutivaGrau': $disponibilidadeProdutivaGrau,
        'necessidadeEstrategica': $necessidadeEstrategica,
        'necessidadeEstrategicaGrau': $necessidadeEstrategicaGrau,
        'necessidadeTatica': $necessidadeTatica,
        'necessidadeTaticaGrau': $necessidadeTaticaGrau,
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
        },
        fotos: getJSONfotos()
    };

    function getJSONfotos() {
        let fotos = []
        for (const i in $fotos) {
            fotos.push({'id': $fotos[i].id, 'src': $fotos[i].src})                 
        }
        return fotos;        
    }   
        
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

<Modal buttonTextSubmit={"Gerar"} buttonTextCancel={"Cancelar"} />