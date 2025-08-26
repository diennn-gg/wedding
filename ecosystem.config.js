module.exports = {
  apps: [
    {
      name: "wedding",              // Tên app hiển thị trong pm2 list
      script: "./server.js",        // File chạy Node
      instances: 1,                 // Số instance (1 = single, "max" = cluster mode)
      autorestart: true,            // Tự restart khi crash
      watch: false,                 // Theo dõi file để reload (false = tắt)
      max_memory_restart: "200M",   // Restart nếu vượt 200MB RAM
      env: {
        NODE_ENV: "development",
        PORT: 3000
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
