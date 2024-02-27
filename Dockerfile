# Sử dụng một image node.js với phiên bản bạn muốn
FROM node:18-alpine 

# Tạo thư mục app trong container
WORKDIR /app

# Sao chép file package.json vào thư mục app
COPY package.json .

# Cài đặt các dependencies
RUN npm install

# Sao chép tất cả các file trong thư mục hiện tại vào thư mục app
COPY . .

# Mở cổng mà ứng dụng của bạn chạy trên (chẳng hạn ở cổng 3000)
EXPOSE 3000

# Khởi chạy ứng dụng React khi container được khởi động
CMD ["npm", "run", "dev"]