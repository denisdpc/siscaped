<!-- https://github.com/simonbengtsson/jsPDF-AutoTable
https://github.com/simonbengtsson/jsPDF-AutoTable/blob/master/examples/typescript/index.ts -->

<script>
    import { jsPDF } from 'jspdf'
    import autoTable from 'jspdf-autotable'

    import { empresa, produto, data,
             orgaoDirecaoSetorial, organizacaoMilitar, 
             assessor,
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
                [{ colSpan: 4, content: 'Pneu, astronauta, violino. Na imensidão cósmica, um astronauta solitário dedilha notas de violino, enquanto um pneu flutua ao redor, desafiando a gravidade.'}],
                [{ colSpan: 4, content: '9. FOTO(S) DO PRODUTO', styles: { fillColor: 'gainsboro', fontStyle: 'bold'}}],                
                [{ colSpan: 4, content: 'Pneu, astronauta, violino. Na imensidão cósmica, um astronauta solitário dedilha notas de violino, enquanto um pneu flutua ao redor, desafiando a gravidade.'}],
            ],
        })
        const tabelaElemento = document.getElementById('tabela')
        doc.save('table.pdf')
    }
    
</script>

relatorio
<br>
<button on:click={ gerarPDF } 
        type="button" 
        class="btn variant-filled">Gerar PDF</button>    
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

<div id='estilo'>
    <style>
        table, th, td {
            border: 1px solid;
            border-collapse: collapse;
            margin-bottom: 10px;
        }
    </style>
</div>