import Image from 'next/image';
import Link from 'next/link';
import AnimationProvider from './components/AnimationProvider';
import { WA, PHONE_DISPLAY } from './lib/links';

export default function Home() {
  return (
    <>
      <AnimationProvider />

      {/* ── NAV ── */}
      <header>
        <nav
          className='fixed w-full z-50 transition-all duration-500 h-18 flex items-center bg-white backdrop-blur-xs'
          id='top-nav'>
          <div className='flex justify-between items-center w-full max-w-6xl mx-auto px-4'>
            <div className='flex items-center h- gap-3'>
              <Image
                src='/aisthesis.png'
                alt='Aisthésis'
                width={120}
                height={38}
                className='object-contain w-20'
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
                  className='text-[12px] font-semibold text-on-surface-variant hover:text-primary transition-colors tracking-wider uppercase'>
                  {label}
                </Link>
              ))}
            </div>
            <Link
              href={WA.agendar}
              target='_blank'
              className='bg-primary text-white px-6 py-2.5 rounded-full text-[12px] font-bold tracking-wider uppercase hover:bg-secondary transition-colors'>
              Agendar
            </Link>
          </div>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section className='hero-section pt-[116px]'>
        <div className='hero-photo' />

        <div className='relative z-10 max-w-container-max mx-auto px-margin-desktop w-full'>
          <div className='max-w-[560px]'>
            <div className='inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 text-primary px-4 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase mb-8'>
              <span className='w-1.5 h-1.5 rounded-full bg-secondary inline-block' />
              Clínica de Estética & Pilates · Caxias do Sul
            </div>

            <h1 className='font-playfair text-[52px] leading-[60px] font-semibold text-primary mb-6'>
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

            <p className='text-[15px] text-on-surface-variant leading-relaxed max-w-[420px] mb-10 reveal'>
              Um refúgio de tranquilidade onde a ciência estética encontra o
              cuidado humano — para revelar sua melhor versão.
            </p>

            <div className='flex flex-wrap gap-4 reveal'>
              <Link
                href={WA.agendar}
                target='_blank'
                className='bg-secondary text-white px-8 py-3.5 rounded-full text-[13px] font-bold tracking-wider uppercase hover:shadow-xl hover:scale-[1.02] transition-all'>
                Agendar consulta
              </Link>
              <Link
                href='/curso-limpeza-de-pele'
                className='border-2 border-primary/20 text-primary px-8 py-3.5 rounded-full text-[13px] font-bold tracking-wider uppercase hover:border-secondary hover:text-secondary transition-all duration-300'>
                Curso de Limpeza de Pele
              </Link>
            </div>

            <div className='flex gap-10 mt-14 reveal'>
              {[
                ['12+', 'Anos de experiência'],
                ['+500', 'Pacientes atendidas'],
                ['4.9★', 'Avaliação Google'],
              ].map(([num, label]) => (
                <div key={label}>
                  <p className='text-[26px] font-bold text-primary leading-none mb-1'>
                    {num}
                  </p>
                  <p className='text-[11px] text-on-surface-variant uppercase tracking-wider font-semibold'>
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
        <div className='max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
          <div className='sobre-img-grid reveal'>
            <Image
              width={400}
              height={300}
              src='https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&q=80&fit=crop'
              alt='Clínica Aisthésis'
              className='w-full h-[240px] object-cover rounded-2xl'
            />
            <Image
              width={400}
              height={200}
              src='https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80&fit=crop'
              alt='Tratamento facial'
              className='w-full h-[185px] object-cover rounded-2xl mt-6'
            />
            <Image
              width={400}
              height={200}
              src='https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=600&q=80&fit=crop'
              alt='Equipamentos'
              className='w-full h-[185px] object-cover rounded-2xl'
            />
            <Image
              width={400}
              height={300}
              src='https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80&fit=crop'
              alt='Consulta estética'
              className='w-full h-[240px] object-cover rounded-2xl -mt-12 relative z-10'
            />
          </div>

          <div className='reveal'>
            <span className='text-[11px] font-bold tracking-widest uppercase text-secondary block mb-4'>
              Sobre Nós
            </span>
            <h2 className='font-playfair text-[36px] leading-[44px] font-semibold text-primary mb-6'>
              Conheça a Aisthésis
            </h2>
            <p className='text-[15px] text-on-surface-variant leading-relaxed mb-8'>
              Nossa trajetória é marcada pela busca incessante do equilíbrio
              entre saúde e estética. Unimos tecnologia de ponta a um ambiente
              planejado para o seu total conforto e bem-estar.
            </p>
            <div className='space-y-6 mb-10'>
              {[
                {
                  icon: 'verified_user',
                  title: '12+ anos de história',
                  desc: 'Experiência comprovada em resultados reais.',
                },
                {
                  icon: 'spa',
                  title: 'Ambiente aconchegante',
                  desc: 'Cada detalhe pensado para o seu bem-estar.',
                },
                {
                  icon: 'science',
                  title: 'Tecnologia de ponta',
                  desc: 'Equipamentos e protocolos sempre atualizados.',
                },
                {
                  icon: 'groups',
                  title: 'Equipe especializada',
                  desc: 'Profissionais em constante atualização técnica.',
                },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className='flex items-center gap-4 group'>
                  <div className='w-11 h-11 bg-surface-lavender rounded-xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors flex-shrink-0'>
                    <span className='material-symbols-outlined text-[20px]'>
                      {icon}
                    </span>
                  </div>
                  <div>
                    <p className='text-[13px] font-bold text-primary'>
                      {title}
                    </p>
                    <p className='text-[13px] text-on-surface-variant'>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href={WA.contato}
              target='_blank'
              className='inline-flex items-center gap-2 bg-primary text-white px-7 py-3 rounded-full text-[13px] font-bold tracking-wider uppercase hover:bg-secondary transition-colors'>
              Fale conosco
              <span className='material-symbols-outlined text-[16px]'>
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRATAMENTOS ── */}
      <section
        id='tratamentos'
        className='py-stack-lg bg-surface'>
        <div className='max-w-container-max mx-auto px-margin-desktop'>
          <div className='flex flex-col md:flex-row justify-between items-end mb-14 gap-6 reveal'>
            <div>
              <span className='text-[11px] font-bold tracking-widest uppercase text-secondary block mb-3'>
                Serviços
              </span>
              <h2 className='font-playfair text-[36px] leading-[44px] font-semibold text-primary'>
                Nossos Tratamentos
              </h2>
            </div>
            <div className='flex gap-0 border border-outline-variant rounded-xl overflow-hidden'>
              <button
                id='tab-facial'
                className='px-7 py-2.5 text-[12px] font-bold tracking-wider tab-active rounded-xl transition-all'>
                Facial
              </button>
              <button
                id='tab-corporal'
                className='px-7 py-2.5 text-[12px] font-bold tracking-wider tab-inactive rounded-xl transition-all'>
                Corporal
              </button>
            </div>
          </div>

          <div
            className='grid grid-cols-1 md:grid-cols-3 gap-7'
            id='grid-facial'>
            {[
              {
                img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80&fit=crop',
                title: 'Limpeza de Pele',
                desc: 'Protocolos personalizados para desintoxicar e iluminar sua pele.',
                wa: WA.agendar,
              },
              {
                img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80&fit=crop',
                title: 'Botox & Preenchimento',
                desc: 'Harmonização natural preservando suas expressões únicas.',
                wa: WA.agendar,
              },
              {
                img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80&fit=crop',
                title: 'Microagulhamento',
                desc: 'Estimulação de colágeno para uma pele rejuvenescida e firme.',
                wa: WA.agendar,
              },
              {
                img: 'https://images.unsplash.com/photo-1599407384144-604e66b4ac10?w=600&q=80&fit=crop',
                title: 'Peeling Químico',
                desc: 'Renovação celular para manchas, acne e pele opaca.',
                wa: WA.agendar,
              },
              {
                img: 'https://images.unsplash.com/photo-1559599238-308793637427?w=600&q=80&fit=crop',
                title: 'Radiofrequência Facial',
                desc: 'Estímulo de colágeno para firmeza e rejuvenescimento.',
                wa: WA.agendar,
              },
              {
                img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80&fit=crop',
                title: 'Drenagem Linfática',
                desc: 'Redução de inchaço e melhora da circulação local.',
                wa: WA.agendar,
              },
            ].map(({ img, title, desc, wa }) => (
              <div
                key={title}
                className='trat-card reveal group'>
                <div className='rounded-xl overflow-hidden aspect-[4/3] mb-5'>
                  <Image
                    width={500}
                    height={375}
                    src={img}
                    alt={title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
                  />
                </div>
                <h3 className='font-playfair text-[20px] font-semibold text-primary mb-2'>
                  {title}
                </h3>
                <p className='text-[14px] text-on-surface-variant mb-5 leading-relaxed'>
                  {desc}
                </p>
                <Link
                  href={wa}
                  target='_blank'
                  className='text-secondary text-[12px] font-bold tracking-wide inline-flex items-center gap-1.5 group-hover:gap-3 transition-all'>
                  Agendar{' '}
                  <span className='material-symbols-outlined text-[16px]'>
                    arrow_forward
                  </span>
                </Link>
              </div>
            ))}
          </div>

          <div
            className='grid grid-cols-1 md:grid-cols-3 gap-7 hidden'
            id='grid-corporal'>
            {[
              {
                img: 'https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?w=600&q=80&fit=crop',
                title: 'Modelagem Corporal',
                desc: 'Redução de medidas e modelagem com tecnologia avançada.',
              },
              {
                img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80&fit=crop',
                title: 'Drenagem Corporal',
                desc: 'Ativação do sistema linfático para reduzir retenção.',
              },
              {
                img: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?w=600&q=80&fit=crop',
                title: 'Radiofrequência Corporal',
                desc: 'Tratamento de flacidez e celulite com resultados visíveis.',
              },
              {
                img: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=600&q=80&fit=crop',
                title: 'Massagem Relaxante',
                desc: 'Alívio de tensões com técnicas profissionais de massoterapia.',
              },
              {
                img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80&fit=crop',
                title: 'Criolipólise',
                desc: 'Eliminação de gordura localizada pelo frio, sem cirurgia.',
              },
              {
                img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80&fit=crop',
                title: 'Ultrassom Cavitacional',
                desc: 'Destruição de células de gordura por ondas ultrassônicas.',
              },
            ].map(({ img, title, desc }) => (
              <div
                key={title}
                className='trat-card reveal group'>
                <div className='rounded-xl overflow-hidden aspect-[4/3] mb-5'>
                  <Image
                    width={500}
                    height={375}
                    src={img}
                    alt={title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
                  />
                </div>
                <h3 className='font-playfair text-[20px] font-semibold text-primary mb-2'>
                  {title}
                </h3>
                <p className='text-[14px] text-on-surface-variant mb-5 leading-relaxed'>
                  {desc}
                </p>
                <Link
                  href={WA.agendar}
                  target='_blank'
                  className='text-secondary text-[12px] font-bold tracking-wide inline-flex items-center gap-1.5 group-hover:gap-3 transition-all'>
                  Agendar{' '}
                  <span className='material-symbols-outlined text-[16px]'>
                    arrow_forward
                  </span>
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
        <div className='max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
          <div className='reveal'>
            <div className='inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase mb-6'>
              <span className='material-symbols-outlined text-[16px]'>
                school
              </span>
              Curso Presencial · Caxias do Sul
            </div>
            <h2 className='font-playfair text-[40px] leading-[48px] font-semibold text-white mb-6'>
              Limpeza de Pele
              <br />
              <span className='text-secondary'>Profissional</span>
            </h2>
            <p className='text-[15px] text-on-primary-container leading-relaxed mb-8 max-w-md'>
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
                  className='flex items-center gap-3 text-[14px] text-on-primary-container'>
                  <span className='material-symbols-outlined text-secondary text-[18px]'>
                    check_circle
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className='flex flex-wrap gap-4'>
              <Link
                href='/curso-limpeza-de-pele'
                className='inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-full text-[13px] font-bold tracking-wider uppercase hover:shadow-2xl hover:scale-[1.02] transition-all'>
                Ver detalhes do curso
                <span className='material-symbols-outlined text-[18px]'>
                  arrow_forward
                </span>
              </Link>
              <Link
                href={WA.curso}
                target='_blank'
                className='inline-flex items-center gap-2 border-2 border-secondary/40 text-secondary px-8 py-4 rounded-full text-[13px] font-bold tracking-wider uppercase hover:border-secondary transition-colors'>
                Falar no WhatsApp
              </Link>
            </div>
          </div>

          <div className='relative reveal'>
            <div className='rounded-2xl overflow-hidden shadow-2xl'>
              <Image
                width={600}
                height={500}
                src='https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80&fit=crop'
                alt='Curso de Limpeza de Pele'
                className='w-full h-[480px] object-cover'
              />
            </div>
            <div className='absolute -bottom-6 -left-6 bg-white rounded-2xl px-6 py-5 shadow-2xl'>
              <p className='text-[12px] font-bold text-on-surface-variant uppercase tracking-widest mb-1'>
                Próxima turma
              </p>
              <p className='text-[22px] font-bold text-primary leading-none'>
                Vagas limitadas!
              </p>
              <Link
                href={WA.curso}
                target='_blank'
                className='mt-3 flex items-center gap-1.5 text-secondary text-[12px] font-bold tracking-wide'>
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
        <div className='max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-20 items-center'>
          <div className='relative reveal order-2 md:order-1'>
            <div className='rounded-2xl overflow-hidden shadow-2xl'>
              <Image
                width={600}
                height={500}
                src='https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80&fit=crop'
                alt='Estúdio de Pilates Aisthésis'
                className='w-full h-[500px] object-cover'
              />
            </div>
            <div className='absolute -bottom-8 -right-6 bg-white rounded-2xl px-7 py-5 shadow-2xl border border-surface-container-highest'>
              <p className='text-[44px] font-bold text-secondary leading-none mb-1'>
                100%
              </p>
              <p className='text-[10px] font-bold text-on-surface-variant uppercase tracking-widest'>
                Foco individual
              </p>
            </div>
          </div>

          <div className='reveal order-1 md:order-2'>
            <span className='text-[11px] font-bold tracking-widest uppercase text-secondary block mb-4'>
              Equilíbrio & Força
            </span>
            <h2 className='font-playfair text-[40px] leading-[48px] font-semibold text-white mb-6'>
              Pilates com propósito
            </h2>
            <p className='text-[15px] text-on-primary-container leading-relaxed mb-8 max-w-md'>
              Muito além do exercício — uma jornada de autoconhecimento e
              controle corporal. Turmas pequenas e acompanhamento
              individualizado para a sua evolução real.
            </p>
            <div className='grid grid-cols-2 gap-5 mb-10'>
              {[
                { icon: 'self_improvement', text: 'Pilates Solo' },
                { icon: 'fitness_center', text: 'Aparelhos' },
                { icon: 'pregnant_woman', text: 'Gestantes' },
                { icon: 'healing', text: 'Reabilitação' },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  className='flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3'>
                  <span className='material-symbols-outlined text-secondary text-[20px]'>
                    {icon}
                  </span>
                  <span className='text-[13px] font-semibold text-white'>
                    {text}
                  </span>
                </div>
              ))}
            </div>
            <Link
              href={WA.pilates}
              target='_blank'
              className='inline-flex items-center gap-2 border-2 border-secondary text-secondary px-8 py-3.5 rounded-full text-[13px] font-bold tracking-wider uppercase hover:bg-secondary hover:text-white transition-all'>
              Conhecer o estúdio
              <span className='material-symbols-outlined text-[16px]'>
                arrow_forward
              </span>
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
            <span className='text-[11px] font-bold tracking-widest uppercase text-secondary block mb-4'>
              Nossa Equipe
            </span>
            <h2 className='font-playfair text-[36px] leading-[44px] font-semibold text-primary'>
              Profissionais especializadas
            </h2>
            <p className='text-[15px] text-on-surface-variant mt-4 max-w-xl mx-auto'>
              Uma equipe dedicada, com formação contínua e compromisso com
              resultados reais.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {[
              {
                img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80&fit=crop&crop=face',
                name: 'Profissional',
                role: 'Estética Facial & Corporal',
                cro: 'CREFITO-2 · XXXXXX',
              },
              {
                img: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=500&q=80&fit=crop&crop=face',
                name: 'Profissional',
                role: 'Instrutora de Pilates',
                cro: 'CREF · XXXXXX',
              },
              {
                img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&q=80&fit=crop&crop=face',
                name: 'Profissional',
                role: 'Biomédica Esteta',
                cro: 'CRBio · XXXXXX',
              },
            ].map(({ img, name, role, cro }) => (
              <div
                key={role}
                className='prof-card reveal group'>
                <div className='overflow-hidden rounded-2xl mb-5'>
                  <Image
                    width={400}
                    height={400}
                    src={img}
                    alt={name}
                    className='w-full h-[300px] object-cover object-top group-hover:scale-105 transition-transform duration-700'
                  />
                </div>
                <h3 className='font-playfair text-[20px] font-semibold text-primary mb-1'>
                  {name}
                </h3>
                <p className='text-[13px] text-secondary font-semibold mb-1'>
                  {role}
                </p>
                <p className='text-[12px] text-on-surface-variant'>{cro}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ── */}
      <section className='py-stack-lg bg-surface-lavender'>
        <div className='max-w-container-max mx-auto px-margin-desktop'>
          <div className='text-center mb-14 reveal'>
            <span className='text-[11px] font-bold tracking-widest uppercase text-secondary block mb-4'>
              Depoimentos
            </span>
            <h2 className='font-playfair text-[36px] leading-[44px] font-semibold text-primary'>
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
                    <span
                      key={i}
                      className='material-symbols-outlined fill-icon text-xl'>
                      star
                    </span>
                  ))}
                </div>
                <p className='text-[15px] text-on-surface leading-relaxed mb-8 italic'>
                  &ldquo;{text}&rdquo;
                </p>
                <div className='flex items-center gap-3'>
                  <div
                    className={`w-10 h-10 rounded-full ${color} text-white flex items-center justify-center text-[12px] font-bold flex-shrink-0`}>
                    {initials}
                  </div>
                  <div>
                    <p className='text-[13px] font-bold text-primary'>{name}</p>
                    <p className='text-[11px] text-on-surface-variant uppercase tracking-wider'>
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
          <span className='text-[11px] font-bold tracking-widest uppercase text-secondary block mb-4'>
            Comece hoje
          </span>
          <h2 className='font-playfair text-[40px] leading-[48px] font-semibold text-white mb-6 max-w-2xl mx-auto'>
            Pronta para cuidar de você com quem entende?
          </h2>
          <p className='text-[15px] text-on-primary-container mb-10 max-w-xl mx-auto leading-relaxed'>
            Agende sua avaliação gratuita e descubra o protocolo ideal para o
            seu tipo de pele e seus objetivos.
          </p>
          <div className='flex flex-wrap gap-4 justify-center'>
            <Link
              href={WA.avaliacao}
              target='_blank'
              className='bg-secondary text-white px-8 py-4 rounded-full text-[13px] font-bold tracking-wider uppercase hover:shadow-2xl hover:scale-[1.02] transition-all'>
              Agendar avaliação gratuita
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
                className='object-contain mb-5'
              />
              <p className='text-[14px] text-on-surface-variant leading-relaxed max-w-[280px] mb-8'>
                Excelência em estética e pilates. Transformando vidas através do
                cuidado e da ciência.
              </p>
              <div className='flex gap-3'>
                <Link
                  href='https://www.instagram.com/aisthesisestetica'
                  target='_blank'
                  className='w-9 h-9 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-secondary hover:text-white hover:border-secondary transition-all'>
                  <span className='material-symbols-outlined text-[16px]'>
                    camera
                  </span>
                </Link>
                <Link
                  href={WA.contato}
                  target='_blank'
                  className='w-9 h-9 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-secondary hover:text-white hover:border-secondary transition-all'>
                  <span className='material-symbols-outlined text-[16px]'>
                    chat
                  </span>
                </Link>
              </div>
            </div>

            <div className='md:col-span-3'>
              <h4 className='text-[11px] font-bold tracking-widest uppercase text-primary mb-7'>
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
                      className='text-[14px] text-on-surface-variant hover:text-secondary transition-colors'>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='md:col-span-4'>
              <h4 className='text-[11px] font-bold tracking-widest uppercase text-primary mb-7'>
                Contato
              </h4>
              <ul className='space-y-5'>
                <li className='flex items-start gap-3'>
                  <span className='material-symbols-outlined text-secondary text-[20px] mt-0.5'>
                    location_on
                  </span>
                  <span className='text-[14px] text-on-surface-variant leading-relaxed'>
                    Caxias do Sul — RS
                  </span>
                </li>
                <li className='flex items-center gap-3'>
                  <span className='material-symbols-outlined text-secondary text-[20px]'>
                    call
                  </span>
                  <Link
                    href={`tel:${PHONE_DISPLAY.replace(/\D/g, '')}`}
                    className='text-[14px] text-on-surface-variant hover:text-secondary transition-colors'>
                    {PHONE_DISPLAY}
                  </Link>
                </li>
                <li className='flex items-center gap-3'>
                  <span className='material-symbols-outlined text-secondary text-[20px]'>
                    schedule
                  </span>
                  <span className='text-[14px] text-on-surface-variant'>
                    Seg – Sex: 08:00 – 20:00
                  </span>
                </li>
                <li className='mt-4'>
                  <Link
                    href={WA.contato}
                    target='_blank'
                    className='inline-flex items-center gap-2 bg-secondary text-white px-6 py-2.5 rounded-full text-[12px] font-bold tracking-wider hover:opacity-90 transition-opacity'>
                    <span className='material-symbols-outlined text-[16px]'>
                      chat
                    </span>
                    Falar no WhatsApp
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='pt-7 border-t border-surface-container-highest flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-[12px] text-on-surface-variant'>
              © 2025 Aisthésis Clínica de Estética & Pilates. Todos os direitos
              reservados.
            </p>
            <div className='flex gap-7'>
              <Link
                href='#'
                className='text-[12px] text-on-surface-variant hover:text-secondary transition-colors'>
                Termos de Uso
              </Link>
              <Link
                href='#'
                className='text-[12px] text-on-surface-variant hover:text-secondary transition-colors'>
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
        className='fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform'>
        <svg
          viewBox='0 0 24 24'
          fill='white'
          className='w-7 h-7'>
          <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
        </svg>
      </Link>
    </>
  );
}
