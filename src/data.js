export const DIEN_BIEN_PHU_PHASES = [
  {
    date: "13/03 - 17/03/1954",
    title: "Đợt 1: Đột phá cửa ngõ phía Bắc",
    description: "Trận mở đầu tại Him Lam. Quân ta tập trung pháo binh và bộ binh hạng nặng tiêu diệt hoàn toàn trung tâm đề kháng mạnh nhất của Pháp. Sau đó tiếp tục hạ gục Độc Lập và bức hàng Bản Kéo, xóa sổ phân khu Bắc.",
    stats: { vietMinh: "45,000", french: "16,200", artillery: "Pháo 105mm lần đầu xuất hiện" },
    markers: [
      { id: "him-lam", name: "Him Lam (Beatrice)", x: 700, y: 250, type: "captured", status: "captured", info: "Trung tâm đề kháng cực mạnh do Tiểu đoàn Lê Dương số 3 chốt giữ. Bị san bằng sau 5 giờ chiến đấu." },
      { id: "doc-lap", name: "Độc Lập (Gabrielle)", x: 550, y: 150, type: "captured", status: "captured", info: "Pháo đài kiên cố thứ 2 bảo vệ sân bay Mường Thanh." },
      { id: "ban-keo", name: "Bản Kéo (Anne-Marie)", x: 450, y: 200, type: "captured", status: "captured", info: "Toàn bộ quân đồn trú ra hàng sau khi chứng kiến Him Lam và Độc Lập thất thủ." }
    ],
    heroes: [
      { id: "phan-dinh-giot", name: "Phan Đình Giót", x: 710, y: 240, action: "Lấy thân mình lấp lỗ châu mai", location: "Cứ điểm Him Lam" }
    ],
    arrows: [
      { from: [750, 50], to: [710, 230], color: "red" },
      { from: [500, 50], to: [540, 130], color: "red" }
    ]
  },
  {
    date: "30/03 - 30/04/1954",
    title: "Đợt 2: Chiến dịch vây lấn ác liệt",
    description: "Đợt tấn công dài nhất, tập trung vào các cao điểm phía Đông (A1, C1, C2, D1, E1). Ta xây dựng hàng trăm km giao thông hào, thắt chặt vòng vây quanh Mường Thanh. Cuộc chiến tại đồi A1 diễn ra giằng co từng tấc đất.",
    stats: { vietMinh: "Thắt chặt vòng vây", french: "Thiếu tiếp tế trầm trọng", artillery: "Tận dụng hầm hào" },
    markers: [
      { id: "a1", name: "Đồi A1 (Eliane 2)", x: 680, y: 500, type: "french", status: "under-attack", info: "Cứ điểm quan trọng nhất bảo vệ trung tâm. Ta và địch giành giật nhau 4 lần." },
      { id: "c1", name: "Đồi C1 (Eliane 1)", x: 720, y: 460, type: "captured", status: "captured", info: "Bị chiếm sau những đợt tấn công đẫm máu ban đêm." },
      { id: "d1", name: "Đồi D1 (Dominique 2)", x: 650, y: 420, type: "captured", status: "captured", info: "Nơi đặt đài quan sát chỉ huy toàn cục lòng chảo." }
    ],
    heroes: [
      { id: "be-van-dan", name: "Bế Văn Đàn", x: 780, y: 480, action: "Lấy thân làm giá súng", location: "Đường tiến quân đợt 2" }
    ],
    arrows: [
      { from: [850, 500], to: [700, 500], color: "red" },
      { from: [400, 480], to: [550, 480], color: "red" }
    ]
  },
  {
    date: "01/05 - 07/05/1954",
    title: "Đợt 3: Tổng công kích",
    description: "Tiêu diệt các cứ điểm còn lại ở phía Đông và phía Tây. Điểm nhấn là khối thuốc nổ 960kg tại đồi A1 nổ súng hiệu lệnh cho tổng tấn công. Quân ta tràn vào trung tâm Mường Thanh.",
    stats: { vietMinh: "Hào khí ngất trời", french: "Tinh thần sụp đổ", artillery: "Hỏa tiễn Kachiusa" },
    markers: [
      { id: "a1", name: "Đồi A1 (Eliane 2)", x: 680, y: 500, type: "captured", status: "captured", info: "Bị phá hủy bởi khối bộc phá gần 1 tấn, chấm dứt khát vọng cố thủ của địch." },
      { id: "de-castries", name: "Hầm De Castries", x: 600, y: 450, type: "french", status: "under-attack", info: "Sào huyệt cuối cùng của thực dân Pháp tại Điện Biên Phủ." }
    ],
    heroes: [],
    arrows: [
      { from: [680, 520], to: [610, 460], color: "red" },
      { from: [500, 450], to: [580, 450], color: "red" }
    ]
  },
  {
    date: "Chiều 07/05/1954",
    title: "Toàn thắng: Cờ đỏ sao vàng tung bay",
    description: "17h30 ngày 07/05, tướng De Castries và toàn bộ bộ tham mưu tập đoàn cứ điểm bị bắt sống. Lá cờ Quyết chiến Quyết thắng tung bay trên nóc hầm chỉ huy địch. Chiến thắng lẫy lừng năm châu, chấn động địa cầu.",
    stats: { vietMinh: "CHIẾN THẮNG", french: "Đầu hàng vô điều kiện", artillery: "Ngừng súng" },
    markers: [
      { id: "de-castries", name: "Sở chỉ huy Đờ Cát", x: 600, y: 450, type: "captured", status: "captured", info: "Nơi chứng kiến sự sụp đổ của một đế chế thực dân." }
    ],
    heroes: [
      { id: "ta-quoc-luat", name: "Tạ Quốc Luật", x: 600, y: 440, action: "Dẫn đầu tổ chiến đấu bắt sống Đờ-cát", location: "Hầm chỉ huy địch" }
    ],
    arrows: []
  }
];

export const LEGACY_DATA = {
  summary: "Chiến thắng Điện Biên Phủ không chỉ chấm dứt sự xâm lược của thực dân Pháp tại Việt Nam mà còn là hồi chuông khai tử chủ nghĩa thực dân cũ trên toàn thế giới, cổ vũ mạnh mẽ phong trào giải phóng dân tộc ở châu Á, châu Phi và Mỹ Latinh.",
  achievements: [
    "Xóa sổ toàn bộ tập đoàn cứ điểm mạnh nhất Đông Dương.",
    "Bắt sống 16.200 quân địch (trong đó có 1 tướng, 16 đại tá).",
    "Phá hủy/thu giữ 62 máy bay, toàn bộ vũ khí, đạn dược."
  ],
  today: [
    { name: "Tượng đài chiến thắng", url: "https://vov.vn/sites/default/files/styles/top_image/public/2021-04/dienbienphu_2.jpg" },
    { name: "Bảo tàng Chiến thắng lịch sử", url: "https://dienbien.gov.vn/portal/Photos/2019-05-06/9f5f0b4a4e4e9b9c/01.jpg" }
  ]
};
