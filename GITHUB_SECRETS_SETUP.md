# GitHub Secrets Setup for EmailJS

## Add Environment Variables to GitHub Secrets

1. Go to your GitHub repository
2. Click on **Settings** → **Secrets and variables** → **Actions**
3. Add the following secrets:

   - **VITE_EMAILJS_PUBLIC_KEY**: `01ZtMTCVOpJf1VrSh`
   - **VITE_EMAILJS_SERVICE_ID**: `service_e82m97e`
   - **VITE_EMAILJS_TEMPLATE_ID**: `template_utdpmkr`

## Update GitHub Actions Workflow

Your GitHub Actions workflow needs to pass these secrets as environment variables during the build process. The workflow file should include:

```yaml
- name: Build project
  env:
    VITE_EMAILJS_PUBLIC_KEY: ${{ secrets.VITE_EMAILJS_PUBLIC_KEY }}
    VITE_EMAILJS_SERVICE_ID: ${{ secrets.VITE_EMAILJS_SERVICE_ID }}
    VITE_EMAILJS_TEMPLATE_ID: ${{ secrets.VITE_EMAILJS_TEMPLATE_ID }}
  run: npm run build
```

## Security Note

Never commit the `.env` file with actual credentials to your repository. The `.gitignore` already excludes it.