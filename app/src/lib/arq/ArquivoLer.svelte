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
             categorizacao,
             justificativaConteudoTecnologico,
             justificativaDificuldadeObtencao,
             justificativaImprescindibilidade
            } from "$lib/shared/stores";

    let files: FileList;

    async function upload() {
        const f = files[0];
        const conteudo = await f.text();
        const jsonData = JSON.parse(conteudo);
        
        $maturidadeTecnologica = jsonData['maturidadeTecnologica']
        $cicloTecnologico = jsonData['cicloTecnologico']
        $dominioTecnologico = jsonData['dominioTecnologico']
        $disponibilidadeLogistica = jsonData['disponibilidadeLogistica']
        $disponibilidadeProdutiva = jsonData['disponibilidadeProdutiva']
        $necessidadeEstrategica = jsonData['necessidadeEstrategica']
        $necessidadeTatica = jsonData['necessidadeTatica']
        
        const calculados = jsonData['calculados'];
        $conteudoTecnologico = calculados['conteudoTecnologico'];
        $dificuldadeObtencao = calculados['dificuldadeObtencao'];
        $imprescindibilidade = calculados['imprescindibilidade'];
        $fomentoOperacional = calculados['fomentoOperacional'];
        $categorizacao = calculados['categorizacao'];
        
        const justificaticas = jsonData['justificativas'];        
        $justificativaConteudoTecnologico = justificaticas['conteudoTecnologico'];
        $justificativaDificuldadeObtencao = justificaticas['dificuldadeObtencao'];
        $justificativaImprescindibilidade = justificaticas['imprescindibilidade'];
    }
</script>

<FileButton type="file" name="files" button="variant-filled"
    accept=".ped" on:change={upload} bind:files={files}>ler arquivo</FileButton>
