"use client"
import React, { useState } from 'react';
// Lucide React icons for a modern look
import { Users, Baby, Trophy, Mail, Menu, X, CheckCircle, MapPin, Phone, ChevronDown, ChevronUp } from 'lucide-react'; // Added HelpCircle icon

// Define interface for AccordionItem props
interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  toggleAccordion: () => void;
}

// Reusable Accordion Item Component
const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, toggleAccordion }) => {
  return (
    <div className="border border-gray-700 rounded-xl overflow-hidden shadow-lg mb-4 bg-gray-800">
      <button
        className="w-full text-left p-6 flex justify-between items-center text-gray-100 font-semibold text-xl hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
        onClick={toggleAccordion}
      >
        {title}
        {isOpen ? <ChevronUp className="w-6 h-6 text-yellow-400" /> : <ChevronDown className="w-6 h-6 text-cyan-400" />}
      </button>
      {isOpen && (
        <div className="p-6 pt-0 text-gray-300 text-lg leading-relaxed">
          {content}
        </div>
      )}
    </div>
  );
};

// Main App Component
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>('');
  const [modalType] = useState<'success' | 'error'>('success'); // 'success' or 'error'

  // State for accordion items
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (index: string) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage('');
  };

  // Function to handle smooth scrolling to sections
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu after clicking a link
      setIsMenuOpen(false);
    }
  };

  // Content for new sections
  const kidsBenefits = [
    {
      question: "How does chess boost problem-solving skills?",
      answer: "Chess requires children to analyze positions, anticipate opponent's moves, and plan several steps ahead. This process directly trains their logical thinking, pattern recognition, and strategic foresight, essential skills for academic success and daily life."
    },
    {
      question: "Can chess improve concentration and patience?",
      answer: "Absolutely! Playing chess demands sustained focus for extended periods. Children learn to sit still, concentrate on the board, and wait for the right moment to make a move, significantly improving their attention span and patience."
    },
    {
      question: "Does chess help with decision-making?",
      answer: "Every move in chess is a decision with consequences. Children learn to weigh options, evaluate risks, and make choices under pressure, understanding that good decisions lead to better outcomes. This translates into improved decision-making in other areas."
    },
    {
      question: "How does chess foster creativity?",
      answer: "Beyond memorized openings, chess is a game of infinite possibilities. Children are encouraged to find unique solutions to complex problems, devise original tactics, and think outside the box, nurturing their creative problem-solving abilities."
    }
  ];

  const adultsBenefits = [
    {
      question: "How can chess sharpen cognitive functions in adults?",
      answer: "Chess engages multiple cognitive functions simultaneously, including memory, critical thinking, spatial reasoning, and calculation. Regular play can help maintain cognitive agility, improve mental clarity, and even potentially delay cognitive decline."
    },
    {
      question: "Is chess a good stress reliever for adults?",
      answer: "For many, chess provides a unique form of mental escape. The intense focus required to play can act as a meditative practice, diverting attention from daily stressors and providing a healthy outlet for mental energy, leading to a sense of calm and accomplishment."
    },
    {
      question: "Can chess enhance strategic planning in professional life?",
      answer: "The strategic principles of chess—long-term planning, risk assessment, anticipating competitor's moves, and adapting to changing situations—are directly transferable to business and professional environments, offering a unique way to hone strategic thinking."
    },
    {
      question: "Does chess offer social benefits for adults?",
      answer: "Joining a chess club or participating in tournaments provides excellent opportunities for social interaction, networking, and building friendships with like-minded individuals. It fosters a sense of community and shared passion."
    }
  ];

  const misconceptions = [
    {
      question: "Is chess just like draughts (checkers)?",
      answer: "While both are board games played on an 8x8 grid, chess and draughts are fundamentally different. Chess pieces have unique moves and objectives (capturing the king), offering far greater strategic depth and complexity than draughts."
    },
    {
      question: "Is chess only for 'smart' people?",
      answer: "Absolutely not! Chess is for everyone. While it challenges the mind, consistent practice and learning are far more important than innate 'smartness.' Anyone can learn, improve, and enjoy chess, regardless of their starting point."
    },
    {
      question: "Is chess boring or too slow?",
      answer: "Chess can be as fast or as slow as you make it! With various time controls (from blitz to classical), chess offers intense, rapid-fire games and deep, thoughtful battles. The thrill comes from the strategic struggle and the constant challenge."
    },
    {
      question: "Is chess just about memorizing openings?",
      answer: "Memorizing openings is a small part of chess. True mastery comes from understanding strategic principles, tactical patterns, and positional play. While openings provide a good start, the real game begins after the opening phase, requiring creativity and adaptability."
    }
  ];

  const tournamentsExplained = [
    {
      question: "How can one win in a chess tournament?",
      answer: "Winning in a chess tournament involves consistently outplaying your opponents through superior strategy, tactical execution, and time management. It's about making better decisions under pressure, converting advantages, and minimizing mistakes across multiple games."
    },
    {
      question: "What makes tournaments thrilling if it's not gambling?",
      answer: "The thrill in chess tournaments comes from intellectual combat, the pressure of competition, and the joy of outsmarting an opponent. It's a test of skill, foresight, and nerve, where every move matters and the outcome is determined purely by player ability, not chance. It's a sport, not gambling."
    },
    {
      question: "How do ratings and rankings work?",
      answer: "Chess uses rating systems (like Elo) to measure a player's skill relative to others. Winning against higher-rated players increases your rating more significantly, and losing to lower-rated players decreases it more. This system ensures fair pairings and tracks progress, adding a competitive layer."
    },
    {
      question: "What is the atmosphere like at a lakeside tournament?",
      answer: "Imagine the focus of a chess match combined with the serene beauty of Lake Victoria. Our lakeside tournaments offer a unique blend of competitive intensity and natural tranquility. It's an inspiring environment that enhances the experience, making each game memorable."
    }
  ];


  return (
    <div className="min-h-screen bg-[#1e1e2f] text-gray-100 font-inter antialiased">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-900 bg-opacity-90 shadow-lg backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero" onClick={() => scrollToSection('hero')} className="flex items-center space-x-2 text-2xl font-bold text-yellow-400 hover:text-purple-500 transition-colors duration-300">
            {/* Using inline SVG for King icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
              <path d="M12 2L12 6"/>
              <path d="M15 6L9 6"/>
              <path d="M12 6L12 18"/>
              <path d="M9 18L15 18"/>
              <path d="M17 18L17 22"/>
              <path d="M7 18L7 22"/>
              <circle cx="12" cy="3" r="1"/>
              <path d="M12 6C10.5 6 9 7.5 9 9V18H15V9C15 7.5 13.5 6 12 6Z"/>
            </svg>
            <span>Hikaru Elites</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#philosophy" onClick={() => scrollToSection('philosophy')} className="text-gray-100 text-lg hover:text-purple-500 transition-colors duration-300">Philosophy</a>
            <a href="#coaching" onClick={() => scrollToSection('coaching')} className="text-gray-100 text-lg hover:text-purple-500 transition-colors duration-300">Coaching</a>
            <a href="#tournaments" onClick={() => scrollToSection('tournaments')} className="text-gray-100 text-lg hover:text-purple-500 transition-colors duration-300">Tournaments</a>
            <a href="#faqs-section" onClick={() => scrollToSection('faqs-section')} className="text-gray-100 text-lg hover:text-purple-500 transition-colors duration-300">FAQs</a> {/* Consolidated FAQ Link */}
            <a href="#gallery" onClick={() => scrollToSection('gallery')} className="text-gray-100 text-lg hover:text-purple-500 transition-colors duration-300">Gallery</a>
            <a href="#contact" onClick={() => scrollToSection('contact')} className="text-gray-100 text-lg hover:text-purple-500 transition-colors duration-300">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md p-2">
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 bg-opacity-95 py-4 transition-all duration-300 ease-in-out">
            <div className="flex flex-col items-center space-y-4">
              <a onClick={() => scrollToSection('philosophy')} className="text-gray-100 text-lg hover:text-purple-500 transition-colors duration-300 w-full text-center py-2">Philosophy</a>
              <a onClick={() => scrollToSection('coaching')} className="text-gray-100 text-lg hover:text-purple-500 transition-colors duration-300 w-full text-center py-2">Coaching</a>
              <a onClick={() => scrollToSection('tournaments')} className="text-gray-100 text-lg hover:text-purple-500 transition-colors duration-300 w-full text-center py-2">Tournaments</a>
              <a onClick={() => scrollToSection('faqs-section')} className="text-gray-100 text-lg hover:text-purple-500 transition-colors duration-300 w-full text-center py-2">FAQs</a> {/* Consolidated FAQ Link */}
              <a onClick={() => scrollToSection('gallery')} className="text-gray-100 text-lg hover:text-purple-500 transition-colors duration-300 w-full text-center py-2">Gallery</a>
              <a onClick={() => scrollToSection('contact')} className="text-gray-100 text-lg hover:text-purple-500 transition-colors duration-300 w-full text-center py-2">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Background Image/Video Placeholder */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://meshackariri.sirv.com/chess101/chess/IMG-20250727-WA0048.jpg"
            alt="Esports Chess Scene by Kisumu Lake"
            className="w-full h-auto object-cover filter brightness-75"
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src = "https://placehold.co/1920x1080/1a1a1a/ffc300?text=Chess+Lifestyle+Esports"; }}
          />
        </div>
        <div className="relative z-10 p-8 bg-black bg-opacity-60 rounded-xl shadow-2xl max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-yellow-400 drop-shadow-lg animate-fade-in-up">
            Chess by the Lake: A Kisumu Lifestyle.
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-200 font-light animate-fade-in-up delay-200">
            Master the board, sharpen your mind, and embrace the strategic journey amidst Kisumus beauty.
          </p>
          <a
            href="#coaching"
            onClick={() => scrollToSection('coaching')}
            className="mt-10 inline-block bg-yellow-500 hover:bg-purple-600 text-gray-900 font-bold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-75"
          >
            Start Your Journey
          </a>
        </div>
      </header>

      <main>
        {/* Philosophy Section */}
        <section id="philosophy" className="py-20 bg-gray-900">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-yellow-400 mb-8">Our Philosophy: Chess as a Lifestyle</h2>
            <div className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
              <p className="mb-6">
                At Hikaru Elites, nestled in the vibrant city of Kisumu, we believe chess is far more than just pieces on a board. Its a profound journey of self-discovery, critical thinking, and disciplined creativity. We foster an environment where strategy meets serenity, and every move refines not just your game, but your approach to life itself.
              </p>
              <p className="mb-6">
                Our coaching transcends traditional lessons, integrating mindfulness, problem-solving, and a deep appreciation for the games rich history. We empower individuals to cultivate patience, foresight, and resilience, skills that are invaluable both on and off the chessboard.
              </p>
              <p>
                Join us to transform your understanding of chess from a mere sport into a fulfilling and enriching lifestyle, with the beautiful Lake Victoria as our backdrop.
              </p>
            </div>
          </div>
        </section>

        {/* Coaching Services Section */}
        <section id="coaching" className="py-20 bg-[#1e1e2f]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">Elevate Your Game</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Adult Coaching */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center justify-center mb-6">
                  <Users className="w-16 h-16 text-cyan-400" />
                </div>
                <h3 className="text-3xl font-semibold text-gray-100 mb-4 text-center">Adult Coaching</h3>
                <p className="text-lg text-gray-300 leading-relaxed text-center">
                  Whether you are a beginner looking to understand the fundamentals or an experienced player aiming to refine your strategic depth, our personalized adult coaching programs are designed to meet you where you are. We focus on developing comprehensive game plans, tactical vision, and mental fortitude.
                </p>
                <ul className="mt-6 space-y-3 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-cyan-500 mr-2" /> Personalized lesson plans</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-cyan-500 mr-2" /> Strategic and tactical training</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-cyan-500 mr-2" /> Game analysis and improvement</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-cyan-500 mr-2" /> Mental preparation and focus techniques</li>
                </ul>
                <div className="text-center mt-8">
                  <a href="#contact" onClick={() => scrollToSection('contact')} className="inline-block bg-yellow-500 hover:bg-purple-600 text-gray-900 font-bold py-3 px-6 rounded-full shadow-md transition-all duration-300 hover:scale-105">
                    Inquire for Adults
                  </a>
                </div>
              </div>

              {/* Children Coaching */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center justify-center mb-6">
                  {/* Using Baby icon */}
                  <Baby className="w-16 h-16 text-cyan-400" />
                </div>
                <h3 className="text-3xl font-semibold text-gray-100 mb-4 text-center">Children Coaching</h3>
                <p className="text-lg text-gray-300 leading-relaxed text-center">
                  Introduce your child to the captivating world of chess! Our engaging and age-appropriate coaching helps children develop critical thinking, problem-solving skills, patience, and sportsmanship in a fun and interactive environment. We nurture young minds to love the game and grow confidently.
                </p>
                <ul className="mt-6 space-y-3 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-cyan-500 mr-2" /> Fun and interactive lessons</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-cyan-500 mr-2" /> Develop logical thinking and concentration</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-cyan-500 mr-2" /> Improve memory and decision-making</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-cyan-500 mr-2" /> Foster sportsmanship and resilience</li>
                </ul>
                <div className="text-center mt-8">
                  <a href="#contact" onClick={() => scrollToSection('contact')} className="inline-block bg-yellow-500 hover:bg-purple-600 text-gray-900 font-bold py-3 px-6 rounded-full shadow-md transition-all duration-300 hover:scale-105">
                    Inquire for Children
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tournaments Section */}
        <section id="tournaments" className="py-20 bg-gray-900">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-yellow-400 mb-8">Unforgettable Kisumu Lakeside Tournaments</h2>
            <div className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
              <p className="mb-6">
                Imagine the thrill of competition amidst the breathtaking beauty of Lake Victoria in Kisumu. We specialize in organizing unique chess tournaments that blend the intensity of the game with the tranquility of stunning outdoor settings, like our signature lakeside events. It is more than just a competition; it is an experience.
              </p>
              <p className="mb-6">
                Our tournaments are designed to be inclusive, challenging, and memorable, attracting players of all skill levels who share a passion for chess and the lifestyle it embodies. Stay tuned for upcoming event announcements in Kisumu!
              </p>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
              <div className="flex flex-col items-center">
                <Trophy className="w-16 h-16 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-100">Competitive Play</h3>
                <p className="text-gray-300 mt-2">Challenge yourself against diverse opponents.</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-16 h-16 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-100">Kisumu Scenic Locations</h3>
                <p className="text-300 mt-2">Experience chess in inspiring natural settings.</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-16 h-16 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-100">Community & Connection</h3>
                <p className="text-gray-300 mt-2">Connect with fellow chess enthusiasts.</p>
              </div>
            </div>
            <a
              href="#contact"
              onClick={() => scrollToSection('contact')}
              className="mt-12 inline-block bg-yellow-500 hover:bg-purple-600 text-gray-900 font-bold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-75"
            >
              Inquire About Tournaments
            </a>
          </div>
        </section>

        {/* Consolidated FAQs Section */}
        <section id="faqs-section" className="py-20 bg-[#1e1e2f]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">Frequently Asked Questions & Chess Insights</h2>

            <h3 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Why Chess is Great for Kids</h3>
            <div className="max-w-3xl mx-auto mb-12">
              {kidsBenefits.map((item, index) => (
                <AccordionItem
                  key={`kids-${index}`} // Unique key for each accordion item
                  title={item.question}
                  content={item.answer}
                  isOpen={openAccordion === `kids-${index}`}
                  toggleAccordion={() => toggleAccordion(`kids-${index}`)}
                />
              ))}
            </div>

            <h3 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Why Chess is Great for Adults</h3>
            <div className="max-w-3xl mx-auto mb-12">
              {adultsBenefits.map((item, index) => (
                <AccordionItem
                  key={`adults-${index}`} // Unique key
                  title={item.question}
                  content={item.answer}
                  isOpen={openAccordion === `adults-${index}`}
                  toggleAccordion={() => toggleAccordion(`adults-${index}`)}
                />
              ))}
            </div>

            <h3 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Chess Misconceptions Debunked</h3>
            <div className="max-w-3xl mx-auto mb-12">
              {misconceptions.map((item, index) => (
                <AccordionItem
                  key={`misconceptions-${index}`} // Unique key
                  title={item.question}
                  content={item.answer}
                  isOpen={openAccordion === `misconceptions-${index}`}
                  toggleAccordion={() => toggleAccordion(`misconceptions-${index}`)}
                />
              ))}
            </div>

            <h3 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Tournaments: Thrill, Skill & No Gambling</h3>
            <div className="max-w-3xl mx-auto">
              {tournamentsExplained.map((item, index) => (
                <AccordionItem
                  key={`tournaments-explained-${index}`} // Unique key
                  title={item.question}
                  content={item.answer}
                  isOpen={openAccordion === `tournaments-explained-${index}`}
                  toggleAccordion={() => toggleAccordion(`tournaments-explained-${index}`)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section - Pinterest-like masonry layout */}
        <section id="gallery" className="py-20 bg-gray-900">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-yellow-400 mb-12">Epic Moments & Visual Greatness</h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              A glimpse into the Hikaru Elites experience – from intense strategic battles to serene moments of reflection by the board, all set against the stunning backdrop of Kisumu. This is where we celebrate the beauty of chess as a lifestyle.
            </p>
            {/* Masonry Grid */}
<div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
  {[
    { src: "https://meshackariri.sirv.com/chess101/chess/IMG-20250722-WA0232.jpg", alt: "Chess Moment 1" },
    { src: "https://meshackariri.sirv.com/chess101/chess/IMG-20250722-WA0237.jpg", alt: "Lakeside View 2" },
    { src: "https://meshackariri.sirv.com/chess101/chess/IMG-20250722-WA0231.jpg", alt: "Coaching Session 3" },
    { src: "https://meshackariri.sirv.com/chess101/chess/IMG-20250722-WA0177.jpg", alt: "Tournament Action 4" },
    { src: "https://meshackariri.sirv.com/chess101/chess/IMG-20250722-WA0164.jpg", alt: "Reflection 5" },
    { src: "https://meshackariri.sirv.com/chess101/chess/IMG-20250727-WA0088.jpg", alt: "Kids Class 6" },
    { src: "https://meshackariri.sirv.com/chess101/chess/IMG-20250727-WA0084.jpg", alt: "Outdoor Game 7" },
    { src: "https://meshackariri.sirv.com/chess101/chess/IMG-20250727-WA0078.jpg", alt: "Trophy Moment 8" },
    { src: "https://meshackariri.sirv.com/chess101/chess/IMG-20250727-WA0069.jpg", alt: "Strategy Board 9" },
  ].map((image, index) => (
    <div
      key={index}
      className="relative break-inside-avoid-column group rounded-xl overflow-hidden shadow-lg"
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-auto object-cover"
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          (e.target as HTMLImageElement).onerror = null;
          (e.target as HTMLImageElement).src = `https://placehold.co/600x400/cccccc/333333?text=Image+Error`;
        }}
      />

      {/* 🔴 Subtle dark overlay (always visible) */}
      <div className="absolute inset-0 bg-black bg-opacity-20 transition duration-300 group-hover:bg-opacity-60" />

      {/* 🟡 Overlay text on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-lg font-semibold text-center px-2">{image.alt}</p>
      </div>
    </div>
  ))}
</div>

            <div className="mt-12">
              <a
                href="#contact"
                onClick={() => scrollToSection('contact')}
                className="inline-block bg-yellow-500 hover:bg-purple-600 text-gray-900 font-bold py-3 px-6 rounded-full shadow-md transition-all duration-300 ease-in-out hover:scale-105"
              >
                See More & Join Us
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">Connect With Us</h2>
            <div className="max-w-xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 text-center">
              <p className="text-lg text-gray-300 mb-8">
                Ready to elevate your chess game or interested in our next lakeside tournament in Kisumu? Reach out to us!
              </p>
              <div className="space-y-4">
                <p className="flex items-center justify-center text-gray-100 text-xl">
                  <Mail className="w-6 h-6 text-cyan-400 mr-3" />
                  Email: <a href="mailto:hikaruelites@gmail.com" className="ml-2 text-yellow-400 hover:text-purple-500 transition-colors duration-300">hikaruelites@gmail.com</a>
                </p>
                <p className="flex items-center justify-center text-gray-100 text-xl">
                  <Phone className="w-6 h-6 text-cyan-400 mr-3" />
                  WhatsApp: <a href="https://wa.me/254741174779" target="_blank" rel="noopener noreferrer" className="ml-2 text-yellow-400 hover:text-purple-500 transition-colors duration-300">+254741174779</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-10 text-gray-300 text-center">
        <div className="container mx-auto px-6">
          <p className="mb-4">&copy; {new Date().getFullYear()} Hikaru Elites. All rights reserved.</p>
          <p>
            Designed with passion for the game and the lifestyle in Kisumu.
          </p>
          <div className="flex justify-center space-x-6 mt-6">
            {/* Social Media Links Placeholder */}
            <a href="#" className="text-gray-300 hover:text-purple-500 transition-colors duration-300"></a>
            <a href="#" className="text-gray-300 hover:text-purple-500 transition-colors duration-300"></a>
            <a href="#" className="text-gray-300 hover:text-purple-500 transition-colors duration-300"></a>
          </div>
        </div>
      </footer>

      {/* Modal for messages */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className={`bg-gray-800 p-8 rounded-xl shadow-2xl max-w-sm w-full text-center border-t-4 ${modalType === 'success' ? 'border-yellow-500' : 'border-red-500'}`}>
            <div className="flex justify-center mb-4">
              {modalType === 'success' ? (
                <CheckCircle className="w-16 h-16 text-yellow-500" />
              ) : (
                <X className="w-16 h-16 text-red-500" />
              )}
            </div>
            <p className="text-xl text-gray-100 mb-6">{modalMessage}</p>
            <button
              onClick={closeModal}
              className={`inline-block ${modalType === 'success' ? 'bg-yellow-500 hover:bg-purple-600' : 'bg-red-600 hover:bg-red-700'} text-gray-900 font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105`}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
