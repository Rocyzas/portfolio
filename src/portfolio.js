const header = {
  homepage: 'https://rocyzas.github.io/portfolio',
  title: '^_^',
}

const about = {
  name: 'Rokas Pranevicius',
  role: 'Software Engineer',
  description:
    'Katarsis laimes eurovizija.',
  resume: 'https://drive.google.com/file/d/1EG5uUkooWlBh6BC3hoYPRcbGRO1d_qV_/view?usp=drive_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/rokas-pranevicius/',
    github: 'https://github.com/Rocyzas/',
  },
}
const skills = [
]
const contact = {
  email: 'pranas.rokas@gmail.com',
}

const projects = [
    {
        name: "Image Classification App",
        description: "Muffin and Chihuahua image classification app deployed on Azure.",
        stack: ['Python', 'Tensorflow', 'Flask'],
        sourceCode: "https://github.com/Rocyzas/Muffin-vs-Chihuahua-Classification",
        // livePreview: "asdasd",
      },
      {
        name: "Lindenmayer Systems",
        description: "Performed genetic operations on L-Systems using crossover and mutation, visualising patterns of growing biological structures.",
        stack: ['Python', 'Turtle'],
        sourceCode: "https://github.com/Rocyzas/Genetic-operations-on-L-systems",
      },
      {
        name: "Alzheimer's Disease diagnosis",
        description: "Classified MRI hippocampus scans between healthy cases, mildy impared and Alzheimer's achieving 84% accuracy",
        stack: ['Python', 'Tensorflow', 'Keras', 'Hippodeep'],
        sourceCode: "https://github.com/Rocyzas/Explainable-AI-Classifiers-for-Alzheimers-Disease-Diagnosis",
      }
];

export { header, about, projects, skills, contact }
