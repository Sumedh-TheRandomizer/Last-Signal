// ==========================================
// IMPOSTER — GALACTIC ODYSSEY
// ==========================================


// ==========================================
// SCREEN ELEMENTS
// ==========================================

const homeScreen = document.getElementById("homeScreen");
const setupScreen = document.getElementById("setupScreen");
const passScreen = document.getElementById("passScreen");
const roleScreen = document.getElementById("roleScreen");
const discussionScreen = document.getElementById("discussionScreen");
const voteScreen = document.getElementById("voteScreen");
const resultScreen = document.getElementById("resultScreen");


// ==========================================
// BUTTONS
// ==========================================

const homeButton = document.getElementById("homeButton");

const startButton = document.getElementById("startButton");
const beginButton = document.getElementById("beginButton");
const readyButton = document.getElementById("readyButton");
const revealButton = document.getElementById("revealButton");
const nextPlayerButton = document.getElementById("nextPlayerButton");
const voteButton = document.getElementById("voteButton");
const playAgainButton = document.getElementById("playAgainButton");


// ==========================================
// SETUP ELEMENTS
// ==========================================

const playerCount = document.getElementById("playerCount");
const imposterCount = document.getElementById("imposterCount");
const categorySelect = document.getElementById("categorySelect");
const difficultySelect = document.getElementById("difficultySelect");

const customWordsBox =
    document.getElementById("customWordsBox");

const customWords =
    document.getElementById("customWords");


// ==========================================
// PASS / ROLE ELEMENTS
// ==========================================

const passPlayer =
    document.getElementById("passPlayer");

const currentPlayerNumber =
    document.getElementById("currentPlayerNumber");

const roleResult =
    document.getElementById("roleResult");

const roleIcon =
    document.getElementById("roleIcon");

const roleText =
    document.getElementById("roleText");

const wordText =
    document.getElementById("wordText");

const roleHint =
    document.getElementById("roleHint");


// ==========================================
// DISCUSSION ELEMENTS
// ==========================================

const discussionStatus =
    discussionScreen.querySelector(".status-label");

const discussionHeading =
    discussionScreen.querySelector("h2");

const discussionParagraph =
    discussionScreen.querySelector("p");

const discussionTitle =
    discussionScreen.querySelector(".discussion-title");

const discussionSubtitle =
    discussionScreen.querySelector(".discussion-subtitle");


// ==========================================
// VOTING
// ==========================================

const voteButtons =
    document.getElementById("voteButtons");


// ==========================================
// RESULTS
// ==========================================

const resultIcon =
    document.getElementById("resultIcon");

const resultTitle =
    document.getElementById("resultTitle");

const resultMessage =
    document.getElementById("resultMessage");

const finalWord =
    document.getElementById("finalWord");

const answerCard =
    resultScreen.querySelector(".answer-card");


// ==========================================
// WORD DATABASE
// ==========================================

const wordDatabase = {

    food: [
        ["Pizza", "Cheese", "easy"],
        ["Burger", "Bun", "easy"],
        ["Pasta", "Italian", "easy"],
        ["Sushi", "Rice", "easy"],
        ["Popcorn", "Cinema", "easy"],
        ["Chocolate", "Sweet", "easy"],
        ["Ice Cream", "Cold", "easy"],
        ["Sandwich", "Bread", "easy"],
        ["Pancakes", "Breakfast", "easy"],
        ["Donut", "Hole", "easy"],
        ["French Fries", "Crispy", "easy"],
        ["Tacos", "Mexico", "easy"],
        ["Noodles", "Chopsticks", "easy"],
        ["Biryani", "Spicy", "easy"],
        ["Dosa", "South India", "easy"],
        ["Idli", "Steamed", "easy"],
        ["Momos", "Dumpling", "easy"],
        ["Waffles", "Grid", "easy"],
        ["Cheesecake", "Dessert", "medium"],
        ["Lasagna", "Layers", "medium"],
        ["Croissant", "France", "medium"],
        ["Guacamole", "Avocado", "medium"],
        ["Ramen", "Japan", "medium"],
        ["Nachos", "Chips", "easy"],
        ["Cupcake", "Frosting", "easy"],
        ["Pretzel", "Twist", "medium"],
        ["Brownie", "Chocolate", "easy"],
        ["Macaroni", "Pasta", "easy"],
        ["Pav Bhaji", "Mumbai", "medium"]
    ],

    animals: [
        ["Lion", "Roar", "easy"],
        ["Tiger", "Stripes", "easy"],
        ["Elephant", "Trunk", "easy"],
        ["Giraffe", "Tall", "easy"],
        ["Penguin", "Ice", "easy"],
        ["Dolphin", "Ocean", "easy"],
        ["Shark", "Teeth", "easy"],
        ["Kangaroo", "Jump", "easy"],
        ["Panda", "Bamboo", "easy"],
        ["Cheetah", "Fast", "easy"],
        ["Wolf", "Pack", "easy"],
        ["Eagle", "Sky", "easy"],
        ["Owl", "Night", "easy"],
        ["Crocodile", "River", "easy"],
        ["Zebra", "Stripes", "easy"],
        ["Gorilla", "Jungle", "easy"],
        ["Flamingo", "Pink", "easy"],
        ["Octopus", "Eight", "easy"],
        ["Koala", "Eucalyptus", "easy"],
        ["Peacock", "Feathers", "easy"],
        ["Hippopotamus", "River", "medium"],
        ["Chameleon", "Change", "medium"],
        ["Platypus", "Odd", "hard"],
        ["Sloth", "Slow", "easy"],
        ["Porcupine", "Spikes", "medium"],
        ["Rhinoceros", "Horn", "easy"],
        ["Meerkat", "Desert", "medium"],
        ["Jellyfish", "Sting", "easy"],
        ["Hedgehog", "Spikes", "easy"],
        ["Orangutan", "Trees", "medium"]
    ],

    sports: [
        ["Football", "Goal", "easy"],
        ["Cricket", "Bat", "easy"],
        ["Basketball", "Hoop", "easy"],
        ["Tennis", "Racket", "easy"],
        ["Swimming", "Pool", "easy"],
        ["Boxing", "Gloves", "easy"],
        ["Golf", "Hole", "easy"],
        ["Hockey", "Stick", "easy"],
        ["Volleyball", "Net", "easy"],
        ["Badminton", "Shuttle", "easy"],
        ["Baseball", "Diamond", "medium"],
        ["Rugby", "Oval", "medium"],
        ["Wrestling", "Mat", "easy"],
        ["Cycling", "Helmet", "easy"],
        ["Archery", "Bow", "easy"],
        ["Fencing", "Sword", "medium"],
        ["Skateboarding", "Ramp", "easy"],
        ["Surfing", "Waves", "easy"],
        ["Skiing", "Snow", "easy"],
        ["Table Tennis", "Paddle", "easy"]
    ],

    places: [
        ["Paris", "Eiffel", "easy"],
        ["London", "Big Ben", "easy"],
        ["New York", "Skyscrapers", "easy"],
        ["Tokyo", "Japan", "easy"],
        ["Dubai", "Desert", "easy"],
        ["Mumbai", "Bollywood", "easy"],
        ["Delhi", "Capital", "easy"],
        ["Sydney", "Opera", "easy"],
        ["Rome", "Colosseum", "easy"],
        ["Venice", "Canals", "easy"],
        ["Hawaii", "Volcano", "medium"],
        ["Antarctica", "Ice", "easy"],
        ["Amazon", "Rainforest", "medium"],
        ["Sahara", "Desert", "easy"],
        ["Mount Everest", "Mountain", "easy"],
        ["Maldives", "Islands", "easy"],
        ["Las Vegas", "Casino", "medium"],
        ["Hollywood", "Movies", "easy"],
        ["Silicon Valley", "Technology", "medium"],
        ["Great Barrier Reef", "Coral", "medium"]
    ],

    objects: [
        ["Backpack", "School", "easy"],
        ["Umbrella", "Rain", "easy"],
        ["Clock", "Time", "easy"],
        ["Mirror", "Reflection", "easy"],
        ["Camera", "Photo", "easy"],
        ["Laptop", "Screen", "easy"],
        ["Keyboard", "Typing", "easy"],
        ["Headphones", "Music", "easy"],
        ["Glasses", "Vision", "easy"],
        ["Bicycle", "Wheels", "easy"],
        ["Compass", "Direction", "medium"],
        ["Telescope", "Stars", "medium"],
        ["Microscope", "Tiny", "medium"],
        ["Suitcase", "Travel", "easy"],
        ["Wallet", "Money", "easy"],
        ["Flashlight", "Dark", "easy"],
        ["Calculator", "Math", "easy"],
        ["Alarm Clock", "Morning", "easy"],
        ["Remote", "Buttons", "easy"],
        ["Toothbrush", "Teeth", "easy"]
    ],

    games: [
        ["Minecraft", "Blocks", "easy"],
        ["Roblox", "Avatar", "easy"],
        ["Fortnite", "Battle", "easy"],
        ["Chess", "Checkmate", "easy"],
        ["Monopoly", "Money", "easy"],
        ["UNO", "Cards", "easy"],
        ["Among Us", "Sus", "easy"],
        ["Tetris", "Blocks", "easy"],
        ["Pac-Man", "Maze", "easy"],
        ["Mario Kart", "Racing", "easy"],
        ["Pokemon", "Pikachu", "easy"],
        ["Clash Royale", "Cards", "medium"],
        ["FIFA", "Football", "easy"],
        ["Subway Surfers", "Running", "easy"],
        ["Rocket League", "Cars", "easy"],
        ["Valorant", "Agents", "medium"],
        ["Terraria", "Mining", "medium"],
        ["Geometry Dash", "Music", "medium"],
        ["Cuphead", "Cartoon", "medium"]
    ],

    space: [
        ["Moon", "Crater", "easy"],
        ["Mars", "Red", "easy"],
        ["Sun", "Heat", "easy"],
        ["Earth", "Home", "easy"],
        ["Jupiter", "Largest", "easy"],
        ["Saturn", "Rings", "easy"],
        ["Black Hole", "Gravity", "medium"],
        ["Galaxy", "Stars", "easy"],
        ["Astronaut", "Helmet", "easy"],
        ["Rocket", "Launch", "easy"],
        ["Meteor", "Space Rock", "medium"],
        ["Comet", "Tail", "easy"],
        ["Asteroid", "Rock", "easy"],
        ["Nebula", "Cloud", "medium"],
        ["Telescope", "Stars", "easy"],
        ["Orbit", "Circle", "medium"],
        ["Gravity", "Force", "medium"],
        ["Alien", "UFO", "easy"],
        ["Spaceship", "Travel", "easy"],
        ["Space Station", "Orbit", "medium"]
    ],

    nature: [
        ["Mountain", "Peak", "easy"],
        ["River", "Flow", "easy"],
        ["Waterfall", "Drop", "easy"],
        ["Forest", "Trees", "easy"],
        ["Volcano", "Lava", "easy"],
        ["Rainbow", "Colors", "easy"],
        ["Thunder", "Storm", "easy"],
        ["Lightning", "Electricity", "medium"],
        ["Cloud", "Sky", "easy"],
        ["Ocean", "Waves", "easy"],
        ["Desert", "Sand", "easy"],
        ["Island", "Water", "easy"],
        ["Cave", "Dark", "easy"],
        ["Glacier", "Ice", "medium"],
        ["Earthquake", "Shake", "medium"],
        ["Tornado", "Spin", "medium"],
        ["Sunset", "Evening", "easy"],
        ["Forest Fire", "Smoke", "medium"],
        ["Avalanche", "Snow", "medium"]
    ],

    school: [
        ["Teacher", "Classroom", "easy"],
        ["Homework", "Deadline", "easy"],
        ["Exam", "Marks", "easy"],
        ["Blackboard", "Chalk", "easy"],
        ["Notebook", "Pages", "easy"],
        ["Pencil", "Writing", "easy"],
        ["Eraser", "Mistake", "easy"],
        ["Calculator", "Math", "easy"],
        ["Library", "Books", "easy"],
        ["Backpack", "Books", "easy"],
        ["Timetable", "Schedule", "easy"],
        ["Principal", "Office", "medium"],
        ["Laboratory", "Experiment", "medium"],
        ["Recess", "Break", "easy"],
        ["Uniform", "School", "easy"],
        ["Detention", "Punishment", "medium"],
        ["Textbook", "Study", "easy"],
        ["Project", "Presentation", "easy"],
        ["Graduation", "Diploma", "medium"],
        ["Classmate", "Friend", "easy"]
    ],

    science: [
        ["Atom", "Electron", "medium"],
        ["Molecule", "Bond", "medium"],
        ["Gravity", "Force", "easy"],
        ["Electricity", "Current", "medium"],
        ["Magnet", "Attract", "easy"],
        ["DNA", "Genetics", "medium"],
        ["Cell", "Biology", "easy"],
        ["Photosynthesis", "Plants", "medium"],
        ["Evolution", "Darwin", "medium"],
        ["Friction", "Resistance", "medium"],
        ["Pressure", "Force", "medium"],
        ["Energy", "Work", "easy"],
        ["Light", "Photon", "medium"],
        ["Sound", "Wave", "easy"],
        ["Temperature", "Heat", "easy"],
        ["Acid", "pH", "easy"],
        ["Base", "Alkaline", "medium"],
        ["Catalyst", "Reaction", "hard"],
        ["Nucleus", "Center", "medium"]
    ],

    technology: [
        ["Computer", "Keyboard", "easy"],
        ["Internet", "Web", "easy"],
        ["Phone", "Call", "easy"],
        ["Wi-Fi", "Router", "easy"],
        ["Bluetooth", "Wireless", "easy"],
        ["Robot", "Machine", "easy"],
        ["AI", "Intelligence", "medium"],
        ["Coding", "Programming", "easy"],
        ["YouTube", "Videos", "easy"],
        ["Google", "Search", "easy"],
        ["Laptop", "Portable", "easy"],
        ["Password", "Security", "easy"],
        ["Battery", "Power", "easy"],
        ["Charger", "Electricity", "easy"],
        ["Camera", "Lens", "easy"],
        ["Drone", "Flying", "easy"],
        ["Satellite", "Orbit", "medium"],
        ["Algorithm", "Steps", "hard"],
        ["Website", "Browser", "easy"],
        ["Server", "Data", "medium"]
    ],

    entertainment: [
        ["Movie", "Cinema", "easy"],
        ["Actor", "Film", "easy"],
        ["Singer", "Music", "easy"],
        ["Concert", "Stage", "easy"],
        ["Netflix", "Streaming", "easy"],
        ["YouTube", "Creator", "easy"],
        ["Superhero", "Cape", "easy"],
        ["Cartoon", "Animation", "easy"],
        ["Comedy", "Laugh", "easy"],
        ["Horror", "Scary", "easy"],
        ["Director", "Camera", "medium"],
        ["Podcast", "Audio", "easy"],
        ["Theater", "Stage", "easy"],
        ["Celebrity", "Famous", "easy"],
        ["Trailer", "Preview", "medium"],
        ["Animation", "Frames", "medium"],
        ["Soundtrack", "Music", "medium"],
        ["Villain", "Evil", "easy"],
        ["Plot Twist", "Surprise", "medium"]
    ],

    everyday: [
        ["Bed", "Sleep", "easy"],
        ["Shower", "Water", "easy"],
        ["Toothpaste", "Brush", "easy"],
        ["Soap", "Clean", "easy"],
        ["Chair", "Sit", "easy"],
        ["Table", "Food", "easy"],
        ["Door", "Handle", "easy"],
        ["Window", "Glass", "easy"],
        ["Car", "Drive", "easy"],
        ["Bus", "Transport", "easy"],
        ["Money", "Wallet", "easy"],
        ["Keys", "Lock", "easy"],
        ["Shoes", "Feet", "easy"],
        ["Clothes", "Wear", "easy"],
        ["Water Bottle", "Drink", "easy"],
        ["Fridge", "Cold", "easy"],
        ["Television", "Remote", "easy"],
        ["Sofa", "Living Room", "easy"],
        ["Kitchen", "Cooking", "easy"],
        ["Mirror", "Reflection", "easy"]
    ]
};


// ==========================================
// GAME STATE
// ==========================================

let totalPlayers = 5;

let totalImposters = 1;

let secretWord = "";

let imposterClue = "";

let imposters = [];

let caughtImposters = [];

let currentPlayerIndex = 0;

let startingPlayer = 1;

let roundDirection = "CLOCKWISE";


// ==========================================
// SHOW SCREEN
// ==========================================

function showScreen(screen) {

    document.querySelectorAll(".screen").forEach(s => {
        s.classList.remove("active");
    });

    screen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ==========================================
// SOUND
// ==========================================

function beep(frequency = 440, duration = 100) {

    try {

        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;

        if (!AudioContext) {
            return;
        }

        const audioContext =
            new AudioContext();

        const oscillator =
            audioContext.createOscillator();

        const gain =
            audioContext.createGain();

        oscillator.frequency.value =
            frequency;

        oscillator.type = "sine";

        gain.gain.setValueAtTime(
            0.05,
            audioContext.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
            0.001,
            audioContext.currentTime +
            duration / 1000
        );

        oscillator.connect(gain);

        gain.connect(
            audioContext.destination
        );

        oscillator.start();

        oscillator.stop(
            audioContext.currentTime +
            duration / 1000
        );

    } catch (error) {
        // Sound is optional.
    }
}


// ==========================================
// VIBRATION
// ==========================================

function vibrate(pattern = 50) {

    if ("vibrate" in navigator) {
        navigator.vibrate(pattern);
    }
}


// ==========================================
// CUSTOM WORDS
// ==========================================

categorySelect.addEventListener(
    "change",
    () => {

        if (
            categorySelect.value === "custom"
        ) {

            customWordsBox.classList.remove(
                "hidden"
            );

        } else {

            customWordsBox.classList.add(
                "hidden"
            );
        }
    }
);


// ==========================================
// GET WORDS
// ==========================================

function getWords() {

    const category =
        categorySelect.value;

    const difficulty =
        difficultySelect.value;


    // CUSTOM WORDS
    if (category === "custom") {

        const words =
            customWords.value
                .split(",")
                .map(word => word.trim())
                .filter(word => word.length > 0);


        if (words.length < 3) {

            alert(
                "Please enter at least 3 custom words."
            );

            return null;
        }


        return words.map(word => [

            word,

            "Think of something related to the word.",

            "medium"

        ]);
    }


    // RANDOM CATEGORY
    if (category === "random") {

        let allWords = [];

        Object.values(wordDatabase)
            .forEach(categoryWords => {

                allWords =
                    allWords.concat(
                        categoryWords
                    );

            });


        let filtered =
            allWords.filter(word => {

                return word[2] === difficulty;

            });


        if (filtered.length < 3) {
            filtered = allWords;
        }


        return filtered;
    }


    // SPECIFIC CATEGORY

    let words =
        wordDatabase[category] || [];


    let filtered =
        words.filter(word => {

            return word[2] === difficulty;

        });


    if (filtered.length < 3) {
        filtered = words;
    }


    return filtered;
}


// ==========================================
// CHOOSE IMPOSTERS
// ==========================================

function chooseImposters() {

    imposters = [];


    while (
        imposters.length <
        totalImposters
    ) {

        const randomPlayer =
            Math.floor(
                Math.random() *
                totalPlayers
            ) + 1;


        if (
            !imposters.includes(
                randomPlayer
            )
        ) {

            imposters.push(
                randomPlayer
            );
        }
    }


    imposters.sort(
        (a, b) => a - b
    );
}


// ==========================================
// CHOOSE ROUND DIRECTION
// ==========================================

function chooseRoundDirection() {

    roundDirection =
        Math.random() < 0.5
            ? "CLOCKWISE"
            : "ANTICLOCKWISE";


    startingPlayer =
        Math.floor(
            Math.random() *
            totalPlayers
        ) + 1;
}


// ==========================================
// START GAME
// ==========================================

function startGame() {

    totalPlayers =
        parseInt(
            playerCount.value
        );


    totalImposters =
        parseInt(
            imposterCount.value
        );


    if (
        totalImposters >=
        totalPlayers
    ) {

        alert(
            "There must be at least one crewmate."
        );

        return;
    }


    const words =
        getWords();


    if (
        !words ||
        words.length === 0
    ) {

        alert(
            "No words available."
        );

        return;
    }


    const selected =
        words[
            Math.floor(
                Math.random() *
                words.length
            )
        ];


    // Database format:
    // [word, clue, difficulty]

    secretWord =
        selected[0];

    imposterClue =
        selected[1];


    chooseImposters();

    chooseRoundDirection();


    currentPlayerIndex = 0;

    caughtImposters = [];


    // PASSING ALWAYS STARTS AT PLAYER 1

    passPlayer.textContent =
        "PLAYER 1";


    currentPlayerNumber.textContent =
        "1";


    roleResult.classList.add(
        "hidden"
    );


    revealButton.classList.remove(
        "hidden"
    );


    nextPlayerButton.classList.add(
        "hidden"
    );


    showScreen(passScreen);

    beep(520, 100);
}


// ==========================================
// HOME → SETUP
// ==========================================

startButton.addEventListener(
    "click",
    () => {

        showScreen(setupScreen);

        beep(520, 100);

    }
);


// ==========================================
// HOME BUTTON
// ==========================================

homeButton.addEventListener(
    "click",
    () => {

        resetGame();

        showScreen(homeScreen);

        beep(520, 100);

    }
);


// ==========================================
// BEGIN EXPEDITION
// ==========================================

beginButton.addEventListener(
    "click",
    () => {

        startGame();

    }
);


// ==========================================
// READY
// ==========================================

readyButton.addEventListener(
    "click",
    () => {

        currentPlayerNumber.textContent =
            currentPlayerIndex + 1;


        roleResult.classList.add(
            "hidden"
        );


        revealButton.classList.remove(
            "hidden"
        );


        nextPlayerButton.classList.add(
            "hidden"
        );


        showScreen(roleScreen);

        beep(600, 80);

    }
);


// ==========================================
// REVEAL ROLE
// ==========================================

revealButton.addEventListener(
    "click",
    () => {

        const playerNumber =
            currentPlayerIndex + 1;


        const isImposter =
            imposters.includes(
                playerNumber
            );


        roleResult.classList.remove(
            "hidden"
        );


        if (isImposter) {

            // ==============================
            // IMPOSTER
            // ==============================

            roleIcon.textContent =
                "👽";


            roleText.textContent =
                "IMPOSTER";


            roleText.style.color =
                "#ff4d5a";


            wordText.innerHTML =

                `<span class="clue-label">CLUE:</span>
                 <span class="imposter-clue">${imposterClue}</span>`;


            wordText.style.color =
                "#ffd166";


            roleHint.textContent =
                "Blend in. Give a clue that fits without revealing that you are the imposter.";


        } else {

            // ==============================
            // CREWMATE
            // ==============================

            roleIcon.textContent =
                "👨‍🚀";


            roleText.textContent =
                "CREWMATE";


            roleText.style.color =
                "#4da6ff";


            wordText.textContent =
                secretWord;


            wordText.style.color =
                "#4da6ff";


            roleHint.textContent =
                "Give a clue without making the word too obvious.";
        }


        // Last player

        if (
            currentPlayerIndex ===
            totalPlayers - 1
        ) {

            nextPlayerButton.textContent =
                "START THE ROUND →";

        } else {

            nextPlayerButton.textContent =
                "PASS TO NEXT PLAYER →";
        }


        nextPlayerButton.classList.remove(
            "hidden"
        );


        revealButton.classList.add(
            "hidden"
        );


        // SAME SOUND FOR EVERYONE
        beep(600, 120);

        vibrate(50);

    }
);


// ==========================================
// NEXT PLAYER
// ==========================================

nextPlayerButton.addEventListener(
    "click",
    () => {

        if (
            currentPlayerIndex <
            totalPlayers - 1
        ) {

            currentPlayerIndex++;


            currentPlayerNumber.textContent =
                currentPlayerIndex + 1;


            roleResult.classList.add(
                "hidden"
            );


            revealButton.classList.remove(
                "hidden"
            );


            nextPlayerButton.classList.add(
                "hidden"
            );


            showScreen(roleScreen);

            beep(500, 70);


        } else {

            showDiscussion();

        }
    }
);


// ==========================================
// DISCUSSION / ROUND START
// ==========================================

function showDiscussion() {

    discussionStatus.textContent =
        "ODYSSEY BEGINS";


    discussionHeading.textContent =
        "THE ROUND STARTS";


    discussionParagraph.innerHTML =
        `The round starts with<br>
         <strong>PLAYER ${startingPlayer}</strong>`;


    discussionTitle.textContent =
        `GO ${roundDirection}`;


    discussionSubtitle.textContent =
        "Follow the direction around the crew.";


    showScreen(
        discussionScreen
    );


    beep(700, 150);
}


// ==========================================
// START VOTING
// ==========================================

voteButton.addEventListener(
    "click",
    () => {

        createVoteButtons();

        showScreen(voteScreen);

        beep(650, 100);

    }
);


// ==========================================
// CREATE VOTE BUTTONS
// ==========================================

function createVoteButtons() {

    voteButtons.innerHTML = "";


    for (
        let i = 1;
        i <= totalPlayers;
        i++
    ) {

        if (
            caughtImposters.includes(i)
        ) {

            continue;
        }


        const button =
            document.createElement(
                "button"
            );


        button.className =
            "vote-button";


        button.textContent =
            `PLAYER ${i}`;


        button.addEventListener(
            "click",
            () => {

                handleVote(i);

            }
        );


        voteButtons.appendChild(
            button
        );
    }
}


// ==========================================
// HANDLE VOTE
// ==========================================

function handleVote(
    playerNumber
) {

    const isImposter =
        imposters.includes(
            playerNumber
        );


    if (isImposter) {

        if (
            !caughtImposters.includes(
                playerNumber
            )
        ) {

            caughtImposters.push(
                playerNumber
            );
        }


        // ALL IMPOSTERS CAUGHT

        if (
            caughtImposters.length ===
            imposters.length
        ) {

            showFinalResult(true);

        } else {

            showIntermediateResult(
                playerNumber
            );
        }


    } else {

        // WRONG PLAYER

        showFinalResult(false);

    }
}


// ==========================================
// INTERMEDIATE RESULT
// ==========================================

function showIntermediateResult(
    caughtPlayer
) {

    resultIcon.textContent =
        "🎯";


    resultTitle.textContent =
        "ONE IMPOSTER CAUGHT";


    resultMessage.innerHTML =
        `PLAYER ${caughtPlayer} was an imposter!<br><br>
         <strong>There is still another imposter hiding.</strong>`;


    finalWord.textContent =
        secretWord;


    removeImposterCard();


    playAgainButton.textContent =
        "CONTINUE VOTING";


    playAgainButton.dataset.mode =
        "continue";


    showScreen(
        resultScreen
    );


    beep(750, 150);
}


// ==========================================
// FINAL RESULT
// ==========================================

function showFinalResult(
    crewWon
) {

    removeImposterCard();


    finalWord.textContent =
        secretWord;


    if (crewWon) {

        // ==============================
        // CREW WINS
        // ==============================

        resultIcon.textContent =
            "🎉";


        resultTitle.textContent =
            "IMPOSTER CAUGHT";


        resultMessage.innerHTML =
            `The crew found every imposter!<br><br>
             <strong>All imposters have been exposed.</strong>`;


        playAgainButton.textContent =
            "🚀 NEW EXPEDITION";


        playAgainButton.dataset.mode =
            "new";


    } else {

        // ==============================
        // IMPOSTER WINS
        // ==============================

        resultIcon.textContent =
            "👽";


        resultTitle.textContent =
            "IMPOSTER ESCAPED";


        resultMessage.innerHTML =
            `The crew voted for the wrong player.<br><br>
             <strong>The imposters escaped the expedition.</strong>`;


        // SHOW IMPOSTER CARD

        createImposterResultCard();


        playAgainButton.textContent =
            "🚀 NEW EXPEDITION";


        playAgainButton.dataset.mode =
            "new";
    }


    showScreen(
        resultScreen
    );


    beep(
        crewWon ? 850 : 250,
        200
    );
}


// ==========================================
// CREATE IMPOSTER RESULT CARD
// ==========================================

function createImposterResultCard() {

    removeImposterCard();


    const card =
        document.createElement(
            "div"
        );


    card.id =
        "imposterResultCard";


    card.className =
        "answer-card imposter-result-card";


    const label =
        document.createElement(
            "div"
        );


    label.className =
        "status-label";


    label.textContent =
        "IMPOSTER";


    const player =
        document.createElement(
            "div"
        );


    player.className =
        "final-word";


    player.textContent =
        imposters
            .map(
                playerNumber =>
                    `PLAYER ${playerNumber}`
            )
            .join(" & ");


    label.style.color =
        "#ff4d5a";


    player.style.color =
        "#ff4d5a";


    card.appendChild(label);

    card.appendChild(player);


    answerCard.insertAdjacentElement(
        "afterend",
        card
    );
}


// ==========================================
// REMOVE IMPOSTER CARD
// ==========================================

function removeImposterCard() {

    const oldCard =
        document.getElementById(
            "imposterResultCard"
        );


    if (oldCard) {
        oldCard.remove();
    }
}


// ==========================================
// RESULT BUTTON
// ==========================================

playAgainButton.addEventListener(
    "click",
    () => {

        const mode =
            playAgainButton.dataset.mode;


        if (mode === "continue") {

            createVoteButtons();

            showScreen(
                voteScreen
            );

            beep(650, 100);


        } else {

            resetGame();

            showScreen(
                setupScreen
            );

            beep(520, 100);

        }
    }
);


// ==========================================
// RESET GAME
// ==========================================

function resetGame() {

    secretWord = "";

    imposterClue = "";

    imposters = [];

    caughtImposters = [];

    currentPlayerIndex = 0;

    startingPlayer = 1;

    roundDirection =
        "CLOCKWISE";


    passPlayer.textContent =
        "PLAYER 1";


    currentPlayerNumber.textContent =
        "1";


    roleResult.classList.add(
        "hidden"
    );


    revealButton.classList.remove(
        "hidden"
    );


    nextPlayerButton.classList.add(
        "hidden"
    );


    removeImposterCard();


    playAgainButton.dataset.mode =
        "new";


    playAgainButton.textContent =
        "🚀 NEW EXPEDITION";
}


// ==========================================
// INITIAL STATE
// ==========================================

showScreen(homeScreen);