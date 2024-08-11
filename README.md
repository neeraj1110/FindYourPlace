
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
