<script lang="ts">
    import { FileButton } from '@skeletonlabs/skeleton';

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

    let files: FileList;

    async function upload() {
        const f = files[0];
        const conteudo = await f.text();
        const jsonData = JSON.parse(conteudo);
        
        $maturidadeTecnologica = jsonData['maturidadeTecnologica']
        $cicloTecnologico = jsonData['cicloTecnologico']
        $dominioTecnologico = jsonData['dominioTecnologico']
        $conteudoTecnologico = jsonData['conteudoTecnologico']
        $disponibilidadeLogistica = jsonData['disponibilidadeLogistica']
        $disponibilidadeProdutiva = jsonData['disponibilidadeProdutiva']
        $dificuldadeObtencao = jsonData['dificuldadeObtencao']
        $necessidadeEstrategica = jsonData['necessidadeEstrategica']
        $necessidadeTatica = jsonData['necessidadeTatica']
        $imprescindibilidade = jsonData['imprescindibilidade']
        $fomentoOperacional = jsonData['fomentoOperacional']
        $categorizacao = jsonData['categorizacao']             
    }
</script>

<FileButton type="file" name="files" button="variant-soft-primary"
    accept=".ped" on:change={upload} bind:files={files}>ler arquivo</FileButton>
