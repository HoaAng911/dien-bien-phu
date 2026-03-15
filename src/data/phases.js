export const DIEN_BIEN_PHU_PHASES = [
  {
    date: "13/03 - 17/03/1954",
    title: "Đợt 1: Bão lửa cửa ngõ phía Bắc",
    description: "17h00 ngày 13/03, tiếng gầm rú của hơn 40 khẩu pháo chiến dịch đồng loạt xé toạc bầu trời, dội bão lửa xuống cứ điểm Him Lam. Đất đá tung tóe, khói bụi mịt mù che khuất cả mặt trời. Bộ binh ta vượt qua lưới đạn súng băng, đối mặt với đầm lầy, mìn và trùng trùng điệp điệp thép gai. Máu nhuộm đỏ từng mét giao thông hào. Để phá được lô cốt địch, các chiến sĩ xung kích phải dùng lựu đạn, bộc phá ống xông lên cận chiến giáp lá cà phanh thây kẻ thù.",
    stats: { vietMinh: "Hàng trăm chiến sĩ hy sinh", french: "Lê Dương số 3 bị xóa sổ hoàn toàn", artillery: "Pháo 105mm nã 2000 viên/ngày" },
    markers: [
      { id: "him-lam", name: "Him Lam (Beatrice)", x: 700, y: 250, type: "captured", status: "captured", info: "Lò lửa đầu tiên. Đạn pháo Việt Minh cày nát các công sự bê tông, chỉ huy bộ binh Pháp tử trận ngay trong giờ phút đầu." },
      { id: "doc-lap", name: "Độc Lập (Gabrielle)", x: 550, y: 150, type: "captured", status: "captured", info: "Cuộc chiến đẫm máu trong đêm tối, hai bên giành giật từng mỏm đồi dưới ánh hỏa tiễn chớp lóe." },
      { id: "ban-keo", name: "Bản Kéo (Anne-Marie)", x: 450, y: 200, type: "captured", status: "captured", info: "Toàn bộ lính Thái hoảng loạn đào ngũ hoặc đầu hàng sau khi thấy xác chết đồng đội chất đống tại Him Lam." }
    ],
    heroes: [
      { id: "phan-dinh-giot", name: "Phan Đình Giót", x: 710, y: 240, action: "Lấy thân mình lấp lỗ châu mai, mở đường máu cho đồng đội.", location: "Cứ điểm Him Lam" }
    ],
    arrows: [
      { from: [750, 50], to: [710, 230], color: "red" },
      { from: [500, 50], to: [540, 130], color: "red" }
    ]
  },
  {
    date: "30/03 - 30/04/1954",
    title: "Đợt 2: Lò mổ đẫm máu trên dãy Đồi Đông",
    description: "Đợt tấn công tàn khốc và dai dẳng nhất. Chiến trường biến thành một 'lò xát thịt' khổng lồ. Ta và địch giành giật nhau từng tấc đất trên đồi A1 ròng rã 39 ngày đêm. Đạn pháo, bom napalm phủ kín không gian làm đất đá cháy đen mù mịt. Dưới lòng đất, bộ đội ta phải đào giao thông hào lấn dũi trong bùn lầy, chịu đựng mưa dầm, không gian đặc quánh mùi tử khí, xác chiến sĩ ta và lính Pháp chất chồng lên nhau trong những đoạn hào sụp lở.",
    stats: { vietMinh: "Tổn thất cực lớn, bổ sung quân liên tục", french: "Không gian sinh tồn bị bức tử", artillery: "Mưa bom Napalm từ máy bay Pháp" },
    markers: [
      { id: "a1", name: "Đồi A1 (Eliane 2)", x: 680, y: 500, type: "french", status: "under-attack", info: "Khe tử thần. Địch đào hầm ngầm cố thủ, quân ta phải bò lên trong đêm ném lựu đạn tung lỗ châu mai, thương vong không đếm xuể." },
      { id: "c1", name: "Đồi C1 (Eliane 1)", x: 720, y: 460, type: "captured", status: "captured", info: "Bị pháo binh cắt đứt đường tiếp viện, xác người ngổn ngang sau những trận giáp lá cà xuyên đêm." },
      { id: "d1", name: "Đồi D1 (Dominique 2)", x: 650, y: 420, type: "captured", status: "captured", info: "Ta chiếm đài quan sát chỉ huy, nã đạn thẳng vào đầu não Mường Thanh." }
    ],
    heroes: [
      { id: "be-van-dan", name: "Bế Văn Đàn", x: 780, y: 480, action: "Dùng vai làm giá súng trung liên trong mưa đạn, hy sinh với tư thế tiến công.", location: "Mường Pồn" }
    ],
    arrows: [
      { from: [850, 500], to: [700, 500], color: "red" },
      { from: [400, 480], to: [550, 480], color: "red" }
    ]
  },
  {
    date: "01/05 - 07/05/1954",
    title: "Đợt 3: Tiếng gầm bộc phá - Cơn sóng thần cuối cùng",
    description: "Đêm ngày 6/5, khối thuốc nổ 960kg được khoét sâu trong lòng đồi A1 phát nổ, hất tung lô cốt mẹ của địch, làm rung chuyển cả chảo lửa Mường Thanh. Đó là tiếng súng lệnh cho đợt tổng công kích. Hàng vạn chiến sĩ áo trấn thủ đầm đìa mồ hôi và bùn đất như những con sóng đỏ gầm thét tràn qua biển dây thép gai nát vụn. Quân Pháp chống cự trong tuyệt vọng, rúc thành từng cụm bùn lầy bẩn thỉu, đạn cạn, tinh thần vỡ nát dưới sự xuất hiện kinh hoàng của giàn hỏa tiễn Kachiusa sáu nòng.",
    stats: { vietMinh: "Hào khí sát thác ngút trời", french: "Tuyệt vọng chờ chết, thiếu y tế", artillery: "Kachiusa gầm thét" },
    markers: [
      { id: "a1", name: "Đồi A1 (Eliane 2)", x: 680, y: 500, type: "captured", status: "captured", info: "Hố bom khổng lồ hình thành từ 960kg bộc phá nuốt chửng hoàn toàn hy vọng sống sót của trung đội lính dù Pháp." },
      { id: "de-castries", name: "Hầm De Castries", x: 600, y: 450, type: "french", status: "under-attack", info: "Khoanh giam lầy lội cuối cùng bị bao vây tứ phía. Không quân Pháp bất lực ném dù tiếp tế lạc sang trận địa phòng không ta." }
    ],
    heroes: [
      { id: "to-vinh-dien", name: "Tô Vĩnh Diện", x: 750, y: 550, action: "Lấy thân mình chèn pháo lăn dốc, cứu lấy khẩu pháo quý giá của quân đội ta.", location: "Đường kéo pháo" }
    ],
    arrows: [
      { from: [680, 520], to: [610, 460], color: "red" },
      { from: [500, 450], to: [580, 450], color: "red" }
    ]
  },
  {
    date: "Chiều 07/05/1954",
    title: "Khải Hoàn Cao Nguyên Đỏ: Tướng Đờ Cát đầu hàng",
    description: "17h30 ngày 07/05, bầu trời Điện Biên nhuốm màu chì khói đạn, hàng vạn lính viễn chinh Pháp lấm lem bùn đất, rách rưới cầm cờ trắng chui lên từ những căn hầm ngập nước hôi thối. Tổ xung kích của Tạ Quốc Luật áp sát Sở chỉ huy Đờ Cát, tước vũ khí toàn bộ Bộ tham mưu địch. Trận đại chiến 56 ngày đêm kết thúc trên biển xương máu khổng lồ. Quân ta cắm ngọn cờ 'Quyết chiến Quyết thắng' loang lổ vết đạn bay phấp phới trên nóc hầm.",
    stats: { vietMinh: "Thắng lợi bằng xương máu", french: "Toàn bộ 16.000 quân bị tiêu diệt và bắt sống", artillery: "Ngừng súng" },
    markers: [
      { id: "de-castries", name: "Sở chỉ huy Đờ Cát", x: 600, y: 450, type: "captured", status: "captured", info: "Tướng De Castries rệu rã vứt gậy chỉ huy, cúi đầu nhận sự thất bại ô nhục nhất lịch sử thuộc địa." }
    ],
    heroes: [
      { id: "ta-quoc-luat", name: "Tạ Quốc Luật", x: 600, y: 440, action: "Đẩy cửa hầm sắt, dùng tiểu liên Thomson chĩa thẳng, buộc chỉ huy địch giơ tay quy hàng.", location: "Hầm chỉ huy địch" }
    ],
    arrows: []
  }
];
