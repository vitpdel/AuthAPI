import  {   DataSource  }   from    "typeorm"
import  ConnectDB from    "./database/connect"

const   db  =   new ConnectDB

// Config
export  const   AppDataSource   =   new DataSource({
    type:   "mongodb",
    host:     "[::1]",
    port:   3306,
    username: db.username,
    password:   db.username,
    database: "usersDB",
    migrations: ["./database/migrations/1662401892227-CreateUsers.ts"],
    migrationsTableName: "CreateUsers"
})


AppDataSource.initialize()
    .then(()=>{
        console.log("Data Source initialized.")
    })
    .catch((error) => {
        console.error(`Error during Data Source initialization: ${error}`)
    })

