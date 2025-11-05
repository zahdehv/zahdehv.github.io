import type { ProfileData, Education, SocialLinks, BlogPost, Project } from './types';

export const profileData: ProfileData = {
  name: "zahdehv",
  title: "Developer",
  summary: "Software developer with a foundation in AI, backend systems, and algorithm design. Passionate about creating practical tools and exploring concepts from distributed systems to machine learning and game development.",
  email: "kuutaiyuu@gmail.com"
};

export const socialLinks: SocialLinks = {
  github: "https://github.com/zahdehv",
  telegram: "https://t.me/zahdehv",
  instagram: "https://instagram.com/zahdehv",
};

export const projects: Project[] = [
  {
    title: "Obsidian Importer Plugin",
    description: "A plugin for ObsidianMD that imports and processes audio, video, and documents into structured notes using Google's Generative AI.",
    technologies: ["TypeScript", "Google Generative AI", "Obsidian API", "Vite"],
    githubRepoUrl: "https://github.com/maritzuo",
    liveDemoUrl: "#"
  },
  {
    title: "AI Pokémon Battle Simulator",
    description: "A battle simulator where Pokémon strategies evolve over multiple generations using ES-HyperNEAT evolutionary algorithms.",
    technologies: ["Python", "AI", "NEAT-Python", "Pygame"],
    githubRepoUrl: "https://github.com/maritzuo",
    liveDemoUrl: "#"
  },
  {
    title: "Moogle Search Engine",
    description: "A custom document search engine built from scratch in C#, featuring file indexing, TF-IDF scoring for relevance, and custom query operators.",
    technologies: ["C#", ".NET", "Data Structures", "Algorithms"],
    githubRepoUrl: "https://github.com/maritzuo",
    liveDemoUrl: "#"
  },
  {
    title: "Microprocessor Simulator",
    description: "Implemented a processor for a subset of S-MIPS instructions, including a 1KB cache, for a Computer Architecture course.",
    technologies: ["Logisim", "Computer Architecture", "Digital Logic"],
    githubRepoUrl: "https://github.com/maritzuo",
    liveDemoUrl: "#"
  },
  {
    title: "Distributed Tag Filesystem",
    description: "Developed a distributed filesystem that allows for tagging and retrieving files in a networked environment, for a course on Distributed Systems.",
    technologies: ["C#", "Distributed Systems", "Networking"],
    githubRepoUrl: "https://github.com/maritzuo",
    liveDemoUrl: "#"
  },
  {
    title: "Concurrent Linked List",
    description: "Implemented a thread-safe linked list structure in C capable of performing atomic operations to handle concurrent function calls safely.",
    technologies: ["C", "Concurrency", "Data Structures", "Systems Programming"],
    githubRepoUrl: "https://github.com/maritzuo",
    liveDemoUrl: "#"
  },
  {
    title: "Battle Cards Game",
    description: "Created a collectible card game that simulates a battle between two fantasy armies, focusing on game logic and object-oriented design.",
    technologies: ["C#", "Game Development", "Object-Oriented Design"],
    githubRepoUrl: "https://github.com/maritzuo",
    liveDemoUrl: "#"
  }
];

export const education: Education[] = [
  {
    degree: "B.Sc. in Computer Science",
    institution: "University of Havana",
    period: "Est. 2025"
  }
];

export const skills: string[] = [
  "AI Integration", "Backend Development", "System Design", "Tooling", 
  "C#", "Python", "TypeScript", "AI/ML", "Plugin Dev.", "TeX", "C"
];

export const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-ai-integration",
    title: "Getting Started with AI Integration",
    summary: "A beginner's guide to integrating Google's Generative AI into your TypeScript projects, based on my thesis experience.",
    date: "July 15, 2024",
    content: `
Integrating Artificial Intelligence into modern applications has become more accessible than ever, thanks to powerful APIs like Google's Gemini. For my thesis, I developed an Obsidian plugin that processes audio, video, and documents into structured notes, and the Gemini API was the cornerstone of this project. This guide will walk you through the basics of using the \`@google/genai\` SDK in a TypeScript project.

### Prerequisites

Before we start, ensure you have the following:
- Node.js and npm (or your favorite package manager) installed.
- A TypeScript project initialized (\`npm init -y && tsc --init\`).
- An API key from Google AI Studio. Keep it safe and never expose it in client-side code. For development, you can use environment variables.

### Step 1: Installation

First, add the Google GenAI SDK to your project:
\`\`\`bash
npm install @google/genai
\`\`\`

### Step 2: Initializing the AI Client

The first step in your code is to import and initialize the \`GoogleGenAI\` client. You'll pass your API key during this setup.

\`\`\`typescript
import { GoogleGenAI } from "@google/genai";

// IMPORTANT: In a real application, use environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
\`\`\`

### Step 3: Generating Your First Text

The simplest use case is generating text from a prompt. The \`generateContent\` function is straightforward. It's an async function, so you'll need to use \`await\`.

\`\`\`typescript
async function run() {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: 'Write a four-line poem about code.',
  });

  const text = response.text;
  console.log(text);
}

run();
\`\`\`
Running this would give you a creative, AI-generated poem right in your console!

### Step 4: A More Practical Example: Summarization

In my Obsidian plugin, one key feature was summarizing long documents. Let's create a simplified function for that. We can provide more context to the model using a system instruction to guide its output.

\`\`\`typescript
async function summarizeText(textToSummarize: string): Promise<string> {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: \`Please summarize the following text:\n\n\${textToSummarize}\`,
    config: {
      systemInstruction: "You are an expert summarizer. Create a concise and clear summary of the provided text.",
    },
  });
  
  return response.text;
}

const myArticle = "Generative AI is a type of artificial intelligence technology that can produce various types of content, including text, imagery, audio, and synthetic data. [...]";
const summary = await summarizeText(myArticle);
console.log('AI-Generated Summary:', summary);
\`\`\`

This is just scratching the surface. The Gemini API can handle multi-turn conversations (chat), multimodal input (text and images), and structured data output. By following these simple steps, you can start building powerful AI-driven features into your own projects.
`
  },
  {
    slug: "evolutionary-algorithms-in-game-ai",
    title: "Evolutionary Algorithms in Game AI",
    summary: "Exploring how ES-HyperNEAT can be used to create evolving combat strategies in a Pokémon battle simulator.",
    date: "June 28, 2024",
    content: `
One of the most fascinating challenges in game development is creating AI that is not just challenging, but also surprising and adaptive. Scripted, predictable enemies are boring. What if an AI could learn and evolve its own strategies? For one of my favorite projects, a Pokémon battle simulator, I used evolutionary algorithms to achieve just that.

### What are Evolutionary Algorithms (EAs)?

In short, EAs are optimization techniques inspired by natural selection. You start with a "population" of random solutions to a problem. You test how "fit" each solution is, and the best ones get to "reproduce" (combine and mutate their traits) to create the next generation. Over many generations, the population evolves towards an optimal solution.

### The Problem: Predictable Pokémon Battles

In a game like Pokémon, the number of possible moves, switches, and strategies is enormous. A simple, hand-coded AI might just spam the most powerful attack. A better one might consider type advantages. But a truly great AI would learn nuanced strategies—like setting up status effects before attacking or predicting an opponent's switch.

### Our Solution: ES-HyperNEAT

For this project, I used a specific EA called **ES-HyperNEAT** (Evolving Substrate Hyper-NeuroEvolution of Augmenting Topologies). That's a mouthful, but the core idea is powerful:
- **NEAT:** It evolves not just the connections in a neural network, but its entire structure (topology). This allows complexity to emerge naturally.
- **HyperNEAT:** It indirectly encodes the network. Instead of describing every neuron and connection directly, it evolves a small network (a CPNN) that can "paint" a much larger network (the substrate) that acts as the Pokémon's "brain." This allows for sophisticated, patterned networks without a huge genetic blueprint.

### How It Worked in the Simulator

1.  **The "Genome":** Each AI in the population had a genome that defined its CPNN.
2.  **The "Brain":** The CPNN would generate a neural network that took the current battle state (HP, stats, active moves, opponent's Pokémon, etc.) as input and decided on the best action (which move to use, whether to switch).
3.  **The "Fitness Function":** We needed a way to score how well each AI performed. My fitness function rewarded dealing damage, knocking out opponent Pokémon, and surviving.
4.  **"Natural" Selection:** I'd pit the AIs against each other in battles. The winners were more likely to be selected as "parents" for the next generation. Their genomes were combined and slightly mutated, and the process repeated.

### The Incredible Results

The evolution was amazing to watch.
-   **Generation 1-10:** AIs mostly used their strongest attacks, with little strategy.
-   **Generation 50:** AIs started learning basic type effectiveness. A water type learned to favor water moves against a fire type.
-   **Generation 200:** More complex strategies appeared. Some AIs evolved to use status moves like "Thunder Wave" (paralysis) first to cripple faster opponents before attacking.
-   **Generation 500+:** Highly nuanced behaviors emerged, like switching out a Pokémon to a more favorable matchup, sometimes even predicting the opponent's move.

Using evolutionary algorithms like ES-HyperNEAT, we can create game AI that feels less like a script and more like a living, learning opponent. It's a powerful way to bring emergent behavior and endless replayability to games.
`
  },
];
