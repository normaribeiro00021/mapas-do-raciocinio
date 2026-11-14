import { createFileRoute } from "@tanstack/react-router";
import { MODULES, FAQ, REFERENCES } from "@/lib/offer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luto em Mapas — 60 Mapas Visuais de Psicologia do Luto" },
      {
        name: "description",
        content:
          "60 mapas visuais que conectam teoria, vínculos, significados e contextos de perda. Referência educacional para estudantes e profissionais de Psicologia.",
      },
      { property: "og:title", content: "Luto em Mapas — 60 Mapas Visuais de Psicologia do Luto" },
      {
        property: "og:description",
        content: "A mesma manifestação. Diferentes histórias. Compreenda o luto além das manifestações isoladas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// Link do checkout: substituir quando a oferta comercial estiver aprovada.
const CHECKOUT_URL = "#oferta";

function Cta({ label = "QUERO MEUS 60 MAPAS VISUAIS", dark = false }: { label?: string; dark?: boolean }) {
  return (
    <a
      href={CHECKOUT_URL}
      className={`block w-full rounded-xl bg-cta px-5 py-4 text-center font-display text-base font-extrabold tracking-wide text-cta-foreground shadow-lg transition active:scale-[0.98] ${dark ? "shadow-black/30" : "shadow-cta/30"}`}
    >
      {label} →
    </a>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`mb-3 font-display text-xs font-bold uppercase tracking-[0.18em] ${light ? "text-highlight" : "text-secondary"}`}>
      {children}
    </p>
  );
}

function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`px-5 py-14 ${className}`}>
      <div className="mx-auto max-w-xl">{children}</div>
    </section>
  );
}

/* Mockup em CSS puro: zero imagens, carregamento instantâneo */
function MapPage({ variant, className = "" }: { variant: "net" | "compare" | "concept"; className?: string }) {
  return (
    <div className={`absolute rounded-md border border-border bg-card p-2 shadow-xl ${className}`}>
      <div className="mb-1.5 h-1.5 w-2/3 rounded bg-primary/80" />
      <div className="mb-2 h-1 w-1/2 rounded bg-muted-foreground/30" />
      {variant === "net" && (
        <svg viewBox="0 0 100 90" className="w-full">
          {[[50, 45, 20, 18], [50, 45, 80, 18], [50, 45, 18, 72], [50, 45, 82, 72], [50, 45, 50, 82]].map(([a, b, c, d], i) => (
            <line key={i} x1={a} y1={b} x2={c} y2={d} className="stroke-secondary" strokeWidth="1.2" />
          ))}
          <circle cx="50" cy="45" r="12" className="fill-primary" />
          {[[20, 18], [80, 18], [18, 72], [82, 72], [50, 82]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="7" className={i % 2 ? "fill-accent" : "fill-secondary"} />
          ))}
        </svg>
      )}
      {variant === "compare" && (
        <div className="grid grid-cols-3 gap-1">
          {["bg-secondary", "bg-accent", "bg-destructive"].map((c) => (
            <div key={c} className="space-y-1">
              <div className={`h-3 rounded-sm ${c}`} />
              <div className="h-1 rounded bg-muted" />
              <div className="h-1 rounded bg-muted" />
              <div className="h-1 w-2/3 rounded bg-muted" />
            </div>
          ))}
        </div>
      )}
      {variant === "concept" && (
        <div className="space-y-1.5">
          <div className="mx-auto h-4 w-1/2 rounded bg-primary" />
          <div className="flex justify-between gap-1">
            <div className="h-3 flex-1 rounded bg-secondary/70" />
            <div className="h-3 flex-1 rounded bg-accent/70" />
          </div>
          <div className="h-1 rounded bg-muted" />
          <div className="h-1 w-4/5 rounded bg-muted" />
        </div>
      )}
    </div>
  );
}

function HeroMockup() {
  return (
    <div className="relative mx-auto mt-8 h-[330px] w-full max-w-[340px]" aria-hidden>
      <MapPage variant="compare" className="left-0 top-10 w-[42%] -rotate-6" />
      <MapPage variant="net" className="right-0 top-6 w-[42%] rotate-6" />
      <MapPage variant="concept" className="bottom-0 left-2 w-[38%] -rotate-3" />
      <div className="absolute left-1/2 top-0 z-10 flex h-[300px] w-[58%] -translate-x-1/2 flex-col justify-between rounded-lg bg-primary p-4 text-primary-foreground shadow-2xl ring-1 ring-primary-foreground/10">
        <div>
          <p className="font-display text-[9px] font-bold uppercase tracking-[0.2em] text-secondary">Psicologia do Luto</p>
          <svg viewBox="0 0 100 70" className="my-3 w-full opacity-90">
            {[[50, 35, 15, 10], [50, 35, 85, 10], [50, 35, 12, 60], [50, 35, 88, 60], [15, 10, 85, 10]].map(([a, b, c, d], i) => (
              <line key={i} x1={a} y1={b} x2={c} y2={d} className="stroke-secondary" strokeWidth="0.8" />
            ))}
            <circle cx="50" cy="35" r="9" className="fill-secondary" />
            {[[15, 10], [85, 10], [12, 60], [88, 60]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="4.5" className="fill-accent" />
            ))}
          </svg>
          <p className="font-display text-2xl font-extrabold leading-none">Luto em<br />Mapas</p>
          <p className="mt-2 text-[10px] leading-tight text-primary-foreground/70">Raciocínio Clínico, Contextos e Processos Psicológicos do Luto</p>
        </div>
        <div className="flex items-end justify-between">
          <span className="font-display text-4xl font-extrabold leading-none text-highlight">60</span>
          <span className="text-right text-[9px] uppercase leading-tight tracking-wider text-primary-foreground/70">mapas<br />visuais</span>
        </div>
      </div>
    </div>
  );
}

const STORIES = [
  {
    tag: "História 01",
    title: "Arrependimento",
    text: "Sente culpa por ter discutido com alguém próximo pouco antes de sua morte.",
    dims: ["História do relacionamento", "Conflitos anteriores", "Arrependimento", "Significados da última conversa"],
    color: "border-secondary",
    dot: "bg-secondary",
  },
  {
    tag: "História 02",
    title: "Responsabilidade percebida",
    text: "Acredita que deveria ter percebido mais cedo o agravamento da doença de um familiar.",
    dims: ["Informações disponíveis no momento", "Responsabilidades reais e percebidas", "Pensamentos retrospectivos", "Expectativas sobre o próprio papel"],
    color: "border-accent",
    dot: "bg-accent",
  },
  {
    tag: "História 03",
    title: "Lealdade e retomada da vida",
    text: "Sente culpa ao voltar a realizar atividades prazerosas após a morte do companheiro.",
    dims: ["Significados da retomada da vida", "Crenças sobre lealdade", "Continuidade simbólica do vínculo", "Identidade e expectativas sociais"],
    color: "border-destructive",
    dot: "bg-destructive",
  },
];

const MECHANISM = [
  ["01", "Contrastar", "Reconheça semelhanças e diferenças entre manifestações presentes em diferentes experiências de perda."],
  ["02", "Contextualizar", "Relacione a história da perda aos vínculos, aos significados e ao contexto de vida."],
  ["03", "Relacionar", "Visualize possíveis conexões entre emoções, pensamentos, comportamentos e funcionamento."],
  ["04", "Investigar", "Reconheça informações relevantes, hipóteses alternativas e limites de interpretação."],
];

const INCLUDES = [
  "60 mapas visuais de conteúdo",
  "6 módulos de Psicologia do Luto",
  "Mapas conceituais e painéis de contraste clínico",
  "Redes de processos psicológicos",
  "Matrizes contextuais e trajetórias",
  "Situações clínicas fictícias e comentadas",
  "Perguntas-chave de aprendizagem",
  "Referências por tema + bibliografia consolidada",
  "Mapa final de integração do conhecimento",
];

const BEFORE = ["Conhecimentos fragmentados", "Conceitos estudados isoladamente", "Explicações simplificadas demais", "Conteúdo espalhado em livros, artigos e aulas", "Busca de uma única explicação para situações complexas"];
const AFTER = ["Conhecimentos visualmente organizados", "Relações claras entre conceitos", "Diferenças e sobreposições entre manifestações", "Familiaridade com vários referenciais teóricos", "Uma referência integrada de estudo e consulta"];

function Index() {
  return (
    <main className="min-h-screen bg-background font-sans text-[17px] leading-relaxed text-foreground">
      {/* DOBRA 01 — HERO */}
      <header className="bg-primary px-5 pb-12 pt-8 text-primary-foreground">
        <div className="mx-auto max-w-xl">
          <p className="text-center font-display text-[11px] font-bold uppercase tracking-[0.18em] text-highlight">
            Psicologia do Luto · Referência educacional visual
          </p>
          <h1 className="mt-5 text-center text-[1.75rem] font-extrabold leading-[1.15]">
            <span className="text-highlight">60 Mapas Visuais</span> de Psicologia do Luto para compreender diferentes experiências de perda e desenvolver um raciocínio mais contextualizado
          </h1>
          <p className="mt-4 text-center text-base text-primary-foreground/80">
            Fundamentos, manifestações, diferenças clínicas, vínculos, contextos e processos de adaptação — em mapas que conectam teoria, situações e hipóteses de compreensão.
          </p>
          <HeroMockup />
          <ul className="mt-8 grid grid-cols-2 gap-2 text-sm">
            {["60 mapas visuais", "6 módulos educacionais", "Fundamentação científica", "Digital e imprimível (A4)"].map((t) => (
              <li key={t} className="rounded-lg bg-primary-foreground/5 px-3 py-2.5 text-center font-semibold ring-1 ring-primary-foreground/10">
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Cta dark />
          </div>
          <p className="mt-3 text-center text-xs text-primary-foreground/60">Para estudantes e profissionais de Psicologia</p>
        </div>
      </header>

      {/* DOBRA 02 — DOR */}
      <Section>
        <Eyebrow>O desafio</Eyebrow>
        <h2 className="text-2xl font-extrabold leading-tight text-primary">
          Conhecer a teoria do luto é uma coisa. Conseguir relacioná-la a diferentes situações clínicas é outra.
        </h2>
        <p className="mt-4">
          Dá pra estudar os principais modelos do luto, conhecer as manifestações emocionais e dominar conceitos importantes — e ainda assim travar na hora de relacionar tudo isso diante de uma situação concreta.
        </p>
        <ul className="mt-6 space-y-3">
          {[
            "A culpa pode assumir diferentes significados.",
            "O silêncio pode representar experiências distintas.",
            "O isolamento pode estar ligado a diferentes circunstâncias.",
            "Retomar a rotina não significa ausência de sofrimento.",
          ].map((t) => (
            <li key={t} className="flex gap-3 rounded-lg border-l-4 border-accent bg-card p-4 shadow-sm">
              <span className="font-semibold">{t}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-display text-lg font-bold text-primary">
          Compreender essas situações exige olhar além das manifestações isoladas: contexto, vínculos, significados e processos psicológicos.
        </p>
      </Section>

      {/* DOBRA 03 — BIG IDEA */}
      <Section className="bg-card">
        <Eyebrow>A Big Idea</Eyebrow>
        <h2 className="text-3xl font-extrabold leading-tight text-primary">
          A mesma manifestação. <span className="text-accent">Diferentes histórias.</span>
        </h2>
        <p className="mt-4">Três pessoas podem sentir <strong>culpa</strong> após uma perda. Mas o que está por trás dessa culpa pode ser completamente diferente.</p>

        <div className="relative mt-8">
          <div className="mx-auto w-fit rounded-full bg-primary px-6 py-2.5 font-display text-sm font-extrabold uppercase tracking-widest text-primary-foreground">
            Culpa após a perda
          </div>
          <div className="mx-auto h-6 w-px bg-border" />
          <div className="space-y-4">
            {STORIES.map((s) => (
              <article key={s.tag} className={`rounded-xl border-t-4 ${s.color} bg-background p-5 shadow-sm`}>
                <p className="font-display text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{s.tag}</p>
                <h3 className="mt-1 text-lg font-extrabold text-primary">{s.title}</h3>
                <p className="mt-2 text-[15px]">{s.text}</p>
                <p className="mt-4 font-display text-xs font-bold uppercase tracking-wider text-muted-foreground">Dimensões de compreensão</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {s.dims.map((d) => (
                    <li key={d} className="flex items-center gap-1.5 rounded-full bg-card px-3 py-1 text-[13px] font-medium ring-1 ring-border">
                      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
        <p className="mt-6 text-center font-display text-lg font-bold text-primary">
          A manifestação é semelhante. Mas a história, os significados e as necessidades de compreensão são outros.
        </p>
        <p className="mt-3 text-center text-sm text-muted-foreground">
          Luto em Mapas foi concebido para tornar essas relações visualmente compreensíveis.
        </p>
        <p className="mt-4 rounded-md bg-muted p-3 text-center text-xs text-muted-foreground">
          Situações fictícias para fins educacionais. As possibilidades apresentadas não constituem diagnósticos.
        </p>
      </Section>

      {/* DOBRA 04 — MECANISMO */}
      <section className="bg-primary px-5 py-14 text-primary-foreground">
        <div className="mx-auto max-w-xl">
          <Eyebrow light>O mecanismo</Eyebrow>
          <h2 className="text-2xl font-extrabold leading-tight">Mais do que memorizar conceitos, aprenda a relacioná-los.</h2>
          <p className="mt-3 text-primary-foreground/75">
            <strong className="text-primary-foreground">Arquitetura de Raciocínio Contextual do Luto</strong> — uma lógica visual em quatro operações.
          </p>
          <ol className="relative mt-8 space-y-4 before:absolute before:bottom-6 before:left-[22px] before:top-6 before:w-px before:bg-secondary/50">
            {MECHANISM.map(([n, t, d]) => (
              <li key={n} className="relative flex gap-4">
                <span className="z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary font-display text-sm font-extrabold">
                  {n}
                </span>
                <div className="rounded-xl bg-primary-foreground/5 p-4 ring-1 ring-primary-foreground/10">
                  <h3 className="font-extrabold uppercase tracking-wider text-highlight">{t}</h3>
                  <p className="mt-1 text-[15px] text-primary-foreground/85">{d}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-center font-display text-sm font-bold uppercase tracking-widest text-secondary">
            Contrastar → Contextualizar → Relacionar → Investigar
          </p>
          <p className="mt-4 text-center text-[15px] text-primary-foreground/75">
            Um mapa convencional mostra o significado de um conceito. Um mapa de raciocínio contextualizado mostra como diferentes informações se relacionam para compreender uma situação.
          </p>
        </div>
      </section>

      {/* DOBRA 05 — PRODUTO */}
      <Section>
        <Eyebrow>O que você recebe</Eyebrow>
        <h2 className="text-2xl font-extrabold leading-tight text-primary">Luto em Mapas: uma referência visual completa de estudo e consulta</h2>
        <p className="mt-3 text-muted-foreground">Material digital em PDF, um mapa por página em formato A4, pensado para estudar na tela ou imprimir.</p>
        <ul className="mt-6 divide-y divide-border rounded-xl bg-card shadow-sm ring-1 ring-border">
          {INCLUDES.map((t) => (
            <li key={t} className="flex items-start gap-3 p-4">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">✓</span>
              <span className="font-medium">{t}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 grid grid-cols-3 gap-2 text-center">
          {[["60", "mapas"], ["6", "módulos"], ["A4", "imprimível"]].map(([n, l]) => (
            <div key={l} className="rounded-xl bg-primary p-4 text-primary-foreground">
              <p className="font-display text-3xl font-extrabold text-highlight">{n}</p>
              <p className="text-xs uppercase tracking-wider">{l}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* DOBRA 06 — MÓDULOS + 60 MAPAS */}
      <Section className="bg-card" id="modulos">
        <Eyebrow>Conteúdo completo</Eyebrow>
        <h2 className="text-2xl font-extrabold leading-tight text-primary">6 módulos. 60 mapas. Toque para ver cada um.</h2>
        <div className="mt-6 space-y-3">
          {MODULES.map((m, i) => (
            <details key={m.title} className="group overflow-hidden rounded-xl bg-background ring-1 ring-border open:shadow-md">
              <summary className="flex cursor-pointer list-none items-start gap-3 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary font-display text-sm font-extrabold text-primary-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="font-extrabold leading-snug text-primary">{m.title}</h3>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-secondary">{m.maps.length} mapas</p>
                </div>
                <span className="mt-2 text-xl leading-none text-muted-foreground transition group-open:rotate-45">+</span>
              </summary>
              <div className="px-4 pb-4">
                <p className="mb-3 text-[15px] text-muted-foreground">{m.copy}</p>
                <ol className="space-y-1.5">
                  {m.maps.map(([n, t]) => (
                    <li key={n} className="flex gap-3 rounded-md bg-card px-3 py-2 text-[15px]">
                      <span className="font-display font-extrabold text-accent">{n}</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </details>
          ))}
        </div>
        <div className="mt-8">
          <Cta />
        </div>
      </Section>

      {/* ANTES E DEPOIS */}
      <Section>
        <Eyebrow>A transformação</Eyebrow>
        <h2 className="text-2xl font-extrabold leading-tight text-primary">De um conhecimento fragmentado para uma compreensão relacional</h2>
        <div className="mt-6 space-y-4">
          <div className="rounded-xl bg-muted p-5">
            <p className="font-display text-sm font-extrabold uppercase tracking-widest text-destructive">Antes</p>
            <ul className="mt-3 space-y-2 text-[15px]">
              {BEFORE.map((t) => <li key={t}>✕ {t}</li>)}
            </ul>
          </div>
          <div className="rounded-xl bg-primary p-5 text-primary-foreground">
            <p className="font-display text-sm font-extrabold uppercase tracking-widest text-secondary">Depois</p>
            <ul className="mt-3 space-y-2 text-[15px]">
              {AFTER.map((t) => <li key={t}>✓ {t}</li>)}
            </ul>
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Objetivos educacionais, não garantias de competência profissional ou resultados clínicos.</p>
      </Section>

      {/* PARA QUEM */}
      <Section className="bg-card">
        <Eyebrow>Para quem é</Eyebrow>
        <h2 className="text-2xl font-extrabold leading-tight text-primary">Feito para quem estuda e atua em Psicologia</h2>
        <div className="mt-6 space-y-3">
          {[
            ["Psicólogos recém-formados e clínicos generalistas", "que querem ampliar o repertório e compreender melhor as diferentes experiências de perda."],
            ["Estudantes de Psicologia", "que desejam aprofundar o estudo do luto e organizar os conceitos de forma visual."],
            ["Psicólogos experientes", "que querem revisar conceitos e estudar novas perspectivas e contextos de perda."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-xl border-l-4 border-secondary bg-background p-4">
              <p className="font-display font-extrabold text-primary">{t}</p>
              <p className="text-[15px]">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-xl bg-muted p-4 text-[15px]">
          <p className="font-display font-bold text-primary">Não é para você se busca:</p>
          <p className="mt-1 text-muted-foreground">tratamento para o próprio luto, autoajuda, um "método de cura" ou habilitação profissional por meio de um material digital.</p>
        </div>
      </Section>

      {/* MANIFESTO */}
      <section className="bg-accent px-5 py-14 text-accent-foreground">
        <div className="mx-auto max-w-xl space-y-3 text-center font-display text-lg font-semibold leading-snug">
          <p>O luto não acontece da mesma maneira para todas as pessoas.</p>
          <p>O silêncio pode representar experiências distintas.</p>
          <p>Retomar a vida não significa deixar de sentir saudade.</p>
          <p className="pt-3 text-2xl font-extrabold">Luto em Mapas nasce dessa perspectiva.</p>
        </div>
      </section>

      {/* FUNDAMENTAÇÃO */}
      <Section>
        <Eyebrow>Fundamentação</Eyebrow>
        <h2 className="text-2xl font-extrabold leading-tight text-primary">Construído sobre referenciais relevantes da Psicologia do Luto</h2>
        <div className="mt-6 grid grid-cols-1 gap-2">
          {REFERENCES.map(([a, t]) => (
            <div key={a} className="flex items-baseline justify-between gap-3 border-b border-border py-2.5">
              <span className="font-display font-bold text-primary">{a}</span>
              <span className="text-right text-sm text-muted-foreground">{t}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Autores citados como referências bibliográficas. Não são criadores, revisores ou endossantes do produto.
        </p>
      </Section>

      {/* OFERTA */}
      <section id="oferta" className="bg-primary px-5 py-14 text-primary-foreground">
        <div className="mx-auto max-w-xl">
          <div className="rounded-2xl bg-card p-6 text-card-foreground shadow-2xl">
            <p className="text-center font-display text-xs font-bold uppercase tracking-[0.18em] text-secondary">Acesso completo</p>
            <h2 className="mt-2 text-center text-3xl font-extrabold text-primary">Luto em Mapas</h2>
            <p className="text-center text-sm text-muted-foreground">60 Mapas Visuais de Raciocínio e Compreensão do Luto</p>
            <ul className="mt-6 space-y-2.5">
              {["60 mapas visuais", "Seis módulos completos", "Referências bibliográficas", "Perguntas de aprofundamento", "Material principal em PDF (A4)"].map((t) => (
                <li key={t} className="flex gap-3 font-medium">
                  <span className="text-cta">✓</span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="my-6 rounded-xl bg-muted p-4 text-center">
              <p className="text-sm text-muted-foreground">Condições de lançamento</p>
              <p className="font-display text-2xl font-extrabold text-primary">Em breve</p>
            </div>
            <Cta />
            <p className="mt-3 text-center text-xs text-muted-foreground">Material educacional complementar de estudo e consulta.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Section>
        <Eyebrow>Dúvidas frequentes</Eyebrow>
        <h2 className="text-2xl font-extrabold leading-tight text-primary">Perguntas frequentes</h2>
        <div className="mt-6 divide-y divide-border rounded-xl bg-card ring-1 ring-border">
          {FAQ.map(([q, a]) => (
            <details key={q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 font-display font-bold text-primary">
                {q}
                <span className="text-xl leading-none text-secondary transition group-open:rotate-45">+</span>
              </summary>
              <p className="px-4 pb-4 text-[15px] text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section className="bg-card pb-24 text-center">
        <h2 className="text-2xl font-extrabold leading-tight text-primary">Mais do que memorizar conceitos, aprenda a relacioná-los.</h2>
        <p className="mt-3 text-muted-foreground">Compreenda o luto além das manifestações isoladas com 60 mapas que conectam teoria, contextos e processos psicológicos.</p>
        <div className="mt-6">
          <Cta label="QUERO APROFUNDAR MEUS ESTUDOS" />
        </div>
      </Section>

      <footer className="bg-primary px-5 py-8 text-center text-xs text-primary-foreground/60">
        <p className="font-display font-bold text-primary-foreground">Luto em Mapas</p>
        <p className="mx-auto mt-2 max-w-md">
          Produto de finalidade educacional. Não constitui formação clínica, instrumento de avaliação psicológica, protocolo psicoterapêutico ou substituto de supervisão profissional.
        </p>
      </footer>

      {/* CTA fixo mobile */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 p-3 backdrop-blur md:hidden">
        <Cta label="QUERO MEUS 60 MAPAS" />
      </div>
    </main>
  );
}
