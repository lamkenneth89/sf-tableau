To install

    npm install
    
To run the app you can configure the config.json with you company id, a valid token, and login environment [app3, vpc1, production],
or you can supply it as environment variables to your startup script (recommended)

    export sfJwt=your_token && export sfCompany=your_company_id && export sfEnv=login_environment && node bin/www