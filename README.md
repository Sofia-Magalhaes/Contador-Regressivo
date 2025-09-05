# Contador Regressivo

## Visão Geral do Projeto

Este repositório contém um projeto de contador regressivo interativo, desenvolvido com **React** e **Vite**. O objetivo principal é fornecer uma ferramenta simples e eficaz para exibir o tempo restante até uma data ou evento específico, com uma interface de usuário clara e responsiva.

## Funcionalidades Principais

- **Contagem Regressiva em Tempo Real**: Exibe dinamicamente os dias, horas, minutos e segundos restantes para uma data alvo.
- **Interface Intuitiva**: Design limpo e fácil de usar, garantindo uma boa experiência para o usuário.
- **Configuração Flexível**: Permite a fácil alteração da data e hora do evento alvo.

## Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

- **React**: Biblioteca JavaScript para construção de interfaces de usuário reativas e baseadas em componentes.
- **Vite**: Ferramenta de build de nova geração que oferece um ambiente de desenvolvimento frontend extremamente rápido.
- **React Router DOM**: Para gerenciamento de rotas na aplicação (se aplicável, dependendo da complexidade do projeto).
- **ESLint**: Ferramenta de linting para manter a qualidade do código e identificar problemas potenciais.

## Estrutura do Projeto

O projeto segue uma estrutura padrão de aplicações React/Vite:

```
Contador-Regressivo/
├── countdown/                 # Diretório principal da aplicação React
│   ├── public/                # Arquivos estáticos (ícones, index.html)
│   ├── src/                   # Código fonte da aplicação
│   │   ├── assets/            # Imagens, ícones, etc.
│   │   ├── components/        # Componentes React reutilizáveis
│   │   ├── pages/             # Páginas da aplicação (se houver rotas)
│   │   ├── App.jsx            # Componente principal da aplicação
│   │   ├── main.jsx           # Ponto de entrada da aplicação
│   │   └── index.css          # Estilos globais
│   ├── index.html             # Arquivo HTML principal
│   ├── package.json           # Dependências e scripts do projeto
│   ├── vite.config.js         # Configuração do Vite
│   └── eslint.config.js       # Configuração do ESLint
└── README.md                  # Este arquivo
```

## Como Executar o Projeto Localmente

Siga os passos abaixo para configurar e executar o projeto em sua máquina local:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Sofia-Magalhaes/Contador-Regressivo.git
   ```

2. **Navegue até o diretório da aplicação:**

   ```bash
   cd Contador-Regressivo/countdown
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

   O aplicativo estará disponível em `http://localhost:5173` (ou outra porta indicada no terminal).

5. **Para construir para produção:**

   ```bash
   npm run build
   ```

   Os arquivos otimizados para produção serão gerados na pasta `dist/`.

## Contribuição

Contribuições são muito bem-vindas! Se você deseja aprimorar este projeto, por favor, siga as diretrizes:

1. Faça um fork do repositório.
2. Crie uma nova branch para sua funcionalidade ou correção de bug (`git checkout -b feature/minha-nova-funcionalidade`).
3. Faça suas alterações e commit-as com mensagens claras (`git commit -m 'feat: adiciona nova funcionalidade X'` ou `fix: corrige bug Y`).
4. Envie suas alterações para o seu fork (`git push origin feature/minha-nova-funcionalidade`).
5. Abra um Pull Request para a branch `main` deste repositório, descrevendo suas alterações.

---

**Desenvolvido por:** Sofia Magalhães

**Data da última atualização:** 05 de Setembro de 2025
