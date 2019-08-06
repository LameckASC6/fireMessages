const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click", updateDB);

//Set database object here
const database = firebase.database().ref();

/**
 * Updates the database with the username and message.
 */
function updateDB(event) {
    event.preventDefault();
    const username = usernameElement.value;
    const message = messageElement.value;
    console.log(username + " : " + message);

    usernameElement.value = "";
    messageElement.value = "";

    const value = {
        Name: username,
        Message: message
    }
    //Update database here
    database.push(value);
}

// Set database "child_added" event listener here

database.on('child_added', addMessage);

function addMessage(data) {
    const messageContainer = document.querySelector(".allMessages");

    console.log(data.val());
    const row = data.val();
    const name = row.Name
    const message = row.Message

    const p = document.createElement('p')
    p.innerText = `${name}: ${message}`;
    messageContainer.appendChild(p);

}