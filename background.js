USER_ID = "";
WORKSPACE_ID = "";
API_TOKEN = "";

let currentTimer = null;

const config = {
  "youtube.com": {
    description: "Entertainment",
    projectId: "6603d26e0d5045194a66f182",
  },
  "facebook.com": {
    description: "Entertainment",
    projectId: "6603d26e0d5045194a66f182",
  },
  "whatsapp.com": {
    description: "Entertainment",
    projectId: "6603d26e0d5045194a66f182",
  },
  "telegram.org": {
    description: "Entertainment",
    projectId: "6603d26e0d5045194a66f182",
  },
  "instagram.com": {
    description: "Entertainment",
    projectId: "6603d26e0d5045194a66f182",
  },
  "open.spotify.com": {
    description: "Entertainment",
    projectId: "6603d26e0d5045194a66f182",
  },
  "gsmarena.com": {
    description: "Entertainment",
    projectId: "6603d26e0d5045194a66f182",
  },
  "imdb.com": {
    description: "Entertainment",
    projectId: "6603d26e0d5045194a66f182",
  },
  "discord.com": {
    description: "Entertainment",
    projectId: "6603d26e0d5045194a66f182",
  },
  "ebay.com": {
    description: "Entertainment",
    projectId: "6603d26e0d5045194a66f182",
  },
  "amazon.com": {
    description: "Entertainment",
    projectId: "6603d26e0d5045194a66f182",
  },
  "temu.com": {
    description: "Entertainment",
    projectId: "6603d26e0d5045194a66f182",
  },
  "tap.az": {
    description: "Entertainment",
    projectId: "6603d26e0d5045194a66f182",
  },
  "bina.az": {
    description: "Entertainment",
    projectId: "6603d26e0d5045194a66f182",
  },
  "turbo.az": {
    description: "Entertainment",
    projectId: "6603d26e0d5045194a66f182",
  },
  "lalafo.az": {
    description: "Entertainment",
    projectId: "6603d26e0d5045194a66f182",
  },
  "monkeytype.com": {
    description: "Entertainment",
    projectId: "6603d26e0d5045194a66f182",
  },
  "letterboxd.com": {
    description: "Entertainment",
    projectId: "6603d26e0d5045194a66f182",
  },
  "netflix.com": {
    description: "Entertainment",
    projectId: "6603d26e0d5045194a66f182",
  },
  "twitch.tv": {
    description: "Entertainment",
    projectId: "6603d26e0d5045194a66f182",
  },
  "linkedin.com": {
    description: "Self-Improvement",
    projectId: "6603d26e0d5045194a66f182",
  },

  "reddit.com": { description: "Hobby", projectId: "6603d1920b05cf5856292b01" },
  "chess.com": { description: "Hobby", projectId: "6603d1920b05cf5856292b01" },
  "lichess.org": {
    description: "Hobby",
    projectId: "6603d1920b05cf5856292b01",
  },
  "instructables.com": {
    description: "Hobby",
    projectId: "6603d1920b05cf5856292b01",
  },

  "psychologytoday.com": {
    description: "Psychology",
    projectId: "64f8577d70d77d39063babbc",
  },
  "quora.com": {
    description: "Psychology",
    projectId: "64f8577d70d77d39063babbc",
  },

  "coursera.org": {
    description: "Self-Improvement",
    projectId: "6890c643483c0267ceaee812",
  },
  "udemy.com": {
    description: "Self-Improvement",
    projectId: "6890c643483c0267ceaee812",
  },
  "ankiweb.net": {
    description: "Self-Improvement",
    projectId: "6890c643483c0267ceaee812",
  },
  "notion.so": {
    description: "Self-Improvement",
    projectId: "6890c643483c0267ceaee812",
  },
  "mindmeister.com": {
    description: "Self-Improvement",
    projectId: "6890c643483c0267ceaee812",
  },
  "clockify.me": {
    description: "Self-Improvement",
    projectId: "6890c643483c0267ceaee812",
  },
  "habitica.com": {
    description: "Self-Improvement",
    projectId: "6890c643483c0267ceaee812",
  },

  "github.com": {
    description: "Software Engineering",
    projectId: "64f8544cc6c0aa09b9693a9c",
  },
  "hackerrank.com": {
    description: "Software Engineering",
    projectId: "64f8544cc6c0aa09b9693a9c",
  },
  "leetcode.com": {
    description: "Software Engineering",
    projectId: "64f8544cc6c0aa09b9693a9c",
  },
  "datacamp.com": {
    description: "Software Engineering",
    projectId: "64f8544cc6c0aa09b9693a9c",
  },
  "freecodecamp.org": {
    description: "Software Engineering",
    projectId: "64f8544cc6c0aa09b9693a9c",
  },
  "stackoverflow.com": {
    description: "Software Engineering",
    projectId: "64f8544cc6c0aa09b9693a9c",
  },
  "dev.to": {
    description: "Software Engineering",
    projectId: "64f8544cc6c0aa09b9693a9c",
  },
  "medium.com": {
    description: "Psychology",
    projectId: "64f8544cc6c0aa09b9693a9c",
  },

  "chatgpt.com": {
    description: "Research and Development",
    projectId: "6890c80fc10576511c6018cf",
  },
  "wikipedia.com": {
    description: "Research and Development",
    projectId: "6890c80fc10576511c6018cf",
  },
  "gemini.google.com": {
    description: "Research and Development",
    projectId: "6890c80fc10576511c6018cf",
  },

  "espn.com": { description: "Sport", projectId: "660a76377288ae7525b6fcbc" },
  "transfermarkt.com": {
    description: "football",
    projectId: "660a76377288ae7525b6fcbc",
  },

  "tradingview.com": {
    description: "Finance",
    projectId: "6890c9bac1feda34debd966d",
  },
};

async function startTimer(description, projectId) {
  let time = new Date().toISOString();

  const res = await fetch(
    `https://api.clockify.me/api/v1/workspaces/${WORKSPACE_ID}/time-entries`,
    {
      method: "POST",
      headers: {
        "X-Api-Key": API_TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description,
        start: time,
        projectId, // 👈 MUST include this
      }),
    }
  );
  currentTimer = await res.json();
  currentTimer.start = time;
  console.log(currentTimer);
}

async function stopTimer() {
  const resp = await fetch(
    `https://api.clockify.me/api/v1/workspaces/${WORKSPACE_ID}/user/${USER_ID}/time-entries`,
    {
      method: "PATCH",
      headers: {
        "X-Api-Key": API_TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        end: new Date().toISOString(),
      }),
    }
  );
  console.log("Timer stopped:", await resp.json());

  currentTimer = null;
}

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);
  console.log("current tab:", tab);
  const domain = new URL(tab.url).hostname.replace("www.", "");
  console.log("current domain:", domain);
  console.log("config for domain:", config[domain]);
  if (config[domain]) {
    await stopTimer();
    await startTimer(config[domain].description, config[domain].projectId);
  } else {
    await stopTimer();
  }
});
