/**
 * Main Interactive Script for Brandfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons if available
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // --- Image Data Registry ---
  const projectItems = [
    {
      id: 'wican-primary',
      title: 'WI.CAN — Logo Nhận Diện Chính Thức',
      category: 'wican',
      categoryLabel: 'Dự án WI.CAN',
      badge: 'Primary Brandmark',
      image: 'assets/images/wican-logo-primary.jpg',
      alt: 'Logo WI.CAN Liên Minh Tâm Thức',
      desc: 'Thiết kế logo nhận diện chính thức cho Liên Minh Tâm Thức (Conscious Alliance Network). Kết hợp biểu tượng hoa sen 3 lớp thức tỉnh cùng bộ chữ typography hiện đại, truyền tải thông điệp "Chân Thật – Tự Do Tâm Thức – Phụng Sự Nhân Sinh".',
      details: {
        client: 'WI.CAN (Conscious Alliance Network)',
        year: '2024',
        deliverables: ['Logo Master System', 'Biểu tượng Hoa Sen Độc Lập', 'Wordmark Độc Lập'],
        colors: [
          { name: 'Tím Hoàng Gia', hex: '#5A2CA0', meaning: 'Trí tuệ nội tâm & Chiều sâu chuyển hóa' },
          { name: 'Xanh Mint Ánh Sáng', hex: '#7ED1C4', meaning: 'Ánh sáng tâm thức, sự bao dung & kết nối' },
          { name: 'Vàng Champagne Gold', hex: '#D4AF7C', meaning: 'Khởi đầu, giá trị & sự tỏa sáng bền vững' }
        ]
      }
    },
    {
      id: 'wican-guidelines',
      title: 'WI.CAN — Bộ Quy Chuẩn Nhận Diện Toàn Diện (Brand Guidelines)',
      category: 'guidelines',
      categoryLabel: 'Brand Guidelines',
      badge: 'Comprehensive System',
      image: 'assets/images/wican-brand-guidelines.jpg',
      alt: 'WI.CAN Brand Guidelines & Concept',
      desc: 'Bản cẩm nang quy chuẩn nhận diện thương hiệu hoàn chỉnh: Giải trình ý nghĩa biểu tượng, câu chuyện thương hiệu, hệ giá trị cốt lõi (Chân Thật, Thức Tỉnh, Kết Nối, Phụng Sự), các thông số màu sắc và ứng dụng thực tế trên thẻ card, brochure, ấn phẩm quà tặng.',
      details: {
        client: 'WI.CAN Network',
        year: '2024',
        deliverables: ['Brand Story & Slogan', 'Element Meaning Guide', 'Color Palette & Typo', 'Real Mockups'],
        colors: [
          { name: 'Tím Hoàng Gia', hex: '#5A2CA0', meaning: 'Màu nhận diện chính' },
          { name: 'Mint Pastel', hex: '#A8E6CF', meaning: 'Màu chuyển động & năng lượng mới' },
          { name: 'Champagne Gold', hex: '#D4AF7C', meaning: 'Màu ánh sáng sang trọng' }
        ]
      }
    },
    {
      id: 'wican-variants',
      title: 'WI.CAN — Hệ Biến Thể Màu & Phiên Bản Đơn Sắc (Color Matrix)',
      category: 'wican',
      categoryLabel: 'Dự án WI.CAN',
      badge: 'Color Matrix',
      image: 'assets/images/wican-color-variants.jpg',
      alt: 'WI.CAN Biến Thể Màu và Phiên bản đơn sắc',
      desc: 'Hệ thống chuẩn hóa 9 phiên bản logo ứng dụng: Logo chuẩn đầy đủ màu, Logo đơn sắc tím, Logo đơn sắc mint, Logo đơn sắc vàng gold, Logo âm bản trên nền tím/mint/vàng, và bộ icon ứng dụng trên nền tảng số / app icon.',
      details: {
        client: 'WI.CAN Network',
        year: '2024',
        deliverables: ['Full Color Version', 'Mono Purple / Mint / Gold', 'Negative / Inverted on Color', 'App Icon System'],
        colors: [
          { name: 'Tím Đơn Sắc', hex: '#6A1B9A', meaning: 'Dùng cho in ấn đơn màu' },
          { name: 'Mint Đơn Sắc', hex: '#7ED1C4', meaning: 'Dùng cho nền tối hoặc digital' },
          { name: 'Vàng Đơn Sắc', hex: '#D4B06A', meaning: 'Dùng cho dập kim foil cao cấp' }
        ]
      }
    },
    {
      id: 'wipa-guidelines',
      title: 'WIPA — Cẩm Nang Nhận Diện Thương Hiệu Liên Minh Tâm Thức',
      category: 'guidelines',
      categoryLabel: 'Brand Guidelines',
      badge: 'Master Poster',
      image: 'assets/images/wipa-brand-guidelines.jpg',
      alt: 'WIPA Liên Minh Tâm Thức Brand Guidelines',
      desc: 'Bản quy chuẩn thương hiệu toàn diện cho WIPA: Triết lý "Trí tuệ nâng tầm • Cộng đồng kiến tạo • Vì một thế giới tốt đẹp hơn". Quy chuẩn tỷ lệ vàng, vùng an toàn X, kích thước tối thiểu in ấn (30mm) / favicon (16px), hoa văn độc quyền và hệ thống mockup sự kiện quốc tế.',
      details: {
        client: 'WIPA - Liên Minh Tâm Thức',
        year: '2024',
        deliverables: ['Logo & Tỷ lệ X an toàn', 'Bảng màu Bản sắc (Đỏ đô - Xanh lá - Vàng Gold)', 'Bộ hoa văn nhận diện', 'Ứng dụng hội nghị & sự kiện'],
        colors: [
          { name: 'Đỏ Đô (Bản Sắc)', hex: '#A30D1B', meaning: 'Nhiệt huyết, quyết tâm và yêu thương' },
          { name: 'Xanh Lá (Thịnh Vượng)', hex: '#2E7D32', meaning: 'Phát triển, cân bằng & nuôi dưỡng' },
          { name: 'Vàng Gold (Tinh Hoa)', hex: '#D4AF7C', meaning: 'Giá trị, tỏa sáng và thành công' }
        ]
      }
    },
    {
      id: 'wipa-sketch',
      title: 'WIPA — Bản Vẽ Ý Tưởng & Phác Thảo Biểu Tượng (Concept Sketch)',
      category: 'sketch',
      categoryLabel: 'Phác thảo & Concept',
      badge: 'Concept & Geometry',
      image: 'assets/images/wipa-logo-sketch.jpg',
      alt: 'WIPA Biểu tượng phác thảo và cấu trúc',
      desc: 'Bản phác thảo hình học chuẩn xác cấu trúc biểu tượng: Ngôi sao 5 cánh phía trên biểu trưng cho khát vọng và tinh thần vươn tầm thế giới, kết nối liền mạch với các cánh hoa sen đan xen phía dưới thể hiện nền tảng trí thức vững bền của cộng đồng.',
      details: {
        client: 'WIPA Design Lab',
        year: '2024',
        deliverables: ['Geometric Construction', 'Hand-drawn Concept', 'Vector Master Alignment'],
        colors: [
          { name: 'Đỏ Đô', hex: '#A30D1B', meaning: 'Cánh hoa sen tri thức' },
          { name: 'Vàng Hoàng Gia', hex: '#D4AF7C', meaning: 'Ngôi sao khát vọng' }
        ]
      }
    }
  ];

  // --- Render Portfolio Grid ---
  const gridContainer = document.getElementById('portfolioGrid');
  
  function renderProjects(filter = 'all') {
    if (!gridContainer) return;
    
    const filtered = filter === 'all' 
      ? projectItems 
      : projectItems.filter(item => {
          if (filter === 'wican') return item.category === 'wican' || item.id.startsWith('wican');
          if (filter === 'wipa') return item.id.startsWith('wipa');
          if (filter === 'guidelines') return item.category === 'guidelines';
          if (filter === 'sketch') return item.category === 'sketch';
          return true;
        });

    gridContainer.innerHTML = filtered.map((item, index) => `
      <div class="portfolio-card glass-card rounded-2xl p-4 sm:p-5 flex flex-col justify-between group bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-md" data-id="${item.id}">
        <div class="portfolio-img-wrapper relative aspect-[4/3] bg-slate-50 dark:bg-slate-950/60 flex items-center justify-center cursor-pointer overflow-hidden rounded-xl border border-slate-200 dark:border-white/5" onclick="openLightbox('${item.id}')">
          <img src="${item.image}" alt="${item.alt}" class="w-full h-full object-cover sm:object-contain p-2" loading="lazy" />
          
          <div class="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-xs">
            <button class="px-4 py-2 rounded-full bg-amber-500 text-slate-950 font-semibold text-xs flex items-center gap-1.5 shadow-lg shadow-amber-500/20 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300 hover:scale-105" onclick="event.stopPropagation(); openLightbox('${item.id}')">
              <i data-lucide="zoom-in" class="w-4 h-4"></i> Phóng To Poster
            </button>
            <button class="px-4 py-2 rounded-full bg-white text-slate-900 font-medium text-xs flex items-center gap-1.5 shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 hover:bg-slate-100" onclick="event.stopPropagation(); openCaseStudy('${item.id}')">
              <i data-lucide="file-text" class="w-4 h-4"></i> Case Study
            </button>
          </div>

          <div class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/95 dark:bg-slate-900/90 text-amber-800 dark:text-amber-300 border border-amber-300/40 dark:border-amber-300/20 shadow-xs backdrop-blur-md">
            ${item.badge}
          </div>
        </div>

        <div class="mt-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
              <span class="inline-flex items-center gap-1.5 text-amber-700 dark:text-amber-400 font-semibold">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                ${item.categoryLabel}
              </span>
              <span class="font-medium">${item.details.year}</span>
            </div>
            
            <h3 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors line-clamp-1">
              ${item.title}
            </h3>
            
            <p class="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
              ${item.desc}
            </p>
          </div>

          <div class="mt-4 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
            <div class="flex items-center gap-1.5">
              ${item.details.colors.map(c => `
                <span class="w-4 h-4 rounded-full border border-slate-300 dark:border-white/20 inline-block shadow-xs cursor-pointer hover:scale-125 transition-transform" style="background-color: ${c.hex};" title="${c.name} (${c.hex})" onclick="copyColorHex('${c.hex}', event)"></span>
              `).join('')}
            </div>
            
            <button onclick="openCaseStudy('${item.id}')" class="text-xs font-bold text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 flex items-center gap-1 group/btn">
              Khám Phá <i data-lucide="arrow-right" class="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-amber-500', 'text-slate-950', 'font-bold', 'shadow-xs');
        b.classList.add('bg-transparent', 'text-slate-600', 'dark:text-slate-300');
      });
      btn.classList.add('bg-amber-500', 'text-slate-950', 'font-bold', 'shadow-xs');
      btn.classList.remove('bg-transparent', 'text-slate-600', 'dark:text-slate-300');
      
      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
    });
  });

  // Initial render
  renderProjects('all');

  // --- Lightbox Logic ---
  let currentLightboxIndex = 0;
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxBadge = document.getElementById('lightboxBadge');

  window.openLightbox = function(id) {
    const idx = projectItems.findIndex(i => i.id === id);
    if (idx === -1) return;
    currentLightboxIndex = idx;
    updateLightboxContent();
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeLightbox = function() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  window.navigateLightbox = function(dir) {
    currentLightboxIndex = (currentLightboxIndex + dir + projectItems.length) % projectItems.length;
    updateLightboxContent();
  };

  function updateLightboxContent() {
    const item = projectItems[currentLightboxIndex];
    if (!item) return;
    lightboxImg.src = item.image;
    lightboxImg.alt = item.alt;
    lightboxTitle.textContent = item.title;
    lightboxDesc.textContent = item.desc;
    lightboxBadge.textContent = item.badge;
  }

  // Keyboard navigation for Lightbox
  document.addEventListener('keydown', (e) => {
    if (lightboxModal && lightboxModal.classList.contains('active')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateLightbox(1);
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
    }
    const caseStudyModal = document.getElementById('caseStudyModal');
    if (caseStudyModal && caseStudyModal.classList.contains('active')) {
      if (e.key === 'Escape') closeCaseStudy();
    }
  });

  // --- Case Study Drawer / Modal ---
  const caseStudyModal = document.getElementById('caseStudyModal');
  const caseStudyContent = document.getElementById('caseStudyContent');

  window.openCaseStudy = function(id) {
    const item = projectItems.find(i => i.id === id) || projectItems[0];
    const isWican = item.id.startsWith('wican');
    
    caseStudyContent.innerHTML = `
      <div class="relative bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
        <!-- Header Banner -->
        <div class="p-6 sm:p-8 bg-gradient-to-r ${isWican ? 'from-purple-50 via-white to-teal-50 dark:from-purple-950/70 dark:via-slate-900 dark:to-teal-950/70 border-b border-purple-100 dark:border-white/10' : 'from-rose-50 via-white to-amber-50 dark:from-red-950/70 dark:via-slate-900 dark:to-amber-950/70 border-b border-rose-100 dark:border-white/10'}">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500 text-slate-950">${item.categoryLabel}</span>
            <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">Dự án Nhận diện Thương hiệu Toàn diện</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-serif-title">${item.title}</h2>
          <p class="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">${item.desc}</p>
        </div>

        <div class="p-6 sm:p-8 space-y-10">
          <!-- Main Showcase Visual -->
          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-3 flex items-center gap-2">
              <i data-lucide="eye" class="w-4 h-4"></i> Poster Quy Chuẩn Chi Tiết (Bản Gốc Độ Phân Giải Cao)
            </h4>
            <div class="rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/40 p-2 sm:p-4 shadow-lg flex justify-center cursor-pointer group" onclick="openLightbox('${item.id}')">
              <img src="${item.image}" alt="${item.alt}" class="w-full max-h-[650px] object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.01]" />
            </div>
            <p class="text-xs text-center text-slate-500 dark:text-slate-400 mt-2 italic">* Nhấp vào ảnh để xem chế độ toàn màn hình độ phân giải gốc.</p>
          </div>

          <!-- Brand Narrative & Core Philosophy -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="glass-card rounded-2xl p-6 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 shadow-sm">
              <div class="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-400/10 border border-amber-200 dark:border-amber-400/20 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4">
                <i data-lucide="feather" class="w-5 h-5"></i>
              </div>
              <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Câu Chuyện & Ý Niệm Thương Hiệu</h3>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                ${isWican 
                  ? 'WI.CAN được khởi sinh từ niềm tin rằng mỗi con người đều mang trong mình một nguồn ánh sáng. Khi ta thấu hiểu bản thân, kết nối với tri thức và sống chân thật, ta không chỉ chuyển hóa chính mình mà còn lan tỏa giá trị tốt đẹp đến cộng đồng và thế giới. Cảm hứng bắt nguồn từ biểu tượng hoa sen thanh khiết và tái sinh.'
                  : 'WIPA (Liên Minh Tâm Thức) mang sứ mệnh kết nối những trí tuệ độc lập, nuôi dưỡng tâm thức, hỗ trợ phụ nữ phát triển toàn diện và kiến tạo giá trị bền vững cho cộng đồng và xã hội. Trở thành cộng đồng dẫn đầu về phát triển con người và trí tuệ toàn diện.'}
              </p>
            </div>

            <div class="glass-card rounded-2xl p-6 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 shadow-sm">
              <div class="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-400/10 border border-teal-200 dark:border-teal-400/20 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-4">
                <i data-lucide="compass" class="w-5 h-5"></i>
              </div>
              <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Giá Trị Cốt Lõi (Core Values)</h3>
              <div class="grid grid-cols-2 gap-3 mt-3">
                ${isWican 
                  ? `
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                      <div class="font-bold text-xs text-amber-700 dark:text-amber-300">Chân Thật</div>
                      <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Authenticity - Sống đúng bản chất</div>
                    </div>
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                      <div class="font-bold text-xs text-purple-700 dark:text-purple-300">Thức Tỉnh</div>
                      <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Awakening - Liên tục học hỏi</div>
                    </div>
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                      <div class="font-bold text-xs text-teal-700 dark:text-teal-300">Kết Nối</div>
                      <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Connection - Hợp tác cộng hưởng</div>
                    </div>
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                      <div class="font-bold text-xs text-rose-700 dark:text-pink-300">Phụng Sự</div>
                      <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Service - Lan tỏa điều tốt đẹp</div>
                    </div>
                  `
                  : `
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                      <div class="font-bold text-xs text-red-700 dark:text-red-400">Chân Thật</div>
                      <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Nền tảng của sự tin cậy</div>
                    </div>
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                      <div class="font-bold text-xs text-amber-700 dark:text-amber-300">Tự Do Tâm Thức</div>
                      <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Khai phóng tiềm năng</div>
                    </div>
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                      <div class="font-bold text-xs text-emerald-700 dark:text-emerald-400">Hài Hòa Bền Vững</div>
                      <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Phát triển cân bằng</div>
                    </div>
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                      <div class="font-bold text-xs text-amber-600 dark:text-amber-200">Tỏa Sáng Cùng Nhau</div>
                      <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Cộng đồng kiến tạo</div>
                    </div>
                  `}
              </div>
            </div>
          </div>

          <!-- Color System Interactive Box -->
          <div class="glass-card rounded-2xl p-6 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 shadow-sm">
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center justify-between">
              <span>Hệ Thống Màu Sắc Nhận Diện Chuẩn (Click để sao chép mã HEX)</span>
              <span class="text-xs font-normal text-slate-500 dark:text-slate-400">Color Palette</span>
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              ${item.details.colors.map(col => `
                <div class="color-swatch p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 flex flex-col justify-between hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all" onclick="copyColorHex('${col.hex}', event)">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg shadow-sm border border-black/10 dark:border-white/20" style="background-color: ${col.hex};"></div>
                    <div>
                      <div class="text-xs font-bold text-slate-900 dark:text-white">${col.name}</div>
                      <div class="text-[11px] font-mono text-amber-700 dark:text-amber-400 font-bold">${col.hex}</div>
                    </div>
                  </div>
                  <div class="mt-3 text-[11px] text-slate-600 dark:text-slate-400">${col.meaning}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Design Deliverables & Technical Specs -->
          <div class="glass-card rounded-2xl p-6 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 shadow-sm">
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4">Các Hạng Mục Bàn Giao Thiết Kế</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                <div class="text-xs font-bold text-slate-900 dark:text-white mb-1">Vector Logo Master</div>
                <p class="text-[11px] text-slate-600 dark:text-slate-400">File AI, EPS, PDF, SVG chuẩn in ấn offset và digital web app.</p>
              </div>
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                <div class="text-xs font-bold text-slate-900 dark:text-white mb-1">Quy Chuẩn Tỷ Lệ & Grid</div>
                <p class="text-[11px] text-slate-600 dark:text-slate-400">Khoảng cách an toàn X, kích thước tối thiểu, quy cách bảo vệ logo.</p>
              </div>
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                <div class="text-xs font-bold text-slate-900 dark:text-white mb-1">Color Palette & Fonts</div>
                <p class="text-[11px] text-slate-600 dark:text-slate-400">Bảng màu CMYK, RGB, HEX, Pantone cùng hệ font chữ phối hợp.</p>
              </div>
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                <div class="text-xs font-bold text-slate-900 dark:text-white mb-1">Mockup Ứng Dụng</div>
                <p class="text-[11px] text-slate-600 dark:text-slate-400">Nhận diện sự kiện, sân khấu, danh thiếp, túi quà tặng, đồng phục.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    caseStudyModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (window.lucide) {
      window.lucide.createIcons();
    }
  };

  window.closeCaseStudy = function() {
    caseStudyModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  // --- Copy Hex Code Toast ---
  const toast = document.getElementById('toastNotice');
  const toastMessage = document.getElementById('toastMessage');

  window.copyColorHex = function(hex, e) {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(hex).then(() => {
      showToast(`Đã sao chép mã màu ${hex} vào bộ nhớ tạm!`);
    }).catch(() => {
      // Fallback
      showToast(`Mã màu: ${hex}`);
    });
  };

  function showToast(msg) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // --- Theme Manager (Light / Dark / System) ---
  const THEME_KEY = 'theme-preference';

  function getSystemTheme() {
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }

  function applyTheme(preference, notify = false) {
    const isSystem = preference === 'system';
    const effectiveTheme = isSystem ? getSystemTheme() : preference;
    
    if (effectiveTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Update active style on all theme buttons (desktop & mobile)
    document.querySelectorAll('.theme-btn').forEach(btn => {
      const btnTheme = btn.getAttribute('data-theme');
      if (btnTheme === preference) {
        btn.classList.add('bg-white', 'dark:bg-slate-700', 'text-amber-700', 'dark:text-amber-300', 'shadow-xs', 'font-bold');
        btn.classList.remove('text-slate-600', 'dark:text-slate-400');
      } else {
        btn.classList.remove('bg-white', 'dark:bg-slate-700', 'text-amber-700', 'dark:text-amber-300', 'shadow-xs', 'font-bold');
        btn.classList.add('text-slate-600', 'dark:text-slate-400');
      }
    });

    if (notify) {
      const labels = {
        light: '☀️ Đã bật giao diện Sáng (Light Mode)',
        dark: '🌙 Đã bật giao diện Tối (Dark Mode)',
        system: `💻 Chế độ Tự động theo thiết bị (${effectiveTheme === 'dark' ? 'Đang Tối' : 'Đang Sáng'})`
      };
      showToast(labels[preference] || 'Đã cập nhật giao diện');
    }
  }

  // Event listener for theme buttons
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const selected = btn.getAttribute('data-theme');
      localStorage.setItem(THEME_KEY, selected);
      applyTheme(selected, true);
    });
  });

  // Listen to OS system theme changes (with fallback for Safari/mobile)
  const mediaQuery = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
  if (mediaQuery) {
    const handleSystemChange = () => {
      const currentPref = localStorage.getItem(THEME_KEY) || 'system';
      if (currentPref === 'system') {
        applyTheme('system', false);
      }
    };
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleSystemChange);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleSystemChange);
    }
  }

  // Apply initial theme
  const initialTheme = localStorage.getItem(THEME_KEY) || 'system';
  applyTheme(initialTheme, false);

  // --- Mobile Menu Toggle ---
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // --- Interactive Contact Form Handler ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4 animate-spin"></i> Đang gửi thông tin...`;
      
      setTimeout(() => {
        submitBtn.innerHTML = `<i data-lucide="check" class="w-4 h-4 text-emerald-400"></i> Đã gửi yêu cầu thành công!`;
        submitBtn.classList.add('bg-emerald-500', 'text-white');
        contactForm.reset();
        showToast('Cảm ơn bạn! Yêu cầu thiết kế đã được tiếp nhận, chúng tôi sẽ liên hệ lại trong vòng 24h.');
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.classList.remove('bg-emerald-500', 'text-white');
          if (window.lucide) window.lucide.createIcons();
        }, 3500);
      }, 1000);
    });
  }
});
