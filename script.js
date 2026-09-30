const alphabet = [
    "A", "B", "D", "E", "Ẹ",
    "F", "G", "GB", "H", "I",
    "J", "K", "L", "M", "N",
    "O", "Ọ", "P", "R", "S",
    "Ṣ", "T", "U", "W", "Y"
];


const alphabetContainer =
    document.getElementById("alphabetContainer");

const learningSection =
    document.getElementById("learningSection");

const selectedLetter =
    document.getElementById("selectedLetter");

const itemsContainer =
    document.getElementById("itemsContainer");


// Display alphabet
alphabet.forEach(letter => {

    const button = document.createElement("button");

    button.textContent = letter;

    button.className = `
        h-14
        rounded-xl
        bg-white
        border
        border-gray-200
        text-xl
        font-bold
        text-gray-700
        shadow-sm
        hover:bg-green-600
        hover:text-white
        hover:border-green-600
        transition
        duration-200
    `;

    button.addEventListener("click", () => {
        showLetter(letter);
    });

    alphabetContainer.appendChild(button);
});


// Display selected letter
function showLetter(letter) {

    selectedLetter.textContent = letter;

    learningSection.classList.remove("hidden");

    itemsContainer.innerHTML = "";

    // Temporary data
    const items = getItems(letter);

    items.forEach(item => {

        const card = document.createElement("div");

        card.className = `
            bg-white
            rounded-2xl
            overflow-hidden
            shadow-md
            hover:shadow-xl
            transition
            duration-300
        `;

        card.innerHTML = `
            <img
                src="${item.image}"
                alt="${item.name}"
                class="w-full h-48 object-cover"
            >

            <div class="p-4 text-center">
                <h4 class="text-lg font-bold">
                    ${item.name}
                </h4>
            </div>
        `;

        itemsContainer.appendChild(card);
    });

    learningSection.scrollIntoView({
        behavior: "smooth"
    });
}


// Temporary data
function getItems(letter) {

const data = {

    A: [
        { name: "Àjà", image: "./images/apple.jpg" },
        { name: "Àkàrà", image: "./images/aeroplane.jpg" },
        { name: "Àgùtàn", image: "./images/artwork.jpg" },
        { name: "Àdìrẹ", image: "./images/ant.jpg" },
        { name: "Àgbàdo", image: "./images/avocado.jpg" }
    ],

    B: [
        { name: "Bàtà", image: "./images/ball.jpg" },
        { name: "Bàtàkù", image: "./images/book.jpg" },
        { name: "Bọ́ọ̀lù", image: "./images/bird.jpg" },
        { name: "Bùrẹ́dì", image: "./images/bus.jpg" },
        { name: "Bàtà", image: "./images/banana.jpg" }
    ],

    D: [
        { name: "Dàńgóte", image: "./images/dog.jpg" },
        { name: "Dàùda", image: "./images/door.jpg" },
        { name: "Dìrámà", image: "./images/drum.jpg" },
        { name: "Dọ́là", image: "./images/doll.jpg" },
        { name: "Dùndún", image: "./images/duck.jpg" }
    ],

    E: [
        { name: "Ẹ̀fọ́", image: "./images/egg.jpg" },
        { name: "Ẹ̀wà", image: "./images/elephant.jpg" },
        { name: "Ẹyẹ", image: "./images/eagle.jpg" },
        { name: "Ẹja", image: "./images/envelope.jpg" },
        { name: "Epo", image: "./images/engine.jpg" }
    ],

    "Ẹ": [
        { name: "Ẹja", image: "./images/fish.jpg" },
        { name: "Ẹyin", image: "./images/egg.jpg" },
        { name: "Ẹfọ", image: "./images/vegetable.jpg" },
        { name: "Ẹṣin", image: "./images/horse.jpg" },
        { name: "Ẹkuru", image: "./images/ekuru.jpg" }
    ],

    F: [
        { name: "Fìlà", image: "./images/fish.jpg" },
        { name: "Flower", image: "./images/flower.jpg" },
        { name: "Fan", image: "./images/fan.jpg" },
        { name: "Frog", image: "./images/frog.jpg" },
        { name: "Flag", image: "./images/flag.jpg" }
    ],

    G: [
        { name: "Goat", image: "./images/goat.jpg" },
        { name: "Guitar", image: "./images/guitar.jpg" },
        { name: "Glass", image: "./images/glass.jpg" },
        { name: "Globe", image: "./images/globe.jpg" },
        { name: "Grapes", image: "./images/grapes.jpg" }
    ],

    GB: [
        { name: "Gbà — Accept", image: "./images/accept.jpg" },
        { name: "Gbogbo — All", image: "./images/all.jpg" },
        { name: "Gbogbo ènìyàn — Everyone", image: "./images/everyone.jpg" },
        { name: "Gbígbé — Carrying", image: "./images/carrying.jpg" },
        { name: "Gbígbóná — Hot", image: "./images/hot.jpg" }
    ],

    H: [
        { name: "House", image: "./images/house.jpg" },
        { name: "Hat", image: "./images/hat.jpg" },
        { name: "Horse", image: "./images/horse.jpg" },
        { name: "Hammer", image: "./images/hammer.jpg" },
        { name: "Helicopter", image: "./images/helicopter.jpg" }
    ],

    I: [
        { name: "Ice", image: "./images/ice.jpg" },
        { name: "Ice cream", image: "./images/ice-cream.jpg" },
        { name: "Iron", image: "./images/iron.jpg" },
        { name: "Island", image: "./images/island.jpg" },
        { name: "Igloo", image: "./images/igloo.jpg" }
    ],

    J: [
        { name: "Jam", image: "./images/jam.jpg" },
        { name: "Jar", image: "./images/jar.jpg" },
        { name: "Jeans", image: "./images/jeans.jpg" },
        { name: "Jacket", image: "./images/jacket.jpg" },
        { name: "Juice", image: "./images/juice.jpg" }
    ],

    K: [
        { name: "Kite", image: "./images/kite.jpg" },
        { name: "Key", image: "./images/key.jpg" },
        { name: "Kettle", image: "./images/kettle.jpg" },
        { name: "King", image: "./images/king.jpg" },
        { name: "Keyboard", image: "./images/keyboard.jpg" }
    ],

    L: [
        { name: "Lion", image: "./images/lion.jpg" },
        { name: "Lamp", image: "./images/lamp.jpg" },
        { name: "Leaf", image: "./images/leaf.jpg" },
        { name: "Lemon", image: "./images/lemon.jpg" },
        { name: "Laptop", image: "./images/laptop.jpg" }
    ],

    M: [
        { name: "Moon", image: "./images/moon.jpg" },
        { name: "Mango", image: "./images/mango.jpg" },
        { name: "Monkey", image: "./images/monkey.jpg" },
        { name: "Milk", image: "./images/milk.jpg" },
        { name: "Motorcycle", image: "./images/motorcycle.jpg" }
    ],

    N: [
        { name: "Nest", image: "./images/nest.jpg" },
        { name: "Nose", image: "./images/nose.jpg" },
        { name: "Notebook", image: "./images/notebook.jpg" },
        { name: "Nurse", image: "./images/nurse.jpg" },
        { name: "Nut", image: "./images/nut.jpg" }
    ],

    O: [
        { name: "Orange", image: "./images/orange.jpg" },
        { name: "Owl", image: "./images/owl.jpg" },
        { name: "Ocean", image: "./images/ocean.jpg" },
        { name: "Onion", image: "./images/onion.jpg" },
        { name: "Octopus", image: "./images/octopus.jpg" }
    ],

    "Ọ": [
        { name: "Ọ̀gẹ̀dẹ̀ — Banana", image: "./images/banana.jpg" },
        { name: "Ọ̀rẹ — Friend", image: "./images/friend.jpg" },
        { name: "Ọkọ — Vehicle", image: "./images/vehicle.jpg" },
        { name: "Ọ̀bẹ — Knife", image: "./images/knife.jpg" },
        { name: "Ọmọ — Child", image: "./images/child.jpg" }
    ],

    P: [
        { name: "Pen", image: "./images/pen.jpg" },
        { name: "Pencil", image: "./images/pencil.jpg" },
        { name: "Plate", image: "./images/plate.jpg" },
        { name: "Parrot", image: "./images/parrot.jpg" },
        { name: "Pineapple", image: "./images/pineapple.jpg" }
    ],

    R: [
        { name: "Rabbit", image: "./images/rabbit.jpg" },
        { name: "Radio", image: "./images/radio.jpg" },
        { name: "Rain", image: "./images/rain.jpg" },
        { name: "Ring", image: "./images/ring.jpg" },
        { name: "Robot", image: "./images/robot.jpg" }
    ],

    S: [
        { name: "Sun", image: "./images/sun.jpg" },
        { name: "Shoe", image: "./images/shoe.jpg" },
        { name: "Star", image: "./images/star.jpg" },
        { name: "School", image: "./images/school.jpg" },
        { name: "Snake", image: "./images/snake.jpg" }
    ],

    "Ṣ": [
        { name: "Ṣọ́ọ̀bù — Shop", image: "./images/shop.jpg" },
        { name: "Ṣuga — Sugar", image: "./images/sugar.jpg" },
        { name: "Ṣùúrù — Patience", image: "./images/patience.jpg" },
        { name: "Ṣíṣe — Doing", image: "./images/doing.jpg" },
        { name: "Ṣe — Do", image: "./images/do.jpg" }
    ],

    T: [
        { name: "Table", image: "./images/table.jpg" },
        { name: "Tree", image: "./images/tree.jpg" },
        { name: "Tiger", image: "./images/tiger.jpg" },
        { name: "Train", image: "./images/train.jpg" },
        { name: "Television", image: "./images/television.jpg" }
    ],

    U: [
        { name: "Umbrella", image: "./images/umbrella.jpg" },
        { name: "Uniform", image: "./images/uniform.jpg" },
        { name: "Ukulele", image: "./images/ukulele.jpg" },
        { name: "Unicorn", image: "./images/unicorn.jpg" },
        { name: "Urn", image: "./images/urn.jpg" }
    ],

    W: [
        { name: "Water", image: "./images/water.jpg" },
        { name: "Watch", image: "./images/watch.jpg" },
        { name: "Window", image: "./images/window.jpg" },
        { name: "Whale", image: "./images/whale.jpg" },
        { name: "Wheel", image: "./images/wheel.jpg" }
    ],

    Y: [
        { name: "Yam", image: "./images/yam.jpg" },
        { name: "Yak", image: "./images/yak.jpg" },
        { name: "Yacht", image: "./images/yacht.jpg" },
        { name: "Yo-yo", image: "./images/yoyo.jpg" },
        { name: "Yellow flower", image: "./images/yellow-flower.jpg" }
    ]

};

    return data[letter] || [];