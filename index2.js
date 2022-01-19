let R = parseFloat(prompt('Vui lòng nhập số tiền gửi ngân hàng'));
let C = parseFloat(prompt('nhập % lãi suất'));
let Y = parseInt(prompt('Số năm'));
let tienlai = R * (C / 100);
let laidon = R + (Y * tienlai);
document.write('Số tiền nhận được ', Y ,' năm là ', laidon, 'triệu VNĐ');