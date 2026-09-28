let treeCount = 0;

function plantTree() {
  treeCount++;
  document.getElementById('treeCount').textContent = treeCount;
  document.getElementById('forestDisplay').textContent = '🌲'.repeat(treeCount);
}

function resetTrees() {
  treeCount = 0;
  document.getElementById('treeCount').textContent = treeCount;
  document.getElementById('forestDisplay').textContent = '';
}

document.getElementById('feedbackForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('popupOverlay').style.display = 'block';
  this.reset();
});

function closePopup() {
  document.getElementById('popupOverlay').style.display = 'none';
}