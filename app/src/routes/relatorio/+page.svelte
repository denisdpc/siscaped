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
             assessor, arqFotos,
             objetivo,
             aplicacaoFAB,
             aplicacaoAtividadeFinalistica,
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
    
    function obterConclusao() {
        let conclusao = 'Diante do exposto, o produto ' + $produto + ', objeto desta análise, '
        if ($categorizacao > 0)   {
            conclusao += 'poder ser classificado como PED de ' + (4 - $categorizacao).toString() +'ª categoria.';
        } else {
            conclusao += 'não pode ser classificado como PED.'
        }
        return conclusao;
    }

    function gerarPDF() {
        const doc = new jsPDF()  
        //const doc = new jsPDF("l", "mm", "a4");      
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
                [{ colSpan: 4, content: 'b) domínio tecnológico: ' + $dominioTecnologico}],
                [{ colSpan: 4, content: 'c) ciclo tecnológico: '+ $cicloTecnologico}],
                [{ colSpan: 4, content: 'd) inovação: ---'}],   // TODO: verificar se é projeto
                [{ colSpan: 4, content: 'Grau da tabela: ' + $conteudoTecnologico}], // TODO: inserir --- se for -1
                [{ colSpan: 4, content: 'Justificativa: ' + $justificativaConteudoTecnologico}],
                [{ colSpan: 4, content: '7.2 DIFICULDADE DE OBTENÇÃO', styles: { fillColor: 'lightcyan'}}],
                [{ colSpan: 4, content: 'a) disponibilidade logística: ' + $disponibilidadeLogistica}],
                [{ colSpan: 4, content: 'b) disponibilidade produtiva: ' + $disponibilidadeProdutiva}],
                [{ colSpan: 4, content: 'Grau da tabela: ' + $dificuldadeObtencao }],   // TODO: inserir --- se for -1
                [{ colSpan: 4, content: 'Justificativa: ' +  $justificativaDificuldadeObtencao }],
                [{ colSpan: 4, content: '7.3 IMPRESCINDIBILIDADE', styles: { fillColor: 'lightcyan'}}],
                [{ colSpan: 4, content: 'a) necessidade estratégica: ' + $necessidadeEstrategica}],
                [{ colSpan: 4, content: 'b) necessidade tática: ' + $necessidadeTatica}],
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

        let arq = $arqFotos[0];
        let reader = new FileReader();
        reader.readAsDataURL(arq);
        let img = document.getElementById("image-preview");

        reader.onload = function() {                
            img.src = reader.result;
            console.log("Image size:", img.naturalWidth, "x", img.naturalHeight);            
        }

        const Xfig = img.naturalWidth;
        const Yfig = img.naturalHeight;

        let canvas = document.createElement("canvas");
        // canvas.width = img.width+460;
        // canvas.height = img.height+306;
        canvas.width = Xfig;
        canvas.height = Yfig;
        
        //console.log('CANVAS: Y (' + canvas.height + ') - X ('+ canvas.width + ')')
        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);        
        const imgData = canvas.toDataURL("image/jpeg");

        //const pageWidth = doc.internal.pageSize.getWidth();
        //const pageHeight = doc.internal.pageSize.getHeight();
        
        //doc.addImage(imgData,"JPEG", 14, doc.lastAutoTable.finalY+3,60,60,'imagem','MEDIUM')
        //doc.addImage(imgData,"JPEG", 14, doc.lastAutoTable.finalY+3)
        //doc.addImage(imgData,"JPEG", 14, doc.lastAutoTable.finalY+3,96,64)
      
        const Xmax = 182;
        const Ymax = 290;

        let linhaAtual = Math.trunc(doc.lastAutoTable.finalY);
        let x = Xmax;
        //let y = Math.trunc(x*64/96);
        let y = Math.trunc(x*Yfig/Xfig);


        if (Ymax - linhaAtual < 70) { // pouco espaço vertical para inserção de figura
            doc.addPage();
        }

        if (y > Ymax - linhaAtual) {
            y = Ymax - linhaAtual;
            x = Math.trunc(y*Xfig/Yfig);
        }
        


        //console.log('FINAL Y: ' + Math.trunc(doc.lastAutoTable.finalY));

        doc.addImage(imgData,"JPEG", 14, doc.lastAutoTable.finalY+3,x,y)
        //doc.addImage(imgData,"JPEG", 14, doc.lastAutoTable.finalY+3,Xmax,y)


        //doc.addImage(imgData,"JPEG", 14, doc.lastAutoTable.finalY+5+y,Xmax,y)
        
        // adicionar página
        //doc.addPage()
        //doc.addImage(imgData,"JPEG", 14, 10,Xmax,y)
        

        doc.save('table.pdf')
    }
    
    function gerarRelatorio() {
        const doc = new jsPDF()        

        let arq = $arqFotos[0];
        let reader = new FileReader();
        reader.readAsDataURL(arq);
        let img = document.getElementById("image-preview");

        reader.onload = function() {            
            img.src = reader.result;            
        }

        doc.autoTable({
            html: '#tabela', // id of the HTML table element
            bodyStyles: {minCellHeight: 15}, // set minimum cell height
            didDrawCell: function (data) { // hook to insert image
                if (data.column.index === 5 && data.cell.section === 'body') { // check if column index is 5 and section is body
                var td = data.cell.raw; // get original cell data
                //var img = td.getElementsByTagName('img')[0]; // get image element from HTML data
                var dim = data.cell.height - data.cell.padding('vertical'); // calculate image dimension
                var textPos = data.cell.textPos; // get default text position
                //doc.addImage(img.src, 'JPEG', textPos.x, textPos.y, dim, dim); // add image to PDF document
                }
            }
        });
    
        doc.save('relatorio.pdf')

    }

</script>

relatorio
<br>
<button on:click={ gerarPDF } 
        type="button" 
        class="btn variant-filled">Gerar PDF</button>    
<button on:click={ gerarRelatorio } 
        type="button" 
        class="btn variant-filled">Gerar RELATORIO</button>    
<br>
<br>
<table id='tabela'>
    <tbody>
        <tr>
            <td>Empresa</td><td>-----</td>
            <td>Produto</td><td>-----</td>
            <td>OM</td><td>------</td>
            <td>Analista</td><td>-----</td>
        </tr>
        <tr><td>Maturidade Tecnológica</td><td>6</td></tr>
    </tbody>    
</table>

<!-- <img id="image-preview" 
     src="https://via.placeholder.com/400"
     style="width:400px"
     class="rounded rounded-circle" alt="placeholder"> -->
     <img id="image-preview">

<div id='estilo'>
    <style>
        table, th, td {
            border: 1px solid;
            border-collapse: collapse;
            margin-bottom: 10px;
        }
    </style>
</div>