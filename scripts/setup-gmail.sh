#!/bin/bash

echo "Gmail App Password Setup Guide"
echo "----------------------------"
echo "Follow these steps to set up your Gmail App Password:"
echo ""
echo "1. Go to your Google Account settings (https://myaccount.google.com/)"
echo "2. Click on 'Security' in the left navigation"
echo "3. Under 'Signing in to Google', make sure 2-Step Verification is enabled"
echo "4. Go back to Security and click on 'App passwords'"
echo "5. Select 'Other' from the dropdown and name it 'Portfolio Contact Form'"
echo "6. Click 'Generate'"
echo "7. Copy the generated password"
echo ""
echo "Enter your generated App Password:"
read -s app_password
echo ""

# Update .env.local file
sed -i "s/GMAIL_APP_PASSWORD=.*/GMAIL_APP_PASSWORD=$app_password/" .env.local

echo "App password has been updated in .env.local"
echo ""
echo "To test the configuration, try sending a test email through your contact form."