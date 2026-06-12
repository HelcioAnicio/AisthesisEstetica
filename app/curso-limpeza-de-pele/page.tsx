import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimationProvider from '../components/AnimationProvider';
import { WA, PHONE_DISPLAY } from '../lib/links';
import { IoSchool } from 'react-icons/io5';
import { RiCalendarScheduleLine } from 'react-icons/ri';
import {
  MdGroups,
  MdOutlineHandyman,
  MdOutlineLocalGroceryStore,
  MdOutlineSelfImprovement,
  MdSchedule,
  MdVerifiedUser,
} from 'react-icons/md';
import { FaLocationDot, FaWhatsapp } from 'react-icons/fa6';
import { FaCheckCircle } from 'react-icons/fa';
import { TbMassage } from 'react-icons/tb';
import { BsChatRightText } from 'react-icons/bs';

export const metadata: Metadata = {
  title: 'Curso de Limpeza de Pele Profissional · Caxias do Sul | Aisthésis',
  description:
    'Curso presencial de limpeza de pele profissional em Caxias do Sul. Aprenda com quem mais entende — teoria, prática e certificado. Vagas limitadas!',
};

const modulos = [
  {
    num: '01',
    titulo: 'Anatomia e Fisiologia da Pele',
    desc: 'Entenda como a pele funciona, os tipos de pele, as principais alterações cutâneas e como identificá-las corretamente antes de qualquer procedimento.',
  },
  {
    num: '02',
    titulo: 'Biossegurança e Higienização',
    desc: 'Protocolos de assepsia, uso correto de EPIs, descarte de resíduos e toda a normatização vigente para a prática estética segura e legal.',
  },
  {
    num: '03',
    titulo: 'Cosmetologia Aplicada',
    desc: 'Princípios ativos, veículos cosméticos e como selecionar os produtos certos para cada tipo e condição de pele.',
  },
  {
    num: '04',
    titulo: 'Protocolo Completo de Limpeza de Pele',
    desc: 'Higienização, tonificação, esfoliação, extração manual, máscara calmante, hidratação e proteção solar — passo a passo com modelos reais.',
  },
  {
    num: '05',
    titulo: 'Limpeza em Peles Especiais',
    desc: 'Adaptações do protocolo para peles sensíveis, acneicas, maduras, oleosas e com rosácea.',
  },
  {
    num: '06',
    titulo: 'Anamnese e Montagem de Fichas',
    desc: 'Como realizar uma consulta completa, estruturar a ficha de avaliação, coletar histórico e orientar o cliente sobre cuidados em casa.',
  },
];

const publico = [
  {
    icon: <TbMassage />,
    texto: 'Profissionais de estética que desejam aperfeiçoar a técnica',
  },
  {
    icon: <IoSchool />,
    texto: 'Estudantes de cosmetologia e cursos técnicos em andamento',
  },
  {
    icon: <MdOutlineLocalGroceryStore />,
    texto: 'Empreendedores que querem abrir espaço de beleza',
  },
  {
    icon: <MdOutlineSelfImprovement />,
    texto: 'Pessoas que querem cuidar da própria pele em casa',
  },
];

const inclusos = [
  'Material didático impresso completo',
  'Kit de produtos para praticar durante o curso',
  'Certificado de conclusão digital e impresso',
  'Acesso ao grupo de suporte pós-curso no WhatsApp',
  'Coffee break nos dois períodos',
  'Modelos para praticar os procedimentos',
];

const faqs = [
  {
    q: 'Preciso ter experiência prévia em estética?',
    a: 'Não. O curso foi desenvolvido para acolher desde iniciantes até profissionais que desejam aprimorar a técnica.',
  },
  {
    q: 'O curso é presencial ou online?',
    a: 'O curso é 100% presencial, realizado na clínica Aisthésis em Caxias do Sul. Valorizamos o aprendizado prático com supervisão ao vivo.',
  },
  {
    q: 'Qual a carga horária?',
    a: 'O curso tem carga horária de 8 horas, divididas entre teoria e prática ao longo de um dia intensivo.',
  },
  {
    q: 'O certificado é reconhecido?',
    a: 'Sim. O certificado é emitido pela Aisthésis Clínica de Estética & Pilates e tem validade em todo o território nacional.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'Aceitamos PIX, cartão de crédito e débito. Entre em contato pelo WhatsApp para saber sobre parcelamento e condições especiais.',
  },
  {
    q: 'Quando é a próxima turma?',
    a: 'As turmas são abertas periodicamente com vagas limitadas. Entre em contato pelo WhatsApp para verificar as datas disponíveis.',
  },
];

export default function CursoLimpezaDePele() {
  return (
    <>
      <AnimationProvider />

      {/* ── NAV ── */}
      <header>
        <nav
          className='fixed top-0 w-full z-50 transition-all duration-500 h-max py-4 flex items-center bg-white shadow-sm'
          id='top-nav'>
          <div className='flex justify-between items-center w-full max-w-container-max mx-auto px-margin-desktop'>
            <Link href='/'>
              <Image
                src='/aisthesis.png'
                alt='Aisthésis'
                width={120}
                height={38}
                sizes='120px'
                className='object-contain w-12 md:w-14'
              />
            </Link>
            <Link
              href={WA.curso}
              target='_blank'
              className='bg-secondary text-white px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase hover:opacity-90 transition-opacity'>
              Quero me inscrever
            </Link>
          </div>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section className='relative min-h-[90vh] py-10 flex items-center overflow-hidden bg-primary pt-20 sm:pt-24'>
        <div className='absolute inset-0 left-auto w-full md:w-1/2 right-0'>
          <Image
            src='https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=90&fit=crop'
            alt='Limpeza de Pele Profissional'
            fill
            className='object-cover opacity-30 md:opacity-60'
            priority
          />
          <div className='absolute inset-0 bg-linear-to-r from-primary via-primary/80 md:via-primary/40 to-transparent' />
        </div>

        <div className='relative z-10 max-w-container-max mx-auto px-margin-desktop w-full'>
          <div className='max-w-150'>
            <Link
              href='/'
              className='text-xs font-semibold text-white/70 hover:text-white transition-colors tracking-wider uppercase mb-10 inline-block'>
              ← Voltar a home
            </Link>
            <br />

            {/* Eyebrow */}
            <div className='inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 text-secondary px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-8'>
              <IoSchool />
              Curso Presencial · Caxias do Sul – RS
            </div>

            {/* H1 — alinhado com home */}
            <h1 className='font-playfair text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight'>
              Limpeza de Pele{' '}
              <span className='text-secondary italic'>Profissional</span>
            </h1>

            {/* Body */}
            <p className='text-sm sm:text-base text-white/80 leading-relaxed max-w-lg mb-10 reveal'>
              Aprenda o procedimento mais requisitado da estética facial com
              quem mais entende — teoria sólida, prática real e certificado
              reconhecido.
            </p>

            {/* CTAs */}
            <div className='flex flex-wrap gap-4 mb-12 reveal'>
              <Link
                href={WA.curso}
                target='_blank'
                className='bg-secondary text-white px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase hover:shadow-2xl hover:scale-[1.02] transition-all'>
                Garantir minha vaga →
              </Link>
              <a
                href='#conteudo'
                className='border-2 border-white/30 text-white px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase hover:border-white transition-colors'>
                Ver conteúdo do curso
              </a>
            </div>

            {/* Destaques rápidos */}
            <div className='flex flex-wrap gap-6 reveal'>
              {[
                {
                  icon: <RiCalendarScheduleLine />,
                  label: '8 horas',
                  sub: 'de imersão',
                },
                { icon: <MdGroups />, label: 'Turmas', sub: 'reduzidas' },
                {
                  icon: <MdVerifiedUser />,
                  label: 'Certificado',
                  sub: 'incluso',
                },
                {
                  icon: <MdOutlineHandyman />,
                  label: '100% prático',
                  sub: 'com modelos',
                },
              ].map(({ icon, label, sub }) => (
                <div
                  key={label}
                  className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center'>
                    <span className='text-secondary text-xl'>{icon}</span>
                  </div>
                  <div>
                    {/* Mini label bold */}
                    <p className='text-xs sm:text-sm font-bold text-white leading-tight'>
                      {label}
                    </p>
                    {/* Mini sub */}
                    <p className='text-xs text-white/60'>{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SOBRE O CURSO ── */}
      <section className='py-stack-lg bg-white'>
        <div className='max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
          <div className='reveal'>
            {/* Eyebrow */}
            <span className='text-xs font-bold tracking-widest uppercase text-secondary block mb-4'>
              Por que fazer este curso?
            </span>
            {/* H2 */}
            <h2 className='font-playfair text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary mb-6'>
              O procedimento mais procurado da estética facial
            </h2>
            {/* Body */}
            <p className='text-sm sm:text-base text-on-surface-variant leading-relaxed mb-6'>
              A limpeza de pele é o tratamento número 1 em procura nas clínicas
              de estética do Brasil. Dominar essa técnica com excelência é abrir
              uma porta para uma carreira sólida e rentável — ou simplesmente
              cuidar melhor de si mesma.
            </p>
            <p className='text-sm sm:text-base text-on-surface-variant leading-relaxed mb-8'>
              Na Aisthésis, você aprende do jeito certo: com base científica,
              produtos profissionais, supervisão ao vivo e prática real em
              modelos. Não é um curso gravado — é vivência presencial com quem
              tem mais de 12 anos de experiência no mercado.
            </p>
            <div className='grid grid-cols-2 gap-4'>
              {[
                ['12+', 'anos formando profissionais'],
                ['+500', 'alunos certificados'],
                ['100%', 'prático com modelos reais'],
                ['8h', 'de imersão presencial'],
              ].map(([num, label]) => (
                <div
                  key={label}
                  className='bg-surface rounded-2xl p-5'>
                  {/* Stat number */}
                  <p className='text-2xl sm:text-3xl font-bold text-secondary leading-none mb-1'>
                    {num}
                  </p>
                  {/* Stat label */}
                  <p className='text-xs text-on-surface-variant'>{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='reveal'>
            <div className='rounded-2xl overflow-hidden shadow-2xl'>
              <Image
                width={600}
                height={680}
                sizes='(min-width: 768px) 50vw, 100vw'
                src='https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=85&fit=crop'
                alt='Prática do curso de limpeza de pele'
                className='w-full h-130 object-cover'
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTEÚDO / MÓDULOS ── */}
      <section
        id='conteudo'
        className='py-stack-lg bg-surface'>
        <div className='max-w-container-max mx-auto px-margin-desktop'>
          <div className='text-center mb-14 reveal'>
            {/* Eyebrow */}
            <span className='text-xs font-bold tracking-widest uppercase text-secondary block mb-4'>
              Grade Curricular
            </span>
            {/* H2 */}
            <h2 className='font-playfair text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary'>
              O que você vai aprender
            </h2>
            {/* Body */}
            <p className='text-sm sm:text-base text-on-surface-variant mt-4 max-w-xl mx-auto'>
              Conteúdo completo, da teoria à prática, estruturado para que você
              saia do curso apto(a) a atender com segurança e confiança.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {modulos.map(({ num, titulo, desc }) => (
              <div
                key={num}
                className='bg-white rounded-2xl p-7 border border-surface-container-highest reveal hover:shadow-lg transition-shadow'>
                <div className='flex items-start gap-5'>
                  {/* Decorative number */}
                  <span className='text-4xl font-bold text-secondary/20 leading-none font-playfair shrink-0'>
                    {num}
                  </span>
                  <div>
                    {/* Module title (card H3) */}
                    <h3 className='font-playfair text-lg sm:text-xl font-semibold text-primary mb-2'>
                      {titulo}
                    </h3>
                    {/* Module desc */}
                    <p className='text-sm text-on-surface-variant leading-relaxed'>
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARA QUEM É ── */}
      <section className='py-stack-lg bg-white'>
        <div className='max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
          <div className='reveal'>
            <div className=' w-max'>
              <Image
                width={600}
                height={500}
                sizes='(min-width: 768px) 50vw, 100vw'
                src='/roberta.png'
                alt='Para quem é o curso'
                className='w-full h-115 object-contain rounded-2xl overflow-hidden shadow-xl'
              />
            </div>
          </div>

          <div className='reveal'>
            {/* Eyebrow */}
            <span className='text-xs font-bold tracking-widest uppercase text-secondary block mb-4'>
              Público-alvo
            </span>
            {/* H2 */}
            <h2 className='font-playfair text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary mb-6'>
              Para quem é este curso?
            </h2>
            {/* Body */}
            <p className='text-sm sm:text-base text-on-surface-variant leading-relaxed mb-8'>
              O curso foi desenhado para acolher diferentes perfis — do
              iniciante ao profissional que quer se atualizar.
            </p>
            <div className='space-y-5'>
              {publico.map(({ icon, texto }) => (
                <div
                  key={texto}
                  className='flex items-center gap-4'>
                  <div className='w-11 h-11 bg-surface-lavender rounded-xl flex items-center justify-center text-secondary shrink-0'>
                    <span className='material-symbols-outlined text-xl'>
                      {icon}
                    </span>
                  </div>
                  <p className='text-sm sm:text-base text-on-surface-variant'>
                    {texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── O QUE ESTÁ INCLUSO ── */}
      <section className='py-stack-lg curso-section'>
        <div className='max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
          <div className='reveal'>
            {/* Eyebrow */}
            <span className='text-xs font-bold tracking-widest uppercase text-secondary block mb-4'>
              Tudo incluso
            </span>
            {/* H2 */}
            <h2 className='font-playfair text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-6'>
              O que está incluso no curso?
            </h2>
            {/* Body */}
            <p className='text-sm sm:text-base text-on-primary-container leading-relaxed mb-8'>
              Não se preocupe com nada. A Aisthésis preparou tudo para que seu
              único foco seja aprender.
            </p>
            <ul className='space-y-4'>
              {inclusos.map((item) => (
                <li
                  key={item}
                  className='flex items-center gap-4'>
                  <div className='w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center shrink-0'>
                    <FaCheckCircle className='material-symbols-outlined fill-icon text-secondary text-base' />
                  </div>
                  <span className='text-sm sm:text-base text-on-primary-container'>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card de inscrição */}
          <div className='reveal'>
            <div className='bg-white rounded-3xl p-8 shadow-2xl'>
              <div className='text-center mb-8'>
                {/* Card eyebrow */}
                <p className='text-xs font-bold tracking-widest uppercase text-secondary mb-2'>
                  Inscrição
                </p>
                {/* Card H3 */}
                <h3 className='font-playfair text-2xl sm:text-3xl font-semibold text-primary mb-1'>
                  Curso Presencial
                </h3>
                {/* Card subtitle */}
                <p className='text-sm text-on-surface-variant'>
                  Limpeza de Pele Profissional
                </p>
              </div>

              <div className='space-y-4 mb-8'>
                {[
                  { icon: <FaLocationDot />, text: 'Caxias do Sul – RS' },
                  {
                    icon: <MdSchedule />,
                    text: '8 horas de imersão presencial',
                  },
                  { icon: <MdGroups />, text: 'Turmas com vagas limitadas' },
                  {
                    icon: <MdVerifiedUser />,
                    text: 'Certificado de conclusão incluso',
                  },
                ].map(({ icon, text }) => (
                  <div
                    key={text}
                    className='flex items-center gap-3'>
                    <span className='material-symbols-outlined text-secondary text-xl'>
                      {icon}
                    </span>
                    <span className='text-sm text-on-surface-variant'>
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href={WA.curso}
                target='_blank'
                className='block w-full text-center bg-secondary text-white py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase hover:opacity-90 hover:shadow-xl transition-all mb-4'>
                Garantir minha vaga no WhatsApp
              </Link>
              <Link
                href={`tel:${PHONE_DISPLAY.replace(/\D/g, '')}`}
                className='block w-full text-center border-2 border-outline-variant text-on-surface-variant py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase hover:border-secondary hover:text-secondary transition-all'>
                Ligar: {PHONE_DISPLAY}
              </Link>

              <p className='text-center text-xs text-on-surface-variant mt-5'>
                Pagamentos via PIX, crédito ou débito
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ── */}
      <section className='py-stack-lg bg-surface-lavender'>
        <div className='max-w-container-max mx-auto px-margin-desktop'>
          <div className='text-center mb-14 reveal'>
            {/* Eyebrow */}
            <span className='text-xs font-bold tracking-widest uppercase text-secondary block mb-4'>
              Quem já fez
            </span>
            {/* H2 */}
            <h2 className='font-playfair text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary'>
              O que nossas alunas dizem
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-7'>
            {[
              {
                text: 'O curso superou todas as expectativas! Saí sabendo executar o procedimento completo com confiança. A didática é incrível.',
                name: 'Camila Oliveira',
                role: 'Esteticista',
                initials: 'CO',
              },
              {
                text: 'Era iniciante total e terminei o curso com clientes reais marcadas! A professora é extremamente paciente e detalhista.',
                name: 'Gabriela Souza',
                role: 'Empreendedora',
                initials: 'GS',
              },
              {
                text: 'Já trabalhava com estética mas não sabia fazer a limpeza corretamente. Foi um divisor de águas na minha carreira.',
                name: 'Letícia Mendes',
                role: 'Auxiliar de estética',
                initials: 'LM',
              },
            ].map(({ text, name, role, initials }) => (
              <div
                key={name}
                className='dep-card reveal'>
                <div className='flex text-yellow-400 gap-0.5 mb-5'>
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className='material-symbols-outlined fill-icon text-xl'>
                      star
                    </span>
                  ))}
                </div>
                {/* Quote body */}
                <p className='text-sm sm:text-base text-on-surface leading-relaxed mb-8 italic'>
                  &ldquo;{text}&rdquo;
                </p>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center text-xs font-bold shrink-0'>
                    {initials}
                  </div>
                  <div>
                    <p className='text-xs sm:text-sm font-bold text-primary'>
                      {name}
                    </p>
                    <p className='text-xs text-on-surface-variant uppercase tracking-wider'>
                      {role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className='py-stack-lg bg-white'>
        <div className='max-w-container-max mx-auto px-margin-desktop'>
          <div className='text-center mb-14 reveal'>
            {/* Eyebrow */}
            <span className='text-xs font-bold tracking-widest uppercase text-secondary block mb-4'>
              Dúvidas
            </span>
            {/* H2 */}
            <h2 className='font-playfair text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary'>
              Perguntas frequentes
            </h2>
          </div>

          <div className='max-w-3xl mx-auto space-y-4'>
            {faqs.map(({ q, a }) => (
              <div
                key={q}
                className='bg-surface rounded-2xl p-7 reveal'>
                {/* FAQ question */}
                <h3 className='text-sm sm:text-base font-bold text-primary mb-3'>
                  {q}
                </h3>
                {/* FAQ answer */}
                <p className='text-sm text-on-surface-variant leading-relaxed'>
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className='py-stack-lg bg-primary relative overflow-hidden'>
        <div className='absolute inset-0 opacity-5'>
          <div className='absolute top-0 left-0 w-96 h-96 rounded-full bg-secondary blur-3xl -translate-x-1/2 -translate-y-1/2' />
          <div className='absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary blur-3xl translate-x-1/2 translate-y-1/2' />
        </div>
        <div className='relative z-10 max-w-container-max mx-auto px-margin-desktop text-center reveal'>
          {/* Eyebrow */}
          <span className='text-xs font-bold tracking-widest uppercase text-secondary block mb-4'>
            Vagas limitadas
          </span>
          {/* H2 */}
          <h2 className='font-playfair text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-6 max-w-2xl mx-auto'>
            Pronta para transformar sua carreira?
          </h2>
          {/* Body */}
          <p className='text-sm sm:text-base text-on-primary-container mb-10 max-w-xl mx-auto leading-relaxed'>
            Entre em contato agora pelo WhatsApp, tire suas dúvidas e garanta
            sua vaga antes que esgote. As turmas fecham rápido!
          </p>
          <div className='flex flex-wrap gap-4 justify-center'>
            <Link
              href={WA.curso}
              target='_blank'
              className='bg-secondary text-white px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase hover:shadow-2xl hover:scale-[1.02] transition-all'>
              Quero garantir minha vaga!
            </Link>
            <Link
              href={`tel:${PHONE_DISPLAY.replace(/\D/g, '')}`}
              className='border-2 border-white/30 text-white px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase hover:border-white transition-colors'>
              {PHONE_DISPLAY}
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className='bg-white border-t border-surface-container-highest py-8'>
        <div className='max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-4'>
          <Link href='/'>
            <Image
              src='/aisthesis.png'
              alt='Aisthésis'
              width={100}
              height={32}
              sizes='100px'
              className='object-contain'
            />
          </Link>
          <p className='text-xs text-on-surface-variant'>
            © 2025 Aisthésis Clínica de Estética & Pilates — Caxias do Sul, RS
          </p>
          <Link
            href={WA.contato}
            target='_blank'
            className='inline-flex items-center gap-2 bg-secondary text-white px-5 py-2 rounded-full text-xs sm:text-sm font-bold hover:opacity-90 transition-opacity'>
            <BsChatRightText className='material-symbols-outlined text-base' />
            WhatsApp
          </Link>
        </div>
      </footer>

      {/* WhatsApp Fixo */}
      <Link
        href={WA.curso}
        target='_blank'
        className='fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform'>
        <FaWhatsapp className='w-8 h-8' />
      </Link>
    </>
  );
}
