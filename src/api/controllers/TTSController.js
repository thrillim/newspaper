
// Gửi request lên Zalo text to speech
import fetch from 'node-fetch';

// Gửi request lên Zalo text to speech
export const textToSpeech = async (req, res) => {
  try {
    // Lấy nội dung từ request
    const { input } = req.body;

    // API endpoint của Zalo text to speech
    const apiUrl = "https://api.zalo.ai/v1/tts/synthesize";

    // Headers
    const headers = {
      "apikey": "aHPk3GYQw3tI1sSW6MKifqcJl1QJ2C9n",
      "Content-Type": "application/x-www-form-urlencoded",
    };

    // Tạo request body
    const body = `input=${encodeURIComponent(input)}&encode_type=0`;

    // Gửi request đến Zalo API từ backend
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: body,
    });

    // Xử lý response từ Zalo API
    const data = await response.json();

    // Kiểm tra nếu có URL hợp lệ trong response
    if (data.error_code === 0 && data.data && data.data.url) {
      // Trả về URL cho frontend
      res.json({ url: data.data.url }).status(200);
    } else {
      res.json({ error: "Invalid response from Zalo API" }).status(500);
    }
  } catch (error) {
    res.json({ error: error.message }).status(500);
  }
};