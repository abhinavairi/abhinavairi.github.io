Personal Portfolio (React + TypeScript)

This is a minimal React + TypeScript portfolio scaffold.

Setup
1. Copy your resume PDF to the public folder as "resume.pdf":
   cp ../Resume_Abhinav_Airi.pdf public/resume.pdf

2. Install dependencies and run the dev server:
   npm install
   npm run dev

Build
   npm run build
   npm run preview

Notes
- The embedded resume expects the file at /resume.pdf (public/resume.pdf).
- Edit content in `src/components` to update About, Projects and Contact.

Custom Domain
-------------
This site is deployed via GitHub Pages. To use a custom domain (e.g. abhinavairi.dev):

1. Buy a domain
   - Purchase a domain from a registrar such as Namecheap, Google Domains / Squarespace Domains,
     GoDaddy, or Cloudflare Registrar.

2. Update the CNAME file
   - Create a file public/CNAME and set its contents to your domain:
       your-domain.com
   - Commit and push the change. The build pipeline copies this file into the dist/ folder
     automatically, so GitHub Pages will pick it up on the next deploy.

3. Configure DNS at your registrar
   For an apex domain (e.g. example.com), add four A records pointing to GitHub Pages IPs:
       185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
   For a www subdomain (e.g. www.example.com), add a CNAME record pointing to:
       your-username.github.io

4. Enable the custom domain in GitHub repository settings
   - Go to Settings → Pages in this repository.
   - Under "Custom domain", enter your domain and click Save.
   - Check "Enforce HTTPS" once the TLS certificate has been provisioned (usually a few minutes).

For full details see: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
