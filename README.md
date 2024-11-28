# Node.js Automatic Startup System

This project is a Node.js-based application designed to monitor services and interact with network devices. It includes automatic startup functionality on Windows, ensuring the application launches on system boot.

## Features

- Communicates with network devices via TCP/IP.
- Monitors service statuses at configurable intervals.
- Sends and receives data through REST APIs.
- Automatically starts when Windows boots.

## Prerequisites

1. **Node.js** (v14+ recommended, v20+ for ES modules support)
2. **npm** (installed with Node.js)
3. **Git** (optional, for cloning the repository)

## Installation

1. Clone the repository or download the source code:
   ```bash
   git clone https://github.com/cseswapon
   cd your-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `config.json` file in the project root with the following content:
   ```json
   {
     "device": {
       "ips": ["192.168.10.14", "192.168.10.10"],
       "port": 4370
     },
     "service": {
       "monitorInterval": 5
     },
     "api": {
       "serviceStatus": "http://your-api-url.com/status",
       "attendance": "http://your-api-url.com/attendance"
     },
     "jwtSecret": "your_secret_key"
   }
   ```

4. Test the application:
   ```bash
   node server.js
   ```

## Automatic Startup on Windows

To ensure the application runs on system startup:

### 1. Create a Batch File

- Create a `startApp.bat` file in the project directory with the following content:
  ```bat
  @echo off
  cd "C:\path\to\your\project"
  node server.js
  ```

### 2. Place a Shortcut in the Startup Folder

- Create a shortcut for the batch file.
- Move the shortcut to the Windows Startup folder:
  - Press `Win + R`, type `shell:startup`, and press **Enter**.

### 3. Optional - Use VBScript to Hide the Command Prompt

- Create a `startApp.vbs` file with this content:
  ```vbscript
  Set WshShell = CreateObject("WScript.Shell")
  WshShell.Run chr(34) & "C:\path\to\startApp.bat" & Chr(34), 0
  Set WshShell = Nothing
  ```
- Place the `startApp.vbs` in the Startup folder instead of the `.bat` file.

## API Endpoints

- **Service Status API**: Retrieves the current status of services.
- **Attendance API**: Processes attendance data from devices.

## Project Structure

```plaintext
your-project/
│
├── config.json            # Configuration file for IPs, ports, and APIs
├── server.js              # Entry point for the application
├── deviceManager.js       # Handles communication with network devices
├── serviceMonitor.js      # Periodically checks service statuses
├── routes/
│   ├── api.js             # API routes
│   └── device.js          # Device management routes
└── README.md              # Project documentation
```

## Usage

1. Start the application:
   ```bash
   node server.js
   ```

2. Access the application:
   - Open your browser and navigate to the relevant API endpoints.

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy coding! 🎉
```

---

This updated **README.md** file should be more structured and clear, with properly formatted sections. You can adjust the content further depending on your specific project needs!