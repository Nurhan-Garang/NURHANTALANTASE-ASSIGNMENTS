
const colorPicker = document.getElementById('colorPicker');
const applyBtn = document.getElementById('applyBtn');
const previewBox = document.querySelector('.preview-box');
const hoverText = document.querySelector('.hover-text');
const toggleImageBtn = document.getElementById('toggleImageBtn');
const decorImage = document.getElementById('decorImage');


applyBtn.addEventListener('click', () => {
  const color = colorPicker.value;
  previewBox.style.backgroundColor = color;
});


colorPicker.addEventListener('input', () => {
  console.log('Selected Color:', colorPicker.value);
});


hoverText.addEventListener('mouseover', () => {
  hoverText.textContent = ' Surprise! You hovered!';
});

hoverText.addEventListener('mouseout', () => {
  hoverText.textContent = 'Hover over me for a surprise!';
});


toggleImageBtn.addEventListener('click', () => {
  if (decorImage.style.display === 'none') {
    decorImage.style.display = 'block';
    toggleImageBtn.textContent = 'Hide Image';
  } else {
    decorImage.style.display = 'none';
    toggleImageBtn.textContent = 'Show Image';
  }
});
