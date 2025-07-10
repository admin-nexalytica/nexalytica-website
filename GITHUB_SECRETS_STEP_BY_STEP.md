# Step-by-Step Guide to Add GitHub Secrets

## 1. Go to Your Repository Settings

1. Open your browser and go to: https://github.com/admin-nexalytica/nexalytica-website
2. Look for the **Settings** tab (it's in the row with Code, Issues, Pull requests, etc.)
3. Click on **Settings**

![Settings Tab Location](https://docs.github.com/assets/images/help/repository/repo-actions-settings.png)

## 2. Find Secrets Section

1. In the left sidebar, scroll down to the **Security** section
2. Click on **Secrets and variables**
3. Click on **Actions**

## 3. Add Your First Secret

1. Click the green button **New repository secret**
2. You'll see two fields:
   - **Name**: This must match EXACTLY what we use in the code
   - **Secret**: The actual value

### Add Secret #1:
- **Name**: `VITE_EMAILJS_PUBLIC_KEY`
- **Secret**: `01ZtMTCVOpJf1VrSh`
- Click **Add secret**

### Add Secret #2:
1. Click **New repository secret** again
- **Name**: `VITE_EMAILJS_SERVICE_ID`
- **Secret**: `service_e82m97e`
- Click **Add secret**

### Add Secret #3:
1. Click **New repository secret** again
- **Name**: `VITE_EMAILJS_TEMPLATE_ID`
- **Secret**: `template_utdpmkr`
- Click **Add secret**

## 4. Verify Your Secrets

After adding all three, you should see:
- VITE_EMAILJS_PUBLIC_KEY
- VITE_EMAILJS_SERVICE_ID
- VITE_EMAILJS_TEMPLATE_ID

Listed in your repository secrets (the values will be hidden with ****)

## 5. Trigger a New Deployment

1. Go back to your repository main page
2. Make a small change (like edit the README) or:
3. Go to **Actions** tab
4. Find your latest workflow run
5. Click **Re-run all jobs**

## What Happens Next

- GitHub Actions will now use these secrets during build
- Your production website will have the EmailJS functionality working
- The secrets are encrypted and never exposed in logs or code

## Important Notes

- Never share these secret values in public forums
- The secrets are only available during GitHub Actions builds
- They won't be visible in your deployed code (they're baked in during build)

## Troubleshooting

If it still doesn't work after adding secrets:
1. Check that the secret names match EXACTLY (case-sensitive)
2. Make sure there are no extra spaces before/after the values
3. Verify the workflow ran after you added the secrets