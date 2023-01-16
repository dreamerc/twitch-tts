import "./styles.css";

// Provide your token, username and channel. You can generate a token here:
// https://twitchtokengenerator.com
const username = undefined;
const token = undefined;
const channel = "dreamerc";

const { Chat } = window.TwitchJs;

const app = document.getElementById("app");

app.innerHTML = `
<h1>Twitch JS Browser Example</h1>
`;

function playSound(url) {
  audio = new Audio(url);
  audio.play();
}

const run = async () => {
  const chat = new Chat({
    username,
    token,
    log: { level: "warn" }
  });

  chat.on("*", (message) => {
    const time = new Date(message.timestamp).toTimeString();
    const event = message.event || message.command;
    const channel = message.channel;
    const msg = message.message || "";
    const tts = /!tts /;
    const command = msg.slice(5);

    app.innerHTML += `<div>${time} <strong>${event}</strong> ${channel} ${msg}</div>`;
    if (tts.test(msg))
    {
      app.innerHTML += `${msg} - ${command}`;
      playSound(`http://localhost:5002/api/tts?text=${command}`);
    }

  });

  await chat.connect();
  await chat.join(channel);
};

run();
