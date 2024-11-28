import net from "net";

export function initialize(ips, port) {
  ips.forEach((ip) => {
    const client = new net.Socket();
    client.connect(port, ip, () => {
      console.log(`Connected to device at ${ip}:${port}`);
    });

    client.on("data", (data) => {
      console.log(`Data received from ${ip}: ${data}`);
    });

    client.on("error", (err) => {
      console.error(`Error with device ${ip}: ${err.message}`);
    });

    client.on("close", () => {
      console.log(`Connection to device ${ip} closed`);
    });
  });
}
