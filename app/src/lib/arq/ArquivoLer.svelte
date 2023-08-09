<script lang="ts">
    import { FileButton } from '@skeletonlabs/skeleton';

    import { empresa, produto, data,
             orgaoDirecaoSetorial, organizacaoMilitar, 
             assessor,
             objetivo,
             aplicacaoFAB,
             aplicacaoAtividadeFinalistica,
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

    let files: FileList;

    async function upload() {
        const f = files[0];
        const conteudo = await f.text();
        const jsonData = JSON.parse(conteudo);
        
        $empresa = jsonData['empresa']
        $produto = jsonData['produto']
        $orgaoDirecaoSetorial = jsonData['orgaoDirecaoSetorial']
        $organizacaoMilitar = jsonData['organizacaoMilitar']
        $assessor = jsonData['assessor']    
        $data = jsonData['data']
        
        $objetivo = jsonData['objetivo']

        $maturidadeTecnologica = jsonData['maturidadeTecnologica']
        $cicloTecnologico = jsonData['cicloTecnologico']
        $cicloTecnologicoGrau = jsonData['cicloTecnologicoGrau']
        $dominioTecnologico = jsonData['dominioTecnologico']
        $dominioTecnologicoGrau = jsonData['dominioTecnologicoGrau']
        $disponibilidadeLogistica = jsonData['disponibilidadeLogistica']
        $disponibilidadeLogisticaGrau = jsonData['disponibilidadeLogisticaGrau']
        $disponibilidadeProdutiva = jsonData['disponibilidadeProdutiva']
        $disponibilidadeProdutivaGrau = jsonData['disponibilidadeProdutivaGrau']
        $necessidadeEstrategica = jsonData['necessidadeEstrategica']
        $necessidadeEstrategicaGrau = jsonData['necessidadeEstrategicaGrau']
        $necessidadeTatica = jsonData['necessidadeTatica']
        $necessidadeTaticaGrau = jsonData['necessidadeTaticaGrau'];
        
        const calculados = jsonData['calculados'];
        $conteudoTecnologico = calculados['conteudoTecnologico'];
        $dificuldadeObtencao = calculados['dificuldadeObtencao'];
        $imprescindibilidade = calculados['imprescindibilidade'];
        $fomentoOperacional = calculados['fomentoOperacional'];
        $categorizacao = calculados['categorizacao'];
        
        const justificaticas = jsonData['justificativas'];        
        $aplicacaoAtividadeFinalistica = justificaticas['aplicacaoAtividadeFinalistica'];
        $aplicacaoFAB = justificaticas['aplicacaoFAB'];        
        $justificativaConteudoTecnologico = justificaticas['conteudoTecnologico'];
        $justificativaDificuldadeObtencao = justificaticas['dificuldadeObtencao'];
        $justificativaImprescindibilidade = justificaticas['imprescindibilidade'];
        
        carregarFotos(jsonData['fotos']);        
    }

    function carregarFotos(fotos) {
        $fotos = [];
        for (const i in fotos) {
            let img = document.createElement('img')
            img.setAttribute('id',fotos[i].id);
            img.src = fotos[i].src;
            $fotos.push(img);                                 
        }
        $fotos = $fotos;
    }

</script>

<FileButton type="file" name="files" button="variant-filled"
    accept=".ped" on:change={upload} bind:files={files}>ler arquivo</FileButton>
