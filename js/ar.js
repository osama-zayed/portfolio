function arabic() {
    document.getElementById("lg_nav").innerHTML = `
    <h3><a href="index.html">اسامة زايد</a></h3>
    <ul id="horizontalMenu" style="padding:0;margin:0; ">
    <li class="navMenuLink"><a class="navMenuLinkContent" href="#home">الرئيسية</a></li>
    <li class="navMenuLink"><a class="navMenuLinkContent" href="#about">عني</a></li>
    <li class="navMenuLink"><a class="navMenuLinkContent" href="#skills">المهارات</a></li>
    <li class="navMenuLink"><a class="navMenuLinkContent" href="#services">الخدمات</a></li>
    <li class="navMenuLink"><a class="navMenuLinkContent" href="#portfolio">معرض اعمالي</a></li>
    <li class="navMenuLink"><a class="navMenuLinkContent" href="#contact_sec">التواصل</a></li>
    `;
    document.getElementById("verticalMenu").innerHTML = `<div class="mb-4 d-flex justify-content-around p-3">
    <h3><a href="index.html">اسامه </a></h3>
    <input id="menuToggle" type="checkbox" style="display:none;">
    <label id="menuButton" for="menuToggle">
        <div id="menuButtonIcon">
        <i class="fa fa-times" aria-hidden="true"></i>
        </div>
    </label>
</div>
<li class="navMenuLink"><a class="navMenuLinkContent" href="#home">الرئيسية</a></li>
    <li class="navMenuLink"><a class="navMenuLinkContent" href="#about">عني</a></li>
    <li class="navMenuLink"><a class="navMenuLinkContent" href="#skills">المهارات</a></li>
    <li class="navMenuLink"><a class="navMenuLinkContent" href="#services">الخدمات</a></li>
    <li class="navMenuLink"><a class="navMenuLinkContent" href="#portfolio">معرض اعمالي</a></li>
    <li class="navMenuLink"><a class="navMenuLinkContent" href="#contact_sec">التواصل</a></li>
<li class="navMenuLink mt-5">
    <p>موبايل :
        <a href="tel:+967775561590" target="_blank" dir="ltr">
           (+967-775-561-590)
        </a>
    </p>
</li>
<li class="navMenuLink">
    <p>الايميل:
        <a href="mailto:osama0zayed@gmail.com" target="_blank">
            Osama0zayed@gmail.com
        </a>
    </p>
</li>
`;
    document.getElementById("home_text").innerHTML = `
    <h1 >مرحباً اسمي<br>
<span >أسامه زايد</span></h1>
<p>وانا مطور برمجيات</p>
<div class="btn-box">
<a href="#about" class="btn-1">عني</a>
<a href="tel:+967775561590" class="btn-2" target="_blank">تواصل بي</a></div>`;
    document.getElementById("about_title").innerHTML = `نبذه<span class="title2"> عني</span>`;
    document.getElementById("about_title_co").innerHTML = `اسمي أسامة، ودرست تخصص تكنولوجيا المعلومات. أنا عضو في مجتمع المطورين في جوجل، وأعمل كمستقل في مجال تطوير المواقع وأنظمة الويب . أستخدم لغات برمجة مختلفة لإنشاء حلول مبتكرة لعملائي.
    `;
    document.getElementById("about__content").innerHTML = `لقد قمت بالتعرف على مجالات مختلفة في مجال التكنولوجيا، مثل تطوير التطبيقات المحمولة والفرونت إند، وأهمية المفاهيم المتعلقة بتجربة المستخدم وتصميم الواجهة الجذابة. كما قمت بدراسة مفاهيم أساسية في الأمان السيبراني. هذا الاطلاع ساعدني على فهم تفاصيل أكثر حول تواصل البرامج وطرق عمل برامج ذات جودة أفضل.

    كان من السهولة بالنسبة لي دراسة هذه المجالات لأنني كنت أمتلك أساسًا برمجيًا جيدًا. قمت بحل العديد من المشاكل البرمجية قبل أن أتخصص في أي مجال محدد. ومع ذلك، يبقى تركيزي الأساسي في الباك إند، لأنني أشعر بأني ميّزت نفسي في هذا الجانب، وأجد المتعة في التعامل مع قواعد البيانات. لدي خبرة تزيد عن سنة في هذا المجال، وقد قمت بتطوير العديد من المشاريع خلال هذه الفترة.
    أهدافي هي التفوق في صناعة البرمجيات وتوسيع مهاراتي ومعرفتي باستمرار، مع تحدي الجديد والمبتكر.
    `;
    document.getElementById("about_btn1").innerHTML = ` تنزيل السيره الذاتية`;
    document.getElementById("about_btn2").innerHTML = `تواصل بي`;
    document.getElementById("about_my_self").innerHTML = ` <div class="col-md-6 col-lg-5">
    <p class="about__bio"><strong>الاسم :</strong> أسامه زايد</p>
    <p class="about__bio"><strong>العمر :</strong> 22</p>
</div>
<div class="col-md-6 col-lg-5">
    <p class="about__bio"><strong>الوظيفة :</strong>مطور برمجيات</p>
    <p class="about__bio"><strong>السكن :</strong>صنعاء,اليمن</p>
</div>`;

    document.getElementById("my_skills").innerHTML = `<span class="title2">المها</span>رات`;
    document.getElementById("my_services").innerHTML = `<span class="title2" >الخد</span>مات`;
    document.getElementById("my_services_content").innerHTML = `أقدم خدمات تقنيه تساعدك على تأسيس وجود عبر الإنترنت وادارة نشاطك التجاري بسهولة كما اركز على موضوع SEO لجعل المواقع يظهر في الصفحات الاولى في محركات البحث مما يساعد على زياده عدد الزيارات`;
    document.getElementById("my_portfolio").innerHTML = `معرض<span class="title2"> اعمالي </span> `;
    document.getElementById("my_portfolio_content").innerHTML = " بعض المشاريع التي تم الانتهاء منها سابقا وسيتم إضافة المزيد من المشاريع في المستقبل.";
    document.getElementById("service_system").innerHTML = "تطوير الانظمة";
    document.getElementById("service_system_content").innerHTML = " تحليل متطلبات العملاء وتصميم نظام يلبي احتياجاتهم.";
    document.getElementById("service_Mobile").innerHTML = "واجهات برمجة التطبيقات (RESTful API) ولوحة تحكم التطبيقات";
    document.getElementById("service_Mobile_content").innerHTML = "واجهة برمجة تطبيقات (RESTful API) آمنة وقابلة للتطوير ، إلى جانب لوحة معلومات تطبيق قوية لإدارة تطبيقاتك.";
    document.getElementById("service_Web").innerHTML = "تطوير المواقع";
    document.getElementById("service_Web_content").innerHTML = "مواقع وتطبيقات الويب سريعة الاستجابة وتعمل على جميع الاجهزه ";
    document.getElementById("button_portfolio_all").innerHTML = `الكل`;
    document.getElementById("button_portfolio_web").innerHTML = `المواقع`;
    document.getElementById("button_portfolio_system").innerHTML = `الانظمة`;
    document.getElementById("button_portfolio_mobile").innerHTML = `تطبيقات الموبايل`;


    document.getElementById("contact_me").innerHTML = `تواصل <span class="title2">بي</span>`;
    document.getElementById("contact_me_content").innerHTML = `املاء نموذج التواصل واخبرني كيف يمكنني مساعدتك وسيتم الرد عليك في اسرع وقت `;
    document.getElementById("contact").innerHTML = `
    <input type="hidden" name="_subject" value="New submission!">
    <div class="input-group col-lg-12">
        <input type="text" name="name" class="col-lg-12 input" autocomplete="off" id="contact_name"
            required>
        <label class="user-label ">الاسم</label>
    </div>
    <div class="input-group col-lg-6">
        <input type="email" name="email" class=" input" autocomplete="off" id="contact_email"
            required>
        <label class="user-label">الايميل</label>
    </div>
    <div class="input-group col-lg-6">
        <input type="text" name="phone_number" placeholder="" id="contact_number" class=" input"
            autocomplete="off" id="contact_email" required>
        <label class="user-label">رقم التلفون</label>
    </div>
    <textarea name="message" class="form-control col-lg-6" placeholder="الرسالة"
        id="contact_message" required></textarea>
    <input type="hidden" name="_captcha" value="false">
    <input type="hidden" name="_next" value="https://osama-zayed.github.io/portfolio/contect.html">

    <button type="submit" class="main-button col-lg-12 col-md-12 justify-content-center">
        <div class="svg-wrapper-1">
            <div class="svg-wrapper">
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                        fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <span id="contact_send">ارسال</span>
    </button>

`;
    document.getElementById("Social_Link").innerHTML = "تواصل اجتماعي";
    document.getElementById("info_contact_Address").innerHTML = "السكن";
    document.getElementById("Address_loc").innerHTML = "صنعاء,اليمن";
    document.getElementById("info_contact_menu").innerHTML = `
    <div class="info_links pl-lg-5" "><h4>   القائمة
</h4>
<ul>
    <li class="">
        <a href="#home">
           الرئيسية
        </a>
    </li>
    <li>
        <a href="#about">
          عني
        </a>
    </li>
    <li>
        <a class="" href="#skills">المهارات</a>
    </li>
    <li>
        <a class="" href="#services">الخدمات</a>
    </li>
    <li>
        <a class="" href="#portfolio">الاعمال</a>
    </li>
    <li class="active">
        <a href="#contact_sec">
            التواصل
        </a>
    </li>
</ul>
</div>`;
    document.getElementById("Created_by").innerHTML = ` &copy; صنع بواسطة <a href="index.html">اسامة زايد</a>`;

    //     document.getElementById("loding").innerHTML = `
    //     <div class="text-center " dir="rtl">
    //     <p class="loader-letters" style="animation: var(--effect);">
    // جاري التحميل</p>

    // </div>
    // <div class="loader text-center " style="animation: rotate 1s infinite; height: 50px; width: 50px;"></div>

    //     `;
    // document.getElementById("large").innerHTML = "";
}
function english() {
    document.getElementById("lg_nav").innerHTML = `
    <h3><a href="index.html">Osama Zayed</a></h3>
                <ul id="horizontalMenu" style="padding:0;margin:0; ">
                    <li class="navMenuLink"><a class="navMenuLinkContent" href="#home">Home</a></li>
                    <li class="navMenuLink"><a class="navMenuLinkContent" href="#about">about </a></li>
                    <li class="navMenuLink"><a class="navMenuLinkContent" href="#skills">skills </a></li>
                    <li class="navMenuLink"><a class="navMenuLinkContent" href="#services">services </a></li>
                    <li class="navMenuLink"><a class="navMenuLinkContent" href="#portfolio"> portfolio </a></li>
                    <li class="navMenuLink"><a class="navMenuLinkContent" href="#contact_sec">Contact</a></li>   `;
    document.getElementById("verticalMenu").innerHTML = `
    <div class="mb-4 d-flex justify-content-around p-2 w-fit-content">
    <h3><a href="index.html">Osama</a></h3>
    <input id="menuToggle" type="checkbox" style="display:none;">
    <label id="menuButton" for="menuToggle">
        <div id="menuButtonIcon">
            <i class="fa fa-times" aria-hidden="true"></i>
        </div>
    </label>
</div>
<li class="navMenuLink"><a class="navMenuLinkContent" href="#home">Home</a></li>
<li class="navMenuLink"><a class="navMenuLinkContent" href="#about">about </a></li>
<li class="navMenuLink"><a class="navMenuLinkContent" href="#skills">skills </a></li>
<li class="navMenuLink"><a class="navMenuLinkContent" href="#services">services </a></li>
<li class="navMenuLink"><a class="navMenuLinkContent" href="#portfolio"> portfolio </a></li>
<li class="navMenuLink"><a class="navMenuLinkContent" href="#contact_sec">Contact</a></li>
<li class="navMenuLink mt-5">
    <p>Mobile:
        <a href="tel:+967775561590" target="_blank">
            (+967-775-561-590)
        </a>
    </p>
</li>
<li class="navMenuLink">
    <p>Email
        <a href="mailto:osama0zayed@gmail.com" target="_blank">
            Osama0zayed@gmail.com
        </a>
    </p>
</li>
`;
    document.getElementById("home_text").innerHTML = `
    <h1 >
    Hi, my name is <br>
    <span >
        Osama Zayed
    </span>
</h1>
<p>
    I'm a Software Developers
</p>
<div class="btn-box">
    <a href="#about" class="btn-1">
        About Me
    </a>
    <a href="tel:+967775561590" class="btn-2" target="_blank">
        Contact me
    </a>
</div>`;
    document.getElementById("about_title").innerHTML = `ABOUT <span class="title2"> ME</span>`;
    document.getElementById("about_title_co").innerHTML = ` My name is Osama, and I have studied Information Technology. I am a core tame of the developer community at Google, and I work as a freelancer in the field of web development and systems. I use various programming languages to create innovative solutions for my clients.`;
    document.getElementById("about__content").innerHTML = `I have explored different areas in the field of technology, such as mobile application development, front-end development, and the importance of user experience and attractive interface design. I have also studied fundamental concepts in cybersecurity. This knowledge has helped me understand more about software communication and methods for developing high-quality programs.

    It was easy for me to study these areas because I already had a strong programming foundation. I solved many programming problems before specializing in any specific field. However, my main focus remains on back-end development because I feel that I have excelled in this aspect, and I enjoy working with databases. I have over a year of experience in this field and have developed several projects during this time.
    My goals are to excel in the software industry and continually expand my skills and knowledge.
    `;
    document.getElementById("about_btn1").innerHTML = `  Download CV`;
    document.getElementById("about_btn2").innerHTML = `  Contact me`;
    document.getElementById("about_my_self").innerHTML = ` 
    <div class="col-md-6 col-lg-5">
    <p class="about__bio"><strong>NAME :</strong> Osama Zayed</p>
    <p class="about__bio"><strong>AGE :</strong> 22</p>
</div>
<div class="col-md-6 col-lg-5">
    <p class="about__bio"><strong>JOB : </strong>Software Developers</p>
    <p class="about__bio"><strong>ADDRESS:</strong> Sana'a , yemen</p>
</div>`;

    document.getElementById("my_skills").innerHTML = `<span class="title2"> My</span> Skills`;
    document.getElementById("my_services").innerHTML = `<span class="title2"> My</span> Services`;
    document.getElementById("my_services_content").innerHTML = `  I provide technology services that help you establish an online presence, and I focus on SEO to make
    websites appear on the first pages of search engines, which helps increase the number of visits.`;
    document.getElementById("my_portfolio").innerHTML = `<span class="title2">My</span> portfolio `;
    document.getElementById("my_portfolio_content").innerHTML = "  These are some of the projects that have been previously completed and more projects will be added  in the future.";
    document.getElementById("service_system").innerHTML = "Systems";
    document.getElementById("service_system_content").innerHTML = "   Analyzing customer requirements and designing a system that meets their needs.";
    document.getElementById("service_Mobile").innerHTML = "RESTful API and Application Dashboard";

    document.getElementById("service_Mobile_content").innerHTML = "Secure and scalable RESTful API, along with a powerful application dashboard for managing your applications.";
    document.getElementById("service_Web").innerHTML = "Web Development";
    document.getElementById("service_Web_content").innerHTML = "       Websites and Web Applications that are responsive, elegant, and compatible.";
    document.getElementById("button_portfolio_all").innerHTML = `ALL`;
    document.getElementById("button_portfolio_web").innerHTML = `Websites`;
    document.getElementById("button_portfolio_system").innerHTML = `Systems`;
    document.getElementById("button_portfolio_mobile").innerHTML = `Mobile
    Application`;

    document.getElementById("contact_me").innerHTML = `contact<span class="title2"> Me</span>`;
    document.getElementById("contact_me_content").innerHTML = `Fill Out The Contact Form To
    Contact me
    I Will Help You Choose What Suits Your Specific Needs!`;
    document.getElementById("contact").innerHTML = `
    <input type="hidden" name="_subject" value="New submission!">
    <div class="input-group col-lg-12">
        <input type="text" name="name" class="col-lg-12 input" autocomplete="off" id="contact_name"
            required>
        <label class="user-label ">Name</label>
    </div>
    <div class="input-group col-lg-6">
        <input type="email" name="email" class=" input" autocomplete="off" id="contact_email"
            required>
        <label class="user-label">Your Email</label>
    </div>
    <div class="input-group col-lg-6">
        <input type="text" name="phone_number" placeholder="" id="contact_number" class=" input"
            autocomplete="off" id="contact_email" required>
        <label class="user-label">Phone number</label>
    </div>
    <textarea name="message" class="form-control col-lg-6" placeholder="Message"
        id="contact_message" required></textarea>
    <input type="hidden" name="_captcha" value="false">
    <input type="hidden" name="_next" value="https://osama-zayed.github.io/portfolio/contect.html">

    <button type="submit" class="main-button col-lg-12 col-md-12 justify-content-center">
        <div class="svg-wrapper-1">
            <div class="svg-wrapper">
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                        fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <span id="contact_send">Send</span>
    </button>
`;
    document.getElementById("Social_Link").innerHTML = "  Social Link";
    document.getElementById("info_contact_Address").innerHTML = " Address";
    document.getElementById("info_contact_menu").innerHTML = `
    <div class="info_links pl-lg-5">
    <h4>
        Menu
    </h4>
    <ul>
        <li class="">
            <a href="#home">
                Home
            </a>
        </li>
        <li>
            <a href="#about">
                About
            </a>
        </li>
        <li>
            <a class="" href="#skills">Skills</a>
        </li>
        <li>
            <a class="" href="#services">Services</a>
        </li>
        <li>
            <a class="" href="#portfolio">Portfolio </a>
        </li>
        <li class="active">
            <a href="#contact_sec">
                Contact My
            </a>
        </li>
    </ul>
    `;
    document.getElementById("Created_by").innerHTML = `  &copy; Created by <a href="index.html">Osama Zayed</a>`;

    //     document.getElementById("loding").innerHTML = `
    //     <div class="text-center ">
    //     <p class="loader-letters" style="animation: var(--effect);">
    //         l</p>
    //     <p class="loader-letters" style="animation: var(--effect) .125s;">
    //         o</p>
    //     <p class="loader-letters" style="animation: var(--effect) .25s;">
    //         a</p>
    //     <p class="loader-letters" style="animation: var(--effect) .375s;">
    //         d</p>
    //     <p class="loader-letters" style="animation: var(--effect) .5s;">
    //         i</p>
    //     <p class="loader-letters" style="animation: var(--effect) .675s;">
    //         n</p>
    //     <p class="loader-letters" style="animation: var(--effect) .75s;">
    //         g</p>
    // </div>
    // <div class="loader text-center " style="animation: rotate 1s infinite; height: 50px; width: 50px;"></div>

    //     `;

    // document.getElementById("large").innerHTML = "";
}





function mod($num) {
    const lan = document.getElementById("Language");
    if ($num === 1) {
        document.cookie = "Language_cook=1";
    }
    else {
        document.cookie = "Language_cook=2";
    };
    var xCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('Language_cook='));

    // إذا تم إيجاد كوكيز باسم "x"
    if (xCookie) {
        // احصل على قيمته
        var xValue = xCookie.split('=')[1].trim();

        // إذا كانت قيمته تساوى 1
        if (xValue == '1') {
            document.getElementById("arabic").disabled = false;
            arabic();
            lan.innerHTML = `<button class="mod"  onclick="mod(2)"  >
        English <i class="fa fa-globe" aria-hidden="true"></i>
        </button> ` ;
        } else {
            document.getElementById("arabic").disabled = true;

            lan.innerHTML = `<button class="mod"  onclick="mod(1)"  >
    <i class="fa fa-globe" aria-hidden="true"></i>عربي
    </button>`;
            english();
        }
    }

}


// Check if the "visited" cookie exists
if (document.cookie.indexOf("visited") >= 0) {
    // If the cookie exists, do nothing
} else {
    // الحصول على اللغة المفضلة للمستخدم
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.includes("ar")) {
        document.cookie = "Language_cook=1";
        mod(1);
    }
    else {
        document.cookie = "Language_cook=2";
        mod(2);
    }
    document.cookie = "visited=true";

}