<script lang="ts">
    import { FileDropzone } from '@skeletonlabs/skeleton';
    import { arqFotos } from '$lib/shared/stores'


    let files: FileList;

    async function upload() {
        console.log("upload");
        const arquivos = await files;

        $arqFotos = arquivos;

        let file = arquivos[0];
        let reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = function() {
            let img = document.getElementById("image-preview");
            img.src = reader.result;
        }

        // for (let i=0; i<conteudo.length; i++) {
        //     console.log(conteudo[i]);
        // }

        //console.log(conteudo);
    }
</script>

<FileDropzone name="files" accept=".jpg" multiple="true" on:change={upload} bind:files={files}>	
	<svelte:fragment slot="message">Localizar arquivos de foto</svelte:fragment>
	<svelte:fragment slot="meta">JPG</svelte:fragment>
</FileDropzone>

<br>
<br>
<img id="image-preview" 
     src="https://via.placeholder.com/400"
     style="width:400px"
     class="rounded rounded-circle" alt="placeholder">
