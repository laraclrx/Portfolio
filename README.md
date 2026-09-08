# 🎵 Portfólio Profissional — Ana Clara Fischer

Portfólio web moderno, limpo e responsivo desenvolvido para **Ana Clara Fischer de Souza**, estudante concluinte do 3º ano do Curso Técnico em Informática para a Internet no **Instituto Federal do Acre (IFAC)**.

---

## 🌟 Características & Diferenciais do Projeto

- **Estética Dark Noir Sofisticada**: Fundo em **Preto Obsidiana** (`#09090b`) com gradientes rubis aveludados e tipografia de alto contraste (*Plus Jakarta Sans*), transmitindo elegância, modernidade e identidade visual única.
- **Identidade Temática Musical & Chase Atlantic**:
  - Elemento decorativo de disco de vinil interativo (*33 RPM*) em rotação contínua posicionado atrás da foto oficial.
  - Partículas e faixas musicais luminosas com rosa decorativa carmesim Chase Atlantic.
  - Paleta de cores em tons de **vermelho carmim/rubi** (`ruby-600`, `rose-500`, `red-600`) em botões, destaques e gradientes.
  - Equalizador gráfico de ondas sonoras dinâmico.
  - Divisão das seções no formato conceitual de faixas musicais (*Faixa 01 a Faixa 06*).
  - Mini reprodutor musical interativo com sintetizador de melodias relaxantes via **Web Audio API** (sem dependência de arquivos de áudio externos, com controle de play/pause e mute).
- **Animações Fluidas com Framer Motion**:
  - Introdução suave e escalonada (*stagger*) dos cards conforme o scroll da página.
  - Efeitos de hover refinados com elevação e microinterações.
- **Seção Oficial de Certificações**:
  - Miniaturas em alta definição dos certificados da **Fundação Bradesco (Escola Virtual)**:
    - *Microsoft Excel 2016 - Avançado* (30 horas)
    - *Microsoft Excel 2016 - Intermediário* (20 horas)
    - *Microsoft PowerPoint 2016 - Avançado* (8 horas)
    - *Microsoft PowerPoint 2016 - Básico* (8 horas)
  - Modal interativo com visualização detalhada, código oficial de autenticidade com botão de copiar, link para validação no portal e download do PDF original.
- **Formação Técnica IFAC**:
  - Apresentação completa das competências adquiridas no ensino técnico integrado (desenvolvimento web, arquitetura cliente-servidor, lógica e usabilidade).
- **Formulário de Contato & Interatividade**:
  - Validação e integração com link `mailto:`, além de celebração visual com confetes (`canvas-confetti`).

---

## 🛠️ Tecnologias Utilizadas

- **React 18** + **Vite 6**
- **Tailwind CSS 3** (paleta customizada e animações de vinil/equalizador)
- **Framer Motion 12** (animações de entrada e transições de cards)
- **Lucide React** (ícones vetoriais modernos)
- **Canvas Confetti** (microinterações celebratórias)

---

## 🚀 Como Executar o Projeto Localmente

1. Clone ou abra a pasta do projeto no terminal:
   ```bash
   cd Portifolio-Ana
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   Acesse no seu navegador: `http://localhost:5173/`

4. Para gerar a build de produção:
   ```bash
   npm run build
   ```

5. Para pré-visualizar a versão de produção:
   ```bash
   npm run preview
   ```

---

## 📂 Estrutura de Pastas

```
Portifolio-Ana/
├── public/
│   ├── certificates/          # PDFs e miniaturas PNG dos certificados
│   ├── images/                # Foto oficial da Ana Clara
│   └── favicon.svg            # Ícone SVG personalizado
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Menu de navegação superior com glassmorphism
│   │   ├── Hero.jsx           # Apresentação com vinil e foto oficial
│   │   ├── About.jsx          # Narrativa sobre trajetória e pilares
│   │   ├── Education.jsx      # Detalhes da formação no IFAC
│   │   ├── Certificates.jsx   # Cards animados e modal de certificados
│   │   ├── Skills.jsx         # Gráficos de competências técnicas e soft skills
│   │   ├── Projects.jsx       # Repertório de trabalhos e estudos aplicados
│   │   ├── Contact.jsx        # Formulário e canais diretos
│   │   ├── MusicPlayer.jsx    # Reprodutor musical ambiente via Web Audio API
│   │   └── Footer.jsx         # Rodapé com créditos e ondas sonoras
│   ├── data/
│   │   ├── certificatesData.js# Metadados e links dos certificados oficiais
│   │   └── portfolioData.js   # Informações biográficas estruturadas
│   ├── App.jsx                # Montagem dos componentes
│   ├── index.css              # Estilos base e utilitários
│   └── main.jsx               # Ponto de entrada React
├── package.json
├── tailwind.config.js
└── vite.config.js
```
