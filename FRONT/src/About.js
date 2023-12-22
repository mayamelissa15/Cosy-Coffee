// About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-brown mb-4">À propos de nous</h1>
        <p className="text-brown mb-8">
          Bienvenue dans notre café, un endroit chaleureux où vous pouvez étudier, savourer un bon café
          et déguster de délicieuses pâtisseries.
        </p>

        {/* Section Réservations */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-brown mb-4">Réservations de tables</h2>
          <p className="text-brown">
            Réservez une table confortable pour vos révisions. Nous avons un espace tranquille et propice
            à la concentration.
          </p>
        </section>

        {/* Section Cafés */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-brown mb-4">Cafés exquis</h2>
          <p className="text-brown">
            Découvrez notre sélection de cafés de qualité, préparés avec soin pour satisfaire votre palais.
          </p>
        </section>

        {/* Section Pâtisseries */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-brown mb-4">Délicieuses pâtisseries</h2>
          <p className="text-brown">
            Laissez-vous tenter par nos pâtisseries fraîchement préparées. Des saveurs uniques qui vous feront revenir.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
