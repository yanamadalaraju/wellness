// import React from 'react';

// const DietPage = () => {
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       {/* Header */}
//       <header className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-green-800 mb-4">Nowal NatureCare</h1>
//         <p className="text-xl text-green-700">Nourishing Your Body's Natural Healing Power</p>
//       </header>

//       {/* Philosophy Section */}
//       <section className="mb-16">
//         <h2 className="text-2xl font-semibold text-green-800 mb-6 border-b-2 border-green-200 pb-2">The Philosophy of Natural Nutrition</h2>
//         <div className="space-y-4 text-gray-700">
//           <p>
//             At Nowal NatureCare, our kitchen embodies the core principles of naturopathic nutrition therapy. We believe deeply that your body possesses an innate healing wisdom, and nature provides the perfect tools to support this remarkable process. When you nourish yourself with foods that align with your body's natural needs, you're not just eating – you're participating in your own healing journey.
//           </p>
//           <p>
//             The challenge many face today is nutritional confusion. Too often, we make food choices based on fleeting desires rather than what truly serves our wellbeing. This approach transforms our mouth from a gateway to health into an entry point for disease. Our mission is to guide you back to eating with intention and wisdom.
//           </p>
//         </div>
//       </section>

//       {/* Food Philosophy Section */}
//       <section className="mb-16">
//         <h2 className="text-2xl font-semibold text-green-800 mb-6 border-b-2 border-green-200 pb-2">Our Natural Food Philosophy</h2>
//         <div className="space-y-4 text-gray-700">
//           <p>
//             True healing nutrition focuses on foods in their most natural, unprocessed state – free from chemical additives, preservatives, and artificial modifications. We embrace the ancient wisdom: <span className="italic">"Let food be thy medicine and medicine be thy food."</span>
//           </p>
//           <p>
//             To achieve optimal health and healing through nutrition, we prioritize organic whole foods at peak freshness, ensuring maximum nutritional potency and therapeutic benefit.
//           </p>
//         </div>
//       </section>

//       {/* Nutritional Foundation Section */}
//       <section className="mb-16">
//         <h2 className="text-2xl font-semibold text-green-800 mb-6 border-b-2 border-green-200 pb-2">The Nowal NatureCare Nutritional Foundation</h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           <div className="bg-green-50 p-6 rounded-lg">
//             <h3 className="text-xl font-medium text-green-700 mb-4">Fresh Plant Foods</h3>
//             <ul className="space-y-2 text-gray-700">
//               <li className="flex items-start">
//                 <span className="text-green-600 mr-2">•</span>
//                 Vibrant seasonal vegetables and fruits (organic and locally sourced/grown)
//               </li>
//               <li className="flex items-start">
//                 <span className="text-green-600 mr-2">•</span>
//                 Gently steamed and thoughtfully prepared vegetables with taste.
//               </li>
//               <li className="flex items-start">
//                 <span className="text-green-600 mr-2">•</span>
//                 Aromatic fresh herbs and healing spices enhance the taste
//               </li>
//             </ul>
//           </div>

//           <div className="bg-green-50 p-6 rounded-lg">
//             <h3 className="text-xl font-medium text-green-700 mb-4">Wholesome Staples</h3>
//             <ul className="space-y-2 text-gray-700">
//               <li className="flex items-start">
//                 <span className="text-green-600 mr-2">•</span>
//                 Nutrient-dense organic whole grains including gluten free grains
//               </li>
//               <li className="flex items-start">
//                 <span className="text-green-600 mr-2">•</span>
//                 Premium healthy fats preferably cold-pressed
//               </li>
//               <li className="flex items-start">
//                 <span className="text-green-600 mr-2">•</span>
//                 Protein-rich legumes and pulses
//               </li>
//             </ul>
//           </div>

//           <div className="bg-green-50 p-6 rounded-lg">
//             <h3 className="text-xl font-medium text-green-700 mb-4">Natural Proteins & Dairy</h3>
//             <ul className="space-y-2 text-gray-700">
//               <li className="flex items-start">
//                 <span className="text-green-600 mr-2">•</span>
//                 Pure dairy products: fresh milk, probiotic-rich curd, and digestive buttermilk
//               </li>
//               <li className="flex items-start">
//                 <span className="text-green-600 mr-2">•</span>
//                 Soya-based alternatives: soy milk, tofu, and fermented soy products
//               </li>
//               <li className="flex items-start">
//                 <span className="text-green-600 mr-2">•</span>
//                 Raw nuts and seeds packed with essential nutrients
//               </li>
//             </ul>
//           </div>

//           <div className="bg-green-50 p-6 rounded-lg">
//             <h3 className="text-xl font-medium text-green-700 mb-4">Healing Beverages</h3>
//             <ul className="space-y-2 text-gray-700">
//               <li className="flex items-start">
//                 <span className="text-green-600 mr-2">•</span>
//                 Pure, clean water as the foundation of health
//               </li>
//               <li className="flex items-start">
//                 <span className="text-green-600 mr-2">•</span>
//                 Therapeutic herbal teas for specific healing needs
//               </li>
//               <li className="flex items-start">
//                 <span className="text-green-600 mr-2">•</span>
//                 Fresh-pressed fruit and vegetable juices bursting with enzymes
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Cooking Methods Section */}
//       <section className="mb-16">
//         <h2 className="text-2xl font-semibold text-green-800 mb-6 border-b-2 border-green-200 pb-2">Mindful Cooking for Maximum Nutrition</h2>
//         <p className="text-gray-700 mb-6">
//           The preparation method is as crucial as the ingredients themselves. Our kitchen employs gentle cooking techniques that preserve vital nutrients while creating delicious, satisfying meals:
//         </p>
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
//           <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-300">
//             <h3 className="font-medium text-amber-800">Steaming</h3>
//             <p className="text-gray-700 text-sm">preserves maximum nutrients and natural flavors</p>
//           </div>
//           <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-300">
//             <h3 className="font-medium text-amber-800">Stir-frying</h3>
//             <p className="text-gray-700 text-sm">quick cooking that maintains texture and nutrition</p>
//           </div>
//           <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-300">
//             <h3 className="font-medium text-amber-800">Baking</h3>
//             <p className="text-gray-700 text-sm">brings out natural sweetness without added sugars</p>
//           </div>
//           <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-300">
//             <h3 className="font-medium text-amber-800">Sautéing</h3>
//             <p className="text-gray-700 text-sm">gentle cooking with healthy oils</p>
//           </div>
//           <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-300">
//             <h3 className="font-medium text-amber-800">Grilling and roasting</h3>
//             <p className="text-gray-700 text-sm">enhances natural flavors while maintaining nutrition</p>
//           </div>
//         </div>
//         <p className="text-gray-700 mt-6">
//           We conduct hands-on food preparation demonstrations twice weekly, empowering you to continue this healing journey in your own kitchen.
//         </p>
//       </section>

//       {/* Personal Journey Section */}
//       <section className="mb-16 bg-green-100 p-8 rounded-lg">
//         <h2 className="text-2xl font-semibold text-green-800 mb-6">Your Personal Healing Journey</h2>
//         <div className="space-y-4 text-gray-700">
//           <p>
//             Transforming your relationship with food is a powerful commitment to yourself. At Nowal NatureCare, we provide the framework and knowledge, but the real transformation happens through your conscious choices and self-discipline. This isn't about deprivation – it's about discovering how incredible you can feel when you truly nourish your body.
//           </p>
//           <p>
//             Our approach honors both seasonality and locality. We proudly serve organic fruits and vegetables sourced primarily from our own farm, ensuring that every meal captures the essence of fresh, seasonal nutrition.
//           </p>
//           <p className="font-medium italic text-green-800">
//             "When diet is wrong, medicine is of no use. When diet is correct, medicine is of no need."
//           </p>
//           <p>
//             At Nowal NatureCare, we're not just serving food – we're serving a pathway to your body's natural healing potential.
//           </p>
//         </div>
//       </section>

//       {/* Quotes Section */}
//       <section>
//         <h2 className="text-2xl font-semibold text-green-800 mb-6 border-b-2 border-green-200 pb-2">Words of Wisdom</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {[
//             '"Let food be thy medicine and medicine be thy food." - Hippocrates',
//             '"Every food you eat is either fighting disease or feeding it." - Heather Morgan',
//             '"Those who think they have not time for bodily exercise will sooner or later have to find time for illness." - Edward Stanley',
//             '"The first wealth is health." - Ralph Waldo Emerson',
//             '"Take care of your body. It\'s the only place you have to live." - Jim Rohn',
//             '"A healthy outside starts from the inside." - Robert Urich',
//             '"The best and most efficient pharmacy is within your own system and quality of food." - Robert C. Peale',
//             '"The power of nature is what all medicine is based upon." - Paul Haider',
//             '"Nature itself is the best physician." - Hippocrates'
//           ].map((quote, index) => (
//             <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-green-100">
//               <p className="text-gray-700 italic">"{quote.split('"')[1]}"</p>
//               <p className="text-green-700 mt-2">- {quote.split('- ')[1]}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default DietPage;


import React from 'react';

const DietPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header with Hero Image */}
      <header className="text-center mb-12 relative">
        <div className="relative h-96 overflow-hidden rounded-lg mb-6">
          <img 
            src="https://i.pinimg.com/1200x/45/63/32/456332c909f732da36000118c44943ab.jpg" 
            alt="Fresh organic vegetables and fruits"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Nowal NatureCare</h1>
              <p className="text-xl md:text-2xl">Nourishing Your Body's Natural Healing Power</p>
            </div>
          </div>
        </div>
      </header>

      {/* Philosophy Section with Image */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <img 
              src="https://i.pinimg.com/736x/c1/b0/e1/c1b0e12f414f5be8740b77d7f85c1453.jpg" 
              alt="Hands holding fresh vegetables"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-green-800 mb-6 border-b-2 border-green-200 pb-2">The Philosophy of Natural Nutrition</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                At Nowal NatureCare, our kitchen embodies the core principles of naturopathic nutrition therapy. We believe deeply that your body possesses an innate healing wisdom, and nature provides the perfect tools to support this remarkable process.
              </p>
              <p>
                The challenge many face today is nutritional confusion. Too often, we make food choices based on fleeting desires rather than what truly serves our wellbeing. Our mission is to guide you back to eating with intention and wisdom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Food Philosophy Section */}
      <section className="mb-16 bg-green-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-green-800 mb-6 border-b-2 border-green-200 pb-2">Our Natural Food Philosophy</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/3 space-y-4 text-gray-700">
            <p>
              True healing nutrition focuses on foods in their most natural, unprocessed state – free from chemical additives, preservatives, and artificial modifications. We embrace the ancient wisdom: <span className="italic">"Let food be thy medicine and medicine be thy food."</span>
            </p>
            <p>
              To achieve optimal health and healing through nutrition, we prioritize organic whole foods at peak freshness, ensuring maximum nutritional potency and therapeutic benefit.
            </p>
          </div>
          <div className="md:w-1/3">
            <img 
              src="https://i.pinimg.com/736x/ea/68/13/ea68132bc4e43e800d43b04feca71bb1.jpg" 
              alt="Farm to table concept"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Nutritional Foundation Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-green-800 mb-6 border-b-2 border-green-200 pb-2">The Nowal NatureCare Nutritional Foundation</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-4">
            <div className="md:w-1/3">
              <img 
                src="https://i.pinimg.com/736x/b3/37/2d/b3372d4bd8515bfeb7cfe8fc203fed74.jpg" 
                alt="Fresh plant foods"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-medium text-green-700 mb-4">Fresh Plant Foods</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Vibrant seasonal vegetables and fruits (organic and locally sourced/grown)
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Gently steamed and thoughtfully prepared vegetables with taste.
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Aromatic fresh herbs and healing spices enhance the taste
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-4">
            <div className="md:w-1/3">
              <img 
                src="https://i.pinimg.com/736x/ba/ce/b6/baceb642a82d193a921ff0314df1d1aa.jpg" 
                alt="Wholesome staples"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-medium text-green-700 mb-4">Wholesome Staples</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Nutrient-dense organic whole grains including gluten free grains
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Premium healthy fats preferably cold-pressed
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Protein-rich legumes and pulses
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-4">
            <div className="md:w-1/3">
              <img 
                src="https://i.pinimg.com/1200x/ca/4c/bc/ca4cbc14250e41eff30fbc8bf948c332.jpg" 
                alt="Natural proteins and dairy"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-medium text-green-700 mb-4">Natural Proteins & Dairy</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Pure dairy products: fresh milk, probiotic-rich curd, and digestive buttermilk
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Soya-based alternatives: soy milk, tofu, and fermented soy products
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Raw nuts and seeds packed with essential nutrients
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-4">
            <div className="md:w-1/3">
              <img 
                src="https://i.pinimg.com/736x/8c/6b/6a/8c6b6abfd55d80722257833d613b2295.jpg" 
                alt="Healing beverages"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-medium text-green-700 mb-4">Healing Beverages</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Pure, clean water as the foundation of health
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Therapeutic herbal teas for specific healing needs
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Fresh-pressed fruit and vegetable juices bursting with enzymes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cooking Methods Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-green-800 mb-6 border-b-2 border-green-200 pb-2">Mindful Cooking for Maximum Nutrition</h2>
        
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="md:w-1/2">
            <img 
              src="https://i.pinimg.com/1200x/91/c9/f7/91c9f7ba40eda3dbaed389e70f20b961.jpg" 
              alt="Various cooking methods"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-700 mb-6">
              The preparation method is as crucial as the ingredients themselves. Our kitchen employs gentle cooking techniques that preserve vital nutrients while creating delicious, satisfying meals:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-300">
                <h3 className="font-medium text-amber-800">Steaming</h3>
                <p className="text-gray-700 text-sm">preserves maximum nutrients and natural flavors</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-300">
                <h3 className="font-medium text-amber-800">Stir-frying</h3>
                <p className="text-gray-700 text-sm">quick cooking that maintains texture and nutrition</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-300">
                <h3 className="font-medium text-amber-800">Baking</h3>
                <p className="text-gray-700 text-sm">brings out natural sweetness without added sugars</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-300">
                <h3 className="font-medium text-amber-800">Sautéing</h3>
                <p className="text-gray-700 text-sm">gentle cooking with healthy oils</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-1/3">
            <img 
              src="https://i.pinimg.com/736x/fd/61/d9/fd61d91cece32ac37c229ca36d42e0ae.jpg" 
              alt="Cooking class demonstration"
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-gray-700">
              We conduct hands-on food preparation demonstrations twice weekly, empowering you to continue this healing journey in your own kitchen.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Journey Section */}
      <section className="mb-16 bg-green-100 p-8 rounded-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://i.pinimg.com/736x/88/7c/17/887c17299aa26232510273c6997a1b27.jpg" 
            alt="Nature background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative">
          <h2 className="text-2xl font-semibold text-green-800 mb-6">Your Personal Healing Journey</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Transforming your relationship with food is a powerful commitment to yourself. At Nowal NatureCare, we provide the framework and knowledge, but the real transformation happens through your conscious choices and self-discipline.
            </p>
            <div className="flex flex-col md:flex-row gap-6 items-center my-6">
              <div className="md:w-1/3">
                <img 
                  src="https://i.pinimg.com/1200x/3c/40/bb/3c40bb6fd71bd9218f55980c27fda62c.jpg" 
                  alt="Organic farm"
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
              <div className="md:w-2/3">
                <p>
                  Our approach honors both seasonality and locality. We proudly serve organic fruits and vegetables sourced primarily from our own farm, ensuring that every meal captures the essence of fresh, seasonal nutrition.
                </p>
              </div>
            </div>
            <p className="font-medium italic text-green-800 text-center py-4 border-t border-b border-green-200 my-4">
              "When diet is wrong, medicine is of no use. When diet is correct, medicine is of no need."
            </p>
            <p className="text-center">
              At Nowal NatureCare, we're not just serving food – we're serving a pathway to your body's natural healing potential.
            </p>
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      {/* <section>
        <h2 className="text-2xl font-semibold text-green-800 mb-6 border-b-2 border-green-200 pb-2">Words of Wisdom</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {quote: "Let food be thy medicine and medicine be thy food.", author: "Hippocrates", image: "hippocrates.jpg"},
            {quote: "Every food you eat is either fighting disease or feeding it.", author: "Heather Morgan", image: "heather-morgan.jpg"},
            {quote: "Those who think they have not time for bodily exercise will sooner or later have to find time for illness.", author: "Edward Stanley", image: "edward-stanley.jpg"},
            {quote: "The first wealth is health.", author: "Ralph Waldo Emerson", image: "ralph-emerson.jpg"},
            {quote: "Take care of your body. It's the only place you have to live.", author: "Jim Rohn", image: "jim-rohn.jpg"},
            {quote: "A healthy outside starts from the inside.", author: "Robert Urich", image: "robert-urich.jpg"}
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-green-100 overflow-hidden">
              <div className="h-40 overflow-hidden mb-4">
                <img 
                  src={`/images/authors/${item.image}`} 
                  alt={item.author}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <p className="text-gray-700 italic mb-2">"{item.quote}"</p>
              <p className="text-green-700">- {item.author}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Gallery Section */}
      {/* <section className="mt-16">
        <h2 className="text-2xl font-semibold text-green-800 mb-6 border-b-2 border-green-200 pb-2">Our Natural Kitchen</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1,2,3,4,5,6,7,8].map((item) => (
            <div key={item} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={`/images/gallery/food-${item}.jpg`} 
                alt={`Healthy food ${item}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default DietPage;