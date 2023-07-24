// HTTP APIを実行しやすくするためのライブラリ: Axios
import axios from "axios";

// LINE APIのラッパー
class LineApi {
  constructor(channelSecret) {
    this.api = new axios.create({
      baseURL: "https://api.line.me/v2",
      headers: {
        Authorization: `Bearer ${channelSecret}`,
        "Content-Type": "application/json",
      },
    });
  }

  // 応答メッセージAPI
  async replyMessage(replyToken, message) {
    const body = {
      replyToken,
      messages: [
        {
          type: "text",
          text: message,
        },
      ],
    };

    return await this.api.post("/bot/message/reply", body);
  }

  // ここにさらに必要に応じてAPIを呼び出すメソッドを定義しましょう

  // プッシュメッセージAPI
  async pushMessage(to, message) {
    const body = {
      to,
      messages: [
        {
          type: "text",
          text: message,
        },
      ],
    };
    return await this.api.post("/bot/message/push", body);
  }
}

export { LineApi };
