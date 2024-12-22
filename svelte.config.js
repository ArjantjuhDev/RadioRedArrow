import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	}
};

export default config;

/*
 This is the configuration file for SvelteKit. It tells SvelteKit to use the Vercel adapter.
 Deploy to Vercel
 Now that we have set up our project, we can deploy it to Vercel.
 First, we need to commit our changes to Git.
 git add .
 git commit -m "Initial commit"
 git push origin main

 Next, we need to deloy on Vercel.
 Terminal: vercel
 1. Set up end Deploy. (y)
 2. Which scope do you want to deploy to? (Use arrow keys)
 3. Link to an existing project. (n)
 4. What’s your project’s name? (sveltekit-vercel)
 5. In which directory is your code located? (./build)
 */
