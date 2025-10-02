# HARD MODE GYM - Landing Page

![Status do Projeto](https://img.shields.io/badge/status-concluído-brightgreen)
![Licença](https://img.shields.io/badge/licença-MIT-blue)

<p align="center">
  <img src="images/HomePage_Print.png" alt="Screenshot da Home do Hard Mode Gym" width="800"/>
</p>

> Landing page do sistema de controle de acesso para academias "Hard Mode Gym". Um projeto que une a paixão por tecnologia e musculação, com foco em uma identidade visual forte, direta e sem frescuras.

<br>

## 📋 Tabela de Conteúdos

- [HARD MODE GYM - Landing Page](#hard-mode-gym---landing-page)
  - [📋 Tabela de Conteúdos](#-tabela-de-conteúdos)
  - [📖 Sobre o Projeto](#-sobre-o-projeto)
  - [✨ Funcionalidades](#-funcionalidades)
  - [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
  - [🚀 Como Executar](#-como-executar)

<br>

## 📖 Sobre o Projeto

O **Hard Mode Gym** nasceu como um Trabalho de Conclusão de Curso (TCC) com o objetivo de criar não apenas um sistema funcional de controle de acesso para academias, mas também uma marca com uma identidade forte. Esta landing page serve como a vitrine do projeto, apresentando seus conceitos, funcionalidades e a filosofia "sem desculpas, só resultados".

O site foi construído do zero, com foco em uma experiência de usuário fluida, design responsivo e interações que refletem a energia do projeto.

<br>

## ✨ Funcionalidades

- **🎨 Design Responsivo:** Totalmente funcional em desktops, tablets e celulares.
- **🌗 Tema Claro e Escuro:** Alternância de tema para preferência do usuário.
- **🔥 Modo "HARD MODE":** Um tema alternativo "brutal" que muda textos e a identidade visual do site.
- **📄 Navegação SPA:** Transição suave entre as seções (Início, Sobre, Versões, Contato) sem recarregar a página.
- **🃏 Cards Interativos:** Efeito de "flip" nos cards da seção "Versões" para exibir detalhes.
- **🖼️ Modal de Imagens:** Visualização em tela cheia das imagens dos recursos do sistema.
- **✉️ Formulário de Contato:** Integração com **EmailJS** para envio de e-mails diretamente do site.
- **🌟 Animações Sutis:** Efeitos de fade-in e scroll para uma experiência mais dinâmica.

<br>

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

- **HTML5:** Estruturação semântica do conteúdo.
- **CSS3:** Estilização, responsividade, variáveis CSS para temas, Flexbox e Grid Layout.
- **JavaScript (Vanilla):** Manipulação do DOM, interatividade, troca de temas e lógica de navegação.
- **EmailJS:** Serviço para envio de e-mails pelo lado do cliente.

<br>

## 🚀 Como Executar

Para executar o projeto localmente e com todas as funcionalidades, siga estes passos:

1. Clone o repositório:
   ```
   git clone [https://github.com/SEU-USUARIO/hardmode-gym-landing-page.git](https://github.com/SEU-USUARIO/hardmode-gym-landing-page.git)
   Navegue até a pasta do projeto:
   ```
Navegue até a pasta do projeto:
cd hardmode-gym-landing-page

### ⚙️ Configuração do Ambiente

**Aviso Importante sobre as Chaves da API:**

Este repositório inclui as chaves de API do [EmailJS](https://www.emailjs.com/) para fins de demonstração da funcionalidade no site principal. No entanto, por segurança, elas estão configuradas no painel do EmailJS para funcionar **exclusivamente no domínio de produção original**.

Isso significa que, se você clonar ou baixar este projeto para executá-lo em outro ambiente (localmente ou em outra hospedagem), o formulário de contato falhará.

**Para habilitar o envio de e-mail na sua própria versão do projeto, siga os passos:**

1.  Crie uma conta gratuita no **[EmailJS](https://www.emailjs.com/)**.
2.  Configure seu próprio serviço de e-mail (Service) e crie seus próprios modelos (Templates).
3.  Substitua as chaves existentes no arquivo `config.js` (ou diretamente no `script.js`, se for o caso) pelas **suas próprias chaves** (Public Key, Service ID, Template IDs).
4.  No painel do EmailJS, na seção de segurança do seu serviço, adicione o seu domínio (ex: `localhost`, ou a URL do seu site) à **"Allowlist"** (Lista de Permissões) para que as chaves funcionem.


📜 Licença -
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
