/**
 * * Story Themes
 * 
 * * Party
 * * Student Registration
 * * 747s
 * * Computers
 * * Kids playing in a garden
 */

const storyTitle = "Virtual Party";
const beastie = {
    covering: "fur",
    numLegs: 4,
    canBark: true,
    favouriteFoods: ["kibble", "treats", "cheese", "steak"],
    shake: function(){
        //console.log("the puppy puts its paw in your hand");
        return "the puppy puts its paw in your hand";
    }
}

let storyEvents = [
    "A 747 lands in the middle of our party, which is on a runway!",
    "The passengers exit the 747 and head off to party!!!!",
    "A drunk person starts to mess with the party",
    "The kids(with one drunk kid), steal the 747",
    "The party manager yells at the servant for the mistake",
    "student registration sends a UFO after the 747",
    "Meanwhile the servant hits the manager and yells 'I`m free",
    "The kids on the plan make cupcakes and start the worlds first, 747 cupcake delivery service!"
]

console.log(beastie.covering);
console.log(beastie.shake());

/**
 * ! tellStory
 * * loops through the story array and prints the events
 * * @param {*} story - an array of strings
 */
function tellStory(story){
    // * write the story to the screen and the console
    // * loop through the story
    for(let i=0; i<story.length; i++){
        console.log(story[i]);
        // * now to write to the screen
        let pageBody = document.querySelector("body");
        // * create an p tag
        let myParagraph = document.createElement("p");
        myParagraph.innerText = story[i];
        pageBody.appendChild(myParagraph);
    }
}

/**
 * ! writeTitleToScreen
 * * creates the new h1 and writes the value of title into it
 * @param {*} title  - a string containing the title of our page
 */
function writeTitleToScreen(title){
    let pageBody = document.querySelector("body");
    // * create an h1 tag
    let myTitle = document.createElement("h1");
    myTitle.innerText = `Our Story: ${title}`;
    console.log(myTitle);
    console.log(title);
    // * add the h1 tag to the screen
    pageBody.appendChild(myTitle);
}
writeTitleToScreen(storyTitle);
tellStory(storyEvents);