#!/bin/bash

# Cài đặt dependencies
npm install

# Đảm bảo _routes.json được sao chép vào thư mục out
mkdir -p out
cp public/_routes.json out/ 2>/dev/null || :

# Build Next.js app
npm run build

# Sao chép các file cần thiết vào thư mục out
cp public/robots.txt out/ 2>/dev/null || :
cp public/sitemap.xml out/ 2>/dev/null || :
cp public/manifest.json out/ 2>/dev/null || :

# Cloudflare Pages sẽ tự động deploy nội dung từ thư mục out
