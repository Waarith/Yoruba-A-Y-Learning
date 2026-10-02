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
                class="w-full h-52 sm:h-56 md:h-60 object-contain p-3"
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
        { name: "Àjà", image: "./images/aja.jpg" },
        { name: "Àkàrà", image: "./images/akara.jpg" },
        { name: "Àgùtàn", image: "./images/agutan.png" },
        { name: "Àdìrẹ", image: "./images/adire.jpg" },
        { name: "Àgbàdo", image: "./images/agbado.jpg" }
    ],

    B: [
    { name: "Bàtà", image: "./images/bata.jpg" },
    { name: "Bọ́ọ̀lù", image: "./images/boolu.jpg" },
    { name: "Búrẹ́dì", image: "./images/bread.jpg" },
    { name: "Bàbà", image: "./images/baba.jpg" },
    { name: "Báàgì", image: "./images/bag.jpg" }
],

D: [
    { name: "Dòdò", image: "./images/dodo.jpg" },
    { name: "Dídì", image: "./images/ice.jpg" },
    { name: "Dẹbà", image: "./images/clay-pot.jpg" },
    { name: "Dundun", image: "./images/dundun.jpg" },
    { name: "Dọ́tà", image: "./images/gutter.jpg" }
],

E: [
    { name: "Eku", image: "./images/rat.jpg" },
    { name: "Eja", image: "./images/fish.jpg" },
    { name: "Eré", image: "./images/statue.jpg" },
    { name: "Ewé", image: "./images/leaf.jpg" },
    { name: "Egúngún", image: "./images/bone.jpg" }
],

"Ẹ": [
    { name: "Ẹyẹ", image: "./images/bird.jpg" },
    { name: "Ẹran", image: "./images/meat.jpg" },
    { name: "Ẹ̀fọ́", image: "./images/vegetable.jpg" },
    { name: "Ẹyin", image: "./images/egg.jpg" },
    { name: "Ẹ̀mí", image: "./images/shea-tree.jpg" }
],

F: [
    { name: "Fìlà", image: "./images/cap.jpg" },
    { name: "Fasá", image: "./images/basin.jpg" },
    { name: "Fídíò", image: "./images/video-player.jpg" },
    { name: "Fèrèsé", image: "./images/window.jpg" },
    { name: "Fọ̀nà", image: "./images/phone.jpg" }
],

G: [
    { name: "Gèlè", image: "./images/gele.jpg" },
    { name: "Gálà", image: "./images/antelope.jpg" },
    { name: "Gíráàsì", image: "./images/glass.jpg" },
    { name: "Gidì", image: "./images/wall.jpg" },
    { name: "Gárí", image: "./images/gaari.jpg" }
],

GB: [
    { name: "Gbáguda", image: "./images/cassava.jpg" },
    { name: "Gàngan", image: "./images/gangan.jpg" },
    { name: "Gbọ̀ngàn", image: "./images/hall.jpg" },
    { name: "Gbanjo", image: "./images/cloth.jpg" },
    { name: "Gbanja", image: "./images/obi.jpg" }
],

H: [
    { name: "Hámà", image: "./images/hammer.jpg" },
    { name: "Hẹ́ndiáṣíìfù", image: "./images/handkerchief.jpg" },
    { name: "Hẹlikópútà", image: "./images/helicopter.jpg" },
    { name: "Hóòbù", image: "./images/stove.jpg" },
    { name: "Họ́ra", image: "./images/clock.jpg" }
],

I: [
    { name: "Ìlù", image: "./images/drum.jpg" },
    { name: "Iṣu", image: "./images/yam.jpg" },
    { name: "Igi", image: "./images/tree.jpg" },
    { name: "Igo", image: "./images/bottle.jpg" },
    { name: "Irún", image: "./images/hair.jpg" }
],

J: [
    { name: "Jígí", image: "./images/mirror.jpg" },
    { name: "Jàgà", image: "./images/bicycle-handle.jpg" },
    { name: "Jámù", image: "./images/jam.jpg" },
    { name: "Juujuu", image: "./images/amulet.jpg" },
    { name: "Jeep", image: "./images/jeep.jpg" }
],

K: [
    { name: "Kẹ̀kẹ́", image: "./images/bicycle.jpg" },
    { name: "Kọ́kọ́rọ́", image: "./images/ant.jpg" },
    { name: "Kòkò", image: "./images/cocoa.jpg" },
    { name: "Kòkòrò", image: "./images/insect.jpg" },
    { name: "Kòtò", image: "./images/pit.jpg" }
],

L: [
    { name: "Lágídígbà", image: "./images/waist-beads.jpg" },
    { name: "Lámilámi", image: "./images/dragonfly.jpg" },
    { name: "Láàbú", image: "./images/wood-ash.jpg" },
    { name: "Lẹ́mọ́ọ̀nù", image: "./images/lemon.jpg" },
    { name: "Lẹ́tà", image: "./images/letter.jpg" }
],

M: [
    { name: "Màálù", image: "./images/cow.jpg" },
    { name: "Mọ́tò", image: "./images/car.jpg" },
    { name: "Mílíkì", image: "./images/milk.jpg" },
    { name: "Mẹ́tàlì", image: "./images/metal.jpg" },
    { name: "Mágàsínì", image: "./images/magazine.jpg" }
],

N: [
    { name: "Náírà", image: "./images/naira.jpg" },
    { name: "Nẹ́ẹ̀tì", image: "./images/net.jpg" },
    { name: "Níndù", image: "./images/needle.jpg" },
    { name: "Nọ́ọ̀sì", image: "./images/nurse.jpg" },
    { name: "Nóòtbúùkù", image: "./images/notebook.jpg" }
],

O: [
    { name: "Ológbò", image: "./images/cat.jpg" },
    { name: "Ògèdè", image: "./images/banana.jpg" },
    { name: "Omi", image: "./images/water.jpg" },
    { name: "Òkúta", image: "./images/stone.jpg" },
    { name: "Òrùka", image: "./images/ring.jpg" }
],

"Ọ": [
    { name: "Ọ̀pẹ", image: "./images/palm-tree.jpg" },
    { name: "Ọ̀bẹ", image: "./images/knife.jpg" },
    { name: "Ọbọ", image: "./images/monkey.jpg" },
    { name: "Ọmọlángidì", image: "./images/wooden-doll.jpg" },
    { name: "Ọwọ́", image: "./images/broom.jpg" }
],

P: [
    { name: "Pépéye", image: "./images/duck.jpg" },
    { name: "Pàkí", image: "../images/cassava" },
    { name: "Pákó", image: "./images/plank.jpg" },
    { name: "Pásán", image: "./images/whip.jpg" },
    { name: "Pápá", image: "./images/field.jpg" }
],

R: [
    { name: "Ràkunmí", image: "./images/camel.jpg" },
    { name: "Rédíò", image: "./images/radio.jpg" },
    { name: "Rọ́bà", image: "./images/container.jpg" },
    { name: "Rúlà", image: "./images/ruler.jpg" },
    { name: "Rẹ́fírí", image: "./images/whistle.jpg" }
],

S: [
    { name: "Sálúbàtà", image: "./images/slippers.jpg" },
    { name: "Sálàbà", image: "./images/salad.jpg" },
    { name: "Sẹ́ẹ̀tì", image: "./images/shirt.jpg" },
    { name: "Sáàgì", image: "./images/sack.jpg" },
    { name: "Sọ́ọ̀sì", image: "./images/sauce.jpg" }
],

"Ṣ": [
    { name: "Ṣíbí", image: "./images/spoon.jpg" },
    { name: "Ṣòkòtò", image: "./images/trousers.jpg" },
    { name: "Ṣẹ́kẹ́ṣẹ́kẹ́", image: "./images/handcuffs.jpg" },
    { name: "Ṣáṣárá", image: "./images/broom.jpg" },
    { name: "Ṣayaba", image: "./images/cage.jpg" }
],

T: [
    { name: "Táíà", image: "./images/tyre.jpg" },
    { name: "Táblì", image: "./images/table.jpg" },
    { name: "Tata", image: "./images/grasshopper.jpg" },
    { name: "Tóṣì", image: "./images/torchlight.jpg" },
    { name: "Tófe", image: "./images/toffee.jpg" }
],

U: [
    { name: "Ulé", image: "./images/house.jpg" },
    { name: "Uṣu", image: "./images/yam.jpg" },
    { name: "Ugi", image: "./images/tree.jpg" },
    { name: "Ugo", image: "./images/bottle.jpg" },
    { name: "Ugbá", image: "./images/calabash.jpg" }
],

W: [
    { name: "Wàrà", image: "./images/cheese.jpg" },
    { name: "Wálà", image: "./images/slate.jpg" },
    { name: "Wọ́ọ̀tì", image: "./images/watch.jpg" },
    { name: "Wáyà", image: "./images/wire.jpg" },
    { name: "Wíwà", image: "./images/wardrobe.jpg" }
],

Y: [
    { name: "Yánmùyánmú", image: "./images/mosquito.jpg" },
    { name: "Yọ̀bọ́", image: "./images/salt.jpg" },
    { name: "Yànrìn", image: "./images/sand.jpg" },
    { name: "Yánrin", image: "./images/wild-spinach.jpg" },
    { name: "Yàbà", image: "./images/plantain.jpg" }
],

};

    return data[letter] || [];
}