<!-- 
https://github.com/simonbengtsson/jsPDF-AutoTable
https://github.com/simonbengtsson/jsPDF-AutoTable/blob/master/examples/typescript/index.ts 
https://codepen.io/someatoms/pen/vLYXWB?editors=1010
-->

<script>
    import { jsPDF } from 'jspdf'
    import autoTable from 'jspdf-autotable'    

    import { empresa, produto, data,
             orgaoDirecaoSetorial, organizacaoMilitar, 
             assessor, fotos,
             objetivo,
             aplicacaoFAB,
             aplicacaoAtividadeFinalistica,
             maturidadeTecnologica, 
             cicloTecnologicoGrau, 
             dominioTecnologicoGrau,
             conteudoTecnologico,
             disponibilidadeLogisticaGrau,
             disponibilidadeProdutivaGrau,
             dificuldadeObtencao,
             necessidadeEstrategicaGrau,
             necessidadeTaticaGrau,
             imprescindibilidade,
             fomentoOperacional,
             categorizacao,
             justificativaConteudoTecnologico,
             justificativaDificuldadeObtencao,
             justificativaImprescindibilidade
            } from "$lib/shared/stores";
    
    function obterConclusao() {
        let conclusao = 'Diante do exposto, o produto ' + $produto + ', objeto desta análise, '
        if ($categorizacao > 0)   {
            conclusao += 'poder ser classificado como PED de ' + (4 - $categorizacao).toString() +'ª categoria.';
        } else {
            conclusao += 'não pode ser classificado como PED.'
        }
        return conclusao;
    }

    function adicionarFoto(img, doc, linhaAtual) {
        const Xmax = 182;
        const Ymax = 290;
        
        const Xfig = img.naturalWidth;
        const Yfig = img.naturalHeight;

        let canvas = document.createElement("canvas");
        canvas.width = Xfig;
        canvas.height = Yfig;
        
        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);        
        const imgData = canvas.toDataURL("image/jpeg");

        let x = Xmax;        
        let y = Math.trunc(x*Yfig/Xfig);

        if (Ymax - linhaAtual < 70) { // pouco espaço vertical para inserção de figura
            doc.addPage();
            linhaAtual = 0;
        }

        if (y > Ymax - linhaAtual) {
            y = Ymax - linhaAtual;
            x = Math.trunc(y*Xfig/Yfig);
        }

        doc.addImage(imgData,"JPEG", 14, linhaAtual+3,x,y)       
        
        return linhaAtual+3+y;
    }

    
    function gerarPDF() {
        const doc = new jsPDF()          
        autoTable(doc, {
            theme: 'grid',            
            body: [
                [{ colSpan: 4, content: '1. EMISSOR', styles: { fillColor: 'gainsboro', fontStyle: 'bold'}}],                
                [ 'ODS: '+ $orgaoDirecaoSetorial , 'OM: ' + $organizacaoMilitar, 'Assessor Técnico: ' + $assessor, 'Data: ' + $data],
                [{ colSpan: 4, content: '2. OBJETIVO', styles: { fillColor: 'gainsboro', fontStyle: 'bold'}}],
                [{ colSpan: 4, content: $objetivo}],
                [{ colSpan: 4, content: '3. EMPRESA', styles: { fillColor: 'gainsboro', fontStyle: 'bold'}}],
                [{ colSpan: 4, content: $empresa}],
                [{ colSpan: 4, content: '4. PRODUTO', styles: { fillColor: 'gainsboro', fontStyle: 'bold'}}],
                [{ colSpan: 4, content: $produto}],
                [{ colSpan: 4, content: '5. APLICAÇÃO NA ATIVIDADE FINALÍSTICA DE DEFESA',  styles: { fillColor: 'gainsboro', fontStyle: 'bold'}}],
                [{ colSpan: 4, content: $aplicacaoAtividadeFinalistica}],
                [{ colSpan: 4, content: '6. POSSIBILIDADE DE APLICAÇÃO NA FAB', styles: { fillColor: 'gainsboro', fontStyle: 'bold'}}],
                [{ colSpan: 4, content: $aplicacaoFAB}],
                [{ colSpan: 4, content: '7. CLASSIFICAÇÃO E CATEGORIZAÇÃO DE PRODE/PED (Ref. Manual de Métricas)', styles: { fillColor: 'gainsboro', fontStyle: 'bold'}}],
                [{ colSpan: 4, content: '7.1 CONTEÚDO TECNOLÓGICO',  styles: { fillColor: 'lightcyan'}}],
                [{ colSpan: 4, content: 'a) TRL (nível de maturidade tecnológica): ' + $maturidadeTecnologica}],
                [{ colSpan: 4, content: 'b) domínio tecnológico: ' + $dominioTecnologicoGrau}],
                [{ colSpan: 4, content: 'c) ciclo tecnológico: '+ $cicloTecnologicoGrau}],
                [{ colSpan: 4, content: 'd) inovação: ---'}],   // TODO: verificar se é projeto
                [{ colSpan: 4, content: 'Grau da tabela: ' + $conteudoTecnologico}], // TODO: inserir --- se for -1
                [{ colSpan: 4, content: 'Justificativa: ' + $justificativaConteudoTecnologico}],
                [{ colSpan: 4, content: '7.2 DIFICULDADE DE OBTENÇÃO', styles: { fillColor: 'lightcyan'}}],
                [{ colSpan: 4, content: 'a) disponibilidade logística: ' + $disponibilidadeLogisticaGrau}],
                [{ colSpan: 4, content: 'b) disponibilidade produtiva: ' + $disponibilidadeProdutivaGrau}],
                [{ colSpan: 4, content: 'Grau da tabela: ' + $dificuldadeObtencao }],   // TODO: inserir --- se for -1
                [{ colSpan: 4, content: 'Justificativa: ' +  $justificativaDificuldadeObtencao }],
                [{ colSpan: 4, content: '7.3 IMPRESCINDIBILIDADE', styles: { fillColor: 'lightcyan'}}],
                [{ colSpan: 4, content: 'a) necessidade estratégica: ' + $necessidadeEstrategicaGrau}],
                [{ colSpan: 4, content: 'b) necessidade tática: ' + $necessidadeTaticaGrau}],
                [{ colSpan: 4, content: 'Grau da tabela: '+ $imprescindibilidade}], // TODO: inserir --- se for -1
                [{ colSpan: 4, content: 'Justificativa: '+$justificativaImprescindibilidade}],
                [{ colSpan: 4, content: '7.4 CATEGORIZAÇÃO', styles: { fillColor: 'lightcyan'}}],
                [{ colSpan: 4, content: 'a) fomento operacional (conteúdo tecnológico X imprescindibilidade): '+ $fomentoOperacional}],
                [{ colSpan: 4, content: 'b) categorização (dificuldade de obtenção X fomento operacional): '+ $categorizacao}], // TODO: texto categorização
                [{ colSpan: 4, content: '8. CONCLUSÃO', styles: { fillColor: 'gainsboro', fontStyle: 'bold'}}],
                [{ colSpan: 4, content: obterConclusao()}],
                [{ colSpan: 4, content: '9. FOTO(S) DO PRODUTO', styles: { fillColor: 'gainsboro', fontStyle: 'bold'}}],                                
            ],
        })

        window.scrollTo(0,0)

        let linhaAtual = Math.trunc(doc.lastAutoTable.finalY);

        //console.log($fotos.length);
   
        for (let i=0; i<$fotos.length; i++) {
            linhaAtual = adicionarFoto($fotos[i], doc, linhaAtual);
        }

        doc.save('relatório.pdf')
    }

</script>

<br>
<button on:click={ gerarPDF } 
        type="button" 
        class="btn variant-filled">Gerar PDF</button>    
<br>
<br>
<div class="conteudo">
    
    <table id='tabela'>
        <tbody>
            <tr><td colspan="4">1.EMISSOR</td></tr>
            <tr>
                <td>ODS: { $orgaoDirecaoSetorial }</td>
                <td>OM: { $organizacaoMilitar }</td>
                <td>Assessor Técnico: { $assessor }</td>
                <td>Data: { $data }</td>
            </tr>
            <tr><td colspan="4">2.OBJETIVO</td></tr>
            <tr><td colspan="4">{ $objetivo }</td></tr>
            <tr><td colspan="4">3.EMPRESA</td></tr>
            <tr><td colspan="4">{ $empresa }</td></tr>
            <tr><td colspan="4">4.PRODUTO</td></tr>
            <tr><td colspan="4">{ $produto }</td></tr>
            <tr><td colspan="4">5.APLICAÇÃO NA ATIVIDADE FINALÍSTICA DE DEFESA</td></tr>
            <tr><td colspan="4">{ $aplicacaoAtividadeFinalistica }</td></tr>
            <tr><td colspan="4">6.POSSIBILIDADE DE APLICAÇÃO NA FAB</td></tr>
            <tr><td colspan="4">{ $aplicacaoFAB }</td></tr>
            <tr><td colspan="4">7.CLASSIFICAÇÃO E CATEGORIZAÇÃO DE PRODE/PED</td></tr>
            <tr><td colspan="4">7.1 CONTEÚDO TECNOLÓGICO</td></tr>
            <tr><td colspan="4">a) TRL (nível de maturidade tecnológica): { $maturidadeTecnologica }</td></tr>
            <tr><td colspan="4">b) domínio tecnológico: { $dominioTecnologicoGrau }</td></tr>
            <tr><td colspan="4">c) ciclo tecnológico: { $cicloTecnologicoGrau } </td></tr>
            <tr><td colspan="4">d) inovação: </td></tr> <!-- TODO: verificar se é projeto -->
            <tr><td colspan="4">Grau da tabela: { $conteudoTecnologico } </td></tr>
            <tr><td colspan="4">Justificativa: { $justificativaConteudoTecnologico }</td></tr>
            <tr><td colspan="4">7.2 DIFICULDADE DE OBTENÇÃO</td></tr>
            <tr><td colspan="4">a) disponibilidade logística: { $disponibilidadeLogisticaGrau }</td></tr>
            <tr><td colspan="4">b) disponibilidade produtiva: { $disponibilidadeProdutivaGrau }</td></tr>
            <tr><td colspan="4">Grau da tabela: { $dificuldadeObtencao }</td></tr>
            <tr><td colspan="4">Justificativa: { $justificativaDificuldadeObtencao }</td></tr>
            <tr><td colspan="4">7.3 IMPRESCINDIBILIDADE</td></tr>
            <tr><td colspan="4">a) necessidade estratégica: { $necessidadeEstrategicaGrau }</td></tr>
            <tr><td colspan="4">b) necessidade tática: { $necessidadeTaticaGrau }</td></tr>
            <tr><td colspan="4">Grau da tabela: { $imprescindibilidade } </td></tr>
            <tr><td colspan="4">Justificativa: { $justificativaImprescindibilidade }</td></tr>
            <tr><td colspan="4">7.4 CATEGORIZAÇÃO</td></tr>
            <tr><td colspan="4">a) fomento operacional (conteúdo tecnológico X imprescindibilidade): { $fomentoOperacional }</td></tr>
            <tr><td colspan="4">b) categorização (dificuldade de obtenção X fomento operacional): { $categorizacao }</td></tr>
            <tr><td colspan="4">8 CONCLUSÃO</td></tr>
            <tr><td colspan="4">{ obterConclusao() }</td></tr>
            <tr><td colspan="4">9 FOTO(S) DO PRODUTO</td></tr>
        </tbody>    
    </table>    
</div>

{#each $fotos as foto}
    <img src="{foto.src}" alt=""><br>
{/each}    

<style>
    table, td {
        border: 1px solid;
        border-collapse: collapse;
        margin-bottom: 10px;
    }
    .conteudo {
        display: flex;
        justify-content: center;
    }
</style>
