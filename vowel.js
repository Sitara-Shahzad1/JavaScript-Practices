                //  ****Using simple method  
function ReplaceVowel() {
  let r = "Javascript";
  let m = r.replace(/[aeiou]/gi, '*');
  console.log(m)
}
ReplaceVowel();

              // ****Using include method 

function ReplaceVowel() {
  let r = "Replace";
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = "";

  for (let i = 0; i < r.length; i++) {
    let char = r[i];
    if (vowels.includes(char)) {
      result += '*'; 
    } else {
      result += char; 
    }
  }

  console.log(result); 
}

ReplaceVowel();

              // ****Using find method 

function ReplaceVowel() {
  let r = "Javascript";
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = "";

  for (let i = 0; i < r.length; i++) {
    let char = r[i];
    
    // Use find to check if the character is a vowel
    let isVowel = vowels.find( e => e === char);

    if (isVowel) {
      result += '*';
    } else {
      result += char;
    }
  }

  console.log(result); // Output: J*v*scr*pt
}

ReplaceVowel();
