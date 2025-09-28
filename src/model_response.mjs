//  model_response  

async function outPutProcess(completion) {
    console.log('\n🤖 AI Qwen-plus:');
    for await (const chunk of completion) {
        const content = chunk.choices[0]?.delta?.content;
        if (content) {
        // 实时逐字输出，模拟打字效果
            process.stdout.write(content);
        }
    }
    //process.stdout.write('\n');  // 最后换行
    console.log('\n');  //  换行重置光标位置
}

export {outPutProcess};

