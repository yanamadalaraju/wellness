import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import React from 'react';
export default function BlogCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://www.nowalnaturecare.com:5000/api/blog-cards")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <img
            src={`https://www.nowalnaturecare.com:5000${card.image_url}`}
            className="w-full h-52 object-cover"
          />

          <div className="p-6">
            <h3 className="text-xl font-semibold text-emerald-700 mb-3">
              {card.title}
            </h3>

            <p className="text-gray-600 text-sm mb-4">{card.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
