import express from "express";
import { initialize as initializeDevices } from "./deviceManager.js";
import { start as startServiceMonitor } from "./serviceMonitor.js";
import attendanceRoutes from "./routes/attendance.js";
import serviceRoutes from "./routes/service.js";
import errorHandler from "./middleware/errorHandler.js";
import "./database.js";
import config from "./config.json" assert { type: "json" };

const app = express();

app.use(express.json());

app.use("/attendance", attendanceRoutes);
app.use("/service", serviceRoutes);

app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  initializeDevices(config.device.ips, config.device.port);
  startServiceMonitor(config.service.monitorInterval);
});
