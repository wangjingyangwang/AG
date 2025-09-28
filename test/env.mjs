import 'dotenv/config'

// test_env.js
console.log('=== 环境变量验证测试 ===');

// 检查特定的环境变量
const apiKey = process.env.API_KEY;

console.log('API_KEY exist ?', apiKey ? '是' : '否');
console.log('API_KEY value :', apiKey || '未设置');
console.log('length :', apiKey ? apiKey.length : 0);
