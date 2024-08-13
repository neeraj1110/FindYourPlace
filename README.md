
npm create vite@latest client
npm i

for .env
npm i dotenv
dotenv.config();

best practice is to make seprate folder for routes

router.get("/test", (req, res) => {
  res.send("JI");
});
is function ko bhi seprate folder me likhna chahiye known as controllers
(req, res) => {
  res.send("JI");
}

in signup page functionality
when i clicked on submit button it was not creating the user in mongodb
because of address it was using is at port 5173, and we want it to be at 3000
for this we have to -
in vite.config.js
 server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        secure: false,
      },
    },
  },
  we have added proxy
  This configuration in vite.config.js sets up a development server proxy. Here's what it means:

server.proxy: Configures a proxy for the development server.
/api: The path that you want to proxy. Any request that starts with /api will be forwarded.
target: "http://localhost:3000": Specifies the target server to which requests should be proxied. In this case, requests to /api will be forwarded to http://localhost:3000.
secure: false: Indicates that the proxy should not verify the SSL certificate of the target server. This is useful if the target server is using a self-signed certificate.
In summary, this setup allows you to make API requests to /api on your Vite development server, and those requests will be forwarded to a backend running on http://localhost:3000.



authentication (for like, if user change its password then it must be authenticated user)
npm i jsonwebtoken
token -> id and secret key
now save this token to cookie


