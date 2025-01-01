// Fonction pour récupérer les données depuis le fichier JSON
async function fetchRecommendations() {
    try {
      const response = await fetch('voyage_au_bénin.api.json'); // Chemin du fichier JSON
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des données');
      }
      const data = await response.json(); // Conversion des données en format JSON
      displayRecommendations(data); // Appel de la fonction pour afficher les recommandations
    } catch (error) {
      console.error('Erreur :', error);
    }
  }
  
  // Fonction pour afficher les recommandations sur la page
  function displayRecommendations(recommendations) {
    const resultContainer = document.getElementById('results'); // Conteneur des résultats
    resultContainer.innerHTML = ''; // Vider le conteneur avant d'afficher de nouvelles données
  
    recommendations.forEach(recommendation => {
      // Créer un élément de carte pour chaque recommandation
      const card = document.createElement('div');
      card.className = 'recommendation-card';
  
      card.innerHTML = `
        <img src="${recommendation.imageUrl}" alt="${recommendation.name}" class="recommendation-image">
        <h3>${recommendation.name}</h3>
        <p>${recommendation.description}</p>
      `;
  
      resultContainer.appendChild(card); // Ajouter la carte au conteneur
    });
  }
  
  // Charger les recommandations au chargement de la page
  window.onload = fetchRecommendations;
  