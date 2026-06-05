import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimationProvider from '../components/AnimationProvider';
import { WA, PHONE_DISPLAY } from '../lib/links';

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
  { icon: 'spa', texto: 'Profissionais de estética que desejam aperfeiçoar a técnica' },
  { icon: 'school', texto: 'Estudantes de cosmetologia e cursos técnicos em andamento' },
  { icon: 'store', texto: 'Empreendedores que querem abrir espaço de beleza' },
  { icon: 'self_improvement', texto: 'Pessoas que querem cuidar da própria pele em casa' },
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
          className='fixed top-0 w-full z-50 transition-all duration-500 h-[72px] flex items-center bg-white shadow-sm'
          id='top-nav'>
          <div className='flex justify-between items-center w-full max-w-container-max mx-auto px-margin-desktop'>
            <Link href='/'>
              <Image src='/aisthesis.png' alt='Aisthésis' width={120} height={38} className='object-contain' />
            </Link>
            <div className='hidden md:flex items-center gap-8'>
              <Link href='/' className='text-[12px] font-semibold text-on-surface-variant hover:text-primary transition-colors tracking-wider uppercase'>
                ← Voltar ao site
              </Link>
            </div>
            <Link
              href={WA.curso}
              target='_blank'
              className='bg-secondary text-white px-6 py-2.5 rounded-full text-[12px] font-bold tracking-wider uppercase hover:opacity-90 transition-opacity'>
              Quero me inscrever
            </Link>
          </div>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section className='relative min-h-[90vh] flex items-center overflow-hidden bg-primary pt-[72px]'>
        {/* Imagem de fundo */}
        <div className='absolute inset-0 left-auto w-full md:w-1/2 right-0'>
          <Image
            src='https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=90&fit=crop'
            alt='Limpeza de Pele Profissional'
            fill
            className='object-cover opacity-30 md:opacity-60'
            priority
          />
          {/* gradiente sobre a imagem */}
          <div className='absolute inset-0 bg-gradient-to-r from-primary via-primary/80 md:via-primary/40 to-transparent' />
        </div>

        <div className='relative z-10 max-w-container-max mx-auto px-margin-desktop w-full py-20'>
          <div className='max-w-[600px]'>
            <div className='inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 text-secondary px-4 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase mb-8'>
              <span className='material-symbols-outlined text-[15px]'>school</span>
              Curso Presencial · Caxias do Sul – RS
            </div>

            <h1 className='font-playfair text-[52px] md:text-[64px] leading-[58px] md:leading-[72px] font-semibold text-white mb-6'>
              Limpeza de Pele{' '}
              <span className='text-secondary italic'>Profissional</span>
            </h1>

            <p className='text-[16px] text-white/80 leading-relaxed max-w-[480px] mb-10 reveal'>
              Aprenda o procedimento mais requisitado da estética facial com quem
              mais entende — teoria sólida, prática real e certificado reconhecido.
            </p>

            <div className='flex flex-wrap gap-4 mb-12 reveal'>
              <Link
                href={WA.curso}
                target='_blank'
                className='bg-secondary text-white px-8 py-4 rounded-full text-[13px] font-bold tracking-wider uppercase hover:shadow-2xl hover:scale-[1.02] transition-all'>
                Garantir minha vaga →
              </Link>
              <a
                href='#conteudo'
                className='border-2 border-white/30 text-white px-8 py-4 rounded-full text-[13px] font-bold tracking-wider uppercase hover:border-white transition-colors'>
                Ver conteúdo do curso
              </a>
            </div>

            {/* Destaques rápidos */}
            <div className='flex flex-wrap gap-6 reveal'>
              {[
                { icon: 'schedule', label: '8 horas', sub: 'de imersão' },
                { icon: 'groups', label: 'Turmas', sub: 'reduzidas' },
                { icon: 'verified', label: 'Certificado', sub: 'incluso' },
                { icon: 'handyman', label: '100% prático', sub: 'com modelos' },
              ].map(({ icon, label, sub }) => (
                <div key={label} className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center'>
                    <span className='material-symbols-outlined text-secondary text-[20px]'>{icon}</span>
                  </div>
                  <div>
                    <p className='text-[13px] font-bold text-white leading-tight'>{label}</p>
                    <p className='text-[11px] text-white/60'>{sub}</p>
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
            <span className='text-[11px] font-bold tracking-widest uppercase text-secondary block mb-4'>
              Por que fazer este curso?
            </span>
            <h2 className='font-playfair text-[36px] leading-[44px] font-semibold text-primary mb-6'>
              O procedimento mais procurado da estética facial
            </h2>
            <p className='text-[15px] text-on-surface-variant leading-relaxed mb-6'>
              A limpeza de pele é o tratamento número 1 em procura nas clínicas
              de estética do Brasil. Dominar essa técnica com excelência é abrir
              uma porta para uma carreira sólida e rentável — ou simplesmente
              cuidar melhor de si mesma.
            </p>
            <p className='text-[15px] text-on-surface-variant leading-relaxed mb-8'>
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
                <div key={label} className='bg-surface rounded-2xl p-5'>
                  <p className='text-[28px] font-bold text-secondary leading-none mb-1'>{num}</p>
                  <p className='text-[12px] text-on-surface-variant'>{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='reveal'>
            <div className='rounded-2xl overflow-hidden shadow-2xl'>
              <Image
                width={600}
                height={680}
                src='https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=85&fit=crop'
                alt='Prática do curso de limpeza de pele'
                className='w-full h-[520px] object-cover'
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTEÚDO / MÓDULOS ── */}
      <section id='conteudo' className='py-stack-lg bg-surface'>
        <div className='max-w-container-max mx-auto px-margin-desktop'>
          <div className='text-center mb-14 reveal'>
            <span className='text-[11px] font-bold tracking-widest uppercase text-secondary block mb-4'>
              Grade Curricular
            </span>
            <h2 className='font-playfair text-[36px] leading-[44px] font-semibold text-primary'>
              O que você vai aprender
            </h2>
            <p className='text-[15px] text-on-surface-variant mt-4 max-w-xl mx-auto'>
              Conteúdo completo, da teoria à prática, estruturado para que você
              saia do curso apto(a) a atender com segurança e confiança.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {modulos.map(({ num, titulo, desc }) => (
              <div key={num} className='bg-white rounded-2xl p-7 border border-surface-container-highest reveal hover:shadow-lg transition-shadow'>
                <div className='flex items-start gap-5'>
                  <span className='text-[36px] font-bold text-secondary/20 leading-none font-playfair flex-shrink-0'>
                    {num}
                  </span>
                  <div>
                    <h3 className='font-playfair text-[18px] font-semibold text-primary mb-2'>{titulo}</h3>
                    <p className='text-[14px] text-on-surface-variant leading-relaxed'>{desc}</p>
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
            <div className='rounded-2xl overflow-hidden shadow-xl'>
              <Image
                width={600}
                height={500}
                src='https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=85&fit=crop'
                alt='Para quem é o curso'
                className='w-full h-[460px] object-cover'
              />
            </div>
          </div>

          <div className='reveal'>
            <span className='text-[11px] font-bold tracking-widest uppercase text-secondary block mb-4'>
              Público-alvo
            </span>
            <h2 className='font-playfair text-[36px] leading-[44px] font-semibold text-primary mb-6'>
              Para quem é este curso?
            </h2>
            <p className='text-[15px] text-on-surface-variant leading-relaxed mb-8'>
              O curso foi desenhado para acolher diferentes perfis — do iniciante
              ao profissional que quer se atualizar.
            </p>
            <div className='space-y-5'>
              {publico.map(({ icon, texto }) => (
                <div key={texto} className='flex items-center gap-4'>
                  <div className='w-11 h-11 bg-surface-lavender rounded-xl flex items-center justify-center text-secondary flex-shrink-0'>
                    <span className='material-symbols-outlined text-[20px]'>{icon}</span>
                  </div>
                  <p className='text-[15px] text-on-surface-variant'>{texto}</p>
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
            <span className='text-[11px] font-bold tracking-widest uppercase text-secondary block mb-4'>
              Tudo incluso
            </span>
            <h2 className='font-playfair text-[36px] leading-[44px] font-semibold text-white mb-6'>
              O que está incluso no curso?
            </h2>
            <p className='text-[15px] text-on-primary-container leading-relaxed mb-8'>
              Não se preocupe com nada. A Aisthésis preparou tudo para que seu
              único foco seja aprender.
            </p>
            <ul className='space-y-4'>
              {inclusos.map((item) => (
                <li key={item} className='flex items-center gap-4'>
                  <div className='w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0'>
                    <span className='material-symbols-outlined fill-icon text-secondary text-[18px]'>check_circle</span>
                  </div>
                  <span className='text-[15px] text-on-primary-container'>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card de inscrição */}
          <div className='reveal'>
            <div className='bg-white rounded-3xl p-8 shadow-2xl'>
              <div className='text-center mb-8'>
                <p className='text-[12px] font-bold tracking-widest uppercase text-secondary mb-2'>Inscrição</p>
                <h3 className='font-playfair text-[28px] font-semibold text-primary mb-1'>Curso Presencial</h3>
                <p className='text-[14px] text-on-surface-variant'>Limpeza de Pele Profissional</p>
              </div>

              <div className='space-y-4 mb-8'>
                {[
                  { icon: 'location_on', text: 'Caxias do Sul – RS' },
                  { icon: 'schedule', text: '8 horas de imersão presencial' },
                  { icon: 'groups', text: 'Turmas com vagas limitadas' },
                  { icon: 'verified', text: 'Certificado de conclusão incluso' },
                ].map(({ icon, text }) => (
                  <div key={text} className='flex items-center gap-3'>
                    <span className='material-symbols-outlined text-secondary text-[20px]'>{icon}</span>
                    <span className='text-[14px] text-on-surface-variant'>{text}</span>
                  </div>
                ))}
              </div>

              <Link
                href={WA.curso}
                target='_blank'
                className='block w-full text-center bg-secondary text-white py-4 rounded-full text-[13px] font-bold tracking-wider uppercase hover:opacity-90 hover:shadow-xl transition-all mb-4'>
                Garantir minha vaga no WhatsApp
              </Link>
              <Link
                href={`tel:${PHONE_DISPLAY.replace(/\D/g, '')}`}
                className='block w-full text-center border-2 border-outline-variant text-on-surface-variant py-4 rounded-full text-[13px] font-bold tracking-wider uppercase hover:border-secondary hover:text-secondary transition-all'>
                Ligar: {PHONE_DISPLAY}
              </Link>

              <p className='text-center text-[12px] text-on-surface-variant mt-5'>
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
            <span className='text-[11px] font-bold tracking-widest uppercase text-secondary block mb-4'>
              Quem já fez
            </span>
            <h2 className='font-playfair text-[36px] leading-[44px] font-semibold text-primary'>
              O que nossas alunas dizem
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-7'>
            {[
              { text: 'O curso superou todas as expectativas! Saí sabendo executar o procedimento completo com confiança. A didática é incrível.', name: 'Camila Oliveira', role: 'Esteticista', initials: 'CO' },
              { text: 'Era iniciante total e terminei o curso com clientes reais marcadas! A professora é extremamente paciente e detalhista.', name: 'Gabriela Souza', role: 'Empreendedora', initials: 'GS' },
              { text: 'Já trabalhava com estética mas não sabia fazer a limpeza corretamente. Foi um divisor de águas na minha carreira.', name: 'Letícia Mendes', role: 'Auxiliar de estética', initials: 'LM' },
            ].map(({ text, name, role, initials }) => (
              <div key={name} className='dep-card reveal'>
                <div className='flex text-yellow-400 gap-0.5 mb-5'>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className='material-symbols-outlined fill-icon text-xl'>star</span>
                  ))}
                </div>
                <p className='text-[15px] text-on-surface leading-relaxed mb-8 italic'>&ldquo;{text}&rdquo;</p>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center text-[12px] font-bold flex-shrink-0'>
                    {initials}
                  </div>
                  <div>
                    <p className='text-[13px] font-bold text-primary'>{name}</p>
                    <p className='text-[11px] text-on-surface-variant uppercase tracking-wider'>{role}</p>
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
            <span className='text-[11px] font-bold tracking-widest uppercase text-secondary block mb-4'>
              Dúvidas
            </span>
            <h2 className='font-playfair text-[36px] leading-[44px] font-semibold text-primary'>
              Perguntas frequentes
            </h2>
          </div>

          <div className='max-w-3xl mx-auto space-y-4'>
            {faqs.map(({ q, a }) => (
              <div key={q} className='bg-surface rounded-2xl p-7 reveal'>
                <h3 className='text-[16px] font-bold text-primary mb-3'>{q}</h3>
                <p className='text-[14px] text-on-surface-variant leading-relaxed'>{a}</p>
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
          <span className='text-[11px] font-bold tracking-widest uppercase text-secondary block mb-4'>
            Vagas limitadas
          </span>
          <h2 className='font-playfair text-[40px] leading-[48px] font-semibold text-white mb-6 max-w-2xl mx-auto'>
            Pronta para transformar sua carreira?
          </h2>
          <p className='text-[15px] text-on-primary-container mb-10 max-w-xl mx-auto leading-relaxed'>
            Entre em contato agora pelo WhatsApp, tire suas dúvidas e garanta
            sua vaga antes que esgote. As turmas fecham rápido!
          </p>
          <div className='flex flex-wrap gap-4 justify-center'>
            <Link
              href={WA.curso}
              target='_blank'
              className='bg-secondary text-white px-8 py-4 rounded-full text-[13px] font-bold tracking-wider uppercase hover:shadow-2xl hover:scale-[1.02] transition-all'>
              Quero garantir minha vaga!
            </Link>
            <Link
              href={`tel:${PHONE_DISPLAY.replace(/\D/g, '')}`}
              className='border-2 border-white/30 text-white px-8 py-4 rounded-full text-[13px] font-bold tracking-wider uppercase hover:border-white transition-colors'>
              {PHONE_DISPLAY}
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className='bg-white border-t border-surface-container-highest py-8'>
        <div className='max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-4'>
          <Link href='/'>
            <Image src='/aisthesis.png' alt='Aisthésis' width={100} height={32} className='object-contain' />
          </Link>
          <p className='text-[12px] text-on-surface-variant'>
            © 2025 Aisthésis Clínica de Estética & Pilates — Caxias do Sul, RS
          </p>
          <Link
            href={WA.contato}
            target='_blank'
            className='inline-flex items-center gap-2 bg-secondary text-white px-5 py-2 rounded-full text-[12px] font-bold hover:opacity-90 transition-opacity'>
            <span className='material-symbols-outlined text-[16px]'>chat</span>
            WhatsApp
          </Link>
        </div>
      </footer>

      {/* WhatsApp Fixo */}
      <Link
        href={WA.curso}
        target='_blank'
        className='fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform'>
        <svg viewBox='0 0 24 24' fill='white' className='w-7 h-7'>
          <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
        </svg>
      </Link>
    </>
  );
}
