const fastify = require('fastify');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/noteRoutes');

//initialized Fastify App
const app = fastify();

//connected fastify to mongoose
try {
  mongoose.connect(
    "mongodb+srv://admin:Viraj%401998@cluster0.ntwxo.mongodb.net/notes_db",
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  );
} catch (e) {
  console.error(e);
}

noteRoutes(app);

//handle root route
app.get('/', (request, reply) => {
  try {
    reply.send("Hello world!");
  } catch (e) {
    console.error(e);
  }
})

//set application listening on port 5000 of localhost
app.listen(5000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running on ${address}`);
});