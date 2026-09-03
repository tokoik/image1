# image1 - GLSL による画像の幾何学的変形（ワーピング）

## 1. 概要

本プログラムは、GLSL フラグメントシェーダを用いて、画像座標系のワーピング（歪曲収差補正、魚眼風歪み、回転、引き伸ばし等）をリアルタイムに計算・表示するサンプルプログラムです。

- 移行元ブログ記事:
  - [GLSL による画像の幾何変換 - 床井研究室](https://tokoik.github.io/blog/2014-08-01.html)

## 2. 対応環境

- **Windows**: Visual Studio 2019 / 2022 / 2026 (CMake 経由で GLFW および OpenCV 4.13.0 を自動構成)
- **macOS**: Xcode (GLFW 自動ダウンロード、OpenCV を使用)
- **Ubuntu Linux**: GCC / Make (システム標準の libglfw3-dev, libopencv-dev, libgl1-mesa-dev を使用)

## 3. ビルド手順

### Windows (Visual Studio)

```pwsh
cmake -B build -S .
cmake --build build --config Release
```

### macOS (Xcode)

```bash
brew install opencv
cmake -B build -G Xcode
cmake --build build --config Release
```

### Ubuntu Linux (Makefile)

```bash
sudo apt-get update
sudo apt-get install -y libglfw3-dev libgl1-mesa-dev libopencv-dev
cmake -B build -S .
cmake --build build
```

## 4. 起動方法

ビルド完了後、生成された実行ファイルを実行します。

- **Windows**: `build/Release/image1.exe`
- **macOS**: `build/Release/image1.app`
- **Linux**: `build/image1`

## 5. 操作方法

- **マウスドラッグ**: ワーピングパラメータの操作
- **[q] / [Q] / [ESC]**: プログラムの終了

## 6. プログラムの解説

`warp.frag` 内でサンプリング座標を極座標変換や非線形変換によってマッピングし直すことで、画像の幾何学的変形を高速に行っています。
