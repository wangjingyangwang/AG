#!/usr/bin/env node


//main.mjs  
import { getQuestionPromise } from "./user_question.mjs";
import { askQuestion } from "./model_call.mjs";
import { outPutProcess } from "./model_response.mjs";

async function start() {
    // get question from user
    const question = await getQuestionPromise();
    
    // call model 
    const completion = await askQuestion(question);

    // process the content
    await outPutProcess(completion);

    start();
}

function main() {
    start();
};

console.log('welcome to ag!');
main();