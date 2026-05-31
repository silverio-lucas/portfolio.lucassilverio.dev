import { ArrowRight, Award, BadgeCheck, Braces, ChevronRight, Code2, Component, ExternalLink, FileText, Github, Layers, Linkedin, Mail, Menu, MousePointer2, PanelsTopLeft, RefreshCw, ShieldCheck, Sparkles, X, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import curriculo from "../imports/lucassilverio-pd-ux.pdf?url";

const WHATSAPP = "https://wa.me/5531987638437";

const nav = ["Cases", "Processo", "Design System", "Sobre", "Contato"];
const capabilities = [
  ["UX/UI Design", "Interfaces claras, hierarquia visual, responsividade e experiência de uso.", PanelsTopLeft],
  ["Design Systems", "Tokens, componentes, estados, padrões e documentação para times.", Component],
  ["Front-end UI", "Implementação orientada a componentes com React, Next.js, HTML, CSS e deploy na Vercel.", Code2],
];
const cases = [
  ["Redesign conceitual de landing page GovTech", "Modernização de uma landing page B2G para comunicar valor, confiança e clareza para prefeituras e câmaras municipais.", ["UX/UI", "B2G", "Landing Page", "v0", "Vercel"]],
  ["Mini Design System para portais públicos", "Estruturação de tokens, componentes, tabelas, cards, formulários, estados e diretrizes visuais para interfaces governamentais.", ["Design System", "Figma", "Componentes", "Acessibilidade"]],
  ["Protótipo implementado em React/Next.js", "Conversão de uma interface visual em projeto front-end responsivo, componentizado e publicado na Vercel.", ["React", "Next.js", "Front-end UI", "Vercel"]],
];
const process = ["Diagnóstico", "Estrutura", "Interface", "Handoff", "Implementação"];
const processText = ["Entender problema, público, contexto e restrições.", "Organizar informação, fluxos, componentes e prioridades.", "Criar visual consistente, acessível e responsivo.", "Documentar decisões para facilitar implementação.", "Transformar protótipo em front-end quando necessário."];
const credentials = [
  { name: "Product Design: Da Colaboração à Estratégia", institution: "The Starter", tag: "Product Design", icon: PanelsTopLeft },
  { name: "Digital Product Design: Build a Flexible Design System That Lasts", institution: "Skillshare", tag: "Design System", icon: Layers },
  { name: "Figma do início ao fim", institution: "Domestika", tag: "Figma", icon: Component },
  { name: "Product Designer", institution: "Google", tag: "UX/UI", icon: Award },
  { name: "Professional Scrum Master I — PSM I", institution: "Scrum.org", tag: "Agile", icon: RefreshCw },
  { name: "Kanban Practitioner — TKP", institution: "Kanban University", tag: "Kanban", icon: Zap },
];

const stack = {
  Design: ["Figma", "Figma Make", "v0", "Affinity", "Canva", "Photoshop", "Illustrator", "XD"],
  Produto: ["UX/UI", "auditoria UX", "acessibilidade", "design systems", "documentação", "handoff"],
  "Front-end": ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Node.js", "GitHub", "Vercel"],
};

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full border border-border bg-secondary/70 px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground">{children}</span>;
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14"><p className="mb-3 font-mono text-xs uppercase tracking-[0.32em] text-primary">{eyebrow}</p><h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground md:text-5xl">{title}</h2>{text && <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">{text}</p>}</div>;
}

function DashboardMock() {
  const items = ["Auditoria UX", "Design System", "Protótipo Figma", "Implementação Next.js", "Deploy Vercel", "Acessibilidade"];
  return <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative rounded-3xl border border-border bg-card/80 p-3 shadow-2xl shadow-black/50 backdrop-blur">
    <div className="absolute -inset-1 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/25 via-transparent to-white/5 blur-xl" />
    <div className="rounded-2xl border border-border bg-[#07090b] p-4">
      <div className="mb-5 flex items-center justify-between border-b border-border pb-4"><div className="flex gap-2"><span className="size-2.5 rounded-full bg-red-400/70" /><span className="size-2.5 rounded-full bg-yellow-300/70" /><span className="size-2.5 rounded-full bg-primary/80" /></div><span className="font-mono text-xs text-muted-foreground">portfolio.audit</span></div>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item, i) => <div key={item} className="rounded-2xl border border-border bg-secondary/50 p-4 transition duration-300 hover:-translate-y-1 hover:border-primary/40"><div className="mb-4 flex items-center justify-between"><span className="font-mono text-[10px] text-muted-foreground">0{i + 1}</span><span className="rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary">ready</span></div><p className="text-sm font-medium">{item}</p><div className="mt-4 h-1.5 rounded-full bg-muted"><div className="h-full rounded-full bg-primary" style={{ width: `${52 + i * 7}%` }} /></div></div>)}
      </div>
      <div className="mt-4 rounded-2xl border border-border bg-background/70 p-4"><div className="mb-3 flex items-center gap-2 text-sm"><ShieldCheck className="size-4 text-primary" /> Clareza, consistência e escala</div><div className="grid grid-cols-4 gap-2">{["#050608", "#0b0f12", "#5ee0a0", "#eef2f0"].map(c => <div key={c} className="h-10 rounded-xl border border-border" style={{ backgroundColor: c }} />)}</div></div>
    </div>
  </motion.div>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#" className="font-semibold tracking-[-0.03em]">Lucas Silvério</a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {nav.map(n => <a key={n} href={`#${n.toLowerCase().replace(' ', '-')}`} className="hover:text-foreground">{n}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="rounded-full border border-border bg-secondary px-4 py-2 text-sm transition hover:border-primary/50 hover:bg-primary hover:text-primary-foreground">Entrar em contato</a>
          <button className="md:hidden rounded-full border border-border bg-secondary p-2 text-muted-foreground transition hover:text-foreground" onClick={() => setOpen(o => !o)} aria-label="Menu">
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border/70 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-4 gap-1">
            {nav.map(n => (
              <a key={n} href={`#${n.toLowerCase().replace(' ', '-')}`} className="rounded-xl px-3 py-3 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground" onClick={() => setOpen(false)}>
                {n}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default function App() {
  return <main className="min-h-screen bg-background font-['Inter'] text-foreground selection:bg-primary selection:text-primary-foreground">
    <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_70%_10%,rgba(94,224,160,.14),transparent_34%),linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:auto,64px_64px,64px_64px]" />
    <Navbar />

    <section className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1fr_.92fr] px-[20px] pt-[40px] pb-[112px]"><div><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/70 px-3 py-1.5 font-mono text-xs text-muted-foreground"><Sparkles className="size-3.5 text-primary" /> Product Design técnico • UX/UI • Front-end UI</div><h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.06em] md:text-7xl">Interfaces web mais claras, consistentes e escaláveis</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">Sou Web Designer formado em Design Gráfico e pós-graduando em Desenvolvimento Full Stack. Atuo na interseção entre UX/UI, design systems, acessibilidade e front-end.</p><div className="mt-8 flex flex-wrap gap-3"><a href="#cases" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">Ver cases <ArrowRight className="size-4" /></a><a href={curriculo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-3 text-sm transition hover:border-primary/50 hover:text-foreground">Ver currículo <FileText className="size-4" /></a></div></div><DashboardMock /></section>

    <section className="mx-auto max-w-7xl px-5 py-16"><SectionTitle eyebrow="Posicionamento" title="Entre o Figma e o código" text="Uma atuação híbrida para transformar decisões de interface em sistemas consistentes e implementáveis." /><div className="grid gap-4 md:grid-cols-3">{capabilities.map(([t, d, Icon]) => <div key={String(t)} className="rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40"><Icon className="mb-8 size-7 text-primary" /><h3 className="text-xl font-semibold tracking-[-0.03em]">{t as string}</h3><p className="mt-3 leading-7 text-muted-foreground">{d as string}</p></div>)}</div></section>

    <section id="cases" className="mx-auto max-w-7xl px-5 py-16"><SectionTitle eyebrow="Cases" title="Projetos selecionados" /><div className="grid gap-5 lg:grid-cols-3">{cases.map(([title, desc, tags], i) => <article key={String(title)} className="group rounded-3xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-primary/40"><div className="mb-6 rounded-2xl border border-border bg-background p-4"><div className="mb-4 flex items-center justify-between"><span className="font-mono text-xs text-muted-foreground">CASE 0{i + 1}</span><ExternalLink className="size-4 text-muted-foreground group-hover:text-primary" /></div><div className="space-y-2">{[1,2,3].map(n => <div key={n} className="h-8 rounded-lg border border-border bg-secondary/60" />)}</div></div><h3 className="text-xl font-semibold tracking-[-0.03em]">{title as string}</h3><p className="mt-3 min-h-24 leading-7 text-muted-foreground">{desc as string}</p><div className="mt-5 flex flex-wrap gap-2">{(tags as string[]).map(tag => <Pill key={tag}>{tag}</Pill>)}</div><button className="mt-6 inline-flex items-center gap-2 text-sm text-primary">Ver case <ChevronRight className="size-4" /></button></article>)}</div></section>

    <section id="processo" className="mx-auto max-w-7xl px-5 py-16"><SectionTitle eyebrow="Processo" title="Design não é só tela bonita" /><div className="grid gap-3 md:grid-cols-5">{process.map((p, i) => <div key={p} className="rounded-2xl border border-border bg-secondary/45 p-5"><span className="font-mono text-xs text-primary">0{i + 1}</span><h3 className="mt-6 font-semibold">{p}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{processText[i]}</p></div>)}</div></section>

    <section id="design-system" className="mx-auto max-w-7xl px-5 py-16"><SectionTitle eyebrow="Design System" title="Interfaces mais consistentes com sistemas de componentes" /><div className="grid gap-5 rounded-3xl border border-border bg-card p-5 lg:grid-cols-[.9fr_1.1fr]"><div className="space-y-4 rounded-2xl border border-border bg-background p-5"><button className="rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground transition hover:opacity-90">Primary</button><button className="ml-3 rounded-lg border border-border px-4 py-2 text-sm transition hover:border-primary/50 hover:text-foreground">Secondary</button><div className="rounded-xl border border-border bg-input-background px-3 py-3 text-sm text-muted-foreground">lucas@lucassilverio.dev</div><div className="rounded-xl border border-primary/30 bg-primary/10 p-4 text-sm text-accent-foreground">Alerta: componente documentado com estados e foco.</div></div><div className="overflow-hidden rounded-2xl border border-border"><div className="grid grid-cols-3 border-b border-border bg-secondary p-3 font-mono text-xs text-muted-foreground"><span>Token</span><span>Uso</span><span>Valor</span></div>{[["primary","CTA / foco","#5ee0a0"],["radius","cards","12px"],["space","grid","8px scale"],["type","body","Inter"]].map(r => <div key={r[0]} className="grid grid-cols-3 border-b border-border p-3 text-sm last:border-0"><span>{r[0]}</span><span className="text-muted-foreground">{r[1]}</span><span className="font-mono text-primary">{r[2]}</span></div>)}</div></div></section>

    <section id="sobre" className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-[.9fr_1.1fr]"><div><p className="mb-3 font-mono text-xs uppercase tracking-[0.32em] text-primary">Sobre</p><h2 className="text-4xl font-semibold tracking-[-0.05em]">Quem está por trás</h2></div><div><p className="text-lg leading-8 text-muted-foreground">Sou Lucas Silvério, Web Designer formado em Design Gráfico e pós-graduando em Desenvolvimento Full Stack pela PUC Minas. Minha atuação combina design visual, UX/UI, acessibilidade, design systems e front-end. Tenho interesse especial por interfaces web, portais públicos, produtos B2G e sistemas digitais que precisam ganhar clareza, consistência e qualidade visual.</p><div className="mt-6 flex flex-wrap gap-2">{["Formação em Design Gráfico", "Pós em Desenvolvimento Full Stack", "Foco em UX/UI e Design Systems", "React, Next.js e Node.js", "Acessibilidade e produto digital"].map(x => <Pill key={x}>{x}</Pill>)}</div></div></section>

    <section className="mx-auto max-w-7xl px-5 py-16"><SectionTitle eyebrow="Stack" title="Ferramentas e tecnologias" /><div className="grid gap-4 md:grid-cols-3">{Object.entries(stack).map(([group, tools]) => <div key={group} className="rounded-3xl border border-border bg-card p-6"><h3 className="mb-5 flex items-center gap-2 font-semibold"><Braces className="size-4 text-primary" />{group}</h3><div className="flex flex-wrap gap-2">{tools.map(t => <Pill key={t}>{t}</Pill>)}</div></div>)}</div></section>

    <section className="mx-auto max-w-7xl px-5 py-16">
      <SectionTitle eyebrow="Credenciais" title="Formação complementar" text="Certificações selecionadas em Product Design, Design Systems, UX/UI e métodos ágeis." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {credentials.map(({ name, institution, tag, icon: Icon }) => (
          <div key={name} className="group relative rounded-3xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-primary/40">
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary/60">
                <Icon className="size-4 text-primary" />
              </div>
              <span className="rounded-full border border-border bg-secondary/70 px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground">{tag}</span>
            </div>
            <h3 className="text-sm font-semibold leading-snug tracking-[-0.02em]">{name}</h3>
            <p className="mt-1.5 text-xs text-muted-foreground">{institution}</p>
            <a href="#" className="mt-4 inline-flex items-center gap-1 text-xs text-muted-foreground/60 transition hover:text-primary">
              Ver credencial <ChevronRight className="size-3" />
            </a>
          </div>
        ))}
      </div>
    </section>

    <section id="contato" className="mx-auto max-w-5xl px-5 py-20 text-center"><div className="rounded-[2rem] border border-border bg-gradient-to-br from-card to-secondary p-8 md:p-14"><BadgeCheck className="mx-auto mb-5 size-9 text-primary" /><h2 className="text-3xl font-semibold tracking-[-0.05em] md:text-5xl">Precisa de alguém que conecte design, produto e front-end?</h2><p className="mx-auto mt-5 max-w-3xl text-muted-foreground">Estou aberto a oportunidades em Product Design, UX/UI, Design Systems e Front-end UI.</p><div className="mt-8 flex justify-center gap-3"><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground transition hover:opacity-90">Entrar em contato</a><a href={curriculo} download="Lucas_Silverio_-_Product_Designer.pdf" className="rounded-full border border-border px-5 py-3 text-sm transition hover:border-primary/50 hover:text-foreground">Baixar currículo</a></div></div></section>

    <footer className="border-t border-border px-5 py-10"><div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between"><div><p className="font-semibold text-foreground">Lucas Silvério</p><p>Product Designer Técnico | UX/UI | Design Systems | Front-end UI</p></div><div className="flex items-center gap-4">
  <a href="https://www.linkedin.com/in/lucassilverio/" target="_blank" rel="noopener noreferrer" className="transition hover:text-foreground"><Linkedin className="size-4" /></a>
  <a href="https://github.com/silverio-lucas" target="_blank" rel="noopener noreferrer" className="transition hover:text-foreground"><Github className="size-4" /></a>
  <a href="https://savee.com/lucassilverio/" target="_blank" rel="noopener noreferrer" className="transition hover:text-foreground"><svg width="20" height="16" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-auto"><path d="M13 3C13 3 7 3 7 7.5C7 12 13 10 13 14.5C13 17 9 17 7 17" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/><path d="M15 17C15 17 21 17 21 12.5C21 8 15 10 15 5.5C15 3 19 3 21 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></svg></a>
  <a href="mailto:lucas.jprm27@gmail.com" className="transition hover:text-foreground"><Mail className="size-4" /></a>
  <a href="https://wa.me/5531987638437" target="_blank" rel="noopener noreferrer" className="transition hover:text-foreground"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="size-4"><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.41A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm0 18a7.96 7.96 0 0 1-4.078-1.117l-.292-.174-3.035.86.872-2.958-.19-.304A7.96 7.96 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8Zm4.406-5.846c-.242-.121-1.43-.705-1.651-.786-.222-.08-.383-.12-.545.121-.16.242-.625.786-.766.947-.14.162-.282.182-.524.06-.242-.12-1.022-.376-1.947-1.2-.72-.642-1.206-1.434-1.347-1.676-.141-.242-.015-.373.106-.493.109-.108.242-.282.363-.423.12-.14.16-.242.242-.403.08-.162.04-.303-.02-.424-.061-.12-.545-1.313-.747-1.798-.196-.472-.396-.408-.545-.415l-.464-.008a.89.89 0 0 0-.645.303c-.222.242-.847.827-.847 2.017s.867 2.34.988 2.502c.12.161 1.706 2.604 4.134 3.652.578.25 1.029.398 1.38.51.58.184 1.108.158 1.526.096.465-.07 1.43-.584 1.631-1.148.202-.565.202-1.049.141-1.149-.06-.1-.222-.162-.464-.283Z"/></svg></a>
</div></div></footer>
  </main>;
}
