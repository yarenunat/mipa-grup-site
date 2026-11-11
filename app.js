/* ==========================================================================
   Mİ-PA PASTA — 2027 HAUTE PÂTISSERIE & ARTISAN ATELIER
   Interactive Parallax Engine, Catalog Database, Anatomy & Plate Builder
   ========================================================================== */

(() => {
  'use strict';

  // ---------------------------------------------------------------------------
  // 1. HERO MULTI-PLANE INTERACTIVE SCENES
  // ---------------------------------------------------------------------------
  const HERO_SCENES = [
    {
      code: 'SERİ 01 • MP-2027-BV',
      tag: 'ÖZEL ÜRETİM BATON',
      title: 'Mor Velvet Baton Pasta',
      desc: 'İpeksi beyaz pastacı kreması katmanları arasında kadifemsi mor pandispanya dokusu ve siyah mermer sunumu.',
      mainImg: 'assets/images/studio-baton-mor-velvet-banner.jpg',
      backImg: 'assets/images/img-26.jpg',
      backTitle: 'Mum Işığı & Beyaz Lale Sofrası',
      sliceImg: 'assets/images/img-29.jpg',
      sliceTitle: 'Kadife Mor Kek & Çift Krema',
      secImg: 'assets/images/img-46.jpg',
      secCode: 'BÜTÜN BATON FORMU',
      secTitle: 'Kusursuz Kesim Standardı',
      glow: 'radial-gradient(circle, rgba(142, 62, 126, 0.30) 0%, rgba(212, 175, 55, 0.14) 48%, transparent 72%)',
      productId: 'baton-mor-velvet'
    },
    {
      code: 'SERİ 02 • MP-2027-3K',
      tag: '3 KATLI BATON PASTA',
      title: '3 Katlı Karamel & Çikolata',
      desc: 'Üç katmanlı yumuşak kakaolu pandispanya, yoğun Belçika çikolatası ve kehribar parlaklığında karamel glazür.',
      mainImg: 'assets/images/studio-3katli-baton-banner.jpg',
      backImg: 'assets/images/img-17.jpg',
      backTitle: 'Altın Supla & Mum Işığı Sunumu',
      sliceImg: 'assets/images/img-05.jpg',
      sliceTitle: 'Karamel & Çikolata Bütün Baton',
      secImg: 'assets/images/img-14.jpg',
      secCode: 'ÜÇGEN & KARE KESİM',
      secTitle: '3 Katmanlı Zengin Kesit',
      glow: 'radial-gradient(circle, rgba(200, 122, 40, 0.28) 0%, rgba(212, 175, 55, 0.15) 48%, transparent 72%)',
      productId: '3kat-karamel'
    },
    {
      code: 'SERİ 03 • MP-2027-DN',
      tag: 'ÖZEL ÜRETİM DONUK PASTA',
      title: 'Red Velvet Donuk Kutu Pasta',
      desc: 'Önceden porsiyonlanmış özel kutusunda, şok dondurma teknolojisiyle ilk günkü tazeliğini koruyan Red Velvet.',
      mainImg: 'assets/images/studio-donuk-red-velvet-banner.jpg',
      backImg: 'assets/images/img-58.jpg',
      backTitle: 'Sofrada Red Velvet Zarafeti',
      sliceImg: 'assets/images/img-12.jpg',
      sliceTitle: 'Canlı Kırmızı Kadife Doku',
      secImg: 'assets/images/img-08.jpg',
      secCode: 'HAZIR DİLİMLİ KUTU',
      secTitle: 'Standart Üçgen Porsiyon',
      glow: 'radial-gradient(circle, rgba(168, 28, 38, 0.30) 0%, rgba(212, 175, 55, 0.14) 48%, transparent 72%)',
      productId: 'donuk-red-velvet'
    },
    {
      code: 'SERİ 04-06 • MP-2027-AT',
      tag: 'MAYALI • TRÜF • KURABİYE',
      title: 'Beş Çayı & Degüstasyon Seçkisi',
      desc: 'El açması cevizli lokum, dereotlu ve sakallı mayalılar, framboazlı lezzet topları ve özel kurabiye koleksiyonu.',
      mainImg: 'assets/images/studio-mayali-banner.png',
      backImg: 'assets/images/img-52.jpg',
      backTitle: 'Framboazlı Lezzet Topları',
      sliceImg: 'assets/images/img-09.jpg',
      sliceTitle: 'Mİ-PA Karma Tadım Tabağı',
      secImg: 'assets/images/img-30.jpg',
      secCode: 'EL İŞÇİLİĞİ MAYALI',
      secTitle: 'Karamelize Cevizli Lokum',
      glow: 'radial-gradient(circle, rgba(212, 175, 55, 0.26) 0%, rgba(154, 116, 38, 0.14) 48%, transparent 72%)',
      productId: 'kurabiye-tadim-tabagi'
    }
  ];

  // ---------------------------------------------------------------------------
  // 2. SIX SIGNATURE SERIES (FROM OFFICIAL Mİ-PA 2027 CATALOG)
  // ---------------------------------------------------------------------------
  const SERIES_DATA = [
    {
      num: 'SERİ 01',
      category: 'baton',
      title: 'Özel Üretim Baton Pastalar',
      desc: 'İki kat hafif pastacı kreması ve kadife dokulu pandispanyasıyla vitrinlerin en zarif imzası.',
      banner: 'assets/images/studio-baton-mor-velvet-banner.jpg',
      flavors: ['Karamel', 'Mor Velvet', 'Çikolata'],
      specs: 'Baton & Üçgen Dilim'
    },
    {
      num: 'SERİ 02',
      category: 'baton-3kat',
      title: 'Özel Üretim 3 Katlı Baton Pastalar',
      desc: 'Yüksek katmanlı mimarisi, parlak aynalı glazürü ve hem kare hem üçgen kesim alternatifleriyle üst segment sunum.',
      banner: 'assets/images/studio-3katli-baton-banner.jpg',
      flavors: ['Karamel', 'Kare Kesim', 'Çikolata'],
      specs: '3 Katmanlı • Kare & Üçgen'
    },
    {
      num: 'SERİ 03',
      category: 'donuk',
      title: 'Özel Üretim Donuk Pastalar',
      desc: 'Özel koruyucu kutusunda kendinden dilimli; çözündüğünde taze fırınlanmış nemini koruyan profesyonel seri.',
      banner: 'assets/images/studio-donuk-red-velvet-banner.jpg',
      flavors: ['Red Velvet', 'Vanilya', 'Çikolata'],
      specs: 'Kutu İçi Hazır Dilimli'
    },
    {
      num: 'SERİ 04',
      category: 'mayali',
      title: 'Özel Üretim Mayalı Seçkisi',
      desc: 'Geleneksel el işçiliğiyle hazırlanan elmalı pudralı sarmalar, kıyır dereotlu poğaçalar ve taze yeşillikli sakallı poğaçalar.',
      banner: 'assets/images/studio-mayali-banner.png',
      flavors: ['Elmalı', 'Dereotlu', 'Sakallı'],
      specs: 'Günlük Taze & Butik Sunum'
    },
    {
      num: 'SERİ 05',
      category: 'toplar',
      title: 'Özel Üretim Lezzet Topları',
      desc: 'Tek lokmada yoğun trüf deneyimi sunan; gerçek framboaz, yaprak Hindistan cevizi ve ekstra brute kakao kaplamalı toplar.',
      banner: 'assets/images/studio-toplar-kakao-banner.jpg',
      flavors: ['Framboaz', 'Hindistan Ceviz', 'Kakao'],
      specs: 'Porsiyonluk Trüf Küreler'
    },
    {
      num: 'SERİ 06',
      category: 'kurabiye',
      title: 'Özel Üretim Kurabiye Çeşitleri',
      desc: 'Sarmal cevizli lokum, mahlepli kandil simidi, susamlı kalp ve damla çikolatalı kurabiyelerle zamansız lezzetler.',
      banner: 'assets/images/studio-kurabiye-banner.jpg',
      flavors: ['Cevizli Lokum', 'Kandil Simiti', 'Özel Kurabiye'],
      specs: 'El Yapımı Butik Kurabiye'
    }
  ];

  // ---------------------------------------------------------------------------
  // 3. COMPLETE 19-PRODUCT DATABASE (MAPPED TO ALL STUDIO & CANDLELIGHT PHOTOS)
  // ---------------------------------------------------------------------------
  const PRODUCTS = [
    // --- SERİ 01: BATON PASTALAR ---
    {
      id: 'baton-mor-velvet',
      code: 'MP-2027-B01',
      category: 'baton',
      categoryLabel: 'Özel Üretim Baton',
      harmonyType: 'cake',
      title: 'Mor Velvet Baton Pasta',
      desc: 'Mİ-PA Pasta’nın ikonik imzası. Kadifemsi mor kek dokusu, ipeksi çift katmanlı beyaz krema ve üst yüzeyde ince mor kadife kırıntıları.',
      candleImg: 'assets/images/img-29.jpg',
      studioImg: 'assets/images/studio-baton-mor-velvet.jpg',
      hoverImg: 'assets/images/img-26.jpg',
      gallery: [
        'assets/images/img-29.jpg',
        'assets/images/studio-baton-mor-velvet-banner.jpg',
        'assets/images/studio-baton-mor-velvet.jpg',
        'assets/images/img-26.jpg',
        'assets/images/img-55.jpg',
        'assets/images/img-46.jpg',
        'assets/images/img-53.jpg'
      ],
      notes: ['Mor Kadife Kek', 'Çift Kat Krema', 'İmza Reçete'],
      specs: {
        'Seri': 'Özel Üretim Baton Pastalar',
        'Kesim Tipi': 'Baton / Üçgen Dilim',
        'Saklama': '+4°C Soğuk Vitrin / -18°C',
        'Katman': '2 Kat Kek + 2 Kat Özel Krema'
      },
      tastingList: [
        'Doğal mor kadife dokulu yumuşak pandispanya katmanları',
        'Ağızda dağılan hafifletilmiş vanilyalı beyaz pastacı kreması',
        'Hem bütün baton hem de porsiyon üçgen dilim olarak kusursuz kesim'
      ]
    },
    {
      id: 'baton-karamel',
      code: 'MP-2027-B02',
      category: 'baton',
      categoryLabel: 'Özel Üretim Baton',
      harmonyType: 'cake',
      title: 'Karamel Baton Pasta',
      desc: 'Parlak kehribar rengi karamel glazür, ince çikolata dekor çizgileri ve dengeli sütlü krema dolgusuyla klasikleşen baton lezzet.',
      candleImg: 'assets/images/img-15.jpg',
      studioImg: 'assets/images/studio-baton-karamel.jpg',
      hoverImg: 'assets/images/img-17.jpg',
      gallery: [
        'assets/images/img-15.jpg',
        'assets/images/studio-baton-karamel.jpg',
        'assets/images/img-42.jpg',
        'assets/images/img-17.jpg',
        'assets/images/img-03.jpg',
        'assets/images/img-05.jpg'
      ],
      notes: ['Kehribar Karamel', 'İpeksi Glazür', 'Çift Dilim Sunum'],
      specs: {
        'Seri': 'Özel Üretim Baton Pastalar',
        'Kesim Tipi': 'Baton / Çift Üçgen Dilim',
        'Saklama': '+4°C Soğuk Vitrin',
        'Üst Kaplama': 'El İşi Karamel Aynalı Glazür'
      },
      tastingList: [
        'Kavruk olmayan, dengeli tereyağlı karamel glazür kaplama',
        'Kakaolu ve sade pandispanya ile uyumlu hafif krema dolgusu',
        'Kahve ve çay eşleşmelerinde yüksek beğeni oranı'
      ]
    },
    {
      id: 'baton-cikolata',
      code: 'MP-2027-B03',
      category: 'baton',
      categoryLabel: 'Özel Üretim Baton',
      harmonyType: 'choco',
      title: 'Çikolata Baton Pasta',
      desc: 'Koyu çikolata ganaj glazürü, kakaolu yumuşak kek katmanları ve krema dolgusuyla çikolata tutkunları için rafine bir klasik.',
      candleImg: 'assets/images/img-11.jpg',
      studioImg: 'assets/images/studio-baton-cikolata.jpg',
      hoverImg: 'assets/images/img-14.jpg',
      gallery: [
        'assets/images/img-11.jpg',
        'assets/images/studio-baton-cikolata.jpg',
        'assets/images/img-14.jpg',
        'assets/images/img-39.jpg',
        'assets/images/img-41.jpg',
        'assets/images/img-54.jpg'
      ],
      notes: ['Bitter & Sütlü Ganaj', 'Kakaolu Pandispanya', 'Klasik İmza'],
      specs: {
        'Seri': 'Özel Üretim Baton Pastalar',
        'Kesim Tipi': 'Baton / Üçgen Dilim',
        'Saklama': '+4°C Soğuk Vitrin',
        'Kakao Profili': 'Yoğun & Dengeli Ganaj'
      },
      tastingList: [
        'Parlak siyah çikolata aynalı glazür kaplama',
        'Nemli kakaolu kek arasında vanilyalı beyaz krema kontrastı',
        'Kristal ve altın detaylı sofra sunumlarına tam uyum'
      ]
    },

    // --- SERİ 02: 3 KATLI BATON PASTALAR ---
    {
      id: '3kat-karamel',
      code: 'MP-2027-3K01',
      category: 'baton-3kat',
      categoryLabel: '3 Katlı Baton Pasta',
      harmonyType: 'cake',
      title: '3 Katlı Karamel Baton Pasta',
      desc: 'Üç kat kakaolu kek ve üç kat kremanın yükselen mimarisi; en üstte geometrik çikolata işlemeli parlak karamel sos.',
      candleImg: 'assets/images/img-05.jpg',
      studioImg: 'assets/images/studio-3katli-karamel.jpg',
      hoverImg: 'assets/images/studio-3katli-baton-banner.jpg',
      gallery: [
        'assets/images/studio-3katli-karamel.jpg',
        'assets/images/studio-3katli-baton-banner.jpg',
        'assets/images/img-05.jpg',
        'assets/images/img-03.jpg',
        'assets/images/img-17.jpg'
      ],
      notes: ['3 Katmanlı Mimari', 'Karamel Glazür', 'Yüksek Porsiyon'],
      specs: {
        'Seri': 'Özel Üretim 3 Katlı Baton',
        'Katman Sayısı': '3 Kat Kek + 3 Kat Krema',
        'Form': 'Yüksek Üçgen Dilim',
        'Sunum': 'Vitrin İçi Bütün Baton veya Dilim'
      },
      tastingList: [
        'Yüksek kesitiyle tabakta heykelsi ve dolgun duruş',
        'Üç ayrı krema katmanıyla her çatalda eşit lezzet dağılımı',
        'İnci formunda alt krema bordür işçiliği'
      ]
    },
    {
      id: '3kat-kare-kesim',
      code: 'MP-2027-3K02',
      category: 'baton-3kat',
      categoryLabel: '3 Katlı Baton Pasta',
      harmonyType: 'choco',
      title: '3 Katlı Kare Kesim Çikolata',
      desc: 'Modern pastacılığın keskin hatlarını yansıtan kare porsiyon kesim, ayna parlaklığında çikolata glazür ve üçlü katman dengesi.',
      candleImg: 'assets/images/studio-3katli-kare-kesim.jpg',
      studioImg: 'assets/images/studio-3katli-kare-kesim.jpg',
      hoverImg: 'assets/images/studio-3katli-baton-banner.jpg',
      gallery: [
        'assets/images/studio-3katli-kare-kesim.jpg',
        'assets/images/studio-3katli-baton-banner.jpg',
        'assets/images/img-03.jpg'
      ],
      notes: ['Kare Porsiyon', 'Ayna Çikolata Glazür', '3 Katlı Kesit'],
      specs: {
        'Seri': 'Özel Üretim 3 Katlı Baton',
        'Kesim Tipi': 'Mimari Kare Porsiyon',
        'Üst Kaplama': 'Koyu Belçika Ganaj',
        'Kullanım': 'Fine-Dining & Lüks Kafe Servisi'
      },
      tastingList: [
        'Kare kesim formuyla modern tabaklamalara uygun simetrik yapı',
        'Üç katmanlı kakaolu kek ve sütlü krema uyumu',
        'Bıçak izi bırakmayan pürüzsüz üst glazür tekniği'
      ]
    },
    {
      id: '3kat-cikolata',
      code: 'MP-2027-3K03',
      category: 'baton-3kat',
      categoryLabel: '3 Katlı Baton Pasta',
      harmonyType: 'choco',
      title: '3 Katlı Çikolata Baton Pasta',
      desc: 'Üç katlı kakaolu pandispanya, ipeksi krema dolgusu ve yoğun çikolata sosuyla hazırlanan gösterişli üçgen dilim baton pasta.',
      candleImg: 'assets/images/img-39.jpg',
      studioImg: 'assets/images/studio-3katli-cikolata.png',
      hoverImg: 'assets/images/img-41.jpg',
      gallery: [
        'assets/images/studio-3katli-cikolata.png',
        'assets/images/img-39.jpg',
        'assets/images/img-41.jpg',
        'assets/images/img-54.jpg',
        'assets/images/studio-3katli-baton-banner.jpg'
      ],
      notes: ['3 Katlı Çikolata', 'Üçgen Kesim', 'Yoğun Ganaj'],
      specs: {
        'Seri': 'Özel Üretim 3 Katlı Baton',
        'Kesim Tipi': 'Yüksek Üçgen Dilim',
        'Katman': '3 Kat Kakaolu Pandispanya',
        'Saklama': '+4°C / -18°C'
      },
      tastingList: [
        'Klasik baton pastaya kıyasla %35 daha yüksek katman profili',
        'Yoğun kakao aroması ve yumuşak krema geçişi',
        'Özel davet ve otel büfeleri için ideal porsiyon'
      ]
    },

    // --- SERİ 03: DONUK PASTALAR ---
    {
      id: 'donuk-red-velvet',
      code: 'MP-2027-DN01',
      category: 'donuk',
      categoryLabel: 'Özel Üretim Donuk Pasta',
      harmonyType: 'cake',
      title: 'Red Velvet Donuk Pasta',
      desc: 'Yakut kırmızısı kadife dokusu, ortasında kalın beyaz krema katmanı ve özel kutusunda hazır dilimlenmiş pratik lüks sunumu.',
      candleImg: 'assets/images/img-12.jpg',
      studioImg: 'assets/images/studio-donuk-red-velvet.jpg',
      hoverImg: 'assets/images/img-08.jpg',
      gallery: [
        'assets/images/img-12.jpg',
        'assets/images/studio-donuk-red-velvet.jpg',
        'assets/images/studio-donuk-red-velvet-banner.jpg',
        'assets/images/img-08.jpg',
        'assets/images/img-38.jpg',
        'assets/images/img-49.jpg',
        'assets/images/img-58.jpg'
      ],
      notes: ['Yakut Kırmızı Kadife', 'Hazır Dilimli Kutu', 'Şok Dondurulmuş'],
      specs: {
        'Seri': 'Özel Üretim Donuk Pastalar',
        'Ambalaj': 'Kendinden Dilimli Özel Kutu',
        'Saklama': '-18°C Muhafaza / +4°C Servis',
        'Porsiyon': 'Standart Üçgen Dilim'
      },
      tastingList: [
        'İhtiyaç kadar dilimi çözdürerek sıfır fire ile servis imkanı',
        'Göz alıcı kırmızı kadife kırıntı kaplaması',
        'Yoğun ve ferah beyaz krema dolgusu'
      ]
    },
    {
      id: 'donuk-vanilya',
      code: 'MP-2027-DN02',
      category: 'donuk',
      categoryLabel: 'Özel Üretim Donuk Pasta',
      harmonyType: 'cake',
      title: 'Vanilya Donuk Pasta',
      desc: 'Altın sarısı vanilyalı pandispanya kırıntıları, dolgun pastacı kreması ve hafif dokusuyla her damak tadına hitap eden zarif reçete.',
      candleImg: 'assets/images/img-34.jpg',
      studioImg: 'assets/images/studio-donuk-vanilya.jpg',
      hoverImg: 'assets/images/img-04.jpg',
      gallery: [
        'assets/images/img-34.jpg',
        'assets/images/studio-donuk-vanilya.jpg',
        'assets/images/img-25.jpg',
        'assets/images/img-36.jpg',
        'assets/images/img-04.jpg',
        'assets/images/img-18.jpg',
        'assets/images/img-44.jpg'
      ],
      notes: ['Madagaskar Vanilyası', 'Hazır Dilimli Kutu', 'İpeksi Krema'],
      specs: {
        'Seri': 'Özel Üretim Donuk Pastalar',
        'Ambalaj': 'Kendinden Dilimli Özel Kutu',
        'Saklama': '-18°C Muhafaza / +4°C Servis',
        'Lezzet Tonu': 'Sütlü & Vanilyalı'
      },
      tastingList: [
        'Yumuşak vanilyalı kek ve kadifemsi krema katmanı',
        'Kutu içerisinde eşit üçgen dilimler halinde hazır sunum',
        'Meyve sosları veya espresso yanında mükemmel eşlikçi'
      ]
    },
    {
      id: 'donuk-cikolata',
      code: 'MP-2027-DN03',
      category: 'donuk',
      categoryLabel: 'Özel Üretim Donuk Pasta',
      harmonyType: 'choco',
      title: 'Çikolata Donuk Pasta',
      desc: 'Üzeri yoğun çikolata ve kakao kırıntılarıyla kaplı, ortası beyaz krema dolgulu, kutuda hazır dilimli donuk çikolatalı pasta.',
      candleImg: 'assets/images/img-20.jpg',
      studioImg: 'assets/images/studio-donuk-cikolata.jpg',
      hoverImg: 'assets/images/img-24.jpg',
      gallery: [
        'assets/images/img-20.jpg',
        'assets/images/studio-donuk-cikolata.jpg',
        'assets/images/img-32.jpg',
        'assets/images/img-06.jpg',
        'assets/images/img-24.jpg'
      ],
      notes: ['Kakao Kırıntılı', 'Hazır Dilimli Kutu', 'Kontrast Krema'],
      specs: {
        'Seri': 'Özel Üretim Donuk Pastalar',
        'Ambalaj': 'Kendinden Dilimli Özel Kutu',
        'Saklama': '-18°C Muhafaza / +4°C Servis',
        'Doku': 'Nemli Kakaolu Kek'
      },
      tastingList: [
        'Çözdürüldüğünde yeni fırınlanmış tazeliğini koruyan doku',
        'Beyaz iç krema ve koyu kakao kırıntılarının görsel kontrastı',
        'Hızlı servis gerektiren davet ve kafeler için ideal'
      ]
    },

    // --- SERİ 04: ÖZEL ÜRETİM MAYALI ---
    {
      id: 'mayali-elmali',
      code: 'MP-2027-MY01',
      category: 'mayali',
      categoryLabel: 'Özel Üretim Mayalı',
      harmonyType: 'pastry',
      title: 'Elmalı Özel Sarma',
      desc: 'Tarçın ve karamelize rendelenmiş elma dolgulu, üzeri ince pudra şekeri bulutuyla kaplı ağızda dağılan el yapımı sarma.',
      candleImg: 'assets/images/img-21.jpg',
      studioImg: 'assets/images/studio-mayali-elmali.jpg',
      hoverImg: 'assets/images/img-07.jpg',
      gallery: [
        'assets/images/img-21.jpg',
        'assets/images/studio-mayali-elmali.jpg',
        'assets/images/img-07.jpg',
        'assets/images/img-10.jpg',
        'assets/images/img-57.jpg'
      ],
      notes: ['Tarçınlı Elma Dolgusu', 'Pudra Şekerli', 'El Sarımı'],
      specs: {
        'Seri': 'Özel Üretim Mayalı & Kıyır',
        'İç Dolgu': 'Tarçınlı Karamelize Elma',
        'Sunum': 'Pudra Şekeri Kaplamalı Rulo',
        'Servis': 'Çay & Kahve Yanı Butik İkram'
      },
      tastingList: [
        'İncecik açılmış hamur içinde bol elmalı ve tarçınlı iç harç',
        'Fırın sonrası pudra şekeriyle tamamlanan zarif görünüm',
        'Beş çayı ve toplantı ikramlarının vazgeçilmez klasiği'
      ]
    },
    {
      id: 'mayali-dereotlu',
      code: 'MP-2027-MY02',
      category: 'mayali',
      categoryLabel: 'Özel Üretim Mayalı',
      harmonyType: 'pastry',
      title: 'Dereotlu Özel Poğaça',
      desc: 'Taze dereotu aromalı, üzeri altın sarısı mermer desenli yumurta kızartmalı ve beyaz peynir dolgulu geleneksel poğaça.',
      candleImg: 'assets/images/img-27.jpg',
      studioImg: 'assets/images/studio-mayali-dereotlu.jpg',
      hoverImg: 'assets/images/img-13.jpg',
      gallery: [
        'assets/images/img-27.jpg',
        'assets/images/studio-mayali-dereotlu.jpg',
        'assets/images/img-13.jpg',
        'assets/images/img-43.jpg',
        'assets/images/img-02.jpg'
      ],
      notes: ['Taze Dereotu', 'Peynir Dolgulu', 'Altın Kabuk'],
      specs: {
        'Seri': 'Özel Üretim Mayalı',
        'Doku': 'Kıyır & Yumuşak Dengeli',
        'Görünüm': 'Mermer Desenli Üst Kabuk',
        'Servis': 'Ilık veya Oda Sıcaklığında'
      },
      tastingList: [
        'Taze kıyılmış dereotu ve seçkin peynir dolgusu',
        'Üst yüzeyde iştah açıcı altın-kahve kızarmış doku',
        'Kahvaltı ve gün boyu tuzlu atıştırmalık büfeleri için ideal'
      ]
    },
    {
      id: 'mayali-sakalli',
      code: 'MP-2027-MY03',
      category: 'mayali',
      categoryLabel: 'Özel Üretim Mayalı',
      harmonyType: 'pastry',
      title: 'Sakallı Mini Poğaça',
      desc: 'Pamuk gibi yumuşak brioche dokulu mini poğaça arasında sürülebilir krem peynir ve ince kıyılmış taze maydanoz.',
      candleImg: 'assets/images/img-50.jpg',
      studioImg: 'assets/images/studio-mayali-sakalli.jpg',
      hoverImg: 'assets/images/img-09.jpg',
      gallery: [
        'assets/images/img-50.jpg',
        'assets/images/studio-mayali-sakalli.jpg',
        'assets/images/img-09.jpg',
        'assets/images/img-23.jpg'
      ],
      notes: ['Brioche Dokusu', 'Labne & Krem Peynir', 'Taze Yeşillik'],
      specs: {
        'Seri': 'Özel Üretim Mayalı',
        'Hamur Tipi': 'Yumuşak Brioche Mayalı',
        'Dolgu': 'Krem Peynir & Taze Maydanoz',
        'Kullanım': 'Kokteyl, Davet & İkram Tabağı'
      },
      tastingList: [
        'Ağızda eriyen ekstra yumuşak mayalı puf hamur',
        'Taze yeşillik ve krem peynirle ferahlatıcı tuzlu lezzet',
        'Davet ve kokteyl tabaklarına renk katan butik görünüm'
      ]
    },

    // --- SERİ 05: ÖZEL ÜRETİM LEZZET TOPLARI ---
    {
      id: 'toplar-framboaz',
      code: 'MP-2027-LT01',
      category: 'toplar',
      categoryLabel: 'Lezzet Topları',
      harmonyType: 'cake',
      title: 'Framboazlı Lezzet Topları',
      desc: 'Gerçek framboaz dokusuyla kaplanmış, içi yoğun ve nemli kek-trüf harmanından oluşan yakut tonlu lezzet küreleri.',
      candleImg: 'assets/images/img-22.jpg',
      studioImg: 'assets/images/studio-toplar-framboaz.jpg',
      hoverImg: 'assets/images/img-52.jpg',
      gallery: [
        'assets/images/img-22.jpg',
        'assets/images/studio-toplar-framboaz.jpg',
        'assets/images/img-16.jpg',
        'assets/images/img-52.jpg'
      ],
      notes: ['Meyveli Trüf', 'Framboaz Kaplama', 'Tek Lokmalık Lüks'],
      specs: {
        'Seri': 'Özel Üretim Lezzet Topları',
        'Aroma': 'Doğal Framboaz & Krema',
        'Form': 'El Yuvarlaması Trüf Küre',
        'Eşleşme': 'Espresso, Prosecco & Çay'
      },
      tastingList: [
        'Meyve asiditesi ile tatlı trüf dokusunun kusursuz dengesi',
        'Kadifemsi bordo-mor dış kaplama',
        'Kahve yanı ikramlarda ve tadım tabaklarında çarpıcı renk'
      ]
    },
    {
      id: 'toplar-hindistan',
      code: 'MP-2027-LT02',
      category: 'toplar',
      categoryLabel: 'Lezzet Topları',
      harmonyType: 'choco',
      title: 'Hindistan Cevizli Lezzet Topları',
      desc: 'İçi kakaolu ve çikolatalı yumuşak trüf dolgulu, dışı kar beyazı yaprak Hindistan ceviziyle kaplı egzotik lezzet topları.',
      candleImg: 'assets/images/img-37.jpg',
      studioImg: 'assets/images/studio-toplar-hindistan-ceviz.jpg',
      hoverImg: 'assets/images/img-01.jpg',
      gallery: [
        'assets/images/img-37.jpg',
        'assets/images/studio-toplar-hindistan-ceviz.jpg',
        'assets/images/img-01.jpg',
        'assets/images/img-48.jpg',
        'assets/images/img-51.jpg'
      ],
      notes: ['Yaprak Hindistan Cevizi', 'Kakaolu Trüf Özü', 'Yumuşak Doku'],
      specs: {
        'Seri': 'Özel Üretim Lezzet Topları',
        'Dış Kaplama': 'İnce Rendelenmiş Hindistan Cevizi',
        'İç Doku': 'Nemli Kakaolu Trüf',
        'Sunum': '6’lı veya Çoklu Porsiyon'
      },
      tastingList: [
        'Yoğun kakao gövdesini saran ferah Hindistan cevizi aroması',
        'Tek lokmada dağılan nemli ve doyurucu yapı',
        'Altın kenarlı porselen tabaklarda zarif kontrast'
      ]
    },
    {
      id: 'toplar-kakao',
      code: 'MP-2027-LT03',
      category: 'toplar',
      categoryLabel: 'Lezzet Topları',
      harmonyType: 'choco',
      title: 'Kakao Lezzet Topları',
      desc: 'Saf kakao tozuyla kadifelendirilmiş, yoğun çikolata ve trüf kıvamında hazırlanan klasik Fransız trüf esintili lezzet topları.',
      candleImg: 'assets/images/studio-toplar-kakao-banner.jpg',
      studioImg: 'assets/images/studio-toplar-kakao-banner.jpg',
      hoverImg: 'assets/images/img-16.jpg',
      gallery: [
        'assets/images/studio-toplar-kakao-banner.jpg',
        'assets/images/img-16.jpg'
      ],
      notes: ['Saf Kakao Tozu', 'Yoğun Çikolata', 'Trüf Kıvamı'],
      specs: {
        'Seri': 'Özel Üretim Lezzet Topları',
        'Kaplama': '%100 Saf Kakao Tozu',
        'Doku': 'Yoğun Ganaj & Kek Trüfü',
        'Servis': '+4°C veya Oda Sıcaklığı'
      },
      tastingList: [
        'İlk ısırıkta hafif buruk kakao, devamında tatlı çikolata dengesi',
        'Türk kahvesi ve filtre kahve yanında imza ikramlık',
        'El yapımı homojen küre formu'
      ]
    },

    // --- SERİ 06: ÖZEL ÜRETİM KURABİYE ÇEŞİTLERİ ---
    {
      id: 'kurabiye-cevizli-lokum',
      code: 'MP-2027-KR01',
      category: 'kurabiye',
      categoryLabel: 'Kurabiye Çeşitleri',
      harmonyType: 'pastry',
      title: 'Cevizli Lokum',
      desc: 'Kat kat sarmal hamuru, bol cevizli iç harcı ve fırında karamelize olmuş parlak yüzeyiyle geleneksel zanaatın zirvesi.',
      candleImg: 'assets/images/img-30.jpg',
      studioImg: 'assets/images/studio-kurabiye-cevizli-lokum.jpg',
      hoverImg: 'assets/images/img-28.jpg',
      gallery: [
        'assets/images/img-30.jpg',
        'assets/images/studio-kurabiye-cevizli-lokum.jpg',
        'assets/images/img-28.jpg',
        'assets/images/img-33.jpg',
        'assets/images/img-35.jpg',
        'assets/images/img-45.jpg',
        'assets/images/img-47.jpg'
      ],
      notes: ['Sarmal Katmanlar', 'Bol Cevizli', 'Karamelize Yüzey'],
      specs: {
        'Seri': 'Özel Üretim Kurabiye & Çörek',
        'İçerik': 'Kırık Ceviz & Özel Baharat Dengesi',
        'Form': 'Gül / Sarmal Rozet Formu',
        'Doku': 'Dışı Kıyır, İçi Yumuşak Katmanlı'
      },
      tastingList: [
        'Her katmanında hissedilen kavrulmuş ceviz lezzeti',
        'Altın kehribar renginde parlak fırınlanmış yüzey',
        'Misafir ağırlamalarında gösterişli ve doyurucu porsiyon'
      ]
    },
    {
      id: 'kurabiye-kandil-simiti',
      code: 'MP-2027-KR02',
      category: 'kurabiye',
      categoryLabel: 'Kurabiye Çeşitleri',
      harmonyType: 'pastry',
      title: 'Özel Kandil Simiti',
      desc: 'Gerçek mahlep kokulu, üzeri çörek otu ve kavrulmuş susam işlemeli, ağızda kıyır kıyır dağılan geleneksel halka simit.',
      candleImg: 'assets/images/studio-kurabiye-kandil-simiti.jpg',
      studioImg: 'assets/images/studio-kurabiye-kandil-simiti.jpg',
      hoverImg: 'assets/images/studio-kurabiye-banner.jpg',
      gallery: [
        'assets/images/studio-kurabiye-kandil-simiti.jpg',
        'assets/images/studio-kurabiye-banner.jpg'
      ],
      notes: ['Mahlep Aromalı', 'Çörek Otu & Susam', 'Kıyır Doku'],
      specs: {
        'Seri': 'Özel Üretim Kurabiye Çeşitleri',
        'Doku': 'Ekstra Kıyır Geleneksel Reçete',
        'Üst Süsleme': 'Çörek Otu & Susam',
        'Tazelik': 'Uzun Süre Kıyırlığını Korur'
      },
      tastingList: [
        'Orijinal pastane usulü mahlepli ve tereyağlı kıyır hamur',
        'Nar gibi kızarmış yumurta sarısı ve çörek otu uyumu',
        'Özel günler ve çay saatleri için vazgeçilmez lezzet'
      ]
    },
    {
      id: 'kurabiye-karisik',
      code: 'MP-2027-KR03',
      category: 'kurabiye',
      categoryLabel: 'Kurabiye Çeşitleri',
      harmonyType: 'pastry',
      title: 'Susamlı Kalp & Damla Çikolatalı Kurabiye',
      desc: 'Kavrulmuş susam kaplı kalp kurabiyeler, damla çikolatalı tereyağlı kurabiyeler ve çatlak kakaolu kurabiye çeşitleri.',
      candleImg: 'assets/images/img-31.jpg',
      studioImg: 'assets/images/studio-kurabiye-karisik.jpg',
      hoverImg: 'assets/images/img-56.jpg',
      gallery: [
        'assets/images/img-31.jpg',
        'assets/images/studio-kurabiye-karisik.jpg',
        'assets/images/studio-kurabiye-banner.jpg',
        'assets/images/img-56.jpg'
      ],
      notes: ['Susamlı Kalp', 'Damla Çikolata', 'Tereyağlı Kıyır'],
      specs: {
        'Seri': 'Özel Üretim Kurabiye Çeşitleri',
        'Çeşitler': 'Susamlı Kalp, Damla Çikolatalı, Çatlak Kurabiye',
        'Form': 'Butik İkramlık Boy',
        'Kullanım': 'Toplantı, Kafe & Hediye Kutuları'
      },
      tastingList: [
        'Kavrulmuş susamın verdiği yoğun fındıksı aroma',
        'Gerçek parça çikolatalı kıyır kurabiye hamuru',
        'Ahşap tepsi ve porselen sunumlarda zengin çeşitlilik'
      ]
    },
    {
      id: 'kurabiye-tadim-tabagi',
      code: 'MP-2027-DG01',
      category: 'kurabiye',
      categoryLabel: 'Özel Degüstasyon Seçkisi',
      harmonyType: 'pastry',
      title: 'Mİ-PA İmza Karma Tadım Tabağı',
      desc: 'Sakallı poğaça, dereotlu poğaça, elmalı sarma, susamlı kalp, damla çikolatalı kurabiye ile framboaz ve Hindistan cevizli lezzet toplarının tek tabakta buluşması.',
      candleImg: 'assets/images/img-09.jpg',
      studioImg: 'assets/images/img-23.jpg',
      hoverImg: 'assets/images/img-40.jpg',
      gallery: [
        'assets/images/img-09.jpg',
        'assets/images/img-19.jpg',
        'assets/images/img-23.jpg',
        'assets/images/img-40.jpg'
      ],
      notes: ['7 Farklı İmza Lezzet', 'Tatlı & Tuzlu Dengesi', 'VIP Sunum'],
      specs: {
        'Seri': 'Mİ-PA Özel Degüstasyon',
        'İçerik': '3 Mayalı + 2 Kurabiye + 2 Lezzet Topu',
        'Sunum': 'Altın Suplalı Porselen Tabak',
        'Kullanım': 'VIP Misafir & Menü Tadım Sunumu'
      },
      tastingList: [
        'Tuzlu mayalılardan tatlı trüf toplarına uzanan eksiksiz bir tadım yolculuğu',
        'Otel, VIP lounge ve özel davet masaları için hazır kompozisyon',
        'Aşağıdaki Tadım Tabağı Atölyesi ile kendi kombinasyonunuzu da oluşturabilirsiniz'
      ]
    }
  ];

  // ---------------------------------------------------------------------------
  // 4. ANATOMY OF A SLICE — SPECIMEN DATA
  // ---------------------------------------------------------------------------
  const ANATOMY_SPECIMENS = {
    'mor-velvet': {
      code: 'SPECIMEN // MP-BV-01',
      title: 'Mor Velvet Özel Baton',
      summary: 'Mİ-PA’nın en çok merak edilen imzası: İpeksi beyaz krema katmanları ve kadife mor pandispanyanın milimetrik uyumu.',
      mainImg: 'assets/images/img-29.jpg',
      wholeImg: 'assets/images/studio-baton-mor-velvet-banner.jpg',
      wholeLabel: 'Mermer Tepside Bütün Mor Velvet Baton',
      temp: '+4°C / -18°C Şok',
      form: 'Baton & Üçgen Dilim',
      texture: 'Kadife & İpeksi',
      pins: [
        { top: '26%', left: '52%' },
        { top: '44%', left: '42%' },
        { top: '56%', left: '56%' },
        { top: '70%', left: '48%' }
      ],
      layers: [
        {
          title: '01 — Mor Kadife Kırıntı & Üst Doku',
          desc: 'Fırınlanmış mor kekin ince elenmiş kadife kırıntılarıyla oluşturulan mat ve asil üst yüzey.'
        },
        {
          title: '02 — Üst Mor Velvet Pandispanya',
          desc: 'Gözenekleri eşit dağılmış, nemini kaybetmeyen yumuşak ve esnek mor pandispanya katmanı.'
        },
        {
          title: '03 — Çift Katmanlı Beyaz Pastacı Kreması',
          desc: 'Ağırlık yapmayan, vanilya notalı ve ipeksi kıvamlı özel Mİ-PA krema dolgusu.'
        },
        {
          title: '04 — Taban Pandispanya & Kesim Disiplini',
          desc: 'Tabağa sağlam oturan, çatalla kesildiğinde dağılmayan dengeli alt kek tabanı.'
        }
      ]
    },
    'karamel-3kat': {
      code: 'SPECIMEN // MP-3K-01',
      title: '3 Katlı Karamel Baton Pasta',
      summary: 'Üç kat kakaolu kek ve üç kat kremanın yüksek mimarisi; en üstte parlak karamel glazür ve çikolata kaligrafisi.',
      mainImg: 'assets/images/studio-3katli-karamel.jpg',
      wholeImg: 'assets/images/studio-3katli-baton-banner.jpg',
      wholeLabel: 'Vitrinde 3 Katlı Baton Sunumu',
      temp: '+4°C Soğuk Vitrin',
      form: 'Yüksek 3 Katlı Üçgen',
      texture: 'Parlak Glazür & Dolgun',
      pins: [
        { top: '25%', left: '48%' },
        { top: '42%', left: '45%' },
        { top: '58%', left: '54%' },
        { top: '74%', left: '46%' }
      ],
      layers: [
        {
          title: '01 — Aynalı Karamel Glazür & Çikolata İşleme',
          desc: 'Işığı yansıtan kehribar karamel sos üzerinde el işi çikolata ağ desenleri.'
        },
        {
          title: '02 — Üçlü Kakaolu Pandispanya Mimarisi',
          desc: 'Standart pastalardan daha yüksek duruş sağlayan 3 ayrı kakaolu kek katmanı.'
        },
        {
          title: '03 — Üç Katmanlı Sütlü Krema Dolgusu',
          desc: 'Karamelin tatlılığını dengeleyen ferah ve hafif sütlü krema katmanları.'
        },
        {
          title: '04 — İnci Krema Bordür & Taban',
          desc: 'Baton formun kenarlarını süsleyen zarif krema işçiliği ve nemli taban.'
        }
      ]
    },
    'red-velvet-donuk': {
      code: 'SPECIMEN // MP-DN-01',
      title: 'Red Velvet Donuk Kutu Pasta',
      summary: 'Soğuk zincir teknolojisiyle tazeliği mühürlenmiş, yakut kırmızısı kadife kek ve yoğun kremalı donuk pasta.',
      mainImg: 'assets/images/img-12.jpg',
      wholeImg: 'assets/images/img-08.jpg',
      wholeLabel: 'Kutusunda Hazır Dilimli Red Velvet',
      temp: '-18°C Saklama / +4°C Servis',
      form: 'Hazır Dilimli Üçgen',
      texture: 'Nemli Kadife & Yoğun Krema',
      pins: [
        { top: '34%', left: '54%' },
        { top: '49%', left: '46%' },
        { top: '58%', left: '38%' },
        { top: '68%', left: '52%' }
      ],
      layers: [
        {
          title: '01 — Yakut Kırmızısı Velvet Kaplama',
          desc: 'Canlı kırmızı rengini ve yumuşaklığını çözdürüldükten sonra da koruyan kadife kek dokusu.'
        },
        {
          title: '02 — Dolgun Beyaz Krema Merkezi',
          desc: 'İki kırmızı katman arasında görsel ve tatsal kontrast yaratan kalın beyaz krema.'
        },
        {
          title: '03 — Şok Dondurma Nem Kilidi',
          desc: 'Üretim anındaki tazeliği kristalleşme olmadan koruyan özel reçete dengesi.'
        },
        {
          title: '04 — Sıfır Fire Hazır Porsiyon Kesim',
          desc: 'Kutu içerisinden tek dilim olarak çıkarılıp dakikalar içinde servise hazır hale gelen pratik yapı.'
        }
      ]
    },
    'cikolata-kare': {
      code: 'SPECIMEN // MP-3K-02',
      title: '3 Katlı Kare Kesim Çikolata',
      summary: 'Fine-dining tabaklamalar için tasarlanmış simetrik kare kesim, ayna parlaklığında bitter ganaj ve 3 katmanlı iç yapı.',
      mainImg: 'assets/images/studio-3katli-kare-kesim.jpg',
      wholeImg: 'assets/images/img-14.jpg',
      wholeLabel: 'Mum Işığında Çikolata Sunumu',
      temp: '+4°C Soğuk Vitrin',
      form: 'Simetrik Kare Kesim',
      texture: 'İpeksi Ganaj & 3 Kat Kek',
      pins: [
        { top: '32%', left: '50%' },
        { top: '48%', left: '44%' },
        { top: '60%', left: '55%' },
        { top: '72%', left: '48%' }
      ],
      layers: [
        {
          title: '01 — Ayna Parlaklığında Bitter Ganaj',
          desc: 'Pürüzsüz yüzeyiyle ışığı yansıtan yoğun çikolata glazür katmanı.'
        },
        {
          title: '02 — Milimetrik Kare Kesim Kenarlar',
          desc: 'Her açıdan kusursuz katman görünümü sunan 90 derecelik net bıçak kesimi.'
        },
        {
          title: '03 — Üçlü Krema & Kakao Senfonisi',
          desc: 'Koyu kakao kek ile sütlü kremanın altı katmanlı ritmik dizilimi.'
        },
        {
          title: '04 — Kakao Kırıntılı Tabak Dokunuşu',
          desc: 'Porselen tabakta kırıntı ve sos dekorlarıyla tamamlanmaya uygun gastronomik form.'
        }
      ]
    }
  };

  // ---------------------------------------------------------------------------
  // 5. ALL 58 PHOTOS FROM THE ATELIER SHOOT (MAPPED & CATEGORIZED)
  // ---------------------------------------------------------------------------
  const LOOKBOOK_META = {
    1:  { title: 'Hindistan Cevizli Lezzet Topları & Mum Işığı', cat: 'table', curated: true, span: 'tall' },
    2:  { title: 'Dereotlu Poğaça & Beyaz Lale Sofrası', cat: 'table', curated: true },
    3:  { title: '3 Katlı Karamel & Çikolata Bütün Baton', cat: 'boxes', curated: true, span: 'tall' },
    4:  { title: 'Vanilya Donuk Pasta — Hazır Dilimli Kutu', cat: 'boxes', curated: false },
    5:  { title: 'Parlak Karamel & Çikolata Baton Kesiti', cat: 'boxes', curated: true },
    6:  { title: 'Çikolata Donuk Pasta & Lale Sunumu', cat: 'table', curated: false },
    7:  { title: 'Mum Işığında Elmalı Özel Sarma', cat: 'table', curated: false },
    8:  { title: 'Red Velvet Donuk Pasta — Kutu Sunumu', cat: 'boxes', curated: true },
    9:  { title: 'Mİ-PA İmza Karma Degüstasyon Tabağı', cat: 'macro', curated: true, span: 'tall' },
    10: { title: 'Elmalı Sarma & Kristal Kadehler', cat: 'table', curated: false },
    11: { title: 'Çikolata Baton Çift Dilim Sunumu', cat: 'macro', curated: false },
    12: { title: 'Red Velvet Dilim Yakın Plan', cat: 'macro', curated: true },
    13: { title: 'Dereotlu Poğaça & Altın Supla', cat: 'table', curated: false },
    14: { title: 'Mum Işığında Çikolata Baton Dilimleri', cat: 'table', curated: true },
    15: { title: 'Karamel Baton Çift Dilim Kesiti', cat: 'macro', curated: true },
    16: { title: 'Framboazlı Lezzet Topları & Mum Işığı', cat: 'macro', curated: false },
    17: { title: 'Karamel Baton & Beyaz Laleler', cat: 'table', curated: false },
    18: { title: 'Vanilya Donuk Pasta Kutu Detayı', cat: 'boxes', curated: false },
    19: { title: 'Karma Tadım Tabağı & Mum Atmosferi', cat: 'table', curated: false },
    20: { title: 'Çikolata Donuk Pasta Dilim Detayı', cat: 'macro', curated: false },
    21: { title: 'Pudra Şekerli Elmalı Sarma Yakın Plan', cat: 'macro', curated: false },
    22: { title: 'Framboazlı Kadife Lezzet Topları', cat: 'macro', curated: true },
    23: { title: '7 Çeşitli VIP Degüstasyon Tabağı', cat: 'macro', curated: false },
    24: { title: 'Çikolata Donuk Pasta Açık Kutu', cat: 'boxes', curated: false },
    25: { title: 'Vanilya Pasta Dilimi & Mumlar', cat: 'table', curated: false },
    26: { title: 'Mor Velvet Pasta & Beyaz Lale Sofrası', cat: 'table', curated: true, span: 'tall' },
    27: { title: 'Altın Kabuklu Dereotlu Poğaça', cat: 'macro', curated: false },
    28: { title: 'Cevizli Lokum & Kristal Kadeh Sunumu', cat: 'table', curated: false },
    29: { title: 'Mor Velvet Dilim — Katman Analizi', cat: 'macro', curated: true },
    30: { title: 'Sarmal Cevizli Lokum Yakın Plan', cat: 'macro', curated: true },
    31: { title: 'Susamlı Kalp & Damla Çikolatalı Kurabiye', cat: 'table', curated: false },
    32: { title: 'Çikolata Donuk Pasta & Altın Supla', cat: 'macro', curated: false },
    33: { title: 'Mum Işığında Cevizli Lokum', cat: 'table', curated: false },
    34: { title: 'Vanilya Donuk Pasta Dilim Dokusu', cat: 'macro', curated: false },
    35: { title: 'Cevizli Lokum & Gümüş Çatal Bıçak', cat: 'table', curated: false },
    36: { title: 'Vanilya Pasta & Kristal Kadehler', cat: 'table', curated: false },
    37: { title: 'Hindistan Cevizli Lezzet Topları Yakın Plan', cat: 'macro', curated: false },
    38: { title: 'Red Velvet Pasta Üstten Görünüm', cat: 'macro', curated: false },
    39: { title: 'Tek Dilim Çikolata Baton & Mumlar', cat: 'table', curated: false },
    40: { title: 'Lale Sofrasında Karma Tadım Tabağı', cat: 'table', curated: true },
    41: { title: 'Çikolata Baton & Beyaz Laleler', cat: 'table', curated: false },
    42: { title: 'Karamel Baton Dilimleri Üst Görünüm', cat: 'macro', curated: false },
    43: { title: 'Mum Işığında Dereotlu Poğaça', cat: 'table', curated: false },
    44: { title: 'Vanilya Donuk Pasta Kutu Sunumu', cat: 'boxes', curated: false },
    45: { title: 'Cevizli Lokum Üçlü Sunum', cat: 'macro', curated: false },
    46: { title: 'Bütün Mor Velvet Baton Pasta', cat: 'boxes', curated: true },
    47: { title: 'Cevizli Lokum & Lale Buketi', cat: 'table', curated: false },
    48: { title: 'Hindistan Cevizli Toplar & Kadehler', cat: 'table', curated: false },
    49: { title: 'Red Velvet Donuk Pasta Kutu', cat: 'boxes', curated: false },
    50: { title: 'Sakallı Mini Poğaça Yakın Plan', cat: 'macro', curated: true },
    51: { title: 'Hindistan Cevizli Toplar & Laleler', cat: 'table', curated: false },
    52: { title: 'Framboazlı Toplar & Lale Sofrası', cat: 'table', curated: false },
    53: { title: 'Mor Velvet Baton — Yatay Perspektif', cat: 'boxes', curated: true, span: 'wide' },
    54: { title: 'Parlak Glazürlü Çikolata Dilimi', cat: 'macro', curated: false },
    55: { title: 'Mor Velvet Dilim — Porselen Tabak', cat: 'macro', curated: false },
    56: { title: 'Susamlı Kalp Kurabiye & Lale Sofrası', cat: 'table', curated: false },
    57: { title: 'Elmalı Özel Sarma Beşli Sunum', cat: 'macro', curated: false },
    58: { title: 'Red Velvet Dilim & Beyaz Lale Sofrası', cat: 'table', curated: true }
  };

  const LOOKBOOK_PHOTOS = Array.from({ length: 58 }, (_, i) => {
    const idx = i + 1;
    const padded = String(idx).padStart(2, '0');
    const meta = LOOKBOOK_META[idx] || { title: `Mİ-PA Atölye Çekimi #${padded}`, cat: 'table', curated: false };
    return {
      id: idx,
      code: `ARŞİV KARE // ${padded} / 58`,
      src: `assets/images/img-${padded}.jpg`,
      title: meta.title,
      cat: meta.cat,
      curated: Boolean(meta.curated),
      span: meta.span || ''
    };
  });

  // ---------------------------------------------------------------------------
  // STATE
  // ---------------------------------------------------------------------------
  let currentViewMode = 'candle'; // 'candle' or 'studio'
  let currentCategory = 'all';
  let currentAnatomyKey = 'mor-velvet';
  let activeLayerIdx = 0;

  // 6-slot Tasting Plate state
  const plateSlots = [
    PRODUCTS.find(p => p.id === 'baton-mor-velvet'),
    PRODUCTS.find(p => p.id === '3kat-karamel'),
    PRODUCTS.find(p => p.id === 'donuk-red-velvet'),
    PRODUCTS.find(p => p.id === 'mayali-sakalli'),
    PRODUCTS.find(p => p.id === 'toplar-framboaz'),
    PRODUCTS.find(p => p.id === 'kurabiye-cevizli-lokum')
  ];

  // Bag / Selection Drawer state
  const selectionBag = [];

  // Lightbox state
  let activeLookbookList = [];
  let currentLightboxIndex = 0;

  // ---------------------------------------------------------------------------
  // DOM ELEMENTS & INITIALIZATION
  // ---------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initCustomCursor();
    initAmbientCanvas();
    initHeaderAndTheme();
    initHeroStage();
    renderSeriesShowcase();
    renderProductsGrid();
    initFilterAndViewControls();
    initAnatomySection();
    initTastingConfigurator();
    initLookbookGallery();
    initModalsAndDrawer();
    initInquiryForm();
    initScrollAndParallaxEngine();
  });

  // ---------------------------------------------------------------------------
  // PRELOADER
  // ---------------------------------------------------------------------------
  function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    const hide = () => preloader.classList.add('hidden');
    setTimeout(hide, 700);
    window.addEventListener('load', () => setTimeout(hide, 350));
  }

  // ---------------------------------------------------------------------------
  // CUSTOM MAGNETIC CURSOR
  // ---------------------------------------------------------------------------
  function initCustomCursor() {
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    const label = document.getElementById('cursorLabel');
    if (!dot || !ring || window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    }, { passive: true });

    const tickCursor = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      requestAnimationFrame(tickCursor);
    };
    requestAnimationFrame(tickCursor);

    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        ring.classList.add('active');
        label.textContent = target.getAttribute('data-cursor') || 'İNCELE';
      }
    });

    document.addEventListener('mouseout', (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        ring.classList.remove('active');
        label.textContent = '';
      }
    });
  }

  // ---------------------------------------------------------------------------
  // AMBIENT GOLD DUST & CANDLELIGHT CANVAS
  // ---------------------------------------------------------------------------
  function initAmbientCanvas() {
    const canvas = document.getElementById('ambientCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });

    const particles = Array.from({ length: 38 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.5,
      vy: -(Math.random() * 0.28 + 0.08),
      vx: (Math.random() - 0.5) * 0.2,
      alpha: Math.random() * 0.45 + 0.1,
      phase: Math.random() * Math.PI * 2
    }));

    function drawParticles() {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.phase += 0.02;
        if (p.y < -10) p.y = h + 10;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;

        const flicker = p.alpha + Math.sin(p.phase) * 0.12;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(218, 182, 84, ${Math.max(0.05, flicker)})`;
        ctx.fill();
      }
      requestAnimationFrame(drawParticles);
    }
    requestAnimationFrame(drawParticles);
  }

  // ---------------------------------------------------------------------------
  // HEADER, MOBILE MENU & THEME TOGGLE
  // ---------------------------------------------------------------------------
  function initHeaderAndTheme() {
    const themeBtn = document.getElementById('themeToggleBtn');
    const lightingText = document.getElementById('lightingText');
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobilePanel = document.getElementById('mobileNavPanel');

    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const html = document.documentElement;
        const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        if (lightingText) {
          lightingText.textContent = next === 'dark' ? 'Mum Işığı' : 'Krem Atölye';
        }
        showToast(next === 'dark' ? '✦ Mum Işığı (Chiaroscuro) atmosferi aktif' : '✦ Krem Atölye (Gündüz) atmosferi aktif');
      });
    }

    if (mobileBtn && mobilePanel) {
      mobileBtn.addEventListener('click', () => {
        mobilePanel.classList.toggle('open');
      });
      mobilePanel.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => mobilePanel.classList.remove('open'));
      });
    }
  }

  // ---------------------------------------------------------------------------
  // HERO INTERACTIVE MULTI-PLANE STAGE
  // ---------------------------------------------------------------------------
  function initHeroStage() {
    let activeSceneIdx = 0;
    const pills = document.querySelectorAll('.scene-pill');
    const mainCard = document.getElementById('heroMainCard');

    function setHeroScene(index) {
      activeSceneIdx = index;
      const s = HERO_SCENES[index];
      if (!s) return;

      pills.forEach((p, idx) => {
        p.classList.toggle('active', idx === index);
        p.setAttribute('aria-selected', idx === index ? 'true' : 'false');
      });

      const swapImg = (id, src) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.style.opacity = '0.25';
        setTimeout(() => {
          el.src = src;
          el.style.opacity = '1';
        }, 180);
      };

      swapImg('heroMainImg', s.mainImg);
      swapImg('heroBackImg', s.backImg);
      swapImg('heroSliceImg', s.sliceImg);
      swapImg('heroSecondaryImg', s.secImg);

      setText('heroMainCode', s.code);
      setText('heroMainTag', s.tag);
      setText('heroMainTitle', s.title);
      setText('heroMainDesc', s.desc);
      setText('heroBackTitle', s.backTitle);
      setText('heroSliceTitle', s.sliceTitle);
      setText('heroSecondaryCode', s.secCode);
      setText('heroSecondaryTitle', s.secTitle);

      const glowEl = document.getElementById('heroAmbientGlow');
      if (glowEl) glowEl.style.background = s.glow;
    }

    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        const idx = parseInt(pill.getAttribute('data-scene'), 10);
        setHeroScene(idx);
      });
    });

    if (mainCard) {
      mainCard.addEventListener('click', () => {
        const scene = HERO_SCENES[activeSceneIdx];
        if (scene && scene.productId) {
          openProductModal(scene.productId);
        }
      });
    }
  }

  // ---------------------------------------------------------------------------
  // RENDER 6 SIGNATURE SERIES
  // ---------------------------------------------------------------------------
  function renderSeriesShowcase() {
    const grid = document.getElementById('seriesShowcaseGrid');
    if (!grid) return;

    grid.innerHTML = SERIES_DATA.map(s => `
      <article class="series-card reveal-up" data-cursor="KEŞFET" data-series-cat="${s.category}">
        <div class="series-banner-wrap">
          <img src="${s.banner}" alt="${s.title}" loading="lazy" />
          <span class="series-num-badge">${s.num}</span>
        </div>
        <div class="series-body">
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
          <div class="series-flavors-chips">
            ${s.flavors.map(f => `<span class="flavor-chip">✦ ${f}</span>`).join('')}
          </div>
          <div class="series-card-footer">
            <span class="mono-tag">${s.specs}</span>
            <a href="#koleksiyon" class="btn-series-explore" data-jump-cat="${s.category}">
              <span>Seriyi İncele</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </article>
    `).join('');

    grid.querySelectorAll('.series-card').forEach(card => {
      card.addEventListener('click', () => {
        const cat = card.getAttribute('data-series-cat');
        filterProductsByCategory(cat);
        const target = document.getElementById('koleksiyon');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  // ---------------------------------------------------------------------------
  // RENDER 19 PRODUCTS VITRIN & FILTERING
  // ---------------------------------------------------------------------------
  function renderProductsGrid() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    const filtered = currentCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter(p => p.category === currentCategory);

    grid.innerHTML = filtered.map(p => {
      const primaryImg = currentViewMode === 'candle' ? p.candleImg : p.studioImg;
      const secondaryImg = currentViewMode === 'candle' ? p.studioImg : p.hoverImg;
      return `
        <article class="product-card" data-product-id="${p.id}">
          <div class="product-media" data-cursor="360° DETAY" data-open-modal="${p.id}">
            <img src="${primaryImg}" alt="${p.title}" class="img-main" loading="lazy" />
            <img src="${secondaryImg}" alt="${p.title} Alternatif Görünüm" class="img-hover" loading="lazy" />
            <div class="product-badges-top">
              <span class="product-cat-tag">${p.categoryLabel}</span>
              <span class="product-photo-count">${p.gallery.length} Açı</span>
            </div>
            <div class="product-quick-overlay">
              <button type="button" class="btn-card-icon" data-open-modal="${p.id}">Detay &amp; Galeri</button>
            </div>
          </div>
          <div class="product-content">
            <div class="product-meta-row">
              <span class="mono-code">${p.code}</span>
            </div>
            <h3 class="product-title" data-open-modal="${p.id}">${p.title}</h3>
            <p class="product-desc">${p.desc}</p>
            <div class="product-notes-pills">
              ${p.notes.map(n => `<span class="note-pill">${n}</span>`).join('')}
            </div>
            <div class="product-actions-row">
              <button type="button" class="btn-add-selection" data-add-bag="${p.id}">
                + Seçkime Ekle
              </button>
              <button type="button" class="btn-add-plate-mini" data-add-plate="${p.id}" title="Tadım Tabağına Yerleştir">
                Tabağa Koy
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach modal, bag, plate & 3D tilt listeners
    grid.querySelectorAll('[data-open-modal]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        openProductModal(el.getAttribute('data-open-modal'));
      });
    });

    grid.querySelectorAll('[data-add-bag]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        addToSelectionBag(btn.getAttribute('data-add-bag'));
      });
    });

    grid.querySelectorAll('[data-add-plate]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        addProductToPlateSlot(btn.getAttribute('data-add-plate'));
      });
    });

    attach3DTilt(grid.querySelectorAll('.product-card'));
  }

  function filterProductsByCategory(cat) {
    currentCategory = cat;
    document.querySelectorAll('.filter-pill').forEach(pill => {
      pill.classList.toggle('active', pill.getAttribute('data-category') === cat);
    });
    renderProductsGrid();
  }

  function initFilterAndViewControls() {
    document.querySelectorAll('.filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        filterProductsByCategory(pill.getAttribute('data-category'));
      });
    });

    document.querySelectorAll('[data-filter-jump]').forEach(link => {
      link.addEventListener('click', () => {
        filterProductsByCategory(link.getAttribute('data-filter-jump'));
      });
    });

    const candleBtn = document.getElementById('viewModeCandle');
    const studioBtn = document.getElementById('viewModeStudio');

    if (candleBtn && studioBtn) {
      candleBtn.addEventListener('click', () => {
        currentViewMode = 'candle';
        candleBtn.classList.add('active');
        studioBtn.classList.remove('active');
        renderProductsGrid();
      });
      studioBtn.addEventListener('click', () => {
        currentViewMode = 'studio';
        studioBtn.classList.add('active');
        candleBtn.classList.remove('active');
        renderProductsGrid();
      });
    }
  }

  // ---------------------------------------------------------------------------
  // INTERACTIVE LAYER ANATOMY INSPECTOR
  // ---------------------------------------------------------------------------
  function initAnatomySection() {
    const tabs = document.querySelectorAll('.anatomy-tab');
    const pins = document.querySelectorAll('.hotspot-pin');

    function renderAnatomySpecimen(key) {
      currentAnatomyKey = key;
      activeLayerIdx = 0;
      const spec = ANATOMY_SPECIMENS[key];
      if (!spec) return;

      tabs.forEach(t => t.classList.toggle('active', t.getAttribute('data-specimen') === key));

      const mainImg = document.getElementById('anatomyMainImg');
      const wholeImg = document.getElementById('anatomyWholeImg');
      if (mainImg) mainImg.src = spec.mainImg;
      if (wholeImg) wholeImg.src = spec.wholeImg;

      setText('anatomyWholeLabel', spec.wholeLabel);
      setText('anatomyCode', spec.code);
      setText('anatomyTitle', spec.title);
      setText('anatomySummary', spec.summary);
      setText('specTemp', spec.temp);
      setText('specForm', spec.form);
      setText('specTexture', spec.texture);

      pins.forEach((pin, idx) => {
        const pos = spec.pins[idx];
        if (pos) {
          pin.style.top = pos.top;
          pin.style.left = pos.left;
        }
        pin.classList.toggle('active', idx === activeLayerIdx);
      });

      const stackEl = document.getElementById('anatomyLayerStack');
      if (stackEl) {
        stackEl.innerHTML = spec.layers.map((layer, idx) => `
          <div class="layer-item ${idx === activeLayerIdx ? 'active' : ''}" data-layer-card="${idx}">
            <span class="layer-index">0${idx + 1}</span>
            <div class="layer-text">
              <h4>${layer.title}</h4>
              <p>${layer.desc}</p>
            </div>
          </div>
        `).join('');

        stackEl.querySelectorAll('.layer-item').forEach(item => {
          item.addEventListener('click', () => {
            const idx = parseInt(item.getAttribute('data-layer-card'), 10);
            setActiveAnatomyLayer(idx);
          });
        });
      }
    }

    function setActiveAnatomyLayer(idx) {
      activeLayerIdx = idx;
      pins.forEach((p, i) => p.classList.toggle('active', i === idx));
      document.querySelectorAll('.layer-item').forEach((item, i) => {
        item.classList.toggle('active', i === idx);
      });
    }

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        renderAnatomySpecimen(tab.getAttribute('data-specimen'));
      });
    });

    pins.forEach(pin => {
      pin.addEventListener('click', () => {
        const idx = parseInt(pin.getAttribute('data-layer'), 10);
        setActiveAnatomyLayer(idx);
      });
    });

    renderAnatomySpecimen('mor-velvet');
  }

  // ---------------------------------------------------------------------------
  // BESPOKE TASTING PLATE CONFIGURATOR
  // ---------------------------------------------------------------------------
  function initTastingConfigurator() {
    const pickerGrid = document.getElementById('pickerItemsGrid');
    if (pickerGrid) {
      pickerGrid.innerHTML = PRODUCTS.map(p => `
        <button type="button" class="picker-item-card" data-pick-id="${p.id}" data-cursor="EKLE">
          <img src="${p.candleImg}" alt="${p.title}" loading="lazy" />
          <div class="picker-item-info">
            <strong>${p.title}</strong>
            <span>+ Tabağa Ekle</span>
          </div>
        </button>
      `).join('');

      pickerGrid.querySelectorAll('[data-pick-id]').forEach(btn => {
        btn.addEventListener('click', () => {
          addProductToPlateSlot(btn.getAttribute('data-pick-id'));
        });
      });
    }

    // Presets
    const presets = {
      'chef-mix': ['baton-mor-velvet', '3kat-karamel', 'donuk-red-velvet', 'mayali-sakalli', 'toplar-framboaz', 'kurabiye-cevizli-lokum'],
      'velvet-choco': ['baton-mor-velvet', 'donuk-red-velvet', '3kat-kare-kesim', '3kat-cikolata', 'toplar-kakao', 'toplar-framboaz'],
      'tea-hour': ['mayali-elmali', 'mayali-dereotlu', 'mayali-sakalli', 'kurabiye-cevizli-lokum', 'kurabiye-kandil-simiti', 'kurabiye-karisik']
    };

    document.querySelectorAll('[data-preset]').forEach(btn => {
      btn.addEventListener('click', () => {
        const ids = presets[btn.getAttribute('data-preset')];
        if (!ids) return;
        ids.forEach((id, i) => {
          plateSlots[i] = PRODUCTS.find(p => p.id === id) || null;
        });
        renderPlateSlots();
        showToast('✦ Şefin özel tadım seçkisi tabağınıza yerleştirildi');
      });
    });

    const clearBtn = document.getElementById('clearPlateBtn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        for (let i = 0; i < 6; i++) plateSlots[i] = null;
        renderPlateSlots();
      });
    }

    const addCustomBtn = document.getElementById('addCustomPlateToBagBtn');
    if (addCustomBtn) {
      addCustomBtn.addEventListener('click', () => {
        const activeItems = plateSlots.filter(Boolean);
        if (activeItems.length === 0) {
          showToast('Lütfen önce tabağınıza en az 1 lezzet ekleyin.');
          return;
        }
        const names = activeItems.map(i => i.title).join(', ');
        selectionBag.push({
          id: `custom-plate-${Date.now()}`,
          title: `Özel Tasarım Tadım Tabağı (${activeItems.length}'li)`,
          subtitle: names,
          img: activeItems[0].candleImg
        });
        updateBagDrawerUI();
        openBagDrawer();
        showToast('✦ Tasarladığınız Özel Tadım Tabağı seçkinize eklendi!');
      });
    }

    renderPlateSlots();
  }

  function addProductToPlateSlot(productId) {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;

    // Find first empty slot or replace oldest
    let emptyIdx = plateSlots.findIndex(s => s === null);
    if (emptyIdx === -1) {
      emptyIdx = Math.floor(Math.random() * 6);
    }
    plateSlots[emptyIdx] = prod;
    renderPlateSlots();
    showToast(`✦ "${prod.title}" tadım tabağına yerleştirildi`);
  }

  function renderPlateSlots() {
    const grid = document.getElementById('plateSlotsGrid');
    if (!grid) return;

    const radius = 35; // percentage distance from center
    grid.innerHTML = plateSlots.map((item, idx) => {
      const angleDeg = idx * 60 - 90;
      const angleRad = (angleDeg * Math.PI) / 180;
      const left = 50 + radius * Math.cos(angleRad);
      const top = 50 + radius * Math.sin(angleRad);

      if (item) {
        return `
          <div class="plate-slot filled" style="left: ${left}%; top: ${top}%;" data-slot-idx="${idx}" title="${item.title} (Kaldırmak için tıklayın)">
            <img src="${item.candleImg}" alt="${item.title}" />
            <span class="slot-remove-badge">KALDIR</span>
          </div>
        `;
      }
      return `
        <div class="plate-slot" style="left: ${left}%; top: ${top}%;" data-slot-idx="${idx}">
          <span class="slot-empty-num">0${idx + 1}</span>
        </div>
      `;
    }).join('');

    grid.querySelectorAll('.plate-slot.filled').forEach(slot => {
      slot.addEventListener('click', () => {
        const i = parseInt(slot.getAttribute('data-slot-idx'), 10);
        plateSlots[i] = null;
        renderPlateSlots();
      });
    });

    const filledCount = plateSlots.filter(Boolean).length;
    setText('plateSlotCounter', `${filledCount} / 6 SEÇİLDİ`);

    // Update Harmony Bars
    let cakeCount = 0, chocoCount = 0, pastryCount = 0;
    plateSlots.filter(Boolean).forEach(item => {
      if (item.harmonyType === 'cake') cakeCount++;
      else if (item.harmonyType === 'choco') chocoCount++;
      else pastryCount++;
    });

    const total = Math.max(1, filledCount);
    const setWidth = (id, pct) => {
      const el = document.getElementById(id);
      if (el) el.style.width = `${pct}%`;
    };
    setWidth('barCake', filledCount ? Math.round((cakeCount / total) * 100) : 0);
    setWidth('barChoco', filledCount ? Math.round((chocoCount / total) * 100) : 0);
    setWidth('barPastry', filledCount ? Math.round((pastryCount / total) * 100) : 0);

    setText('configSummaryTitle', `${filledCount}'lı Özel Degüstasyon Tabağı`);
  }

  // ---------------------------------------------------------------------------
  // LOOKBOOK GALLERY (ALL 58 PHOTOS + LIGHTBOX)
  // ---------------------------------------------------------------------------
  function initLookbookGallery() {
    const buttons = document.querySelectorAll('.lookbook-filter-btn');

    function renderLookbook(filterKey) {
      const masonry = document.getElementById('lookbookMasonry');
      if (!masonry) return;

      if (filterKey === 'curated') {
        activeLookbookList = LOOKBOOK_PHOTOS.filter(p => p.curated);
      } else if (filterKey === 'all') {
        activeLookbookList = LOOKBOOK_PHOTOS;
      } else {
        activeLookbookList = LOOKBOOK_PHOTOS.filter(p => p.cat === filterKey);
      }

      masonry.innerHTML = activeLookbookList.map((photo, listIdx) => `
        <figure class="lookbook-item ${photo.span}" data-lightbox-idx="${listIdx}" data-cursor="BÜYÜT">
          <img src="${photo.src}" alt="${photo.title}" loading="lazy" />
          <figcaption class="lookbook-caption">
            <span class="mono-tag">${photo.code}</span>
            <strong>${photo.title}</strong>
          </figcaption>
        </figure>
      `).join('');

      masonry.querySelectorAll('.lookbook-item').forEach(item => {
        item.addEventListener('click', () => {
          const idx = parseInt(item.getAttribute('data-lightbox-idx'), 10);
          openLightbox(idx);
        });
      });
    }

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderLookbook(btn.getAttribute('data-gal'));
      });
    });

    renderLookbook('curated');
  }

  function openLightbox(idx) {
    currentLightboxIndex = idx;
    const modal = document.getElementById('lightboxModal');
    if (!modal || !activeLookbookList[idx]) return;
    updateLightboxSlide();
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }

  function updateLightboxSlide() {
    const item = activeLookbookList[currentLightboxIndex];
    if (!item) return;
    const img = document.getElementById('lightboxImg');
    if (img) {
      img.src = item.src;
      img.alt = item.title;
    }
    setText('lightboxCode', item.code);
    setText('lightboxTitle', item.title);
  }

  // ---------------------------------------------------------------------------
  // MODALS & SELECTION DRAWER
  // ---------------------------------------------------------------------------
  function openProductModal(productId) {
    const prod = PRODUCTS.find(p => p.id === productId);
    const modal = document.getElementById('productModal');
    if (!prod || !modal) return;

    const mainImg = document.getElementById('modalMainImg');
    if (mainImg) {
      mainImg.src = prod.gallery[0];
      mainImg.alt = prod.title;
    }

    setText('modalSeriesTag', prod.categoryLabel);
    setText('modalCode', prod.code);
    setText('modalTitle', prod.title);
    setText('modalDesc', prod.desc);

    const thumbsRow = document.getElementById('modalThumbsRow');
    if (thumbsRow) {
      thumbsRow.innerHTML = prod.gallery.map((imgUrl, i) => `
        <button type="button" class="modal-thumb ${i === 0 ? 'active' : ''}" data-thumb-src="${imgUrl}">
          <img src="${imgUrl}" alt="${prod.title} Açı ${i + 1}" />
        </button>
      `).join('');

      thumbsRow.querySelectorAll('.modal-thumb').forEach(thumb => {
        thumb.addEventListener('click', () => {
          thumbsRow.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
          thumb.classList.add('active');
          if (mainImg) mainImg.src = thumb.getAttribute('data-thumb-src');
        });
      });
    }

    const specsGrid = document.getElementById('modalSpecsGrid');
    if (specsGrid) {
      specsGrid.innerHTML = Object.entries(prod.specs).map(([k, v]) => `
        <div class="tech-spec-box">
          <span class="spec-label">${k}</span>
          <strong class="spec-val">${v}</strong>
        </div>
      `).join('');
    }

    const notesList = document.getElementById('modalNotesList');
    if (notesList) {
      notesList.innerHTML = prod.tastingList.map(n => `<li>✦ ${n}</li>`).join('');
    }

    const addBagBtn = document.getElementById('modalAddBagBtn');
    if (addBagBtn) {
      addBagBtn.onclick = () => {
        addToSelectionBag(prod.id);
        modal.classList.remove('open');
      };
    }

    const addPlateBtn = document.getElementById('modalAddPlateBtn');
    if (addPlateBtn) {
      addPlateBtn.onclick = () => {
        addProductToPlateSlot(prod.id);
        modal.classList.remove('open');
        const plateSec = document.getElementById('tadim-kutusu');
        if (plateSec) plateSec.scrollIntoView({ behavior: 'smooth' });
      };
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }

  function addToSelectionBag(productId) {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;
    selectionBag.push({
      id: `${prod.id}-${Date.now()}`,
      title: prod.title,
      subtitle: prod.categoryLabel,
      img: prod.candleImg
    });
    updateBagDrawerUI();
    showToast(`✦ "${prod.title}" tadım & sipariş seçkinize eklendi`);
  }

  function updateBagDrawerUI() {
    setText('drawerCountBadge', String(selectionBag.length));
    setText('drawerTotalCount', `${selectionBag.length} Ürün`);

    const listEl = document.getElementById('drawerItemsList');
    if (!listEl) return;

    if (selectionBag.length === 0) {
      listEl.innerHTML = `
        <p style="color: var(--text-muted); text-align: center; padding: 2.5rem 1rem;">
          Seçkinizde henüz ürün bulunmuyor. Koleksiyon vitrininden veya tadım tabağı atölyesinden lezzet ekleyebilirsiniz.
        </p>
      `;
      return;
    }

    listEl.innerHTML = selectionBag.map((item, idx) => `
      <div class="drawer-item">
        <img src="${item.img}" alt="${item.title}" />
        <div class="drawer-item-info">
          <strong>${item.title}</strong>
          <span class="mono-tag">${item.subtitle}</span>
        </div>
        <button type="button" class="drawer-item-remove" data-remove-idx="${idx}">Kaldır</button>
      </div>
    `).join('');

    listEl.querySelectorAll('[data-remove-idx]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-remove-idx'), 10);
        selectionBag.splice(idx, 1);
        updateBagDrawerUI();
      });
    });
  }

  function openBagDrawer() {
    const drawer = document.getElementById('bagDrawer');
    if (drawer) {
      drawer.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
    }
  }

  function initModalsAndDrawer() {
    const prodModal = document.getElementById('productModal');
    const closeProdBtn = document.getElementById('closeProductModal');
    const lightbox = document.getElementById('lightboxModal');
    const lbClose = document.getElementById('lightboxClose');
    const lbPrev = document.getElementById('lightboxPrev');
    const lbNext = document.getElementById('lightboxNext');
    const drawer = document.getElementById('bagDrawer');
    const openDrawerBtn = document.getElementById('openDrawerBtn');
    const closeDrawerBtn = document.getElementById('closeDrawerBtn');
    const proceedBtn = document.getElementById('proceedToInquiryBtn');

    if (closeProdBtn && prodModal) {
      closeProdBtn.addEventListener('click', () => prodModal.classList.remove('open'));
      prodModal.addEventListener('click', (e) => {
        if (e.target === prodModal) prodModal.classList.remove('open');
      });
    }

    if (lightbox) {
      if (lbClose) lbClose.addEventListener('click', () => lightbox.classList.remove('open'));
      if (lbPrev) {
        lbPrev.addEventListener('click', () => {
          currentLightboxIndex = (currentLightboxIndex - 1 + activeLookbookList.length) % activeLookbookList.length;
          updateLightboxSlide();
        });
      }
      if (lbNext) {
        lbNext.addEventListener('click', () => {
          currentLightboxIndex = (currentLightboxIndex + 1) % activeLookbookList.length;
          updateLightboxSlide();
        });
      }
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) lightbox.classList.remove('open');
      });
    }

    if (openDrawerBtn) openDrawerBtn.addEventListener('click', openBagDrawer);
    if (closeDrawerBtn && drawer) {
      closeDrawerBtn.addEventListener('click', () => drawer.classList.remove('open'));
      drawer.addEventListener('click', (e) => {
        if (e.target === drawer) drawer.classList.remove('open');
      });
    }

    if (proceedBtn && drawer) {
      proceedBtn.addEventListener('click', () => {
        drawer.classList.remove('open');
        const interestInput = document.getElementById('clientInterest');
        if (interestInput && selectionBag.length > 0) {
          interestInput.value = selectionBag.map(i => i.title).join(' | ');
        }
        const contactSec = document.getElementById('iletisim');
        if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        prodModal?.classList.remove('open');
        lightbox?.classList.remove('open');
        drawer?.classList.remove('open');
      }
      if (lightbox?.classList.contains('open')) {
        if (e.key === 'ArrowRight') lbNext?.click();
        if (e.key === 'ArrowLeft') lbPrev?.click();
      }
    });

    updateBagDrawerUI();
  }

  // ---------------------------------------------------------------------------
  // INQUIRY FORM
  // ---------------------------------------------------------------------------
  function initInquiryForm() {
    const form = document.getElementById('inquiryForm');
    const feedback = document.getElementById('formFeedback');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('clientName')?.value || '';
      if (feedback) {
        feedback.textContent = `✦ Teşekkür ederiz Sayın ${name}. Mİ-PA Pasta Özel Üretim Atölyesi ekibimiz talebinizi inceleyerek en kısa sürede sizinle iletişime geçecektir.`;
      }
      showToast('✦ Tadım ve sipariş talebiniz başarıyla alındı!');
      form.reset();
    });
  }

  // ---------------------------------------------------------------------------
  // SCROLL PARALLAX, MOUSE DEPTH & 3D CARD TILT ENGINE
  // ---------------------------------------------------------------------------
  function initScrollAndParallaxEngine() {
    const header = document.getElementById('siteHeader');
    const progressBar = document.getElementById('scrollProgressBar');
    const parallaxNodes = document.querySelectorAll('[data-parallax-speed]');
    const mouseDepthNodes = document.querySelectorAll('[data-mouse-depth]');

    // Reveal IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

    // Scroll Parallax
    const onScroll = () => {
      const scrollY = window.scrollY;
      if (header) {
        header.classList.toggle('scrolled', scrollY > 40);
      }

      if (progressBar) {
        const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        const pct = Math.min(100, (scrollY / maxScroll) * 100);
        progressBar.style.width = `${pct}%`;
      }

      parallaxNodes.forEach(node => {
        const speed = parseFloat(node.getAttribute('data-parallax-speed')) || 0;
        const offset = scrollY * speed;
        node.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Hero Multi-Plane Mouse Parallax
    const heroSection = document.getElementById('hero');
    if (heroSection && window.matchMedia('(pointer: fine)').matches) {
      heroSection.addEventListener('mousemove', (e) => {
        const cx = (e.clientX / window.innerWidth - 0.5) * 2;
        const cy = (e.clientY / window.innerHeight - 0.5) * 2;

        mouseDepthNodes.forEach(node => {
          const depth = parseFloat(node.getAttribute('data-mouse-depth')) || 0.03;
          const tx = cx * depth * 520;
          const ty = cy * depth * 520;
          node.style.transform = `translate3d(${tx.toFixed(1)}px, ${ty.toFixed(1)}px, 0)`;
        });
      }, { passive: true });
    }
  }

  function attach3DTilt(cards) {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(900px) rotateY(${(x * 7).toFixed(2)}deg) rotateX(${(-y * 7).toFixed(2)}deg) translateY(-4px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // ---------------------------------------------------------------------------
  // HELPERS
  // ---------------------------------------------------------------------------
  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  let toastTimer = null;
  function showToast(msg) {
    const toast = document.getElementById('luxuryToast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
  }
})();
