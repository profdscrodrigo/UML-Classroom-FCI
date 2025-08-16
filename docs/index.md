<h2><a href= "https://www.mackenzie.br">Universidade Presbiteriana Mackenzie</a></h2>
<h3><a href= "https://www.mackenzie.br/graduacao/sao-paulo-higienopolis/sistemas-de-informacao">Sistemas de Informação</a></h3>


<font size="+12"><center>

**Drone Bélico 🛩️**

**Conteúdo**

- [Autores](#autores)
- [Descrição do Projeto](#descrição-do-projeto)
- [Análise de Requisitos Funcionais e Não-Funcionais](#análise-de-requisitos-funcionais-e-não-funcionais)
- [Diagrama de Atividades](#diagrama-de-atividades)
- [Diagrama de Casos de Uso](#diagrama-de-casos-de-uso)
- [Descrição dos Casos de Uso](#descrição-dos-casos-de-uso)
- [Diagrama de Sequência](#diagrama-de-sequência)
- [Diagrama de Classes](#diagrama-de-classes)
- [Diagrama de Estados](#diagrama-de-estados)
- [Diagrama de Implantação](#diagrama-de-implantação)
- [Referências](#referências)


# Autores

* Aluno 1 : Lendy Naiara Carpio Pacheco - 10428525
* Aluno 2 : Rafael de Souza Alves de Lima - 10425819
* Aluno 3 : Daniela Pereira da Silva - 10410906
* Aluno 4 : Caio Henrique Santos Carvalho - 10425408


# Descrição do Projeto

O projeto visa garantir uma solução tecnológica eficiente e inovadora para operações militares, incluindo funcionalidades avançadas de monitoramento, navegação e segurança.


# Análise de Requisitos Funcionais e Não-Funcionais
 **Requisitos Funcionais**

Os requisitos funcionais definem as principais funcionalidades do sistema:
* **Gerenciamento da Frota:** Permitir o monitoramento e controle simultâneo de múltiplos drones, exibindo status e telemetria em tempo real.
* **Operação Remota e Autônoma:** Controlar drones manualmente via interface ou permitir operação autônoma por meio de inteligência artificial.
* **Navegação Inteligente:** Utilizar sensores como LIDAR, GPS e câmeras para mapear o ambiente, evitar obstáculos e ajustar rotas dinamicamente.
* **Comunicação Segura e Estável:** Garantir conexão confiável entre drones e servidores, com protocolos seguros e redundância para evitar falhas.
* **Registro e Auditoria:** Armazenar dados de missões, trajetórias e eventos críticos com criptografia e logs de auditoria.
* **Segurança Avançada:** Implementar autenticação multifator e monitoramento contínuo para prevenir acessos não autorizados.

**Requisitos Não Funcionais**

Os requisitos não funcionais garantem qualidade e confiabilidade do sistema:
* **Desempenho:** O sistema deve processar dados e comandos dos drones em tempo real.
* **Segurança:** Implementação de criptografia avançada e autenticação robusta.
* **Disponibilidade:** Infraestrutura distribuída para alta disponibilidade e failover automático.
* **Usabilidade:** Interface intuitiva para operação eficiente por militares e técnicos.


# Diagrama de Atividades

![Diagrama de Atividades](https://github.com/grupo4G/UML-01-FCI/blob/62eb0e77bf56ec806b219f41d03e8b25aab93065/docs/img/Diagrama.png)


# Diagrama de Casos de Uso

![Diagrama de Caso de Uso](https://github.com/grupo4G/UML-01-FCI/blob/62eb0e77bf56ec806b219f41d03e8b25aab93065/docs/img/DiagramaDeCasoDeUso.png)


# Descrição dos Casos de Uso

## Caso de Uso: Autenticar Acesso ao Sistema

| Campo                  | Autenticar Acesso ao Sistema                                              |
|------------------------|---------------------------------------------------------------------------|
| **Nome do Caso de Uso** | Autenticar Acesso ao Sistema                                              |
| **Ator Principal**      | Operador Militar                                                          |
| **Atores Secundários**  | Sistema de Autenticação                                                   |
| **Resumo**              | Este caso de uso descreve as etapas para autenticar o operador no sistema, garantindo acesso seguro. |
| **Pré-condições**       | O operador precisa estar previamente cadastrado.                          |
| **Pós-condições**       | O operador terá acesso autorizado ao sistema.                             |
| ***FLUXO PRINCIPAL*** |   
| Ações do Ator                                | Ações do Sistema                                                     |
| 1. Operador acessa a interface de login      | 2. Sistema solicita autenticação com senha ou biometria             |
| 3. Operador insere suas credenciais          | 4. Sistema valida os dados                                          |
|                                             | 5. Caso válidos, acesso é concedido ao operador                     |                                              
| ***FLUXOS ALTERNATIVOS*** |
| Código | Descrição                                                                 |
| A1     | Se o operador errar as credenciais, o sistema registra a tentativa mal sucedida. |
| A2     | Após múltiplas tentativas incorretas, o sistema bloqueia o acesso do operador.    |
|***FLUXOS DE EXCEÇÃO*** |
| Código | Descrição                                                                 |
| E1     | Falha de comunicação com o servidor de autenticação impede o login.       |
| E2     | Biometria inválida ou erro no segundo fator de autenticação.              |
|***RESTRIÇÕES E VALIDAÇÕES*** |- O operador deve possuir cadastro válido.<br>- O sistema deve seguir as políticas de autenticação segura (biometria, múltiplos fatores).<br>- Registro de logs para cada tentativa de acesso deve ser mantido.|


## Caso de Uso: Bloquear Sistema após Tentativas de Erro

| Campo                   | Bloquear Sistema após Tentativas de Erro                                       |
|-------------------------|---------------------------------------------------------------------------------|
| **Nome do Caso de Uso** | Bloquear Sistema após Tentativas de Erro                                       |
| **Ator Principal**      | Sistema de Autenticação                                                         |
| **Atores Secundários**  | Operador Militar                                                                |
| **Resumo**              | Este caso de uso descreve o bloqueio automático do sistema após múltiplas tentativas de autenticação mal sucedidas, garantindo a segurança do acesso. |
| **Pré-condições**       | O operador deve ter tentado autenticar-se várias vezes com falha.               |
| **Pós-condições**       | O acesso do operador é temporariamente bloqueado até que seja desbloqueado por um administrador. |
| ***FLUXO PRINCIPAL***   |   
| Ações do Ator                          | Ações do Sistema                                                             |
| -                                     | 1. Detecta número excessivo de tentativas mal sucedidas                      |
| -                                     | 2. Gera log da tentativa mal sucedida                                        |
| -                                     | 3. Bloqueia o acesso do operador ao sistema                                  |
| -                                     | 4. Notifica o administrador do sistema                                       |
| ***FLUXOS ALTERNATIVOS*** |
| Código | Descrição                                                                 |
| A1     | O sistema pode solicitar autenticação com fator adicional antes do bloqueio definitivo. |
| A2     | O operador pode tentar redefinir a senha antes de atingir o limite de tentativas. |
| ***FLUXOS DE EXCEÇÃO*** |
| Código | Descrição                                                                 |
| E1     | Falha no registro de logs pode impedir rastreabilidade do bloqueio.       |
| E2     | Sistema não detecta corretamente o número de falhas e não executa o bloqueio. |
| ***RESTRIÇÕES E VALIDAÇÕES*** |- O sistema deve registrar todas as tentativas de autenticação.<br>- Deve haver um número máximo de tentativas permitido (ex: 3).<br>- O bloqueio deve ser reversível apenas por administradores com credenciais válidas.<br>- Notificações devem ser geradas para administradores. |


## Caso de Uso: Alterar Senha

| Campo                   | Alterar Senha                                                                   |
|-------------------------|----------------------------------------------------------------------------------|
| **Nome do Caso de Uso** | Alterar Senha                                                                   |
| **Ator Principal**      | Operador Militar                                                                |
| **Atores Secundários**  | Sistema de Autenticação                                                         |
| **Resumo**              | Este caso de uso descreve o processo pelo qual um operador militar altera sua senha de acesso ao sistema. |
| **Pré-condições**       | O operador deve estar autenticado no sistema.                                   |
| **Pós-condições**       | A nova senha é salva e utilizada nas próximas autenticações.                    |
| ***FLUXO PRINCIPAL***   |   
| Ações do Ator                          | Ações do Sistema                                                             |
| 1. Acessa a opção de alterar senha     | 2. Solicita senha atual e nova senha                                         |
| 3. Informa senha atual e nova senha    | 4. Valida a senha atual e verifica requisitos da nova senha                  |
|                                       | 5. Atualiza a senha no sistema e confirma alteração                          |
| ***FLUXOS ALTERNATIVOS*** |
| Código | Descrição                                                                 |
| A1     | O sistema pode solicitar confirmação da nova senha digitada.              |
| A2     | O operador pode cancelar a operação antes da confirmação final.           |
| ***FLUXOS DE EXCEÇÃO*** |
| Código | Descrição                                                                 |
| E1     | A senha atual informada está incorreta.                                    |
| E2     | A nova senha não atende aos critérios mínimos de segurança.               |
| E3     | Erro de comunicação impede a atualização da senha no banco de dados.      |
| ***RESTRIÇÕES E VALIDAÇÕES*** |- A nova senha deve seguir as políticas de segurança (mínimo de caracteres, caracteres especiais, etc).<br>- O sistema deve validar a senha atual antes de permitir a alteração.<br>- Deve ser registrada uma notificação de alteração de senha para o operador.<br>- Todas as alterações devem ser registradas em log para auditoria. |


## Caso de Uso: Planejar Nova Missão

| Campo                   | Planejar Nova Missão                                                              |
|-------------------------|-----------------------------------------------------------------------------------|
| **Nome do Caso de Uso** | Planejar Nova Missão                                                              |
| **Ator Principal**      | Operador Militar                                                                  |
| **Atores Secundários**  | Sistema de Banco de Dados                                                         |
| **Resumo**              | Este caso de uso descreve como o operador militar planeja uma nova missão, definindo objetivos, delimitando território e selecionando a frota de drones. |
| **Pré-condições**       | O operador deve estar autenticado no sistema.                                     |
| **Pós-condições**       | Uma nova missão será registrada e armazenada no sistema.                          |
| ***FLUXO PRINCIPAL***   |   
| Ações do Ator                                   | Ações do Sistema                                                             |
| 1. Inicia o processo de planejamento            | 2. Solicita definição dos objetivos da missão                                |
| 3. Define os objetivos                          | 4. Solicita delimitação do território a ser patrulhado                       |
| 5. Delimita o território                        | 6. Solicita escolha da frota de drones                                       |
| 7. Escolhe a frota                              | 8. Registra e armazena os dados da missão                                    |
| ***FLUXOS ALTERNATIVOS*** |
| Código | Descrição                                                                 |
| A1     | O operador pode cancelar o planejamento a qualquer momento.               |
| A2     | O sistema pode sugerir uma frota otimizada baseada nos objetivos e no território. |
| ***FLUXOS DE EXCEÇÃO*** |
| Código | Descrição                                                                 |
| E1     | Falha de comunicação com o banco de dados impede o registro da missão.    |
| E2     | Dados inválidos ou incompletos impedem o avanço do planejamento.          |
| ***RESTRIÇÕES E VALIDAÇÕES*** |- Apenas operadores com permissão podem planejar missões.<br>- O sistema deve validar os dados inseridos (objetivos, território, frota).<br>- O planejamento deve ser armazenado de forma segura e rastreável. |


## Caso de Uso: Iniciar Missão

| Campo                   | Iniciar Missão                                                                 |
|-------------------------|--------------------------------------------------------------------------------|
| **Nome do Caso de Uso** | Iniciar Missão                                                                 |
| **Ator Principal**      | Operador Militar                                                               |
| **Atores Secundários**  | Sistema de Banco de Dados                                                      |
| **Resumo**              | Este caso de uso descreve o processo de ativação de uma missão previamente planejada pelo operador militar. |
| **Pré-condições**       | A missão deve estar previamente planejada e armazenada no sistema.             |
| **Pós-condições**       | A missão é iniciada e os dados são enviados para os drones.                    |
| ***FLUXO PRINCIPAL***   |   
| Ações do Ator                          | Ações do Sistema                                                       |
| 1. Seleciona a missão planejada       | 2. Recupera dados da missão no banco de dados                          |
| 3. Confirma início da missão          | 4. Envia instruções para os drones                                     |
| 5. Acompanha status dos drones        | 6. Atualiza logs e registros de auditoria                              |
| ***FLUXOS ALTERNATIVOS*** |
| Código | Descrição                                                                 |
| A1     | O operador pode consultar os dados da missão antes de iniciar.           |
| A2     | O operador pode consultar relatórios anteriores antes da decisão final.  |
| A3     | O operador pode cancelar a missão antes da confirmação final.            |
| ***FLUXOS DE EXCEÇÃO*** |
| Código | Descrição                                                                 |
| E1     | Falha na comunicação com os drones impede a inicialização da missão.     |
| E2     | Dados da missão corrompidos impedem a execução.                          |
| ***RESTRIÇÕES E VALIDAÇÕES*** |- O operador deve ter permissão para iniciar missões.<br>- A missão deve estar validada e aprovada.<br>- Logs de auditoria devem ser gerados para o início da missão.<br>- O sistema deve garantir comunicação segura com os drones. |


## Caso de Uso: Consultar Dados da Missão

| Campo                   | Consultar Dados da Missão                                                       |
|-------------------------|----------------------------------------------------------------------------------|
| **Nome do Caso de Uso** | Consultar Dados da Missão                                                       |
| **Ator Principal**      | Operador Militar                                                                |
| **Atores Secundários**  | Sistema de Banco de Dados                                                       |
| **Resumo**              | Este caso de uso descreve como o operador acessa e visualiza informações de missões previamente planejadas ou em andamento. |
| **Pré-condições**       | O operador deve estar autenticado no sistema.                                   |
| **Pós-condições**       | Os dados da missão são exibidos para o operador.                                |
| ***FLUXO PRINCIPAL***   |   
| Ações do Ator                          | Ações do Sistema                                                             |
| 1. Acessa a opção de consulta de missões | 2. Exibe lista de missões disponíveis para consulta                          |
| 3. Seleciona uma missão da lista       | 4. Recupera os dados correspondentes no banco de dados                       |
| 5. Visualiza os dados                  | 6. Apresenta os dados da missão selecionada (objetivos, rota, status, etc.) |
| ***FLUXOS ALTERNATIVOS*** |
| Código | Descrição                                                                 |
| A1     | O operador pode filtrar missões por data, status ou tipo.                |
| A2     | O operador pode exportar os dados da missão em formato de relatório.     |
| ***FLUXOS DE EXCEÇÃO*** |
| Código | Descrição                                                                 |
| E1     | Falha na comunicação com o banco de dados impede a exibição das missões. |
| E2     | Dados da missão corrompidos ou inconsistentes não podem ser exibidos.    |
| ***RESTRIÇÕES E VALIDAÇÕES*** |- Apenas operadores autorizados podem acessar dados de missões.<br>- As informações devem ser apresentadas de forma clara e segura.<br>- O sistema deve registrar logs de acesso às informações.<br>- Deve haver controle de acesso aos dados sigilosos da missão. |


## Caso de Uso: Consultar Relatórios

| Campo                   | Consultar Relatórios                                                            |
|-------------------------|----------------------------------------------------------------------------------|
| **Nome do Caso de Uso** | Consultar Relatórios                                                            |
| **Ator Principal**      | Operador Militar                                                                |
| **Atores Secundários**  | Sistema de Banco de Dados                                                       |
| **Resumo**              | Este caso de uso descreve como o operador acessa relatórios gerados a partir das missões realizadas para fins de análise e tomada de decisão. |
| **Pré-condições**       | O operador deve estar autenticado e autorizado a visualizar relatórios.         |
| **Pós-condições**       | Os relatórios são exibidos ao operador, podendo ser analisados ou exportados.   |
| ***FLUXO PRINCIPAL***   |   
| Ações do Ator                          | Ações do Sistema                                                             |
| 1. Acessa a opção de relatórios        | 2. Lista os relatórios disponíveis com filtros de pesquisa                   |
| 3. Seleciona o relatório desejado      | 4. Recupera os dados do relatório no banco de dados                          |
| 5. Visualiza o conteúdo do relatório   | 6. Exibe o relatório completo ao operador                                    |
| ***FLUXOS ALTERNATIVOS*** |
| Código | Descrição                                                                 |
| A1     | O operador pode aplicar filtros por data, missão ou tipo de relatório.    |
| A2     | O relatório pode ser exportado em formato PDF ou outro formato disponível.|
| ***FLUXOS DE EXCEÇÃO*** |
| Código | Descrição                                                                 |
| E1     | Falha ao recuperar os dados do relatório no banco de dados.               |
| E2     | Relatório não encontrado ou inexistente.                                  |
| ***RESTRIÇÕES E VALIDAÇÕES*** |- Apenas operadores autorizados podem acessar relatórios.<br>- Os relatórios devem estar disponíveis apenas após o término das missões.<br>- O sistema deve manter logs de acesso aos relatórios.<br>- Os dados apresentados devem ser íntegros e auditáveis. |


## Caso de Uso: Controlar Drones

| Campo                   | Controlar Drones                                                               |
|-------------------------|----------------------------------------------------------------------------------|
| **Nome do Caso de Uso** | Controlar Drones                                                               |
| **Ator Principal**      | Operador Militar                                                               |
| **Atores Secundários**  | -                                                                               |
| **Resumo**              | Este caso de uso descreve como o operador militar interage diretamente com os drones durante a missão, executando comandos e monitorando em tempo real. |
| **Pré-condições**       | O operador deve estar autenticado e uma missão deve estar em andamento.         |
| **Pós-condições**       | Os drones executam os comandos recebidos e seus estados são atualizados no sistema. |
| ***FLUXO PRINCIPAL***   |   
| Ações do Ator                          | Ações do Sistema                                                             |
| 1. Acessa o painel de controle de drones | 2. Exibe interface com status e comandos disponíveis(Controlar drone remotamente e controlar drone autonomo) |
| 3. Envia comandos manuais (ex: mover, pousar, patrulhar) | 4. Registra os comandos e os transmite aos drones em missão            |
| 5. Monitora a execução dos comandos     | 6. Atualiza status dos drones em tempo real e registra logs                  |
| ***FLUXOS ALTERNATIVOS*** |
| Código | Descrição                                                                 |
| A1     | O operador pode alternar entre modo manual e automático.                 |
| A2     | O operador pode pausar a missão ou retornar drones à base.               |
| ***FLUXOS DE EXCEÇÃO*** |
| Código | Descrição                                                                 |
| E1     | Drones não respondem aos comandos devido à falha de conexão.             |
| E2     | O sistema rejeita comandos fora do escopo da missão.                     |
| ***RESTRIÇÕES E VALIDAÇÕES*** |- Apenas operadores com autorização adequada podem controlar drones.<br>- O sistema deve registrar logs detalhados de todos os comandos.<br>- Devem existir limites de operação definidos por missão.<br>- O controle deve ser suspenso em caso de perda de conexão com os drones. |


## Caso de Uso: Controlar Drones Autônomos

| Campo                   | Controlar Drones Autônomos                                                     |
|-------------------------|----------------------------------------------------------------------------------|
| **Nome do Caso de Uso** | Controlar Drones Autônomos                                                     |
| **Ator Principal**      | Operador Militar                                                               |
| **Atores Secundários**  | -                                                                               |
| **Resumo**              | Este caso de uso descreve como o operador supervisiona e interage com drones que operam de forma autônoma durante uma missão. |
| **Pré-condições**       | O operador deve estar autenticado no sistema e os drones devem estar configurados para modo autônomo. |
| **Pós-condições**       | Os drones executam ações programadas e enviam atualizações ao sistema.          |
| ***FLUXO PRINCIPAL***   |   
| Ações do Ator                          | Ações do Sistema                                                             |
| 1. Acessa a missão com drones autônomos | 2. Exibe status e plano de voo autônomo dos drones                           |
| 3. Inicia ou autoriza a execução da missão | 4. Inicia o plano de voo conforme a programação pré-definida              |
| 5. Monitora a execução da missão       | 6. Atualiza em tempo real o progresso e status dos drones                   |
| ***FLUXOS ALTERNATIVOS*** |
| Código | Descrição                                                                 |
| A1     | O operador pode ajustar parâmetros da missão durante a execução.          |
| A2     | O operador pode encerrar a missão antes do fim programado.                |
| ***FLUXOS DE EXCEÇÃO*** |
| Código | Descrição                                                                 |
| E1     | Drones perdem comunicação e deixam de enviar atualizações.                |
| E2     | O plano autônomo apresenta erro e os drones param ou se desviam da rota.  |
| ***RESTRIÇÕES E VALIDAÇÕES*** |- O modo autônomo deve seguir um plano previamente autorizado.<br>- O sistema deve permitir a interrupção imediata por parte do operador.<br>- Logs detalhados devem ser mantidos durante toda a operação.<br>- O operador deve poder assumir controle manual em caso de emergência. |


## Caso de Uso: Controlar Drones Remotamente

| Campo                   | Controlar Drones Remotamente                                                   |
|-------------------------|--------------------------------------------------------------------------------|
| **Nome do Caso de Uso** | Controlar Drones Remotamente                                                   |
| **Ator Principal**      | IA do Drone                                                                    |
| **Atores Secundários**  | Operador Militar                                                               |
| **Resumo**              | Este caso de uso descreve como a IA do drone permite o controle remoto dos drones pelo operador, permitindo comandos diretos durante a execução de uma missão. |
| **Pré-condições**       | A IA do drone deve estar ativa e conectada; o operador deve estar autenticado e autorizado. |
| **Pós-condições**       | Os drones executam as ações recebidas e reportam os resultados à IA e ao sistema. |
| ***FLUXO PRINCIPAL***   |   
| Ações do Ator                          | Ações do Sistema                                                             |
| 1. IA ativa o módulo de controle remoto | 2. Sistema exibe interface de controle remoto ao operador                   |
| 3. Operador envia comandos ao drone    | 4. IA interpreta e envia comandos ao drone                                  |
| 5. Drone executa as ações              | 6. IA atualiza o operador com os resultados e status                        |
| ***FLUXOS ALTERNATIVOS*** |
| Código | Descrição                                                                 |
| A1     | O operador pode solicitar visualização em tempo real das câmeras do drone.|
| A2     | A IA pode ajustar comandos conforme a situação tática do campo.           |
| ***FLUXOS DE EXCEÇÃO*** |
| Código | Descrição                                                                 |
| E1     | Perda de conexão entre a IA do drone e o drone controlado.                |
| E2     | Comando inválido ou não suportado é rejeitado pela IA.                    |
| ***RESTRIÇÕES E VALIDAÇÕES*** |- Apenas operadores autenticados podem controlar drones.<br>- A IA do drone deve validar e adaptar os comandos recebidos conforme o ambiente.<br>- Toda ação remota deve ser registrada em log.<br>- A comunicação com o drone deve ser segura e em tempo real. |


## Caso de Uso: Tomar Decisões Táticas

| Campo                   | Tomar Decisões Táticas                                                        |
|-------------------------|--------------------------------------------------------------------------------|
| **Nome do Caso de Uso** | Tomar Decisões Táticas                                                        |
| **Ator Principal**      | IA do Drone                                                                   |
| **Atores Secundários**  | -                                                                              |
| **Resumo**              | Este caso de uso descreve como a IA do drone analisa o ambiente da missão e toma decisões estratégicas para otimizar as ações do drone em campo. |
| **Pré-condições**       | A missão deve estar em andamento e a IA do drone deve estar ativa e operacional. |
| **Pós-condições**       | As decisões táticas são executadas pelo drone e registradas para auditoria.   |
| ***FLUXO PRINCIPAL***   |   
| Ações do Ator                          | Ações do Sistema                                                             |
| 1. IA coleta dados do ambiente         | 2. Sistema recebe e processa informações dos sensores do drone              |
| 3. IA avalia ameaças e oportunidades  | 4. Sistema auxilia com base em inteligência pré-definida                    |
| 5. IA decide a melhor ação tática     | 6. Sistema registra a decisão e aciona o drone para execução               |
| ***FLUXOS ALTERNATIVOS*** |
| Código | Descrição                                                                 |
| A1     | A IA pode solicitar validação do operador antes de executar determinadas ações críticas. |
| A2     | A IA adapta decisões com base em novas informações recebidas em tempo real. |
| ***FLUXOS DE EXCEÇÃO*** |
| Código | Descrição                                                                 |
| E1     | Dados de sensores inconsistentes impedem avaliação confiável.             |
| E2     | Ação tática determinada é inviável devido a falhas mecânicas no drone.    |
| ***RESTRIÇÕES E VALIDAÇÕES*** |- A IA deve seguir protocolos de missão definidos previamente.<br>- Todas as decisões devem ser baseadas em dados captados em tempo real.<br>- A execução das decisões deve ser registrada para análise posterior.<br>- A IA não deve tomar ações que violem as regras de engajamento da missão. |


## Caso de Uso: Detectar e Evitar Ameaças

| Campo                   | Detectar e Evitar Ameaças                                                    |
|-------------------------|-------------------------------------------------------------------------------|
| **Nome do Caso de Uso** | Detectar e Evitar Ameaças                                                    |
| **Ator Principal**      | IA do Drone                                                                   |
| **Atores Secundários**  | Sistema de Sensores                                                           |
| **Resumo**              | Este caso de uso descreve como a IA do drone identifica ameaças no ambiente de operação e executa manobras evasivas para evitá-las. |
| **Pré-condições**       | O drone deve estar em operação com os sensores funcionando corretamente.      |
| **Pós-condições**       | A ameaça é evitada com sucesso e a missão pode prosseguir ou ser replanejada. |
| ***FLUXO PRINCIPAL***   |   
| Ações do Ator                            | Ações do Sistema                                                                |
| 1. IA do drone monitora o ambiente       | 2. Sistema de sensores envia dados em tempo real                                |
| 3. IA detecta possível ameaça            | 4. Sistema classifica a ameaça e calcula probabilidade de impacto               |
| 5. IA executa manobra de evasão          | 6. Sistema registra a ocorrência e ajusta o plano de voo conforme necessário    |
| ***FLUXOS ALTERNATIVOS*** |
| Código | Descrição                                                                 |
| A1     | A IA solicita auxílio do operador caso a ameaça seja complexa ou múltipla. |
| A2     | A IA reavalia a ameaça com base em nova leitura dos sensores.             |
| ***FLUXOS DE EXCEÇÃO*** |
| Código | Descrição                                                                 |
| E1     | Falha nos sensores impede detecção da ameaça.                             |
| E2     | A manobra evasiva não é executada com sucesso devido a falha mecânica.    |
| ***RESTRIÇÕES E VALIDAÇÕES*** |- A IA deve ser capaz de tomar decisões em tempo real.<br>- As ameaças devem ser registradas para futura análise tática.<br>- A resposta à ameaça deve minimizar o risco à missão e ao drone.<br>- O sistema deve garantir redundância nos sensores críticos. |



## Caso de Uso: Ativar Protocolo de Emergência

| Campo                   | Ativar Protocolo de Emergência                                               |
|-------------------------|-------------------------------------------------------------------------------|
| **Nome do Caso de Uso** | Ativar Protocolo de Emergência                                               |
| **Ator Principal**      | IA do Drone                                                                   |
| **Atores Secundários**  | Operador Militar                                                              |
| **Resumo**              | Este caso de uso descreve a ativação automática ou manual de protocolos de emergência pela IA do drone quando há falhas críticas ou ameaças iminentes. |
| **Pré-condições**       | O drone deve estar em missão com a IA ativa e operando corretamente.          |
| **Pós-condições**       | O protocolo de emergência é ativado e medidas corretivas são executadas para garantir a segurança da missão e do equipamento. |
| ***FLUXO PRINCIPAL***   |   
| Ações do Ator                          | Ações do Sistema                                                             |
| 1. IA detecta situação crítica         | 2. Sistema verifica condição de emergência com base em parâmetros definidos |
| 3. IA ativa protocolo de emergência   | 4. Sistema executa ações de contenção e comunica operador                   |
| 5. IA conduz o drone para zona segura | 6. Sistema registra evento de emergência e inicia log de auditoria         |
| ***FLUXOS ALTERNATIVOS*** |
| Código | Descrição                                                                 |
| A1     | O operador pode acionar manualmente o protocolo de emergência.            |
| A2     | A IA pode escolher entre diferentes tipos de protocolo dependendo da ameaça detectada. |
| ***FLUXOS DE EXCEÇÃO*** |
| Código | Descrição                                                                 |
| E1     | Falha no sistema impede a execução automática do protocolo.               |
| E2     | Drone com avaria crítica não responde aos comandos da IA.                 |
| ***RESTRIÇÕES E VALIDAÇÕES*** |- A IA deve acionar o protocolo com base em critérios objetivos.<br>- As ações de emergência devem preservar a integridade do drone e da missão.<br>- Todo protocolo ativado deve ser reportado ao operador e registrado para análise posterior.<br>- A comunicação com o operador deve ser mantida durante o protocolo. |


## Caso de Uso: Comunicar-se com a IA do Drone

| Campo                   | Comunicar-se com a IA do Drone                                                |
|-------------------------|--------------------------------------------------------------------------------|
| **Nome do Caso de Uso** | Comunicar-se com a IA do Drone                                                |
| **Ator Principal**      | Servidor Central                                                               |
| **Atores Secundários**  | IA do Drone, Operador Militar                                                  |
| **Resumo**              | Este caso de uso descreve o processo de troca de informações entre o servidor central e a IA do drone, permitindo comandos, atualizações de missão e recebimento de status em tempo real. |
| **Pré-condições**       | O drone deve estar conectado e a comunicação segura com o servidor estabelecida. |
| **Pós-condições**       | A IA do drone recebe comandos ou transmite dados com sucesso ao servidor.      |
| ***FLUXO PRINCIPAL***   |   
| Ações do Ator                             | Ações do Sistema                                                               |
| 1. Servidor envia requisição à IA         | 2. IA do drone interpreta e executa o comando recebido                         |
| 3. IA coleta dados do ambiente e missão   | 4. IA transmite resposta e status da execução ao servidor                      |
| 5. Servidor registra informações recebidas| 6. Sistema atualiza painel de controle do operador militar                     |
| ***FLUXOS ALTERNATIVOS*** |
| Código | Descrição                                                                 |
| A1     | O operador pode intermediar comandos manuais através do servidor central. |
| A2     | A comunicação pode ser temporariamente armazenada caso haja instabilidade na rede. |
| ***FLUXOS DE EXCEÇÃO*** |
| Código | Descrição                                                                 |
| E1     | Perda de sinal impede a comunicação com o drone.                          |
| E2     | Dados corrompidos inviabilizam a execução do comando.                     |
| ***RESTRIÇÕES E VALIDAÇÕES*** |- A comunicação deve ser criptografada e autenticada.<br>- A IA deve confirmar o recebimento e execução de comandos.<br>- Logs de toda troca de informação devem ser registrados para auditoria.<br>- O sistema deve suportar fallback em caso de perda de conexão. |


## Caso de Uso: Registrar Eventos da Missão

| Campo                   | Registrar Eventos da Missão                                                  |
|-------------------------|-------------------------------------------------------------------------------|
| **Nome do Caso de Uso** | Registrar Eventos da Missão                                                  |
| **Ator Principal**      | Servidor Central                                                              |
| **Atores Secundários**  | —                                                                             |
| **Resumo**              | Este caso de uso descreve como o servidor central registra automaticamente os eventos que ocorrem durante uma missão, garantindo o histórico completo para auditoria e análise. |
| **Pré-condições**       | A missão deve estar em andamento e o servidor operacional.                    |
| **Pós-condições**       | Os eventos são registrados com sucesso no sistema de armazenamento.           |
| ***FLUXO PRINCIPAL***   |   
| Ações do Ator                            | Ações do Sistema                                                                 |
| 1. Servidor central aguarda eventos      | 2. Sistema recebe informações enviadas por componentes da missão                 |
| 3. Servidor valida os dados recebidos    | 4. Sistema registra os eventos no banco de dados                                 |
| 5. Servidor atualiza o histórico da missão| 6. Sistema disponibiliza os registros para consulta e auditoria                  |
| ***FLUXOS ALTERNATIVOS*** |
| Código | Descrição                                                                 |
| A1     | O servidor agrupa múltiplos eventos semelhantes antes de registrar.       |
| A2     | Caso o envio seja parcial, o sistema agenda nova tentativa de recebimento.|
| ***FLUXOS DE EXCEÇÃO*** |
| Código | Descrição                                                                 |
| E1     | Falha de comunicação impede o recebimento dos dados.                      |
| E2     | Erro no banco de dados impede o registro do evento.                       |
| ***RESTRIÇÕES E VALIDAÇÕES*** |- Todos os eventos devem conter metadados como horário, tipo e origem.<br>- O servidor deve validar a integridade dos dados antes do registro.<br>- Eventos críticos devem ser priorizados no armazenamento.<br>- Logs devem ser auditáveis e replicados para backup. |


## Caso de Uso: Notificar Falhas

| Campo                   | Notificar Falhas                                                             |
|-------------------------|-------------------------------------------------------------------------------|
| **Nome do Caso de Uso** | Notificar Falhas                                                             |
| **Ator Principal**      | Servidor Central                                                              |
| **Atores Secundários**  | —                                                                             |
| **Resumo**              | Este caso de uso descreve como o servidor central identifica falhas nos sistemas ou nos drones e notifica automaticamente os operadores responsáveis. |
| **Pré-condições**       | O sistema de monitoramento deve estar ativo e a missão em andamento.         |
| **Pós-condições**       | A falha é registrada e a notificação é enviada ao operador responsável.       |
| ***FLUXO PRINCIPAL***   |   
| Ações do Ator                              | Ações do Sistema                                                              |
| 1. Servidor central detecta falha          | 2. Sistema registra a falha no banco de eventos                                |
| 3. Servidor gera notificação               | 4. Sistema envia notificação ao operador responsável                            |
| 5. Servidor atualiza painel de monitoramento| 6. Sistema registra confirmação de recebimento da notificação                  |
| ***FLUXOS ALTERNATIVOS*** |
| Código | Descrição                                                                 |
| A1     | O sistema tenta reenviar a notificação caso não haja confirmação de recebimento. |
| A2     | Em falhas críticas, o sistema aciona protocolo de emergência automaticamente. |
| ***FLUXOS DE EXCEÇÃO*** |
| Código | Descrição                                                                 |
| E1     | Falha na comunicação impede o envio da notificação.                       |
| E2     | A falha não é registrada devido a erro interno no servidor.              |
| ***RESTRIÇÕES E VALIDAÇÕES*** |- O servidor deve verificar a criticidade da falha antes de acionar notificações.<br>- O sistema deve manter logs detalhados das falhas e notificações.<br>- A comunicação com o operador deve ser segura e rastreável.<br>- Notificações devem ser enviadas em tempo real sempre que possível. |


## Caso de Uso: Gerar Logs de Auditoria

| Campo                   | Gerar Logs de Auditoria                                                      |
|-------------------------|-------------------------------------------------------------------------------|
| **Nome do Caso de Uso** | Gerar Logs de Auditoria                                                      |
| **Ator Principal**      | Servidor Central                                                              |
| **Atores Secundários**  | —                                                                             |
| **Resumo**              | Este caso de uso descreve como o servidor central registra automaticamente todas as ações relevantes do sistema para fins de auditoria e rastreamento. |
| **Pré-condições**       | O sistema deve estar operacional e os módulos de monitoramento ativos.       |
| **Pós-condições**       | Logs completos e organizados são armazenados e disponíveis para consulta.     |
| ***FLUXO PRINCIPAL***   |   
| Ações do Ator                                | Ações do Sistema                                                          |
| 1. Servidor identifica ação relevante         | 2. Sistema coleta os dados associados à ação                              |
| 3. Servidor classifica o tipo de evento       | 4. Sistema registra o evento com metadados em banco de dados de auditoria |
| 5. Servidor atualiza o log em tempo real      | 6. Sistema garante integridade e sigilo dos registros                     |
| ***FLUXOS ALTERNATIVOS*** |
| Código | Descrição                                                                 |
| A1     | Em caso de alta carga, o sistema agrupa eventos antes de registrar.       |
| A2     | Logs não críticos podem ser armazenados temporariamente para envio posterior. |
| ***FLUXOS DE EXCEÇÃO*** |
| Código | Descrição                                                                 |
| E1     | Falha no banco de dados impede o registro do log.                         |
| E2     | Dados do evento corrompidos ou incompletos.                              |
| ***RESTRIÇÕES E VALIDAÇÕES*** |- Todos os logs devem conter data, hora, usuário/entidade responsável e descrição da ação.<br>- Os registros devem ser imutáveis e auditáveis.<br>- O sistema deve manter cópias redundantes dos logs.<br>- Logs devem estar acessíveis apenas a usuários com permissão específica. |


## Caso de Uso: Cancelar Planejamento

| Campo                   | Cancelar Planejamento                                                       |
|-------------------------|------------------------------------------------------------------------------|
| **Nome do Caso de Uso** | Cancelar Planejamento                                                       |
| **Ator Principal**      | Operador Militar                                                             |
| **Atores Secundários**  | Servidor Central                                                              |
| **Resumo**              | Este caso de uso descreve como o operador militar pode cancelar o planejamento de uma missão antes de sua execução, invalidando os dados planejados. |
| **Pré-condições**       | O planejamento da missão deve ter sido previamente criado e estar salvo no sistema. |
| **Pós-condições**       | O planejamento é cancelado e o sistema registra a operação nos logs.          |
| ***FLUXO PRINCIPAL***   |   
| Ações do Ator                                | Ações do Sistema                                                      |
| 1. Operador acessa a interface de planejamento| 2. Sistema exibe lista de missões planejadas                          |
| 3. Operador seleciona missão a ser cancelada | 4. Sistema solicita confirmação da ação                               |
| 5. Operador confirma cancelamento            | 6. Sistema cancela o planejamento e atualiza o status da missão       |
|                                               | 7. Sistema registra a ação nos logs de auditoria                      |
| ***FLUXOS ALTERNATIVOS*** |
| Código | Descrição                                                                 |
| A1     | Operador desiste de cancelar após ver os detalhes da missão.              |
| A2     | O planejamento já havia sido cancelado por outro operador.                |
| ***FLUXOS DE EXCEÇÃO*** |
| Código | Descrição                                                                 |
| E1     | Falha na comunicação impede o cancelamento da missão.                     |
| E2     | Erro interno do sistema impede a atualização do status da missão.         |
| ***RESTRIÇÕES E VALIDAÇÕES*** |- Apenas operadores autorizados podem cancelar planejamentos.<br>- O sistema deve registrar o motivo do cancelamento, se informado.<br>- Após o cancelamento, os dados da missão devem permanecer acessíveis para auditoria.<br>- A ação deve ser registrada em log com data, hora e identificação do operador. |


## Caso de Uso: Armazenar Logs de Auditoria

| Campo                   | Armazenar Logs de Auditoria                                                  |
|-------------------------|-------------------------------------------------------------------------------|
| **Nome do Caso de Uso** | Armazenar Logs de Auditoria                                                  |
| **Ator Principal**      | Sistema de Banco de Dados                                                     |
| **Atores Secundários**  | —                                                                             |
| **Resumo**              | Este caso de uso descreve como o sistema de banco de dados armazena com segurança os logs de auditoria gerados pelo sistema, garantindo integridade, rastreabilidade e disponibilidade. |
| **Pré-condições**       | Logs devem ser gerados previamente pelo servidor central.                    |
| **Pós-condições**       | Os logs são persistidos de forma segura e disponíveis para auditoria futura. |
| ***FLUXO PRINCIPAL***   |   
| Ações do Ator                                | Ações do Sistema                                                              |
| 1. Banco de dados recebe novo log            | 2. Sistema valida a estrutura e integridade do log                            |
| 3. Banco de dados executa rotina de persistência | 4. Sistema grava o log no repositório definido                             |
| 5. Banco de dados atualiza índice            | 6. Sistema confirma a operação e libera para consulta de auditoria            |
| ***FLUXOS ALTERNATIVOS*** |
| Código | Descrição                                                                 |
| A1     | Logs são armazenados em múltiplas instâncias para redundância.           |
| A2     | Logs antigos são movidos automaticamente para camadas de arquivamento.   |
| ***FLUXOS DE EXCEÇÃO*** |
| Código | Descrição                                                                 |
| E1     | Falha na escrita impede o armazenamento do log.                          |
| E2     | Log corrompido é rejeitado pelo sistema de banco de dados.               |
| ***RESTRIÇÕES E VALIDAÇÕES*** |- Logs devem ser imutáveis após o armazenamento.<br>- A integridade dos dados deve ser verificada automaticamente.<br>- O armazenamento deve ser criptografado e com controle de acesso.<br>- O sistema deve garantir backup automático dos registros. |


## Caso de Uso: Armazenar Dados da Missão

| Campo                   | Armazenar Dados da Missão                                                    |
|-------------------------|-------------------------------------------------------------------------------|
| **Nome do Caso de Uso** | Armazenar Dados da Missão                                                    |
| **Ator Principal**      | Sistema de Banco de Dados                                                     |
| **Atores Secundários**  | —                                                                             |
| **Resumo**              | Este caso de uso descreve como o sistema de banco de dados armazena com segurança as informações relacionadas às missões, garantindo persistência, integridade e disponibilidade para futuras consultas. |
| **Pré-condições**       | A missão deve estar planejada ou em execução, com dados prontos para serem armazenados. |
| **Pós-condições**       | Os dados da missão são salvos de forma segura no banco de dados.             |
| ***FLUXO PRINCIPAL***   |   
| Ações do Ator                                  | Ações do Sistema                                                            |
| 1. Banco de dados recebe dados da missão       | 2. Sistema valida o conteúdo e formato dos dados                            |
| 3. Banco de dados inicia rotina de gravação    | 4. Sistema armazena os dados no repositório de missão                       |
| 5. Banco de dados atualiza os registros        | 6. Sistema confirma armazenamento e disponibiliza os dados para consulta    |
| ***FLUXOS ALTERNATIVOS*** |
| Código | Descrição                                                                 |
| A1     | Dados parciais são salvos temporariamente até a conclusão da missão.      |
| A2     | Dados redundantes são sincronizados com réplicas para garantir alta disponibilidade. |
| ***FLUXOS DE EXCEÇÃO*** |
| Código | Descrição                                                                 |
| E1     | Falha no disco impede o salvamento dos dados.                            |
| E2     | Dados inconsistentes são rejeitados pelo sistema.                        |
| ***RESTRIÇÕES E VALIDAÇÕES*** |- Os dados da missão devem estar completos e consistentes antes do armazenamento.<br>- A integridade dos dados deve ser validada com checksums.<br>- O acesso ao repositório de dados deve ser restrito a usuários autorizados.<br>- Backups periódicos devem ser realizados automaticamente. |


## Caso de Uso: Abortar Missão

| Campo                   | Abortar Missão                                                               |
|-------------------------|-------------------------------------------------------------------------------|
| **Nome do Caso de Uso** | Abortar Missão                                                               |
| **Ator Principal**      | Operador Militar                                                             |
| **Atores Secundários**  | Servidor Central                                                             |
| **Resumo**              | Este caso de uso descreve como o operador militar pode interromper uma missão em andamento por motivos estratégicos, técnicos ou de segurança. |
| **Pré-condições**       | A missão deve estar em andamento e o operador deve possuir permissão para intervir. |
| **Pós-condições**       | A missão é encerrada imediatamente e os drones envolvidos retornam ou executam protocolos de segurança. |
| ***FLUXO PRINCIPAL***   |   
| Ações do Ator                              | Ações do Sistema                                                              |
| 1. Operador acessa o painel da missão      | 2. Sistema exibe status atual da missão em tempo real                         |
| 3. Operador seleciona a opção "Abortar"    | 4. Sistema solicita confirmação da operação                                   |
| 5. Operador confirma o aborto da missão    | 6. Sistema interrompe a missão e envia comandos aos drones                    |
|                                            | 7. Sistema registra o aborto nos logs e atualiza o status da missão           |
| ***FLUXOS ALTERNATIVOS*** |
| Código | Descrição                                                                 |
| A1     | O operador pode escolher abortar apenas parte da missão (ex: um drone específico). |
| A2     | A missão é pausada para avaliação, em vez de abortada completamente.     |
| ***FLUXOS DE EXCEÇÃO*** |
| Código | Descrição                                                                 |
| E1     | Falha na comunicação impede o envio dos comandos de aborto.              |
| E2     | O sistema rejeita o aborto por inconsistência no status da missão.       |
| ***RESTRIÇÕES E VALIDAÇÕES*** |- Apenas operadores autorizados podem abortar missões.<br>- O sistema deve solicitar autenticação reforçada antes da confirmação.<br>- O aborto deve ser registrado com data, hora, operador e motivo.<br>- Todos os drones devem receber confirmação de retorno seguro ou execução de protocolo de emergência. |


## Caso de Uso: Validar Biometria

| Campo                   | Validar Biometria                                                             |
|-------------------------|--------------------------------------------------------------------------------|
| **Nome do Caso de Uso** | Validar Biometria                                                             |
| **Ator Principal**      | Sistema de Autenticação                                                       |
| **Atores Secundários**  | —                                                                             |
| **Resumo**              | Este caso de uso descreve como o sistema de autenticação realiza a verificação biométrica do operador para garantir a identidade e segurança no acesso ao sistema. |
| **Pré-condições**       | O operador precisa estar previamente cadastrado com seus dados biométricos.  |
| **Pós-condições**       | A identidade biométrica do operador é validada com sucesso ou negada com justificativa. |
| ***FLUXO PRINCIPAL***   |   
| Ações do Ator                                | Ações do Sistema                                                             |
| —                                             | 1. Sistema solicita leitura biométrica                                       |
| —                                             | 2. Sistema capta os dados biométricos do operador                           |
| —                                             | 3. Sistema compara os dados com os registros armazenados                    |
| —                                             | 4. Sistema valida a correspondência biométrica                              |
| —                                             | 5. Sistema autoriza a próxima etapa do acesso, se a biometria for válida    |
| ***FLUXOS ALTERNATIVOS*** |
| Código | Descrição                                                                 |
| A1     | Se o operador apresentar dificuldade na leitura, o sistema solicita nova tentativa. |
| A2     | O sistema pode solicitar autenticação por outro fator (ex: senha) em caso de falha leve. |
| ***FLUXOS DE EXCEÇÃO*** |
| Código | Descrição                                                                 |
| E1     | Leitor biométrico apresenta falha de hardware.                          |
| E2     | Dados biométricos não correspondem aos armazenados.                     |
| ***RESTRIÇÕES E VALIDAÇÕES*** |- Dados biométricos devem estar criptografados.<br>- O sistema deve validar os dados em tempo real.<br>- Máximas tentativas consecutivas devem ser limitadas.<br>- Todas as tentativas de autenticação devem ser registradas em log com data e hora. |


## Caso de Uso: Validar Segundo Identificador de Autenticação

| Campo                   | Validar Segundo Identificador de Autenticação                                 |
|-------------------------|--------------------------------------------------------------------------------|
| **Nome do Caso de Uso** | Validar Segundo Identificador de Autenticação                                 |
| **Ator Principal**      | Sistema de Autenticação                                                       |
| **Atores Secundários**  | —                                                                             |
| **Resumo**              | Este caso de uso descreve como o sistema de autenticação realiza a verificação do segundo fator no processo de autenticação multifator, garantindo uma camada adicional de segurança no acesso ao sistema. |
| **Pré-condições**       | O operador já completou a primeira etapa da autenticação (ex: senha ou biometria). |
| **Pós-condições**       | O segundo fator de autenticação é validado com sucesso ou o acesso é negado.  |
| ***FLUXO PRINCIPAL***   |   
| Ações do Ator                                           | Ações do Sistema                                                              |
| 1. Operador fornece o segundo fator (ex: token MFA)     | 2. Sistema recebe e valida o segundo fator                                    |
|                                                         | 3. Sistema compara com o valor esperado (ex: gerado por app autenticador)     |
|                                                         | 4. Sistema confirma a autenticidade e validade do segundo fator               |
|                                                         | 5. Sistema autoriza o acesso completo caso a validação seja bem-sucedida     |
| ***FLUXOS ALTERNATIVOS*** |
| Código | Descrição                                                                 |
| A1     | Caso o segundo fator esteja expirado, o sistema solicita nova tentativa.  |
| A2     | O operador pode optar por outro método de MFA previamente configurado.    |
| ***FLUXOS DE EXCEÇÃO*** |
| Código | Descrição                                                                 |
| E1     | Código inválido ou fora do tempo de validade.                            |
| E2     | Falha de comunicação com o serviço de autenticação multifator.           |
| ***RESTRIÇÕES E VALIDAÇÕES*** |- O segundo fator deve ser temporário e único (ex: TOTP).<br>- A autenticação multifator deve estar habilitada para o operador.<br>- O sistema deve registrar todas as tentativas de MFA, com hora e resultado.<br>- O operador deve ter opções alternativas de MFA em caso de falha (backup codes, cartão físico, etc.). |


## Caso de Uso: Autorizar e Negar Acesso

| Campo                   | Autorizar e Negar Acesso                                                     |
|-------------------------|------------------------------------------------------------------------------|
| **Nome do Caso de Uso** | Autorizar e Negar Acesso                                                     |
| **Ator Principal**      | Sistema de Autenticação                                                     |
| **Atores Secundários**  | —                                                                            |
| **Resumo**              | Este caso de uso descreve como o sistema de autenticação toma a decisão de conceder ou negar o acesso ao sistema com base na validação das credenciais e dos fatores de autenticação fornecidos pelo operador. |
| **Pré-condições**       | O operador deve fornecer credenciais válidas e, se exigido, autenticação multifator. |
| **Pós-condições**       | O operador recebe autorização para acessar o sistema ou tem seu acesso negado com registro da tentativa. |
| ***FLUXO PRINCIPAL***   |   
| Ações do Ator                                      | Ações do Sistema                                                              |
| —                                                  | 1. Sistema verifica credenciais fornecidas pelo operador                      |
| —                                                  | 2. Sistema valida os fatores de autenticação                                  |
| —                                                  | 3. Sistema avalia permissões e políticas de segurança                         |
| —                                                  | 4. Sistema autoriza o acesso se todas as condições forem atendidas           |
| —                                                  | 5. Sistema direciona o operador à interface principal                         |
| ***FLUXOS ALTERNATIVOS*** |
| Código | Descrição                                                                 |
| A1     | Caso o operador tenha permissões limitadas, o sistema libera acesso parcial. |
| A2     | A autorização pode exigir confirmação adicional por parte de um supervisor. |
| ***FLUXOS DE EXCEÇÃO*** |
| Código | Descrição                                                                 |
| E1     | Credenciais inválidas ou inconsistentes impedem a autorização.            |
| E2     | Sistema detecta tentativa suspeita e nega acesso imediatamente.           |
| ***RESTRIÇÕES E VALIDAÇÕES*** |- O sistema deve seguir políticas de controle de acesso baseadas em função (RBAC).<br>- Logs de todas as autorizações e negações devem ser mantidos.<br>- Tentativas de acesso negado devem gerar alertas após repetição.<br>- A autorização deve considerar horário, local e dispositivo de acesso como fatores condicionantes. |


## Caso de Uso: Configurar Biometria e Multifator do Operador

| Campo                   | Configurar Biometria e Multifator do Operador                                 |
|-------------------------|--------------------------------------------------------------------------------|
| **Nome do Caso de Uso** | Configurar Biometria e Multifator do Operador                                 |
| **Ator Principal**      | Administrador do Sistema                                                       |
| **Atores Secundários**  | —                                                                              |
| **Resumo**              | Este caso de uso descreve como o administrador cadastra ou atualiza os dados biométricos e configura o segundo fator de autenticação para operadores militares. |
| **Pré-condições**       | O operador já deve estar cadastrado no sistema.                               |
| **Pós-condições**       | Dados biométricos e método multifator configurados com sucesso para o operador.|
| ***FLUXO PRINCIPAL***   |   
| Ações do Ator                                       | Ações do Sistema                                                            |
| 1. Administrador acessa painel de operadores        | 2. Sistema exibe lista de operadores cadastrados                            |
| 3. Administrador seleciona um operador              | 4. Sistema abre detalhes de autenticação do operador                        |
| 5. Administrador escolhe configurar biometria       | 6. Sistema solicita captura biométrica                                      |
| 7. Administrador realiza a captura                  | 7. Sistema armazena os dados com segurança                                  |
| 8. Administrador seleciona e ativa método multifator| 9. Sistema vincula o método escolhido ao operador                           |
|***FLUXOS ALTERNATIVOS*** |
| Código | Descrição                                                                          |
| A1     | Administrador pode configurar apenas um dos métodos (biometria ou multifator).     |
| A2     | Caso o operador já possua dados configurados, o sistema permite sobrescrever.      |
|***FLUXOS DE EXCEÇÃO*** |
| Código | Descrição                                                                          |
| E1     | Falha na captura biométrica.                                                       |
| E2     | Falha de comunicação com serviço de autenticação multifator.                       |
|***RESTRIÇÕES E VALIDAÇÕES*** |- Os dados biométricos devem ser criptografados.<br>- A configuração deve ser registrada em log de auditoria.<br>- Somente administradores autenticados podem acessar essa funcionalidade.<br>- O sistema deve validar a integridade da configuração ao final do processo. |


## Caso de Uso: Cadastrar Operador Militar

| Campo                   | Cadastrar Operador Militar                                                 |
|-------------------------|----------------------------------------------------------------------------|
| **Nome do Caso de Uso** | Cadastrar Operador Militar                                                 |
| **Ator Principal**      | Administrador do Sistema                                                   |
| **Atores Secundários**  | —                                                                          |
| **Resumo**              | Este caso de uso descreve o processo de cadastramento de um novo operador militar no sistema, incluindo a definição de credenciais básicas de acesso. |
| **Pré-condições**       | O administrador precisa estar autenticado no sistema.                      |
| **Pós-condições**       | O operador militar estará registrado no sistema com um perfil de acesso definido. |
| ***FLUXO PRINCIPAL***   |   
| Ações do Ator                                 | Ações do Sistema                                                     |
| 1. Administrador acessa a funcionalidade de cadastro de operador | 2. Sistema apresenta formulário de cadastro                           |
| 3. Administrador preenche os dados do operador (nome, ID, função, etc.) | 4. Sistema valida os dados fornecidos                              |
| 5. Administrador define as credenciais iniciais de acesso       | 6. Sistema registra o operador e salva no banco de dados            |
| 7. Administrador confirma o cadastro                            | 8. Sistema emite mensagem de sucesso e gera log do evento           |
|***FLUXOS ALTERNATIVOS*** |
| Código | Descrição                                                                 |
| A1     | Administrador opta por cadastrar outro operador após finalização do atual.|
| A2     | Administrador agenda configuração de autenticação biométrica posteriormente.|
|***FLUXOS DE EXCEÇÃO*** |
| Código | Descrição                                                                 |
| E1     | Dados obrigatórios ausentes ou inválidos.                                 |
| E2     | Falha na comunicação com o banco de dados.                                |
|***RESTRIÇÕES E VALIDAÇÕES*** |- Campos obrigatórios: nome completo, identificação militar, função.<br>- Cada operador deve ter um identificador único.<br>- O cadastro deve ser registrado no log de auditoria.<br>- Somente administradores com permissão podem acessar essa funcionalidade. |


## Caso de Uso: Gerenciar Permissões de Acesso

| Campo                   | Gerenciar Permissões de Acesso                                            |
|-------------------------|---------------------------------------------------------------------------|
| **Nome do Caso de Uso** | Gerenciar Permissões de Acesso                                            |
| **Ator Principal**      | Administrador do Sistema                                                  |
| **Atores Secundários**  | —                                                                         |
| **Resumo**              | Este caso de uso descreve como o administrador define, altera ou revoga permissões de acesso aos diferentes módulos e funcionalidades do sistema para operadores militares. |
| **Pré-condições**       | O administrador deve estar autenticado no sistema com privilégios adequados. |
| **Pós-condições**       | As permissões do operador são atualizadas e salvas no sistema.            |
| ***FLUXO PRINCIPAL***   |   
| Ações do Ator                                   | Ações do Sistema                                                     |
| 1. Administrador acessa a interface de gerenciamento de permissões | 2. Sistema exibe a lista de operadores cadastrados                    |
| 3. Administrador seleciona o operador desejado                  | 4. Sistema exibe permissões atuais e opções de modificação            |
| 5. Administrador define ou altera permissões                   | 6. Sistema valida as alterações                                       |
| 7. Administrador confirma a atualização                        | 8. Sistema aplica as novas permissões e gera log do evento           |
| ***FLUXOS ALTERNATIVOS*** |
| Código | Descrição                                                                 |
| A1     | Administrador revoga todas as permissões de um operador temporariamente. |
| A2     | Permissões são herdadas de um perfil ou função padrão.                   |
| ***FLUXOS DE EXCEÇÃO*** |
| Código | Descrição                                                                 |
| E1     | Tentativa de atribuir permissão inválida ou inexistente.                 |
| E2     | Falha de comunicação com o banco de dados ao salvar alterações.          |
| ***RESTRIÇÕES E VALIDAÇÕES*** |- Apenas administradores com privilégios completos podem gerenciar permissões.<br>- Cada alteração deve ser registrada em log de auditoria.<br>- O sistema deve impedir configurações de permissões conflitantes ou inseguras. |


## Caso de Uso: Desbloquear Operador após Bloqueio

| Campo                   | Desbloquear Operador após Bloqueio                                       |
|-------------------------|---------------------------------------------------------------------------|
| **Nome do Caso de Uso** | Desbloquear Operador após Bloqueio                                       |
| **Ator Principal**      | Administrador do Sistema                                                  |
| **Atores Secundários**  | —                                                                         |
| **Resumo**              | Este caso de uso descreve como o administrador desbloqueia o acesso de um operador militar que foi previamente bloqueado após múltiplas tentativas de autenticação mal sucedidas. |
| **Pré-condições**       | O operador deve estar bloqueado e o administrador autenticado no sistema. |
| **Pós-condições**       | O operador tem seu acesso restaurado ao sistema.                         |
| ***FLUXO PRINCIPAL***   |   
| Ações do Ator                                   | Ações do Sistema                                                     |
| 1. Administrador acessa a seção de gerenciamento de operadores | 2. Sistema exibe a lista de operadores bloqueados                     |
| 3. Administrador seleciona o operador a ser desbloqueado       | 4. Sistema exibe os dados do operador e o motivo do bloqueio          |
| 5. Administrador confirma o desbloqueio                        | 6. Sistema restaura o acesso e atualiza o status do operador          |
| 7. Administrador recebe confirmação visual                     | 8. Sistema registra o evento no log de auditoria                      |
| ***FLUXOS ALTERNATIVOS*** |
| Código | Descrição                                                                 |
| A1     | Administrador agenda o desbloqueio automático para um horário específico. |
| A2     | Administrador exige redefinição de senha antes do desbloqueio.            |
| ***FLUXOS DE EXCEÇÃO*** |
| Código | Descrição                                                                 |
| E1     | Falha na comunicação com o sistema de autenticação.                      |
| E2     | O operador selecionado não está mais bloqueado.                          |
| ***RESTRIÇÕES E VALIDAÇÕES*** |- Apenas administradores com permissão elevada podem desbloquear operadores.<br>- O desbloqueio deve ser registrado com data, hora e motivo.<br>- O sistema pode exigir redefinição de autenticação após desbloqueio como medida de segurança. |


## Caso de Uso: Acessar Histórico de Missões

| Campo                   | Acessar Histórico de Missões                                              |
|-------------------------|---------------------------------------------------------------------------|
| **Nome do Caso de Uso** | Acessar Histórico de Missões                                              |
| **Ator Principal**      | Administrador do Sistema                                                  |
| **Atores Secundários**  | —                                                                         |
| **Resumo**              | Este caso de uso descreve como o administrador acessa o histórico completo de todas as missões registradas no sistema, com possibilidade de auditoria e análise. |
| **Pré-condições**       | O administrador deve estar autenticado com permissão de nível elevado.    |
| **Pós-condições**       | O histórico de missões é exibido com todos os registros disponíveis para consulta. |
| ***FLUXO PRINCIPAL***   |   
| Ações do Ator                                 | Ações do Sistema                                                     |
| 1. Administrador acessa o módulo de missões   | 2. Sistema apresenta a opção de histórico completo de missões        |
| 3. Administrador seleciona a opção desejada   | 4. Sistema recupera e exibe a lista de todas as missões registradas  |
| 5. Administrador escolhe uma missão para consulta | 6. Sistema exibe os detalhes da missão, incluindo status e relatórios gerados |
| ***FLUXOS ALTERNATIVOS*** |
| Código | Descrição                                                                 |
| A1     | Administrador utiliza filtros para refinar a busca (data, operador, status).|
| A2     | Administrador exporta histórico para fins de auditoria externa.           |
| ***FLUXOS DE EXCEÇÃO*** |
| Código | Descrição                                                                 |
| E1     | Erro na recuperação do histórico por falha no banco de dados.             |
| E2     | O histórico contém registros corrompidos ou inacessíveis.                 |
| ***RESTRIÇÕES E VALIDAÇÕES*** |- O acesso ao histórico deve ser registrado em log de auditoria.<br>- Apenas administradores com privilégios podem acessar todas as missões, inclusive confidenciais.<br>- Dados devem estar protegidos conforme as diretrizes de segurança do sistema. |


# Diagrama de Sequência

![Diagrama de Sequencia](https://github.com/grupo4G/UML-01-FCI/blob/c589dd50bb9ec9b30dce522fcd47618a159c0d34/docs/img/umlSequencia.JPG)

# Diagrama de Classes

![Diagrama de Classes](https://github.com/grupo4G/UML-01-FCI/blob/f70c00b35d0a981bab49314a0e031b6ed64b5346/docs/img/Diagrama%20de%20classe%20UML.jpg)

# Diagrama de Estados

![Diagrama de Estados](https://github.com/grupo4G/UML-01-FCI/blob/5c46c7b550de62b4d03c404afdad6e393352cf97/docs/img/DiagramaEstados.JPG)

# Diagrama de Implantação

![Diagrama de Implementação](https://github.com/grupo4G/UML-01-FCI/blob/6358403a90841412819a998c4593acfaf971c985/docs/img/diagrama_implantacao.png)

# Referências

https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-sequencia-uml

https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-classe-uml

https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-implementacao-uml

https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-maquina-de-estados-uml

https://www.inf.ufpr.br/silvia/ES/projeto/aulas/aula16.pdf

