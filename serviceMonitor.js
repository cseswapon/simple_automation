import fetch from "node-fetch";
import config from "./config.json" assert { type: "json" };

async function checkServiceStatus() {
  try {
    const res = await fetch(config.api.serviceStatus);
    const data = await res.json();
    console.log("Service Status:", data);
  } catch (err) {
    console.error("Error checking service status:", err.message);
  }
}

export function start(interval) {
  setInterval(checkServiceStatus, interval * 60 * 1000);
}
