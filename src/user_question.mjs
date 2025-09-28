//user_question.mjs   return question input 

import readline from 'readline'

function getQuestionPromise() {
    const rl = readline.createInterface({
        input : process.stdin,
        output : process.stdout
    });
    return new Promise((resolve) => {
        rl.question('💬^D: ', (question) => {
            resolve(question);
            rl.close();
        });
    })
};

// const result = await getQuestionPromise();
// console.log(result); 


export {getQuestionPromise};
