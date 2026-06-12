import Image from 'next/image';
import Link from 'next/link';
import AnimationProvider from './components/AnimationProvider';
import { WA, PHONE_DISPLAY } from './lib/links';
import {
  MdBiotech,
  MdCall,
  MdGroups,
  MdHealing,
  MdPregnantWoman,
  MdSelfImprovement,
  MdVerifiedUser,
} from 'react-icons/md';
import {
  IoArrowForwardCircle,
  IoFitnessSharp,
  IoSchool,
  IoSparkles,
} from 'react-icons/io5';
import { FaCheckCircle, FaInstagram } from 'react-icons/fa';
import { BsChatRightText } from 'react-icons/bs';
import { FaLocationDot, FaStar, FaWhatsapp } from 'react-icons/fa6';
import { RiCalendarScheduleLine } from 'react-icons/ri';

export default function Home() {
  return (
    <>
      <AnimationProvider />

      {/* ── NAV ── */}
      <header>
        <nav
          className='fixed w-full z-50 transition-all duration-500 h-max py-2 flex items-center bg-white backdrop-blur-xs'
          id='top-nav'>
          <div className='flex justify-between items-center w-full max-w-6xl mx-auto px-4'>
            <div className='flex items-center gap-3'>
              <Image
                src='/aisthesis.png'
                alt='Aisthésis'
                width={120}
                height={38}
                sizes='120px'
                className='object-contain w-12 md:w-20'
              />
            </div>
            <div className='hidden md:flex items-center gap-8'>
              {[
                ['A Clínica', '#sobre'],
                ['Tratamentos', '#tratamentos'],
                ['Pilates', '#pilates'],
                ['Profissionais', '#profissionais'],
                ['Curso', '/curso-limpeza-de-pele'],
                ['Contato', '#contato'],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className='text-xs font-semibold text-on-surface-variant hover:text-primary transition-colors tracking-wider uppercase'>
                  {label}
                </Link>
              ))}
            </div>
            <Link
              href={WA.agendar}
              target='_blank'
              className='bg-primary text-white px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase hover:bg-secondary transition-colors'>
              Agendar
            </Link>
          </div>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section className='hero-section pt-16 sm:pt-20 pb-10'>
        <Image
          src='/background.jpg'
          alt=''
          fill
          priority
          quality={80}
          sizes='100vw'
          className='object-cover object-center z-0'
        />
        <div
          className='hero-gradient'
          aria-hidden='true'
        />

        <div className='relative z-10 px-4 max-w-container-max mx-auto w-full'>
          <div className='max-w-140'>
            {/* Eyebrow label */}
            <div className='inline-flex  items-center gap-2 bg-secondary/10 border border-secondary/20 text-primary px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-8'>
              <span className='w-1.5 h-1.5 rounded-full bg-secondary inline-block' />
              Clínica de Estética & Pilates · Caxias do Sul
            </div>

            {/* H1 */}
            <h1 className='font-playfair text-4xl sm:text-5xl lg:text-6xl lg:leading-tight font-semibold text-primary mb-6'>
              <span className='word-stagger'>Realce</span>{' '}
              <span className='word-stagger'>sua</span>{' '}
              <span className='word-stagger italic text-secondary'>
                beleza.
              </span>
              <br />
              <span className='word-stagger'>Confie</span>{' '}
              <span className='word-stagger'>em</span>{' '}
              <span className='word-stagger'>quem</span>{' '}
              <span className='word-stagger'>cuida.</span>
            </h1>

            {/* Body */}
            <p className='text-sm sm:text-base text-on-surface-variant font-light leading-relaxed max-w-48 sm:max-w-sm min-[400px]:max-w-64 mb-10 reveal '>
              Um refúgio de tranquilidade onde a ciência estética encontra o
              cuidado humano — para revelar sua melhor versão.
            </p>

            {/* CTAs */}
            <div className='flex flex-wrap gap-4 reveal'>
              <Link
                href={WA.agendar}
                target='_blank'
                className='bg-secondary text-white px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase hover:shadow-xl hover:scale-[1.02] transition-all'>
                Agendar consulta
              </Link>
              <Link
                href='/curso-limpeza-de-pele'
                className='border-2 border-primary/20 text-primary px-5 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase hover:border-secondary hover:text-secondary transition-all duration-300'>
                Curso de Limpeza de Pele
              </Link>
            </div>

            {/* Stats */}
            <div className='flex flex-wrap gap-10 mt-14 reveal'>
              {[
                ['12+', 'Anos de experiência'],
                ['+500', 'Pacientes atendidas'],
                ['4.9★', 'Avaliação Google'],
              ].map(([num, label]) => (
                <div key={label}>
                  <p className='text-2xl sm:text-3xl font-bold text-primary leading-none mb-1'>
                    {num}
                  </p>
                  <p className='text-xs text-on-surface-variant font-light uppercase tracking-wider'>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section
        id='sobre'
        className='py-stack-lg bg-white overflow-hidden'>
        <div className='max-w-container-max mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
          <div className='sobre-img-grid reveal'>
            <Image
              width={400}
              height={200}
              sizes='(min-width: 768px) 25vw, 50vw'
              src='https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80&fit=crop'
              alt='Tratamento facial'
              className='w-full h-60 object-cover rounded-2xl'
            />
            <Image
              width={400}
              height={300}
              sizes='(min-width: 768px) 25vw, 50vw'
              src='https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&q=80&fit=crop'
              alt='Clínica Aisthésis'
              className='w-full h-46.25 object-cover rounded-2xl mt-6'
            />
            <Image
              width={400}
              height={200}
              sizes='(min-width: 768px) 25vw, 50vw'
              src='https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=600&q=80&fit=crop'
              alt='Equipamentos'
              className='w-full h-46.25 object-cover rounded-2xl'
            />
            <Image
              width={400}
              height={300}
              sizes='(min-width: 768px) 25vw, 50vw'
              src='/proveValue.jpg'
              alt='Consulta estética'
              className='w-full h-60 object-cover rounded-2xl -mt-10 relative z-10'
            />
          </div>

          <div className='reveal'>
            {/* Eyebrow */}
            <span className='text-xs font-bold tracking-widest uppercase text-secondary block mb-4'>
              Sobre Nós
            </span>
            {/* H2 */}
            <h2 className='font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary mb-6'>
              Conheça a Aisthésis
            </h2>
            {/* Body */}
            <p className='text-sm sm:text-base text-on-surface-variant leading-relaxed mb-8'>
              Nossa trajetória é marcada pela busca incessante do equilíbrio
              entre saúde e estética. Unimos tecnologia de ponta a um ambiente
              planejado para o seu total conforto e bem-estar.
            </p>
            <div className='space-y-6 mb-10'>
              {[
                {
                  icon: <MdVerifiedUser />,
                  title: '12+ anos de história',
                  desc: 'Experiência comprovada em resultados reais.',
                },
                {
                  icon: <IoSparkles />,
                  title: 'Ambiente aconchegante',
                  desc: 'Cada detalhe pensado para o seu bem-estar.',
                },
                {
                  icon: <MdBiotech />,
                  title: 'Tecnologia de ponta',
                  desc: 'Equipamentos e protocolos sempre atualizados.',
                },
                {
                  icon: <MdGroups />,
                  title: 'Equipe especializada',
                  desc: 'Profissionais em constante atualização técnica.',
                },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className='flex items-center gap-4 group'>
                  <div className='w-11 h-11 bg-surface-lavender rounded-xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors shrink-0'>
                    <span className='text-xl'>{icon}</span>
                  </div>
                  <div>
                    {/* Mini title */}
                    <p className='text-xs sm:text-sm font-bold text-primary'>
                      {title}
                    </p>
                    {/* Mini desc */}
                    <p className='text-xs sm:text-sm text-on-surface-variant'>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href={WA.contato}
              target='_blank'
              className='inline-flex items-center gap-2 bg-primary text-white px-7 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase hover:bg-secondary transition-colors'>
              Fale conosco
              <IoArrowForwardCircle />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRATAMENTOS ── */}
      <section
        id='tratamentos'
        className='py-stack-lg bg-surface'>
        <div className='max-w-container-max mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between mb-14 gap-6 reveal'>
            <div>
              {/* Eyebrow */}
              <span className='text-xs font-bold tracking-widest uppercase text-secondary block mb-3'>
                Serviços
              </span>
              {/* H2 */}
              <h2 className='font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary'>
                Nossos Tratamentos
              </h2>
            </div>
            <div className='flex gap-0 self-end border w-max sm:w-72 border-outline-variant rounded-xl overflow-hidden'>
              <button
                id='tab-facial'
                className='px-7 py-2.5 flex-1 text-xs sm:text-sm font-bold tracking-wider tab-active rounded-xl transition-all'>
                Facial
              </button>
              <button
                id='tab-corporal'
                className='px-7 py-2.5 flex-1 text-xs sm:text-sm font-bold tracking-wider tab-inactive rounded-xl transition-all'>
                Corporal
              </button>
            </div>
          </div>

          <div
            className='grid grid-cols-1 md:grid-cols-3 gap-7'
            id='grid-facial'>
            {[
              {
                img: '/usingTech.jpg',
                title: 'Limpeza de Pele',
                desc: 'Protocolos personalizados para desintoxicar e iluminar sua pele.',
                wa: WA.agendar,
              },
              {
                img: '/botox.jpg',
                title: 'Botox & Preenchimento',
                desc: 'Harmonização natural preservando suas expressões únicas.',
                wa: WA.agendar,
              },
              {
                img: '/microagulhamento.jpg',
                title: 'Microagulhamento',
                desc: 'Estimulação de colágeno para uma pele rejuvenescida e firme.',
                wa: WA.agendar,
              },
              {
                img: '/peeling.jpg',
                title: 'Peeling Químico',
                desc: 'Renovação celular para manchas, acne e pele opaca.',
                wa: WA.agendar,
              },
              {
                img: '/radioFrequenciaFacial.jpg',
                title: 'Radiofrequência',
                desc: 'Estímulo de colágeno para firmeza e rejuvenescimento.',
                wa: WA.agendar,
              },
              {
                img: '/drenagem.jpg',
                title: 'Drenagem Linfática',
                desc: 'Redução de inchaço e melhora da circulação local.',
                wa: WA.agendar,
              },
            ].map(({ img, title, desc, wa }) => (
              <div
                key={title}
                className='trat-card reveal group'>
                <div className='rounded-xl overflow-hidden aspect-4/3 mb-5'>
                  <Image
                    width={500}
                    height={375}
                    sizes='(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
                    src={img}
                    alt={title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
                  />
                </div>
                {/* Card H3 */}
                <h3 className='font-playfair text-lg sm:text-xl font-semibold text-primary mb-2'>
                  {title}
                </h3>
                {/* Card desc */}
                <p className='text-sm text-on-surface-variant mb-5 leading-relaxed'>
                  {desc}
                </p>
                <Link
                  href={wa}
                  target='_blank'
                  className='text-secondary text-xs sm:text-sm font-bold tracking-wide inline-flex items-center gap-1.5 group-hover:gap-3 transition-all'>
                  Agendar <IoArrowForwardCircle className='text-base' />
                </Link>
              </div>
            ))}
          </div>

          <div
            className='grid grid-cols-1 md:grid-cols-3 gap-7 hidden'
            id='grid-corporal'>
            {[
              {
                img: '/modelagem.jpg',
                title: 'Modelagem Corporal',
                desc: 'Redução de medidas e modelagem com tecnologia avançada.',
              },
              {
                img: '/drenagemCorporal.jpg',
                title: 'Drenagem Corporal',
                desc: 'Ativação do sistema linfático para reduzir retenção.',
              },
              {
                img: '/radioFrequencia.jpg',
                title: 'Radiofrequência Corporal',
                desc: 'Tratamento de flacidez e celulite com resultados visíveis.',
              },
              {
                img: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=600&q=80&fit=crop',
                title: 'Massagem Relaxante',
                desc: 'Alívio de tensões com técnicas profissionais de massoterapia.',
              },
              {
                img: '/criolipólise.jpg',
                title: 'Criolipólise',
                desc: 'Eliminação de gordura localizada pelo frio, sem cirurgia.',
              },
              {
                img: '/ultrassom.jpg',
                title: 'Ultrassom Cavitacional',
                desc: 'Destruição de células de gordura por ondas ultrassônicas.',
              },
            ].map(({ img, title, desc }) => (
              <div
                key={title}
                className='trat-card reveal group'>
                <div className='rounded-xl overflow-hidden aspect-4/3 mb-5'>
                  <Image
                    width={500}
                    height={375}
                    sizes='(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
                    src={img}
                    alt={title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
                  />
                </div>
                <h3 className='font-playfair text-lg sm:text-xl font-semibold text-primary mb-2'>
                  {title}
                </h3>
                <p className='text-sm text-on-surface-variant mb-5 leading-relaxed'>
                  {desc}
                </p>
                <Link
                  href={WA.agendar}
                  target='_blank'
                  className='text-secondary text-xs sm:text-sm font-bold tracking-wide inline-flex items-center gap-1.5 group-hover:gap-3 transition-all'>
                  Agendar <IoArrowForwardCircle className='text-base' />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURSO DESTAQUE ── */}
      <section
        id='curso'
        className='py-stack-lg curso-section overflow-hidden'>
        <div className='max-w-container-max mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
          <div className='reveal'>
            {/* Eyebrow */}
            <div className='inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6'>
              <IoSchool />
              Curso Presencial · Caxias do Sul
            </div>
            {/* H2 */}
            <h2 className='font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6'>
              Limpeza de Pele
              <br />
              <span className='text-secondary'>Profissional</span>
            </h2>
            {/* Body */}
            <p className='text-sm sm:text-base text-on-primary-container leading-relaxed mb-8 max-w-md'>
              Aprenda a executar o procedimento mais procurado na área de
              estética facial. Curso hands-on com certificado, ministrado pelas
              profissionais experientes da clínica Aisthésis.
            </p>
            <ul className='space-y-3 mb-10'>
              {[
                'Teoria e prática completa do protocolo',
                'Material didático incluso',
                'Certificado de conclusão',
                'Turmas reduzidas e personalizadas',
                'Suporte pós-curso via WhatsApp',
              ].map((item) => (
                <li
                  key={item}
                  className='flex items-center gap-3 text-sm sm:text-base text-on-primary-container'>
                  <FaCheckCircle className='text-secondary text-base shrink-0' />
                  {item}
                </li>
              ))}
            </ul>
            <div className='flex flex-wrap gap-4'>
              <Link
                href='/curso-limpeza-de-pele'
                className='inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase hover:shadow-2xl hover:scale-[1.02] transition-all'>
                Ver detalhes do curso
                <IoArrowForwardCircle className='text-lg' />
              </Link>
              <Link
                href={WA.curso}
                target='_blank'
                className='inline-flex items-center gap-2 border-2 border-secondary/40 text-secondary px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase hover:border-secondary transition-colors'>
                Falar no WhatsApp
              </Link>
            </div>
          </div>

          <div className='relative reveal'>
            <div className='rounded-2xl overflow-hidden shadow-2xl'>
              <Image
                width={600}
                height={500}
                sizes='(min-width: 768px) 50vw, 100vw'
                src='/background.jpg'
                alt='Curso de Limpeza de Pele'
                className='w-full h-120 object-cover'
              />
            </div>
            <div className='absolute -bottom-6 -left-6 bg-white rounded-2xl px-6 py-5 shadow-2xl'>
              <p className='text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1'>
                Próxima turma
              </p>
              <p className='text-xl sm:text-2xl font-bold text-primary leading-none'>
                Vagas limitadas!
              </p>
              <Link
                href={WA.curso}
                target='_blank'
                className='mt-3 flex items-center gap-1.5 text-secondary text-xs sm:text-sm font-bold tracking-wide'>
                Garantir minha vaga →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PILATES ── */}
      <section
        id='pilates'
        className='pilates-section py-stack-lg overflow-hidden'>
        <div className='max-w-container-max mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-20 items-center'>
          <div className='relative reveal order-2 md:order-1'>
            <div className='rounded-2xl overflow-hidden shadow-2xl'>
              <Image
                width={6}
                height={5}
                sizes='(min-width: 768px) 50vw, 100vw'
                src='https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80&fit=crop'
                alt='Estúdio de Pilates Aisthésis'
                className='w-full h-125 object-cover hover:scale-105 transition-transform duration-300'
              />
            </div>
            <div className='absolute -bottom-8 -right-6 bg-white rounded-2xl px-7 py-5 shadow-2xl border border-surface-container-highest'>
              <p className='text-4xl font-bold text-secondary leading-none mb-1'>
                100%
              </p>
              <p className='text-xs font-bold text-on-surface-variant uppercase tracking-widest'>
                Foco individual
              </p>
            </div>
          </div>

          <div className='reveal order-1 md:order-2'>
            {/* Eyebrow */}
            <span className='text-xs font-bold tracking-widest uppercase text-secondary block mb-4'>
              Equilíbrio & Força
            </span>
            {/* H2 */}
            <h2 className='font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6'>
              Pilates com propósito
            </h2>
            {/* Body */}
            <p className='text-sm sm:text-base text-on-primary-container leading-relaxed mb-8 max-w-md'>
              Muito além do exercício — uma jornada de autoconhecimento e
              controle corporal. Turmas pequenas e acompanhamento
              individualizado para a sua evolução real.
            </p>
            <div className='grid grid-cols-1 min-[400px]:grid-cols-2 gap-5 mb-10'>
              {[
                { icon: <MdSelfImprovement />, text: 'Pilates Solo' },
                { icon: <IoFitnessSharp />, text: 'Aparelhos' },
                { icon: <MdPregnantWoman />, text: 'Gestantes' },
                { icon: <MdHealing />, text: 'Reabilitação' },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  className='flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3'>
                  <span className='text-secondary text-xl'>{icon}</span>
                  <span className='text-xs sm:text-sm font-semibold text-white'>
                    {text}
                  </span>
                </div>
              ))}
            </div>
            <Link
              href={WA.pilates}
              target='_blank'
              className='inline-flex items-center gap-2 border-2 border-secondary text-secondary px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase hover:bg-secondary hover:text-white transition-all'>
              Conhecer o estúdio
              <IoArrowForwardCircle />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROFISSIONAIS ── */}
      <section
        id='profissionais'
        className='py-stack-lg bg-white'>
        <div className='max-w-container-max mx-auto px-margin-desktop'>
          <div className='text-center mb-14 reveal'>
            {/* Eyebrow */}
            <span className='text-xs font-bold tracking-widest uppercase text-secondary block mb-4'>
              Nossa Equipe
            </span>
            {/* H2 */}
            <h2 className='font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary'>
              Profissionais especializadas
            </h2>
            {/* Body */}
            <p className='text-sm sm:text-base text-on-surface-variant mt-4 max-w-xl mx-auto'>
              Uma equipe dedicada, com formação contínua e compromisso com
              resultados reais.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto gap-8'>
            {[
              {
                img: '/daniella.png',
                name: 'DANIELLA DEMOSSI BASSANI',
                role: [
                  'Fisioterapeuta Graduada',
                  'Pós em Fisioterapia Dermatofuncional',
                  'Fisioterapia Neurofuncional',
                ],
                cro: 'Certificado - xxxxx',
              },
              {
                img: '/roberta.png',
                name: 'ROBERTA VEBER TOSCAN',
                role: [
                  'Fisioterapeuta Graduada',
                  'Pós em Fisioterapia Dermatofuncional',
                ],
                cro: 'Certificado - xxxxx',
              },
            ].map(({ img, name, role, cro }, index) => (
              <div
                key={index}
                className='prof-card reveal group'>
                <div className='overflow-hidden rounded-2xl mb-5'>
                  <Image
                    width={400}
                    height={400}
                    sizes='(min-width: 768px) 33vw, 100vw'
                    src={img}
                    alt={name}
                    className='w-full h-75 object-cover object-top group-hover:scale-105 transition-transform duration-700'
                  />
                </div>
                {/* Card H3 */}
                <h3 className='font-playfair text-lg sm:text-xl font-semibold text-primary mb-2'>
                  {name}
                </h3>
                <ul className='mb-1'>
                  {role.map((graduation, i) => (
                    <li
                      key={i}
                      className='text-xs sm:text-sm text-secondary font-semibold list-disc '>
                      {graduation}
                    </li>
                  ))}
                </ul>
                <p className='text-xs text-on-surface-variant'>{cro}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ── */}
      <section className='py-stack-lg bg-surface-lavender'>
        <div className='max-w-container-max mx-auto px-margin-desktop'>
          <div className='text-center mb-14 reveal'>
            {/* Eyebrow */}
            <span className='text-xs font-bold tracking-widest uppercase text-secondary block mb-4'>
              Depoimentos
            </span>
            {/* H2 */}
            <h2 className='font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary'>
              A voz de quem confia
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-7'>
            {[
              {
                text: 'Ambiente maravilhoso e profissionais extremamente atenciosas. Minha pele nunca esteve tão bem cuidada!',
                name: 'Mariana Lima',
                service: 'Limpeza de Pele',
                initials: 'ML',
                color: 'bg-primary',
              },
              {
                text: 'O Pilates na Aisthésis mudou minha postura e minha qualidade de vida. Atendimento diferenciado, super indico!',
                name: 'Ricardo Alves',
                service: 'Pilates',
                initials: 'RA',
                color: 'bg-secondary',
              },
              {
                text: 'Fiz preenchimento labial e ficou super natural. A profissional é uma artista — muito cuidadosa e atenciosa.',
                name: 'Fernanda Costa',
                service: 'Preenchimento',
                initials: 'FC',
                color: 'bg-med-blue',
              },
            ].map(({ text, name, service, initials, color }) => (
              <div
                key={name}
                className='dep-card reveal'>
                <div className='flex text-yellow-400 gap-0.5 mb-5'>
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className='material-symbols-outlined fill-icon text-xl'
                    />
                  ))}
                </div>
                {/* Quote body */}
                <p className='text-sm sm:text-base text-on-surface leading-relaxed mb-8 italic'>
                  &ldquo;{text}&rdquo;
                </p>
                <div className='flex items-center gap-3'>
                  <div
                    className={`w-10 h-10 rounded-full ${color} text-white flex items-center justify-center text-xs font-bold shrink-0`}>
                    {initials}
                  </div>
                  <div>
                    <p className='text-xs sm:text-sm font-bold text-primary'>
                      {name}
                    </p>
                    <p className='text-xs text-on-surface-variant uppercase tracking-wider'>
                      {service}
                    </p>
                  </div>
                </div>
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
            Comece hoje
          </span>
          {/* H2 */}
          <h2 className='font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 max-w-2xl mx-auto'>
            Pronta para cuidar de você com quem entende?
          </h2>
          {/* Body */}
          <p className='text-sm sm:text-base text-on-primary-container mb-10 max-w-xl mx-auto leading-relaxed'>
            Agende sua avaliação gratuita e descubra o protocolo ideal para o
            seu tipo de pele e seus objetivos.
          </p>
          <div className='flex flex-wrap gap-4 justify-center'>
            <Link
              href={WA.avaliacao}
              target='_blank'
              className='bg-secondary text-white px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase hover:shadow-2xl hover:scale-[1.02] transition-all'>
              Agendar avaliação gratuita
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
      <footer
        id='contato'
        className='bg-white border-t border-surface-container-highest pt-stack-lg pb-10'>
        <div className='max-w-container-max mx-auto px-margin-desktop'>
          <div className='grid grid-cols-1 md:grid-cols-12 gap-12 mb-16'>
            <div className='md:col-span-5'>
              <Image
                src='/aisthesis.png'
                alt='Aisthésis'
                width={140}
                height={44}
                sizes='140px'
                className='w-24 mb-5'
              />
              <p className='text-sm text-on-surface-variant leading-relaxed max-w-70 mb-8'>
                Excelência em estética e pilates. Transformando vidas através do
                cuidado e da ciência.
              </p>
              <div className='flex gap-3'>
                <Link
                  href='https://www.instagram.com/aisthesisestetica'
                  target='_blank'
                  className='w-9 h-9 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-secondary hover:text-white hover:border-secondary transition-all'>
                  <FaInstagram className='w-4 h-4' />
                </Link>
                <Link
                  href={WA.contato}
                  target='_blank'
                  className='w-9 h-9 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-secondary hover:text-white hover:border-secondary transition-all'>
                  <BsChatRightText className='w-4 h-4' />
                </Link>
              </div>
            </div>

            <div className='md:col-span-3'>
              <h4 className='text-xs font-bold tracking-widest uppercase text-primary mb-7'>
                Links Úteis
              </h4>
              <ul className='space-y-3.5'>
                {[
                  ['A Clínica', '#sobre'],
                  ['Tratamentos', '#tratamentos'],
                  ['Pilates', '#pilates'],
                  ['Profissionais', '#profissionais'],
                  ['Curso de Limpeza de Pele', '/curso-limpeza-de-pele'],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className='text-sm text-on-surface-variant hover:text-secondary transition-colors'>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='md:col-span-4'>
              <h4 className='text-xs font-bold tracking-widest uppercase text-primary mb-7'>
                Contato
              </h4>
              <ul className='space-y-5'>
                <li className='flex items-start gap-3'>
                  <FaLocationDot className='text-secondary text-lg mt-0.5 shrink-0' />
                  <span className='text-sm text-on-surface-variant leading-relaxed'>
                    Caxias do Sul — RS
                  </span>
                </li>
                <li className='flex items-center gap-3'>
                  <MdCall className='text-secondary text-lg shrink-0' />
                  <Link
                    href={`tel:${PHONE_DISPLAY.replace(/\D/g, '')}`}
                    className='text-sm text-on-surface-variant hover:text-secondary transition-colors'>
                    {PHONE_DISPLAY}
                  </Link>
                </li>
                <li className='flex items-center gap-3'>
                  <RiCalendarScheduleLine className='text-secondary text-lg shrink-0' />
                  <span className='text-sm text-on-surface-variant'>
                    Seg – Sex: 08:00 – 20:00
                  </span>
                </li>
                <li className='mt-4'>
                  <Link
                    href={WA.contato}
                    target='_blank'
                    className='inline-flex items-center gap-2 bg-secondary text-white px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider hover:opacity-90 transition-opacity'>
                    <FaWhatsapp className='text-base' />
                    Falar no WhatsApp
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='pt-7 border-t border-surface-container-highest flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-xs text-on-surface-variant'>
              © 2025 Aisthésis Clínica de Estética & Pilates. Todos os direitos
              reservados.
            </p>
            <div className='flex gap-7'>
              <Link
                href='#'
                className='text-xs text-on-surface-variant hover:text-secondary transition-colors'>
                Termos de Uso
              </Link>
              <Link
                href='#'
                className='text-xs text-on-surface-variant hover:text-secondary transition-colors'>
                Privacidade
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Fixo */}
      <Link
        href={WA.contato}
        target='_blank'
        className='fixed bottom-6 right-6 z-50 w-16 h-16 p-1 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform'>
        <FaWhatsapp className='w-10 h-10' />
      </Link>
    </>
  );
}
