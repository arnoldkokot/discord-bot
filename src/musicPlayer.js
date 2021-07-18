const global = [];

function saveConnection(connection) {
  global.push(connection);
}

function getConnection(id) {
  console.log(`Alive connections: ${global.length}`);
  return global.find(({ channel }) => channel.guild.id == id);
}

function deleteConnection(id) {
  global.splice(
    global.findIndex(({ channel }) => channel.guild.id === id),
    1
  );
}

export { saveConnection, getConnection, deleteConnection };
