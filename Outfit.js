const outfitDatabase = {
    summer: {
        college: {
            title: "Breezy Campus Classic",
            img: "https://i.pinimg.com/736x/fb/db/f6/fbdbf6d2a825190c08d4bef684ab9457.jpg",
            base: "Polo T-shirt",
            bottom: "Dark Wash Relaxed Jeans",
            footwear: "White Sneakers",
            colors: ["#FFFFFF", "#55617a", "#EFEFEF"],
            tip: "Keep the shirt half-tucked for a relaxed but put-together look."
        },
        party: {
            title: "Sunset Soirée",
            img: "https://i.pinimg.com/1200x/d2/3c/35/d23c35f74842cdb7e1175c33b75b8fa9.jpg",
            base: "Silk Camisole",
            bottom: "Pleated Midi Skirt",
            footwear: "Strappy Block Heels",
            colors: ["#D4AF37", "#000000", "#FFF8DC"],
            tip: "Add statement earrings to elevate this minimalist combination."
        },
        formal: {
            title: "Summer Executive",
            img: "o2.png",
            base: "Lightweight Cotton Blazer",
            bottom: "Tailored Trousers",
            footwear: "Leather Loafers",
            colors: ["#F5F5DC", "#FFFFFF", "#8B4513"],
            tip: "Opt for breathable fabrics like cotton or light linen blends."
        },
        casual: {
            title: "Weekend Wanderer",
            img: "https://i.pinimg.com/736x/fe/ed/16/feed16872953ac00f627cf9edf82c75d.jpg",
            base: "Ribbed Basic Tank",
            bottom: "Denim Cut-off Shorts",
            footwear: "Slide Sandals",
            colors: ["#FFFFFF", "#0000FF", "#A0522D"],
            tip: "Layer delicate gold necklaces to add visual interest."
        },
        date: {
            title: "Golden Hour Glow",
            img: "o1.png", 
            base: "Satin Slip Dress",
            bottom: "None",
            footwear: "Mules",
            colors: ["#800020", "#FFD700", "#000000"],
            tip: "A sheer layer over the shoulders works perfectly."
        }
    },
    winter: {
        college: {
            title: "Library Layers",
            img: "https://i.pinimg.com/736x/3c/53/24/3c5324fd195c3736a566eea8aad87f72.jpg",
            base: "Chunky Turtleneck Knit",
            bottom: "Corduroy Trousers",
            footwear: "Dr. Martens",
            colors: ["#F5DEB3", "#800000", "#000000"],
            tip: "A patterned scarf adds warmth and personality."
        },
        party: {
            title: "Midnight Frost",
            img: "https://i.pinimg.com/736x/6e/2f/88/6e2f8875b9646a112e51c69e1e9d05d2.jpg",
            base: "Velvet Wrap Top",
            bottom: "Leather Leggings",
            footwear: "Pointed Ankle Boots",
            colors: ["#483D8B", "#000000", "#C0C0C0"],
            tip: "Textural contrast between velvet and leather is key here."
        },
        formal: {
            title: "Winter Power Suit",
            img: "https://i.pinimg.com/736x/83/63/03/83630357f4fc7c2ea57b997be2271e48.jpg",
            base: "Wool-Blend Overcoat",
            bottom: "Wide-Leg Trousers",
            footwear: "Oxford Shoes",
            colors: ["#A0522D", "#FFF8DC", "#2F4F4F"],
            tip: "A monochrome base beneath the coat creates a sleek silhouette."
        },
        casual: {
            title: "Cozy Coffee Run",
            img: "https://i.pinimg.com/736x/ea/27/0d/ea270d8aec302aec2f0bcf26cfd442df.jpg",
            base: "Oversized Hoodie",
            bottom: "Fleece-lined Joggers",
            footwear: "Chunky Sneakers",
            colors: ["#D3D3D3", "#808080", "#FFFFFF"],
            tip: "A long wool coat over sweatpants instantly makes the outfit intentional."
        },
        date: {
            title: "Fireside Romance",
            img: "o3.png",
            base: "Fitted Cashmere Sweater",
            bottom: "Satin Midi Skirt",
            footwear: "Knee-High Boots",
            colors: ["#FFFAFA", "#DB7093", "#8B4513"],
            tip: "Tights matching the boot color elongate your legs."
        }
    },
    monsoon: {
        college: {
            title: "Rainy Day Ready",
            img: "https://i.pinimg.com/736x/72/16/f5/7216f5fb3c676d9073c927d505e5ce94.jpg",
            base: "Waterproof Windbreaker",
            bottom: "Cropped Dark Jeans",
            footwear: "Water-Resistant Sneakers",
            colors: ["#FF4500", "#00008B", "#FFFFFF"],
            tip: "Cropped pants prevent hems from getting soaked in puddles."
        },
        party: {
            title: "Neon Nights",
            img: "https://i.pinimg.com/736x/99/e0/1d/99e01df1073516985a8b887dff38dd19.jpg",
            base: "Sheer Organza Blouse",
            bottom: "Faux Leather Mini",
            footwear: "Combat Boots",
            colors: ["#000000", "#FF1493", "#808080"],
            tip: "Boots meant for weather can look extremely edgy for parties."
        },
        formal: {
            title: "Structured Storm",
            img: "https://i.pinimg.com/736x/49/e7/b5/49e7b559ba5522fe6a8a0d89fa8890d6.jpg",
            base: "Classic Trench Coat",
            bottom: "Tailored Culottes",
            footwear: "Patent Leather Loafers",
            colors: ["#D2B48C", "#000000", "#F5F5DC"],
            tip: "A classic trench coat elevates any underneath outfit."
        },
        casual: {
            title: "Overcast Comfort",
            img: "o6.png",
            base: "Lightweight Knit Pullover",
            bottom: "Nylon Cargo Pants",
            footwear: "Chelsea Rain Boots",
            colors: ["#778899", "#556B2F", "#000000"],
            tip: "Synthetics dry faster than natural fibers like heavy cotton."
        },
        date: {
            title: "Moody Elegance",
            img: "https://i.pinimg.com/736x/08/f9/11/08f911257ca46f9c4bb24f46d49f63b7.jpg",
            base: "Blazer Dress",
            bottom: "Matching Coat",
            footwear: "Block Heel Booties",
            colors: ["#4B0082", "#000000", "#FFD700"],
            tip: "Carry a stylish clear bubble umbrella to complement the look."
        }
    },
    spring: {
        college: {
            title: "Blossom Bound",
            img: "https://i.pinimg.com/736x/72/c2/ee/72c2ee4d07913062ca43cbccbcb94d57.jpg", 
            base: "Light Cardigan",
            bottom: "Wide-leg White Denim",
            footwear: "Canvas Sneakers",
            colors: ["#98FB98", "#FFFFFF", "#FFB6C1"],
            tip: "Pastels and crisp whites capture the essence of spring perfectly."
        },
        party: {
            title: "Garden Gala",
            img: "https://i.pinimg.com/736x/83/51/46/835146224a15206e3cf5dac5bd49c356.jpg",
            base: "Floral Midi Dress",
            bottom: "-",
            footwear: "Strappy Heels",
            colors: ["#FF69B4", "#32CD32", "#FFF0F5"],
            tip: "A light denim jacket draped over shoulders is great for cooler evenings."
        },
        formal: {
            title: "Spring Conference",
            img: "o4.png",
            base: "Pastel Power Blazer",
            bottom: "Matching Trousers",
            footwear: "Nude Pumps",
            colors: ["#E6E6FA", "#FFFFFF", "#FFE4E1"],
            tip: "Monochrome pastel suiting is a bold yet soft seasonal statement."
        },
        casual: {
            title: "Picnic Prep",
            img: "https://i.pinimg.com/736x/92/82/89/9282893f5193e7b39115adb26ea2dff2.jpg",
            base: "Striped Cotton Tee",
            bottom: "A-Line Skirt",
            footwear: "White Sneakers",
            colors: ["#000080", "#FFFFFF", "#FF0000"],
            tip: "A classic breton stripe top pairs elegantly with any spring bottom."
        },
        date: {
            title: "Cherry Blossom Chic",
            img: "color/o5.png",
            base: "Puff Sleeve Top",
            bottom: "High-Waisted Jeans",
            footwear: "Kitten Heels",
            colors: ["#FFC0CB", "#87CEEB", "#FFFFFF"],
            tip: "A square neckline and statement sleeves highlight your collarbones."
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Tab functionality for seasonal fashion guide
    const tabBtns = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.panel');

    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                panels.forEach(p => p.classList.remove('active'));

                btn.classList.add('active');
                const tabId = btn.getAttribute('data-tab');
                const targetPanel = document.getElementById(`panel-${tabId}`);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            });
        });
    }

    // 2. Chip selection logic for weather and occasion
    const chips = document.querySelectorAll('.chip');
    if (chips.length > 0) {
        chips.forEach(chip => {
            chip.addEventListener('click', () => {
                const group = chip.getAttribute('data-group');
                document.querySelectorAll(`.chip[data-group="${group}"]`).forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
            });
        });
    }
});

function generateOutfit() {
    const activeWeatherChip = document.querySelector('.chip[data-group="weather"].active');
    const weather = activeWeatherChip ? activeWeatherChip.getAttribute('data-value') : 'summer';
    
    const activeOccasionChip = document.querySelector('.chip[data-group="occasion"].active');
    const occasion = activeOccasionChip ? activeOccasionChip.getAttribute('data-value') : 'college';

    const outfit = outfitDatabase[weather]?.[occasion];

    const emptyState = document.getElementById('emptyState');
    const resultCard = document.getElementById('resultCard');
    const loadingWrap = document.getElementById('loadingWrap');
    const styleTip = document.getElementById('styleTip');
    const styleTipText = document.getElementById('styleTipText');

    if (!outfit) {
        alert("Outfit combination not found!");
        return;
    }

    // Reset view
    if (emptyState) emptyState.style.display = 'none';
    if (resultCard) resultCard.classList.remove('on');
    if (styleTip) styleTip.classList.remove('on');
    
    // Show loading
    if (loadingWrap) loadingWrap.classList.add('on');
    
    // Animate loading bar (simple timer)
    const lbFill = document.getElementById('lbFill');
    if (lbFill) {
        lbFill.style.transition = 'none';
        lbFill.style.width = '0%';
        void lbFill.offsetWidth; // Force reflow
        lbFill.style.transition = 'width 1s ease-in-out';
        lbFill.style.width = '100%';
    }
    
    setTimeout(() => {
        // Hide loading
        if (loadingWrap) loadingWrap.classList.remove('on');
        
        // Populate and show result
        document.getElementById('outfitImg').src = outfit.img;
        
        document.getElementById('mTag1').textContent = weather.charAt(0).toUpperCase() + weather.slice(1);
        document.getElementById('mTag2').textContent = occasion.charAt(0).toUpperCase() + occasion.slice(1);
        
        document.getElementById('outfitTitle').textContent = outfit.title;
        
        document.getElementById('oBase').textContent = outfit.base;
        document.getElementById('oBottom').textContent = outfit.bottom || "-";
        document.getElementById('oFootwear').textContent = outfit.footwear;
        
        document.getElementById('dot1').style.backgroundColor = outfit.colors[0];
        document.getElementById('dot2').style.backgroundColor = outfit.colors[1];
        document.getElementById('dot3').style.backgroundColor = outfit.colors[2];
        
        document.getElementById('oTip').textContent = outfit.tip;
        if (styleTipText) styleTipText.textContent = outfit.tip;
        
        // Show result elements
        if (resultCard) resultCard.classList.add('on');
        if (styleTip) styleTip.classList.add('on');
        
    }, 1000);
}

function sendPrompt(promptText) {
    alert("AI Chat will open with prompt: " + promptText);
}




//Login 
function onLoginSuccess(userData) {
    const navContainer = document.getElementById('nav-container');
    const loginBtn = document.getElementById('open-login');

    // 1. Remove the login button
    loginBtn.remove();

    // 2. Inject the profile HTML
    const profileHTML = `
        <div class="flex items-center gap-3">
            <span class="text-[10px] font-bold dark:text-white">${userData.name}</span>
            <div class="size-8 rounded-full bg-accent"></div>
        </div>
    `;
    navContainer.insertAdjacentHTML('beforeend', profileHTML);
    
    // 3. Close the modal if you used the iframe approach
    closeLogin(); 
}


