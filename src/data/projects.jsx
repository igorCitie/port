import { FaBuilding, FaCity, FaFileMedical, FaExternalLinkAlt, FaBriefcase, FaServer } from 'react-icons/fa'

import slzHall  from '../assets/slz-hall.webp'
import slzHall2 from '../assets/slz-hall2.webp'
import slzHall3 from '../assets/slz-hall3.webp'
import slzHall4 from '../assets/slz-hall4.webp'
import slzHall5 from '../assets/slz-hall5.webp'
import citie1 from '../assets/citie.webp'
import citie2 from '../assets/citie2.webp'
import citie3 from '../assets/citie3.webp'
import citie4 from '../assets/citie4.webp'
import tfd1 from '../assets/tfd.webp'
import tfd2 from '../assets/tfd2.webp'
const projects = [
  {
    slug: 'sao-luis-hall',
    title: 'São Luís Hall',
    icon: <FaBuilding />,
    meta: [
      { label: 'entretenimento', labelEn: 'entertainment', icon: <FaBriefcase /> },
      { label: 'saoluishall.com.br', href: 'https://saoluishall.com.br/', icon: <FaExternalLinkAlt /> },
    ],
    technologies: ['React', 'Node.js', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Nginx', 'Cloudflare R2'],
    intro: 'Plataforma responsiva que reflete a elegância e modernidade da casa de shows, com design dinâmico e um módulo CMS para que o administrador gerencie eventos com total autonomia. A escolha por uma arquitetura de sistemas distribuídos transformou o projeto num verdadeiro laboratório técnico.',
    introEn: 'Responsive platform reflecting the elegance and modernity of the concert venue, featuring a dynamic design and a CMS module for the admin to manage events autonomously. The choice of a distributed systems architecture turned the project into a true technical laboratory.',
    highlights: [
      'API REST em Java (Spring Boot) com persistência em PostgreSQL, totalmente desacoplada das aplicações cliente',
      'Landing page e painel CMS construídos sobre o ecossistema Node.js, com componentização e clean code como pilares do desenvolvimento',
      'Cloudflare R2 (padrão S3) como Object Storage com entrega via CDN, reduzindo drasticamente a carga na VPS principal',
      'Stack completa em contêineres Docker com Compose em redes internas isoladas e pipeline de deploy controlado via scripts Bash',
      'Nginx como proxy reverso com Let\'s Encrypt, tuning de Kernel, alocação estratégica de Swap e rotatividade de backups automatizada via cronjobs',
    ],
    highlightsEn: [
      'REST API in Java (Spring Boot) with PostgreSQL persistence, fully decoupled from client applications',
      'Landing page and CMS dashboard built on the Node.js ecosystem, with componentization and clean code as development pillars',
      'Cloudflare R2 (S3-compatible) as Object Storage with CDN delivery, drastically reducing load on the main VPS',
      'Full stack containerized with Docker Compose on isolated internal networks, with a deploy pipeline controlled via Bash scripts',
      "Nginx as reverse proxy with Let's Encrypt, Kernel tuning, strategic Swap allocation, and automated backup rotation via cronjobs",
    ],
    gallery: [slzHall, slzHall2, slzHall3, slzHall4, slzHall5],
  },
  {
    slug: 'citiesoft',
    title: 'Citiesoft',
    icon: <FaCity />,
    meta: [
      { label: 'software house', icon: <FaBriefcase /> },
      { label: 'citiesoft.com.br', href: 'https://citiesoft.com.br', icon: <FaExternalLinkAlt /> },
    ],
    technologies: ['Angular', 'TypeScript', 'SCSS', 'Node.js', 'Nodemailer'],
    intro: 'Landing page institucional desenvolvida para a Citiesoft, empresa de software voltada para gestão pública municipal. O projeto combina uma apresentação clara dos produtos e serviços com um canal direto de contato via integração de e-mail.',
    introEn: 'Institutional landing page developed for Citiesoft, a software company focused on municipal public management. The project combines a clear presentation of products and services with a direct contact channel via email integration.',
    highlights: [
      'Interface construída em Angular com TypeScript, garantindo tipagem segura e arquitetura escalável de componentes',
      'Estilização com SCSS modular, assegurando consistência visual e facilidade de manutenção',
      'Formulário de contato integrado via Nodemailer em backend Node.js, com envio de e-mails direto ao time comercial',
      'Design responsivo focado em conversão, apresentando os produtos da empresa de forma objetiva e profissional',
    ],
    highlightsEn: [
      'Interface built in Angular with TypeScript, ensuring type safety and scalable component architecture',
      'Modular SCSS styling for visual consistency and ease of maintenance',
      'Contact form integrated via Nodemailer on a Node.js backend, sending emails directly to the sales team',
      'Conversion-focused responsive design presenting the company\'s products in an objective and professional manner',
    ],
    gallery: [citie1, citie2, citie3, citie4],
    },
  {
    slug: 'tfd',
    title: 'TFD',
    icon: <FaFileMedical />,
    meta: [
      { label: 'saúde pública', labelEn: 'public health', icon: <FaBriefcase /> },
    ],
    technologies: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
    intro: 'Sistema fullstack de gestão do Tratamento Fora do Domicílio, programa público de saúde que organiza o transporte e a assistência de pacientes que precisam se deslocar para receber tratamento médico fora do seu município de origem.',
    introEn: 'Fullstack management system for Tratamento Fora do Domicílio (Out-of-Town Treatment), a public health program that organizes transportation and assistance for patients who must travel outside their home municipality to receive medical care.',
    highlights: [
      'API REST em Java (Spring Boot) com PostgreSQL, cobrindo todo o ciclo de vida das solicitações — da abertura à autorização e agendamento',
      'Frontend em Angular com TypeScript, oferecendo interfaces distintas para cidadãos, profissionais de saúde e administradores',
      'Stack containerizada com Docker, garantindo consistência entre ambientes de desenvolvimento e produção',
      'Regras de elegibilidade automatizadas conforme critérios da secretaria municipal de saúde, reduzindo análise manual',
    ],
    highlightsEn: [
      'REST API in Java (Spring Boot) with PostgreSQL, covering the full request lifecycle — from submission to authorization and scheduling',
      'Angular frontend with TypeScript, offering distinct interfaces for citizens, healthcare professionals, and administrators',
      'Containerized stack with Docker, ensuring consistency between development and production environments',
      'Automated eligibility rules aligned with municipal health department criteria, reducing manual review',
    ],
    gallery: [tfd1, tfd2],
  },
]

export default projects
