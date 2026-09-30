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
        { name: "Fìtílà", image: "./images/flower.jpg" },
        { name: "Fèrè", image: "./images/fan.jpg" },
        { name: "Fọ́tò", image: "./images/frog.jpg" },
        { name: "Fìlàṣì", image: "./images/flag.jpg" }
    ],

    G: [
        { name: "Gọ́gọ́", image: "./images/goat.jpg" },
        { name: "Gọ́tà", image: "./images/guitar.jpg" },
        { name: "Gèlè", image: "./images/glass.jpg" },
        { name: "Gọ́dọ̀", image: "./images/globe.jpg" },
        { name: "Gúúsù", image: "./images/grapes.jpg" }
    ],

    GB: [
    { name: "Gbà", image: "./images/accept.jpg" },
    { name: "Gbogbo", image: "./images/all.jpg" },
    { name: "Gbìn", image: "./images/plant.jpg" },
    { name: "Gbẹ", image: "./images/dry.jpg" },
    { name: "Gbóná", image: "./images/hot.jpg" }
    ],

    H: [
    { name: "Hóró", image: "./images/hole.jpg" },
    { name: "Hámù", image: "./images/hammer.jpg" },
    { name: "Hótẹ́lì", image: "./images/hotel.jpg" },
    { name: "Háḿbágà", image: "./images/hamburger.jpg" },
    { name: "Hẹ́ẹ̀lì", image: "./images/hill.jpg" }
    ],

    I: [
    { name: "Ilé", image: "./images/house.jpg" },
    { name: "Ìkòkò", image: "./images/pot.jpg" },
    { name: "Ìgò", image: "./images/bottle.jpg" },
    { name: "Ìrẹsì", image: "./images/rice.jpg" },
    { name: "Ìwé", image: "./images/book.jpg" }
    ],

    J: [
    { name: "Jùbà", image: "./images/greeting.jpg" },
    { name: "Jà", image: "./images/fight.jpg" },
    { name: "Jẹ", image: "./images/eat.jpg" },
    { name: "Jókòó", image: "./images/sit.jpg" },
    { name: "Jìnà", image: "./images/far.jpg" }
    ],

    K: [
    { name: "Kẹ̀kẹ́", image: "./images/bicycle.jpg" },
    { name: "Kọ́ǹpútà", image: "./images/computer.jpg" },
    { name: "Kàkà", image: "./images/rather.jpg" },
    { name: "Kẹ́tẹ́kẹ́tẹ́", image: "./images/tricycle.jpg" },
    { name: "Kòkòrò", image: "./images/insect.jpg" }
    ],

    L: [
    { name: "Lẹ́tà", image: "./images/letter.jpg" },
    { name: "Lọ́kọ̀", image: "./images/vehicle.jpg" },
    { name: "Lẹ́mọ́nù", image: "./images/lemon.jpg" },
    { name: "Lábẹ́", image: "./images/under.jpg" },
    { name: "Lónìí", image: "./images/today.jpg" }
    ],

    M: [
    { name: "Màmá", image: "./images/mother.jpg" },
    { name: "Màlúù", image: "./images/cow.jpg" },
    { name: "Mọ́tò", image: "./images/car.jpg" },
    { name: "Mọ̀", image: "./images/know.jpg" },
    { name: "Mọ́ńkì", image: "./images/monkey.jpg" }
    ],

    N: [
    { name: "Nǹkan", image: "./images/thing.jpg" },
    { name: "Nà", image: "./images/road.jpg" },
    { name: "Níbẹ̀", image: "./images/there.jpg" },
    { name: "Nínú", image: "./images/inside.jpg" },
    { name: "Nàìjà", image: "./images/nigeria.jpg" }    
    ],

    O: [
    { name: "Ọ̀bẹ", image: "./images/knife.jpg" },
    { name: "Ọkọ", image: "./images/vehicle.jpg" },
    { name: "Omi", image: "./images/water.jpg" },
    { name: "Ògèdèmgbé", image: "./images/plantain.jpg" },
    { name: "Oúnjẹ", image: "./images/food.jpg" }
    ],

    Ọ: [
    { name: "Ọmọ", image: "./images/child.jpg" },
    { name: "Ọ̀gẹ̀dẹ̀", image: "./images/banana.jpg" },
    { name: "Ọ̀rẹ́", image: "./images/friend.jpg" },
    { name: "Ọ̀pá", image: "./images/stick.jpg" },
    { name: "Ọ̀pẹ̀", image: "./images/palm-tree.jpg" }
    ],

        P: [
    { name: "Pàtà", image: "./images/important.jpg" },
    { name: "Pẹ̀tẹ́lẹ̀", image: "./images/plain.jpg" },
    { name: "Pàtàkì", image: "./images/important.jpg" },
    { name: "Pẹ̀lẹ́", image: "./images/gently.jpg" },
    { name: "Pópó", image: "./images/papaya.jpg" }
    ],

    R: [
    { name: "Rẹ́", image: "./images/wet.jpg" },
    { name: "Rìn", image: "./images/walk.jpg" },
    { name: "Rẹ́rìn", image: "./images/smile.jpg" },
    { name: "Rò", image: "./images/think.jpg" },
    { name: "Rán", image: "./images/send.jpg" }
    ],

    S: [
    { name: "Sàgà", image: "./images/sacrifice.jpg" },
    { name: "Sùúrù", image: "./images/patience.jpg" },
    { name: "Sùn", image: "./images/sleep.jpg" },
    { name: "Sọ", image: "./images/speak.jpg" },
    { name: "Sẹ́", image: "./images/do.jpg" }
    ],

    Ṣ: [
    { name: "Ṣá", image: "./images/wakeup.jpg" },
    { name: "Ṣọ́", image: "./images/guard.jpg" },
    { name: "Ṣùgbọ́n", image: "./images/but.jpg" },
    { name: "Ṣuga", image: "./images/sugar.jpg" },
    { name: "Ṣọ́ọ̀bù", image: "./images/shop.jpg" }
    ],

    T: [
    { name: "Tábìlì", image: "./images/table.jpg" },
    { name: "Tà", image: "./images/sell.jpg" },
    { name: "Tẹ́lẹ̀", image: "./images/before.jpg" },
    { name: "Tí", image: "./images/that.jpg" },
    { name: "Tọ́kọ́", image: "./images/first.jpg" }
    ],

    U: [
    { name: "Uà", image: "./images/cry.jpg" },
    { name: "Ujú", image: "./images/eye.jpg" },
    { name: "Úgì", image: "./images/pap.jpg" },
    { name: "Ùn", image: "./images/sleep.jpg" },
    { name: "Ùwà", image: "./images/character.jpg" }
    ],

    W: [
    { name: "Wà", image: "./images/exist.jpg" },
    { name: "Wá", image: "./images/come.jpg" },
    { name: "Wẹ̀", image: "./images/wash.jpg" },
    { name: "Wúrà", image: "./images/gold.jpg" },
    { name: "Wọ́n", image: "./images/they.jpg" }
    ],

    Y: [
    { name: "Yà", image: "./images/separate.jpg" },
    { name: "Yẹ", image: "./images/suitable.jpg" },
    { name: "Yí", image: "./images/turn.jpg" },
    { name: "Yọ̀", image: "./images/remove.jpg" },
    { name: "Yàn", image: "./images/choose.jpg" }
    ],

};

    return data[letter] || [];
}