function solution(nums) {
    let answer = 0;
    
    const isPrime = (num) => {
        for (let n = 2; n < num; n++) {
            if(num % n === 0) return false;
        }
        return true;
    }
    
    for (let i = 0; i<nums.length; i++) {
        for (let j = i+1; j<nums.length; j++) {
            for (let k = j+1; k<nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if (isPrime(sum)) answer++;
            }
        } 
    }
    

    
    
    
    
    return answer;
}