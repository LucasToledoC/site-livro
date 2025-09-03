# A Hora da Estrela - Site do Grupo de Trabalho

Este é um site desenvolvido em React.js sobre o livro "A Hora da Estrela" de Clarice Lispector, criado para um trabalho escolar.

## 🌟 Características

- **Design Responsivo**: Funciona perfeitamente em desktop e mobile
- **Paleta de Cores Temática**: Verde escuro, amarelo e verde água
- **Navegação Suave**: Scroll suave entre seções
- **Animações**: Efeitos visuais sutis e elegantes
- **Espaço para Vídeo**: Área dedicada para inserção manual de vídeo

## 📚 Conteúdo

- **Sinopse Completa**: Resumo detalhado da obra
- **Análise Literária**: Temas, características e importância
- **Sobre a Autora**: Biografia de Clarice Lispector
- **Espaço para Vídeo**: Área reservada para apresentação do grupo

## 🛠️ Tecnologias Utilizadas

- React.js
- Tailwind CSS
- Shadcn/ui Components
- Lucide Icons
- Vite (Build Tool)

## 🚀 Como Executar

### Desenvolvimento
```bash
cd hora-da-estrela-site
pnpm install
pnpm run dev
```

### Build para Produção
```bash
pnpm run build
```

Os arquivos de produção estarão na pasta `dist/`.

## 📱 Responsividade

O site foi desenvolvido com design responsivo, adaptando-se automaticamente a diferentes tamanhos de tela:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (até 767px)

## 🎨 Paleta de Cores

- **Verde Escuro**: oklch(0.3 0.15 150) - Cor primária
- **Verde Água**: oklch(0.7 0.15 180) - Cor de destaque
- **Amarelo**: oklch(0.85 0.12 60) - Cor secundária
- **Fundo**: oklch(0.98 0.02 120) - Cor de fundo

## 📹 Inserindo o Vídeo

Para inserir o vídeo do grupo, substitua o conteúdo da div com classe `video-container` no arquivo `src/App.jsx` por:

```jsx
<div className="video-container">
  <video controls className="w-full h-full rounded-lg">
    <source src="caminho-para-seu-video.mp4" type="video/mp4" />
    Seu navegador não suporta o elemento de vídeo.
  </video>
</div>
```

Ou para vídeos do YouTube:

```jsx
<div className="video-container">
  <iframe 
    className="w-full h-full rounded-lg"
    src="https://www.youtube.com/embed/SEU_VIDEO_ID"
    title="Apresentação do Grupo"
    frameBorder="0"
    allowFullScreen
  ></iframe>
</div>
```

## 📁 Estrutura do Projeto

```
hora-da-estrela-site/
├── public/
├── src/
│   ├── assets/
│   │   ├── capa_a_hora_da_estrela.jpg
│   │   ├── clarice_lispector.jpg
│   │   └── macabea_adormecida.png
│   ├── components/
│   │   └── ui/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── dist/ (após build)
├── package.json
└── README.md
```

## 🌐 Deploy

O projeto está pronto para deploy. Os arquivos de produção estão na pasta `dist/` após executar `pnpm run build`.

Você pode fazer deploy em:
- Vercel
- Netlify
- GitHub Pages
- Qualquer servidor web estático

## 👥 Grupo de Trabalho

Este site foi desenvolvido como parte de um trabalho escolar sobre "A Hora da Estrela" de Clarice Lispector.

---

*"Esta história acontece em estado de emergência e de calamidade pública."* - Clarice Lispector

