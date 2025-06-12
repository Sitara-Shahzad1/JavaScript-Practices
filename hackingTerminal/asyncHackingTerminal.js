// async function HackingTerminal() {
 
//   try {
//     const res = await console.log('Initializing Hacking...');
    
    
//   } catch (error) {
//     console.log(`Error is here ${error} `);
    
//   }
// }

document.querySelector('.container').innerHTML = 'HackingTerminal()';

function HackingTerminal(){

  setTimeout(() => {
    console.log('Initializing Hacking...');
    
  }, 1000);
  
  setTimeout(() => {
    console.log('Reading your Files...');
    
  }, 3000);
  
  setTimeout(() => {
    console.log('Password Files Detected...');
    
  }, 4000);
  
  setTimeout(() => {
    console.log('Sending all passwords and Personal files to  server...');
    
  }, 5000);
  
  setTimeout(() => {
    console.log('Cleaning up...');
    
  }, 7000);
}