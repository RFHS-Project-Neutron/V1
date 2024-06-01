// Create a style element for CSS
const style = document.createElement('style');
style.textContent = `
body {
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJw6rgmUbyLHmol_iwSpbp81zVZNDLkZJtiJDlibqNA&s");
    font-family: 'Lexend Bold', sans-serif;
    color: #f5f5f5;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}

.game {
    text-align: center;
    padding: 1%;
    border-radius: 15px;
    margin: 10px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    flex: 0 0 calc(12.5% - 12px);
    text-decoration: none;
    color: #f5f5f5;
    display: block;
    transition: transform 0.3s ease;
}

.game img {
    border-radius: 12px;
    max-width: 100%;
    height: auto;
}

.game h3 {
    font-size: 14px;
    margin-top: 10px;
    color: black;
}

.game:hover {
    transform: scale(1.1);
}

.game:first-child {
    margin-top: 6%;
}

.game:nth-child(-n+11) {
    margin-top: 6%;
}

.game {
    position: relative;
}

.orange-box {
    position: absolute;
    top: 0;
    right: 0;
    width: auto;
    height: 7%;
    background-color: orange;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
}

.orange-box img {
    max-width: 100%;
    max-height: 100%;
}

.orange-box-text {
    color: white;
    font-size: 12px;
    margin-left: 5px;
    font-family: 'Lexend Bold', sans-serif;
}
`;

// Append the style to the head
document.head.appendChild(style);

// Set the title of the document
document.title = "Game Library";

// Add the body content
document.body.innerHTML = `
<a href="#" class="game" id="1v1lol">
    <img src="https://img.utdstc.com/icon/983/22a/98322a3b2be892eed31589906ffd949b68bcccc9a21ba562987965b5ec6bc6de:200">
    <h3>1v1.LOL</h3>
</a>

<a href="/gs/2048" class="game">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2048_logo.svg/1200px-2048_logo.svg.png">
<h3>2048</h3>
</a>

<a href="/gs/agariolite" class="game">
    <div class="orange-box">
        <img src="https://github.com/RFHS-Project-Neutron/V1/blob/main/assets/images/trending-icon.png?raw=true" alt="Trending Icon">
        <span class="orange-box-text">Trending</span>
    </div>
<img src="https://downloadr2.apkmirror.com/wp-content/uploads/2021/07/18/6102a3138c854.png">
<h3>Agar.io Lite</h3>
</a>
`;

// Add the analytics and ads scripts
const scripts = [
    {
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9494126940648215",
        async: true,
        crossorigin: "anonymous"
    },
    {
        src: "https://www.googletagmanager.com/gtag/js?id=G-B8K2DH2XEM",
        async: true,
        onLoad: function() {
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-B8K2DH2XEM');
        }
    },
    {
        src: "https://www.clarity.ms/tag/jzlts1tatm",
        async: true
    },
    {
        src: "https://us.umami.is/script.js",
        defer: true,
        dataset: { websiteId: "be5f8945-a14d-47b5-92b9-784879a99bab" }
    },
    {
        src: "//thubanoa.com/1?z=7372549",
        async: true,
        dataset: { cfasync: "false" }
    }
];

// Append scripts to the head
scripts.forEach(scriptInfo => {
    const script = document.createElement('script');
    Object.keys(scriptInfo).forEach(key => {
        if (key === 'dataset') {
            Object.keys(scriptInfo.dataset).forEach(dataKey => {
                script.dataset[dataKey] = scriptInfo.dataset[dataKey];
            });
        } else if (key === 'onLoad') {
            script.onload = scriptInfo.onLoad;
        } else {
            script[key] = scriptInfo[key];
        }
    });
    document.head.appendChild(script);
});

// Add click event listener for the 1v1.LOL game
document.getElementById('1v1lol').addEventListener('click', function(event) {
    event.preventDefault();

    const confirmation = confirm("1v1.LOL is only available via download. If you have already downloaded it, copy and paste this 'file:///media/archive/1v1-lol.zip/1v1.lol-main/1v1.lol/index.htm' into your browser. If you haven't downloaded it yet, click OK and the download will automatically start.");

    if (confirmation) {
        const link = document.createElement('a');
        link.href = "/gs/1v1-lol.zip";
        link.download = "1v1-lol.zip";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
});
