<script>
    import '$lib/css/tabelaEstilo.css'
    import { imprescindibilidade, conteudoTecnologico, 
             dificuldadeObtencao, fomentoOperacional } from '$lib/shared/stores';  
</script>

<table>
    <tr>
        <td>
            <table class="tg">
                <thead>
                    <tr>
                    <th class="tg-0pky1" colspan="2" rowspan="2">FOMENTO OPERACIONAL</th>
                    <th class="tg-0pky1" colspan="4">imprescindibilidade</th>
                    </tr>
                    <tr>
                      <th class={ $imprescindibilidade===3 ? 'selecionado tg-0pky' : 'tg-0pky'}>3</th>
                      <th class={ $imprescindibilidade===2 ? 'selecionado tg-0pky' : 'tg-0pky'}>2</th>
                      <th class={ $imprescindibilidade===1 ? 'selecionado tg-0pky' : 'tg-0pky'}>1</th>
                      <th class={ $imprescindibilidade===0 ? 'selecionado tg-0pky' : 'tg-0pky'}>0</th>                      
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td class="tg-0pky1" rowspan="4">conteúdo tecnológico</td>
                      <td class={ $conteudoTecnologico===3 ? 'selecionado tg-0pky' : 'tg-0pky'}>3</td>
                      <td class={ $imprescindibilidade===3 && $conteudoTecnologico===3 ? 'selecionado tg-0pky' : 'tg-0pky'}>3</td>
                      <td class={ $imprescindibilidade===2 && $conteudoTecnologico===3 ? 'selecionado tg-0pky' : 'tg-0pky'}>3</td>
                      <td class={ $imprescindibilidade===1 && $conteudoTecnologico===3 ? 'selecionado tg-0pky' : 'tg-0pky'}>2</td>
                      <td class={ $imprescindibilidade===0 && $conteudoTecnologico===3 ? 'selecionado tg-0pky' : 'tg-0pky'}>1</td>
                    </tr>
                    <tr>
                      <td class={ $conteudoTecnologico===2 ? 'selecionado' : 'tg-0pky'}>2</td>
                      <td class={ $imprescindibilidade===3 && $conteudoTecnologico===2 ? 'selecionado tg-0pky' : 'tg-0pky'}>3</td>
                      <td class={ $imprescindibilidade===2 && $conteudoTecnologico===2 ? 'selecionado tg-0pky' : 'tg-0pky'}>2</td>
                      <td class={ $imprescindibilidade===1 && $conteudoTecnologico===2 ? 'selecionado tg-0pky' : 'tg-0pky'}>2</td>

                      
                      <td class={ $imprescindibilidade===0 && $conteudoTecnologico===2 ? 'selecionado tg-0pky' : 'tg-0pky'}>1</td>
                    </tr>
                    <tr>
                      <td class={ $conteudoTecnologico===1 ? 'selecionado tg-0pky' : 'tg-0pky'}>1</td>
                      <td class={ $imprescindibilidade===3 && $conteudoTecnologico===1 ? 'selecionado tg-0pky' : 'tg-0pky'}>2</td>
                      <td class={ $imprescindibilidade===2 && $conteudoTecnologico===1 ? 'selecionado tg-0pky' : 'tg-0pky'}>2</td>
                      <td class={ $imprescindibilidade===1 && $conteudoTecnologico===1 ? 'selecionado tg-0pky' : 'tg-0pky'}>1</td>
                      <td class={ $imprescindibilidade===0 && $conteudoTecnologico===1 ? 'selecionado tg-0pky' : 'tg-0pky'}>1</td>
                    </tr>
                    <tr>
                      <td class={ $conteudoTecnologico===0 ? 'selecionado tg-0pky' : 'tg-0pky'}>0</td>
                      <td class={ $imprescindibilidade===3 && $conteudoTecnologico===0 ? 'selecionado tg-0pky' : 'tg-0pky'}>1</td>
                      <td class={ $imprescindibilidade===2 && $conteudoTecnologico===0 ? 'selecionado tg-0pky' : 'tg-0pky'}>1</td>
                      <td class={ $imprescindibilidade===1 && $conteudoTecnologico===0 ? 'selecionado tg-0pky' : 'tg-0pky'}>1</td>
                      <td class={ $imprescindibilidade===0 && $conteudoTecnologico===0 ? 'selecionado tg-0pky' : 'tg-0pky'}>0</td>
                    </tr>
                </tbody>
            </table>                
        </td>
        <td>-----------</td>
        <td>
            <table class="tg">
                <thead>
                  <tr>
                    <th class="tg-0pky1" colspan="2" rowspan="2">CATEGORIZAÇÃO<br></th>
                    <th class="tg-0pky1" colspan="4">fomento operacional</th>
                  </tr>
                  <tr>
                    <th class={ $fomentoOperacional===3 ? 'selecionado tg-0pky' : 'tg-0pky'}>3</th>
                    <th class={ $fomentoOperacional===2 ? 'selecionado tg-0pky' : 'tg-0pky'}>2</th>
                    <th class={ $fomentoOperacional===1 ? 'selecionado tg-0pky' : 'tg-0pky'}>1</th>
                    <th class={ $fomentoOperacional===0 ? 'selecionado tg-0pky' : 'tg-0pky'}>0</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="tg-0pky1" rowspan="4">dificuldade de obtenção</td>
                    <td class={ $dificuldadeObtencao===3 ? 'selecionado tg-0pky' : 'tg-0pky'}>3</td>                    
                    <td class={ $dificuldadeObtencao===3 && $fomentoOperacional===3 ? 'selecionado tg-0pky' : 'tg-0pky'}>3</td>                    
                    <td class={ $dificuldadeObtencao===3 && $fomentoOperacional===2 ? 'selecionado tg-0pky' : 'tg-0pky'}>3</td>                    
                    <td class={ $dificuldadeObtencao===3 && $fomentoOperacional===1 ? 'selecionado tg-0pky' : 'tg-0pky'}>2</td>                    
                    <td class={ $dificuldadeObtencao===3 && $fomentoOperacional===0 ? 'selecionado tg-0pky' : 'tg-0pky'}>1</td>                                        
                  </tr>
                  <tr>
                    <td class={ $dificuldadeObtencao===2 ? 'selecionado tg-0pky' : 'tg-0pky'}>2</td>
                    <td class={ $dificuldadeObtencao===2 && $fomentoOperacional===3 ? 'selecionado tg-0pky' : 'tg-0pky'}>3</td>                    
                    <td class={ $dificuldadeObtencao===2 && $fomentoOperacional===2 ? 'selecionado tg-0pky' : 'tg-0pky'}>2</td>                    
                    <td class={ $dificuldadeObtencao===2 && $fomentoOperacional===1 ? 'selecionado tg-0pky' : 'tg-0pky'}>2</td>                    
                    <td class={ $dificuldadeObtencao===2 && $fomentoOperacional===0 ? 'selecionado tg-0pky' : 'tg-0pky'}>1</td>                                        
                  </tr>
                  <tr>
                    <td class={ $dificuldadeObtencao===1 ? 'selecionado tg-0pky' : 'tg-0pky'}>1</td>
                    <td class={ $dificuldadeObtencao===1 && $fomentoOperacional===3 ? 'selecionado tg-0pky' : 'tg-0pky'}>2</td>                    
                    <td class={ $dificuldadeObtencao===1 && $fomentoOperacional===2 ? 'selecionado tg-0pky' : 'tg-0pky'}>2</td>                    
                    <td class={ $dificuldadeObtencao===1 && $fomentoOperacional===1 ? 'selecionado tg-0pky' : 'tg-0pky'}>1</td>                    
                    <td class={ $dificuldadeObtencao===1 && $fomentoOperacional===0 ? 'selecionado tg-0pky' : 'tg-0pky'}>1</td>                                        
                  </tr>
                  <tr>
                    <td class={ $dificuldadeObtencao===0 ? 'selecionado tg-0pky' : 'tg-0pky'}>0</td>
                    <td class={ $dificuldadeObtencao===0 && $fomentoOperacional===3 ? 'selecionado tg-0pky' : 'tg-0pky'}>1</td>                    
                    <td class={ $dificuldadeObtencao===0 && $fomentoOperacional===2 ? 'selecionado tg-0pky' : 'tg-0pky'}>1</td>                    
                    <td class={ $dificuldadeObtencao===0 && $fomentoOperacional===1 ? 'selecionado tg-0pky' : 'tg-0pky'}>1</td>                    
                    <td class={ $dificuldadeObtencao===0 && $fomentoOperacional===0 ? 'selecionado tg-0pky' : 'tg-0pky'}>0</td>                                        
                  </tr>
                </tbody>
            </table>
        </td>
    </tr>
</table>


