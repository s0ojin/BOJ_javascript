function solution(n, words) {
    let last = words[0].split('')[words[0].length-1];
    const past = [words[0]];
    const player = Array(n).fill(0);
    let playerIndex = 1;
    
    player[0] += 1;
    
    for(let i = 1; i < words.length; i++) {
        const first = words[i].split('')[0];
        player[playerIndex] += 1;
        playerIndex++;
        
        if (last !== first || past.includes(words[i])) {
            return [playerIndex,player[playerIndex-1]];
        } 
        

        past.push(words[i]);
        last = words[i].split('')[words[i].length-1];
        
        
        if (playerIndex >= n) {
            playerIndex = 0;
        }
    }
    
    return [0,0];
    
}