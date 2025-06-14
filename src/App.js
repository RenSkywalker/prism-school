import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import bandeiras from './assets/bandeiras.jpg'; // importe a imagem
import './App.css';

const sections = [
  { id: "home", title: "Home" },
  { id: "valores", title: "Valores e Características do Curso" },
  { id: "contato", title: "Contato" },
  { id: "depoimentos", title: "Depoimentos" },
];

export default function App() {
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const glassStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    borderRadius: "12px",
    padding: "1.5rem",
  };

  return (
    <div className="font-sans text-gray-900 min-h-screen relative">
      <div
        style={{
          backgroundImage: `url(${bandeiras})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          filter: 'brightness(0.7)',
        }}
      />

      <nav
        style={{
          ...glassStyle,
          width: '100%',
          zIndex: 50,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '0.5rem',
          paddingBottom: '0.5rem',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          position: 'relative',
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/logo-prism.png`}
          alt="Logo da Prism School"
          style={{ width: '9rem', height: 'auto', marginTop: '0.5rem' }}
        />
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginTop: '0.5rem' }}>
          {sections.map(({ id, title }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                color: '#2563eb',
                fontWeight: 600,
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#dc2626')}
              onMouseLeave={(e) => (e.target.style.color = '#2563eb')}
            >
              {title}
            </button>
          ))}
        </div>
      </nav>

      <main
        style={{
          paddingTop: '2rem',
          maxWidth: '48rem',
          margin: '0 auto',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '6rem',
        }}
      >
        <motion.section
          id="home"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          transition={{ duration: 0.6 }}
          style={glassStyle}
        >
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1e40af', textAlign: 'center' }}>
            Prism School
          </h1>
          <p style={{ fontSize: '1.125rem', maxWidth: '36rem', margin: '0 auto' }}>
            Bem-vindo à Prism School, sua melhor escolha para aprender inglês com qualidade, facilidade e foco!
          </p>
        </motion.section>

        <motion.section
          id="sobre"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={glassStyle}
        >
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#000' }}>
            Sobre Nós
          </h2>
          <p>
            A Prism School é uma escola que visa o aluno em seu aprendizado da língua inglesa. Com nossa metodologia própria e especializada em conversação, o aluno irá se familiarizar com a língua e aprendê-la de forma didática e com todo o nosso suporte possível.
            <br /><br />
            <strong>Missão:</strong> 
            <br /><br />
            <strong>Visão:</strong> Ser reconhecida como a escola de idiomas mais acessível, acolhedora e transformadora do Brasil,      empoderando pessoas comuns a conquistarem liberdade e oportunidades por meio da fluência em outras línguas.
            <br /><br />
            <strong>Valores:</strong> Leveza e praticidade no aprendizado, humanidade e acolhimento, originalidade e acesso à real educação.
          </p>
        </motion.section>

        <motion.section
          id="valores"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={glassStyle}
        >
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#000' }}>
            Valores e Características do Curso
          </h2>
          <p>
            Na Prism School, oferecemos cursos acessíveis e de alta qualidade, focados no desenvolvimento real da fluência, comunicação e confiança dos alunos. Com aulas 100% online e ao vivo, temos mensalidades a partir de <span style={{ color: '#dc2626', fontWeight: 'bold' }}>R$ 160,00 mensal</span>.
            <br /><br />
            <strong>*Para mais informações de valores, por favor, contatar nossa equipe pelo WhatsApp</strong>
          </p>
        </motion.section>

        <motion.section
          id="contato"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={glassStyle}
        >
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#000' }}>
            Contato
          </h2>
          <p>Email: contaatoprism@gmail.com</p>
          <p>Telefone: (11) 94595-7697</p>
          <p>Instagram: prismschool_</p>
        </motion.section>

        <motion.section
          id="depoimentos"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={glassStyle}
        >
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#000' }}>
            Depoimentos
          </h2>
          <blockquote style={{ borderLeft: '4px solid #facc15', paddingLeft: '1rem', fontStyle: 'italic', marginBottom: '1rem' }}>
            "A Prism School mudou a minha vida! As aulas são incríveis e super dinâmicas. - Rodrigo Costa"
          </blockquote>
          <blockquote style={{ borderLeft: '4px solid #facc15', paddingLeft: '1rem', fontStyle: 'italic', marginBottom: '1rem' }}>
            "Recomendo para todos que querem aprender o inglês de verdade por si só. - Juliana Alves"
          </blockquote>
          <blockquote style={{ borderLeft: '4px solid #facc15', paddingLeft: '1rem', fontStyle: 'italic' }}>
            "A didática é excelente, me sinto muito mais confiante falando inglês! - João Vitor"
          </blockquote>
        </motion.section>
      </main>

      <a
        href="https://wa.me/5511945957697"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          backgroundColor: '#22c55e',
          color: 'white',
          padding: '1rem',
          borderRadius: '9999px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          fontSize: '1.5rem',
          transition: 'background-color 0.3s',
          zIndex: 50,
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#16a34a')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#22c55e')}
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>

      <a
        href="https://instagram.com/prismschool_"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          left: '1.5rem',
          backgroundColor: '#ec4899',
          color: 'white',
          padding: '1rem',
          borderRadius: '9999px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          fontSize: '1.5rem',
          transition: 'background-color 0.3s',
          zIndex: 50,
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#db2777')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#ec4899')}
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>

      <footer style={{ textAlign: 'center', padding: '1.5rem 0', color: '#4b5563' }}>
        &copy; {new Date().getFullYear()} Prism School. Todos os direitos reservados.
      </footer>
    </div>
  );
}
