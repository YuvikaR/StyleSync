// 1. Selection
const themeBtn = document.getElementById('theme-btn');
const html = document.documentElement;
const toast = document.querySelector('.dark-toast');

// 2. Initial Theme Load
if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark');
}

// 3. Theme Toggle & Toast Trigger
themeBtn.addEventListener('click', () => {
    if (html.classList.contains('dark')) {
        // Switch to LIGHT
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        hideToast(); 
    } else {
        // Switch to DARK
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        showToast(); // <--- This now actually triggers
    }
});

// 4. Toast Functions
function showToast() {
    if (!toast) return; // Safety check
    
    toast.style.display = 'flex';
    // Small timeout to allow display:flex to register before adding opacity/transform
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    // Auto-hide after 4 seconds
    setTimeout(() => {
        hideToast();
    }, 4000);
}

function hideToast() {
    if (!toast) return;
    
    toast.classList.remove('show');
    // Wait for the CSS transition (0.4s) to finish before hiding display
    setTimeout(() => {
        if (!toast.classList.contains('show')) {
            toast.style.display = 'none';
        }
    }, 400);
}
//Home card's section 
  // Fallback for browsers that don't support view-timeline
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const siblings = e.target.parentElement.querySelectorAll('.reveal');
      siblings.forEach((el, i) => {
        el.style.transitionDelay = (i * 80) + 'ms';
        el.classList.add('visible');
      });
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));




//COLOR matcher Page 
const MOODS = ['Minimal', 'Streetwear', 'Formal', 'Luxury'];
// Recommendations database: keyed by colorIndex, mood, occasion
// Each entry: { pants, shoes, accent, why, tip }
const RECS = {
  // White shirt
  '0': {
    default: {
      pants: { name:'Slim Chinos', color:'#D2B48C', colorName:'Warm Tan' },
      shoes: { name:'Loafers', color:'#8B4513', colorName:'Cognac Brown' },
      accent: { name:'Gold Watch', color:'#DAA520', colorName:'Brushed Gold' },
      why: 'White is the ultimate canvas. Tan chinos warm up the look while cognac loafers add a timeless touch.',
      tip: 'White shirts pair beautifully with earthy neutrals. Roll up the sleeves for an effortlessly put-together look.'
    },
    Formal: {
      pants: { name:'Tailored Trousers', color:'#f5f5f5', colorName:'Off White' },
      shoes: { name:'Stiletto', color:'#D2B48C', colorName:'Beige' },
      accent: { name:'Overlay', color:'#f5f5f5', colorName:'Off White' },
      why: 'A white dress shirt in navy trousers is a power move — timeless and impeccably sharp.',
      tip: 'Keep your white shirt crisp and neatly tucked for formal settings. Iron is your best friend.'
    },
    Streetwear: {
      pants: { name:'Cargo/Denim Pants', color:'#4a4a4a', colorName:'Washed Bl' },
      shoes: { name:'High-Top Sneakers', color:'#f5f5f5', colorName:'Off White' },
      accent: { name:'Shades', color:'#181818', colorName:'Matte Black' },
      why: 'White tees as a streetwear base is iconic — dark cargos ground the look while matching sneakers keep the drip clean.',
      tip: 'Leave the shirt slightly open or untucked for maximum streetwear energy.'
    },
    Minimal: {
      pants: { name:'Jeans', color:'linear-gradient(to bottom, #5a5a5a, #054087)', colorName:'Washed Blue' },
      shoes: { name:'Flats', color:'#050505', colorName:'Black' },
      accent: { name:'Bucket Hat', color:'#2b4c87', colorName:'Washed Blue' },
      why: 'White tees as a streetwear base is iconic — dark cargos ground the look while matching sneakers keep the drip clean.',
      tip: 'Leave the shirt slightly open or untucked for maximum streetwear energy.'
    },
    Luxury: {
      pants: { name:'Satin Skirt', color:'White', colorName:'White' },
      shoes: { name:'Kitten Heels', color:'#fcefde', colorName:'Light beige' },
      accent: { name:'Gold accessories', color:'#DAA520', colorName:'Gold' },
      why: 'White tees as a streetwear base is iconic — dark cargos ground the look while matching sneakers keep the drip clean.',
      tip: 'Leave the shirt slightly open or untucked for maximum streetwear energy.'
    }
  },
  // Biege/Cream shirt
  '1': {
    default: {
      pants: { name:'Slim Chinos', color:'#D2B48C', colorName:'Warm Tan' },
      shoes: { name:'Loafers', color:'#8B4513', colorName:'Cognac Brown' },
      accent: { name:'Gold Watch', color:'#DAA520', colorName:'Brushed Gold' },
      why: 'White is the ultimate canvas. Tan chinos warm up the look while cognac loafers add a timeless touch.',
      tip: 'White shirts pair beautifully with earthy neutrals. Roll up the sleeves for an effortlessly put-together look.'
    },
    Formal: {
      pants: { name:'Tailored Trousers', color:'#c0a581', colorName:'Tan Beige' },
      shoes: { name:'Stiletto', color:'#D2B48C', colorName:'Beige'  },
      accent: { name:'Brown Leather watch', color:'#8B4513', colorName:'Cognac Brown'},
      why: 'A white dress shirt in navy trousers is a power move — timeless and impeccably sharp.',
      tip: 'Keep your white shirt crisp and neatly tucked for formal settings. Iron is your best friend.'
    },
    Streetwear: {
      pants: { name:'Cargo Pants', color:'linear-gradient(to bottom, #5a5a5a, #2f2f2f)', colorName:'Washed Black' },
      shoes: { name:'High-Top Sneakers', color:'#f5f5f5', colorName:'Off White' },
      accent: { name:'Brown Leather Jacket', color:'#411c02', colorName:'Dark Brown' },
      why: 'White tees as a streetwear base is iconic — dark cargos ground the look while matching sneakers keep the drip clean.',
      tip: 'Leave the shirt slightly open or untucked for maximum streetwear energy.'
    },
    Minimal: {
      pants: { name:'Cargo Pants', color:'#4a4a4a', colorName:'Washed Black' },
      shoes: { name:'High-Top Sneakers', color:'#f5f5f5', colorName:'Off White' },
      accent: { name:'Bucket Hat', color:'#333', colorName:'Matte Black' },
      why: 'White tees as a streetwear base is iconic — dark cargos ground the look while matching sneakers keep the drip clean.',
      tip: 'Leave the shirt slightly open or untucked for maximum streetwear energy.'
    },
    Luxury: {
      pants: { name:'Denim Flared Jeans', color:'#101a3a', colorName:'Dark Blue' },
      shoes: {name:'Kitten Heels', color:'#ffffff', colorName:'White'  },
      accent: { name:'Gold accessories', color:'#DAA520', colorName:'Gold' },
      why: 'White tees as a streetwear base is iconic — dark cargos ground the look while matching sneakers keep the drip clean.',
      tip: 'Leave the shirt slightly open or untucked for maximum streetwear energy.'
    }
  },
  // Dusty Pink
  '2': {
  default: {
    pants: { name:'High-Waist Trousers', color:'#F5E6E8', colorName:'Blush Ivory' },
    shoes: { name:'Ballet Flats', color:'#E8B4B8', colorName:'Dusty Rose' },
    accent: { name:'Gold Jewelry', color:'#D4AF37', colorName:'Soft Gold' },
    why: 'Dusty pink pairs beautifully with soft neutrals, creating an elegant and feminine palette that feels light and refined.',
    tip: 'Stick to soft tones and minimal accessories to keep the look effortlessly chic.'
  },

  Formal: {
    pants: { name:'Tailored Trousers', color:'#e7cfaf', colorName:'Beige'},
    shoes: { name:'Kitten Heels', color:'#fcefde', colorName:'Light beige' },
    accent: { name:'Brown Leather watch', color:'#8B4513', colorName:'Cognac Brown' },
    why: 'Dusty pink with deep tones creates a sophisticated contrast perfect for formal settings.',
    tip: 'Add delicate jewelry to elevate the softness without overpowering the look.'
  },

  Streetwear: {
    pants: { name:'Wide-Leg Cargo Pants', color:'#C0C0C0', colorName:'Soft Grey' },
    shoes: { name:'Chunky Sneakers', color:'#FFFFFF', colorName:'Clean White' },
    accent: { name:'Mini Backpack', color:'#333333', colorName:'Matte Black' },
    why: 'Soft pink balanced with neutral cargos gives a cool street-style contrast.',
    tip: 'Go for oversized fits to enhance the streetwear vibe.'
  },

  Minimal: {
    pants: { name:'Straight Fit Pants', color:'#FDFCF8', colorName:'Ivory' },
    shoes: { name:'Slip-On Flats', color:'#E8B4B8', colorName:'Muted Pink' },
    accent: { name:'Delicate Chain', color:'#D4AF37', colorName:'Gold' },
    why: 'A monochrome pink palette feels clean, soft, and modern.',
    tip: 'Keep silhouettes simple for a polished minimal aesthetic.'
  },
  Luxury: {
    pants: { name:'Satin skrit', color:'#eae6d0', colorName:'Soft Gold' },
    shoes: { name:'Pumped Heels', color:'#E8B4B8', colorName:'Dusty Rose' },
    accent: { name:'Accessories', color:'#D4AF37', colorName:'Metallic Gold' },
    why: 'Blush tones with gold accents create a luxurious, feminine glow.',
    tip: 'Mix textures like satin and metallics for a high-end feel.'
  }
},
   // Baby Blue
  '3': {
  default: {
    pants: { name:'White Wide-Leg Pants', color:'#FFFFFF', colorName:'Crisp White' },
    shoes: { name:'Sneakers', color:'#F5F5F5', colorName:'Soft White' },
    accent: { name:'Silver Watch', color:'#C0C0C0', colorName:'Polished Silver' },
    why: 'Baby blue with white creates a clean, fresh, and effortlessly stylish look.',
    tip: 'Perfect for daytime outfits — keep everything light and breathable.'
  },

  Formal: {
    pants: { name:'Tailored Trousers', color:'#1A1A2E', colorName:'Midnight Navy' },
    shoes: { name:'Closed Heels', color:'#2C2C2C', colorName:'Classic Black' },
    accent: { name:'Minimal Jewelry', color:'#C0C0C0', colorName:'Silver' },
    why: 'Soft blue paired with navy creates a calm yet powerful formal outfit.',
    tip: 'Balance soft and dark tones for a structured, elegant look.'
  },

  Streetwear: {
    pants: { name:'Denim Jeans', color:'#5A7CA8', colorName:'Classic Blue Denim' },
    shoes: { name:'Chunky Sneakers', color:'#FFFFFF', colorName:'White' },
    accent: { name:'Crossbody Bag', color:'#333333', colorName:'Matte Black' },
    why: 'Denim-on-blue creates a layered tonal streetwear look.',
    tip: 'Add oversized pieces for a relaxed Gen Z vibe.'
  },

  Minimal: {
    pants: { name:'Beige Trousers', color:'#F5F5DC', colorName:'Soft Beige' },
    shoes: { name:'Slip-On Shoes', color:'#FFFFFF', colorName:'White' },
    accent: { name:'Thin Bracelet', color:'#D4AF37', colorName:'Gold' },
    why: 'Baby blue with beige keeps things soft, neutral, and elegant.',
    tip: 'Keep accessories minimal and clean.'
  },

  Luxury: {
    pants: { name:'Silk Pants', color:'#E6ECF5', colorName:'Icy Blue' },
    shoes: { name:'Pointed Heels', color:'#89CFF0', colorName:'Sky Blue' },
    accent: { name:'Statement Bag', color:'#89CFF0', colorName:'Sky Blue' },
    why: 'Soft blue with gold accents creates a calm, luxurious aesthetic.',
    tip: 'Play with glossy textures like silk and patent leather.'
  }
},
  // Sage
  '4': {
  default: {
    pants: { name:'Linen Trousers', color:'#F5F5DC', colorName:'Cream Beige' },
    shoes: { name:'Sandals', color:'#8B7355', colorName:'Warm Taupe' },
    accent: { name:'Woven Bag', color:'#C2A27A', colorName:'Natural Tan' },
    why: 'Sage with cream tones creates a soft, nature-inspired aesthetic.',
    tip: 'Choose breathable fabrics like linen for a relaxed feel.'
  },

  Formal: {
    pants: { name:'Tailored Pants', color:'#2E2E2E', colorName:'Deep Charcoal' },
    shoes: { name:'Heeled Pumps', color:'#3B2F2F', colorName:'Dark Brown' },
    accent: { name:'Gold Watch', color:'#D4AF37', colorName:'Gold' },
    why: 'Muted green with dark tones creates a grounded and elegant formal look.',
    tip: 'Keep the outfit structured to balance the softness of sage.'
  },

  Streetwear: {
    pants: { name:'Cargo Pants', color:'#4A5D4A', colorName:'Forest Green' },
    shoes: { name:'Sneakers', color:'#FFFFFF', colorName:'White' },
    accent: { name:'Cap', color:'#333333', colorName:'Black' },
    why: 'Sage with deeper greens creates a tonal streetwear palette.',
    tip: 'Layer with neutrals to avoid overpowering the look.'
  },

  Minimal: {
    pants: { name:'Straight Pants', color:'#FFFFFF', colorName:'White' },
    shoes: { name:'Slides', color:'#9CAF88', colorName:'Soft Sage' },
    accent: { name:'Simple Chain', color:'#D4AF37', colorName:'Gold' },
    why: 'Sage and white create a calm, minimal aesthetic.',
    tip: 'Stick to soft tones and clean lines.'
  },

  Luxury: {
    pants: { name:'Silk Skirt', color:'#E8EFE8', colorName:'Muted Sage' },
    shoes: { name:'Strappy Heels', color:'#D4AF37', colorName:'Gold' },
    accent: { name:'Clutch Bag', color:'#9CAF88', colorName:'Sage' },
    why: 'Sage with gold accents feels organic yet luxurious.',
    tip: 'Use flowy fabrics to enhance elegance.'
  }
},
  // Camel/Tan
  '5': {
  default: {
    pants: { name:'Wide-Leg Trousers', color:'#F5E6D3', colorName:'Soft Beige' },
    shoes: { name:'Strappy Sandals', color:'#C19A6B', colorName:'Warm Tan' },
    accent: { name:'Leather Tote', color:'#8B5E3C', colorName:'Caramel Brown' },
    why: 'Camel tones create a warm, neutral palette that feels elevated yet effortless.',
    tip: 'Stick to tonal layering for a rich, cohesive look.'
  },

  Formal: {
    pants: { name:'Tailored Pants', color:'#2E2E2E', colorName:'Charcoal Black' },
    shoes: { name:'Pointed Heels', color:'#3B2F2F', colorName:'Espresso Brown' },
    accent: { name:'Gold Jewelry', color:'#D4AF37', colorName:'Gold' },
    why: 'Camel paired with dark tones creates a refined, power-dressing aesthetic.',
    tip: 'Add structured pieces to elevate the softness.'
  },

  Streetwear: {
    pants: { name:'Relaxed Fit Jeans', color:'#A67B5B', colorName:'Clay Brown' },
    shoes: { name:'Chunky Sneakers', color:'#FFFFFF', colorName:'White' },
    accent: { name:'Mini Bag', color:'#333333', colorName:'Black' },
    why: 'Warm browns with denim textures give a grounded streetwear feel.',
    tip: 'Play with oversized silhouettes for a relaxed vibe.'
  },

  Minimal: {
    pants: { name:'Straight Pants', color:'#FDFCF8', colorName:'Ivory' },
    shoes: { name:'Slides', color:'#C19A6B', colorName:'Tan' },
    accent: { name:'Delicate Chain', color:'#D4AF37', colorName:'Gold' },
    why: 'Camel and ivory create a clean, minimal luxury palette.',
    tip: 'Keep tones soft and silhouettes simple.'
  },

  Luxury: {
    pants: { name:'Silk Trousers', color:'#E8D3B9', colorName:'Champagne Beige' },
    shoes: { name:'Heeled Sandals', color:'#D4AF37', colorName:'Metallic Gold' },
    accent: { name:'Clutch Bag', color:'#C19A6B', colorName:'Tan Leather' },
    why: 'Camel with gold accents creates a warm, high-end aesthetic.',
    tip: 'Use rich fabrics like silk or satin for a luxe finish.'
  }
},
  // Olive green
 '6': {
  default: {
    pants: { name:'Cream Trousers', color:'#F5F5DC', colorName:'Ivory Cream' },
    shoes: { name:'White Sneakers', color:'#FFFFFF', colorName:'Clean White' },
    accent: { name:'Canvas Tote', color:'#9CAF88', colorName:'Soft Olive' },
    why: 'Olive with cream creates a soft, nature-inspired everyday look.',
    tip: 'Balance earthy tones with light neutrals.'
  },

  Formal: {
    pants: { name:'Tailored Pants', color:'#2E2E2E', colorName:'Charcoal' },
    shoes: { name:'Heeled Pumps', color:'#3B2F2F', colorName:'Dark Brown' },
    accent: { name:'Gold Watch', color:'#D4AF37', colorName:'Gold' },
    why: 'Olive with dark tones creates a sophisticated, grounded formal look.',
    tip: 'Keep accessories minimal and elegant.'
  },

  Streetwear: {
    pants: { name:'Cargo Pants', color:'#4A5D4A', colorName:'Forest Green' },
    shoes: { name:'Chunky Sneakers', color:'#FFFFFF', colorName:'White' },
    accent: { name:'Cap', color:'#333333', colorName:'Black' },
    why: 'Layered greens create a tonal, edgy streetwear aesthetic.',
    tip: 'Mix textures like cotton and denim.'
  },

  Minimal: {
    pants: { name:'Straight Pants', color:'#FFFFFF', colorName:'White' },
    shoes: { name:'Slides', color:'#9CAF88', colorName:'Sage Olive' },
    accent: { name:'Thin Bracelet', color:'#D4AF37', colorName:'Gold' },
    why: 'Olive and white create a calm, minimal palette.',
    tip: 'Stick to clean lines and soft tones.'
  },

  Luxury: {
    pants: { name:'Silk Skirt', color:'#E8EFE8', colorName:'Muted Olive' },
    shoes: { name:'Strappy Heels', color:'#D4AF37', colorName:'Gold' },
    accent: { name:'Clutch', color:'#4A5D4A', colorName:'Deep Olive' },
    why: 'Olive with gold creates a rich, organic luxury feel.',
    tip: 'Flowy fabrics enhance elegance.'
  }
},
  // Rust
  '7': {
  default: {
    pants: { name:'Black Straight Jeans', color:'#1A1A1A', colorName:'Jet Black' },
    shoes: { name:'Ankle Boots', color:'#3B2F2F', colorName:'Dark Cocoa' },
    accent: { name:'Hoop Earrings', color:'#D4AF37', colorName:'Gold' },
    why: 'Rust pops beautifully against black, creating a bold, confident look.',
    tip: 'Let rust be the statement — keep the rest neutral.'
  },

  Formal: {
    pants: { name:'Tailored Pants', color:'#2E2E2E', colorName:'Charcoal' },
    shoes: { name:'Heeled Pumps', color:'#1A1A1A', colorName:'Black' },
    accent: { name:'Clutch', color:'#B55239', colorName:'Rust' },
    why: 'Rust adds warmth to formal outfits without being overpowering.',
    tip: 'Balance bold tones with structured silhouettes.'
  },

  Streetwear: {
    pants: { name:'Baggy Jeans', color:'#5A5A5A', colorName:'Washed Grey' },
    shoes: { name:'Sneakers', color:'#FFFFFF', colorName:'White' },
    accent: { name:'Crossbody Bag', color:'#333333', colorName:'Black' },
    why: 'Rust paired with washed denim creates a trendy street vibe.',
    tip: 'Go oversized for a Gen Z look.'
  },

  Minimal: {
    pants: { name:'Beige Pants', color:'#F5F5DC', colorName:'Soft Beige' },
    shoes: { name:'Slides', color:'#FFFFFF', colorName:'White' },
    accent: { name:'Minimal Chain', color:'#D4AF37', colorName:'Gold' },
    why: 'Rust with beige softens the boldness into a minimal aesthetic.',
    tip: 'Keep tones muted and balanced.'
  },

  Luxury: {
    pants: { name:'Satin Skirt', color:'#B55239', colorName:'Deep Rust' },
    shoes: { name:'Heels', color:'#D4AF37', colorName:'Gold' },
    accent: { name:'Clutch', color:'#1A1A1A', colorName:'Black' },
    why: 'Rust with gold creates a rich, luxurious palette.',
    tip: 'Glossy textures elevate the look instantly.'
  }
},
  //Saddle brown
  '8': {
  default: {
    pants: { name:'Cream Pants', color:'#FDFCF8', colorName:'Ivory' },
    shoes: { name:'Loafers', color:'#8B5E3C', colorName:'Saddle Brown' },
    accent: { name:'Leather Bag', color:'#5D4037', colorName:'Dark Brown' },
    why: 'Brown with ivory creates a warm, balanced neutral palette.',
    tip: 'Layer different brown tones for depth.'
  },

  Formal: {
    pants: { name:'Tailored Pants', color:'#2E2E2E', colorName:'Charcoal' },
    shoes: { name:'Heeled Pumps', color:'#5D4037', colorName:'Dark Brown' },
    accent: { name:'Gold Watch', color:'#D4AF37', colorName:'Gold' },
    why: 'Brown tones soften formal looks while keeping them elegant.',
    tip: 'Stick to structured silhouettes.'
  },

  Streetwear: {
    pants: { name:'Denim Jeans', color:'#5A7CA8', colorName:'Classic Blue' },
    shoes: { name:'Sneakers', color:'#FFFFFF', colorName:'White' },
    accent: { name:'Mini Bag', color:'#5D4037', colorName:'Brown' },
    why: 'Brown and denim create a relaxed, everyday street look.',
    tip: 'Mix textures like leather and denim.'
  },

  Minimal: {
    pants: { name:'Beige Pants', color:'#F5F5DC', colorName:'Soft Beige' },
    shoes: { name:'Slides', color:'#8B5E3C', colorName:'Brown' },
    accent: { name:'Thin Chain', color:'#D4AF37', colorName:'Gold' },
    why: 'Soft neutrals with brown create a calming minimal palette.',
    tip: 'Keep colors light and cohesive.'
  },

  Luxury: {
    pants: { name:'Silk Trousers', color:'#E8D3B9', colorName:'Champagne' },
    shoes: { name:'Heels', color:'#5D4037', colorName:'Deep Brown' },
    accent: { name:'Clutch', color:'#D4AF37', colorName:'Gold' },
    why: 'Brown with gold creates a timeless luxury aesthetic.',
    tip: 'Use premium fabrics for richness.'
  }
},
  //Dark Teal
  '9': {
  default: {
    pants: { name:'White Pants', color:'#FFFFFF', colorName:'Crisp White' },
    shoes: { name:'Sneakers', color:'#F5F5F5', colorName:'White' },
    accent: { name:'Silver Jewelry', color:'#C0C0C0', colorName:'Silver' },
    why: 'Teal pops beautifully against white for a fresh, clean look.',
    tip: 'Let teal be the highlight.'
  },

  Formal: {
    pants: { name:'Skrit', color:'#8B4513', colorName:'Cognac Brown'},
    shoes: { name:'Heels', color:'#2C2C2C', colorName:'Black' },
    accent: { name:'Bag', color:'#8B4513', colorName:'Cognac Brown' },
    why: 'Teal adds a unique twist to formal outfits.',
    tip: 'Keep everything else neutral.'
  },

  Streetwear: {
    pants: { name:'Denim Jeans', color:'#5A7CA8', colorName:'Blue Denim' },
    shoes: { name:'Sneakers', color:'#FFFFFF', colorName:'White' },
    accent: { name:'Cap', color:'#333333', colorName:'Black' },
    why: 'Teal with denim creates a cool, urban look.',
    tip: 'Go oversized.'
  },

  Minimal: {
    pants: { name:'Beige Pants', color:'#F5F5DC', colorName:'Beige' },
    shoes: { name:'Slides', color:'#FFFFFF', colorName:'White' },
    accent: { name:'Chain', color:'#D4AF37', colorName:'Gold' },
    why: 'Teal and beige create a soft contrast.',
    tip: 'Keep it clean and simple.'
  },

  Luxury: {
    pants: { name:'Silk Pants', color:'#003F3F', colorName:'Deep Teal' },
    shoes: { name:'Heels', color:'#D4AF37', colorName:'Gold' },
    accent: { name:'Clutch', color:'#FFFFFF', colorName:'Ivory' },
    why: 'Teal with gold feels rich and elegant.',
    tip: 'Use glossy textures.'
  }
},
  //Slate Blue
  '10': {
  default: {
    pants: { name:'Wide-Leg Trousers', color:'#E6E6FA', colorName:'Lavender Mist' },
    shoes: { name:'Ballet Flats', color:'#F8F8FF', colorName:'Soft Ivory' },
    accent: { name:'Pearl Earrings', color:'#F5F5F5', colorName:'Classic Pearl' },
    why: 'Slate blue with lavender tones creates a soft, dreamy aesthetic that feels calm and elevated.',
    tip: 'Stick to soft pastels for a clean girl aesthetic vibe.'
  },
  Formal: {
    pants: { name:'Tailored Pants', color:'#2F3E5B', colorName:'Midnight Slate' },
    shoes: { name:'Pointed Heels', color:'#1C1C1C', colorName:'Jet Black' },
    accent: { name:'Silver Clutch', color:'#C0C0C0', colorName:'Metallic Silver' },
    why: 'Deeper slate tones with black create a refined and structured formal look.',
    tip: 'Add sleek hair and minimal jewelry for a sharp finish.'
  },
  Streetwear: {
    pants: { name:'Baggy Jeans', color:'#6F8FAF', colorName:'Dusty Blue Denim' },
    shoes: { name:'Chunky Sneakers', color:'#FFFFFF', colorName:'Clean White' },
    accent: { name:'Mini Backpack', color:'#2F3E5B', colorName:'Slate Blue' },
    why: 'Blue-on-blue layering gives effortless street style energy.',
    tip: 'Oversized fits elevate this look instantly.'
  },
  Minimal: {
    pants: { name:'Straight Pants', color:'#DCDCDC', colorName:'Soft Grey' },
    shoes: { name:'Slip-On Flats', color:'#FFFFFF', colorName:'Pure White' },
    accent: { name:'Delicate Chain', color:'#E5E4E2', colorName:'Light Silver' },
    why: 'Muted tones with slate blue create a clean, quiet luxury vibe.',
    tip: 'Keep silhouettes structured and simple.'
  },
  Luxury: {
    pants: { name:'Silk Trousers', color:'#1E2A44', colorName:'Deep Slate Navy' },
    shoes: { name:'Heeled Sandals', color:'#D4AF37', colorName:'Soft Gold' },
    accent: { name:'Designer Bag', color:'#F5F5F5', colorName:'Ivory Leather' },
    why: 'Slate with gold accents creates a soft luxury aesthetic.',
    tip: 'Gold + muted blue = instant elegance.'
  }
},
  // Dark Denim
  '11': {
  default: {
    pants: { name:'Light Wash Jeans', color:'#AFCBFF', colorName:'Sky Denim' },
    shoes: { name:'White Sneakers', color:'#FFFFFF', colorName:'Clean White' },
    accent: { name:'Canvas Tote', color:'#EADDCA', colorName:'Beige Canvas' },
    why: 'Denim-on-denim creates a trendy, effortless everyday look.',
    tip: 'Mix light and dark denim for contrast.'
  },
  Formal: {
    pants: { name:'Cream Trousers', color:'#F5F5DC', colorName:'Ivory Cream' },
    shoes: { name:'Nude Heels', color:'#E3BC9A', colorName:'Soft Nude' },
    accent: { name:'Gold Watch', color:'#DAA520', colorName:'Gold' },
    why: 'Dark denim paired with cream tones balances casual with classy.',
    tip: 'Tuck in your shirt for a polished silhouette.'
  },
  Streetwear: {
    pants: { name:'Cargo Jeans', color:'#1E3A5F', colorName:'Deep Indigo' },
    shoes: { name:'High-Top Sneakers', color:'#F5F5F5', colorName:'Off White' },
    accent: { name:'Crossbody Bag', color:'#000000', colorName:'Black' },
    why: 'Denim cargos bring structure and street edge.',
    tip: 'Layer with cropped jackets for extra style.'
  },
  Minimal: {
    pants: { name:'Straight Jeans', color:'#2C3E50', colorName:'Classic Indigo' },
    shoes: { name:'Loafers', color:'#FFFFFF', colorName:'White' },
    accent: { name:'Leather Belt', color:'#8B4513', colorName:'Brown' },
    why: 'Clean denim silhouettes define minimal fashion.',
    tip: 'Stick to 2–3 colors max.'
  },
  Luxury: {
    pants: { name:'Tailored Denim Pants', color:'#1A2A40', colorName:'Luxury Indigo' },
    shoes: { name:'Heeled Boots', color:'#2C1810', colorName:'Espresso Brown' },
    accent: { name:'Statement Bag', color:'#D4AF37', colorName:'Gold' },
    why: 'Structured denim with luxe accessories elevates the entire look.',
    tip: 'Balance casual fabric with premium finishes.'
  }
},
  // Charcoal GRey
  '12': {
  default: {
    pants: { name:'Wide-Leg Pants', color:'#B0B0B0', colorName:'Soft Grey' },
    shoes: { name:'White Sneakers', color:'#FFFFFF', colorName:'White' },
    accent: { name:'Silver Necklace', color:'#C0C0C0', colorName:'Silver' },
    why: 'Grey tones create a calm, neutral everyday look.',
    tip: 'Monochrome always looks expensive.'
  },
  Formal: {
    pants: { name:'Tailored Pants', color:'#2B2B2B', colorName:'Charcoal' },
    shoes: { name:'Black Heels', color:'#000000', colorName:'Black' },
    accent: { name:'Clutch', color:'#C0C0C0', colorName:'Metallic Silver' },
    why: 'Charcoal is softer than black but equally powerful.',
    tip: 'Perfect for office or formal evenings.'
  },
  Streetwear: {
    pants: { name:'Joggers', color:'#3A3A3A', colorName:'Dark Grey' },
    shoes: { name:'Chunky Sneakers', color:'#F5F5F5', colorName:'Off White' },
    accent: { name:'Cap', color:'#1C1C1C', colorName:'Black' },
    why: 'Grey streetwear feels effortless and modern.',
    tip: 'Oversized hoodies work perfectly here.'
  },
  Minimal: {
    pants: { name:'Slim Pants', color:'#808080', colorName:'Classic Grey' },
    shoes: { name:'Flats', color:'#FFFFFF', colorName:'White' },
    accent: { name:'Watch', color:'#E5E4E2', colorName:'Silver' },
    why: 'Grey + white = ultimate minimal combo.',
    tip: 'Keep lines clean and sharp.'
  },
  Luxury: {
    pants: { name:'Wool Pants', color:'#2C2C2C', colorName:'Dark Charcoal' },
    shoes: { name:'Heeled Boots', color:'#3B2F2F', colorName:'Dark Brown' },
    accent: { name:'Gold Jewelry', color:'#DAA520', colorName:'Gold' },
    why: 'Dark greys with gold accents scream quiet luxury.',
    tip: 'Texture matters more than color here.'
  }
},
  // Midnight navy
  '13': {
  default: {
    pants: { name:'Cream Trousers', color:'#F5F5DC', colorName:'Ivory Cream' },
    shoes: { name:'Ballet Flats', color:'#FFFFFF', colorName:'White' },
    accent: { name:'Gold Bracelet', color:'#DAA520', colorName:'Gold' },
    why: 'Navy and cream create a timeless elegant contrast.',
    tip: 'Perfect for day-to-night outfits.'
  },
  Formal: {
    pants: { name:'Tailored Pants', color:'#0B132B', colorName:'Deep Navy' },
    shoes: { name:'Black Heels', color:'#000000', colorName:'Black' },
    accent: { name:'Clutch', color:'#C0C0C0', colorName:'Silver' },
    why: 'Deep navy gives a softer alternative to black formal wear.',
    tip: 'Add sleek hair for a polished look.'
  },
  Streetwear: {
    pants: { name:'Baggy Jeans', color:'#1C3D5A', colorName:'Washed Navy' },
    shoes: { name:'Sneakers', color:'#FFFFFF', colorName:'White' },
    accent: { name:'Sling Bag', color:'#000', colorName:'Black' },
    why: 'Navy streetwear is subtle but stylish.',
    tip: 'Layer with oversized jackets.'
  },
  Minimal: {
    pants: { name:'Straight Pants', color:'#E5E5E5', colorName:'Light Grey' },
    shoes: { name:'Loafers', color:'#FFFFFF', colorName:'White' },
    accent: { name:'Chain', color:'#E5E4E2', colorName:'Silver' },
    why: 'Soft neutrals balance deep navy beautifully.',
    tip: 'Keep tones muted and cohesive.'
  },
  Luxury: {
    pants: { name:'Silk Pants', color:'#0A1A2F', colorName:'Midnight Blue' },
    shoes: { name:'Heels', color:'#D4AF37', colorName:'Gold' },
    accent: { name:'Luxury Bag', color:'#F5F5F5', colorName:'Ivory' },
    why: 'Midnight navy with gold accents = pure elegance.',
    tip: 'Minimal accessories, maximum impact.'
  }
},
  // Deep maroon
  '14': {
  default: {
    pants: { name:'Black Jeans', color:'#1A1A1A', colorName:'Jet Black' },
    shoes: { name:'Ankle Boots', color:'#2C1810', colorName:'Dark Brown' },
    accent: { name:'Gold Hoops', color:'#DAA520', colorName:'Gold' },
    why: 'Maroon and black create a bold, confident everyday look.',
    tip: 'Perfect for evening outfits.'
  },
  Formal: {
    pants: { name:'Tailored Pants', color:'#0d0d0d', colorName:'Black' },
    shoes: { name:'Heels', color:'#000000', colorName:'Black' },
    accent: { name:'Small Gold Hoops', color:'#DAA520', colorName:'Gold'  },
    why: 'Deep maroon gives a luxurious formal vibe.',
    tip: 'Velvet fabrics elevate this look.'
  },
  Streetwear: {
    pants: { name:'Denim Pants', color:'#3A3A3A', colorName:'Dark Grey' },
    shoes: { name:'Sneakers', color:'#F5F5F5', colorName:'Off White' },
    accent: { name:'Bag', color:'#800000', colorName:'Maroon' },
    why: 'Maroon adds richness to streetwear fits.',
    tip: 'Balance with neutral bottoms.'
  },
  Minimal: {
    pants: { name:'Straight Pants', color:'#E5E5E5', colorName:'Light Grey' },
    shoes: { name:'Flats', color:'#FFFFFF', colorName:'White' },
    accent: { name:'Chain', color:'#E5E4E2', colorName:'Silver' },
    why: 'Maroon pops beautifully against soft neutrals.',
    tip: 'Let the top be the hero.'
  },
  Luxury: {
    pants: { name:'Silk Bottom', color:'#cfc19f', colorName:'Gold Silk' },
    shoes: { name:'Heels', color:'#800000', colorName:'Wine Red' },
    accent: { name:'Statement Bag', color:'#800000', colorName:'Wine Red' },
    why: 'Maroon + gold = rich, high-end aesthetic.',
    tip: 'Keep makeup bold to match.'
  }
},
  // Jet Black
 '15': {
  default: {
    pants: { name:'Grey Trousers', color:'#808080', colorName:'Grey' },
    shoes: { name:'White Sneakers', color:'#FFFFFF', colorName:'White' },
    accent: { name:'Silver Watch', color:'#C0C0C0', colorName:'Silver' },
    why: 'Black with grey is effortlessly modern.',
    tip: 'Minimal effort, maximum impact.'
  },
  Formal: {
    pants: { name:'Black Pants', color:'#000000', colorName:'Black' },
    shoes: { name:'Heels', color:'#000000', colorName:'Black' },
    accent: { name:'Clutch', color:'#C0C0C0', colorName:'Silver' },
    why: 'All-black is timeless and powerful.',
    tip: 'Play with textures to avoid flatness.'
  },
  Streetwear: {
    pants: { name:'Cargo Pants', color:'#1A1A1A', colorName:'Washed Black' },
    shoes: { name:'Chunky Sneakers', color:'#F5F5F5', colorName:'Off White' },
    accent: { name:'Crossbody Bag', color:'#000', colorName:'Black' },
    why: 'Black streetwear is bold and edgy.',
    tip: 'Add oversized layers.'
  },
  Minimal: {
    pants: { name:'Slim Pants', color:'#2C2C2C', colorName:'Dark Grey' },
    shoes: { name:'Loafers', color:'#FFFFFF', colorName:'White' },
    accent: { name:'Watch', color:'#E5E4E2', colorName:'Silver' },
    why: 'Black + white minimalism never fails.',
    tip: 'Keep silhouettes clean.'
  },
  Luxury: {
    pants: { name:'Tailored Wool Pants', color:'#1C1C1C', colorName:'Onyx' },
    shoes: { name:'Heels', color:'#D4AF37', colorName:'Gold' },
    accent: { name:'Luxury Bag', color:'#000', colorName:'Black Leather' },
    why: 'Black with gold accents is peak luxury.',
    tip: 'Less color, more texture.'
  }
}};

function getRec() {
  const key = String(selectedColor);
  const db = RECS[key];
  if (db) {
    return db[selectedMood] || db['default'] || db[Object.keys(db)[0]];
  }
  return generateRec(selectedColor);
}

function generateRec(idx) {
  // Determine light/dark from the button's --color CSS variable value
  const btn = document.querySelectorAll('.item-color')[idx];
  const colorVal = btn ? getComputedStyle(btn).getPropertyValue('--color').trim() : '#888';
  const label = btn ? (btn.getAttribute('aria-color') || 'This color') : 'This color';

  // Parse hex to decide light vs dark
  let isDark = true;
  const hex = colorVal.replace('#','');
  if (hex.length === 6) {
    const r = parseInt(hex.slice(0,2),16), g = parseInt(hex.slice(2,4),16), b = parseInt(hex.slice(4,6),16);
    isDark = (r + g + b) < 382;
  } else if (colorVal === 'white' || colorVal === '#ffffff' || colorVal === '#F5F5DC') {
    isDark = false;
  }

  if (isDark) {
    return {
      pants: { name:'Slim Trousers', color:'#808080', colorName:'Neutral Grey' },
      shoes: { name:'White Leather Sneakers', color:'#F5F5F5', colorName:'Optic White' },
      accent: { name:'Steel Watch', color:'#C0C0C0', colorName:'Brushed Steel' },
      why: `${label} works as a strong base — grey trousers balance the look while white sneakers add a clean contrast.`,
      tip: `${label} is a versatile dark tone. Pair with neutrals or contrasting whites for maximum impact.`
    };
  } else {
    return {
      pants: { name:'Dark Slim Jeans', color:'#1a1a2e', colorName:'Deep Indigo' },
      shoes: { name:'Cognac Loafers', color:'#8B4513', colorName:'Cognac Brown' },
      accent: { name:'Gold Watch', color:'#DAA520', colorName:'Brushed Gold' },
      why: `${label} as a base pairs naturally with dark denim — the contrast creates a sharp, styled look.`,
      tip: `Light shirt colors lift your look. Anchor them with darker bottoms to maintain visual weight.`
    };
  }
}

// State
let selectedColor = 15; // default: Jet Black
let selectedMood = 'Minimal';
let selectedOccasion = 'Casual';

function getRec() {
  const key = String(selectedColor);
  const db = RECS[key];
  if (db) {
    return db[selectedMood] || db['default'] || db[Object.keys(db)[0]];
  }
  return generateRec(selectedColor);
}

function updateRecommendations() {
  selectedOccasion = document.getElementById('occasionSelect').value;
  const rec = getRec();
  const selectedBtn = document.querySelector('.item-color.selected');
  const colorLabel = selectedBtn ? (selectedBtn.getAttribute('aria-color') || 'Selected Color') : 'Jet Black';

  document.getElementById('baseLabel').textContent = colorLabel;
  document.getElementById('whyText').textContent = rec.why;
  document.getElementById('tipText').textContent = rec.tip;

  const grid = document.getElementById('cardsGrid');
  grid.innerHTML = buildCards(rec);
  grid.classList.remove('animate-in');
  void grid.offsetWidth;
  grid.classList.add('animate-in');

  // Reset save button
  const saveBtn = document.getElementById('saveBtn');
  saveBtn.classList.remove('saved');
  saveBtn.innerHTML = 'Save Look to Wardrobe <span class="material-symbols-outlined">bookmark</span>';
}

function buildCards(rec) {
  const cards = [
    { label:'Pants', icon:'checkroom', ...rec.pants },
    { label:'Footwear', icon:'steps', ...rec.shoes },
    { label:'Accent', icon:'watch', ...rec.accent },
  ];

  return cards.map(c => {
    const isLight = parseInt(c.color.slice(1,3),16) + parseInt(c.color.slice(3,5),16) + parseInt(c.color.slice(5,7),16) > 600;
    const border = isLight ? 'border: 1px solid rgba(255,255,255,0.08);' : '';
    return `
    <div class="outfit-card">
      <div class="card-top">
        <span class="card-label">${c.label}</span>
        <span class="card-icon">${c.icon}</span>
      </div>
      <div class="color-block" style="background:${c.color};${border}">
        <span class="color-label-ghost">${c.colorName.split(' ').slice(-1)[0]}</span>
      </div>
      <h4 class="card-name">${c.name}</h4>
      <div class="card-color-row">
        <div class="color-dot" style="background:${c.color}; ${isLight ? 'border:1px solid rgba(0,0,0,0.12)' : ''}"></div>
        <span class="color-name">${c.colorName}</span>
      </div>
    </div>`;
  }).join('');
}

// Wire up static color swatches
function buildColorGrid() {
  document.querySelectorAll('.item-color').forEach((btn, i) => {
    btn.onclick = () => {
      document.querySelectorAll('.item-color').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedColor = i; // ← this must be the exact DOM index
      updateRecommendations();
    };
  });
}

// Build mood buttons
function buildMoodRow() {
  const row = document.getElementById('moodRow');
  MOODS.forEach(m => {
    const btn = document.createElement('button');
    btn.className = 'mood-btn' + (m === selectedMood ? ' selected' : '');
    btn.textContent = m;
    btn.onclick = () => {
      document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedMood = m;
      updateRecommendations();
    };
    row.appendChild(btn);
  });
}

function resetAll() {
  selectedColor = 15;
  selectedMood = 'Minimal';
  selectedOccasion = 'Casual';

  document.querySelectorAll('.item-color').forEach((b, i) => {
    b.classList.toggle('selected', i === 15);
  });
  document.querySelectorAll('.mood-btn').forEach(b => {
    b.classList.toggle('selected', b.textContent === 'Minimal');
  });
  document.getElementById('occasionSelect').value = 'Casual';
  updateRecommendations();
}

function saveLook() {
  const btn = document.getElementById('saveBtn');
  btn.classList.add('saved');
  btn.innerHTML = 'Saved to Wardrobe ✓ <span class="material-symbols-outlined">bookmark</span>';
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

// Init
buildColorGrid();
buildMoodRow();
updateRecommendations();


// Preview outfit
// ============================================================
//  REPLACE your existing openPreview() and closePreview()
//  functions in color.js with this code
// ============================================================

const COLOR_MOOD_IMAGES = {
  '0': { // White
    'Minimal':    'https://i.pinimg.com/736x/a2/f3/fb/a2f3fba50cf698bc7f31ad07109c90df.jpg',
    'Streetwear': 'color/c2.png',
    'Formal':     'color/c1.png',
    'Luxury':     'https://i.pinimg.com/1200x/ce/33/fe/ce33fe6186d7c6dc9b387b67536e80de.jpg',
  },
  '1': { // Beige/Cream
    'Minimal':    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80',
    'Streetwear': 'https://i.pinimg.com/736x/09/30/ff/0930ff118be7806328fc7d0fea8f23bb.jpg',
    'Formal':     'https://i.pinimg.com/736x/26/f0/7e/26f07efb06bfae296e9ca38caaa86dc1.jpg',
    'Luxury':     'color/c3.png',
  },
  '2': { // Dusty Pink
    'Minimal':    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80',
    'Streetwear': 'https://i.pinimg.com/1200x/54/74/a3/5474a3e6dffde03ba303e51c3734fd0d.jpg',
    'Formal':     'https://i.pinimg.com/736x/ae/9c/14/ae9c14b15bf23805affc3efb6176abf2.jpg',
    'Luxury':     'color/c4.png',
  },
  '3': { // Baby Blue
    'Minimal':    'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&q=80',
    'Streetwear': 'color/c5.png',
    'Formal':     'https://i.pinimg.com/1200x/17/2c/0e/172c0e6801962f865ff5910a81bbba23.jpg',
    'Luxury':     'https://i.pinimg.com/736x/5c/97/c6/5c97c60fbb34c275522b333bbe921ab3.jpg',
  },
  '4': { // Sage
    'Minimal':    'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=400&q=80',
    'Streetwear': 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=400&q=80',
    'Formal':     'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=400&q=80',
    'Luxury':     'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80',
  },
  '5': { // Camel/Tan
    'Minimal':    'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80',
    'Streetwear': 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=400&q=80',
    'Formal':     'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    'Luxury':     'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  '6': { // Olive Green
    'Minimal':    'https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=400&q=80',
    'Streetwear': 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&q=80',
    'Formal':     'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=400&q=80',
    'Luxury':     'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&q=80',
  },
  '7': { // Rust
    'Minimal':    'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=400&q=80',
    'Streetwear': 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&q=80',
    'Formal':     'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    'Luxury':     'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
  },
  '8': { // Saddle Brown
    'Minimal':    'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=400&q=80',
    'Streetwear': 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&q=80',
    'Formal':     'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=80',
    'Luxury':     'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
  },
  '9': { // Dark Teal
    'Minimal':    'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&q=80',
    'Streetwear': 'color/c6.png',
    'Formal':     'https://i.pinimg.com/736x/be/37/f6/be37f6548b1747124c7c1fd452e79abd.jpg',
    'Luxury':     'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&q=80',
  },
  '10': { // Slate Blue
    'Minimal':    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80',
    'Streetwear': 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&q=80',
    'Formal':     'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=80',
    'Luxury':     'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
  },
  '11': { // Dark Denim
    'Minimal':    'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&q=80',
    'Streetwear': 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&q=80',
    'Formal':     'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    'Luxury':     'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&q=80',
  },
  '12': { // Charcoal Grey
    'Minimal':    'https://images.unsplash.com/photo-1550246140-29f40b909e5a?w=400&q=80',
    'Streetwear': 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&q=80',
    'Formal':     'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=80',
    'Luxury':     'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
  },
  '13': { // Midnight Navy
    'Minimal':    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=80',
    'Streetwear': 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80',
    'Formal':     'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    'Luxury':     'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&q=80',
  },
  '14': { // Deep Maroon
    'Minimal':    'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&q=80',
    'Streetwear': 'color/c8.png',
    'Formal':     'https://i.pinimg.com/736x/32/39/88/32398835a608178e8acffdc3a63cc56c.jpg',
    'Luxury':     'https://i.pinimg.com/736x/d1/0c/6d/d10c6dcf320021245144f9f1c2f26dac.jpg',
  },
  '15': { // Jet Black
    'Minimal':    'https://images.unsplash.com/photo-1500840216050-6ffa99d75160?w=400&q=80',
    'Streetwear': 'https://i.pinimg.com/736x/83/96/4b/83964b56ea89f59f4de2ee0fcc04cde7.jpg',
    'Formal':     'https://i.pinimg.com/1200x/ec/b4/14/ecb414d75b672fbadf711f3287393785.jpg',
    'Luxury':     'color/c7.png',
  },
};

function openPreview() {
  const rec = getRec();

  // --- Get current shirt color & label from selected swatch ---
  const selectedBtn = document.querySelector('.item-color.selected');
  const shirtColor  = selectedBtn
    ? getComputedStyle(selectedBtn).getPropertyValue('--color').trim()
    : '#0A0A0A';
  const colorLabel  = selectedBtn
    ? (selectedBtn.getAttribute('aria-color') || 'Selected Color')
    : 'Jet Black';

  // --- Populate title ---
  document.getElementById('previewTitle').textContent = colorLabel + ' — ' + selectedMood;

  // --- Pick the right image based on color index + mood ---
  const colorKey = String(selectedColor);
  const imgUrl   = COLOR_MOOD_IMAGES[colorKey]?.[selectedMood]
                || COLOR_MOOD_IMAGES[colorKey]?.['Minimal']
                || 'https://images.unsplash.com/photo-1500840216050-6ffa99d75160?w=400&q=80';

  // Fade-swap the image
  const imgEl = document.querySelector('#previewModal img');
  if (imgEl) {
    imgEl.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
    imgEl.style.opacity    = '0';
    imgEl.style.transform  = 'scale(1.04)';
    imgEl.src = imgUrl;
    imgEl.onload = () => {
      imgEl.style.opacity   = '1';
      imgEl.style.transform = 'scale(1)';
    };
    // Fallback if image already cached (onload won't fire again)
    if (imgEl.complete) {
      imgEl.style.opacity   = '1';
      imgEl.style.transform = 'scale(1)';
    }
  }

  // --- Populate colour swatches ---
  document.getElementById('chipShirt').style.background     = shirtColor;
  document.getElementById('chipShirtName').textContent      = colorLabel;

  document.getElementById('chipPants').style.background     = rec.pants.color;
  document.getElementById('chipPantsName').textContent      = rec.pants.colorName;

  document.getElementById('chipShoes').style.background     = rec.shoes.color;
  document.getElementById('chipShoesName').textContent      = rec.shoes.colorName;

  document.getElementById('chipAccent').style.background    = rec.accent.color;
  document.getElementById('chipAccentName').textContent     = rec.accent.colorName;

  // --- Why text ---
  document.getElementById('previewWhy').textContent = rec.why;

  // --- Show modal ---
  const modal = document.getElementById('previewModal');
  modal.style.display  = 'flex';
  modal.style.opacity  = '0';
  modal.style.transition = 'opacity 0.3s ease';
  // Trigger fade-in on next frame
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      modal.style.opacity = '1';
    });
  });

  // Close on backdrop click
  modal.onclick = (e) => {
    if (e.target === modal) closePreview();
  };
}

function closePreview() {
  const modal = document.getElementById('previewModal');
  modal.style.opacity = '0';
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300);
}




//OUTFIT PAGE
document.addEventListener('DOMContentLoaded', () => {
    // 1. Handle Chip Selection (Weather & Occasion)
    document.querySelectorAll('.chips').forEach(container => {
        container.addEventListener('click', (e) => {
            if (e.target.classList.contains('chip')) {
                container.querySelectorAll('.chip').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
            }
        });
    });

    // 2. Generate Button Logic
    const generateBtn = document.getElementById('generateBtn');
    
    if (generateBtn) {
        generateBtn.addEventListener('click', () => {
            // Get active values
            const weatherChip = document.querySelector('#weather-chips .active');
            const occasionChip = document.querySelector('#occasion-chips .active');
            
            const weather = weatherChip ? weatherChip.innerText : 'Summer';
            const occasion = occasionChip ? occasionChip.innerText : 'College';

            // Select UI Elements
            const title = document.getElementById('resultTitle');
            const placeholder = document.getElementById('placeholderText');
            const previewImg = document.getElementById('previewImg');
            const itemList = document.getElementById('itemList');

            // Update UI Content
            if (title) title.innerText = `${weather} ${occasion} Look`.toUpperCase();
            
            if (placeholder) placeholder.style.display = 'none';
            
            if (previewImg) {
                previewImg.style.display = 'block';
                // Using a high-quality fashion placeholder
                previewImg.src = `https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80`;
            }

            if (itemList) {
                itemList.innerHTML = `
                    <li>Essential ${weather} Piece</li>
                    <li>Tailored ${occasion} Trousers</li>
                    <li>StyleSync Signature Accessories</li>
                `;
            }
            
            console.log("Outfit Generated:", weather, occasion);
        });
    }
});

// Functions outside DOMContentLoaded so they are globally accessible to onclick attributes
function saveToLocker() { alert('Saved to your StyleSync Locker!'); }
function shareLook() { alert('Generating shareable link...'); }





/* ── OUTFIT PAGE ───────────────────────────────────────────────── */

/* ── OUTFIT DATA ───────────────────────────────────────────────── */
const OUTFITS = {
  summer:[
    {
      title:"SUMMER COLLEGE\nMINIMALIST",
      image:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&q=85",
      base:"Linen Button-down (Cream)",bottom:"Relaxed Cotton Chinos (Charcoal)",
      footwear:"Minimalist Canvas Sneakers",
      palette:["#F5F0E6","#4a4a4a","#e8e0d0"],badge:"Summer Minimalist",
      tip:"<strong>Pro tip:</strong> Roll the sleeves to the mid-forearm to emphasise a relaxed college vibe without losing professional edge."
    },
    {
      title:"SUMMER COOL\nESSENTIALS",
      image:"https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=700&q=85",
      base:"Classic White Tee (Ribbed)",bottom:"High-Waist Trousers (Beige Linen)",
      footwear:"Leather Slide Sandals (Tan)",
      palette:["#ffffff","#d4c5a9","#c49a72"],badge:"Summer Essentials",
      tip:"<strong>Styling note:</strong> Tuck the tee half-way for a casual French-girl silhouette. Tan slides ground the warm beige palette beautifully."
    },
    {
      title:"SUMMER COASTAL\nCHIC",
      image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&q=85",
      base:"Navy Silk Blouse (Cropped)",bottom:"Wide-Leg Pleated Shorts (Ivory)",
      footwear:"Espadrille Wedges (Navy)",
      palette:["#1b3a5c","#f5f2e8","#d4af37"],badge:"Coastal Chic",
      tip:"<strong>Colour tip:</strong> The navy-ivory contrast is timeless. Add a gold chain necklace to tie accessories with the wedge hardware."
    }
  ],
  winter:[
    {
      title:"WINTER TAILORED\nLUXURY",
      image:"https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=700&q=85",
      base:"Cashmere Knit (Camel)",bottom:"Tailored Wool Pants (Onyx Black)",
      footwear:"Ankle Leather Boots (Espresso Brown)",
      palette:["#c19a6b","#1a1a1a","#5c3d1e"],badge:"Winter Luxury",
      tip:"<strong>Texture tip:</strong> Cashmere + wool is a classic luxe pairing. Add a charcoal overcoat to complete the winter power-dressing look."
    },
    {
      title:"WINTER URBAN\nLAYER",
      image:"https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=700&q=85",
      base:"Ribbed Turtleneck (Ivory)",bottom:"Wide-Leg Corduroy Trousers (Forest Green)",
      footwear:"Chelsea Boots (Black Leather)",
      palette:["#f5f0e6","#3d5a3e","#1a1a1a"],badge:"Urban Layer",
      tip:"<strong>Layering tip:</strong> A camel trench over an ivory turtleneck is the quintessential winter formula — warm, polished, effortlessly chic."
    }
  ],
  monsoon:[
    {
      title:"MONSOON URBAN\nREADY",
      image:"https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&q=85",
      base:"Waterproof Trench Jacket (Taupe)",bottom:"Slim-Fit Dark Jeans (Indigo)",
      footwear:"Rubber Chelsea Boots (Olive)",
      palette:["#b8a898","#2c3e6b","#6b6b40"],badge:"Monsoon Ready",
      tip:"<strong>Rainy day tip:</strong> Opt for darker bottoms — rain splashes show far less. A taupe trench is both waterproof AND eternally stylish."
    }
  ],
  spring:[
    {
      title:"SPRING FRESH\nFLORAL",
      image:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=700&q=85",
      base:"Pastel Linen Shirt (Sage Green)",bottom:"Wide-Leg Trousers (Cream)",
      footwear:"Strappy Sandals (Nude)",
      palette:["#8fad88","#f5f2e8","#e8c9a0"],badge:"Spring Fresh",
      tip:"<strong>Spring palette:</strong> Sage + cream is the freshest spring duo. A minimal gold pendant finishes the look with understated elegance."
    }
  ]
};

/* ── STATE ─────────────────────────────────────── */
let selWeather='summer', selOccasion='college', generating=false;
const lastIdx={};

/* ── CHIPS ─────────────────────────────────────── */
document.querySelectorAll('.chip').forEach(c=>{
  c.addEventListener('click',()=>{
    const g=c.dataset.group;
    document.querySelectorAll(`.chip[data-group="${g}"]`).forEach(x=>x.classList.remove('active'));
    c.classList.add('active');
    if(g==='weather') selWeather=c.dataset.value;
    if(g==='occasion') selOccasion=c.dataset.value;
  });
});

/* ── RANDOM (no repeat) ────────────────────────── */
function pickRandom(arr,key){
  if(arr.length===1) return {idx:0,outfit:arr[0]};
  let i;
  do{i=Math.floor(Math.random()*arr.length);}while(i===lastIdx[key]);
  lastIdx[key]=i;
  return{idx:i,outfit:arr[i]};
}

/* ── LOADING BAR ───────────────────────────────── */
function runBar(cb){
  const wrap=document.getElementById('loadingWrap');
  const fill=document.getElementById('lbFill');
  const lbl=document.getElementById('lbLabel');
  wrap.classList.add('on');
  fill.style.width='0%';
  const msgs=[[20,'Scanning your style profile…'],[55,'Matching textures & palettes…'],[82,'Finalising the look…'],[95,'Almost there…']];
  let pct=0;
  const iv=setInterval(()=>{
    pct+=Math.random()*5+2;
    if(pct>98)pct=98;
    fill.style.width=pct+'%';
    msgs.forEach(([t,m])=>{if(pct>=t&&pct<t+12&&lbl.textContent!==m)lbl.textContent=m;});
  },60);
  setTimeout(()=>{
    clearInterval(iv);
    fill.style.width='100%';
    lbl.textContent='Your look is ready! ✦';
    setTimeout(()=>{wrap.classList.remove('on');fill.style.width='0%';cb();},400);
  },2000);
}

/* ── RENDER ────────────────────────────────────── */
function render(o,idx,total,weather,occasion){
  document.getElementById('outfitImg').src=o.image;
  document.getElementById('imgBadge').textContent=o.badge;
  document.getElementById('mTag1').textContent=weather[0].toUpperCase()+weather.slice(1);
  document.getElementById('mTag2').textContent=occasion[0].toUpperCase()+occasion.slice(1);
  document.getElementById('mNum').textContent='Look #'+(idx+1)+' of '+total;
  const parts=o.title.split('\n');
  document.getElementById('outfitTitle').innerHTML=parts[0]+(parts[1]?'<br><em>'+parts[1]+'</em>':'');
  document.getElementById('oBase').textContent=o.base;
  document.getElementById('oBottom').textContent=o.bottom;
  document.getElementById('oFootwear').textContent=o.footwear;
  o.palette.forEach((c,i)=>{const d=document.getElementById('dot'+(i+1));if(d)d.style.background=c;});
  document.getElementById('oTip').innerHTML=o.tip;
  // side tip
  const tmp=document.createElement('div');tmp.innerHTML=o.tip;
  document.getElementById('styleTipText').textContent=tmp.textContent;
  document.getElementById('styleTip').classList.add('on');
  // card
  document.getElementById('emptyState').style.display='none';
  const card=document.getElementById('resultCard');
  card.classList.remove('on');card.style.display='none';
  requestAnimationFrame(()=>{
    card.style.display='flex';
    requestAnimationFrame(()=>card.classList.add('on'));
  });
}

/* ── GENERATE ──────────────────────────────────── */
function generateOutfit(){
  if(generating)return;
  generating=true;
  const btn=document.getElementById('genBtn');
  const sp1=document.getElementById('sp1');
  const sp2=document.getElementById('sp2');
  btn.disabled=true;
  document.getElementById('btnTxt').textContent='Generating…';
  sp1.classList.add('spinning');sp2.style.display='none';
  const arr=OUTFITS[selWeather]||OUTFITS['summer'];
  const {idx,outfit}=pickRandom(arr,selWeather);
  runBar(()=>{
    render(outfit,idx,arr.length,selWeather,selOccasion);
    btn.disabled=false;
    document.getElementById('btnTxt').textContent='Generate Outfit';
    sp1.classList.remove('spinning');sp2.style.display='inline';
    generating=false;
  });
}


	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
