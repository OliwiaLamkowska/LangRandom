const words = [
    {
      word: "przyswajać",
      translation: "засвоювати",
      definition: "Przyjmować i utrwalać nowe informacje lub umiejętności.",
      example: "Uczniowie szybko przyswajają nowy materiał."
    },
    {
      word: "nadrzędny",
      translation: "вищий",
      definition: "Mający wyższy priorytet lub znaczenie w hierarchii.",
      example: "Bezpieczeństwo pacjenta jest nadrzędnym celem lekarza."
    },
    {
      word: "przewidywalny",
      translation: "передбачуваний",
      definition: "Taki, którego zachowanie można łatwo przewidzieć.",
      example: "Jego reakcje są zawsze przewidywalne."
    }
  ];
  
  function drawWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const word = words[randomIndex];
    const wordBox = document.getElementById("wordBox");
  
    wordBox.innerHTML = `
      <p><strong>Słowo:</strong> ${word.word}</p>
      <p><strong>Tłumaczenie (UA):</strong> ${word.translation}</p>
      <p><strong>Definicja:</strong> ${word.definition}</p>
      <p><strong>Przykład:</strong> ${word.example}</p>
    `;
  }
  function updateBackground() {
    const nativeLang = document.getElementById("nativeLang").value;
    const targetLang = document.getElementById("targetLang").value;
  
    const body = document.body;
    body.style.backgroundImage = `
      url('grafiki/flaga-${nativeLang}.png'),
      url('grafiki/herb-${targetLang}.png'),
      url('grafiki/symbol-${targetLang}.png')
    `;
    body.style.backgroundSize = 'cover';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundPosition = 'center';
  }
  