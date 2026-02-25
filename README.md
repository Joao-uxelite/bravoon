# 🎨 Bravo ON - Design System

Design System completo para o site Bravo ON, construído com **Next.js 14**, **Tailwind CSS**, **shadcn/ui** e **Framer Motion**.

## 📋 Estrutura do Projeto

```
bravo-on-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout raiz
│   │   ├── page.tsx            # Página inicial
│   │   └── design-system/
│   │       └── page.tsx        # Design System completo
│   ├── components/
│   │   └── ui/
│   │       ├── button.tsx      # Componente Button
│   │       ├── card.tsx        # Componente Card
│   │       ├── input.tsx       # Componente Input
│   │       └── badge.tsx       # Componente Badge
│   ├── lib/
│   │   └── utils.ts            # Utilitários (cn function)
│   └── styles/
│       └── globals.css         # Estilos globais
├── tailwind.config.ts          # Configuração Tailwind
├── postcss.config.js           # Configuração PostCSS
├── tsconfig.json               # Configuração TypeScript
├── next.config.js              # Configuração Next.js
└── package.json                # Dependências

```

## 🚀 Como Começar

### 1. Instalar Dependências

```bash
npm install
```

### 2. Executar o Servidor de Desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:3000`

### 3. Acessar o Design System

- **Página Inicial:** `http://localhost:3000`
- **Design System:** `http://localhost:3000/design-system`

## 🎨 Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Primary | #A67130 | CTAs, Headlines, Accents |
| Primary Dark | #8B5A24 | Hover states |
| Secondary | #312F1F | Backgrounds, Main text |
| Accent | #5B819E | Secondary elements, Links |
| Neutral Light | #F3EEE3 | Card backgrounds |
| Neutral Medium | #B5ADA4 | Borders, Disabled states |
| Neutral Dark | #EBDFD6 | Subtle backgrounds |
| Dark | #363636 | Text, Dark elements |

## 🔤 Tipografia

### Headlines (Lora - Serif)
- **H1:** 48px, Bold, Line-height 1.2
- **H2:** 36px, Bold, Line-height 1.3
- **H3:** 24px, Bold, Line-height 1.4

### Body (Inter - Sans-serif)
- **Body:** 16px, Regular, Line-height 1.6
- **Small:** 14px, Regular, Line-height 1.5
- **Caption:** 12px, Regular, Line-height 1.4

## 🧩 Componentes

### Button
```tsx
import { Button } from '@/components/ui/button'

<Button>Fazer a Consulta Online</Button>
<Button variant="secondary">Conhecer o Protocolo</Button>
<Button variant="outline">Começar com Bravo Hair</Button>
<Button variant="ghost">Saiba Mais</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button disabled>Desabilitado</Button>
```

### Card
```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

<Card>
  <CardHeader>
    <CardTitle>Título do Card</CardTitle>
  </CardHeader>
  <CardContent>
    Conteúdo do card
  </CardContent>
</Card>
```

### Input
```tsx
import { Input } from '@/components/ui/input'

<Input placeholder="Digite algo..." />
<Input type="email" placeholder="seu@email.com" />
<Input disabled placeholder="Desabilitado" />
```

### Badge
```tsx
import { Badge } from '@/components/ui/badge'

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="accent">Accent</Badge>
```

## 📐 Grid & Spacing

### Breakpoints
- **Mobile:** 375px - 767px (4 colunas)
- **Tablet:** 768px - 1023px (8 colunas)
- **Desktop:** 1024px+ (12 colunas)

### Espaçamento
- **xs:** 4px
- **sm:** 8px
- **md:** 16px
- **lg:** 24px
- **xl:** 32px
- **2xl:** 48px
- **3xl:** 64px
- **4xl:** 80px

## ✨ Animações

### Fade In Up
```tsx
<div className="animate-fade-in-up">Conteúdo</div>
```

### Fade In
```tsx
<div className="animate-fade-in">Conteúdo</div>
```

### Hover Scale
```tsx
<div className="hover-scale">Conteúdo</div>
```

### Transition Smooth
```tsx
<div className="transition-smooth">Conteúdo</div>
```

## ♿ Acessibilidade

- ✅ WCAG AA compliant
- ✅ Contraste mínimo 4.5:1
- ✅ Focus ring visível (2px outline)
- ✅ Navegação por teclado
- ✅ Suporte a reduced-motion
- ✅ ARIA labels quando necessário

## 🔨 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start

# Verificar tipos TypeScript
npm run type-check

# Lint do código
npm run lint
```

## 📦 Dependências Principais

- **Next.js 14+** - Framework React
- **Tailwind CSS 3.3+** - Utility-first CSS
- **shadcn/ui** - Componentes reutilizáveis
- **Framer Motion 10+** - Animações
- **TypeScript 5.3+** - Type safety
- **Class Variance Authority** - Variantes de componentes
- **clsx + tailwind-merge** - Merge de classes

## 🎯 Próximos Passos

1. ✅ Design System criado
2. ⏳ Criar seções do site (Hero, Value Prop, etc.)
3. ⏳ Integrar com backend/CRM
4. ⏳ Testes e otimização
5. ⏳ Deploy em Vercel

## 📚 Referências

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Framer Motion Documentation](https://www.framer.com/motion)

## 📄 Licença

Projeto Bravo ON © 2026

---

**Desenvolvido com ❤️ para Bravo ON**
