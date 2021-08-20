

function displayname() {
    var submit = document.getElementById("submit");
    let name = document.getElementById("name"); 
    document.write(`hello ${JSON.stringify(name)}`);
}

/**function printname(name) {
    let name;
  
    let message = `Hello ${JSON.stringify(name)}`;
    console.log(message);
    return message;
  }**/