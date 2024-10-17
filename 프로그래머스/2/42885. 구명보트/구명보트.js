function solution(people, limit) {
    let answer = 0;
    people.sort((a,b)=>a-b)
    let leftIndex = 0
    let rightIndex = people.length-1
    console.log(people)
    

    while(leftIndex<=rightIndex) {
        if (people[leftIndex] + people[rightIndex] <= limit) {
            leftIndex++
            rightIndex--
        } else {
            rightIndex--
        }
        answer++
    }
    
    
    
    return answer;
}