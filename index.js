// Iteration 1: Names and Input

const hacker1 = "Mariana";
console.log(`The driver's name is ${hacker1}.`);

const hacker2 = "Joana";
console.log(`The navigator's name is ${hacker2}.`);



// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    } else if (hacker1.length < hacker2.length) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    }
    else {
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
    }


// Iteration 3: Loops

 // 3.1

let  result = "";

for (let i = 0; i < hacker1.length; i++) {
    const char = hacker1[i];
    result += char.toUpperCase() + ' ';
}

 console.log(result);

// 3.2

let wordReversed = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    const char = hacker2[i];
    wordReversed += char;
}

console.log(wordReversed);

// 3.3

if ('hacker1'.localeCompare('hacker2') === 1) {
    console.log("The driver's name goes first.");
    } else if ('hacker1'.localeCompare('hacker2') === -1) {
        console.log("Yo, the navigator goes first definitely");
    } else {
        console.log("What?! You both have the same name?");
    }


    // Bonus 1

    let longText = "";

    longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend erat massa, quis dapibus libero rhoncus porta. Aenean lobortis blandit urna non porta. Fusce elementum ornare diam efficitur dictum. Mauris vel nisl ante. Curabitur non lacus tincidunt, interdum mauris eget, dictum mauris. Nunc lobortis, erat non vehicula tempus, tellus nibh ornare tellus, nec suscipit sapien augue non odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas convallis convallis sem eget pulvinar. Mauris aliquet quis urna sed suscipit. Proin facilisis imperdiet placerat. Cras quis dolor ac odio rutrum pellentesque. Suspendisse augue enim, feugiat vel nisi in, ultricies auctor magna. In bibendum gravida felis eget hendrerit. Sed non pretium dui, in vestibulum nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus sed ex varius orci laoreet interdum ac id odio. Maecenas tincidunt sem sed lorem volutpat, quis condimentum nisl finibus. Etiam id orci at neque placerat accumsan id ac est. Praesent eget eros ac quam feugiat elementum. Aliquam erat volutpat. Aenean bibendum egestas molestie. Nulla condimentum ipsum vitae velit euismod convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut erat lacus, euismod sit amet lectus a, viverra viverra libero. Nullam elementum tincidunt ipsum eu pellentesque. Etiam efficitur turpis in elit suscipit euismod. Nullam sapien mi, viverra et ante nec, laoreet aliquet mi. Ut ac bibendum est. Aliquam blandit quam nibh, vitae accumsan nisl sodales pretium. Donec commodo, arcu non vehicula suscipit, velit nisl auctor mauris, sit amet molestie massa nulla quis metus. Nunc pretium pharetra augue ut interdum. Fusce hendrerit at massa ac malesuada. Aliquam a aliquam lacus, a aliquet nibh.";


      function wordCount(longText) { 
        return longText.split(" ").length;
      }
      
      console.log(wordCount(longText));


      let count = 0;
      for (let i=0; i<longText.length; i++) {
        const theWord = longText[i] + longText[i+1];

        if (theWord === "et") {
            count++;
        }
      }

      console.log(count);