module.exports = {
  async up(db, client) {
    console.log("Running Migration: Adding name_email field...");
    
    await db.collection("users").updateMany(
      {}, 
      [
        {
          $set: {
            name_email: { $concat: ["$name", "_", "$email"] }
          }
        }
      ]
    );

    console.log("Migration Completed: name_email field added.");
  },

  async down(db, client) {
    console.log("Rolling Back Migration: Removing name_email field...");

    await db.collection("users").updateMany(
      {}, 
      { $unset: { name_email: "" } }
    );

    console.log("Rollback Completed: name_email field removed.");
  },
};
