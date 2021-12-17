//client tarafından backende bağlantı sağlar
import io from "socket.io-client";

let socket;

//sunucuya bağlanırken çalışacak olan fonksiyon
export const init = () => {
  console.log("sunucuya bağlanılıyor");

  //sunucu tarafında çalışacak olan server adresine bağlanıyoruz
  socket = io("http://localhost:3001/", {
    transports: ["websocket"],
  });

  //sucuya bağlandığını connect ile anlayıp ekrana bağlandığını yazdırabiliriz
  socket.on("connect", () => console.log("Sunucuya bağlantı gerçekleşti"));
};

//rengi input olarak alacak ve backende iletecek fonksiyon
export const send = (color) => {
  //socket.emit eğer client deysek backend e eğer backend deysek client e data göndermeyi sağlıyor -- birinci parametre hangi kanala göndereceği ikincisi de gönderilmek istenen data
  //backend tarafında newColor olarak karşıladığımız için bilgiyi newColor kanalına bilgi gondermemiz gerekmektedir.
  socket.emit("newColor", color);
};

//backenddeki receive kanalına abone olacağız ve herhangi bir client veri gönderdiğinde bunu alıp kullanacağız
export const subscribe = (callback) => {
  socket.on("receive", (color) => {
    console.log(color);
    callback(color);
  });
};
