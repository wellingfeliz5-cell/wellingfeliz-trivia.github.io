// --- 100 Preguntas de Cultura General (Mantenemos las mismas 100 preguntas) ---
const questions = [
    // --- Bloque 1: General (1-10) ---
    {
        question: "¿Cuál es el río más largo del mundo?",
        options: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
        answer: "Nilo"
    },
    {
        question: "¿Quién pintó la 'Mona Lisa'?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "¿En qué año llegó el hombre a la Luna?",
        options: ["1969", "1965", "1972", "1970"],
        answer: "1969"
    },
    {
        question: "¿Cuál es la capital de Australia?",
        options: ["Sídney", "Melbourne", "Canberra", "Brisbane"],
        answer: "Canberra"
    },
    {
        question: "¿Cuántos lados tiene un heptágono?",
        options: ["Seis", "Ocho", "Siete", "Nueve"],
        answer: "Siete"
    },
    {
        question: "¿Cuál es el elemento químico más abundante en la corteza terrestre?",
        options: ["Silicio", "Hierro", "Aluminio", "Oxígeno"],
        answer: "Oxígeno"
    },
    {
        question: "¿Quién escribió 'Cien años de soledad'?",
        options: ["Mario Vargas Llosa", "Gabriel García Márquez", "Jorge Luis Borges", "Isabel Allende"],
        answer: "Gabriel García Márquez"
    },
    {
        question: "¿Qué país es conocido como la 'Tierra del Sol Naciente'?",
        options: ["China", "Corea del Sur", "Japón", "Vietnam"],
        answer: "Japón"
    },
    {
        question: "¿Cuál es el metal más caro del mundo?",
        options: ["Oro", "Platino", "Rodio", "Paladio"],
        answer: "Rodio"
    },
    {
        question: "¿Cuántos huesos tiene el cuerpo humano adulto?",
        options: ["206", "200", "300", "212"],
        answer: "206"
    },
    
    // --- Bloque 2: Ciencia y Geografía (11-20) ---
    {
        question: "¿Cuál es el planeta más grande del sistema solar?",
        options: ["Tierra", "Marte", "Júpiter", "Saturno"],
        answer: "Júpiter"
    },
    {
        question: "¿Quién formuló la Teoría de la Relatividad?",
        options: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Galileo Galilei"],
        answer: "Albert Einstein"
    },
    {
        question: "¿De qué país es originario el tango?",
        options: ["España", "Brasil", "Argentina", "México"],
        answer: "Argentina"
    },
    {
        question: "¿Qué océano es el más grande?",
        options: ["Atlántico", "Índico", "Pacífico", "Ártico"],
        answer: "Pacífico"
    },
    {
        question: "¿Cuál es la velocidad de la luz en el vacío (aproximada en km/s)?",
        options: ["150.000 km/s", "300.000 km/s", "500.000 km/s", "1.000.000 km/s"],
        answer: "300.000 km/s"
    },
    {
        question: "¿Qué estructura es visible desde el espacio?",
        options: ["Las Pirámides de Egipto", "El Gran Cañón", "La Gran Muralla China", "El Coliseo Romano"],
        answer: "La Gran Muralla China"
    },
    {
        question: "¿Cuál es la moneda oficial de Japón?",
        options: ["Won", "Yuan", "Yen", "Dólar"],
        answer: "Yen"
    },
    {
        question: "¿Qué significa la 'C' en la fórmula E=mc²?",
        options: ["Carga", "Constante", "Velocidad de la luz", "Calor"],
        answer: "Velocidad de la luz"
    },
    {
        question: "¿Qué animal es el mamífero terrestre más grande?",
        options: ["Rinoceronte", "Hipopótamo", "Elefante Africano", "Jirafa"],
        answer: "Elefante Africano"
    },
    {
        question: "¿Quién fue el primer presidente de los Estados Unidos?",
        options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "Benjamin Franklin"],
        answer: "George Washington"
    },
    
    // --- Bloque 3: Lenguaje e Historia (21-30) ---
    {
        question: "¿Cuál es el idioma más hablado en el mundo (por número de hablantes nativos)?",
        options: ["Inglés", "Español", "Chino Mandarín", "Hindi"],
        answer: "Chino Mandarín"
    },
    {
        question: "¿Qué compuesto tiene la fórmula química H₂O?",
        options: ["Sal", "Dióxido de carbono", "Agua", "Metano"],
        answer: "Agua"
    },
    {
        question: "¿Cuál es la montaña más alta del mundo?",
        options: ["K2", "Kangchenjunga", "Lhotse", "Monte Everest"],
        answer: "Monte Everest"
    },
    {
        question: "¿En qué deporte se utiliza la palabra 'birdie'?",
        options: ["Béisbol", "Golf", "Tenis", "Fútbol"],
        answer: "Golf"
    },
    {
        question: "¿Cuántos continentes hay en el mundo?",
        options: ["Cinco", "Seis", "Siete", "Ocho"],
        answer: "Seis"
    },
    {
        question: "¿Qué ciudad es conocida como 'La Ciudad Eterna'?",
        options: ["Atenas", "París", "Roma", "Madrid"],
        answer: "Roma"
    },
    {
        question: "¿Cuál es el pigmento que da el color verde a las plantas?",
        options: ["Oxígeno", "Dióxido de carbono", "Nitrógeno", "Clorofila"],
        answer: "Clorofila"
    },
    {
        question: "¿Quién compuso la 'Novena Sinfonía'?",
        options: ["Mozart", "Beethoven", "Bach", "Chopin"],
        answer: "Beethoven"
    },
    {
        question: "¿Qué país tiene más husos horarios?",
        options: ["Rusia", "Canadá", "Estados Unidos", "Francia"],
        answer: "Francia"
    },
    {
        question: "¿Cuál es el único mamífero que puede volar?",
        options: ["Pterodáctilo", "Murciélago", "Colibrí", "Ardilla Voladora"],
        answer: "Murciélago"
    },
    
    // --- Bloque 4: Historia Mundial (31-40) ---
    {
        question: "¿En qué siglo cayó el Imperio Romano de Occidente?",
        options: ["Siglo V", "Siglo IV", "Siglo VI", "Siglo III"],
        answer: "Siglo V"
    },
    {
        question: "¿Quién fue el líder de la Alemania nazi durante la Segunda Guerra Mundial?",
        options: ["Benito Mussolini", "Winston Churchill", "Adolf Hitler", "Joseph Stalin"],
        answer: "Adolf Hitler"
    },
    {
        question: "¿Qué evento se considera el inicio de la Edad Media?",
        options: ["La caída de Constantinopla", "La invención de la imprenta", "La caída del Imperio Romano de Occidente", "El descubrimiento de América"],
        answer: "La caída del Imperio Romano de Occidente"
    },
    {
        question: "¿Qué navegante portugués completó la primera circunnavegación del mundo?",
        options: ["Vasco da Gama", "Cristóbal Colón", "Fernando de Magallanes", "Pedro Álvares Cabral"],
        answer: "Fernando de Magallanes"
    },
    {
        question: "¿En qué año se firmó el Acta de Independencia de los Estados Unidos?",
        options: ["1776", "1789", "1765", "1800"],
        answer: "1776"
    },
    {
        question: "¿Qué civilización construyó las pirámides de Giza?",
        options: ["Mesopotámica", "Romana", "Egipcia", "Griega"],
        answer: "Egipcia"
    },
    {
        question: "¿Cuál fue el nombre original de la Primera Guerra Mundial?",
        options: ["La Guerra de las Trincheras", "La Gran Guerra", "La Guerra Europea", "La Guerra de las Naciones"],
        answer: "La Gran Guerra"
    },
    {
        question: "¿Qué ciudad fue dividida por un muro entre 1961 y 1989?",
        options: ["Praga", "Viena", "Berlín", "Moscú"],
        answer: "Berlín"
    },
    {
        question: "¿Quién liberó a la India del dominio británico mediante la resistencia no violenta?",
        options: ["Jawaharlal Nehru", "Indira Gandhi", "Mahatma Gandhi", "Nelson Mandela"],
        answer: "Mahatma Gandhi"
    },
    {
        question: "¿Cuál fue el último zar de Rusia?",
        options: ["Pedro el Grande", "Iván el Terrible", "Alejandro II", "Nicolás II"],
        answer: "Nicolás II"
    },
    
    // --- Bloque 5: Biología y Química (41-50) ---
    {
        question: "¿Cuál es la función principal de los glóbulos rojos?",
        options: ["Producir anticuerpos", "Coagular la sangre", "Transportar oxígeno", "Combatir infecciones"],
        answer: "Transportar oxígeno"
    },
    {
        question: "¿Qué es la unidad básica de la vida?",
        options: ["Molécula", "Tejido", "Órgano", "Célula"],
        answer: "Célula"
    },
    {
        question: "¿Cómo se llama el proceso por el cual las plantas crean su propio alimento?",
        options: ["Respiración", "Transpiración", "Fotosíntesis", "Quimiosíntesis"],
        answer: "Fotosíntesis"
    },
    {
        question: "¿Qué órgano produce la bilis?",
        options: ["Riñón", "Páncreas", "Estómago", "Hígado"],
        answer: "Hígado"
    },
    {
        question: "¿Cuál es el principal componente del aire que respiramos?",
        options: ["Oxígeno", "Dióxido de Carbono", "Nitrógeno", "Argón"],
        answer: "Nitrógeno"
    },
    {
        question: "¿Qué científico es conocido por la tabla periódica de los elementos?",
        options: ["Marie Curie", "Dmitri Mendeléyev", "Isaac Newton", "Niels Bohr"],
        answer: "Dmitri Mendeléyev"
    },
    {
        question: "¿Qué tipo de hueso es la rótula?",
        options: ["Corto", "Largo", "Plano", "Sesamoideo"],
        answer: "Sesamoideo"
    },
    {
        question: "¿Cuál es el pH neutro en una escala de 0 a 14?",
        options: ["0", "14", "7", "5"],
        answer: "7"
    },
    {
        question: "¿Qué parte del cerebro controla el equilibrio y la postura?",
        options: ["Cerebro", "Tronco Encefálico", "Cerebelo", "Hipocampo"],
        answer: "Cerebelo"
    },
    {
        question: "¿Qué vitamina se obtiene principalmente de la luz solar?",
        options: ["Vitamina A", "Vitamina C", "Vitamina D", "Vitamina B12"],
        answer: "Vitamina D"
    },
    
    // --- Bloque 6: Literatura y Arte (51-60) ---
    {
        question: "¿Quién escribió 'El Quijote'?",
        options: ["Lope de Vega", "Miguel de Cervantes", "Federico García Lorca", "Calderón de la Barca"],
        answer: "Miguel de Cervantes"
    },
    {
        question: "¿De qué nacionalidad era el pintor Pablo Picasso?",
        options: ["Italiana", "Francesa", "Española", "Mexicana"],
        answer: "Española"
    },
    {
        question: "¿Qué obra de arte representa un hombre con un sombrero blando y un reloj derretido?",
        options: ["La Noche Estrellada", "El Grito", "La persistencia de la memoria", "Guernica"],
        answer: "La persistencia de la memoria"
    },
    {
        question: "¿Quién es el autor de 'Romeo y Julieta'?",
        options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Oscar Wilde"],
        answer: "William Shakespeare"
    },
    {
        question: "¿Cuál de estos movimientos artísticos surgió después del Impresionismo?",
        options: ["Renacimiento", "Cubismo", "Neoclasicismo", "Postimpresionismo"],
        answer: "Postimpresionismo"
    },
    {
        question: "¿En qué libro aparece el personaje de 'El Sombrerero Loco'?",
        options: ["Alicia en el País de las Maravillas", "Peter Pan", "Moby Dick", "El Señor de los Anillos"],
        answer: "Alicia en el País de las Maravillas"
    },
    {
        question: "¿Qué instrumento toca un 'virtuoso' del chelo?",
        options: ["Violín", "Contrabajo", "Viola", "Violonchelo"],
        answer: "Violonchelo"
    },
    {
        question: "¿Quién pintó la 'Capilla Sixtina'?",
        options: ["Donatello", "Leonardo da Vinci", "Miguel Ángel", "Rafael"],
        answer: "Miguel Ángel"
    },
    {
        question: "¿Qué género literario popularizó Julio Verne?",
        options: ["Novela romántica", "Novela de terror", "Ficción histórica", "Ciencia ficción"],
        answer: "Ciencia ficción"
    },
    {
        question: "¿Qué poeta es conocido por su obra 'Oda a la alegría'?",
        options: ["Pablo Neruda", "Federico García Lorca", "Friedrich Schiller", "Gustavo Adolfo Bécquer"],
        answer: "Friedrich Schiller"
    },
    
    // --- Bloque 7: Geografía Mundial (61-70) ---
    {
        question: "¿Cuál es el país más poblado del mundo?",
        options: ["Estados Unidos", "China", "India", "Indonesia"],
        answer: "India"
    },
    {
        question: "¿Qué desierto es el más grande del mundo (no polar)?",
        options: ["Kalahari", "Gobi", "Atacama", "Sahara"],
        answer: "Sahara"
    },
    {
        question: "¿Cuál es la capital de Canadá?",
        options: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
        answer: "Ottawa"
    },
    {
        question: "¿Qué estrecho separa Europa de África?",
        options: ["Estrecho de Bering", "Estrecho de Gibraltar", "Estrecho de Magallanes", "Estrecho de Malaca"],
        answer: "Estrecho de Gibraltar"
    },
    {
        question: "¿En qué cordillera se encuentra el Monte Everest?",
        options: ["Montañas Rocosas", "Alpes", "Andes", "Himalaya"],
        answer: "Himalaya"
    },
    {
        question: "¿Cuál es el estado más pequeño del mundo?",
        options: ["Mónaco", "Nauru", "Ciudad del Vaticano", "San Marino"],
        answer: "Ciudad del Vaticano"
    },
    {
        question: "¿Qué río pasa por Londres?",
        options: ["Sena", "Támesis", "Danubio", "Rin"],
        answer: "Támesis"
    },
    {
        question: "¿Qué país es una península que comparte frontera terrestre solo con España?",
        options: ["Italia", "Portugal", "Grecia", "Noruega"],
        answer: "Portugal"
    },
    {
        question: "¿Cuál es el lago de agua dulce más grande por volumen?",
        options: ["Lago Victoria", "Mar Caspio", "Lago Superior", "Lago Baikal"],
        answer: "Lago Baikal"
    },
    {
        question: "¿Qué mar se encuentra entre Europa, África y Asia?",
        options: ["Mar Negro", "Mar Báltico", "Mar Mediterráneo", "Mar Rojo"],
        answer: "Mar Mediterráneo"
    },
    
    // --- Bloque 8: Deportes y Curiosidades (71-80) ---
    {
        question: "¿Cuántos jugadores tiene un equipo de fútbol en el campo?",
        options: ["10", "11", "12", "9"],
        answer: "11"
    },
    {
        question: "¿Cada cuántos años se celebran los Juegos Olímpicos de Verano?",
        options: ["Dos", "Tres", "Cuatro", "Cinco"],
        answer: "Cuatro"
    },
    {
        question: "¿En qué deporte es famoso Michael Jordan?",
        options: ["Fútbol", "Béisbol", "Baloncesto", "Tenis"],
        answer: "Baloncesto"
    },
    {
        question: "¿Qué país ha ganado más Copas Mundiales de la FIFA?",
        options: ["Argentina", "Alemania", "Italia", "Brasil"],
        answer: "Brasil"
    },
    {
        question: "¿Cuál es la única letra del alfabeto que no aparece en ningún nombre de estado de EE. UU.?",
        options: ["Z", "Q", "J", "X"],
        answer: "Q"
    },
    {
        question: "¿De qué está hecha la Gran Barrera de Coral?",
        options: ["Algas", "Conchas", "Rocas volcánicas", "Corales"],
        answer: "Corales"
    },
    {
        question: "¿Qué instrumento musical tiene cuerdas pero se toca percutido con martillos?",
        options: ["Arpa", "Guitarra", "Piano", "Clavecín"],
        answer: "Piano"
    },
    {
        question: "¿Cuántos anillos tiene la bandera olímpica?",
        options: ["Tres", "Cinco", "Seis", "Siete"],
        answer: "Cinco"
    },
    {
        question: "¿Cuál es la capital de la República Popular China?",
        options: ["Shanghái", "Hong Kong", "Pekín", "Guangzhou"],
        answer: "Pekín"
    },
    {
        question: "¿Qué animal es el más rápido del mundo?",
        options: ["Leopardo", "Guepardo", "Halcón Peregrino", "Avestruz"],
        answer: "Halcón Peregrino"
    },
    
    // --- Bloque 9: Tecnología y Cine (81-90) ---
    {
        question: "¿Quién co-fundó Microsoft junto con Paul Allen?",
        options: ["Steve Jobs", "Larry Page", "Bill Gates", "Mark Zuckerberg"],
        answer: "Bill Gates"
    },
    {
        question: "¿Qué significa el acrónimo 'WWW' en una dirección web?",
        options: ["World Wide Web", "World Word Windows", "Web World Wide", "Web Windows World"],
        answer: "World Wide Web"
    },
    {
        question: "¿Cuál es la película con mayor recaudación de todos los tiempos (sin ajuste por inflación)?",
        options: ["Titanic", "Vengadores: Endgame", "Avatar", "Star Wars: El despertar de la Fuerza"],
        answer: "Avatar"
    },
    {
        question: "¿Quién dirigió la película 'Pulp Fiction'?",
        options: ["Steven Spielberg", "Martin Scorsese", "Quentin Tarantino", "Christopher Nolan"],
        answer: "Quentin Tarantino"
    },
    {
        question: "¿Qué compañía desarrolló el sistema operativo Android?",
        options: ["Apple", "Samsung", "Google", "Microsoft"],
        answer: "Google"
    },
    {
        question: "¿Cuál fue el primer largometraje animado de Disney?",
        options: ["Bambi", "Pinocho", "Blanca Nieves y los Siete Enanitos", "Dumbo"],
        answer: "Blanca Nieves y los Siete Enanitos"
    },
    {
        question: "¿Qué componente de la computadora se considera el 'cerebro'?",
        options: ["Tarjeta gráfica (GPU)", "Memoria RAM", "Disco duro (HDD/SSD)", "Unidad Central de Procesamiento (CPU)"],
        answer: "Unidad Central de Procesamiento (CPU)"
    },
    {
        question: "¿Qué red social fue originalmente fundada por Mark Zuckerberg?",
        options: ["Twitter (X)", "Instagram", "LinkedIn", "Facebook"],
        answer: "Facebook"
    },
    {
        question: "¿Qué científico es conocido por la Ley de la Gravitación Universal?",
        options: ["Galileo Galilei", "Albert Einstein", "Nikola Tesla", "Isaac Newton"],
        answer: "Isaac Newton"
    },
    {
        question: "¿Qué es un byte?",
        options: ["Un bit", "4 bits", "8 bits", "16 bits"],
        answer: "8 bits"
    },
    
    // --- Bloque 10: Varios y Cultura (91-100) ---
    {
        question: "¿Cuál es la capital de Tailandia?",
        options: ["Kuala Lumpur", "Hanói", "Bangkok", "Manila"],
        answer: "Bangkok"
    },
    {
        question: "¿Quién es conocido como 'El Rey del Pop'?",
        options: ["Elvis Presley", "Freddie Mercury", "Michael Jackson", "Prince"],
        answer: "Michael Jackson"
    },
    {
        question: "¿Qué país inventó la pizza?",
        options: ["Grecia", "España", "Italia", "Francia"],
        answer: "Italia"
    },
    {
        question: "¿Cuál es el metal líquido a temperatura ambiente?",
        options: ["Plomo", "Aluminio", "Mercurio", "Estaño"],
        answer: "Mercurio"
    },
    {
        question: "¿Cuántos minutos tiene una hora?",
        options: ["30", "60", "90", "120"],
        answer: "60"
    },
    {
        question: "¿Cuál es el nombre del famoso detective de Baker Street?",
        options: ["Hércules Poirot", "Sherlock Holmes", "Philip Marlowe", "Miss Marple"],
        answer: "Sherlock Holmes"
    },
    {
        question: "¿Qué animal es el símbolo de la paz?",
        options: ["Águila", "Paloma", "Gaviota", "Cisne"],
        answer: "Paloma"
    },
    {
        question: "¿Qué artista cortó parte de su propia oreja?",
        options: ["Claude Monet", "Paul Gauguin", "Vincent van Gogh", "Edgar Degas"],
        answer: "Vincent van Gogh"
    },
    {
        question: "¿Cuántos colores tiene el arcoíris tradicionalmente?",
        options: ["Cinco", "Seis", "Siete", "Ocho"],
        answer: "Siete"
    },
    {
        question: "¿Qué famoso compositor era sordo?",
        options: ["Mozart", "Bach", "Chopin", "Beethoven"],
        answer: "Beethoven"
    }
];

// Variables del estado del juego
let currentQuestionIndex = 0;
let correctCount = 0; // Contará los aciertos
let incorrectCount = 0; // Contará los errores
let questionAnswered = false; // Variable para controlar si la pregunta ya se respondió

// Elementos del DOM
const questionEl = document.getElementById('question');
const questionNumberEl = document.getElementById('question-number');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const nextButton = document.getElementById('next-button');
const questionArea = document.getElementById('question-area');
const resultScreen = document.getElementById('result-screen');
const finalScoreEl = document.getElementById('final-score');

// --- Funciones del juego ---

function loadQuestion() {
    // Si no quedan preguntas, muestra la pantalla de resultados
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    questionAnswered = false;
    nextButton.style.display = 'none';
    feedbackEl.textContent = '';
    feedbackEl.style.color = '#333'; // Resetear color del feedback

    const currentQuestion = questions[currentQuestionIndex];
    
    // Muestra el número de pregunta
    questionNumberEl.textContent = `Pregunta ${currentQuestionIndex + 1} de ${questions.length}`;
    
    // Muestra la pregunta
    questionEl.textContent = currentQuestion.question;
    
    // Vacía las opciones anteriores
    optionsEl.innerHTML = '';

    // Crea los botones de opciones
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-button');
        button.addEventListener('click', () => checkAnswer(button, option, currentQuestion.answer));
        optionsEl.appendChild(button);
    });
}

function checkAnswer(button, selectedOption, correctAnswer) {
    // Si la pregunta ya ha sido respondida, ignorar clics adicionales
    if (questionAnswered) return;

    // Deshabilita todos los botones una vez que se selecciona una opción
    document.querySelectorAll('.option-button').forEach(btn => btn.disabled = true);
    
    if (selectedOption === correctAnswer) {
        // --- Lógica Correcta ---
        button.classList.add('correct');
        feedbackEl.textContent = '¡Correcto! Un acierto más para ti.';
        feedbackEl.style.color = '#28a745'; // Color verde para correcto
        correctCount++; // Suma al contador de aciertos
        questionAnswered = true;
        
        // Muestra el botón para ir a la siguiente pregunta
        nextButton.style.display = 'block'; 
        
    } else {
        // --- Lógica Incorrecta: Cuenta error, muestra la correcta y salta ---
        
        // 1. Marcar como incorrecta y contar error
        button.classList.add('incorrect');
        incorrectCount++; // Suma al contador de errores
        questionAnswered = true;

        // 2. Mostrar la retroalimentación, indicando explícitamente la respuesta correcta
        const correctButton = Array.from(optionsEl.children).find(btn => btn.textContent === correctAnswer);
        correctButton.classList.add('correct'); // Resaltar la respuesta correcta
        
        feedbackEl.textContent = `❌ ¡Incorrecta! La respuesta correcta era "${correctAnswer}".`;
        feedbackEl.style.color = '#dc3545'; // Color rojo para incorrecto
        
        // 3. Mostrar el botón "Siguiente Pregunta" para que el usuario pueda avanzar
        setTimeout(() => {
             nextButton.style.display = 'block';
        }, 1500); // 1.5 segundos de retraso para que el usuario pueda leer
    }
}

function showResults() {
    questionArea.style.display = 'none';
    nextButton.style.display = 'none';
    feedbackEl.style.display = 'none';
    resultScreen.style.display = 'block';
    
    // El resultado final ahora muestra aciertos y errores
    finalScoreEl.innerHTML = `
        Has completado el juego. <br><br>
        ✅ **Aciertos:** ${correctCount} preguntas.<br>
        ❌ **Errores:** ${incorrectCount} preguntas.
    `;
}

// Event listener para el botón "Siguiente Pregunta"
nextButton.addEventListener('click', () => {
    if (questionAnswered) {
        currentQuestionIndex++;
        loadQuestion();
    }
});

// Inicia el quiz al cargar la página
loadQuestion();