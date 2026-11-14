import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import m19 from "@/assets/mapa-19.webp";
import m23 from "@/assets/mapa-23.webp";
import m07 from "@/assets/mapa-07.webp";
import m31 from "@/assets/mapa-31.webp";
import estudo from "@/assets/estudo-1.webp";
import bonusCasos from "@/assets/bonus-casos-premium.jpg";
import bonusPerguntas from "@/assets/bonus-perguntas-premium.jpg";
import bonusRecursos from "@/assets/bonus-recursos-premium.jpg";
import bonusAtlas from "@/assets/bonus-atlas-premium.jpg";

export const MAP_IMAGES = { m19, m23, m07, m31 };

const CARDS = [
  { img: m19, n: "19", t: "Culpa após a perda" },
  { img: m23, n: "23", t: "Luto × Depressão" },
  { img: m07, n: "07", t: "Processo Dual" },
  { img: m31, n: "31", t: "Vínculos contínuos" },
];

function Row({ reverse = false }: { reverse?: boolean }) {
  const list = reverse ? [...CARDS].reverse() : CARDS;
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div className={`flex w-max gap-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {[...list, ...list, ...list, ...list].map((c, i) => (
          <figure key={i} className="w-[170px] shrink-0 overflow-hidden rounded-2xl bg-night glow">
            <img src={c.img} alt={`Mapa ${c.n} — ${c.t}`} width={480} height={680} loading="lazy" decoding="async" className="block h-auto w-full" />
            <figcaption className="flex items-center gap-2 px-3 py-2 text-xs text-primary-foreground">
              <span className="rounded bg-brand-gradient px-1.5 py-0.5 font-display font-extrabold text-night">{c.n}</span>
              <span className="truncate font-semibold">{c.t}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function MapsMarquee() {
  return (
    <section className="bg-night-gradient py-14 text-primary-foreground">
      <div className="mx-auto max-w-xl px-5 text-center">
        <span className="badge-shine inline-block rounded-full border border-glow-teal/60 px-4 py-1 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-glow-teal">
          Prévia dos mapas
        </span>
        <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight">
          O que você vai <span className="text-gradient">encontrar</span>
        </h2>
        <p className="mt-2 text-sm text-primary-foreground/70">60 mapas como estes, organizados em 6 módulos.</p>
      </div>
      <div className="mt-8 space-y-4">
        <Row />
        <Row reverse />
      </div>
      <p className="mt-6 px-5 text-center text-xs text-primary-foreground/50">Imagens ilustrativas da proposta visual.</p>
    </section>
  );
}

const BEFORE = ["Conhecimentos fragmentados", "Conceitos estudados isoladamente", "Explicações simplificadas demais", "Conteúdo espalhado em livros, artigos e aulas", "Busca de uma única explicação para situações complexas"];
const AFTER = ["Conhecimentos visualmente organizados", "Relações claras entre conceitos", "Diferenças e sobreposições entre manifestações", "Familiaridade com vários referenciais teóricos", "Uma referência integrada de estudo e consulta"];

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef(false);
  const move = (x: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (r) setPos(Math.min(100, Math.max(0, ((x - r.left) / r.width) * 100)));
  };
  return (
    <section className="bg-night px-5 py-14 text-primary-foreground">
      <div className="mx-auto max-w-xl">
        <h2 className="text-center text-3xl font-extrabold uppercase leading-tight">
          O problema não é você: <span className="text-gradient">é o formato</span>
        </h2>
        <p className="mt-2 text-center text-sm text-primary-foreground/70">Culpa após a perda: o mesmo conteúdo em dois formatos.</p>
        <div className="mx-auto mt-6 max-w-[280px] sm:max-w-[360px]">
        <div className="flex justify-between font-display text-xs font-bold">
          <span className="text-primary-foreground/70">Texto corrido</span>
          <span className="text-glow-teal">Mapa visual</span>
        </div>
        <div
          ref={ref}
          className="relative mt-2 aspect-[480/680] touch-none select-none overflow-hidden rounded-2xl glow"
          onPointerDown={(e) => { drag.current = true; (e.target as HTMLElement).setPointerCapture?.(e.pointerId); move(e.clientX); }}
          onPointerMove={(e) => drag.current && move(e.clientX)}
          onPointerUp={() => (drag.current = false)}
          onPointerCancel={() => (drag.current = false)}
        >
          <img src={m19} alt="Mapa visual: culpa após a perda" width={480} height={680} loading="lazy" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
          <div className="absolute inset-0 overflow-hidden bg-background text-foreground" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <div className="p-5">
              <p className="border-b border-border pb-2 text-[11px] text-muted-foreground">Psicologia do Luto · Material de estudo</p>
              <h3 className="mt-3 font-serif text-base font-bold">Culpa após a perda: considerações</h3>
              <div className="mt-2 space-y-2 font-serif text-[11px] leading-relaxed text-foreground/85 sm:text-xs">
                <p>A culpa é uma manifestação frequentemente observada em processos de luto e pode estar associada a diferentes conteúdos, como arrependimento por eventos anteriores à morte, percepção de responsabilidade e crenças relacionadas à lealdade.</p>
                <p>Em alguns casos, relaciona-se a pensamentos contrafactuais sobre o que poderia ter sido feito; em outros, surge na retomada de atividades prazerosas, envolvendo significados atribuídos ao vínculo e expectativas sociais.</p>
                <p>A compreensão dessa manifestação depende da história do relacionamento, das circunstâncias da perda e do contexto de vida, não devendo ser interpretada de forma isolada.</p>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 w-0.5 bg-glow-teal" style={{ left: `${pos}%` }}>
            <Button
              type="button"
              size="icon"
              aria-label="Arraste para comparar"
              className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-glow-teal font-bold text-night glow"
              onKeyDown={(e) => { if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5)); if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5)); }}
            >
              ‹ ›
            </Button>
          </div>
        </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/15 pt-6">
          <h3 className="text-xl font-extrabold leading-tight">De um conhecimento fragmentado para uma compreensão relacional</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="border-l-2 border-destructive pl-4">
              <p className="font-display text-sm font-extrabold uppercase text-primary-foreground/60">Antes</p>
              <ul className="mt-3 space-y-2 text-[14px] text-primary-foreground/70">
                {BEFORE.map((t) => <li key={t} className="flex gap-2"><span className="shrink-0 text-destructive">✕</span><span>{t}</span></li>)}
              </ul>
            </div>
            <div className="border-l-2 border-glow-teal pl-4">
              <p className="font-display text-sm font-extrabold uppercase text-glow-teal">Com os mapas</p>
              <ul className="mt-3 space-y-2 text-[14px]">
                {AFTER.map((t) => <li key={t} className="flex gap-2"><span className="shrink-0 text-glow-teal">✓</span><span>{t}</span></li>)}
              </ul>
            </div>
          </div>
          <p className="mt-4 text-xs text-primary-foreground/50">Objetivos educacionais, não garantias de competência profissional ou resultados clínicos.</p>
        </div>
        <Button asChild className="mt-6 h-auto w-full whitespace-normal rounded-lg bg-brand-gradient px-5 py-4 text-center font-display font-extrabold uppercase text-night glow">
          <a href="#oferta">Quero estudar com os mapas</a>
        </Button>
      </div>
    </section>
  );
}

/* ATENÇÃO: conteúdo de EXEMPLO. Substituir por depoimentos reais (com autorização) antes de publicar. */
const TESTIMONIALS = [
  { name: "Nome da aluna", role: "Psicologia · 8º período", time: "16:43", q: "Oi! Tudo bem? 😊 Queria saber o seu feedback sobre o Luto em Mapas. Como eles têm te ajudado?", a: "Oii! Estou amando 😍 Os mapas deixaram os conteúdos muito mais claros e organizados. A parte de luto e depressão ficou muito mais fácil de entender.", img: estudo },
  { name: "Nome da psicóloga", role: "Psicóloga clínica", time: "14:27", q: "Oi! Passando pra saber se o material está te ajudando no dia a dia 💜", a: "Tô usando bastante! O mapa das três histórias de culpa mudou meu jeito de estudar os casos. Vou te mandar uma foto do meu material impresso." },
  { name: "Nome do aluno", role: "Psicologia · 6º período", time: "21:05", q: "E aí, conseguiu usar os mapas nos estudos?", a: "Consegui sim! Imprimi alguns e deixei no caderno pra revisar. Os mapas de vínculos contínuos e processo dual são incríveis 👏" },
];

export const SHOW_EXAMPLE_SOCIAL_PROOF = true;

function Chat({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="w-[260px] shrink-0 overflow-hidden rounded-[1.6rem] border-4 border-night bg-night text-[12px] glow">
      <div className="flex items-center gap-2 bg-primary px-3 py-2.5">
        <div className="h-8 w-8 rounded-full bg-brand-gradient" />
        <div className="min-w-0">
          <p className="truncate font-semibold text-primary-foreground">{t.name}</p>
          <p className="text-[10px] text-primary-foreground/60">online</p>
        </div>
      </div>
      <div className="space-y-2 p-3">
        <div className="ml-auto max-w-[85%] rounded-lg rounded-tr-none bg-cta p-2 text-cta-foreground">{t.q}<span className="block text-right text-[9px] opacity-70">{t.time} ✓✓</span></div>
        <div className="max-w-[85%] rounded-lg rounded-tl-none bg-primary p-2 text-primary-foreground">{t.a}</div>
        {t.img && <img src={t.img} alt="Material de estudo sobre a mesa" width={480} height={480} loading="lazy" className="w-full rounded-lg" />}
        <p className="text-[10px] text-primary-foreground/50">{t.role}</p>
      </div>
    </div>
  );
}

export function Testimonials() {
  if (!SHOW_EXAMPLE_SOCIAL_PROOF) return null;
  return (
    <section className="bg-night-gradient py-14 text-primary-foreground">
      <div className="mx-auto max-w-xl px-5 text-center">
        <h2 className="text-3xl font-extrabold uppercase leading-tight">
          Veja quem comprou e o que está <span className="text-gradient">achando</span>
        </h2>
        <p className="mt-2 text-sm text-primary-foreground/70">Conversas de quem já está estudando com o material</p>
        <p className="mx-auto mt-3 w-fit rounded-full bg-destructive px-3 py-1 text-[11px] font-bold text-destructive-foreground">Exemplo de layout — substituir por depoimentos reais</p>
      </div>
      <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4">
        {TESTIMONIALS.map((t) => <div key={t.name} className="snap-center"><Chat t={t} /></div>)}
      </div>
    </section>
  );
}

const PURCHASES: [string, string][] = [
  ["Nome", "Cidade"],
  ["Nome", "Cidade"],
];

export function PurchaseToast() {
  const [i, setI] = useState<number | null>(null);
  useEffect(() => {
    if (!SHOW_EXAMPLE_SOCIAL_PROOF) return;
    let n = 0;
    const show = () => { setI(n++ % PURCHASES.length); setTimeout(() => setI(null), 4500); };
    const first = setTimeout(show, 6000);
    const loop = setInterval(show, 15000);
    return () => { clearTimeout(first); clearInterval(loop); };
  }, []);
  if (i === null) return null;
  const [name, city] = PURCHASES[i] ?? ["", ""];
  return (
    <div className="animate-toast fixed inset-x-3 bottom-24 z-50 mx-auto flex max-w-sm items-center gap-3 rounded-2xl border border-glow-teal/40 bg-night/95 p-3 text-sm text-primary-foreground backdrop-blur glow md:bottom-6">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-gradient font-bold text-night">✓</span>
      <p><strong>{name}</strong>, de {city}, acabou de garantir o <span className="text-gradient font-bold">Luto em Mapas</span>. <span className="text-[10px] opacity-60">(exemplo)</span></p>
    </div>
  );
}

const BONUSES = [
  {
    img: bonusCasos,
    badge: "Bônus 01",
    title: "Casos Clínicos Comentados",
    need: "Exercitar o raciocínio",
    desc: "Situações clínicas fictícias analisadas passo a passo, para você treinar a leitura contextual que os mapas propõem.",
  },
  {
    img: bonusPerguntas,
    badge: "Bônus 02",
    title: "Banco de Perguntas Clínicas",
    need: "Desenvolver a investigação e a escuta",
    desc: "Perguntas organizadas por tema para aprofundar a investigação e enriquecer a escuta em diferentes experiências de perda.",
  },
  {
    img: bonusRecursos,
    badge: "Bônus 03",
    title: "Recursos Visuais de Psicoeducação",
    need: "Comunicar conceitos complexos",
    desc: "Materiais visuais prontos para explicar conceitos do luto de forma clara, em contextos educacionais e de psicoeducação.",
  },
  {
    img: bonusAtlas,
    badge: "Bônus 04",
    title: "Atlas de Estratégias Terapêuticas",
    need: "Estudar possibilidades de intervenção",
    desc: "Um panorama visual de possibilidades de intervenção descritas na literatura, para ampliar seu repertório de estudo.",
  },
];

export function BonusSection() {
  return (
    <section className="bg-night px-5 py-10 text-primary-foreground">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="badge-shine inline-block rounded-full border border-glow-teal/60 px-4 py-1 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-glow-teal">
            Exclusivos do Plano Pro
          </span>
          <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight">
            4 bônus para <span className="text-gradient">aprofundar seu estudo</span>
          </h2>
          <p className="mt-2 text-sm text-primary-foreground/70">Além dos 60 mapas, receba estes quatro materiais no Plano Pro.</p>
          <p className="mt-4 font-display text-lg font-extrabold text-glow-teal">Só R$ 10 a mais para levar os 4 bônus + futuras atualizações.</p>
        </div>
        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          {BONUSES.map((b) => (
            <article key={b.title} className="flex flex-col overflow-hidden rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-4 text-center">
              <div aria-hidden="true" className="text-base text-glow-teal">★★★★★</div>
              <p className="mb-3 mt-2 text-[9px] font-semibold uppercase text-primary-foreground/60">Ciência a favor da sua prática</p>
              <div className="mx-auto w-full max-w-[280px]">
                <img src={b.img} alt={`Mockup ilustrativo de livro e tablet: ${b.title}`} width={816} height={816} loading="lazy" decoding="async" className="block aspect-square w-full rounded-lg object-contain" />
              </div>
              <div className="flex flex-1 flex-col items-center pt-4">
                <span className="badge-shine rounded-full bg-brand-gradient px-4 py-1 font-display text-[11px] font-extrabold uppercase text-night">{b.badge}</span>
                <h3 className="mt-3 font-display text-lg font-extrabold leading-snug">{b.title}</h3>
                <p className="mt-2 text-sm font-semibold text-highlight">{b.need}</p>
                <p className="mb-4 mt-2 text-sm text-primary-foreground/70">{b.desc}</p>
                <p className="mt-auto text-base font-extrabold text-glow-teal">INCLUÍDO NO PLANO PRO</p>
                <p className="mt-1 text-xs text-primary-foreground/55">Sem custo adicional no pacote</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-primary-foreground/50">Mockups ilustrativos. Todo o material é digital, em PDF.</p>
      </div>
    </section>
  );
}

const ALL_REFS = [
  "Bowlby, J. Apego e Perda (trilogia).",
  "Worden, J. W. Aconselhamento do Luto e Terapia do Luto.",
  "Stroebe, M.; Schut, H. (1999). The dual process model of coping with bereavement. Death Studies.",
  "Neimeyer, R. A. Reconstrução de significado e experiência de perda.",
  "Klass, D.; Silverman, P.; Nickman, S. Continuing Bonds.",
  "Boss, P. Perda ambígua.",
  "Doka, K. Disenfranchised Grief.",
  "Bonanno, G. A. The Other Side of Sadness.",
  "Franco, M. H. P. O luto no século 21.",
  "Organização Mundial da Saúde. CID-11 — Transtorno de Luto Prolongado.",
  "American Psychiatric Association. DSM-5-TR.",
];

export function ReferencesCard() {
  return (
    <section className="bg-night px-5 py-14">
      <div className="mx-auto max-w-xl rounded-3xl border border-primary-foreground/10 bg-primary p-6 text-primary-foreground glow">
        <h2 className="text-2xl font-extrabold uppercase leading-tight">
          Referências por trás dos <span className="text-gradient">mapas</span>
        </h2>
        <p className="mt-3 text-[15px] text-primary-foreground/75">
          Os mapas foram estruturados com base em referenciais nacionais e internacionais da Psicologia do Luto, como <strong className="text-primary-foreground">Bowlby, Worden, Stroebe & Schut, Neimeyer</strong> e <strong className="text-primary-foreground">Maria Helena Pereira Franco</strong>, além da CID-11 e do DSM-5-TR.
        </p>
        <details className="group mt-5 border-t border-primary-foreground/10 pt-4">
          <summary className="flex cursor-pointer list-none items-center gap-2 font-display text-sm font-bold text-glow-teal">
            <span className="transition group-open:rotate-90">▶</span> Ver referências utilizadas
          </summary>
          <ul className="mt-4 space-y-2 text-[13px] text-primary-foreground/75">
            {ALL_REFS.map((r) => <li key={r} className="border-l-2 border-glow-violet/60 pl-3">{r}</li>)}
          </ul>
          <p className="mt-4 text-[11px] text-primary-foreground/50">Autores citados como referências bibliográficas; não são criadores, revisores ou endossantes do produto.</p>
        </details>
      </div>
    </section>
  );
}
