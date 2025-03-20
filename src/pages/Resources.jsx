import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles.css';
import '../styles/resources.css'; // Ensure this includes modal styles

const Resources = () => {
  // Define articles with content as an array of paragraphs
  const articles = [
    {
      title: 'Choosing the Right Date Coder',
      excerpt: 'A guide to selecting equipment for Ethiopia’s needs.',
      content: [
        "Choosing the right date coder is a critical decision for businesses in Ethiopia, as it not only ensures proper labeling and traceability of products but also supports regulatory compliance in industries such as food, pharmaceuticals, and cosmetics. This guide delves into the key factors to consider when selecting the right equipment to meet Ethiopia’s unique production, environmental, and budgetary needs.",
        "Understanding your production needs is the first step in selecting an appropriate date coder. Businesses must evaluate the type of product, the nature of its packaging material, and the specific information required on the labels, such as dates, batch numbers, or barcodes. Additionally, the speed of the production line and whether the printing process is integrated into the line or conducted separately are essential considerations to ensure that the equipment can keep pace with the manufacturing process without causing delays.",
        "In Ethiopia’s diverse industrial landscape, environmental conditions play a significant role in determining the suitability of a date coder. Factors such as ambient temperature, humidity, dust, and moisture can affect the performance and durability of the machine. It is important to choose a coder that can operate reliably under these varying conditions, particularly in areas where high levels of dust or moisture are common, and to ensure that it meets any industry-specific safety and hygiene standards.",
        "Budget constraints are another critical factor when selecting a date coder. The initial cost of the equipment must be weighed against the long-term operational expenses, including the cost of consumables like ink, regular maintenance, and potential downtime. For many businesses in Ethiopia, finding a balance between quality and affordability is crucial, especially for small and medium enterprises looking to optimize their production costs.",
        "There are several types of date coders available on the market, each with its own advantages. Thermal inkjet printers offer high-resolution, non-contact printing ideal for various surfaces, while continuous inkjet printers are designed for high-speed operations and are particularly effective on curved surfaces. Laser coders provide permanent, environmentally friendly markings that are well-suited for high-security applications, and thermal transfer coders are optimal for printing large areas on flexible packaging materials. The choice among these technologies should align with the specific production requirements and environmental conditions of your operation.",
        "Beyond the core technical and financial considerations, additional factors such as equipment reliability, local customer support, and service availability should also be evaluated. In regions where technical assistance may be limited, opting for a reputable manufacturer with a proven track record can reduce the risk of operational disruptions. Furthermore, understanding and complying with local regulatory requirements is essential to ensure that the chosen equipment meets industry standards and contributes to overall product safety.",
        "In conclusion, selecting the right date coder for your business in Ethiopia requires a comprehensive assessment of production needs, environmental conditions, and budget considerations. By carefully evaluating these factors and understanding the various types of date coders available, businesses can make an informed decision that enhances production efficiency, ensures compliance with regulatory standards, and supports long-term operational success."
      ]
    },
    {
      title: 'Printer Maintenance Tips',
      excerpt: 'Keep your machines running smoothly.',
      content: [
        "Printer and date coder maintenance is essential for ensuring reliable performance and extending the lifespan of your machines. Regular upkeep not only helps maintain high-quality output but also minimizes downtime and repair costs, keeping your production processes running smoothly.",
        "One of the most important maintenance steps is establishing a consistent cleaning routine. Dust, debris, and ink residues can accumulate on print heads, rollers, and internal components, which may compromise print quality. Using manufacturer-recommended cleaning solutions and tools, carefully clean these areas to remove contaminants without causing damage.",
        "Monitoring consumables like ink, toner, or ribbons is also critical. Running equipment with low consumable levels can lead to inconsistent prints or even damage to the printer or date coder. Regular checks and timely replacements help prevent unexpected interruptions in your workflow and ensure continuous, high-quality printing.",
        "Routine calibration and alignment are key to maintaining accurate and legible printed information. Over time, mechanical components can drift from their optimal settings. Adhering to the manufacturer's guidelines for recalibration, or scheduling periodic professional servicing, ensures that your equipment remains precise and efficient.",
        "Regularly inspecting your machines for signs of wear and tear can preempt major issues. Look for loose connections, worn-out belts, or damaged rollers, and address any problems promptly. Early intervention not only prevents further damage but also extends the overall operational life of your equipment.",
        "Implementing a comprehensive maintenance plan also includes training staff on basic troubleshooting and routine care. By empowering your team with the knowledge to identify early warning signs, you can reduce the likelihood of costly repairs and ensure that maintenance tasks are performed consistently and correctly.",
        "In conclusion, a proactive maintenance strategy is the cornerstone of optimal printer and date coder performance. By scheduling regular cleanings, monitoring consumables, calibrating equipment, and performing thorough inspections, you can keep your machines running smoothly and reliably, supporting long-term operational success."
      ]
    },
    {
      title: 'Industry Trends 2025',
      excerpt: 'What’s next for printing in Ethiopia.',
      content: [
        "The date coding industry in Ethiopia is poised for significant advancements by 2025, driven by technological innovations and evolving market demands. As businesses strive for greater efficiency and compliance, understanding these emerging trends becomes crucial for maintaining a competitive edge.",
        "One notable trend is the integration of advanced technologies such as artificial intelligence (AI) and machine learning into date coding systems. These technologies enable predictive maintenance, allowing equipment to anticipate and address potential issues before they cause downtime. This shift towards proactive maintenance ensures continuous operation and reduces unexpected interruptions in production lines.",
        "The adoption of eco-friendly practices is also gaining momentum within the Ethiopian market. Manufacturers are increasingly seeking sustainable date coding solutions that minimize environmental impact. This includes the use of biodegradable inks and energy-efficient machinery, aligning with global sustainability goals and meeting the growing consumer demand for environmentally responsible products.",
        "Customization and flexibility in date coding are becoming essential as businesses diversify their product lines. Advanced coding systems that can handle various packaging materials and sizes without extensive reconfiguration are in high demand. This adaptability not only streamlines operations but also reduces costs associated with equipment changes and downtime.",
        "Regulatory compliance continues to be a driving factor in the evolution of date coding technologies. As Ethiopia aligns its standards with international regulations, companies must ensure their coding practices meet stringent requirements. Investing in systems that provide precise and indelible markings helps businesses avoid legal pitfalls and enhances consumer trust in their products.",
        "The rise of e-commerce in Ethiopia is influencing packaging and labeling strategies. With products now reaching a broader audience, clear and accurate date codes are vital for maintaining quality and safety standards. This trend underscores the need for reliable coding systems that can keep pace with the rapid fulfillment demands of online retail.",
        "In conclusion, the date coding industry in Ethiopia by 2025 is set to embrace technological advancements, sustainability, flexibility, regulatory adherence, and e-commerce integration. Businesses that proactively adapt to these trends will be well-positioned to thrive in a dynamic and competitive marketplace."
      ]
    }
  ];

  const [selectedArticle, setSelectedArticle] = useState(null);

  // Animation variants for smooth transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
  };

  return (
    <motion.main
      className="resources-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="gradient-text">Resources</h1>
      <div className="resources-list">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            className="resource-item"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <motion.button
              className="modern-read-more"
              onClick={() => setSelectedArticle(article)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Modal to display full article content in multiple paragraphs */}
      {selectedArticle && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedArticle(null)}
        >
          <motion.div
            className="modal-content"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedArticle.title}</h2>
            {/* Map over content array to render each paragraph */}
            {selectedArticle.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <motion.button
              className="modal-close-btn"
              onClick={() => setSelectedArticle(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.main>
  );
};

export default Resources;