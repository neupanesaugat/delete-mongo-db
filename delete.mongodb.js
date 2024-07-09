use("kec-crud");

//? delete movie whose name is "Glee"

// db.movies.deleteOne({ name: "Glee" });

db.movies.find({ name: "Glee" });
