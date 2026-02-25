# 🚀 GUIA RÁPIDO - DESIGN SYSTEM BRAVO ON

## ✅ O que foi criado

Um **Design System completo e navegável** com:

- ✨ **Página Inicial** - Visão geral do projeto
- 🎨 **Design System Interativo** - Explorador de cores, tipografia, componentes
- 🧩 **Componentes Base** - Button, Card, Input, Badge (shadcn/ui)
- 🎯 **Tailwind CSS** - Configuração completa com cores e tipografia Bravo ON
- 📱 **Responsivo** - Mobile-first, desktop-ready
- ♿ **Acessível** - WCAG AA compliant
- ✨ **Animações** - Fade-in, hover effects, transitions

---

## 🏃 Como Executar

### 1. Instalar dependências
```bash
npm install
```

### 2. Rodar servidor de desenvolvimento
```bash
npm run dev
```

### 3. Abrir no navegador
- **Página Inicial:** http://localhost:3000
- **Design System:** http://localhost:3000/design-system

---

## 📂 Estrutura de Arquivos

```
src/
├── app/
│   ├── page.tsx                    # Página inicial
│   ├── layout.tsx                  # Layout raiz
│   └── design-system/
│       └── page.tsx                # Design System completo
├── components/
│   └── ui/
│       ├── button.tsx              # Botão
│       ├── card.tsx                # Card
│       ├── input.tsx               # Input
│       └── badge.tsx               # Badge
├── lib/
│   └── utils.ts                    # Utilitários
└── styles/
    └── globals.css                 # Estilos globais

tailwind.config.ts                  # Configuração Tailwind
postcss.config.js                   # Configuração PostCSS
```

---

## 🎨 Paleta de Cores (Tailwind)

```css
/* Usar diretamente no Tailwind */
bg-primary              /* #A67130 */
bg-primary-dark         /* #8B5A24 */
bg-secondary            /* #312F1F */
bg-accent               /* #5B819E */
bg-neutral-light        /* #F3EEE3 */
bg-neutral-medium       /* #B5ADA4 */
bg-neutral-dark         /* #EBDFD6 */
bg-dark                 /* #363636 */

text-primary
text-secondary
text-accent
text-dark
```

---

## 🔤 Tipografia (Tailwind)

```css
/* Headlines - Lora (Serif) */
text-h1                 /* 48px, Bold */
text-h2                 /* 36px, Bold */
text-h3                 /* 24px, Bold */

/* Body - Inter (Sans-serif) */
text-body               /* 16px, Regular */
text-small              /* 14px, Regular */
text-caption            /* 12px, Regular */

/* Aplicar fonte */
font-serif              /* Lora */
font-sans               /* Inter */
```

---

## 🧩 Como Usar Componentes

### Button
```tsx
import { Button } from '@/components/ui/button'

// Variantes
<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Tamanhos
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>

// Estados
<Button disabled>Desabilitado</Button>
```

### Card
```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
  </CardHeader>
  <CardContent>
    Conteúdo
  </CardContent>
</Card>
```

### Input
```tsx
import { Input } from '@/components/ui/input'

<Input placeholder="Digite..." />
<Input type="email" placeholder="email@example.com" />
<Input disabled />
```

### Badge
```tsx
import { Badge } from '@/components/ui/badge'

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="accent">Accent</Badge>
```

---

## ✨ Animações Disponíveis

```tsx
// Fade in com slide up
<div className="animate-fade-in-up">Conteúdo</div>

// Fade in simples
<div className="animate-fade-in">Conteúdo</div>

// Hover com scale
<div className="hover-scale">Conteúdo</div>

// Transição suave
<div className="transition-smooth">Conteúdo</div>

// Focus ring
<input className="focus-ring" />
```

---

## 📐 Espaçamento (Tailwind)

```css
/* Padding/Margin */
p-4                    /* 16px */
p-6                    /* 24px */
p-8                    /* 32px */
p-12                   /* 48px */

/* Seções */
py-section             /* 80px vertical (desktop) */
py-section-tablet      /* 60px vertical (tablet) */
py-section-mobile      /* 40px vertical (mobile) */
```

---

## 🎯 Próximos Passos

1. **Criar seções do site:**
   - Hero
   - Value Proposition
   - Problema
   - Solução
   - Produtos
   - Como Funciona
   - Prova Social
   - FAQ
   - Footer

2. **Adicionar páginas:**
   - `/` - Home
   - `/sobre` - Sobre
   - `/contato` - Contato
   - `/politica-privacidade` - Política de Privacidade

3. **Integrar com backend:**
   - Formulários
   - CRM
   - Analytics

4. **Deploy:**
   - Vercel
   - Domain
   - SSL

---

## 📚 Documentação

- **Blueprint Completo:** `bravo-on-blueprint.md`
- **Análise de Fontes:** `analise-lora-vs-merriweather.md`
- **Comparação Visual:** `font-comparison.html`

---

## 🔗 Links Úteis

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Docs](https://ui.shadcn.com)
- [Framer Motion Docs](https://www.framer.com/motion)

---

## 💡 Dicas

1. **Sempre use as classes Tailwind** em vez de CSS customizado
2. **Reutilize componentes** da pasta `ui/`
3. **Mantenha a consistência** de cores e tipografia
4. **Teste em mobile** durante o desenvolvimento
5. **Use o Design System** como referência

---

**Pronto para começar! 🚀**

Execute `npm run dev` e acesse http://localhost:3000
