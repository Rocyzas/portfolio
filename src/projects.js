const projects = [];

fetch('https://api.github.com/users/Rocyzas/repos')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    data.forEach(repo => {
      projects.push({
        name: repo.name,
        description: repo.description || 'No description available',
        stack: ['React', 'JavaScript', 'CSS'],
        sourceCode: repo.html_url,
        livePreview: repo.homepage || 'No live preview',
      });
    });
  })
  .catch(error => {
    console.error('Error fetching repositories:', error);
  });

export { projects };
