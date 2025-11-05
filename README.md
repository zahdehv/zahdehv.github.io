# Personal Portfolio Website

This is a modern, single-page personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Local Development

This project is set up to be built using Vite. To run it on your local machine, follow these steps:

1.  **Prerequisites:** Make sure you have [Node.js](https://nodejs.org/) (version 18 or higher) and npm installed.

2.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

3.  **Install Dependencies:**
    ```bash
    npm install
    ```

4.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    This will start a local development server, and you can view your portfolio in your web browser at `http://localhost:5173`. The server will automatically reload when you make changes to the code.

## Deployment to GitHub Pages

This repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the site to GitHub Pages whenever you push changes to the `main` branch.

### Initial Setup

To get the deployment working on your repository, you need to configure GitHub Pages once:

1.  **Navigate to Repository Settings:** Go to your repository on GitHub and click on the **"Settings"** tab.

2.  **Go to Pages:** In the left sidebar, click on **"Pages"**.

3.  **Configure Source:** Under the "Build and deployment" section, select **"GitHub Actions"** as the source.

4.  **(Optional) Configure `vite.config.ts`:** If your repository name is something other than `your-username.github.io`, you are deploying to a subpath. You must update the `base` property in `vite.config.ts` to match your repository name. For example, if your repository is named `portfolio`, you would change it to:
    ```ts
    // vite.config.ts
    export default defineConfig({
      plugins: [react()],
      base: '/portfolio/', // 👈 Update this
    })
    ```

After this initial setup, every push to the `main` branch will trigger the workflow, and your updated site will be live within a few minutes at `https://your-username.github.io/your-repo-name/`.

[placeholder until it works l]