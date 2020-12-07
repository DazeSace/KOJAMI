const oldLanguageIds = [
    "costSavings",
]

const languageIds = [
    "navHomeText", "navAboutUsText", "navPossibilitiesText", "navWhySerbiaText", "navOfferText", "navContactText", "navPartnersText",
    "navSlideHomeText", "navSlideAboutUsText", "navSlidePossibilitiesText", "navSlideWhySerbiaText", "navSlideOfferText", "navSlideContactText", "navSlidePartnersText",
    "aboutUs1","aboutUs15", "aboutUs2",
    "possibilitiesHead", "possibilitiesSub",
    "mobileTile1", "mobileTile2", "mobileTile3", "mobileTile4", "mobileTile5", "mobileTile6",
    "desktopTile1", "desktopTile2", "desktopTile3", "desktopTile4", "desktopTile5", "desktopTile6",
    "whySerbText",
    "location", "location1", "location2",
    "freeTrade", "freeTrade1", "freeTrade2",
    "offerHead", "offerLine1", "offerText1", "offerPhase1", "offerPhase2", "offerLin2", "offerText2", "offerPhase3", "offerText3",
    "arrowText1", "arrowText2", "arrowText3", "arrowText4", "arrowText5",
    "arrow1point1", "arrow1point2",
    "arrow2point1", "arrow2point2", "arrow2point3", "arrow2point4",
    "arrow3point1", "arrow3point2", "arrow3point3", "arrow3point4", "arrow3point5",
    "arrow4point1", "arrow4point2", "arrow4point3", "arrow4point4",
    "arrow5point1", "arrow5point2",
    "contactHead", "contact1", "contact2", "contactCard1Line1", "contactCard1Line2", "contactCard2Line1", "contactCard2Line2", "contactCard3", "contactCard4",
    "partnerHead",
    "imprint1", "imprint2",

]

const dictionary = {
    "en":{
        "navHomeText": "Home",
        "navAboutUsText": "About Us",
        "navPossibilitiesText": "Possibilities",
        "navWhySerbiaText": "Why Serbia?",
        "navOfferText": "Offer",
        "navContactText": "Contact",
        "navPartnersText": "Partners",
        "navSlideHomeText": "Home",
        "navSlideAboutUsText": "About Us",
        "navSlidePossibilitiesText": "Possibilities",
        "navSlideWhySerbiaText": "Why Serbia?",
        "navSlideOfferText": "Offer",
        "navSlideContactText": "Contact",
        "navSlidePartnersText": "Partners",

        "aboutUs1": "<span class=\"text-font-kojami\">KOJAMI</span> International Consulting",
        "aboutUs15": "based in Belgrade - Serbia",
        "aboutUs2":
            "We aim to support customers from all over the world in finding profitable " +
            "solutions for their cost-intensive business processes, making them more efficient and successful.",

        "possibilitiesHead": "Your Possibilities",
        "possibilitiesSub": "Business process outsourcing to Serbia",
        "mobileTile1": "Manufacturing partnership for SMEs with <span class=\"text-font-kojami\">KOJAMI</span>",
        "mobileTile2": "Parts production for SMEs <br> (external manufacturer)",
        "mobileTile3": "Complete manufacturing of assemblies for SMEs <br> (external manufacturer)",
        "mobileTile4": "Subsidiary founding",
        "mobileTile5": "Joint venture with local companies",
        "mobileTile6": "Accounting according to EUROPEAN / US standards",
        "desktopTile1": "Manufacturing partnership for SMEs with <span class=\"text-font-kojami text-xl tracking-wide\">KOJAMI</span>",
        "desktopTile2": "Parts production for SMEs <br> (external manufacturer)",
        "desktopTile3": "Complete manufacturing of assemblies for SMEs <br> (external manufacturer)",
        "desktopTile4": "Subsidiary founding",
        "desktopTile5": "Joint venture with local companies",
        "desktopTile6": "Accounting according to EUROPEAN / US standards",

        "whySerbText": "Why Serbia?",
        "location": "Location",
        "location1":
            "Serbia´s optimal geographic location keeps you close to your customers. " +
            "Well developed transportation and logistics industry has the ability to serve most EU markets by road in less than 24 hours.",
        "location2": "Thus <span class=\"text-font-kojami\">KOJAMI</span> provides the means to improve your competitive ability significantly on a global scale.",
        "freeTrade": "Free Trade Arrangements",
        "freeTrade1":
            "Serbia is a member of the Black Sea Economic Cooperation and the Central European Free Trade Agreement (CEFTA). " +
            "Serbia is the only European country, outside the CIS, that has a free trade agreement with Russia as well as with the Eurasian Economic Union (EAEU).",
        "freeTrade2":
            "Several other free trade agreements are currently in force with Kazakhstan, Belarus and Turkey, as well as with the European Free Trade Association. " +
            "This opens the markets of the Serbian economy, under largely liberalised conditions, to a total of about 1.1 billion people.",

        "offerHead": "Our offer",
        "offerLine1": "We check your cost saving potentials",
        "offerText1":
            "Once you have decided to review your cost saving potentials, you first commission us to develop the cost analysis of your product or process for your specific case. " +
            "Included in the analysis is the comparison to the costs which would arise in Serbia, of course with the same level of quality. " +
            "This will provide you with a commercial basis for your decision to produce in/to Serbia.",
        "offerPhase1": "Phase 1: Cost analysis at the customers site",
        "offerPhase2": "Phase 2: Comparative presentation of costs in Serbia",
        "offerLin2": "Implementation management",
        "offerText2":
            "We will then provide you with intensive support in the implementation of your project. " +
            "In close cooperation with you, we set the concrete goals and the exact framework of the implementation process.",
        "offerPhase3": "Phase 3: Validation and implementation management",
        "offerText3":
            "At this point, we either take over partial tasks for you or the entire implementation of the outsourcing project, " +
            "from the search for a location, setting up production, to the recruitment of personnel and the necessary permits in Serbia.",

        "arrowText1": "Validation of the project objectives",
        "arrow1point1": "Qualitatively and quantitatively in the concept phase with those responsible",
        "arrow1point2": "Commitment to the objectives",
        "arrowText2": "Coordination of implementation",
        "arrow2point1": "Definition of actions",
        "arrow2point2": "Timetable and preconditions",
        "arrow2point3": "Qualitative, quantitative objectives, responsibilities",
        "arrow2point4": "Commitment",
        "arrowText3": "Transfer of implementation objectives to <span class=\"text-font-kojami text-3xl\">KOJAMI</span>",
        "arrow3point1": "Measures and task packages",
        "arrow3point2": "Time required",
        "arrow3point3": "Quality targets",
        "arrow3point4": "Results",
        "arrow3point5": "Documentation of the implementation progress by KOJAMI",
        "arrowText4": "real-time info to client",
        "arrow4point1": "Status Implementation",
        "arrow4point2": "Project costs",
        "arrow4point3": "Operational control in Jour-Fixes",
        "arrow4point4": "Validation of financial target achievement",
        "arrowText5": "Process control",
        "arrow5point1": "Consistent management of implementation",
        "arrow5point2": "Documentation of results",

        "contactHead": "Contact",
        "contact1": "If we have sparked your interest please don’t hesitate to contact us for additional information about <span class=\"text-font-kojami text-3xl\">KOJAMI</span>’s scope of services.",
        "contact2": "We’ll gladly answer all of your questions and we are always available for a personal presentation about the specific advantages of cooperating with our enterprise.",
        "contactCard1Line1": "Germany | Austria",
        "contactCard1Line2": "Switzerland",
        "contactCard2Line1": "China | Japan",
        "contactCard2Line2": "Singapore",
        "contactCard3": "Marketing",
        "contactCard4": "Office",
        "partnerHead": "Partners",
        "imprint1": "Imprint",
        "imprint2": "Privacy Policy",
    },
    "de":{
        "navHomeText": "Start",
        "navAboutUsText": "Über uns",
        "navPossibilitiesText": "MÖGLICHKEITEN",
        "navWhySerbiaText": "Warum Serbien?",
        "navOfferText": "Angebot",
        "navContactText": "Kontakt",
        "navPartnersText": "Partner",
        "navSlideHomeText": "Start",
        "navSlideAboutUsText": "Über uns",
        "navSlidePossibilitiesText": "MÖGLICHKEITEN",
        "navSlideWhySerbiaText": "Warum Serbien?",
        "navSlideOfferText": "Angebot",
        "navSlideContactText": "Kontakt",
        "navSlidePartnersText": "Partner",

        "aboutUs1": "<span class=\"text-font-kojami\">KOJAMI</span> International Consulting",
        "aboutUs15": "mit Sitz in Belgrad - Serbien",
        "aboutUs2":
            "Wir haben uns zum Ziel gesetzt, Kunden aus aller Welt dabei zu unterstützen, profitable Lösungen für ihre kostenintensiven " +
            "Geschäftsprozesse zu finden und diese effizienter und erfolgreicher zu gestalten.",

        "possibilitiesHead": "Ihre Möglichkeiten",
        "possibilitiesSub": "Auslagerung von Geschäftsprozessen nach Serbien",
        "mobileTile1": "Fertigungspartnerschaft für KMUs mit <span class=\"text-font-kojami text-xl tracking-wide\">KOJAMI</span>",
        "mobileTile2": "Teilefertigung für KMUs",
        "mobileTile3": "Komplette Fertigung von Baugruppen für KMUs",
        "mobileTile4": "Gründung von Tochtergesellschaften",
        "mobileTile5": "Joint Venture mit lokalen Unternehmen",
        "mobileTile6": "Rechnungslegung nach EU / US-Normen",
        "desktopTile1": "Fertigungspartnerschaft für KMUs mit <span class=\"text-font-kojami text-xl tracking-wide\">KOJAMI</span>",
        "desktopTile2": "Teilefertigung für KMUs",
        "desktopTile3": "Komplette Fertigung von Baugruppen für KMUs",
        "desktopTile4": "Gründung von Tochtergesellschaften",
        "desktopTile5": "Joint Venture mit lokalen Unternehmen",
        "desktopTile6": "Rechnungslegung nach EU / US-Normen",

        "whySerbText": "Warum Serbien?",
        "location": "Standort",
        "location1":
            "Die optimale geografische Lage Serbiens bietet Ihnen Nähe zu ihren Kunden. Die gut entwickelte Transport- und Logistikinfrastruktur ermöglich ihnen, " +
            "die meisten EU-Märkte in weniger als 24 Stunden zu bedienen.",
        "location2": "Somit bietet <span class=\"text-font-kojami text-3xl\">KOJAMI</span> die Möglichkeit, Ihre Wettbewerbsfähigkeit auf globaler Ebene deutlich zu verbessern.",
        "freeTrade": "Freihandelsabkommen",
        "freeTrade1":
            "Serbien ist Mitglied der wirtschaftlichen Zusammenarbeit im Schwarzmeerraum und des Mitteleuropäischen Freihandelsabkommens (CEFTA). " +
            "Serbien ist das einzige europäische Land außerhalb der GUS, das sowohl mit Russland als auch mit der Eurasischen Wirtschaftsunion (EAEU) ein Freihandelsabkommen hat.",
        "freeTrade2":
            "Mehrere andere Freihandelsabkommen sind derzeit mit Kasachstan, Belarus und der Türkei sowie mit der Europäischen Freihandelsassoziation in Kraft. " +
            "Damit werden die Märkte der serbischen Wirtschaft unter weitgehend liberalisierten Bedingungen für insgesamt rund 1,1 Milliarden Menschen geöffnet.",

        "offerHead": "Unser Angebot",
        "offerLine1": "Wir überprüfen Ihre Kostenersparnispotentiale",
        "offerText1":
            "Nachdem Sie sich zu einer Überprüfung Ihrer Kostenersparnispotentiale entschieden haben, " +
            "beauftragen Sie uns zunächst für die Erarbeitung der Kostenanalyse Ihres Produktes oder Prozesses für Ihren spezifischen Fall. " +
            "Inbegriffen in der Analyse ist der Vergleich zu den Kosten welche in Serbien entstehen würden, selbstverständlich bei gleichbleibendem Qualitätsniveau. " +
            "So erhalten Sie eine kaufmännische Grundlage für Ihre Entscheidung in/nach Serbien zu produzieren/auszulagern.",
        "offerPhase1": "Phase 1: Kostenanalyse beim Kunden vor Ort",
        "offerPhase2": "Phase 2: Vergleichsdarstellung der Kosten in Serbien",
        "offerLin2": "Umsetzungsmanagement",
        "offerText2":
            "Wir unterstützen Sie daraufhin intensiv bei der Umsetzung Ihres Vorhabens. " +
            "In enger Zusammenarbeit mit Ihnen, setzten wir die konkreten Ziele und den genauen Rahmen des Umsetzungsprozesses.",
        "offerPhase3": "Phase 3: Validierungs- und Umsetzungsmanagement",
        "offerText3":
            "Wir übernehmen an dieser Stelle entweder Teilaufgaben für Sie oder die gesamte Umsetzung des Outsourcings von der Standortsuche, " +
            "Einrichtung der Produktion, bis hin zur Personalbeschaffung und den erforderlichen Genehmigungen in Serbien.",

        "arrowText1": "Validierung der Projektziele",
        "arrow1point1": "Qualitativ und quantitativ in der Konzeptphase mit den Verantwortlichen",
        "arrow1point2": "Commitment zu den Zielen",
        "arrowText2": "Abstimmung der Umsetzung",
        "arrow2point1": "Maßnahmendefinition",
        "arrow2point2": "Zeitplan und Voraussetzungen",
        "arrow2point3": "Qualitative, quantitative Ziele, Verantwortlichkeiten",
        "arrow2point4": "Commitment",
        "arrowText3": "Übertragung der Umsetzungsziele an <span class=\"text-font-kojami text-3xl\">KOJAMI</span>",
        "arrow3point1": "Maßnahmen und Aufgabenpakete",
        "arrow3point2": "Zeitbedarf",
        "arrow3point3": "Qualitätsziele",
        "arrow3point4": "Ergebnisse",
        "arrow3point5": "Dokumentation des Umsetzungsfortschritts durch KOJAMI",
        "arrowText4": "Real Time - Info an Auftraggeber",
        "arrow4point1": "Status Umsetzung",
        "arrow4point2": "Projektkosten",
        "arrow4point3": "Operative Steuerung in Jour-Fixes",
        "arrow4point4": "Validierung finanzieller Zielerreichung",
        "arrowText5": "Steuerung",
        "arrow5point1": "Konsequente Steuerung der Umsetzung",
        "arrow5point2": "Ergebnisdokumentation",

        "contactHead": "Kontakt",
        "contact1": "Wenn wir Ihr Interesse geweckt haben, zögern Sie bitte nicht, uns für weitere Informationen über den Leistungsumfang von <span class=\"text-font-kojami text-3xl\">KOJAMI</span> zu kontaktieren.",
        "contact2": "Wir beantworten gerne alle Ihre Fragen und stehen Ihnen jederzeit für eine persönliche Präsentation über die spezifischen Vorteile einer Zusammenarbeit mit unserem Unternehmen zur Verfügung.",
        "contactCard1Line1": "Deutschland | Österreich",
        "contactCard1Line2": "Schweiz",
        "contactCard2Line1": "China | Japan",
        "contactCard2Line2": "Singapur",
        "contactCard3": "Marketing",
        "contactCard4": "Office",
        "partnerHead": "Partner",
        "imprint1": "Impressum",
        "imprint2": "Datenschutzerklärung",
    },
    "cn":{
        "navHomeText": "首页",
        "navAboutUsText": "关于我们",
        "navPossibilitiesText": "可能的情况",
        "navWhySerbiaText": "为什么选择塞尔维亚？",
        "navOfferText": "优惠",
        "navContactText": "联系我们",
        "navPartnersText": "合作伙伴",
        "navSlideHomeText": "首页",
        "navSlideAboutUsText": "关于我们",
        "navSlidePossibilitiesText": "可能的情况",
        "navSlideWhySerbiaText": "为什么选择塞尔维亚？",
        "navSlideOfferText": "优惠",
        "navSlideContactText": "联系我们",
        "navSlidePartnersText": "合作伙伴",

        "aboutUs1": "<span class=\"text-font-kojami\">KOJAMI</span> 国际咨询公司总部位于塞尔维亚贝尔格莱德,",
        "aboutUs15": "",
        "aboutUs2":
            "致力于帮助世界各地的客户为其成本密集型的业务流程找到盈利的解决方案，使其更加高效和成功。",

        "possibilitiesHead": "您的可能性",
        "possibilitiesSub": "将业务流程外包给塞尔维亚",
        "mobileTile1": "与 <span class=\"text-font-kojami text-xl\">KOJAMI</span> 建立中小企业生产合作关系",
        "mobileTile2": "中小企业的零部件制造",
        "mobileTile3": "为中小型企业提供完整的组件生产",
        "mobileTile4": "子公司的成立",
        "mobileTile5": "与当地公司的合资企业",
        "mobileTile6": "根据欧盟/美国标准进行核算",
        "desktopTile1": "与 <span class=\"text-font-kojami text-xl\">KOJAMI</span> 建立中小企业生产合作关系",
        "desktopTile2": "中小企业的零部件制造",
        "desktopTile3": "为中小型企业提供完整的组件生产",
        "desktopTile4": "子公司的成立",
        "desktopTile5": "与当地公司的合资企业",
        "desktopTile6": "根据欧盟/美国标准进行核算",

        "whySerbText": "为什么选择塞尔维亚",
        "location": "位置",
        "location1":
            "塞尔维亚的最佳地理位置为您提供了接近客户的机会。完善的运输和物流基础设施使他们能够在24小时内服务于大多数欧盟市场。",
        "location2": "因此，<span class=\"text-font-kojami text-3xl\">KOJAMI</span> 为您提供了在全球范围内显著提高竞争力的机会。",
        "freeTrade": "自由贸易协定",
        "freeTrade1":
            "塞尔维亚是黑海经济合作组织和中欧自由贸易协定的成员。塞尔维亚是独联体以外唯一与俄罗斯和欧亚经济联盟（EAEU）都有自由贸易协定的欧洲国家。",
        "freeTrade2":
            "目前与哈萨克斯坦、白俄罗斯和土耳其以及欧洲自由贸易联盟的其他几项自由贸易协定正在生效。这使塞尔维亚经济的市场在基本上自由化的条件下，向总共约11亿人开放。",

        "offerHead": "我们的报价",
        "offerLine1": "我们检查您的成本节约潜力",
        "offerText1":
            "一旦您决定审查您的成本节约潜力，您首先要委托我们针对您的具体情况对您的产品或工艺进行成本分析。 分析中包括与在塞尔维亚发生的费用进行比较，当然是在相同质量水平下。这将为您决定在塞尔维亚生产/到塞尔维亚生产提供商业基础。",
        "offerPhase1": "第一阶段：在客户现场进行成本分析",
        "offerPhase2": "第2阶段：塞尔维亚费用的比较列报方式",
        "offerLin2": "执行管理",
        "offerText2":
            "然后，我们将在您的项目实施过程中为您提供深入的支持。在与您的密切合作下，我们制定了具体的目标和实施过程的确切框架。",
        "offerPhase3": "第三阶段：验证和实施管理",
        "offerText3":
            "在这一点上，我们可以为您承担部分任务，也可以为您实施整个外包，从寻找地点，建立生产，到招聘人员和在塞尔维亚获得必要的许可证。",

        "arrowText1": "项目目标的验证",
        "arrow1point1": "在概念阶段与负责人员进行定性和定量分析",
        "arrow1point2": "对目标的承诺",
        "arrowText2": "执行工作的协调",
        "arrow2point1": "措施的定义",
        "arrow2point2": "时间表和所需经费",
        "arrow2point3": "定性、定量目标、责任",
        "arrow2point4": "-承诺",
        "arrowText3": "向 <span class=\"text-font-kojami text-4xl\">KOJAMI</span> 移交执行目标",
        "arrow3point1": "措施和任务包",
        "arrow3point2": "所需时间",
        "arrow3point3": "质量目标",
        "arrow3point4": "结果",
        "arrow3point5": "记录 KOJAMI 的执行进展情况",
        "arrowText4": "向客户提供实时信息",
        "arrow4point1": "执行情况",
        "arrow4point2": "项目费用",
        "arrow4point3": "定期会议的业务管理",
        "arrow4point4": "验证已实现的财务目标",
        "arrowText5": "项目控制",
        "arrow5point1": "对执行情况的一致控制",
        "arrow5point2": "成果文件",

        "contactHead": "联系我们",
        "contact1": "如果您对我们的服务有兴趣，请随时联系我们，以了解更多关于 <span class=\"text-font-kojami text-3xl\">KOJAMI</span> 的服务范围。",
        "contact2": "我们将很高兴回答您的所有问题，并随时为您介绍与我们公司合作的具体优势。",
        "contactCard1Line1": "德国 | 奥地利",
        "contactCard1Line2": "瑞士",
        "contactCard2Line1": "中国 | 日本",
        "contactCard2Line2": "新加坡",
        "contactCard3": "市场营销",
        "contactCard4": "办公室",
        "partnerHead": "伙伴",
        "imprint1": "版本说明",
        "imprint2": "私隐政策",
    },
    "ru":{
        "navHomeText": "Старт",
        "navAboutUsText": "О нас",
        "navPossibilitiesText": "ВОЗМОЖНОСТИ",
        "navWhySerbiaText": "ПОЧЕМУ СЕРБИЯ?",
        "navOfferText": "ОФЕР",
        "navContactText": "КОНТАКТ",
        "navPartnersText": "ПАРТНЕРЫ",
        "navSlideHomeText": "Старт",
        "navSlideAboutUsText": "О нас",
        "navSlidePossibilitiesText": "ВОЗМОЖНОСТИ",
        "navSlideWhySerbiaText": "ПОЧЕМУ СЕРБИЯ?",
        "navSlideOfferText": "ОФЕР",
        "navSlideContactText": "КОНТАКТ",
        "navSlidePartnersText": "ПАРТНЕРЫ",

        "aboutUs1": "<span class=\"text-font-kojami\">KOJAMI</span> International Consulting",
        "aboutUs15": "расположенная в Белграде - Сербия,",
        "aboutUs2":
            "стремится поддерживать клиентов со всего мира в поиске выгодных решений для их затратных бизнес-процессов, делая их более эффективными и успешными.",

        "possibilitiesHead": "Возможности",
        "possibilitiesSub": "Аутсорсинг бизнес-процессов в Сербии, например:",
        "mobileTile1": "Производственное партнерство для малого и среднего бизнеса с <span class=\"text-font-kojami text-xl\">KOJAMI</span>",
        "mobileTile2": "Производство комплектующих для малых и средних предприятий",
        "mobileTile3": "Полное изготовление узлов для малых и средних предприятий",
        "mobileTile4": "Учреждение дочерних предприятий",
        "mobileTile5": "Совместное предприятие с местными компаниями",
        "mobileTile6": "Бухгалтерский учет по европейскому и американскому стандартам",
        "desktopTile1": "Производственное партнерство для малого и среднего бизнеса с <span class=\"text-font-kojami text-xl\">KOJAMI</span>",
        "desktopTile2": "Производство комплектующих для малых и средних предприятий",
        "desktopTile3": "Полное изготовление узлов для малых и средних предприятий",
        "desktopTile4": "Учреждение дочерних предприятий",
        "desktopTile5": "Совместное предприятие с местными компаниями",
        "desktopTile6": "Бухгалтерский учет по европейскому и американскому стандартам",

        "whySerbText": "Почему Сербия?",
        "location": "Местоположение",
        "location1":
            "Оптимальное географическое положение Сербии держит Вас ближе к Вашим клиентам. Хорошо развитая отрасль транспорта и логистики имеет возможность обслуживать большинство рынков ЕС автомобильным транспортом менее чем за 24 часа.",
        "location2": "Таким образом, <span class=\"text-font-kojami text-3xl\">KOJAMI</span> предоставляет средства для значительного повышения вашей конкурентоспособности в мировом масштабе",
        "freeTrade": "Соглашения о свободной торговле",
        "freeTrade1":
            "Сербия является членом Черноморского экономического сотрудничества и Центральноевропейского соглашения о свободной торговле (ЦЕФТА). " +
            "Сербия является единственной европейской страной за пределами СНГ, которая имеет соглашение о свободной торговле с Россией, а также с Евразийским экономическим союзом (ЕАЭС).",
        "freeTrade2":
            "В настоящее время действует ряд других соглашений о свободной торговле с Казахстаном, Белоруссией и Турцией, " +
            "а также с Европейской ассоциацией свободной торговли. Это открывает рынки сербской экономики, в значительной степени либерализованные, " +
            "для в общей сложности около 1,1 миллиард человек.",

        "offerHead": "Наше предложение",
        "offerLine1": "Мы проверим ваши потенциалы экономии",
        "offerText1":
            "После того, как вы решили проанализировать свой потенциал экономии, вы сначала поручаете нам разработать анализ затрат на ваш продукт или процесс для вашего конкретного случая. " +
            "В анализ включено сравнение с расходами, которые будут понесены в Сербии, разумеется, с тем же уровнем качества. " +
            "Это обеспечит Вам коммерческую основу для принятия решения о производстве в/в Сербию.",
        "offerPhase1": "Этап 1: Анализ затрат на объекте заказчика",
        "offerPhase2": "Этап 2: Сравнительное представление расходов в Сербии",
        "offerLin2": "Управление внедрением",
        "offerText2":
            "Затем мы окажем вам интенсивную поддержку в реализации вашего проекта. В тесном сотрудничестве с Вами мы определили конкретные цели и точные рамки процесса реализации.",
        "offerPhase3": "Фаза 3: Проверка и управление внедрением",
        "offerText3":
            "На данном этапе мы берем на себя либо частичные задачи для Вас, либо всю реализацию аутсорсинга, начиная от поиска места, " +
            "организации производства, заканчивая наймом персонала и получением необходимых разрешений в Сербии.",

        "arrowText1": "Проверка целей проекта",
        "arrow1point1": "Качественно и количественно на этапе разработки концепции с ответственными лицами",
        "arrow1point2": "риверженность целям",
        "arrowText2": "Координация осуществления",
        "arrow2point1": "Определение мер",
        "arrow2point2": "Расписание и требования",
        "arrow2point3": "Качественные, количественные цели, ответственность",
        "arrow2point4": "Обязательство",
        "arrowText3": "Передача <span class=\"text-font-kojami text-4xl\">KOJAMI</span> целей реализации",
        "arrow3point1": "Пакеты мер и задач",
        "arrow3point2": "Требуемое время",
        "arrow3point3": "Цели в области качества",
        "arrow3point4": "Результаты",
        "arrow3point5": "Документация о ходе осуществления KOJAMI",
        "arrowText4": "Информация для клиента в режиме реального времени",
        "arrow4point1": "Статус Выполнение",
        "arrow4point2": "Расходы по проектам",
        "arrow4point3": "Оперативное управление на регулярных совещаниях",
        "arrow4point4": "Проверка достижения финансовых целей",
        "arrowText5": "Управление проектами",
        "arrow5point1": "Последовательный контроль за выполнением",
        "arrow5point2": "Документирование результатов",

        "contactHead": "Контактная информация",
        "contact1": "Если мы заинтересовали Вас, пожалуйста, свяжитесь с нами для получения дополнительной информации об услугах <span class=\"text-font-kojami text-3xl\">KOJAMI</span>.",
        "contact2": "Мы с удовольствием ответим на все Ваши вопросы и всегда готовы лично рассказать о конкретных преимуществах сотрудничества с нашим предприятием.",
        "contactCard1Line1": "Германия | Австрия",
        "contactCard1Line2": "Швейцария",
        "contactCard2Line1": "Китай | Япония",
        "contactCard2Line2": "Сингапур",
        "contactCard3": "Маркетинг",
        "contactCard4": "Офис",
        "partnerHead": "Партнеры",
        "imprint1": "版本说明",
        "imprint2": "私隐政策",
    },
    "rs":{
        "navHomeText": "ГЛАВНА",
        "navAboutUsText": "О НАМА",
        "navPossibilitiesText": "МОГУЋНОСТИ",
        "navWhySerbiaText": "ЗАШТО СРБИЈА?",
        "navOfferText": "ПОНУДА",
        "navContactText": "КОНТАКТ",
        "navPartnersText": "ПАРТНЕРИ",
        "navSlideHomeText": "ГЛАВНА",
        "navSlideAboutUsText": "О НАМА",
        "navSlidePossibilitiesText": "МОГУЋНОСТИ",
        "navSlideWhySerbiaText": "ЗАШТО СРБИЈА?",
        "navSlideOfferText": "ПОНУДА",
        "navSlideContactText": "КОНТАКТ",
        "navSlidePartnersText": "ПАРТНЕРИ",

        "aboutUs1": "<span class=\"text-font-kojami\">KOJAMI</span> International Consulting",
        "aboutUs15": "са седиштем у Београду",
        "aboutUs2":
            "настоји да подржи клијенте из целога света у проналажењу профитабилних решења за њихове пословне процесе, чинећи их ефикасним и успешним.",

        "possibilitiesHead": "Могућности",
        "possibilitiesSub": "Пренос пословних процеса у Србији, на пример",
        "mobileTile1": "Производно партнерство за мала и средња предузећа са <span class=\"text-font-kojami text-xl\">KOJAMI</span>",
        "mobileTile2": "Производња компонената за мала и средња предузећа",
        "mobileTile3": "Комплетна израда склопова за мала и средња предузећа",
        "mobileTile4": "Оснивање подружница",
        "mobileTile5": "Заједничко улагање са локалним компанијама",
        "mobileTile6": "Рачуноводство по европским и америчким стандардима",
        "desktopTile1": "Производно партнерство за мала и средња предузећа са <span class=\"text-font-kojami text-xl\">KOJAMI</span>",
        "desktopTile2": "Производња компонената за мала и средња предузећа",
        "desktopTile3": "Комплетна израда склопова за мала и средња предузећа",
        "desktopTile4": "Оснивање подружница",
        "desktopTile5": "Заједничко улагање са локалним компанијама",
        "desktopTile6": "Рачуноводство по европским и америчким стандардима",

        "whySerbText": "Зашто Србија?",
        "location": "Локација",
        "location1":
            "Оптимални географски положај у Србији приближава вас купцима. Добро развијена индустрија транспорта и логистике има могућност да већу трговину ЕУ цестом услуга за најмање 24 сата.",
        "location2": "На овај начин, <span class=\"text-font-kojami text-3xl\">KOJAMI</span> пружа средства за значајно повећање ваше глобалне конкурентности.\n",
        "freeTrade": "Cпоразуми о слободној трговини",
        "freeTrade1":
            "Србија је чланица Црноморске економске сарадње и Централноевропског споразума о слободној трговини (ЦЕФТА). Србија је једина европска земља ван ЗНД која има уговор о слободној трговини са Русијом, као и са Евроазијском економском унијом (ЕАЕУ).",
        "freeTrade2":
            "Тренутно је на снази низ других споразума о слободној трговини са Казахстаном, Белорусијом и Турском, као и са Европском асоцијацијом за слободну трговину. Ово отвара тржишта за српску економију, углавном либерализовану, за укупно око 1,1 милијарду људи.",

        "offerHead": "Наша Понуда",
        "offerLine1": "Проверавамо ваш потенцијал уштеде трошкова",
        "offerText1":
            "Након што одлучите да преиспитате свој потенцијал уштеде трошкова, прво нам можете поверити да развијемо анализу трошкова вашег производа или процеса за ваш конкретан случај. " +
            "У анализу је укључено поређење са трошковима који би настали у Србији, наравно са истим нивоом квалитета. " +
            "Ово вам даје комерцијалну основу за вашу одлуку да своју производњу селите у Србију.",
        "offerPhase1": "Фаза 1: Анализа трошкова на локацији клијента",
        "offerPhase2": "Фаза 2: Поређење трошкова у Србији",
        "offerLin2": "Управљање имплементацијом",
        "offerText2":
            "Тада ћемо вам пружити интензивну подршку и у спровођењу вашег пројекта. У блиској сарадњи са вама поставили смо специфичне циљеве и тачан оквир за процес примене.",
        "offerPhase3": "Фаза 3: Валидација и управљање реализацијом",
        "offerText3":
            "У овом тренутку ми или преузимамо делимичне задатке за вас или целокупни пројекат извођења, од проналаска локације, постављања производње до регрутовања запослених и добијања потребних дозвола у Србији.",

        "arrowText1": "Валидација пројектних циљева",
        "arrow1point1": "квалитативно и квантитативно у фази концепта са одговорнима",
        "arrow1point2": "Посвећеност циљевима",
        "arrowText2": "Координација примене",
        "arrow2point1": "Дефиниција мера",
        "arrow2point2": "Временски распоред и предуслови",
        "arrow2point3": "Квалитативни, квантитативни циљеви, одговорности",
        "arrow2point4": "Посвећеност",
        "arrowText3": "Пренос циљева примене на <span class=\"text-font-kojami text-4xl\">KOJAMI</span> консалтинг",
        "arrow3point1": "Мере и пакети задатака",
        "arrow3point2": "Потребно време",
        "arrow3point3": "Циљеви квалитета",
        "arrow3point4": "Резултати",
        "arrow3point5": "Документација о напретку имплементације од стране КОЈАМИ",
        "arrowText4": "real time информације клијентима",
        "arrow4point1": "Статус примене",
        "arrow4point2": "трошкови пројекта",
        "arrow4point3": "Оперативна контрола на редовним састанцима",
        "arrow4point4": "Потврда постизања финансијских циљева",
        "arrowText5": "Пројектни менаџмент",
        "arrow5point1": "Доследна контрола имплементацијe",
        "arrow5point2": "Документација резултата",

        "contactHead": "Контакт информације",
        "contact1": "Ако сте заинтересовани за наше услуге, контактирајте нас за више информација о услугама <span class=\"text-font-kojami text-3xl\">KOJAMI</span>.",
        "contact2": "Радо ћемо одговорити на сва ваша питања и увек смо спремни да вам лично презентујемо конкретне предности у сарадњи са нашом компанијом.",
        "contactCard1Line1": "Немачка | Аустрија",
        "contactCard1Line2": "Швајцарска",
        "contactCard2Line1": "Кина | Јапан",
        "contactCard2Line2": "Сингапур",
        "contactCard3": "Маркетинг",
        "contactCard4": "Канцеларија",
        "partnerHead": "Партнери",
        "imprint1": "Импресум",
        "imprint2": "Правила о приватности",
    },
    "ir":{
        "navHomeText": "خانه",
        "navAboutUsText": "درباره ما",
        "navPossibilitiesText": "فرصت ها",
        "navWhySerbiaText": "چرا صربستان؟",
        "navOfferText": "پیشنهاد",
        "navContactText": "مخاطب",
        "navPartnersText": "شرکا",
        "navSlideHomeText": "خانه",
        "navSlideAboutUsText": "درباره ما",
        "navSlidePossibilitiesText": "فرصت ها",
        "navSlideWhySerbiaText": "چرا صربستان؟",
        "navSlideOfferText": "پیشنهاد",
        "navSlideContactText": "مخاطب",
        "navSlidePartnersText": "شرکا",

        "aboutUs1": "شرکت مشاوره بین المللی <span class=\"text-font-kojami\">KOJAMI</span> ، مستقر در بلگراد - صربستان ، با هدف پشتیبانی از مشتریان از سراسر جهان ",
        "aboutUs15": "",
        "aboutUs2":
            "در یافتن راه حل های سودآور برای فرآیندهای تجاری با هزینه زیاد ، باعث کارآیی و موفقیت بیشتر آنها می شود.",

        "possibilitiesHead": "خدمات ما",
        "possibilitiesSub": "برون سپاری فرآیند تجارت به صربستان ، مانند",
        "mobileTile1": "مشارکت تولیدی برای SME ها  با شرکت KOJAMI",
        "mobileTile2": "تولید قطعات برای SME ها (تولید کننده خارجی)",
        "mobileTile3": "ساخت کامل مجموعه برای  KOJAMI (تولید کننده خارجی)",
        "mobileTile4": " سرمایه گذاری سوبسیدی",
        "mobileTile5": "سرمایه گذاری مشترک با شرکت های محلی",
        "mobileTile6": "حسابداری براساس استاندرهای اروپا و آمریکا",
        "desktopTile1": "مشارکت تولیدی برای SME ها  با شرکت KOJAMI",
        "desktopTile2": "تولید قطعات برای SME ها (تولید کننده خارجی)",
        "desktopTile3": "ساخت کامل مجموعه برای  KOJAMI (تولید کننده خارجی)",
        "desktopTile4": " سرمایه گذاری سوبسیدی",
        "desktopTile5": "سرمایه گذاری مشترک با شرکت های محلی",
        "desktopTile6": "حسابداری براساس استاندرهای اروپا و آمریکا",

        "whySerbText": "چرا صربستان",
        "location": "موقعیت مکانی ",
        "location1":
            "موقعیت جغرافیایی صربستان این امکان را به شما میدهد که در نزدیکی مشتریان بین الملی خود فعالیت داشته باشید. حمل و نقل مدرن و توسعه یافته این امکان را برای شما فراهم میکند تا کمتر از 24 ساعت به اکثر بازارهای اروپایی دسترسی داشته باشید.",
        "location2": "بدینوسیله KOJAMI ابزاری را برای بهبود توانایی رقابت شما در مقیاس جهانی فراهم می کند.",
        "freeTrade": "توافق نامه های تجارت آزاد",
        "freeTrade1":
            "صربستان عضو سازمان همکاری اقتصادی دریای سیاه(BSEC)   و توافق نامه تجارت آزاد اروپای مرکزی (CEFTA) است. صربستان تنها کشور اروپایی خارج از  CIS است که با روسیه و همچنین با اتحادیه اقتصادی اوراسیا (EAEU) توافق نامه تجارت آزاد دارد.",
        "freeTrade2":
            "چندین توافق نامه تجارت آزاد دیگر در حال حاضر با قزاقستان ، بلاروس و ترکیه و همچنین با انجمن تجارت آزاد اروپا در حال اجراست. این امر فضای تجارت آزاد صربستان برای جمعیتی بالغ بر 800 میلیون نفر را سبب میشود.",

        "offerHead": "دامنه ما",
        "offerLine1": "ما پتانسیل شما را برای صرفه جویی در هزینه بررسی می کنیم",
        "offerText1":
            "بعد از اینکه تصمیم گرفتید پتانسیل صرفه جویی در هزینه خود را بررسی کنید ، ابتدا می توانید ما را سفارش دهید تا تجزیه و تحلیل هزینه محصول یا فرآیند مربوط به مورد خاص خود را توسعه دهیم." +
            "مقایسه با هزینه هایی که در صربستان پیش می آید ، البته با همان سطح کیفیت ، در این تحلیل وجود دارد. این به شما یک مبنای تجاری برای تصمیم شما برای تولید / برون سپاری در / به صربستان می دهد",
        "offerPhase1": "مرحله 1: تجزیه و تحلیل هزینه در سایت مشتری",
        "offerPhase2": "مرحله 2: مقایسه هزینه ها در صربستان",
        "offerLin2": "مدیریت پیاده سازی",
        "offerText2":
            "سپس ما در اجرای پروژه شما پشتیبانی فشرده ای خواهیم داشت. در همکاری نزدیک با شما ، اهداف مشخص و چارچوب دقیق فرآیند اجرا را تعیین می کنیم",
        "offerPhase3": "مرحله 3: اعتبار سنجی و مدیریت پیاده سازی",
        "offerText3":
            "در این مرحله ، ما یا کارهای جزئی را برای شما و یا کل اجرای برون سپاری را بر عهده می گیریم ، از یافتن مکان ، راه اندازی تولید ، تا استخدام و گرفتن مجوزهای لازم در صربستان.",

        "arrowText1": "اعتبار سنجی اهداف پروژه",
        "arrow1point1": " از نظر کیفی و کمی در مرحله مفهوم با مسئولین",
        "arrow1point2": "تعهد به اهداف",
        "arrowText2": "هماهنگی اجرا",
        "arrow2point1": " تعریف اقدامات",
        "arrow2point2": " برنامه و الزامات",
        "arrow2point3": "اهداف ، مسئولیت های کیفی ، کمی",
        "arrow2point4": "تعهد",
        "arrowText3": "انتقال اهداف اجرا به مشاوره KOJAMI",
        "arrow3point1": "اقدامات و بسته های کار",
        "arrow3point2": "زمان مورد نیاز",
        "arrow3point3": "اهداف کیفی",
        "arrow3point4": "نتایج",
        "arrow3point5": "مستندات پیشرفت اجرا توسط مشاوره KOJAMI",
        "arrowText4": "اطلاعات در زمان واقعی به مشتریان",
        "arrow4point1": "اجرای وضعیت",
        "arrow4point2": "هزینه های پروژه",
        "arrow4point3": "کنترل عملیاتی در جلسات منظم",
        "arrow4point4": "اعتبار سنجی دستیابی به هدف مالی",
        "arrowText5": "مدیریت پروژه",
        "arrow5point1": "کنترل مداوم اجرا",
        "arrow5point2": "مستندات نتایج",

        "contactHead": "راه های تماس",
        "contact1": "لطفا برای اطلاعات بیشتر در مورد دامنه خدمات KOJAMI با ما تماس بگیرید.",
        "contact2": "ما با کمال میل به تمام سوالات شما پاسخ خواهیم داد و همیشه برای ارائه مشاوره شخصی در مورد مزایای خاص همکاری با شرکت خود در دسترس هستیم.",
        "contactCard1Line1": "آلمان | اتریش",
        "contactCard1Line2": "سنگاپور",
        "contactCard2Line1": " چین | ژاپن",
        "contactCard2Line2": "سوئیس",
        "contactCard3": "مارکتینگ",
        "contactCard4": "دفترمرکزی",
        "partnerHead": "شرکا",
        "imprint1": "چاپ",
        "imprint2": "سیاست حفظ حریم خصوصی",
    },
    "tr":{
        "navHomeText": "Ana Sayfa",
        "navAboutUsText": "Hakkımızda",
        "navPossibilitiesText": "Olasılıklar",
        "navWhySerbiaText": "Neden SIRBISTAN?",
        "navOfferText": "Teklifimiz",
        "navContactText": "İletişim",
        "navPartnersText": "Ortaklar",
        "navSlideHomeText": "Ana Sayfa",
        "navSlideAboutUsText": "Hakkımızda",
        "navSlidePossibilitiesText": "Olasılıklar",
        "navSlideWhySerbiaText": "Neden SIRBISTAN?",
        "navSlideOfferText": "Teklifimiz",
        "navSlideContactText": "İletişim",
        "navSlidePartnersText": "Ortaklar",

        "aboutUs1": "Merkezi Belgrad / Sırbistan'da bulunan ",
        "aboutUs15": "<span class=\"text-font-kojami\">KOJAMI</span> International Consulting",
        "aboutUs2":
            "maliyetli iş süreçleri için karlı çözümler bulma ve onları daha verimli ve başarılı kılma konusunda dünyanın her yerinden müşterileri destekleme hedefini belirlemiştir.",

        "possibilitiesHead": "Seçenekleriniz",
        "possibilitiesSub": "İş süreçlerinin Sırbistan'a dış kaynak kullanımı, örneğin:",
        "mobileTile1": "<span class=\"text-font-kojami\">KOJAMI</span> ile KOBİ'ler (küçük ve orta Ölçekli işletmeler) için üretim ortaklığı",
        "mobileTile2": "KOBİ'ler için parça üretimi",
        "mobileTile3": "KOBİ'ler için komple montaj üretimi",
        "mobileTile4": "İştiraklerin ipucu",
        "mobileTile5": "Yerel şirketlerle ortak girişim",
        "mobileTile6": "AB / ABD standartlarına göre faturalandırma",
        "desktopTile1": "<span class=\"text-font-kojami\">KOJAMI</span> ile KOBİ'ler (küçük ve orta Ölçekli işletmeler) için üretim ortaklığı",
        "desktopTile2": "KOBİ'ler için parça üretimi",
        "desktopTile3": "KOBİ'ler için komple montaj üretimi",
        "desktopTile4": "İştiraklerin ipucu",
        "desktopTile5": "Yerel şirketlerle ortak girişim",
        "desktopTile6": "AB / ABD standartlarına göre faturalandırma",

        "whySerbText": "Neden SIRBISTAN?",
        "location": "yer",
        "location1":
            "Sırbistan'ın uygun coğrafi konumu  müşterilerinize yakınlık sunar. İyi geliştirilmiş nakliye ve lojistik altyapısı, çoğu AB pazarına 24 saatten daha kısa sürede hizmet vermelerini sağlar.",
        "location2": "Bu nedenle <span class=\"text-font-kojami\">KOJAMI</span>, rekabet gücünüzü küresel düzeyde önemli ölçüde geliştirme fırsatı sunar.",
        "freeTrade": "Serbest Ticaret Anlaşması",
        "freeTrade1":
            "Sırbistan, Karadeniz Ekonomik İşbirliği ve Orta Avrupa Serbest Ticaret Anlaşması (CEFTA) üyesidir. Sırbistan, BDT dışında hem Rusya hem de Avrasya Ekonomik Birliği (EAEU) ile serbest ticaret anlaşması olan tek Avrupa ülkesidir.",
        "freeTrade2":
            "Diğer bazı serbest ticaret anlaşmaları şu anda Kazakistan, Beyaz Rusya ve Türkiye ile ve ayrıca Avrupa Serbest Ticaret Birliği ile yürürlüktedir. Bu, Sırp ekonomisinin piyasalarını büyük ölçüde liberalleştirilmiş koşullar altında toplam yaklaşık 1,1 milyar insana açar.",

        "offerHead": "Teklifimiz",
        "offerLine1": "We check your cost saving potentials",
        "offerText1":
            "Yapilacak analize, aynı kalite düzeyinde, Sırbistan'da ortaya çıkacak maliyetlerle karşılaştırmada dahildir. Bu size Sırbistan'da yada Sırbistan'a , üretim yada dış kaynak sağlama kararınız için ticari bir temel sağlar.",
        "offerPhase1": "1.Aşama : Müşterinin yerinde maliyet analizi",
        "offerPhase2": "2. Aşama: Sırbistan'daki maliyetlerin karşılaştırılması",
        "offerLin2": "Uygulama yönetimi",
        "offerText2":
            "Projenizin uygulanmasında size yoğun destek sağliyoruz , Sizinle yakın bir  işbirliği içinde, uygulama süreci için  hedefleri ve kesin çerçeveyi belirliyoruz.",
        "offerPhase3": "3. Aşama: Doğrulama ve uygulama yönetimi",
        "offerText3":
            "Bu noktada, ya sizin için kısmi görevler üstleniyoruz ya da ; Sırbistan'da bir lokasyon bulmaktan, üretimi kurmaya, işe almaya ve gerekli izinleri almaya kadar dış kaynak kullanımının tüm uygulamalarını üstleniyoruz.",

        "arrowText1": "Proje hedeflerinin doğrulanması",
        "arrow1point1": "Sorumlu kişilerle konsept aşamasında kalitatif ve kantitatif olarak calisma",
        "arrow1point2": "Hedeflere bağlılık",
        "arrowText2": "Uygulama koordinasyonu",
        "arrow2point1": "Ölçülerin tanımı",
        "arrow2point2": "Program ve gereksinimler",
        "arrow2point3": "Nitel, nicel hedefler; sorumluluklar",
        "arrow2point4": "Taahhüt",
        "arrowText3": "Uygulama hedeflerinin <span class=\"text-font-kojami text-3xl\">KOJAMI</span>'ye aktarılması",
        "arrow3point1": "Önlemler ve görev paketleri",
        "arrow3point2": "Gerekli Zaman",
        "arrow3point3": "Kalite hedefleri",
        "arrow3point4": "Sonuçlar",
        "arrow3point5": "Sonuçlarin KOJAMI tarafından uygulama ilerlemesinin dokümantasyonu",
        "arrowText4": "müşteriye gerçek zamanlı bilgi",
        "arrow4point1": "Durum uygulaması",
        "arrow4point2": "Proje maliyetleri",
        "arrow4point3": "Jour – Fixes in operasyonel kontrolü",
        "arrow4point4": "Mali hedef başarısının doğrulanması",
        "arrowText5": "Süreç kontrolü",
        "arrow5point1": "Tutarlı uygulama  kontrolü",
        "arrow5point2": "Sonuçların dokümantasyonu",

        "contactHead": "İletişim",
        "contact1": "İlginizi çektiysek, <span class=\"text-font-kojami text-3xl\">KOJAMI</span>'nin hizmetlerinin kapsamı hakkında daha fazla bilgi almak için bizimle iletişime geçmekten çekinmeyin.",
        "contact2": "Tüm sorularınızı yanıtlamaktan mutluluk duyarız ve şirketimizle çalışmanın belirli avantajları hakkında kişisel bir sunum için her zaman hazırız.",
        "contactCard1Line1": "Almanya | Avusturya",
        "contactCard1Line2": "İsviçre",
        "contactCard2Line1": "Çin | Japonya",
        "contactCard2Line2": "Singapur",
        "contactCard3": "Pazarlama",
        "contactCard4": "Ofis",
        "partnerHead": "Ortaklar",
        "imprint1": "Künye",
        "imprint2": "Gizlilik Politikası",
    },
    "ar":{
        "navHomeText": "الصفحة الرئيسية",
        "navAboutUsText": "من نحن",
        "navPossibilitiesText": "الاحتمالات",
        "navWhySerbiaText": "لماذا صربيا؟",
        "navOfferText": "عرضنا لك",
        "navContactText": "اتصل بنا",
        "navPartnersText": "شركاء",
        "navSlideHomeText": "الصفحة الرئيسية",
        "navSlideAboutUsText": "من نحن",
        "navSlidePossibilitiesText": "الاحتمالات",
        "navSlideWhySerbiaText": "لماذا صربيا؟",
        "navSlideOfferText": "عرضنا لك",
        "navSlideContactText": "اتصل بنا",
        "navSlidePartnersText": "شركاء",

        "aboutUs1": "<span class=\"text-font-kojami\">KOJAMI</span> International Consulting",
        "aboutUs15": "",
        "aboutUs2":
            "وضعت ومقرها بلغراد / صربيا ، هدفًا يتمثل في دعم العملاء من جميع أنحاء العالم في إيجاد حلول مربحة .لعملياتهم التجارية كثيفة التكلفة وجعلها أكثر كفاءة ونجاحًا",

        "possibilitiesHead": "الاحتمالات",
        "possibilitiesSub": "تعهيد العمليات التجارية إلى صربيا",
        "mobileTile1": "شراكة التصنيع للشركات الصغيرة والمتوسطة (الشركات الصغيرة والمتوسطة) مع<span class=\"text-font-kojami\">KOJAMI</span>",
        "mobileTile2": "إنتاج قطع الغيار للشركات الصغيرة والمتوسطة ",
        "mobileTile3": "استكمال إنتاج التجميعات للشركات الصغيرة والمتوسطة ",
        "mobileTile4": "تأسيس الشركات التابعة ",
        "mobileTile5": "مشروع مشترك مع شركات محلية ",
        "mobileTile6": "المحاسبة وفقًا لمعايير الاتحاد الأوروبي / الولايات المتحدة",
        "desktopTile1": "شراكة التصنيع للشركات الصغيرة والمتوسطة (الشركات الصغيرة والمتوسطة) مع<span class=\"text-font-kojami\">KOJAMI</span>",
        "desktopTile2": "إنتاج قطع الغيار للشركات الصغيرة والمتوسطة ",
        "desktopTile3": "استكمال إنتاج التجميعات للشركات الصغيرة والمتوسطة ",
        "desktopTile4": "تأسيس الشركات التابعة ",
        "desktopTile5": "مشروع مشترك مع شركات محلية ",
        "desktopTile6": "المحاسبة وفقًا لمعايير الاتحاد الأوروبي / الولايات المتحدة",

        "whySerbText": "لماذا صربيا؟",
        "location": "موقعك",
        "location1": " يوفر لك الموقع الجغرافي الأمثل لصربيا القرب من عملائك." +
            "تمكنهم البنية التحتية المتطورة للنقل والخدمات اللوجستية من خدمة معظم أسواق الاتحاد الأوروبي في أقل من 24 ساعة.",
        "location2": "KOJAMI وبالتالي، تقدم" +
            "الفرصة لتحسين قدرتك التنافسية بشكل كبير على المستوى العالمي.",
        "freeTrade": "اتفاقية التجارة الحرة",
        "freeTrade1":" صربيا عضو في التعاون الاقتصادي للبحر الأسود واتفاقية التجارة الحرة لأوروبا الوسطى (CEFTA)" +
            ". صربيا هي الدولة الأوروبية الوحيدة خارج رابطة الدول المستقلة التي لديها اتفاقية تجارة حرة مع كل من روسيا " +
            "والاتحاد الاقتصادي الأوراسي (EAEU)" +
            ". العديد من اتفاقيات التجارة الحرة الأخرى سارية المفعول حاليًا مع كازاخستان وبيلاروسيا وتركيا ، وكذلك مع رابطة " +
            "التجارة الحرة الأوروبية",
        "freeTrade2":
            "سيؤدي هذا إلى فتح أسواق الاقتصاد الصربي في ظل ظروف متحررة إلى حد كبير لما مجموعه حوالي 1.1 تريليون ",

        "offerHead": "عرضنا لك",
        "offerLine1": "نتحقق من إمكانية توفير التكلفة لديك",
        "offerText1":
            "بعد أن تقرر مراجعة إمكانات التوفير في التكاليف ، يمكنك أولاً تكليفنا بتطوير تحليل تكلفة منتجك أو عملية لحالتك المحددة. يتضمن التحليل مقارنة بالتكاليف التي ستنشأ في صربيا ، بالطبع بنفس مستوى الجودة. يمنحك هذا أساسًا تجاريًا لقرارك بالإنتاج / الاستعانة بمصادر خارجيةفي / إلى صربيا.",
        "offerPhase1":  "المرحلة الأولى: تحليل التكلفة في موقع العميل.",
        "offerPhase2": " المرحلة 2: مقارنة التكاليف في صربيا.",
        "offerLin2": "إدارة التنفيذ",
        "offerText2":
            "سنوفر لك بعد ذلك دعمًا مكثفًا في تنفيذ مشروعك. بالتعاون الوثيق معك ، نضع الأهداف المحددة والإطار الدقيق لعملية التنفيذ. ",
        "offerPhase3": "المرحلة الثالثة: إدارة المصادقة والتنفيذ",
        "offerText3":
            " إما أن نتولى مهام جزئية نيابة عنك أو التنفيذ الكامل للاستعانة بمصادر خارجية ، بدءًا من العثور على موقع وإنشاء الإنتاج وحتى التوظيف والحصول على التصاريح اللازمة في صربيا.",

        "arrowText1": "التحقق من صحة أهداف المشروع",
        "arrow1point1": "نوعيًا وكميًا في مرحلة المفهوم مع المسؤولين",
        "arrow1point2": "الالتزام بالأهداف",
        "arrowText2": "تنسيق التنفيذ",
        "arrow2point1": "تعريف الإجراءات.",
        "arrow2point2": "الجدول الزمني والمتطلبات.",
        "arrow2point3": "الأهداف والمسؤوليات النوعية والكمية.",
        "arrow2point4": "التزام.",
        "arrowText3": "نقل أهداف التنفيذ إلى <span class=\"text-font-kojami text-3xl\">KOJAMI</span>",
        "arrow3point1": "الإجراءات وحزم المهام",
        "arrow3point2": "الوقت اللازم",
        "arrow3point3": "أهداف الجودة.",
        "arrow3point4": "النتائج.",
        "arrow3point5": "توثيق التقدم المحرز في التنفيذ من قبل  KOJAMI",
        "arrowText4": "معلومات \"الوقت الحقيقي\" للعميل",
        "arrow4point1": "حالة التنفيذ",
        "arrow4point2": "تكاليف المشروع.",
        "arrow4point3": "اجتماعات ومناقشات منتظمة.",
        "arrow4point4": "التحقق من تحقيق الهدف المالي",
        "arrowText5": "مراقبة",
        "arrow5point1": "التحكم المتسق في التنفيذ.",
        "arrow5point2": "توثيق النتائج.",

        "contactHead": "اتصل بنا",
        "contact1": "إذا أثار اهتمامك " +
            "فالرجاء عدم التردد في الاتصال بنا للحصول على مزيد من المعلومات حول نطاق خدمات" +
            ". <span class=\"text-font-kojami text-3xl\">KOJAMI</span>’s scope of services.",
        "contact2": "يسعدنا الرد على جميع أسئلتك ونكون دائمًا متاحين لتقديم عرض شخصي حول المزايا المحددة للعمل مع شركتنا",
        "contactCard1Line1": "ألمانيا | النمسا",
        "contactCard1Line2": "سويسرا",
        "contactCard2Line1": "الصين | اليابان",
        "contactCard2Line2": "سنغافورة",
        "contactCard3": "تسويق",
        "contactCard4": "مكتب. مقر. مركز",
        "partnerHead": "شركاء",
        "imprint1": "بصمة",
        "imprint2": "سياسة خاصة",
    },
}


function trans (lang) {
    if (lang === "en") {
        switchImages("en")
        for (i = 0; i < languageIds.length; i++) {
            $("#" + languageIds[i]).html(dictionary.en[languageIds[i]])
        }
    }
    if (lang === "de") {
        switchImages("de")
        for (i = 0; i < languageIds.length; i++) {
            $("#" + languageIds[i]).html(dictionary.de[languageIds[i]])
        }
    }
    if (lang === "cn") {
        switchImages("cn")
        for (i = 0; i < languageIds.length; i++) {
            $("#" + languageIds[i]).html(dictionary.cn[languageIds[i]])
        }
    }
    if (lang === "ru") {
        switchImages("ru")
        for (i = 0; i < languageIds.length; i++) {
            $("#" + languageIds[i]).html(dictionary.ru[languageIds[i]])
        }
    }
    if (lang === "rs") {
        switchImages("rs")
        for (i = 0; i < languageIds.length; i++) {
            $("#" + languageIds[i]).html(dictionary.rs[languageIds[i]])
        }
    }
    if (lang === "ir") {
        switchImages("ir")
        for (i = 0; i < languageIds.length; i++) {
            $("#" + languageIds[i]).html(dictionary.ir[languageIds[i]])
        }
    }
    if (lang === "tr") {
        switchImages("tr")
        for (i = 0; i < languageIds.length; i++) {
            $("#" + languageIds[i]).html(dictionary.tr[languageIds[i]])
        }
    }
    if (lang === "ar") {
        switchImages("ar")
        for (i = 0; i < languageIds.length; i++) {
            $("#" + languageIds[i]).html(dictionary.ar[languageIds[i]])
        }
    }
}

function switchImages(lang){
    packupLangs()
    if(lang === "cn"){
        for (i = 0; i <= oldLanguageIds.length; i++){
            $("#"+oldLanguageIds[i]+"De").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[i]+"Ru").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[i]+"En").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[i]+"Ir").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[i]+"Rs").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[i]+"Cn").addClass("block").removeClass("hidden")
            $("#"+oldLanguageIds[i]+"Tr").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[i]+"Ar").addClass("hidden").removeClass("block")
        }
    }
    if(lang === "de"){
        for (id = 0; id <= oldLanguageIds.length; id++){
            $("#"+oldLanguageIds[id]+"Cn").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[id]+"Ru").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[id]+"En").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[id]+"Ir").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[id]+"Rs").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[id]+"De").addClass("block").removeClass("hidden")
            $("#"+oldLanguageIds[id]+"Tr").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[id]+"Ar").addClass("hidden").removeClass("block")
        }
    }
    if(lang === "en"){
        for (ic = 0; ic <= oldLanguageIds.length; ic++){
            $("#"+oldLanguageIds[ic]+"Cn").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[ic]+"De").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[ic]+"Ru").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[ic]+"Ir").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[ic]+"Rs").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[ic]+"En").addClass("block").removeClass("hidden")
            $("#"+oldLanguageIds[ic]+"Tr").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[ic]+"Ar").addClass("hidden").removeClass("block")
        }
    }
    if(lang === "rs"){
        for (is = 0; is <= oldLanguageIds.length; is++){
            $("#"+oldLanguageIds[is]+"Cn").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[is]+"De").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[is]+"En").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[is]+"Ir").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[is]+"Ru").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[is]+"Rs").addClass("block").removeClass("hidden")
            $("#"+oldLanguageIds[is]+"Tr").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[is]+"Ar").addClass("hidden").removeClass("block")
        }
    }
    if(lang === "ru"){
        for (ir = 0; ir <= oldLanguageIds.length; ir++){
            $("#"+oldLanguageIds[ir]+"Cn").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[ir]+"De").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[ir]+"En").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[ir]+"Ir").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[ir]+"Rs").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[ir]+"Ru").addClass("block").removeClass("hidden")
            $("#"+oldLanguageIds[ir]+"Tr").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[ir]+"Ar").addClass("hidden").removeClass("block")
        }
    }
    if(lang === "ir"){
        for (ii = 0; ii <= oldLanguageIds.length; ii++){
            $("#"+oldLanguageIds[ii]+"Cn").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[ii]+"De").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[ii]+"En").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[ii]+"Ru").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[ii]+"Rs").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[ii]+"Ir").addClass("block").removeClass("hidden")
            $("#"+oldLanguageIds[ii]+"Tr").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[ii]+"Ar").addClass("hidden").removeClass("block")
        }
    }
    if(lang === "tr"){
        for (ii = 0; ii <= oldLanguageIds.length; ii++){
            $("#"+oldLanguageIds[ii]+"Cn").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[ii]+"De").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[ii]+"En").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[ii]+"Ru").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[ii]+"Rs").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[ii]+"Tr").addClass("block").removeClass("hidden")
            $("#"+oldLanguageIds[ii]+"Ir").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[ii]+"Ar").addClass("hidden").removeClass("block")
        }
    }
    if(lang === "ar"){
        for (ii = 0; ii <= oldLanguageIds.length; ii++){
            $("#"+oldLanguageIds[ii]+"Cn").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[ii]+"De").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[ii]+"En").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[ii]+"Ru").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[ii]+"Rs").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[ii]+"Ar").addClass("block").removeClass("hidden")
            $("#"+oldLanguageIds[ii]+"Tr").addClass("hidden").removeClass("block")
            $("#"+oldLanguageIds[ii]+"Ir").addClass("hidden").removeClass("block")
        }
    }
}