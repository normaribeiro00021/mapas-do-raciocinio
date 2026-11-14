import { createFileRoute } from "@tanstack/react-router";
import { MODULES, FAQ } from "@/lib/offer";
import heroImg from "@/assets/hero-mockup.webp";
import { MapsMarquee, BeforeAfter, Testimonials, PurchaseToast, ReferencesCard, BonusSection } from "@/components/Sections";

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
      <header className="bg-night-gradient px-5 pb-12 pt-8 text-primary-foreground">
        <div className="mx-auto max-w-xl">
          <p className="text-center font-display text-[11px] font-bold uppercase tracking-[0.18em] text-highlight">
            Psicologia do Luto · Referência educacional visual
          </p>
          <h1 className="mt-5 text-center text-[1.75rem] font-extrabold leading-[1.15]">
            <span className="text-gradient">60 Mapas Visuais</span> de Psicologia do Luto para compreender diferentes experiências de perda e desenvolver um raciocínio mais contextualizado
          </h1>
          <p className="mt-4 text-center text-base text-primary-foreground/80">
            Fundamentos, manifestações, diferenças clínicas, vínculos, contextos e processos de adaptação — em mapas que conectam teoria, situações e hipóteses de compreensão.
          </p>
          <div className="relative mt-8">
            <div className="absolute -inset-6 rounded-full bg-brand-gradient opacity-25 blur-3xl" aria-hidden />
            <img src={heroImg} alt="Luto em Mapas: tablet, celular e páginas impressas com os mapas visuais" width={720} height={720} fetchPriority="high" className="relative w-full rounded-2xl glow" />
            <span className="badge-shine absolute -top-3 right-3 rounded-full bg-brand-gradient px-3 py-1 font-display text-xs font-extrabold text-night">60 MAPAS</span>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-2 text-sm">
            {["60 mapas visuais", "6 módulos educacionais", "Fundamentação científica", "Digital e imprimível (A4)"].map((t) => (
              <li key={t} className="badge-shine rounded-lg bg-primary-foreground/5 px-3 py-2.5 text-center font-semibold ring-1 ring-glow-teal/40">
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

      <MapsMarquee />

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

      <BeforeAfter />

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
      <section className="bg-night-gradient px-5 py-14 text-primary-foreground">
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

      <Testimonials />

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

      <ReferencesCard />

      <BonusSection />

      {/* OFERTA */}
      <section id="oferta" className="bg-night-gradient px-5 py-14 text-primary-foreground">
        <div className="mx-auto max-w-xl">
          <div className="text-center">
            <span className="badge-shine inline-block rounded-full border border-glow-teal/60 px-4 py-1 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-glow-teal">
              Escolha seu acesso
            </span>
            <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight">
              Comece agora com o <span className="text-gradient">Luto em Mapas</span>
            </h2>
            <p className="mt-2 text-sm text-primary-foreground/70">Pagamento único. Material digital em PDF, para ler na tela ou imprimir.</p>
          </div>

          <div className="mt-8 space-y-5">
            {/* PLANO PRO — destaque */}
            <div className="relative rounded-2xl bg-card p-6 pt-8 text-card-foreground ring-2 ring-glow-teal glow">
              <span className="badge-shine absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-gradient px-4 py-1.5 font-display text-xs font-extrabold uppercase tracking-wider text-night">
                ★ Mais escolhido
              </span>
              <div className="flex items-end justify-between gap-3">
                <div>
                  <h3 className="font-display text-2xl font-extrabold text-primary">Plano Pro</h3>
                  <p className="text-sm font-semibold text-secondary">Pacote completo + 4 bônus</p>
                </div>
                <p className="text-right font-display">
                  <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">por apenas</span>
                  <span className="text-4xl font-extrabold text-primary">R$ 19,90</span>
                </p>
              </div>
              <ul className="mt-5 space-y-2.5 text-[15px]">
                {[
                  "60 Mapas Visuais nos 6 módulos (PDF, A4)",
                  "Bônus 01 — Casos Clínicos Comentados",
                  "Bônus 02 — Banco de Perguntas Clínicas",
                  "Bônus 03 — Recursos Visuais de Psicoeducação",
                  "Bônus 04 — Atlas de Estratégias Terapêuticas",
                  "Futuras atualizações incluídas",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 font-medium">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cta text-xs font-bold text-cta-foreground">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded-lg bg-muted p-3 text-center text-[13px] font-semibold text-primary">
                Por só R$ 10 a mais, você leva os 4 bônus completos.
              </p>
              <a href={CHECKOUT_URL} className="mt-4 block rounded-xl bg-cta px-5 py-4 text-center font-display text-base font-extrabold uppercase tracking-wide text-cta-foreground shadow-lg shadow-cta/30 transition active:scale-[0.98]">
                Quero o plano pro →
              </a>
            </div>

            {/* PLANO BÁSICO */}
            <div className="rounded-2xl bg-card/60 p-6 text-card-foreground ring-1 ring-border">
              <div className="flex items-end justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl font-extrabold text-primary">Plano Básico</h3>
                  <p className="text-sm text-muted-foreground">Só o material principal</p>
                </div>
                <p className="text-right font-display">
                  <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">por</span>
                  <span className="text-3xl font-extrabold text-primary">R$ 9,90</span>
                </p>
              </div>
              <ul className="mt-5 space-y-2.5 text-[15px]">
                <li className="flex items-start gap-3 font-medium">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cta text-xs font-bold text-cta-foreground">✓</span>
                  60 Mapas Visuais nos 6 módulos (PDF, A4)
                </li>
                {[
                  "Bônus 01 — Casos Clínicos Comentados",
                  "Bônus 02 — Banco de Perguntas Clínicas",
                  "Bônus 03 — Recursos Visuais de Psicoeducação",
                  "Bônus 04 — Atlas de Estratégias Terapêuticas",
                  "Futuras atualizações",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-muted-foreground/70">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold text-muted-foreground">✕</span>
                    <s>{t}</s>
                  </li>
                ))}
              </ul>
              <a href={CHECKOUT_URL} className="mt-4 block rounded-xl border-2 border-primary px-5 py-3.5 text-center font-display text-sm font-extrabold uppercase tracking-wide text-primary transition active:scale-[0.98]">
                Quero o plano básico
              </a>
            </div>
          </div>
          <p className="mt-5 text-center text-xs text-primary-foreground/50">Material educacional complementar de estudo e consulta.</p>
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

      <PurchaseToast />

      {/* CTA fixo mobile */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 p-3 backdrop-blur md:hidden">
        <Cta label="QUERO MEUS 60 MAPAS" />
      </div>
    </main>
  );
}
