const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const SUPPORTED_EXTENSIONS = [
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
];

function getAllImages(folder) {
  let results = [];

  const items = fs.readdirSync(folder, {
    withFileTypes: true,
  });

  for (const item of items) {
    const fullPath = path.join(folder, item.name);

    if (item.isDirectory()) {
      results = results.concat(
        getAllImages(fullPath)
      );
    } else {
      const ext = path
        .extname(item.name)
        .toLowerCase();

      if (
        SUPPORTED_EXTENSIONS.includes(ext)
      ) {
        results.push(fullPath);
      }
    }
  }

  return results;
}

async function processFolder(options) {

  const {
    inputFolder,
    outputFolder,
    width,
    quality,
    format,
  } = options;

  const images = getAllImages(
    inputFolder
  );

  let processed = 0;
  let skipped = 0;

  for (const imagePath of images) {

    try {

      const relativePath = path.relative(
        inputFolder,
        imagePath
      );

      const outputDir = path.join(
        outputFolder,
        path.dirname(relativePath)
      );

      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, {
          recursive: true,
        });
      }

      const metadata = await sharp(
        imagePath
      ).metadata();

      if (
        metadata.width <= width
      ) {
        skipped++;
        continue;
      }

      const fileName =
        path.parse(relativePath).name;

      const outputFile = path.join(
        outputDir,
        `${fileName}.${format}`
      );

      let pipeline = sharp(imagePath).resize({
        width,
        withoutEnlargement: true,
      });
      switch (format) {

        case "jpg":
        case "jpeg":
          pipeline = pipeline.jpeg({
            quality,
          });
          break;

        case "png":
          pipeline = pipeline.png({
            quality,
          });
          break;

        case "webp":
        default:
          pipeline = pipeline.webp({
            quality,
          });
          break;
      }

      await pipeline.toFile(outputFile);

      processed++;

    } catch (error) {

      console.error(
        "Image Processing Error:",
        imagePath,
        error
      );

    }

  }
  return {
    total: images.length,
    processed,
    skipped,
  };
}

module.exports = {
  processFolder,
};