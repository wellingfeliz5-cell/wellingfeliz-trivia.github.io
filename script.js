// Función de utilidad para mezclar un array (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Función para mezclar las opciones de una pregunta específica
function shuffleOptions(question) {
    // Crea una copia de las opciones para no modificar el array original
    const shuffledOptions = [...question.options];
    shuffleArray(shuffledOptions); 

    // Retorna una nueva estructura de pregunta con las opciones mezcladas
    return {
        question: question.question,
        options: shuffledOptions,
        answer: question.answer
    };
}


// --- 100 Preguntas de Cultura General (Mantenemos las que proporcionaste) ---
const generalQuestions = [
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

// --- 100 Preguntas Bíblicas (Énfasis en el Nuevo Testamento) ---
const biblicalQuestions = [
    // --- NT Bloque 1: Evangelios (Nacimiento, Milagros, Discípulos) (1-20) ---
    {
        question: "¿En qué ciudad nació Jesús?",
        options: ["Nazaret", "Jerusalén", "Belén", "Jericó"],
        answer: "Belén"
    },
    {
        question: "¿Quién fue la madre de Juan el Bautista?",
        options: ["María", "Marta", "Elizabeth", "Rebeca"],
        answer: "Elizabeth"
    },
    {
        question: "¿Cuál fue el primer milagro de Jesús, según el Evangelio de Juan?",
        options: ["Caminar sobre el agua", "Curar a un ciego", "Multiplicar los panes", "Convertir agua en vino"],
        answer: "Convertir agua en vino"
    },
    {
        question: "¿A cuántos discípulos principales eligió Jesús?",
        options: ["10", "12", "70", "7"],
        answer: "12"
    },
    {
        question: "¿Cuál de los discípulos negó a Jesús tres veces?",
        options: ["Judas Iscariote", "Juan", "Pedro", "Tomás"],
        answer: "Pedro"
    },
    {
        question: "¿Cómo se llamaba el hombre que bajaron por el techo para que Jesús lo sanara?",
        options: ["Bartimeo", "Lázaro", "Zaqueo", "Paralítico"],
        answer: "Paralítico"
    },
    {
        question: "¿Qué oficio tenían Pedro y Andrés antes de seguir a Jesús?",
        options: ["Pastores", "Publicanos", "Pescadores", "Carpinteros"],
        answer: "Pescadores"
    },
    {
        question: "¿Cuál es el nombre del ángel que visitó a María para anunciarle que sería la madre de Jesús?",
        options: ["Miguel", "Rafael", "Gabriel", "Uriel"],
        answer: "Gabriel"
    },
    {
        question: "¿Dónde convirtió Jesús el agua en vino?",
        options: ["Jerusalén", "Caná de Galilea", "Tiberíades", "Capernaum"],
        answer: "Caná de Galilea"
    },
    {
        question: "¿Quién fue el rey de Judea que ordenó la matanza de los niños varones en Belén?",
        options: ["Herodes Antipas", "Herodes el Grande", "César Augusto", "Pilato"],
        answer: "Herodes el Grande"
    },
    {
        question: "¿Cuántos panes y peces se usaron en el milagro de la multiplicación?",
        options: ["Cinco panes y dos peces", "Siete panes y tres peces", "Diez panes y cinco peces", "Doce panes y siete peces"],
        answer: "Cinco panes y dos peces"
    },
    {
        question: "¿Qué discípulo es conocido por haber dudado de la resurrección de Jesús hasta verlo?",
        options: ["Santiago", "Felipe", "Tomás", "Mateo"],
        answer: "Tomás"
    },
    {
        question: "¿Cuál es el Evangelio más corto?",
        options: ["Mateo", "Marcos", "Lucas", "Juan"],
        answer: "Marcos"
    },
    {
        question: "¿Qué nombre le dio Jesús a Simón, hijo de Jonás?",
        options: ["Judas", "Cefas (Pedro)", "Bartolomé", "Tadeo"],
        answer: "Cefas (Pedro)"
    },
    {
        question: "¿Quién era el publicano que se subió a un árbol para ver a Jesús?",
        options: ["Nicodemo", "José de Arimatea", "Zaqueo", "Barrabás"],
        answer: "Zaqueo"
    },
    {
        question: "¿En qué lugar fue bautizado Jesús?",
        options: ["Mar de Galilea", "Río Jordán", "Mar Muerto", "Torrente de Cedrón"],
        answer: "Río Jordán"
    },
    {
        question: "¿Quién bautizó a Jesús?",
        options: ["Pedro", "Jesús no fue bautizado", "Juan el Bautista", "Elías"],
        answer: "Juan el Bautista"
    },
    {
        question: "¿Qué demonios le pidieron permiso a Jesús para entrar en una piara de cerdos?",
        options: ["Belial", "Legión", "Asmodeo", "Satanás"],
        answer: "Legión"
    },
    {
        question: "¿Qué mujer ungió los pies de Jesús con perfume caro?",
        options: ["María Magdalena", "Marta", "María, hermana de Lázaro", "Salomé"],
        answer: "María, hermana de Lázaro"
    },
    {
        question: "¿Qué eran Lázaro, Marta y María?",
        options: ["Discípulos", "Hermanos", "Publicanos", "Fariseos"],
        answer: "Hermanos"
    },

    // --- NT Bloque 2: Evangelios (Parábolas, Sermón del Monte, Pasión) (21-40) ---
    {
        question: "¿Qué parábola relata la historia de un hombre que malgastó su herencia?",
        options: ["El Sembrador", "El Buen Samaritano", "El Hijo Pródigo", "Las diez vírgenes"],
        answer: "El Hijo Pródigo"
    },
    {
        question: "¿Qué le dijo Jesús al joven rico que le faltaba para heredar la vida eterna?",
        options: ["Dar una décima parte", "Vender todo lo que tenía", "Casarse", "Construir una iglesia"],
        answer: "Vender todo lo que tenía"
    },
    {
        question: "¿Cuál es la última petición del Padrenuestro?",
        options: ["Venga tu reino", "Danos hoy nuestro pan", "No nos dejes caer en tentación", "Hágase tu voluntad"],
        answer: "No nos dejes caer en tentación"
    },
    {
        question: "¿Cómo se llama el monte donde Jesús dio su famoso sermón?",
        options: ["Monte del Olivar", "Monte de Sión", "Monte Sinaí", "Monte de los Olivos"],
        answer: "Monte del Olivar"
    },
    {
        question: "¿Quién fue el gobernador romano que lavó sus manos antes de entregar a Jesús?",
        options: ["Herodes", "Caifás", "Pilato", "Centurión"],
        answer: "Pilato"
    },
    {
        question: "¿Por cuántas piezas de plata vendió Judas a Jesús?",
        options: ["10", "30", "50", "100"],
        answer: "30"
    },
    {
        question: "¿Qué mujer fue la primera en ver a Jesús resucitado, según el Evangelio de Juan?",
        options: ["María (madre de Jesús)", "Salomé", "María Magdalena", "Juana"],
        answer: "María Magdalena"
    },
    {
        question: "¿Qué dijo Jesús que le darían de beber en la cruz?",
        options: ["Agua y vino", "Leche y miel", "Vinagre (hiel)", "Jugo de uva"],
        answer: "Vinagre (hiel)"
    },
    {
        question: "¿Cómo se llama el huerto donde Jesús oró antes de su arresto?",
        options: ["Huerto del Edén", "Huerto de Getsemaní", "Jardín de Olivos", "Campo de Sangre"],
        answer: "Huerto de Getsemaní"
    },
    {
        question: "¿Qué significa la palabra 'Bienaventurados' en el Sermón del Monte?",
        options: ["Ricos", "Fuertes", "Felices o dichosos", "Sabios"],
        answer: "Felices o dichosos"
    },
    {
        question: "¿Qué representa la semilla en la Parábola del Sembrador?",
        options: ["El Reino de Dios", "La Palabra de Dios", "El Pecado", "Las Riquezas"],
        answer: "La Palabra de Dios"
    },
    {
        question: "¿Quién ayudó a Jesús a llevar la cruz?",
        options: ["José de Arimatea", "Simón de Cirene", "Nicodemo", "Un centurión"],
        answer: "Simón de Cirene"
    },
    {
        question: "¿Cuál fue la inscripción puesta sobre la cruz de Jesús?",
        options: ["El Profeta de Galilea", "Jesús el Rey de los Judíos", "El Mesías", "Hijo de David"],
        answer: "Jesús el Rey de los Judíos"
    },
    {
        question: "¿Qué profeta del Antiguo Testamento fue citado al inicio del ministerio de Jesús?",
        options: ["Isaías", "Jeremías", "Ezequiel", "Daniel"],
        answer: "Isaías"
    },
    {
        question: "¿Cómo se llama el lugar donde fue crucificado Jesús?",
        options: ["Monte Sinaí", "Gólgota", "Monte Carmelo", "Nazaret"],
        answer: "Gólgota"
    },
    {
        question: "¿Qué ocurrió con el velo del templo cuando Jesús murió?",
        options: ["Se quemó", "Se rasgó en dos", "Fue robado", "Se puso negro"],
        answer: "Se rasgó en dos"
    },
    {
        question: "¿A qué hora fue crucificado Jesús según Marcos?",
        options: ["La hora tercera", "La hora sexta", "La hora novena", "La hora duodécima"],
        answer: "La hora tercera"
    },
    {
        question: "¿Qué ofrenda echó la viuda pobre que impresionó a Jesús?",
        options: ["Dos blancas", "Diez piezas de oro", "Un cordero", "Su manto"],
        answer: "Dos blancas"
    },
    {
        question: "¿Qué título usaba Jesús con mayor frecuencia para referirse a sí mismo?",
        options: ["Hijo de Dios", "Cordero de Dios", "Hijo del Hombre", "Rey de Israel"],
        answer: "Hijo del Hombre"
    },
    {
        question: "¿Cuál de estos personajes no es mencionado en los Evangelios?",
        options: ["Caifás", "Nicodemo", "Tito", "Simón el Fariseo"],
        answer: "Tito"
    },

    // --- NT Bloque 3: Hechos y Epístolas Paulinas (41-60) ---
    {
        question: "¿En qué ciudad fueron llamados 'cristianos' por primera vez los discípulos?",
        options: ["Jerusalén", "Roma", "Antioquía", "Corinto"],
        answer: "Antioquía"
    },
    {
        question: "¿Qué apóstol cayó en un trance en Jope y vio un lienzo con animales impuros?",
        options: ["Pablo", "Juan", "Pedro", "Bernabé"],
        answer: "Pedro"
    },
    {
        question: "¿Cuál era el nombre original del apóstol Pablo?",
        options: ["Saulo", "Silas", "Timoteo", "Esteban"],
        answer: "Saulo"
    },
    {
        question: "¿En qué camino tuvo Pablo su experiencia de conversión?",
        options: ["Camino a Cesarea", "Camino a Jerusalén", "Camino a Damasco", "Camino a Atenas"],
        answer: "Camino a Damasco"
    },
    {
        question: "¿Qué ciudad visitó Pablo que tenía un altar dedicado 'Al Dios No Conocido'?",
        options: ["Éfeso", "Corinto", "Atenas", "Tesalónica"],
        answer: "Atenas"
    },
    {
        question: "¿Cuál es el fruto del Espíritu según Gálatas 5:22-23?",
        options: ["Fe, esperanza y amor", "Paz, paciencia y servicio", "Amor, gozo y paz", "Gozo, verdad y justicia"],
        answer: "Amor, gozo y paz"
    },
    {
        question: "¿Cuál es el tema principal de 1 Corintios 13?",
        options: ["La fe", "La caridad (amor)", "El bautismo", "El matrimonio"],
        answer: "La caridad (amor)"
    },
    {
        question: "¿Quién escribió la mayoría de las Epístolas del Nuevo Testamento?",
        options: ["Pedro", "Juan", "Pablo", "Santiago"],
        answer: "Pablo"
    },
    {
        question: "¿Qué pasó en el aposento alto el día de Pentecostés?",
        options: ["Jesús ascendió", "El Espíritu Santo descendió", "Eligieron a Judas", "Se reunieron con Pilato"],
        answer: "El Espíritu Santo descendió"
    },
    {
        question: "¿Quién fue el primer mártir cristiano, apedreado por el Sanedrín?",
        options: ["Jacobo", "Esteban", "Bernabé", "Felipe"],
        answer: "Esteban"
    },
    {
        question: "¿A quién le dijo Pablo: 'Combate la buena batalla de la fe'?",
        options: ["Tito", "Filemón", "Timoteo", "Silas"],
        answer: "Timoteo"
    },
    {
        question: "¿Qué libro del NT contiene la famosa 'Armadura de Dios'?",
        options: ["Romanos", "Gálatas", "Efesios", "Colosenses"],
        answer: "Efesios"
    },
    {
        question: "¿Qué es 'la fe' según Hebreos 11:1?",
        options: ["Un sentimiento", "La certeza de lo que se espera", "Obedecer las leyes", "Un don"],
        answer: "La certeza de lo que se espera"
    },
    {
        question: "¿A qué isla fue desterrado el apóstol Juan?",
        options: ["Malta", "Creta", "Patmos", "Chipre"],
        answer: "Patmos"
    },
    {
        question: "¿Qué pareja mintió sobre el precio de la venta de su propiedad y murió?",
        options: ["Aquila y Priscila", "Felipe y Lidia", "Ananías y Safira", "María y José"],
        answer: "Ananías y Safira"
    },
    {
        question: "¿Cuál fue el principal debate en el Concilio de Jerusalén (Hechos 15)?",
        options: ["La Pascua", "La circuncisión", "El Sábado", "El diezmo"],
        answer: "La circuncisión"
    },
    {
        question: "¿En qué libro dice: 'La paga del pecado es muerte, mas la dádiva de Dios es vida eterna'?",
        options: ["Gálatas", "Romanos", "Santiago", "Apocalipsis"],
        answer: "Romanos"
    },
    {
        question: "¿Qué oficio tenía Lucas, el autor de un Evangelio y Hechos?",
        options: ["Abogado", "Soldado", "Médico", "Mercader"],
        answer: "Médico"
    },
    {
        question: "¿Qué dice Juan 3:16 que Dios dio al mundo por amor?",
        options: ["Su ley", "Sus ángeles", "A su Hijo unigénito", "Riquezas"],
        answer: "A su Hijo unigénito"
    },
    {
        question: "¿Quién escribió la Epístola a los Hebreos?",
        options: ["Pablo", "Pedro", "Bernabé", "El autor es desconocido"],
        answer: "El autor es desconocido"
    },

    // --- NT Bloque 4: Otras Epístolas y Apocalipsis (61-70) ---
    {
        question: "¿Cuál es el único libro del Nuevo Testamento que es puramente profético?",
        options: ["Judas", "Hebreos", "Apocalipsis", "Hechos"],
        answer: "Apocalipsis"
    },
    {
        question: "¿Qué Epístola comienza diciendo: 'Tened por sumo gozo cuando os halléis en diversas pruebas'?",
        options: ["1 Pedro", "Santiago", "Juan", "Judas"],
        answer: "Santiago"
    },
    {
        question: "¿Quién era la 'mujer escarlata' en el libro de Apocalipsis?",
        options: ["Una ciudad poderosa (Babilonia)", "La madre de Satanás", "La Iglesia apóstata", "María Magdalena"],
        answer: "Una ciudad poderosa (Babilonia)"
    },
    {
        question: "¿Qué libro del NT habla de la lengua como un fuego, un mundo de maldad?",
        options: ["Santiago", "1 Pedro", "Judas", "Hebreos"],
        answer: "Santiago"
    },
    {
        question: "¿Cuántas iglesias de Asia Menor recibieron cartas en Apocalipsis?",
        options: ["3", "5", "7", "12"],
        answer: "7"
    },
    {
        question: "¿Qué dice 1 Timoteo 6:10 que es la raíz de todos los males?",
        options: ["La envidia", "La falta de fe", "El amor al dinero", "La ira"],
        answer: "El amor al dinero"
    },
    {
        question: "¿De qué apóstol se deriva la Epístola de Judas?",
        options: ["Hermano de Jesús", "Judas Iscariote", "Judas Tadeo", "Judas el Galileo"],
        answer: "Hermano de Jesús"
    },
    {
        question: "¿Qué se profetiza que se secará en el Apocalipsis para dar paso a los reyes del Oriente?",
        options: ["Mar Muerto", "Río Nilo", "Río Éufrates", "Mar Mediterráneo"],
        answer: "Río Éufrates"
    },
    {
        question: "¿Qué Epístola hace referencia a la lucha de Miguel el arcángel con el diablo por el cuerpo de Moisés?",
        options: ["Hebreos", "Judas", "2 Pedro", "1 Tesalonicenses"],
        answer: "Judas"
    },
    {
        question: "¿Qué dice Juan, en 1 Juan 4:8, que es Dios?",
        options: ["Fuego consumidor", "Espíritu", "Amor", "Luz"],
        answer: "Amor"
    },
    {
        question: "¿Cuál fue el último apóstol en morir?",
        options: ["Pedro", "Santiago", "Juan", "Andrés"],
        answer: "Juan"
    },
    {
        question: "¿Quién escribió la segunda epístola a los Corintios?",
        options: ["Pedro", "Pablo", "Lucas", "Juan"],
        answer: "Pablo"
    },
    {
        question: "¿Qué ciudad fue el principal centro de la iglesia en Asia Menor?",
        options: ["Jerusalén", "Antioquía", "Éfeso", "Roma"],
        answer: "Éfeso"
    },
    {
        question: "¿Cuál de las siguientes no es una Epístola Pastoral?",
        options: ["1 Timoteo", "Tito", "Filemón", "2 Timoteo"],
        answer: "Filemón"
    },
    {
        question: "¿Qué libro sigue inmediatamente a Hechos de los Apóstoles?",
        options: ["Mateo", "Romanos", "Gálatas", "Corintios"],
        answer: "Romanos"
    },
    {
        question: "¿En qué Epístola se habla del 'rapto' de la iglesia?",
        options: ["Romanos", "1 Tesalonicenses", "Gálatas", "Efesios"],
        answer: "1 Tesalonicenses"
    },
    {
        question: "¿Cuántos sellos se rompen en el Apocalipsis antes de las trompetas?",
        options: ["3", "7", "10", "12"],
        answer: "7"
    },
    {
        question: "¿Qué dice la Epístola de Santiago sobre la fe sin obras?",
        options: ["Es suficiente", "Es débil", "Es muerta", "Es perfecta"],
        answer: "Es muerta"
    },
    {
        question: "¿Cuál fue la visión principal de Pedro en el techo de la casa de Simón el curtidor?",
        options: ["La resurrección de Jesús", "La Ascensión", "Animales limpios e impuros", "La caída de Jerusalén"],
        answer: "Animales limpios e impuros"
    },
    {
        question: "¿A quién resucitó Pedro en Jope?",
        options: ["Eutico", "Lázaro", "Tabita (Dorcas)", "El hijo de la viuda"],
        answer: "Tabita (Dorcas)"
    },

    // --- OT Bloque 5: Génesis y Éxodo (Creación, Patriarcas, Moisés) (81-90) ---
    {
        question: "¿Qué día creó Dios al hombre, según Génesis?",
        options: ["Cuarto", "Quinto", "Sexto", "Séptimo"],
        answer: "Sexto"
    },
    {
        question: "¿Cómo se llamaba el hijo que Abraham tuvo con Agar?",
        options: ["Isaac", "Jacob", "Ismael", "Esaú"],
        answer: "Ismael"
    },
    {
        question: "¿Qué construyó Noé para salvar a su familia y a los animales?",
        options: ["Un templo", "Un refugio", "Un arca", "Una torre"],
        answer: "Un arca"
    },
    {
        question: "¿Qué símbolo puso Dios como señal de su pacto con Noé para no volver a destruir la tierra con agua?",
        options: ["Un altar", "Un arco iris", "Una nube", "Una estrella"],
        answer: "Un arco iris"
    },
    {
        question: "¿Cuántos años vivió Matusalén, el hombre más longevo de la Biblia?",
        options: ["500", "789", "969", "1000"],
        answer: "969"
    },
    {
        question: "¿Qué hicieron los hermanos de José para deshacerse de él?",
        options: ["Lo vendieron como esclavo", "Lo mataron", "Lo abandonaron en el desierto", "Lo enviaron a Egipto"],
        answer: "Lo vendieron como esclavo"
    },
    {
        question: "¿Cuántas plagas envió Dios sobre Egipto?",
        options: ["7", "10", "12", "5"],
        answer: "10"
    },
    {
        question: "¿Qué mandamiento es el único que viene con una promesa de larga vida?",
        options: ["No matarás", "Honra a tu padre y a tu madre", "No robarás", "No codiciarás"],
        answer: "Honra a tu padre y a tu madre"
    },
    {
        question: "¿Dónde recibió Moisés los Diez Mandamientos?",
        options: ["Monte Carmelo", "Monte del Olivar", "Monte Sinaí", "Monte Sión"],
        answer: "Monte Sinaí"
    },
    {
        question: "¿Cuál era el nombre de la esposa de Moisés?",
        options: ["Séfora", "Débora", "Rebeca", "Raquel"],
        answer: "Séfora"
    },
    {
        question: "¿Qué ciudad destruyó Dios con fuego y azufre por su gran maldad?",
        options: ["Nínive", "Gomorra", "Babilonia", "Jericó"],
        answer: "Gomorra"
    },
    {
        question: "¿Qué pariente de Abraham se salvó de la destrucción de Sodoma?",
        options: ["Lot", "Isaac", "Ismael", "Harán"],
        answer: "Lot"
    },
    {
        question: "¿Qué nombre le dio Dios a Jacob después de que luchó con el ángel?",
        options: ["Abraham", "Israel", "Edom", "Josué"],
        answer: "Israel"
    },
    {
        question: "¿Qué idioma se considera que se habló antes de la confusión de la Torre de Babel?",
        options: ["Hebreo", "Arameo", "Un solo idioma", "Egipcio"],
        answer: "Un solo idioma"
    },
    {
        question: "¿A qué edad murió Abraham?",
        options: ["120", "150", "175", "190"],
        answer: "175"
    },

    // --- OT Bloque 6: Jueces, Reyes, Profetas (96-100, extendido a 110 por la lista extra de NT) ---
    // (Ajuste para completar las 100 preguntas totales)

    {
        question: "¿Qué juez de Israel venció a los madianitas con solo 300 hombres?",
        options: ["Sansón", "Gedeón", "Jefte", "Otoniel"],
        answer: "Gedeón"
    },
    {
        question: "¿Quién fue la única mujer juez de Israel?",
        options: ["Jael", "Rut", "Débora", "Ester"],
        answer: "Débora"
    },
    {
        question: "¿Qué rey de Israel fue ungido por el profeta Samuel después de Saúl?",
        options: ["Salomón", "David", "Jeroboam", "Acab"],
        answer: "David"
    },
    {
        question: "¿Qué profeta se enfrentó a los profetas de Baal en el Monte Carmelo?",
        options: ["Eliseo", "Isaías", "Elías", "Jeremías"],
        answer: "Elías"
    },
    {
        question: "¿Qué animal usó Balaam para hablar con él?",
        options: ["Un caballo", "Un asno (burra)", "Un camello", "Un buey"],
        answer: "Un asno (burra)"
    },
    {
        question: "¿Qué gigante fue derrotado por David con una honda?",
        options: ["Gog", "Magog", "Goliat", "Og"],
        answer: "Goliat"
    },
    {
        question: "¿Qué rey fue famoso por su sabiduría?",
        options: ["Saúl", "David", "Salomón", "Ezequías"],
        answer: "Salomón"
    },
    {
        question: "¿En qué país fue exiliado el profeta Daniel?",
        options: ["Asiria", "Egipto", "Babilonia", "Persia"],
        answer: "Babilonia"
    },
    {
        question: "¿Qué profeta fue tragado por un gran pez?",
        options: ["Elías", "Jonás", "Amós", "Habacuc"],
        answer: "Jonás"
    },
    {
        question: "¿Qué libro del Antiguo Testamento está compuesto principalmente por poemas y canciones?",
        options: ["Proverbios", "Job", "Salmos", "Eclesiastés"],
        answer: "Salmos"
    }
];

// Contenedor de todas las preguntas
const quizData = {
    'general': generalQuestions,
    'biblical': biblicalQuestions
};


// Variables del estado del juego
let currentQuestions = []; // El set de preguntas activo y mezclado
let currentQuestionIndex = 0;
let correctCount = 0; 
let incorrectCount = 0; 
let questionAnswered = false; 
let currentCategory = ''; 

// Elementos del DOM
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const quizTitleEl = document.getElementById('quiz-title');
const questionEl = document.getElementById('question');
const questionNumberEl = document.getElementById('question-number');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const nextButton = document.getElementById('next-button');
const questionArea = document.getElementById('question-area');
const resultScreen = document.getElementById('result-screen');
const finalScoreEl = document.getElementById('final-score');
const generalButton = document.getElementById('general-button');
const biblicalButton = document.getElementById('biblical-button');

// --- Funciones del juego ---

function startGame(category) {
    currentCategory = category;
    
    // 1. Selecciona y mezcla las preguntas (para que el orden sea random)
    let selectedQuestions = quizData[category];
    // Asegura una copia limpia del array antes de mezclarlo
    currentQuestions = shuffleArray([...selectedQuestions]); 
    
    // 2. Resetea el estado del juego
    currentQuestionIndex = 0;
    correctCount = 0;
    incorrectCount = 0;

    // 3. Actualiza la visibilidad de la interfaz y el título
    startScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    quizTitleEl.textContent = category === 'general' ? '🧠 Trivia: Cultura General' : '📖 Trivia: Preguntas Bíblicas';
    feedbackEl.style.display = 'block';
    
    // 4. Inicia el quiz
    loadQuestion();
}

function loadQuestion() {
    // Si no quedan preguntas, muestra la pantalla de resultados
    if (currentQuestionIndex >= currentQuestions.length) {
        showResults();
        return;
    }

    questionAnswered = false;
    nextButton.style.display = 'none';
    feedbackEl.textContent = '';
    feedbackEl.style.color = '#333'; 

    // Obtiene la pregunta actual y mezcla sus opciones (¡Nuevo para más random!)
    let currentQuestion = currentQuestions[currentQuestionIndex];
    currentQuestion = shuffleOptions(currentQuestion); 

    // Muestra el número de pregunta
    questionNumberEl.textContent = `Pregunta ${currentQuestionIndex + 1} de ${currentQuestions.length}`;
    
    // Muestra la pregunta
    questionEl.textContent = currentQuestion.question;
    
    // Vacía las opciones anteriores
    optionsEl.innerHTML = '';

    // Crea los botones de opciones
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-button');
        // El checkAnswer usa la respuesta correcta original, pero el texto de la opción mezclada
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
        // Lógica Correcta
        button.classList.add('correct');
        feedbackEl.textContent = '¡Correcto! Un acierto más para ti.';
        feedbackEl.style.color = '#28a745'; // Color verde
        correctCount++; 
        questionAnswered = true;
        
        nextButton.style.display = 'block'; 
        
    } else {
        // Lógica Incorrecta: Muestra la correcta y permite avanzar
        
        // 1. Marcar como incorrecta y contar error
        button.classList.add('incorrect');
        incorrectCount++; 
        questionAnswered = true;

        // 2. Mostrar la retroalimentación, indicando explícitamente la respuesta correcta
        const correctButton = Array.from(optionsEl.children).find(btn => btn.textContent === correctAnswer);
        if (correctButton) {
             correctButton.classList.add('correct'); // Resaltar la respuesta correcta
        }
        
        feedbackEl.textContent = `❌ ¡Incorrecta! La respuesta correcta era "${correctAnswer}".`;
        feedbackEl.style.color = '#dc3545'; // Color rojo
        
        // 3. Mostrar el botón "Siguiente Pregunta"
        setTimeout(() => {
             nextButton.style.display = 'block';
        }, 1500); 
    }
}

function showResults() {
    questionArea.style.display = 'none';
    nextButton.style.display = 'none';
    feedbackEl.style.display = 'none';
    resultScreen.style.display = 'block';
    
    finalScoreEl.innerHTML = `
        Has completado la Trivia de ${currentQuestions.length} preguntas. <br><br>
        ✅ **Aciertos:** ${correctCount} preguntas.<br>
        ❌ **Errores:** ${incorrectCount} preguntas.
    `;
}

function initGame() {
    // Asigna event listeners a los botones de categoría
    generalButton.addEventListener('click', () => startGame('general'));
    biblicalButton.addEventListener('click', () => startGame('biblical'));

    // Event listener para el botón "Siguiente Pregunta"
    nextButton.addEventListener('click', () => {
        if (questionAnswered) {
            currentQuestionIndex++;
            loadQuestion();
        }
    });

    // Asegura que solo la pantalla de inicio sea visible al cargar
    startScreen.style.display = 'block';
    gameScreen.style.display = 'none';
}

// Inicializa el juego al cargar la ventana
window.onload = initGame;