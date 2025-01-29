# backend-api-imersao-alura
Este projeto foi desenvolvido durante a Imersão Alura em parceria com o Google, com o objetivo de criar um back-end funcional utilizando Node.js, MongoDB, Google Gemini e outras tecnologias. A API gerencia o upload de imagens, armazena dados no banco de dados e gera descrições automáticas para as imagens, além de possibilitar a integração com o front-end. O projeto é funcional e escalável, permitindo futuras implementações.

# Resultados
Após a integração com o front-end fornecido na imersão (semelhante ao perfil do Instagram), o projeto apresentou os seguintes resultados:

![ResultadoPersonalizado](https://github.com/user-attachments/assets/f5b954a3-5632-478b-8ef3-71060201e408)

. Cada imagem enviada ao banco de dados recebeu um ID único. Isso garantiu que, mesmo que a imagem fosse visualmente idêntica a outra já existente, ela teria um identificador diferente. Dessa forma, a organização do banco de dados ficou mais eficiente e realista, permitindo que postagens individuais fossem excluídas sem afetar outras imagens semelhantes.
. As descrições das imagens foram geradas automaticamente pelo Google Gemini, que analisou o conteúdo das imagens e criou descrições com base em um prompt personalizado que escrevi.

![Descricao1Gemini](https://github.com/user-attachments/assets/3959e414-76fa-4d88-a5cf-7ffc6021037d)

![Descricao2Gemini](https://github.com/user-attachments/assets/c0325db9-f6a9-41e4-8a45-3592721ae025)

. As informações foram disponibilizadas no Google Cloud, permitindo que qualquer pessoa com o link acesse a API. Desenvolvida em Node.js e MongoDB, a API está hospedada no Google Cloud e funcionando corretamente, armazenando e recuperando dados de forma organizada e acessível. Você pode acessá-la clicando no [link](https://backend-api-imersao-alura-502727767460.southamerica-east1.run.app/posts). 

![GoogleCloud](https://github.com/user-attachments/assets/8df765a8-4c1d-49ec-a866-8bb5de0c5562)


