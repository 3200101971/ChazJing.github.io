@echo off
chcp 65001 >nul
title ChazJing 网站本地构建
cd /d "%~dp0"

echo ============================================
echo   ChazJing 网站本地构建脚本
echo ============================================
echo.
echo [1/2] 安装依赖首次运行较慢，请耐心等待...
call bundle install
if errorlevel 1 (
    echo.
    echo [X] 依赖安装失败。请确认已安装 Ruby+DevKit
    echo     下载地址: https://rubyinstaller.org/downloads/
    pause
    exit /b 1
)

echo.
echo [2/2] 构建静态网站到 _site 目录...
call bundle exec jekyll build
if errorlevel 1 (
    echo.
    echo [X] 构建失败，请查看上方错误信息
    pause
    exit /b 1
)

echo.
echo ============================================
echo   构建成功
echo   静态文件位于: %~dp0_site
echo   把 _site 目录里的所有文件上传到服务器
echo   Nginx 的网站根目录即可
echo ============================================
pause
