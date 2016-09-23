To install

    npm install
    
To run the app you can configure the config.json with you company id, a valid token, and login environment [app3, vpc1, production],
or you can supply it as environment variables to your startup script (recommended)

    node bin/www sfJwt=your_token;sfCompany=your_company_id;sfEnv=login_environment