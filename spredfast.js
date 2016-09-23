var Promise = require("bluebird");
// var request = require("request");
var request = Promise.promisify(require("request"));
const company_id = 305;
const env = "vpc1";
var jwt = "jwt-eyJhbGciOiJSUzUxMiJ9.eyJzdWIiOiIzNTEiLCJleHAiOjE1Mzc0Njk3NTAsImNsaWVudF9pZCI6IlRWanpWbVVTRFpGVmRTcFVpS0JzUVlJQXpUcnZWY1ViIiwiY29tcGFueV9pZHMiOiI3LDIwODUxLDIwMzM2LDU5MzUsMjAwLDQ1LDUyMjAsNjE2Myw1NjE5LDIwNjg1LDc3MywzNDMsNjc4OSw2MjA1LDMyMCwxNzQ1Nyw1OTc5IiwidHlwZSI6InRva2VuIn0.i99g34tsMz-f9E9EQ7P3wqgErXy2j7tpoHiX-2f0dx2E04bDbyIEghON8o8t3Jn1vmqza-3sXPsAz2OMcKcDh6BBVt1fPileo52ev-QsW42w4N7FrZ0_osmVblTRWuCq32exgMRIOpdYehvNU8n0Mrr0S3PbZxT-ohxm-5g_wJ2wZgHf_7vT_BbBsyf8bK9wtz8h8XbC5myaI5MYs2ZKy1k-mB6iE2_ABa9YgEEEjjwGYSU6FH6KySGLNihTNvFTA8KnJ4kQ0uDTFWsj9SR4ND09HAps_eOSj8qvWKj83MEU4rqDX2plPUe0h9jNK30LOygZ8n-2n09MoQeP9yKq7NOV9saiq8XP4J3lpX2EdVUedij2x61jOPYw5ib_ntbzaO2j0Lx-iL-2nNCuSLUAMV7GY17G4Ie6S2ZwWH45C-1ali4O6uoXebY1PI23wJLBxv_cK4EWFJcGm-dow0TtPWU4XSyckZjK-ztmXsUaLl7R7blCE49KJU2yh04UE7OL";

module.exports = function(endpoint){
    var options = {
        baseUrl: "https://api.spredfast.com/"+env+"/v1/company/"+company_id,
        headers: {
            "Authorization": "Bearer " + jwt
        }
    };
    options.uri = endpoint;
    return request.getAsync(options);
};