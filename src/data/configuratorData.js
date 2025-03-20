export const configuratorSteps = [
  {
    id: 'industry',
    question: 'What’s your industry?',
    options: [
      { value: 'beverage', label: 'Beverage' },
      { value: 'pharma', label: 'Pharma' },
      { value: 'manufacturing', label: 'Manufacturing' },
    ],
  },
  {
    id: 'printerType',
    question: 'What type of printer technology do you need?',
    options: [
      { value: 'inkjet', label: 'Inkjet' },
      { value: 'laser', label: 'Laser' },
      { value: 'thermal', label: 'Thermal' },
    ],
  },
  {
    id: 'innovationHub',
    question: 'Which innovation hub interests you?',
    options: [
      { value: 'techTrends', label: 'Tech Trends' },
      { value: 'processOptimizers', label: 'Process Optimizers' },
      { value: 'sustainabilitySolutions', label: 'Sustainability Solutions' },
    ],
  },
  {
    id: 'details',
    question: 'Here’s your selection details:',
    options: [],
  },
];

export const expertInsights = {
  pharma: {
    inkjet: {
      techTrends: {
        content: `Pharma - Inkjet - Tech Trends: Inkjet printing in pharmaceuticals is driving personalized medicine and precise dosing. Emerging tech advances include high-resolution printing and 3D bioprinting for tissue engineering. The focus is on precision and innovation, ensuring that medications are tailored to patient needs.`,
      },
      processOptimizers: {
        content: `Pharma - Inkjet - Process Optimizers: In the pharmaceutical industry, inkjet technology optimizes production with automated dosing and minimal waste. Advanced systems streamline workflows, ensuring regulatory compliance and efficiency in high-stakes drug manufacturing.`,
      },
      sustainabilitySolutions: {
        content: `Pharma - Inkjet - Sustainability Solutions: Sustainable inkjet solutions in pharma focus on reducing chemical usage and material waste. Eco-friendly inks and energy-efficient systems help lower environmental impact while maintaining high performance.`,
      },
    },
    laser: {
      techTrends: {
        content: `Pharma - Laser - Tech Trends: Laser technology in pharmaceuticals offers permanent, high-resolution coding on various substrates. It enhances traceability and anti-counterfeiting measures while pushing the boundaries of medication safety.`,
      },
      processOptimizers: {
        content: `Pharma - Laser - Process Optimizers: Laser marking streamlines pharmaceutical production by delivering fast, maintenance-free operation. Its non-contact process reduces errors and boosts overall production speed without sacrificing quality.`,
      },
      sustainabilitySolutions: {
        content: `Pharma - Laser - Sustainability Solutions: Laser marking eliminates consumables like inks, significantly reducing waste. This eco-friendly process minimizes chemical emissions and supports sustainable practices in drug manufacturing.`,
      },
    },
    thermal: {
      techTrends: {
        content: `Pharma - Thermal - Tech Trends: Thermal printing in pharma is evolving with advanced ink formulations that ensure clear, durable labels. These systems support high-resolution output ideal for detailed coding on various packaging types.`,
      },
      processOptimizers: {
        content: `Pharma - Thermal - Process Optimizers: Thermal printers deliver fast turnaround times and efficient labeling for pharmaceutical products. Their precision and reliability help streamline production and enhance operational efficiency.`,
      },
      sustainabilitySolutions: {
        content: `Pharma - Thermal - Sustainability Solutions: Emphasizing green manufacturing, thermal printing reduces waste through precise ink usage and low energy consumption. These systems meet strict environmental standards while performing reliably.`,
      },
    },
  },
  beverage: {
    inkjet: {
      techTrends: {
        content: `Beverage - Inkjet - Tech Trends: Inkjet technology in beverage packaging enables dynamic printing capabilities like variable data and high-speed production. Innovations in high-resolution graphics enhance brand appeal and meet regulatory demands.`,
      },
      processOptimizers: {
        content: `Beverage - Inkjet - Process Optimizers: For beverage manufacturers, inkjet systems offer flexible coding and rapid changeovers. These printers minimize downtime and ensure consistent, high-quality output across various packaging materials.`,
      },
      sustainabilitySolutions: {
        content: `Beverage - Inkjet - Sustainability Solutions: Sustainable inkjet solutions in the beverage sector focus on reducing ink waste and energy usage. Eco-friendly inks and efficient processes lower environmental impact while delivering premium print quality.`,
      },
    },
    laser: {
      techTrends: {
        content: `Beverage - Laser - Tech Trends: Laser coding in beverage packaging is popular for its precision and durability. Advances in laser technology enable detailed date coding and multi-surface compatibility, ensuring long-lasting markings.`,
      },
      processOptimizers: {
        content: `Beverage - Laser - Process Optimizers: Laser systems offer high-speed, non-contact marking that integrates seamlessly into beverage production lines. Their reliability minimizes errors and boosts overall operational efficiency.`,
      },
      sustainabilitySolutions: {
        content: `Beverage - Laser - Sustainability Solutions: Laser marking is a green alternative in beverage packaging, eliminating the need for consumables. Reduced waste and lower energy usage align with sustainable manufacturing practices.`,
      },
    },
    thermal: {
      techTrends: {
        content: `Beverage - Thermal - Tech Trends: Thermal printing technology in beverages is advancing with features like high-contrast inks and innovative print heads, ensuring superior quality on glass, plastic, and metal containers.`,
      },
      processOptimizers: {
        content: `Beverage - Thermal - Process Optimizers: Thermal printers streamline beverage production through fast changeovers and minimal maintenance. Their consistent performance is ideal for high-speed environments and varied packaging conditions.`,
      },
      sustainabilitySolutions: {
        content: `Beverage - Thermal - Sustainability Solutions: Focusing on sustainability, thermal printing uses eco-friendly inks and energy-efficient systems. This approach reduces waste and supports a greener production process in the beverage industry.`,
      },
    },
  },
  manufacturing: {
    inkjet: {
      techTrends: {
        content: `Manufacturing - Inkjet - Tech Trends: Inkjet printing is at the forefront of additive manufacturing innovations. High-precision systems enable the creation of complex, detailed components, enhancing modern production capabilities.`,
      },
      processOptimizers: {
        content: `Manufacturing - Inkjet - Process Optimizers: In manufacturing, inkjet technology boosts efficiency by enabling on-demand printing with minimal material waste. Its adaptability supports high-volume runs and quick process adjustments.`,
      },
      sustainabilitySolutions: {
        content: `Manufacturing - Inkjet - Sustainability Solutions: Sustainable inkjet solutions in manufacturing emphasize reduced ink consumption and waste minimization. These systems meet performance requirements while supporting eco-friendly production practices.`,
      },
    },
    laser: {
      techTrends: {
        content: `Manufacturing - Laser - Tech Trends: Laser technology in manufacturing is evolving with 3D engraving and IoT connectivity. These innovations deliver precise, permanent markings on diverse materials, bolstering product traceability.`,
      },
      processOptimizers: {
        content: `Manufacturing - Laser - Process Optimizers: Laser marking systems optimize production by providing rapid, maintenance-free coding. Their direct part marking enhances traceability and reduces production downtime significantly.`,
      },
      sustainabilitySolutions: {
        content: `Manufacturing - Laser - Sustainability Solutions: Laser marking offers a sustainable solution by eliminating the use of consumables and reducing waste. Energy-efficient laser systems lower operational costs and environmental impact.`,
      },
    },
    thermal: {
      techTrends: {
        content: `Manufacturing - Thermal - Tech Trends: Thermal printing in manufacturing is advancing with technologies that support high-resolution, durable coding. This innovation drives improvements in detailed labeling across various substrates.`,
      },
      processOptimizers: {
        content: `Manufacturing - Thermal - Process Optimizers: Thermal printers deliver reliable, fast coding solutions that enhance production efficiency. Their ability to produce clear and consistent markings streamlines manufacturing processes.`,
      },
      sustainabilitySolutions: {
        content: `Manufacturing - Thermal - Sustainability Solutions: Thermal printing contributes to sustainable manufacturing by minimizing ink waste and reducing energy consumption. Eco-friendly systems are designed to meet both performance and environmental standards.`,
      },
    },
  },
};
