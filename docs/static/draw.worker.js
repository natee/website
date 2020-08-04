// 根据rgb值计算灰度
function getGray(r, g, b) {
  return 0.299 * r + 0.578 * g + 0.114 * b;
}

/**
 * 根据灰度返回一个灰度rgb及转成字符对应的char
 * @param {number} gray {0, 255}
 * @param {number} colorMode 0:纯色 1:阶梯色
 */
function getFillChar(gray, colorMode) {
  let r, g, b;
  let char;
  if (colorMode === 0) {
    return {
      r: 0,
      g: 0,
      b: 0,
      char: "#",
    };
  }

  if (gray <= 30) {
    r = g = b = 30;
    char = "#";
  } else if (gray > 30 && gray <= 60) {
    r = g = b = 45;
    char = "&";
  } else if (gray > 60 && gray <= 120) {
    r = g = b = 90;
    char = "$";
  } else if (gray > 120 && gray <= 150) {
    r = g = b = 135;
    char = "*";
  } else if (gray > 150 && gray <= 180) {
    r = g = b = 165;
    char = "o";
  } else if (gray > 180 && gray <= 210) {
    r = g = b = 205;
    char = "!";
  } else if (gray > 210 && gray <= 240) {
    r = g = b = 225;
    char = ";";
  } else {
    r = g = b = 255;
    char = " ";
  }
  return {
    r,
    g,
    b,
    char,
  };
}

function errorReceiver(event) {
  throw event.data;
}

onmessage = function(event) {
  const { img, size, option} = event.data;
  const { data: arr, width, height } = img;

  const threads = Math.ceil(arr.length / 5e5);
  console.log("draw.worker.js:", threads);

  for (let i = 0; i < height; i += size) {
    for (let j = 0; j < width; j += size) {
      const isCovered = isCover(arr, width, i, j, size);
      drawPoints(arr, width, i, j, isCovered, option);
    }
  }

  postMessage(img)

  return;

  for (let i = 0; i < threads; i++) {
    let worker = new Worker("draw.worker.js");

    worker.onmessage = converBlock;
    worker.onerror = errorReceiver;
    worker.postMessage(i);
  }
};

function converBlock(event) {
  for (let i = 0; i < height; i += size) {
    for (let j = 0; j < width; j += size) {
      const isCovered = isCover(uint8ClampedArray, width, i, j, size);
      drawPoints(uint8ClampedArray, width, i, j, isCovered, option);
    }
  }
}

/**
 * 判断像素块是否空白or像素覆盖
 * @param {*} arr
 * @param {*} width
 * @param {*} x1
 * @param {*} y1
 * @param {*} size
 */
function isCover(arr, width, x1, y1, size) {
  // 这里我们定义点阵大小为 size * size

  const x2 = x1 + size;
  const y2 = y1 + size;
  const size2 = 0.5 * size;
  const totalPixel = size * size;
  let covered = 0;

  for (let i = x1; i < x2; i++) {
    for (let j = y1; j < y2; j++) {
      let idx = (i * width + j) * 4;
      // 阈值设为192
      if (
        arr[idx] < 192 ||
        arr[idx + 1] < 192 ||
        arr[idx + 2] < 192
      ) {
        covered++;
      }

      // 70% 像素点颜色过深，表示需填充像素点
      if (covered / totalPixel > 0.7) {
        return true;
      }
    }
  }
  return false;
}

// 填充像素块
function drawPoints(arr, width, x, y, isFill, option) {
  const { opacity, size, colorMode } = option;
  const size1 = 0.25 * size;
  const size2 = 0.5 * size;
  const size3 = 0.75 * size;

  /**
    一个点阵划分为田字格
   */
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      let idx = (i * width + j) * 4;
      // 填充田字格中间区域为灰色
      if (
        i >= x + size1 &&
        i < x + size3 &&
        j >= y + size1 &&
        j < y + size3 &&
        isFill
      ) {
        let gray = getGray(arr[idx], arr[idx + 1], arr[idx + 2]);
        const { r, g, b } = getFillChar(gray, colorMode);

        // 画小方块
        arr[idx] = r;
        arr[idx + 1] = g;
        arr[idx + 2] = b;
        arr[idx + 3] = option.opacity * 255;
      } else {
        // 置为透明
        // arr[idx] = globalOption.color.r;
        arr[idx] = 0;
        arr[idx + 1] = 0;
        arr[idx + 2] = 0;
        arr[idx + 3] = 0;
      }
    }
  }
  return arr;
}
