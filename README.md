To install

    npm install
    
To run the app you can configure the config.json with you company id, a valid token, and login environment [app3, vpc1, production],
or you can supply it as environment variables to your startup script (recommended)

    export sfJwt=your_token && export sfCompany=your_company_id && export sfEnv=login_environment && node bin/www

To start the node server (port 3000):

    node bin/www

The app will provide you with a few routes

* /report/list - To get a list of all the available reports.
* /report/download/:report_name - Endpoints for downloading each report with the Tableau scripts and callbacks setup.
* /report/retrieve/:report_name - Endpoints to load the raw JSON for XHR.
* /report/retrieve/:report_name?format=csv - Endpoint to download the raw CSV should you want it.
* /oauth/token - Start the OAuth process.
* /oauth/code - Exchange your temp token for a bearer token.


----

This software is licensed under the The MIT License (MIT)
Copyright &copy; 2016 Spredfast

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.