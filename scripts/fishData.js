const fishCollection = [{
    name: "Irwin",
    length: 2,
    food: "White Wine",
    location: "Siberia",
    species: "Mandarin Fish",
    image: "https://www.smashinglists.com/wp-content/uploads/2010/02/1.mandarinfish-600x492.jpg"
},

{
    name: "Symba",
    length: 9,
    food: "Cherries",
    location: "Rome",
    species: "Lion Fish",
    image: "https://www.smashinglists.com/wp-content/uploads/2010/02/3.Lionfish.jpg"
},

{
    name: "Jack",
    length: 3,
    food: "Lion",
    location: "Atlantic Ocean",
    species: "Tuna",
    image: "https://c402277.ssl.cf1.rackcdn.com/photos/17281/images/hero_full/Medium_WW263551.jpg?1557411424"
},


{
    name: "Buzz",
    length: 20,
    food: "Yellow Skittles",
    location: "Aegean Sea",
    species: "Symphysodon Fish",
    image: "https://www.smashinglists.com/wp-content/uploads/2010/02/6.discus.jpg"
},

{
    name: "Koi",
    length: 10,
    food: "Hot Dogs",
    location: "Japan",
    species: "Koi Fish",
    image: "https://cdn0.wideopenpets.com/wp-content/uploads/2016/03/AdobeStock_104233406-770x405.jpg"
}

]


// 3, 6, 9, 12, etc... fish
const mostHolyFish = () => {
    const holyFish = []

    for (fish of fishCollection) {
        
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
            
        }
    }

    return holyFish
}

// 5, 10, 15, 20, 25, etc... fish
const soldierFish = () => {
    const soldiers = []

    for (fish of fishCollection) {
        if (fish["length"] % 5 === 0) {
            soldiers.push(fish)
            
        }
    }
    return soldiers
}

// Any fish not a multiple of 3 or 5
const nonHolyFish = () => {
    const regularFish = [] 

    for (fish of fishCollection) {
        if (fish["length"] % 5 !== 0 && fish.length % 3 !== 0) {
            regularFish.push(fish)
            
        }
    }

    return regularFish
}


