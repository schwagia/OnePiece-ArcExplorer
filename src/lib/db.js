import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("OnePiece"); // select database

//////////////////////////////////////////
// Sagas
//////////////////////////////////////////

// Get all sagas
async function getSagas() {
  let sagas = [];
  try {
    const collection = db.collection("Saga");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    sagas = await collection.find(query).toArray();
    sagas.forEach((saga) => {
      saga._id = saga._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return sagas;
}

// Get saga by id
async function getSaga(id) {
  let saga = null;
  try {
    const collection = db.collection("Saga");
    const query = { _id: new ObjectId(id) }; // filter by id
    saga = await collection.findOne(query);

    if (!saga) {
      console.log("No saga with id " + id);
      // TODO: errorhandling
    } else {
      saga._id = saga._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return saga;
}

// create saga
// Example saga object:
/* 
{ 
  title: "East Blue Saga",
  start_year: 1999,
  end_year: 2000,
  episode_count: 61
} 
*/
async function createSaga(saga) {
  saga.poster_path = "/images/placeholder.jpg"; // default poster
  saga.arcs = [];
  saga.characters = [];
  saga.islands = [];
  try {
    const collection = db.collection("Saga");
    const result = await collection.insertOne(saga);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// update saga
// Example saga object:
/* 
{ 
  _id: "6630e72c95e12055f661ff13",
  title: "East Blue Saga",
  start_year: 1999,
  end_year: 2000,
  episode_count: 61,
  arcs: [...],
  characters: [...],
  poster_path: "/images/saga_east_blue.png"
} 
*/
// returns: id of the updated saga or null, if saga could not be updated
async function updateSaga(saga) {
  try {
    let id = saga._id;
    delete saga._id; // delete the _id from the object, because the _id cannot be updated
    const collection = db.collection("Saga");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: saga });

    if (result.matchedCount === 0) {
      console.log("No saga with id " + id);
      // TODO: errorhandling
    } else {
      console.log("Saga with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// delete saga by id
// returns: id of the deleted saga or null, if saga could not be deleted
async function deleteSaga(id) {
  try {
    const collection = db.collection("Saga");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No saga with id " + id);
    } else {
      console.log("Saga with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// Get all characters
async function getCharacters() {
  let characters = [];
  try {
    const collection = db.collection("Characters");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    characters = await collection.find(query).toArray();
    characters.forEach((character) => {
      character._id = character._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return characters;
}

// Get character by id
async function getCharacter(id) {
  let character = null;
  try {
    const collection = db.collection("Characters");
    const query = { _id: new ObjectId(id) }; // filter by id
    character = await collection.findOne(query);

    if (!character) {
      console.log("No character with id " + id);
      // TODO: errorhandling
    } else {
      character._id = character._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return character;
}

// create character
// Example character object:
/* 
{ 
  name: "Monkey D. Luffy",
  origin: "East Blue"
} 
*/
async function createCharacter(character) {
  character.poster_path = "/images/placeholder.jpg"; // default poster
  character.sagas = [];
  character.arcs = [];
  character.islands = [];
  try {
    const collection = db.collection("Characters");
    const result = await collection.insertOne(character);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// update character
// Example character object:
/* 
{ 
  _id: "6630e72c95e12055f661ff13",
  name: "Monkey D. Luffy",
  origin: "East Blue",
  sagas: [...],
  arcs: [...],
  islands: [...],
  poster_path: "/images/luffy.png"
} 
*/
// returns: id of the updated character or null, if character could not be updated
async function updateCharacter(character) {
  try {
    let id = character._id;
    delete character._id; // delete the _id from the object, because the _id cannot be updated
    const collection = db.collection("Characters");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: character });

    if (result.matchedCount === 0) {
      console.log("No character with id " + id);
      // TODO: errorhandling
    } else {
      console.log("Character with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// delete character by id
// returns: id of the deleted character or null, if character could not be deleted
async function deleteCharacter(id) {
  try {
    const collection = db.collection("Characters");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No character with id " + id);
    } else {
      console.log("Character with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// export all functions so that they can be used in other files
export default {
  getSagas,
  getSaga,
  createSaga,
  updateSaga,
  deleteSaga,
  getCharacters,
  getCharacter,
  createCharacter,
  updateCharacter,
  deleteCharacter,
};
