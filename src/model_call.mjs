//model_call.mjs   call api , return model's content
import OpenAI from 'openai'
import 'dotenv/config'

// init model client
const openai = new OpenAI({
  apiKey: process.env.API_KEY,
  baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1"
});

// ask model for content
async function askQuestion(question) {
  try {
    const completion = await openai.chat.completions.create({
      model: "qwen-plus",
      messages: [
        { role: "system", content: "你是一个乐于助人的助手，回答要简洁明了。" },
        { role: "user", content: question }
      ],
      stream: true
    });
    return completion;
  } catch (error) {
    throw new Error(`API请求失败: ${error.message}`);
  }
}

export {askQuestion};