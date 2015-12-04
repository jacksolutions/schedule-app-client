angular.module('parse-starter.factories')
.factory('classData',function(){
  var classes = [{"id":2172,"class_id":41173,"instructor":"Terrance Moore","section_id":"001                 ","section_type":"LEC                 ","meeting_time":"01/19/2016 - 05/06/2016","start_time":"19:00:00","end_time":"20:20:00","location":"WH  311","course_id":678,"dates":["Tu","Th"]},{"id":2173,"class_id":24892,"instructor":"Vassilis Athitsos","section_id":"003                 ","section_type":"LEC                 ","meeting_time":"01/19/2016 - 05/06/2016","start_time":"19:30:00","end_time":"20:50:00","location":"TBA","course_id":678,"dates":["Tu","Th"]},{"id":2174,"class_id":41236,"instructor":"Alexandra Stefan","section_id":"004                 ","section_type":"LEC                 ","meeting_time":"01/19/2016 - 05/06/2016","start_time":"09:30:00","end_time":"10:50:00","location":"TBA","course_id":678,"dates":["Tu","Th"]},{"id":2175,"class_id":43187,"instructor":"Janice Carter M Tiernan","section_id":"005                 ","section_type":"LEC                 ","meeting_time":"01/19/2016 - 05/06/2016","start_time":"15:30:00","end_time":"16:50:00","location":"TBA","course_id":678,"dates":["Tu","Th"]}];

return {
  getAll: function(){
    return classes;
  }
}

})

// .factory('blockTime',fucntion(){
// })
.factory('Course',function(_){

  var courses = {
    'CSE':[{"course_id":"CSE 1105","course_title":" INTRODUCTION TO COMPUTER SCIENCE AND ENGINEERING "},{"course_id":"CSE 1301","course_title":" COMPUTER LITERACY "},{"course_id":"CSE 1310","course_title":" INTRODUCTION TO COMPUTERS & PROGRAMMING "},{"course_id":"CSE 1311","course_title":" INTRODUCTION TO PROGRAMMING FOR ENGINEERS "},{"course_id":"CSE 1320","course_title":" INTERMEDIATE PROGRAMMING "},{"course_id":"CSE 1325","course_title":""},{"course_id":"CSE 2312","course_title":" COMPUTER ORGANIZATION & ASSEMBLY LANGUAGE PROGRAMMING "},{"course_id":"CSE 2315","course_title":" DISCRETE STRUCTURES "},{"course_id":"CSE 2320","course_title":" ALGORITHMS & DATA STRUCTURES "},{"course_id":"CSE 2441","course_title":" INTRODUCTION TO DIGITAL LOGIC "},{"course_id":"CSE 3310","course_title":" FUNDAMENTALS OF SOFTWARE ENGINEERING "},{"course_id":"CSE 3311","course_title":""},{"course_id":"CSE 3313","course_title":" INTRODUCTION TO SIGNAL PROCESSING "},{"course_id":"CSE 3315","course_title":" THEORETICAL CONCEPTS IN COMPUTER SCIENCE AND ENGINEERING "},{"course_id":"CSE 3320","course_title":" OPERATING SYSTEMS "},{"course_id":"CSE 3323","course_title":" ELECTRONICS FOR COMPUTER ENGINEERING "},{"course_id":"CSE 3330","course_title":" DATABASE SYSTEMS AND FILE STRUCTURES "},{"course_id":"CSE 3380","course_title":" LINEAR ALGEBRA FOR CSE "},{"course_id":"CSE 3442","course_title":" EMBEDDED SYSTEMS I "},{"course_id":"CSE 4191","course_title":" INDIVIDUAL PROJECTS "},{"course_id":"CSE 4303","course_title":" COMPUTER GRAPHICS "},{"course_id":"CSE 4305","course_title":" COMPILERS FOR ALGORITHMIC LANGUAGES "},{"course_id":"CSE 4314","course_title":" PROFESSIONAL PRACTICES "},{"course_id":"CSE 4316","course_title":" COMPUTER SYSTEM DESIGN PROJECT I "},{"course_id":"CSE 4317","course_title":" COMPUTER SYSTEM DESIGN PROJECT II "},{"course_id":"CSE 4321","course_title":" SOFTWARE TESTING & MAINTENANCE "},{"course_id":"CSE 4351","course_title":" PARALLEL PROCESSING "},{"course_id":"CSE 4361","course_title":" SOFTWARE DESIGN PATTERNS "},{"course_id":"CSE 4379","course_title":" UNMANNED VEHICLE SYSTEM DEVELOPMENT "},{"course_id":"CSE 4391","course_title":" INDIVIDUAL PROJECTS "},{"course_id":"CSE 4392","course_title":" SPECIAL TOPICS "},{"course_id":"CSE 5191","course_title":" INDIVIDUAL STUDY IN COMPUTER SCIENCE "},{"course_id":"CSE 5194","course_title":" ORIENTATION SEMINAR "},{"course_id":"CSE 5311","course_title":" DESIGN AND ANALYSIS OF ALGORITHMS "},{"course_id":"CSE 5317","course_title":" DESIGN AND CONSTRUCTION OF COMPILERS "},{"course_id":"CSE 5321","course_title":" SOFTWARE TESTING "},{"course_id":"CSE 5325","course_title":" SOFTWARE ENGINEERING: MANAGEMENT, MAINTENANCE, AND QUALITY ASSURANCE "},{"course_id":"CSE 5328","course_title":" SOFTWARE ENGINEERING TEAM PROJECT I "},{"course_id":"CSE 5329","course_title":" SOFTWARE ENGINEERING TEAM PROJECT II "},{"course_id":"CSE 5331","course_title":" DBMS MODELS AND IMPLEMENTATION TECHNIQUES "},{"course_id":"CSE 5343","course_title":""},{"course_id":"CSE 5369","course_title":" SPECIAL TOPICS IN INTELLIGENT SYSTEMS "},{"course_id":"CSE 5384","course_title":" UNMANNED VEHICLE SYSTEM DEVELOPMENT "},{"course_id":"CSE 5393","course_title":" DIRECTED STUDY IN COMPUTER SCIENCE "},{"course_id":"CSE 5398","course_title":" MASTERS THESIS I "},{"course_id":"CSE 5698","course_title":" MASTERS THESIS II "},{"course_id":"CSE 6197","course_title":" RESEARCH IN COMPUTER SCIENCE "},{"course_id":"CSE 6297","course_title":" RESEARCH IN COMPUTER SCIENCE "},{"course_id":"CSE 6329","course_title":" SPECIAL TOPICS IN ADVANCED SOFTWARE ENGINEERING "},{"course_id":"CSE 6331","course_title":" ADVANCED TOPICS IN DATABASE SYSTEMS "},{"course_id":"CSE 6388","course_title":" SPECIAL TOPICS IN ADVANCED INFORMATION SECURITY "},{"course_id":"CSE 6389","course_title":" SPECIAL TOPICS IN ADVANCED MULTIMEDIA, GRAPHICS, & IMAGE PROCESSING "},{"course_id":"CSE 6392","course_title":" SPECIAL TOPICS IN ADVANCED COMPUTER SCIENCE "},{"course_id":"CSE 6397","course_title":" RESEARCH IN COMPUTER SCIENCE "},{"course_id":"CSE 6399","course_title":" DISSERTATION "},{"course_id":"CSE 6697","course_title":" RESEARCH IN COMPUTER SCIENCE "},{"course_id":"CSE 6699","course_title":" DISSERTATION "},{"course_id":"CSE 6997","course_title":" RESEARCH IN COMPUTER SCIENCE "},{"course_id":"CSE 6999","course_title":" DISSERTATION "}],
    'MATH':[{"course_id":"MATH 0311","course_title":" FOUNDATIONS FOR CONTEMPORARY MATHEMATICS "},{"course_id":"MATH 0312","course_title":" FOUNDATIONS FOR ALGEBRA "},{"course_id":"MATH 1301","course_title":" CONTEMPORARY MATHEMATICS "},{"course_id":"MATH 1302","course_title":" COLLEGE ALGEBRA "},{"course_id":"MATH 1303","course_title":" TRIGONOMETRY "},{"course_id":"MATH 1308","course_title":" ELEMENTARY STATISTICAL ANALYSIS "},{"course_id":"MATH 1315","course_title":" COLLEGE ALGEBRA FOR ECONOMICS & BUSINESS ANALYSIS "},{"course_id":"MATH 1316","course_title":" MATHEMATICS FOR ECONOMICS AND BUSINESS ANALYSIS "},{"course_id":"MATH 1325","course_title":" ANALYTIC GEOMETRY "},{"course_id":"MATH 1327","course_title":" ARCHITECTURAL CALCULUS "},{"course_id":"MATH 1330","course_title":" ARITHMETICAL PROBLEM SOLVING "},{"course_id":"MATH 1331","course_title":" GEOMETRICAL INFERENCE AND REASONING "},{"course_id":"MATH 1421","course_title":" PREPARATION FOR CALCULUS "},{"course_id":"MATH 1426","course_title":" CALCULUS I "},{"course_id":"MATH 2326","course_title":" CALCULUS III "},{"course_id":"MATH 2425","course_title":" CALCULUS II "},{"course_id":"MATH 3300","course_title":" INTRODUCTION TO PROOFS "},{"course_id":"MATH 3301","course_title":" FOUNDATIONS OF GEOMETRY "},{"course_id":"MATH 3302","course_title":" MULTIVARIATE STATISTICAL METHODS "},{"course_id":"MATH 3303","course_title":" MATHEMATICAL GAME THEORY "},{"course_id":"MATH 3307","course_title":" ELEMENTARY NUMBER THEORY "},{"course_id":"MATH 3314","course_title":" DISCRETE MATHEMATICS "},{"course_id":"MATH 3315","course_title":" MATHEMATICAL MODELS "},{"course_id":"MATH 3318","course_title":" DIFFERENTIAL EQUATIONS "},{"course_id":"MATH 3319","course_title":" DIFFERENTIAL EQUATIONS & LINEAR ALGEBRA "},{"course_id":"MATH 3321","course_title":" ABSTRACT ALGEBRA I "},{"course_id":"MATH 3330","course_title":" INTRODUCTION TO MATRICES AND LINEAR ALGEBRA "},{"course_id":"MATH 3335","course_title":" ANALYSIS I "},{"course_id":"MATH 4150","course_title":" SEMINAR IN MATHEMATICAL BIOLOGY "},{"course_id":"MATH 4311","course_title":" STOCHASTIC MODELS AND SIMULATION "},{"course_id":"MATH 4313","course_title":" APPLICATIONS OF MATHEMATICAL STATISTICS "},{"course_id":"MATH 4314","course_title":" ADVANCED DISCRETE MATHEMATICS "},{"course_id":"MATH 4321","course_title":" ABSTRACT ALGEBRA II "},{"course_id":"MATH 4324","course_title":" INTRODUCTION TO PARTIAL DIFFERENTIAL EQUATIONS "},{"course_id":"MATH 4335","course_title":" ANALYSIS II "},{"course_id":"MATH 4345","course_title":" NUMERICAL ANALYSIS & COMPUTER APPLICATIONS II "},{"course_id":"MATH 4351","course_title":""},{"course_id":"MATH 4391","course_title":" SPECIAL TOPICS IN MATHEMATICS "},{"course_id":"MATH 4393","course_title":" HONORS THESIS/SENIOR PROJECT "},{"course_id":"MATH 5300","course_title":" INTRODUCTION TO SCIENTIFIC COMPUTING "},{"course_id":"MATH 5308","course_title":" MATHEMATICAL ANALYSIS II "},{"course_id":"MATH 5310","course_title":" MATHEMATICAL GAME THEORY "},{"course_id":"MATH 5311","course_title":" APPLIED PROBABILITY AND STOCHASTIC PROCESSES "},{"course_id":"MATH 5313","course_title":" MATHEMATICAL STATISTICS II "},{"course_id":"MATH 5321","course_title":" APPLIED PARTIAL DIFFERENTIAL EQUATIONS "},{"course_id":"MATH 5322","course_title":" COMPLEX VARIABLES I "},{"course_id":"MATH 5329","course_title":" HOMOLOGICAL ALGEBRA "},{"course_id":"MATH 5331","course_title":" ABSTRACT ALGEBRA I "},{"course_id":"MATH 5339","course_title":" NUMERICAL ANALYSIS II "},{"course_id":"MATH 5341","course_title":" CONCEPTS AND TECHNIQUES IN GEOMETRY "},{"course_id":"MATH 5354","course_title":" CATEGORICAL DATA ANALYSIS "},{"course_id":"MATH 5355","course_title":" STATISTICAL THEORY FOR RESEARCH WORKERS "},{"course_id":"MATH 5356","course_title":" APPLIED MULTIVARIATE STATISTICAL ANALYSIS "},{"course_id":"MATH 5358","course_title":" REGRESSION ANALYSIS "},{"course_id":"MATH 5378","course_title":""},{"course_id":"MATH 5391","course_title":" SPECIAL TOPICS IN MATHEMATICS "},{"course_id":"MATH 5392","course_title":" SELECTED TOPICS IN MATHEMATICS "},{"course_id":"MATH 5395","course_title":" SPECIAL PROJECT "},{"course_id":"MATH 5398","course_title":" THESIS "},{"course_id":"MATH 5399","course_title":" RESEARCH IN MATHEMATICS "},{"course_id":"MATH 5698","course_title":" THESIS "},{"course_id":"MATH 5699","course_title":" RESEARCH IN MATHEMATICS "},{"course_id":"MATH 5999","course_title":" RESEARCH IN MATHEMATICS "},{"course_id":"MATH 6353","course_title":" GENERALIZED LINEAR MODELS "},{"course_id":"MATH 6357","course_title":" NONPARAMETRIC STATISTICS "},{"course_id":"MATH 6391","course_title":" SPECIAL TOPICS IN MATHEMATICS "},{"course_id":"MATH 6399","course_title":" DISSERTATION "},{"course_id":"MATH 6699","course_title":" DISSERTATION "},{"course_id":"MATH 6999","course_title":" DISSERTATION "},{"course_id":"MATH 7399","course_title":" DOCTORAL DEGREE COMPLETION "}],
    'ECON': [{"course_id":"ECON 2305","course_title":" PRINCIPLES OF MACROECONOMICS "},{"course_id":"ECON 2306","course_title":" PRINCIPLES OF MICROECONOMICS "},{"course_id":"ECON 2337","course_title":" ECONOMICS OF SOCIAL ISSUES "},{"course_id":"ECON 3301","course_title":" THE ECONOMICS OF HEALTH "},{"course_id":"ECON 3302","course_title":" THE ECONOMICS OF CRIME "},{"course_id":"ECON 3303","course_title":" MONEY AND BANKING "},{"course_id":"ECON 3305","course_title":" LAWS AND ECONOMICS "},{"course_id":"ECON 3310","course_title":" MICROECONOMICS "},{"course_id":"ECON 3312","course_title":" MACROECONOMICS "},{"course_id":"ECON 3318","course_title":" INTRODUCTION TO ECONOMETRICS "},{"course_id":"ECON 3328","course_title":" PRINCIPLES OF TRANSPORTATION "},{"course_id":"ECON 3335","course_title":" ECONOMICS OF PUBLIC POLICIES "},{"course_id":"ECON 4306","course_title":" COMPARATIVE ECONOMIC SYSTEMS "},{"course_id":"ECON 4311","course_title":" ECONOMICS FOR MANAGERS "},{"course_id":"ECON 4321","course_title":" INTERNATIONAL TRADE "},{"course_id":"ECON 4325","course_title":" ECONOMIC FORECASTING "},{"course_id":"ECON 4330","course_title":" HUMAN RESOURCE ECONOMICS "},{"course_id":"ECON 4393","course_title":" ECONOMICS INTERNSHIP "},{"course_id":"ECON 5311","course_title":" ECONOMIC ANALYSIS "},{"course_id":"ECON 5313","course_title":" MANAGERIAL ECONOMICS "},{"course_id":"ECON 5315","course_title":" COMPETITION, INNOVATION, AND STRATEGY "},{"course_id":"ECON 5327","course_title":" MONETARY POLICY AND FINANCIAL SYSTEM ANALYSIS "},{"course_id":"ECON 5330","course_title":" HUMAN RESOURCE ECONOMICS "},{"course_id":"ECON 5333","course_title":" ECONOMICS OF HEALTH "},{"course_id":"ECON 5337","course_title":" BUSINESS & ECONOMIC FORECASTING "},{"course_id":"ECON 5339","course_title":" APPLIED BUSINESS AND ECONOMICS DATA ANALYSIS II "}],
    'ART': [{"course_id":"ART 1301","course_title":" ART APPRECIATION "},{"course_id":"ART 1305","course_title":""},{"course_id":"ART 1306","course_title":""},{"course_id":"ART 1307","course_title":" DRAWING FUNDAMENTALS "},{"course_id":"ART 1309","course_title":" ART OF THE WESTERN WORLD I: GREECE THROUGH RENAISSANCE "},{"course_id":"ART 1310","course_title":" ART OF THE WESTERN WORLD II: BAROQUE TO MODERN "},{"course_id":"ART 1317","course_title":" THE ART OF NONWESTERN TRADITIONS "},{"course_id":"ART 2300","course_title":" METHODS FOR THE STUDY OF ART HISTORY "},{"course_id":"ART 2304","course_title":" DIGITAL DESIGN "},{"course_id":"ART 2308","course_title":" DRAWING CONCEPTS "},{"course_id":"ART 2342","course_title":" GLASSBLOWING "},{"course_id":"ART 2353","course_title":" VISUAL COMMUNICATION FOUNDATION "},{"course_id":"ART 2354","course_title":" TYPOGRAPHY "},{"course_id":"ART 2355","course_title":" LAYOUT "},{"course_id":"ART 2358","course_title":" INTRODUCTION TO FILM/VIDEO "},{"course_id":"ART 2359","course_title":" INTRODUCTION TO PHOTOGRAPHY "},{"course_id":"ART 2360","course_title":" INTRODUCTION TO PHOTOGRAPHIC CONCEPTS "},{"course_id":"ART 2371","course_title":" PAINTING "},{"course_id":"ART 3310","course_title":" FILM AS ART "},{"course_id":"ART 3311","course_title":" AMERICAN ART "},{"course_id":"ART 3314","course_title":" MODERN ART "},{"course_id":"ART 3321","course_title":" CHINESE ART & ARCHITECTURE "},{"course_id":"ART 3340","course_title":" KILN FORMED GLASS "},{"course_id":"ART 3341","course_title":" SCULPTURE "},{"course_id":"ART 3342","course_title":" INTERMEDIATE GLASSBLOWING "},{"course_id":"ART 3343","course_title":" PRINTMAKING "},{"course_id":"ART 3347","course_title":" ADVANCED DRAWING "},{"course_id":"ART 3348","course_title":" LIFE DRAWING "},{"course_id":"ART 3350","course_title":" INTRODUCTION TO NARRATIVE SCREENWRITING "},{"course_id":"ART 3351","course_title":" ILLUSTRATION "},{"course_id":"ART 3352","course_title":" DIGITAL IMAGING "},{"course_id":"ART 3354","course_title":" SIGN AND SYMBOL "},{"course_id":"ART 3355","course_title":" ADVANCED TYPOGRAPHY "},{"course_id":"ART 3356","course_title":" WEB TYPOGRAPHY "},{"course_id":"ART 3358","course_title":" INTERMEDIATE FILM/VIDEO "},{"course_id":"ART 3359","course_title":" APPLYING AND TEACHING ART CURRICULA "},{"course_id":"ART 3360","course_title":" INTERMEDIATE PHOTOGRAPHY "},{"course_id":"ART 3363","course_title":" CLAY "},{"course_id":"ART 3371","course_title":" INTERMEDIATE PAINTING "},{"course_id":"ART 3384","course_title":" CINEMATOGRAPHY "},{"course_id":"ART 3387","course_title":" DIRECTED SCREENINGS "},{"course_id":"ART 4100","course_title":" SENIOR EXHIBITION "},{"course_id":"ART 4191","course_title":" INDEPENDENT STUDY "},{"course_id":"ART 4200","course_title":" PROFESSIONAL PRACTICES "},{"course_id":"ART 4201","course_title":" PORTFOLIO PRESENTATION "},{"course_id":"ART 4306","course_title":""},{"course_id":"ART 4314","course_title":" TOPICS IN 20TH CENTURY ART "},{"course_id":"ART 4315","course_title":" ASPECTS OF CONTEMPORARY ART "},{"course_id":"ART 4318","course_title":" ADVANCED DIGITAL IMAGING "},{"course_id":"ART 4320","course_title":" BEYOND  PHOTOGRAPHY: WORKING OUTSIDE THE IMAGE "},{"course_id":"ART 4330","course_title":" 18TH CENTURY ART "},{"course_id":"ART 4340","course_title":" ADVANCED KILN FORMED GLASS "},{"course_id":"ART 4342","course_title":" ADVANCED GLASS "},{"course_id":"ART 4343","course_title":" ADVANCED CLAY "},{"course_id":"ART 4345","course_title":" ADVANCED PRINTMAKING "},{"course_id":"ART 4347","course_title":" PUBLICATION DESIGN "},{"course_id":"ART 4348","course_title":" INFORMATION VISUALIZATION "},{"course_id":"ART 4352","course_title":" NARRATIVE FILM/VIDEO "},{"course_id":"ART 4354","course_title":" ADVANCED NARRATIVE SCREENWRITING "},{"course_id":"ART 4355","course_title":" VISUAL IDENTITY SYSTEMS "},{"course_id":"ART 4356","course_title":" PROFESSIONAL PREPARATION "},{"course_id":"ART 4359","course_title":" ADVANCED PHOTOGRAPHY "},{"course_id":"ART 4360","course_title":" COLOR PHOTOGRAPHY "},{"course_id":"ART 4361","course_title":""},{"course_id":"ART 4363","course_title":" STUDIO PHOTOGRAPHY "},{"course_id":"ART 4365","course_title":" TECHNOLOGY IN ART EDUCATION "},{"course_id":"ART 4366","course_title":" WEB DESIGN "},{"course_id":"ART 4367","course_title":" TWO DIMENSIONAL ANIMATION "},{"course_id":"ART 4370","course_title":" STAGED ENVIRONMENTS "},{"course_id":"ART 4371","course_title":" ADVANCED PAINTING "},{"course_id":"ART 4373","course_title":""},{"course_id":"ART 4375","course_title":" DESIGN TEXAS "},{"course_id":"ART 4382","course_title":" ENTREPRENEURSHIP IN THE ARTS "},{"course_id":"ART 4390","course_title":" CONFERENCE COURSE: ART HISTORY "},{"course_id":"ART 4391","course_title":" INDEPENDENT STUDY "},{"course_id":"ART 4392","course_title":" SPECIAL STUDIES "},{"course_id":"ART 4395","course_title":" ART INTERNSHIP "},{"course_id":"ART 4396","course_title":" SPECIAL STUDIES IN ART HISTORY "},{"course_id":"ART 4397","course_title":" SPECIAL STUDIES IN FILM/VIDEO "},{"course_id":"ART 4695","course_title":" ART INTERNSHIP "},{"course_id":"ART 5000","course_title":" SUPERVISED TEACHINGSTUDIO ART "},{"course_id":"ART 5320","course_title":" ART CRITICISM & THEORY "},{"course_id":"ART 5340","course_title":" RESEARCH IN STUDIO INTERMEDIA "},{"course_id":"ART 5342","course_title":" RESEARCH IN GLASS "},{"course_id":"ART 5343","course_title":" RESEARCH IN PRINTMAKING "},{"course_id":"ART 5347","course_title":" RESEARCH IN DRAWING "},{"course_id":"ART 5355","course_title":" RESEARCH IN VISUAL COMMUNICATION "},{"course_id":"ART 5359","course_title":" RESEARCH IN PHOTOGRAPHY DIGITAL IMAGING "},{"course_id":"ART 5360","course_title":" TOPICS IN THE HISTORY OF ART & DESIGN "},{"course_id":"ART 5363","course_title":" RESEARCH IN CLAY "},{"course_id":"ART 5371","course_title":" RESEARCH IN PAINTING "},{"course_id":"ART 5383","course_title":" RESEARCH IN FILM/VIDEO & SCREENWRITING "},{"course_id":"ART 5391","course_title":" INDEPENDENT STUDY "},{"course_id":"ART 5392","course_title":" INDEPENDENT STUDY IN VISUAL COMMUNICATION "},{"course_id":"ART 5397","course_title":" MASTER OF FINE ARTS EXHIBITION "},{"course_id":"ART 5640","course_title":" RESEARCH IN STUDIO INTERMEDIA "},{"course_id":"ART 5642","course_title":" RESEARCH IN GLASS "},{"course_id":"ART 5655","course_title":" RESEARCH IN VISUAL COMMUNICATION "},{"course_id":"ART 5659","course_title":" RESEARCH IN PHOTOGRAPHY DIGITAL IMAGING "},{"course_id":"ART 5683","course_title":" RESEARCH IN FILM/VIDEO & SCREENWRITING "},{"course_id":"ART 5697","course_title":" MASTER OF FINE ARTS EXHIBITION "}]
  };
  return{
  
    getCourse: function(department){
      var keys = [];
      angular.forEach(courses[department],function(each){
        this.push(each["course_id"]);
      },keys);
      return keys;
    },
    findCourse: function(d,c){
      var target = d + " " + c;
      console.log(target);
      return _.findWhere(courses[d],{"course_id":target});
    },

    getAll: function(){
      return courses;
    }
  }
})

  .factory('Department',function($q,$timeout){

    //seeding data for list of departments for now
    var departments = [{"id":1,"name":"ACCT"},{"id":2,"name":"ADVT"},{"id":3,"name":"AE"},{"id":4,"name":"AS"},{"id":5,"name":"ASA"},{"id":6,"name":"AAST"},{"id":7,"name":"ANTH"},{"id":8,"name":"ARAB"},{"id":9,"name":"ARCH"},{"id":10,"name":"ART"},{"id":11,"name":"ASTR"},{"id":12,"name":"BEEP"},{"id":13,"name":"BE"},{"id":14,"name":"BIOL"},{"id":15,"name":"BCMN"},{"id":16,"name":"BSAD"},{"id":17,"name":"BUSA"},{"id":18,"name":"BCOM"},{"id":19,"name":"BDEC"},{"id":20,"name":"BHNR"},{"id":21,"name":"BLAW"},{"id":22,"name":"BSTAT"},{"id":23,"name":"CHEM"},{"id":24,"name":"CHIN"},{"id":25,"name":"CIRP"},{"id":26,"name":"CE"},{"id":27,"name":"CLAS"},{"id":28,"name":"COMM"},{"id":29,"name":"COMS"},{"id":30,"name":"CTEC"},{"id":31,"name":"CSE"},{"id":32,"name":"CS"},{"id":33,"name":"CRCJ"},{"id":34,"name":"DNCA"},{"id":35,"name":"DNCE"},{"id":36,"name":"ECED"},{"id":37,"name":"ECON"},{"id":38,"name":"EDCO"},{"id":39,"name":"EDUC"},{"id":40,"name":"EDUCIR"},{"id":41,"name":"EDML"},{"id":42,"name":"EDAD"},{"id":43,"name":"EDADIR"},{"id":44,"name":"EDTC"},{"id":45,"name":"EE"},{"id":46,"name":"ELED"},{"id":47,"name":"ESOL"},{"id":48,"name":"ENGR"},{"id":49,"name":"EM"},{"id":50,"name":"ENGL"},{"id":51,"name":"ESST"},{"id":52,"name":"EVSE"},{"id":53,"name":"EXCH"},{"id":54,"name":"EMBA"},{"id":55,"name":"EXSA"},{"id":56,"name":"EXSS"},{"id":57,"name":"FINA"},{"id":58,"name":"FREN"},{"id":59,"name":"GEOG"},{"id":60,"name":"GEOL"},{"id":61,"name":"GERM"},{"id":62,"name":"GLOBAL"},{"id":63,"name":"GREK"},{"id":64,"name":"HCAD"},{"id":65,"name":"HEED"},{"id":66,"name":"HIST"},{"id":67,"name":"HONR"},{"id":68,"name":"HUMA"},{"id":69,"name":"IE"},{"id":70,"name":"INSY"},{"id":71,"name":"INSU"},{"id":72,"name":"INTS"},{"id":73,"name":"INTD"},{"id":74,"name":"COLA"},{"id":75,"name":"JOUR"},{"id":76,"name":"KINE"},{"id":77,"name":"KORE"},{"id":78,"name":"LARC"},{"id":79,"name":"LATN"},{"id":80,"name":"LSHP"},{"id":81,"name":"LING"},{"id":82,"name":"LIST"},{"id":83,"name":"LISTIR"},{"id":84,"name":"MANA"},{"id":85,"name":"MASI"},{"id":86,"name":"MARK"},{"id":87,"name":"MSE"},{"id":88,"name":"MSCI"},{"id":89,"name":"MAED"},{"id":90,"name":"MATH"},{"id":91,"name":"MAE"},{"id":92,"name":"ME"},{"id":93,"name":"MAS"},{"id":94,"name":"MILS"},{"id":95,"name":"MODL"},{"id":96,"name":"MUSI"},{"id":97,"name":"NE"},{"id":98,"name":"NURS"},{"id":99,"name":"NRST"},{"id":100,"name":"OPMA"},{"id":101,"name":"PHIL"},{"id":102,"name":"PHED"},{"id":103,"name":"PHYS"},{"id":104,"name":"POLS"},{"id":105,"name":"PORT"},{"id":106,"name":"PSYC"},{"id":107,"name":"PUAD"},{"id":108,"name":"PREL"},{"id":109,"name":"REAE"},{"id":110,"name":"RUSS"},{"id":111,"name":"SUPA"},{"id":112,"name":"SCED"},{"id":113,"name":"SCIE"},{"id":114,"name":"SOCW"},{"id":115,"name":"SOCI"},{"id":116,"name":"SPAN"},{"id":117,"name":"SPEC"},{"id":118,"name":"STATS"},{"id":119,"name":"SOAR"},{"id":120,"name":"SUST"},{"id":121,"name":"THEA"},{"id":122,"name":"UNIV"},{"id":123,"name":"URPA"},{"id":124,"name":"UPPP"},{"id":125,"name":"WOMS"}];

    return {
      getDepartments : function(){
        var keys = [];
      angular.forEach(departments,function(each){
        this.push(each["name"]);
      },keys);
      return keys;
      }
    }
  })

  .factory('scheduleData',function(){
    var schedules = [
      [{"id":2172,"class_id":41173,"instructor":"Terrance Moore","section_id":"001                 ","section_type":"LEC                 ","meeting_time":"01/19/2016 - 05/06/2016","start_time":"19:00:00","end_time":"20:20:00","location":"WH  311","course_id":678,"dates":["Tu","Th"]},{"id":2173,"class_id":24892,"instructor":"Vassilis Athitsos","section_id":"003                 ","section_type":"LEC                 ","meeting_time":"01/19/2016 - 05/06/2016","start_time":"12:30:00","end_time":"13:50:00","location":"TBA","course_id":678,"dates":["Tu","Th"]},{"id":2174,"class_id":41236,"instructor":"Alexandra Stefan","section_id":"004                 ","section_type":"LEC                 ","meeting_time":"01/19/2016 - 05/06/2016","start_time":"09:30:00","end_time":"10:50:00","location":"TBA","course_id":678,"dates":["Tu","Th"]},{"id":2175,"class_id":43187,"instructor":"Janice Carter M Tiernan","section_id":"005                 ","section_type":"LEC                 ","meeting_time":"01/19/2016 - 05/06/2016","start_time":"15:30:00","end_time":"16:50:00","location":"TBA","course_id":678,"dates":["Tu","Th"]}]
    ];
    return {
      getSchedules: function(){
        return schedules;
      }
    }
  })


  .factory('semesterData',function(){
    var data = [
  {
    "id": 1,
    "name": "2016 Spring",
    "code": 2162
  },
  {
    "id": 2,
    "name": "2015 Fall",
    "code": 2158
  },
  {
    "id": 3,
    "name": "2015 Summer",
    "code": 2155
  },
  {
    "id": 4,
    "name": "2015 Spring",
    "code": 2152
  },
  {
    "id": 5,
    "name": "2014 Summer",
    "code": 2145
  }
  ];
    return {
      getAll: function(){
        return data;
      }
    }
  })


