import { useEffect, useState, type CSSProperties, type FormEvent, type MouseEvent as ReactMouseEvent, type ReactNode } from 'react';
import { flushSync } from 'react-dom';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Check,
  Code2,
  Download,
  ExternalLink,
  Github,
  Globe,
  GraduationCap,
  Heart,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Menu,
  Moon,
  Palette,
  Send,
  Sun,
  X,
  Zap,
  type LucideIcon,
} from 'lucide-react';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Education', id: 'education' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
] as const;

type Theme = 'light' | 'dark';

const animatedRoles = [
  'Front End Developer',
  'Software Engineer',
  'Web Developer',
  'UI/UX Designer',
] as const;

const contactFormEndpoint = 'https://formspree.io/f/mnpnlzlk';

const getInitialTheme = (): Theme => {
  const savedTheme = window.localStorage.getItem('yya-theme');
  return savedTheme === 'dark' ? 'dark' : 'light';
};

type SkillGroup = {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
  tone: 'terracotta' | 'olive' | 'ochre';
};

type Project = {
  number: string;
  title: string;
  description: string;

  date: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl: string;
  tone: 'terracotta' | 'olive' | 'ochre' | 'sand';
  featured?: boolean;
};

const skillGroups: SkillGroup[] = [
  {
    title: 'Build',
    description: 'Interfaces that feel fast, clear, and dependable.',
    icon: Code2,
    skills: ['TypeScript', 'React', 'Next.js', 'Node.js', 'HTML / CSS', 'Tailwind'],
    tone: 'terracotta',
  },
  {
    title: 'Shape',
    description: 'Turning rough ideas into calm, useful experiences.',
    icon: Palette,
    skills: ['Figma', 'Design systems', 'Prototyping', 'User research', 'Accessibility', 'Motion'],
    tone: 'olive',
  },
  {
    title: 'Deliver',
    description: 'From first commit to a product ready for real people.',
    icon: Zap,
    skills: ['Git', 'Testing', 'Vite', 'APIs', 'PostgreSQL', 'CI / CD'],
    tone: 'ochre',
  },
];

const marqueeSkills = [
  'React',
  'Node.js',
  'Next.js',
  'TypeScript',
  'Tailwind',
  'Figma',
  'Git & GitHub',
  'MySQL',
  'PostgreSQL',
  'APIs',
] as const;

const education = [
  {
    period: '2021 — 2022',
    title: 'Computer Science Level 3',
    school: 'Lithan EduClaaS Academy, Singapore',
    detail: 'Built a strong foundation in programming, web development, and computer systems through hands-on HTML, CSS, and JavaScript projects.',
  },
  {
    period: '2022 — 2023',
    title: 'Web Development Class',
    school: 'Winner Tech, Myanmar',
    detail: 'Supported startup MVP development while learning Git, testing, deployment, code review, and documentation best practices.',
  },
  {
    period: '2022 — 2025',
    title: 'Computer Science Level 4–5',
    school: 'Lithan EduClaaS Academy, Singapore',
    detail: 'Developed practical skills in software engineering, data structures, databases, Python, SQL, Git, and Agile development.',
  },
  {
    period: '2025 — 2026',
    title: 'Bachelor of Computer Science',
    school: 'University of Roehampton, UK',
    detail: 'Currently exploring AI, machine learning, and cybersecurity through research and collaborative projects.',
  },
];

const experience = [
  {
    period: 'August 2025 — Present',
    role: 'Junior Web Developer',
    company: 'Lithan EduClaaS Academy',
    description:
      'Building and maintaining web applications while applying modern frontend practices and learning through hands-on product work.',
    highlights: ['Working on real-world web projects', 'Building responsive, maintainable interfaces', 'Collaborating with a team to improve frontend quality'],
    label: 'Current',
    tone: 'terracotta',
  },
  {
    period: 'September 2024 — 2025',
    role: 'Freelance Web Developer',
    company: 'With my teacher',
    description:
      'Worked directly with my teacher on web projects, contributing from planning through delivery.',
    highlights: ['Turning ideas into practical web experiences', 'Working with a mentor through project delivery', 'Improving responsive UI and code quality'],
    label: 'Freelance',
    tone: 'olive',
  },
];

const projects: Project[] = [
  {
    number: '01',
    title: 'Coffee Shop',
    description: 'Built a Coffee Shop website for training purposes.',    
    date: '2022',
    technologies: ['HTML', 'CSS', 'JavaScript', 'JQuery'],
    image: '/projects/web1.png',
    liveUrl: 'https://yeyintaung27.github.io/Coffee-Shop/',
    githubUrl: 'https://github.com/yeyintaung27/Coffee-Shop',
    tone: 'terracotta',
    featured: true,
  },
  {
    number: '02',
    title: 'Martial Arts',
    description: 'Created a Martial Arts website for school assignment.',
    date: '2022',
    technologies: ['HTML', 'CSS', 'JavaScript', 'JQuery'],
    image: '/projects/web2.png',
    liveUrl: 'https://yeyintaung27.github.io/DoBU-Martial-Arts/',
    githubUrl: 'https://github.com/yeyintaung27/DoBU-Martial-Arts',
    tone: 'olive',
  },
  {
    number: '03',
    title: 'ABC Learning Center',
    description: 'Designed a real-time learning platform with advanced charting and portfolio tools.',
    date: '2023',
    technologies: ['HTML', 'CSS', 'JavaScript', 'JQuery'],
    image: '/projects/web3.png',
    liveUrl: 'https://yeyintaung27.github.io/ABCLearningCentre/',
    githubUrl: 'https://github.com/yeyintaung27/ABCLearningCentre',
    tone: 'ochre',
  },
  {
    number: '04',
    title: 'Car Portal Website',
    description: 'Developed a car portal with real-time analytics dashboards.',
    date: '2023',
    technologies: ['Java', 'Spring Boot', 'Nodejs', 'HTML', 'CSS', 'Javascript'],
    image: '/projects/web4.png',
    githubUrl: 'https://github.com/yeyintaung27/Car_portal',
    tone: 'sand',
  },
  {
    number: '05',
    title: 'Meals On Wheel Project',
    description: 'Developed a food delivery platform with interactive UI and admin order management.',
    date: '2023',
    technologies: ['ReactJs', 'Node.js', 'CSS', 'JavaScript'],
    image: '/projects/web5.png',    
    githubUrl: 'https://github.com/yeyintaung27/Meals-On-Wheel',
    tone: 'terracotta',
  },
  {
    number: '06',
    title: 'Training Department Course',
    description: 'Engineered a smart learning management system with personalized content delivery.',
    date: '2022',
    technologies: ['Spring Boot', 'Java', 'HTML', 'CSS'],
    image: '/projects/web6.png',
    githubUrl: 'https://github.com/yeyintaung27/TrainingDepartmentCourse',
    tone: 'olive',
  },
  {
    number: '07',
    title: 'Online Banking System',
    description: 'A secure and user-friendly online banking platform with real-time transaction capabilities.',
    date: '2022',
    technologies: ['ReactJs', 'Node.js', 'JavaScript', 'PostgreSQL', 'Superbase'],
    image: '/projects/web7.png',
    githubUrl: 'https://github.com/yeyintaung27/Online-Banking',
    tone: 'ochre',
  },
];

const socialLinks: Array<{ label: string; href: string; icon: LucideIcon }> = [
  { label: 'GitHub', href: 'https://github.com/yeyintaung27', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ye-yint-aung-b8211b338/', icon: Linkedin },
  { label: 'WhatsApp', href: 'https://wa.me/66991307019', icon: MessageCircle },
];

function SectionIntro({
  index,
  eyebrow,
  title,
  children,
  className = '',
}: {
  index: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`section-intro ${className}`} data-reveal>
      <div className="section-intro-label">
        <span className="section-number">{index}</span>
        <span className="eyebrow-dot" />
        <span>{eyebrow}</span>
      </div>
      <div className="section-intro-copy">
        <h2>{title}</h2>
        {children ? <p>{children}</p> : null}
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formSent, setFormSent] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [typedRole, setTypedRole] = useState('');

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => {
      revealObserver.observe(element);
    });

    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let animationFrame = 0;

    const updateActiveSection = () => {
      const headerOffset = 110;
      let currentSection: string = navItems[0].id;

      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= headerOffset) {
          currentSection = id;
        }
      });

      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      setActiveSection(isAtBottom ? 'contact' : currentSection);
    };

    const handleScroll = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0;
        updateActiveSection();
      });
    };

    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('yya-theme', theme);
  }, [theme]);

  useEffect(() => {
    let roleIndex = 0;
    let characterIndex = 0;
    let isDeleting = false;
    let timer = 0;

    function tick() {
      const role = animatedRoles[roleIndex];

      if (!isDeleting) {
        characterIndex += 1;
        setTypedRole(role.slice(0, characterIndex));

        if (characterIndex >= role.length) {
          isDeleting = true;
          timer = window.setTimeout(tick, 1500);
        } else {
          timer = window.setTimeout(tick, 78);
        }
      } else {
        characterIndex -= 1;
        setTypedRole(role.slice(0, characterIndex));

        if (characterIndex <= 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % animatedRoles.length;
          timer = window.setTimeout(tick, 320);
        } else {
          timer = window.setTimeout(tick, 48);
        }
      }
    }

    timer = window.setTimeout(tick, 450);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-is-open', menuOpen);
    return () => document.body.classList.remove('menu-is-open');
  }, [menuOpen]);

  const toggleTheme = (event: ReactMouseEvent<HTMLButtonElement>) => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const transitionDocument = document as Document & {
      startViewTransition?: (update: () => void) => { finished: Promise<void> };
    };

    if (prefersReducedMotion || !transitionDocument.startViewTransition) {
      setTheme(nextTheme);
      return;
    }

    const buttonRect = event.currentTarget.getBoundingClientRect();
    const root = document.documentElement;
    root.style.setProperty('--theme-transition-x', `${buttonRect.left + buttonRect.width / 2}px`);
    root.style.setProperty('--theme-transition-y', `${buttonRect.top + buttonRect.height / 2}px`);

    const clearTransitionPosition = () => {
      root.style.removeProperty('--theme-transition-x');
      root.style.removeProperty('--theme-transition-y');
    };

    try {
      const transition = transitionDocument.startViewTransition(() => {
        flushSync(() => setTheme(nextTheme));
      });
      transition.finished.then(clearTransitionPosition, clearTransitionPosition);
    } catch {
      clearTransitionPosition();
      setTheme(nextTheme);
    }
  };

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    setFormSubmitting(true);
    setFormError('');

    try {
      const response = await fetch(contactFormEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: new FormData(form),
      });

      if (!response.ok) {
        throw new Error('Formspree submission failed');
      }

      form.reset();
      setFormSent(true);
    } catch {
      setFormError('Something went wrong. Please try again or email me directly.');
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <div className="app-shell">
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${activeSection === 'home' && !scrolled && theme === 'dark' ? 'on-dark-hero' : ''}`}>
        <div className="container nav-shell">
          <a className="brand yya-brand" href="#home" onClick={closeMenu} aria-label="YYA home">
            <span className="yya-logo">
              <span>YYA</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                className={`nav-link ${activeSection === item.id ? 'is-active' : ''}`}
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="header-cta" href="#contact">
              Let&apos;s talk <ArrowUpRight size={15} strokeWidth={1.8} />
            </a>
            <button
              type="button"
              className="theme-toggle"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              aria-pressed={theme === 'dark'}
              onClick={toggleTheme}
            >
              {theme === 'light' ? <Moon size={16} strokeWidth={1.8} /> : <Sun size={17} strokeWidth={1.8} />}
            </button>
            <button
              type="button"
              className="menu-toggle"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        <div className={`mobile-nav ${menuOpen ? 'is-open' : ''}`}>
          <div className="container mobile-nav-inner">
            <p className="mobile-nav-label">Navigate</p>
            {navItems.map((item, index) => (
              <a
                key={item.id}
                className={`mobile-nav-link ${activeSection === item.id ? 'is-active' : ''}`}
                href={`#${item.id}`}
                onClick={() => {
                  setActiveSection(item.id);
                  closeMenu();
                }}
                style={{ '--item-delay': `${index * 45}ms` } as CSSProperties}
              >
                <span>0{index + 1}</span>
                {item.label}
                <ArrowUpRight size={16} />
              </a>
            ))}
            <div className="mobile-nav-footer">
              <span>Available for select projects</span>
              <span className="status-dot" />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid-lines" aria-hidden="true" />
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <div className="eyebrow hero-eyebrow" data-reveal>
                <span className="eyebrow-dot" />
                Welcome to my portfolio
              </div>
              <h1 data-reveal style={{ transitionDelay: '80ms' }}>
                <span>Ye Yint</span>
                <span className="hero-name-accent">Aung</span>
              </h1>
              <p
                className="hero-role"
                data-reveal
                style={{ transitionDelay: '140ms' }}
                aria-label="Developer roles"
                aria-live="off"
              >
                <span>&lt;</span>
                <span className="hero-role-text" aria-hidden="true">
                  {typedRole}
                  <i className="hero-role-caret" />
                </span>
                <span>/&gt;</span>
              </p>
              <p className="hero-description" data-reveal style={{ transitionDelay: '200ms' }}>
                I build responsive, scalable, and user-centric web applications with clean,
                maintainable code.
              </p>
              <div className="hero-actions" data-reveal style={{ transitionDelay: '260ms' }}>
                <a className="button button-primary" href="#projects">
                  Explore My Work <ArrowUpRight size={17} strokeWidth={1.8} />
                </a>
                <a className="button button-secondary" href="/yya_resume.pdf" download>
                  Download CV <Download size={16} strokeWidth={1.8} />
                </a>
              </div>
              <div className="hero-socials" data-reveal style={{ transitionDelay: '320ms' }}>
                <span>Find me on</span>
                {socialLinks.slice(0, 2).map(({ label, href, icon: Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                    <Icon size={16} strokeWidth={1.6} />
                  </a>
                ))}
                <a href="mailto:yeyintaung638864@gmail.com" aria-label="Email">
                  <Mail size={16} strokeWidth={1.6} />
                </a>
              </div>
            </div>

            <div className="hero-image-wrap" data-reveal style={{ transitionDelay: '180ms' }}>
              <div className="hero-image-card">
                <img src="/profile.jpg" alt="Portrait of Ye Yint Aung" />
                <div className="hero-image-stamp" aria-hidden="true">
                  <span>Selected<br />work</span>
                  <strong>01</strong>
                </div>
              </div>
              <div className="visual-caption">
                <span>01 / 07</span>
                <span>Scroll to explore</span>
                <ArrowDown size={15} />
              </div>
            </div>
          </div>
          <div className="hero-bottom-line container" aria-hidden="true">
            <span>Based in Bangkok</span>
            <span>Available worldwide</span>
            <span>01 — 07</span>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container">
            <SectionIntro index="02" eyebrow="About" title="I build clear, reliable digital products.">
              A web developer and front-end developer who brings a designer&apos;s eye and an
              engineer&apos;s instinct to every project.
            </SectionIntro>

            <div className="about-intro-grid">
              <div className="about-intro-copy" data-reveal>
                <p className="about-greeting">
                  Hello, I&apos;m <strong>Ye Yint Aung.</strong>
                </p>
                <p className="about-lead">
                  I turn complex ideas into simple, useful experiences that people can understand and
                  enjoy using.
                </p>
                <p className="about-body">
                  I work across the product journey — from understanding the problem and shaping the
                  interface to building it with clean, maintainable code. I care about useful details,
                  accessible experiences, and leaving every project easier to work with.
                </p>
                <a className="inline-arrow-link" href="#contact">
                  Let&apos;s work together <ArrowRight size={16} />
                </a>
              </div>

              <aside className="about-facts" data-reveal style={{ transitionDelay: '100ms' }}>
                <div className="about-facts-heading">
                  <span>At a glance</span>
                  <span className="status-dot" />
                </div>
                <dl className="about-facts-list">
                  <div className="about-fact-row">
                    <dt>Role</dt>
                    <dd>Web Developer</dd>
                  </div>
                  <div className="about-fact-row">
                    <dt>Location</dt>
                    <dd><MapPin size={15} />Bangkok, Thailand</dd>
                  </div>
                  <div className="about-fact-row">
                    <dt>Availability</dt>
                    <dd><span className="status-dot" />Available for select projects</dd>
                  </div>
                  <div className="about-fact-row">
                    <dt>Focus</dt>
                    <dd>Frontend · UI/UX · Web apps</dd>
                  </div>
                </dl>
              </aside>
            </div>

            <div className="about-strengths" data-reveal>
              <article className="about-strength">
                <span className="about-strength-icon strength-icon-terracotta"><Layers size={18} /></span>
                <h3>Clear thinking</h3>
                <p>I break complex problems into simple, useful experiences.</p>
              </article>
              <article className="about-strength">
                <span className="about-strength-icon strength-icon-olive"><Code2 size={18} /></span>
                <h3>Practical craft</h3>
                <p>I build responsive, accessible, and maintainable interfaces.</p>
              </article>
              <article className="about-strength">
                <span className="about-strength-icon strength-icon-ochre"><Heart size={18} /></span>
                <h3>Team mindset</h3>
                <p>I communicate clearly and enjoy building with other people.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="container">
            <SectionIntro index="03" eyebrow="Education" title="Always learning, deliberately.">
              The best education is a mix of fundamentals, curiosity, and making something real
              with the people around you.
            </SectionIntro>

            <div className="education-layout">
              <div className="education-aside" data-reveal>
                <div className="aside-icon"><GraduationCap size={22} strokeWidth={1.5} /></div>
                <p>My academic foundation gave me a language for systems. My projects taught me how to listen.</p>
                <div className="aside-line" />
                <span className="aside-caption">Foundations first.<br />Always.</span>
              </div>
              <div className="education-list">
                {education.map((item, index) => (
                  <article className="education-item" data-reveal key={`${item.period}-${index}`} style={{ transitionDelay: `${index * 90}ms` }}>
                    <div className="timeline-marker"><span /></div>
                    <div className="education-period">{item.period}</div>
                    <div className="education-content">
                      <h3>{item.title}</h3>
                      <p className="education-school">{item.school}</p>
                      <p className="education-detail">{item.detail}</p>
                    </div>
                    <ArrowUpRight className="education-arrow" size={18} />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <SectionIntro index="04" eyebrow="Skills" title="A practical toolkit for thoughtful work.">
              I choose tools that help me move from a fuzzy idea to a reliable experience — and stay
              close to the people using it.
            </SectionIntro>

            <div className="skills-grid">
              {skillGroups.map((group, index) => {
                const Icon = group.icon;
                return (
                  <article className={`skill-card skill-card-${group.tone}`} data-reveal key={group.title} style={{ transitionDelay: `${index * 90}ms` }}>
                    <div className="skill-card-top">
                      <span className="skill-index">0{index + 1}</span>
                      <span className="skill-icon"><Icon size={20} strokeWidth={1.7} /></span>
                    </div>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                    <div className="skill-list">
                      {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                    </div>
                    <div className="skill-card-swoop" aria-hidden="true" />
                  </article>
                );
              })}
            </div>

            <div className="tools-strip" data-reveal>
              <div className="tools-strip-label">Comfortable in</div>
              <div className="tools-marquee" aria-label="Skills carousel">
                <div className="tools-track">
                  {[0, 1].map((copy) => (
                    <div className="tools-track-group" key={copy} aria-hidden={copy === 1}>
                      {marqueeSkills.map((skill) => (
                        <span className="tools-track-item" key={`${copy}-${skill}`}>
                          <span>{skill}</span>
                          <i aria-hidden="true">✳</i>
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="container">
            <SectionIntro index="05" eyebrow="Experience" title="A few places I&apos;ve learned a lot.">
              Different teams, different problems — the constant has been a curiosity for the work
              and a care for the people who use it.
            </SectionIntro>

            <div className="experience-list">
              {experience.map((item, index) => (
                <article className="experience-item" data-reveal key={`${item.company}-${index}`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="experience-period"><Calendar size={14} />{item.period}</div>
                  <div className="experience-main">
                    <div className="experience-heading">
                      <div>
                        <h3>{item.role}</h3>
                        <p className="experience-company">{item.company}</p>
                      </div>
                      <span className={`experience-badge badge-${item.tone}`}>{item.label}</span>
                    </div>
                    <p className="experience-description">{item.description}</p>
                    <ul className="experience-highlights">
                      {item.highlights.map((highlight) => (
                        <li key={highlight}><Check size={14} />{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="experience-number">0{index + 1}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <SectionIntro index="06" eyebrow="Projects" title="Selected work, built with intention.">
              A few recent explorations into making information feel more useful, more human, and a
              little more delightful to use.
            </SectionIntro>

            <div className="project-grid">
              {projects.map((project, index) => (
                <article
                  className={`project-card project-card-${project.tone} ${project.featured ? 'project-card-featured' : ''}`}
                  key={project.title}
                  data-reveal
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <a
                    className="project-image-link"
                    href={project.liveUrl || project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} live project`}
                  >
                    <div className="project-image">
                      <img src={project.image} alt={`${project.title} project preview`} loading="lazy" />
                      <span className="project-image-action">Open project <ExternalLink size={14} /></span>
                    </div>
                  </a>
                  <div className="project-card-body">
                    <div className="project-card-heading">
                      <div>
                        <span className="project-card-number">{project.number}</span>
                        <h3>{project.title}</h3>
                      </div>
                      <span className="project-card-date">{project.date}</span>
                    </div>
                    <p>{project.description}</p>
                    <div className="project-card-footer">
                      <div className="project-technologies">
                        {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                      </div>
                        <div className="project-links">
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noreferrer">
                            Live <ExternalLink size={13} />
                          </a>
                        )}

                        <a href={project.githubUrl} target="_blank" rel="noreferrer">
                          Source <Github size={13} />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="projects-footer-note" data-reveal><span>More in the making.</span><span className="note-dash" /><a href="#contact">Ask me about it <ArrowRight size={15} /></a></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-glow contact-glow-one" aria-hidden="true" />
          <div className="contact-glow contact-glow-two" aria-hidden="true" />
          <div className="container contact-inner">
            <div className="contact-copy" data-reveal>
              <div className="eyebrow contact-eyebrow"><span className="eyebrow-dot" />Have a good question?</div>
              <h2>Let&apos;s make<br /><em>something</em> clear.</h2>
              <p>
                I&apos;m always happy to talk about a new idea, a tricky problem, or a team that
                wants to make the web a little better.
              </p>
              <div className="contact-details">
                <a href="mailto:yeyintaung638864@gmail.com"><Mail size={17} />yeyintaung638864@gmail.com</a>
                <a href="https://wa.me/66991307019" target="_blank" rel="noreferrer" aria-label="WhatsApp +66 99 130 7019">
                  <MessageCircle size={17} />+66 99 130 7019
                </a>
                <span><MapPin size={17} />Bangkok, Thailand · UTC+7</span>
              </div>
              <div className="contact-socials">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon size={17} /></a>
                ))}
              </div>
            </div>

            <div className="contact-form-wrap" data-reveal style={{ transitionDelay: '130ms' }}>
              {formSent ? (
                <div className="form-success">
                  <div className="success-icon"><Check size={25} /></div>
                  <span className="eyebrow">Message received</span>
                  <h3>Thanks for reaching out.</h3>
                  <p>I&apos;ll get back to you as soon as I can. In the meantime, keep making good things.</p>
                  <button
                    className="text-link"
                    type="button"
                    onClick={() => {
                      setFormSent(false);
                      setFormError('');
                    }}
                  >
                    Send another note <ArrowRight size={16} />
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-heading"><span>07</span><span>Start a conversation</span></div>
                  <label>
                    <span>Your name</span>
                    <input type="text" name="name" placeholder="What should I call you?" required />
                  </label>
                  <label>
                    <span>Email address</span>
                    <input type="email" name="email" placeholder="you@company.com" required />
                  </label>
                  <label>
                    <span>What&apos;s on your mind?</span>
                    <textarea name="message" rows={4} placeholder="Tell me a little about the project..." required />
                  </label>
                  <button className="form-submit" type="submit" disabled={formSubmitting}>
                    {formSubmitting ? 'Sending...' : 'Send your note'}
                    <Send size={16} />
                  </button>
                  {formError ? <p className="form-error" role="alert">{formError}</p> : null}
                  <p className="form-footnote"><span className="status-dot" />Usually replies within a few days</p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p className="footer-copyright">© {new Date().getFullYear()} Ye Yint Aung</p>
          <p className="footer-tagline">Built with intent, not templates.</p>
          <a className="back-to-top" href="#home">Back to top <ArrowUpRight size={15} /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
