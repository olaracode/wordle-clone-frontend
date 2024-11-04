import AnimatedWords from "./animated-words";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
export default function LandingPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white overflow-hidden">
        <div className="container mx-auto px-6 py-16 text-center relative">
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t("landing.hero.welcome")}
          </motion.h1>
          <AnimatedWords />
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("landing.hero.subtitle")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {false ? (
              <a
                href="/game"
                className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
              >
                {t("landing.buttons.playNow")}
              </a>
            ) : (
              <div className="space-x-4">
                <motion.button
                  className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("landing.buttons.login")}
                </motion.button>
                <motion.button
                  className="bg-transparent border-2 border-white text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("landing.buttons.register")}
                </motion.button>
              </div>
            )}
          </motion.div>
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                  width: Math.random() * 6 + 2 + "px",
                  height: Math.random() * 6 + 2 + "px",
                  top: Math.random() * 100 + "%",
                  left: Math.random() * 100 + "%",
                }}
                animate={{
                  y: [0, -30],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 2 + 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t("landing.about.title")}
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">{t("landing.about.description")}</p>
            <h3 className="text-xl font-semibold mb-4">
              {t("landing.about.techStack.title")}
            </h3>
            <ul className="list-disc list-inside mb-6">
              <li>React (UI library)</li>
              <li>Tailwind CSS (Styling)</li>
              <li>TypeScript (Type-safe JavaScript)</li>
              <li>Framer Motion (Animations)</li>
            </ul>
            <p className="text-lg mb-6">
              {t("landing.about.projectDescription")}
            </p>
            <div className="text-center">
              <Link
                to="https://octavio-lara.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                {t("landing.about.portfolio")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>{t("landing.footer")}</p>
        </div>
      </footer>
    </div>
  );
}
