// 图片画廊数据
const galleryData = {
  categories: {
    wisconsin: {
      name: "Wisconsin",
      images: [
        {
          src: "images/street.jpeg",
          alt: "Wisconsin State Capital",
          title: "Wisconsin State Capital",
          lazy: false
        },
        {
          src: "images/ice-lake.jpeg",
          alt: "Houses and Frozen Lake Mendota",
          title: "Houses and Frozen Lake Mendota",
          lazy: false
        },
        {
          src: "images/snow-lake.jpeg",
          alt: "Snowy and icy Lake Mendota",
          title: "Snowy and icy Lake Mendota",
          lazy: false
        },
        {
          src: "images/street-runner.jpeg",
          alt: "Snowy Street",
          title: "Snowy Street",
          lazy: false
        },
        {
          src: "images/street-2.jpeg",
          alt: "Wisconsin State Capital",
          title: "Wisconsin State Capital",
          lazy: false
        },
        {
          src: "images/wisc.jpeg",
          alt: "University of Wisconsin-Madison",
          title: "University of Wisconsin-Madison",
          lazy: false
        },
        {
          src: "images/xu_peiran_01_streetphotography.JPG",
          alt: "Mendota",
          title: "Mendota",
          lazy: false
        },
        {
          src: "images/xu_peiran_02_streetphotography.JPG",
          alt: "Street Photography",
          title: "Street Photography",
          lazy: false
        },
        {
          src: "images/xu_peiran_03_streetphotography.JPG",
          alt: "Mendota",
          title: "Mendota",
          lazy: false
        },
        {
          src: "images/xu_peiran_05_streetphotography.JPG",
          alt: "Mendota",
          title: "Mendota",
          lazy: false
        },
        {
          src: "images/xu_peiran_08_streetphotography.JPG",
          alt: "Memorial Union",
          title: "Memorial Union",
          lazy: false
        },
        {
          src: "images/xu_peiran_09_streetphotography.JPG",
          alt: "West Gilman St.",
          title: "West Gilman St.",
          lazy: false
        },
        {
          src: "images/xu_peiran_10_streetphotography.JPG",
          alt: "University Book Store",
          title: "University Book Store",
          lazy: false
        }
      ]
    },
    chicago: {
      name: "Chicago",
      images: [
        {
          src: "images/grant_park.JPG",
          alt: "Cloud Gate",
          title: "Cloud Gate",
          lazy: false
        },
        {
          src: "images/lincoln_park.JPG",
          alt: "Chicago skyline from lincoln park",
          title: "Chicago skyline from lincoln park",
          lazy: false
        },
        {
          src: "images/skyline.JPG",
          alt: "Chicago skyline from lincoln park",
          title: "Chicago skyline from lincoln park",
          lazy: false
        },
        {
          src: "images/skyline_2.JPG",
          alt: "Chicago skyline from lincoln park",
          title: "Chicago skyline from lincoln park",
          lazy: false
        },
        {
          src: "images/michigan_lake.JPG",
          alt: "Lake Michigan",
          title: "Lake Michigan",
          lazy: false
        },
        {
          src: "images/trump_tower.JPG",
          alt: "Trump Tower",
          title: "Trump Tower",
          lazy: false
        },
        {
          src: "images/xu_peiran_02_daylight.JPG",
          alt: "Chicago, IL",
          title: "Chicago, IL",
          lazy: false
        },
        {
          src: "images/xu_peiran_03_daylight.JPG",
          alt: "Chicago Daylight",
          title: "Chicago Daylight",
          lazy: false
        },
        {
          src: "images/xu_peiran_07_streetphotography.JPG",
          alt: "Chicago",
          title: "Chicago",
          lazy: false
        }
      ]
    },
    newyork: {
      name: "New York",
      images: [
        {
          src: "images/NYC.JPG",
          alt: "Manhattan",
          title: "Manhattan",
          lazy: false
        },
        {
          src: "images/nyc-2.JPG",
          alt: "New York Street",
          title: "New York Street",
          lazy: false
        },
        {
          src: "images/nyc-3.JPG",
          alt: "Wall Street",
          title: "Wall Street",
          lazy: false
        },
        {
          src: "images/nyc-4.JPG",
          alt: "New York Stock Exchange",
          title: "New York Stock Exchange",
          lazy: true
        },
        {
          src: "images/nyc-5.JPG",
          alt: "Times Square",
          title: "Times Square",
          lazy: true
        },
        {
          src: "images/nyc-6.JPG",
          alt: "Times Square",
          title: "Times Square",
          lazy: true
        },
        {
          src: "images/nyc-7.JPG",
          alt: "Times Square",
          title: "Times Square",
          lazy: true
        },
        {
          src: "images/nyc-8.JPG",
          alt: "Long Island City",
          title: "Long Island City",
          lazy: true
        },
        {
          src: "images/nyc-9.JPG",
          alt: "Long Island City",
          title: "Long Island City",
          lazy: true
        }
      ]
    },
    washington: {
      name: "Washington DC",
      images: [
        {
          src: "images/dc-1.JPG",
          alt: "Washington Monument",
          title: "Washington Monument",
          lazy: true
        },
        {
          src: "images/dc-2.JPG",
          alt: "The Capital, DC",
          title: "The Capital, DC",
          lazy: true
        }
      ]
    },
    singapore: {
      name: "Singapore",
      images: [
        {
          src: "images/sg.JPG",
          alt: "Singapore Changi Airport",
          title: "Singapore Changi Airport",
          lazy: true
        }
      ]
    }
  }
};

// 生成图片HTML的函数
function generateImageHTML(image, index) {
  const lazySrc = image.lazy ? 
    `data-src="${image.src}" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="` : 
    `src="${image.src}"`;
  
  const lazyClass = image.lazy ? ' lazy-img' : '';
  
  return `
    <div class="col-md-4 col-sm-6">
      <div class="image-container">
        <img ${lazySrc} alt="${image.alt}" class="img-fluid rounded shadow${lazyClass}">
        <div class="overlay-text">${image.title}</div>
      </div>
    </div>
  `;
}

// 生成分类HTML的函数
function generateCategoryHTML(categoryKey, category) {
  const imagesHTML = category.images.map((image, index) => 
    generateImageHTML(image, index)
  ).join('');
  
  return `
    <div class="category-section mb-5">
      <h3 class="category-title">${category.name}</h3>
      <div class="row g-3">
        ${imagesHTML}
      </div>
    </div>
  `;
}

// 生成所有图片的HTML
function generateAllImagesHTML() {
  let allImages = [];
  Object.values(galleryData.categories).forEach(category => {
    allImages = allImages.concat(category.images);
  });
  
  return allImages.map((image, index) => 
    generateImageHTML(image, index)
  ).join('');
}

// 初始化画廊
function initGallery() {
  const container = document.getElementById('gallery-container');
  if (!container) return;
  
  // 生成所有图片
  const allImagesHTML = generateAllImagesHTML();
  container.innerHTML = allImagesHTML;
  
  // 初始化懒加载
  initLazyLoading();
}

// 初始化分类视图
function initCategoryView() {
  const container = document.getElementById('gallery-container');
  if (!container) return;
  
  let categoriesHTML = '';
  Object.entries(galleryData.categories).forEach(([key, category]) => {
    categoriesHTML += generateCategoryHTML(key, category);
  });
  
  container.innerHTML = categoriesHTML;
  
  // 初始化懒加载
  initLazyLoading();
}

// 懒加载初始化
function initLazyLoading() {
  const lazyImages = document.querySelectorAll('img.lazy-img');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute('data-src');
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });
    lazyImages.forEach(function (img) {
      observer.observe(img);
    });
  } else {
    // 不支持 IntersectionObserver 的浏览器，直接加载
    lazyImages.forEach(function (img) {
      img.src = img.getAttribute('data-src');
      img.removeAttribute('data-src');
    });
  }
}

// 筛选功能
function filterByCategory(categoryKey) {
  const container = document.getElementById('gallery-container');
  if (!container) return;
  
  if (categoryKey === 'all') {
    initGallery();
  } else {
    const category = galleryData.categories[categoryKey];
    if (category) {
      const imagesHTML = category.images.map((image, index) => 
        generateImageHTML(image, index)
      ).join('');
      container.innerHTML = `
        <div class="row g-3">
          ${imagesHTML}
        </div>
      `;
      initLazyLoading();
    }
  }
}

// 搜索功能
function searchImages(query) {
  const container = document.getElementById('gallery-container');
  if (!container) return;
  
  let allImages = [];
  Object.values(galleryData.categories).forEach(category => {
    allImages = allImages.concat(category.images);
  });
  
  const filteredImages = allImages.filter(image => 
    image.title.toLowerCase().includes(query.toLowerCase()) ||
    image.alt.toLowerCase().includes(query.toLowerCase())
  );
  
  const imagesHTML = filteredImages.map((image, index) => 
    generateImageHTML(image, index)
  ).join('');
  
  container.innerHTML = `
    <div class="row g-3">
      ${imagesHTML}
    </div>
  `;
  initLazyLoading();
}
