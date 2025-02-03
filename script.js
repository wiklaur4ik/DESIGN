// Initialize Fabric.js canvas
const canvas = new fabric.Canvas('tshirt-canvas');

// Load t-shirt image
fabric.Image.fromURL('https://via.placeholder.com/500x600', (img) => {
  img.scaleToWidth(500);
  canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
});

// Handle image upload
document.getElementById('image-upload').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      fabric.Image.fromURL(event.target.result, (img) => {
        img.scaleToWidth(100); // Adjust size as needed
        canvas.add(img);
      });
    };
    reader.readAsDataURL(file);
  }
});

// Reset design
document.getElementById('reset-btn').addEventListener('click', () => {
  canvas.clear();
  // Reload t-shirt image
  fabric.Image.fromURL('https://via.placeholder.com/500x600', (img) => {
    img.scaleToWidth(500);
    canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
  });
});