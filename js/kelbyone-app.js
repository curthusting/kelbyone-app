// $.ajax({
//   url: "http://kelbyone-marketing/api/v1/categories/"
// }).done(function(response) {
//   console.info('done', response)
// });
// $.getJSON( "http://dev.kelbyone.com/api/v1/category-classes", { category_id: 141702 }, function( data ) {
//   var items = [];
//   console.info('done', data)
//   $.each( data, function( key, val ) {
//     items.push( "<li id='" + key + "'>" + val + "</li>" );
//   });

//   $( "<ul/>", {
//     "class": "my-new-list",
//     html: items.join( "" )
//   }).appendTo( body );
// });
// Initialize app
// var kelbyoneApp = new Framework7({
//     template7Pages: true, //enable Template7 rendering for pages
//     // pushState: true,

//     //Specify templates/pages data
//     template7Data: {
//         // This context will applied for page/template with "about.html" URL
//         'url:about.html': {
//             name: 'John Doe',
//             age: 38,
//             company: 'Apple',
//             position: 'Developer'
//         },

//         // This context will applied for page/template with data-page="contacts"
//         'page:contacts': {
//             tel: '(999)-111-22-33',
//             email: 'contact@john.doe'
//         },

//         // Plain data object
//         'languages': {
//             'frontend': [
//                 {
//                     name:'JavaScript',
//                     description: 'Dynamic computer programming language[5]. It is most commonly used as part of web browsers, whose implementations allow...'
//                 },
//                 {
//                     name:'CSS',
//                     description: 'Style sheet language used for describing the look and formatting of a document written in a markup language...'
//                 },
//             ],
//             'backend': [
//                 {
//                     name: 'PHP',
//                     description: 'Server-side scripting language designed for web development but also used as a general-purpose programming language...'
//                 },
//                 {
//                     name: 'Ruby',
//                     description: 'Dynamic, reflective, object-oriented, general-purpose programming language...'
//                 }
//             ]
//         }
//     }
// });

// const instructors = $.getJSON('http://dev.kelbyone.com/api/v1/instructors');

var instructors = [{
    name: "Aaron Grimes",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_agrimes_640x640.jpg",
    sort: 0,
    body: "Loosely based in Los Angeles, Aaron Grimes is a filmmaker who spends most of his time on the road. Specializing in Aerial Photography his work has been featured on 60 Minutes, The Weather Channel, Right This Minute, as well as online through Gizmodo, Time, and Adobe\'s blog. While aerial photography is not his primary focus the equipment today is advanced enough to allow him to use it as a tool for film-making without becoming sidetracked by it\'s technicalities. In addition to creating with the aerial platforms he also enjoys teaching, from how to fly to the tools used for processing aerial footage\/images.",
    coursesCount: 0,
    id: 82
}, {
    name: "Adam Rohrmann",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_arohrmann_640x640.jpg",
    sort: 1,
    body: "Adam Rohrmann is a director with over 10 years of experience in video production. He has directed more than 100 KelbyOne online training classes, in addition to independent short films, music videos, documentaries, and commercials. Adam is an expert on video gear and using that gear to turn a concept on paper into reality at an on-location shoot. He\'s a certified Steadicam operator, and is well-versed in all aspects of video production. Adam has produced training videos with some of the top names in the industry, including Joe McNally, Moose Peterson, and Scott Kelby. He\'s been tapped for productions worldwide, shooting in places like Paris and Africa. His favorite instructor of all time is Jay Maisel. As a Full Sail University graduate, he learned production from industry leaders in film and video. Over the past decade, he\'s developed his own style and method that\'s resulted in some of the very best content that you see on KelbyOne.com today.",
    coursesCount: 2,
    id: 86
}, {
    name: "Adam Elmakias",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_aelmakias_640x640.jpg",
    sort: 2,
    body: "Adam Elmakias is a San Diego based Music Photographer. He spends most of his time on the road with bands as they travel the world. When he is home he likes to hang out with his cat Mark and go for nice walks in the sun.",
    coursesCount: 1,
    id: 53335
}, {
    name: "Alan Hess",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_ahess_640x640.jpg",
    sort: 3,
    body: "Alan Hess is a San Diego-based commercial photographer specializing in concert and live-event photography. He has photographed hundreds of concerts three songs at a time. From small club shows to big arenas, Alan enjoys the fast pace of shooting on the fly, the rush of the house lights going down, and the drive to capture the \"show\" in the images of first three songs. The wide variety of bands that Alan has shot include: Billy Idol, Black Eyed Peas, Bob Weir and RatDog, Bruce Hornsby, Bullet for my Valentine, Citizen Cope, The Dead, Death Cab for Cutie, Derek Trucks Band, The Grateful Dead, Jackie Greene, John Legend, Marilyn Manson, Mickey Hart Band, Robin Williams, Slayer, The Smashing Pumpkins, Steel Pulse, Widespread Panic, and Willie Nelson. Alan\'s work has been published online and in print in the following outlets: Associatedcontent.com, Bruuce.com, Dead.net, Glidemagazine.com, Jambands.com, Jambase.com, MarkKaran.com, MiaBrazilia.com, Poughkeepsie Journal, Mill Valley Herald, Otherones.net, Pauserecord.com, Philzone.com, Photoshop User, Ranch &amp; Coast Magazine, Rat-dog.com, Ratdog.org, Relix Magazine and Vintage Guitar Magazine. His images have been used for various CDs and other promotional work. Alan is currently the house photographer for a large concert venue in Southern California and when he isn\'t out shooting concerts, he is writing photography books.",
    coursesCount: 1,
    id: 90
}, {
    name: "Alex Koloskov",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_akoloskov_640x640.jpg",
    sort: 4,
    body: "I am a mix of technicality, innovation and out of the box thinking. Since childhood my dad inspired and encouraged that in me. I am completely self taught. I don\'t know the rules nor do I care about them. I don\'t follow the herd. I do it my way. That turned out to be invaluable in what I do. It allowed me to experiment, see outside the borders, challenge the authorities and create stunning photography style that is crisp, sharp and crystal clear. I am inspired by progress and movement. I am incredibly persistent and never take \"less than perfect\" for an answer. If I don\'t have the right tools, I\'ll build them myself. I like to make stuff happen.",
    coursesCount: 1,
    id: 76
}, {
    name: "Annie Cahill",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_acahill_640x640.jpg",
    sort: 5,
    body: "Anne Cahill began her career in photography as a freelance photojournalist and has been published in motor sports magazines and a variety of travel and lifestyle magazines. She became a Professional Markets Technical Representative for Nikon in 1999 and for over a dozen years now has enjoyed her role as an educator and photographer. Anne has had the privilege of working with professional photographers in varied segments of the market place including sports, nature, commercial and law enforcement.",
    coursesCount: 3,
    id: 45
}, {
    name: "Barry Andersson",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_bandersson_640x640.jpg",
    sort: 6,
    body: "Barry Andersson is an award-winning director and cinematographer and author of the DSLR Filmmakers handbook. His career started with live television video production and now includes several acclaimed short films, a television pilot, commercials, and a feature film. Barry has worked with experienced DP\'s to new directors working in the DSLR platform make sure they succeed with their most important projects.",
    coursesCount: 2,
    id: 102
}, {
    name: "Ben Willmore",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_bwillmore_640x640.jpg",
    sort: 7,
    body: "Photoshop Hall of Famer, Ben Willmore, has taught over 100,000 Photoshop users on five continents. His bestselling books, DVDs, and hit seminars have established Ben as one of America\'s favorite Photoshop instructors, and he is often a standing-room-only speaker at design and photography conferences throughout the world. He writes for numerous digital imaging publications, including a monthly column for Photoshop User magazine, and his audience-winning training techniques have helped multitudes of design and photography professionals make the transition from blindly following step-by-step techniques, to \"Ah-ha! I finally GET Photoshop!\"",
    coursesCount: 4,
    id: 32
}, {
    name: "Bert Monroy",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_bmonroy_640x640.jpg",
    sort: 8,
    body: "Bert Monroy is considered one of the pioneers of digital art. His work has been seen in many magazines and scores of books. He has served on the faculty of many well known institutions, lectured around the world, written many books and appeared on hundreds of TV shows.",
    coursesCount: 4,
    id: 17
}, {
    name: "Bryan O\'Neil Hughes",
    image: "\/\/img.kelbymediagroup.com\/kelbyone_enterprise\/2016\/05\/k1_instructors_bhughes_640x640.jpg",
    sort: 9,
    body: "Bryan O\'Neil Hughes is the Senior Product Manager for Photoshop and a pinch hitter for the Lightroom team. Since 1999 he has helped to test, drive, demonstrate, and lead development of Adobe\'s professional digital imaging applications. Bryan is the Photoshop team\'s primary worldwide spokesman and can often be found leading seminars, user groups, and workshops. Before joining Adobe, he was a professional photographer and retoucher. Beyond Adobe, Hughes is a published photographer, editor, and author. He is also a driving instructor for the BMW Car Club of America. When he isn\'t driving very quickly, he enjoys running marathons very slowly. Bryan was inducted into the Photoshop Hall of Fame in 2011.",
    coursesCount: 1,
    id: 55005
}, {
    name: "Bill Fortney",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_bfortney_640x640.jpg",
    sort: 10,
    body: "Bill is one of America\'s premier photographer\'s specializing in Landscape, close-up, nature, Americana, and travel.  In his 44 year career, Bill has been a High School teacher and football coach, AP rep, Medical photographer, and Marketing Public Relations person. Bill was an official photographer for the Washington Redskins during his sports photography years. In 1991 he and his wife Sherelene founded the Great American Photography Weekends and for 12 years he ran the field events for the company, leading over 250 events in every major national park and in Africa, Europe, Canada, and the Galapagos Islands. Bill is the author of five photography books, including his newest - America From 500 Feet II.  His original America From 500 Feet book done with his son Wesley is the largest selling aerial landscape book, on America, of all time. Now retired after 11 years with Nikon Professional Services, Bill teaches workshops through his company His Light Workshops.  Once called in a newspaper article \"The Will Rogers of Photography\",  Bill is a committed Christian, and much sought after speaker, presenter, and workshop leader.",
    coursesCount: 8,
    id: 42
}, {
    name: "Bill Frakes",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_bfrakes_640x640.jpg",
    sort: 11,
    body: "Bill Frakes is a Sports Illustrated Staff Photographer based in Florida who has worked in all 50 states and in more than 125 countries for a wide variety of editorial and advertising clients. His advertising clients include Apple, Nike, Manfrotto, CocaCola, Champion, Isleworth, Stryker, IBM, Nikon, Canon, Kodak, and Reebok. He directs music videos and television ads. Editorially his work has appeared in virtually every major general interest publication in the world. His still photographs and short documentary films have been featured on hundreds of Web sites as well as on most major television networks. He won the coveted Newspaper Photographer of the Year award in the prestigious Pictures of the Year competition. He was a member of the Miami Herald staff that won the Pulitzer Prize for their coverage of Hurricane Andrew. He was awarded the Gold Medal by World Press Photo. He has also been honored by the Robert F. Kennedy Journalism Awards for reporting on the disadvantaged and by the Overseas Press club for distinguished foreign reporting. He has received hundreds of national and international awards for his work. He has taught at the University of Miami, the University of Florida and the University of Kansas as an adjunct professor and lecturer. During the last five years he has lectured at more than 100 universities discussing multimedia and photojournalism. In 2010 he served on the jury of World Press Photo.",
    coursesCount: 4,
    id: 51
}, {
    name: "Brandon Ford",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_bford_640x640.jpg",
    sort: 12,
    body: "Brandon Ford is a field director, videographer, and an editor for KelbyOne. He\'s responsible for the incredible production quality you\'ll experience watching our on-location training classes.\r\n\r\nBefore working for Scott Kelby\'s Video Team, Brandon thrived on the adrenaline and intensity of TV news. Covering everything from politics to athletics for the Tampa Bay market, he shot and edited interviews with President Barack Obama, Bill Clinton, and former Secretary of State Condoleezza Rice. He brings that drive and energy to the KelbyOne team. \r\n\r\nThe professional training videos you\'ll find on KelbyOne reflect his prowess behind the camera and in the editing suite. Brandon also teaches television production and editing for a national broadcast media school and now for KelbyOne. When Brandon is not filming, editing, or teaching he enjoys spending time with his wife, 3 dogs, and their cat.",
    coursesCount: 20,
    id: 73
}, {
    name: "Calvin Hollywood",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_chollywood_640x640.jpg",
    sort: 13,
    body: "Calvin Hollywood is a digital artist, photographer, Photoshop trainer and author from Germany. He\'s a photography based artist who focuses on getting the perfect shot with Photoshop. In addition, he also serves as an Adobe Promoter and writer for a number of magazines.",
    coursesCount: 6,
    id: 35
}, {
    name: "Corey Barker",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_cbarker_640x640.jpg",
    sort: 14,
    body: "Corey is an education and curriculum developer for KelbyOne. He is a graduate of the Ringling School of Art &amp; Design in Sarasota, FL, with a degree in Illustration. Over the years, Corey has worked as a graphic artist in a variety of disciplines such as illustration, commercial design, large format printing, motion graphics, web design and photography. His expertise in Photoshop and Illustrator have earned him numerous awards in illustration, graphic design and photography. Using Photoshop since version 2, his expertise and creativity have evolved exponentially with every new version, which makes Corey an invaluable addition to the KelbyOne team.",
    coursesCount: 62,
    id: 15
}, {
    name: "Cliff Mautner",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_cmautner_640x640.jpg",
    sort: 15,
    body: "Recognized by WPPI as \"one of the top photographers and educators in the world,\" Cliff Mautner\\'s 28-year career in photography includes 15 years and 6000 assignments as a photojournalist with the Philadelphia Inquirer, and work for an eclectic array of commercial clientele ranging from Comcast to Subaru. After launching his wedding photography career, he became well known for his ability to create quality images in some of the most difficult lighting conditions. After 750 weddings, he hasn\'t looked back.",
    coursesCount: 9,
    id: 87
}, {
    name: "Colby Brown",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_cbrown_640x640.jpg",
    sort: 16,
    body: "Colby Brown is a professional photographer, photo educator and author based out of Denver, Colorado. He specializes in landscape, travel and humanitarian photography. Throughout his work one can see that he combines his love of the natural world with his fascination of the world\'s diverse cultures. Each of his photographs tells a story of life on this planet. Born in California, he developed a love for both the ocean and the mountains at a young age. Whether he was exploring the Sierra Nevada Mountains around Lake Tahoe or sailing around San Francisco Bay, Colby\'s thirst for adventure and the outdoors started early. Colby has dedicated the last eight years of his life to combining his passion for photography with his love of travel and adventure. From diving the Great Barrier Reef to climbing peaks in the Himalayas. Surfing the breaks off the North Shore in Hawaii to ice climbing the glaciers of New Zealand. Through these experiences, he has learned the importance of compassion within this dynamic and complicated world we all live in. Lending a helping hand or even a smile can go a very long way. In 2010 Colby helped found Lespwa Haiti, an organization that sets out to bring back the focus on the rebuilding of Haiti. In 2011 Colby founded The Giving Lens, which blends photo education and giving back to local communities. While specializing in landscape and travel photography, Colby Brown, also does freelance photojournalism and donates his time to many Non Profit organizations while out in the field. He is a citizen of both the US and Canada, a certified PADI Master Diver and Wilderness First Responder.  He has worked as a photography instructor for National Geographic Student Expeditions and is currently focusing much of his time and energy on Humanitarian efforts around the globe. Colby\'s Clients have included: National Geographic, The Sierra Club, The Red Cross, The City of Denver, San Antonio Express News, H.E.L.P, Tree\'s Water &amp; People, Amurt, Empowerment International, The Bethlahem Christmas Project, The Denver Post, The Matador Network and many others. You can find Colby\'s photography work in art galleries throughout Colorado and Texas as well as in many private collections.",
    coursesCount: 3,
    id: 88
}, {
    name: "Colin Smith",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_csmith_640x640.jpg",
    sort: 17,
    body: "Colin Smith is founder of PhotoshopCAFE which has received over 30 million visitors. Colin has Authored 19 books. He has won numerous awards including 3 Guru awards. He\'s been nominated for the Photoshop Hall of Fame twice. Colin is a regular columnist for Photoshop User Magazine. He\'s been featured in almost every major imaging magazine, and is in high demand as a speaker at major industry events including WPPI, Siggraph, PMA and Flash Forward. He consults such companies as ABC Disney, Apple and Adobe.",
    coursesCount: 0,
    id: 64
}, {
    name: "Dan Steinhardt",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_dsteinhardt_640x640.jpg",
    sort: 18,
    body: "Recognized as a photographic imaging industry leader, Dan (Dano) Steinhardt has over three decades of business experience in photography. In addition to national academic achievement, Steinhardt was first recognized for his photography when Scholastic Magazine awarded him the Grand Prize as the best high school photographer in North America. As Marketing Manager at Epson America of Long Beach, CA, Steinhardt\'s responsibilities help position Epson as a key player in the photographic industry to high-end professional and amateur photo markets. He also works in the development of new imaging products for photographic markets. Steinhardt was fortunate to have attended Reseda High School in Los Angeles CA studying under the legendary Warren King. While still in high school, Steinhardt began assisting professional photographers in Hollywood CA. Because of his background at Reseda High and experience as a photo assistant, Steinhardt was awarded advanced standing at Brooks Institute of Photography, Santa Barbara CA where he double majored in Advertising\/Illustration and Industrial\/Scientific photography graduating with a Bachelors degree at the age of 20. After graduation from Brooks Institute, Steinhardt operated his own commercial photography studio in Chicago, IL from 1980 to 1988 specializing in advertising photography for national clients. During this time Steinhardt specialized in large format table-top product and food photography and was voted by American Photographer Magazine as, \"New face in advertising photography\". Before joining Epson, Steinhardt was a marketing director in the Professional Division at Eastman Kodak Company and held a variety of positions at Eastman Kodak in Rochester NY and New York City including strategic marketing director, market segment manager and professional imaging specialist. In addition to a bachelor\'s degree with honors from Brooks Institute of Photography, Santa Barbara, CA. He has completed additional studies in the business schools of Harvard University, Cambridge MA, the University of Virginia, Charlottesville, VA and the University of Michigan, Ann Arbor, MI.",
    coursesCount: 1,
    id: 60
}, {
    name: "Dan Hughes",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_dhughes_640x640.jpg",
    sort: 19,
    body: "",
    coursesCount: 1,
    id: 93
}, {
    name: "Daniel Gregory",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_dgregory_640x640.jpg",
    sort: 20,
    body: "Daniel is a fine art and editorial photographer based in Washington State. Born in New Mexico, raised in Colorado, schooled in Texas, and now a Whidbey Island resident (North of Seattle).  A true believer in taking advantage of every opportunity, he pushes himself creatively through his work and his teachings. Creativity for Daniel means dealing with a great deal of fear and risk everyday.  He looks to foster creative learning and sharing in effort to build stronger communities, create meaningful dialog, and tell stories that reflect who we are and what we hope to become. Daniel is always looking to experience and find beauty in the world, hoping that collectively we can all find out just what our creativity can do through meaningful work.",
    coursesCount: 1,
    id: 138
}, {
    name: "Dan Margulis",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_dmargulis_640x640.jpg",
    sort: 21,
    body: "Dan Margulis is internationally regarded as the leading authority on color correction. He is the author of Professional Photoshop, which, since its first edition in 1994, has become the unofficial bible of the prepress and printing industries. His column, \"Makeready,\" which focuses on practical production issues, appears in both Photoshop User and Electronic Publishing magazines. Formerly a professional prepress manager with over 20 years experience heading electronics departments at high-end trade shops, he now offers small-group, hands-on color correction classes in the U.S., Canada, and Europe in four different languages. In September 2001, Dan was one of the first three persons named to the Photoshop Hall of Fame of the National Association of Photoshop Professionals.",
    coursesCount: 7,
    id: 26
}, {
    name: "Dave Black",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_dblack_640x640.jpg",
    sort: 22,
    body: "As a freelance photographer for over 30 years Dave\'s work has primarily centered on the sports industry for such publications as Sports Illustrated, Time, Newsweek and the award winning TV show Sports Century on ESPN. The list of event coverage includes the Masters, Kentucky Derby, National Football League, NASCAR and extensive work regarding the United States Olympic Committee, Olympic athletes and coverage of twelve Olympic Games. Known for his creative use of lighting and in particular with the artistic technique of Lightpainting, Dave\'s portfolio continues to broaden into the commercial and advertising industry, and with specialized lighting projects including work for the National Geographic and their book Where Valor Rests, Arlington National Cemetery.\r\nHe is one of Nikon\'s \"Legends Behind the Lens\" photographers and is a prominent instructor at a variety of workshops each year. His monthly website tutorial articles \"Workshop at the Ranch\" attract more than 85,000 unique visitors monthly. In 2010 he released his highly acclaimed instructional book, The Way I See It. To see Dave\'s images, learn more about photography, or purchase his book visit his website www.daveblackphotography.com.",
    coursesCount: 12,
    id: 40
}, {
    name: "David Cuerdon",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_dcuerdon_640x640.jpg",
    sort: 23,
    body: "David Cuerdon is an award-winning visual artist and a true digital pioneer, who was among the world\'s first digital fashion photographers. He is widely recognized for his rare combination of creative vision and advanced technical skills. David\'s clients have included Playboy, Glamour Magazine, Neiman Marcus and May Company. He has had work published in every major U.S. fashion magazine. In his 30 plus year career he has worked as a photographer, retoucher, and trainer. David and his family live in a suburb of Chicago, where he currently works as a photographer and digital artist for Evoke Productions.",
    coursesCount: 3,
    id: 34
}, {
    name: "David Ziser",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_dziser_640x640.jpg",
    sort: 24,
    body: "David Ziser, an internationally-renowned wedding photographer, has shared his knowledge with tens of thousand\'s of photographers in five languages and in 14 countries worldwide. Studio Photography acclaimed \"Award winning photographer, David Ziser, is showing the world how to take wedding pictures.\" The Dallas Morning News extolled Ziser as \"wedding photographer extraordinaire.\" David is one of 97 worldwide who hold the highest honor of \"Fellow\" bestowed by the American Society of Photographers.",
    coursesCount: 8,
    id: 33
}, {
    name: "David Bergman",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_dbergman_640x640.jpg",
    sort: 25,
    body: "I grew up as a \"band geek\" in Miami and attended the prestigious Berklee College of Music in Boston. The problem was that I found myself taking pictures of my friends\' bands instead of studying for music theory class. So after a year of drumming and learning music production, I transferred to the University of Miami where I walked into the school newspaper on a whim and was handed my first assignment. I was hooked. That semester I sold my drums to buy lenses. I spent the rest of my 20\'s as a staff photographer at the Miami Herald newspaper. As the \"sports guy\" I was extremely fortunate to cover multiple Olympics, Super Bowls, the World Series, and Stanley Cup Finals. I also covered music assignments whenever possible and went on the road with Gloria Estefan, which cemented my love of tour photography. In 2001, I relocated to New York, focusing my energy on music and sports photography. I\'m now the tour photographer for a number of bands and festivals including Bon Jovi, Barenaked Ladies, and Lilith Fair, and have produced still and video projects for artists and companies including FremantleMedia, Embassy Row, Avril Lavigne, Joss Stone, Drew Carey, Hanson, EMI, and SONY Music. Sports Illustrated is a regular client and I have thirteen covers to my credit including the 2010 Super Bowl. I\'ve photographed six U.S. Presidents and my Obama inauguration GigaPan was viewed over 20 million times. A highlight was documenting President Obama behind-the-scenes at the 2009 All-Star Game. I\'ve been called an \"action photographer\" because I incorporate the best of my sports action work into my commercial photography. I utilize technology such as the GigaPan and remote cameras when I think it can add something to my coverage. I also use the newest breed of hybrid HDSLR cameras to produce music videos. In 2005, I founded TourPhotographer.com to help fans get legal, approved photos from the concerts they attend while also generating a new source of revenue for the bands. I\'m a charter member of Apple\'s elite Aperture Advisory Board and am frequently asked to lecture or lead workshops for corporations and universities such as Apple, Nikon, the National Press Photographer\'s Association, R.I.T., and Columbia University. And, oh yeah, after college I was able to use the money I made as a photographer to buy a new drum set. I keep it in my office.",
    coursesCount: 1,
    id: 71
}, {
    name: "Dave Clayton",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_dclayton_640x640.jpg",
    sort: 26,
    body: "KelbyOne instructor, Dave Clayton, is a UK based graphic designer and creative specialist with over 30 years of experience. With a great passion for all things design, Dave has always loved working in InDesign,Photoshop and Illustrator. He specialises in creating branding projects and logos for clients and has had work published by Peachpit and KelbyOne. He is also an Adobe Influencer and ACA in InDesign.\r\nFind out more about Dave by visiting - \r\nWebsite: www.itsdaveclayton.com | \r\nTwitter: itsdaveclayton | \r\nFacebook: facebook.com\/itsdaveclayton | Instagram: instagram.com\/itsdaveclayton",
    coursesCount: 2,
    id: 51461
}, {
    name: "Dave Cross",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_dcross_640x640.jpg",
    sort: 27,
    body: "For over 25 years Dave Cross has been helping photographers and creative professionals get the most out of their Adobe software. Since1987, Dave has taught Photoshop, Illustrator and InDesign to thousands of users around the world. He has a Bachelor of Education, is an Adobe Certified Instructor and is a Certified Technical Trainer. Dave has taught for Adobe, at Photoshop World, the Texas School of Photography, Adobe MAX, Imaging USA and at numerous corporate locations. Dave has written many articles and multiple books, co-hosted Photoshop User TV and has appeared in many DVDs and online courses for Kelby Training, CreativeLive and Photoshop Cafe. He offers online training at online.davecrossworkshops.com. Dave has taught Photoshop in every state in the United States, throughout Canada and in Europe, consistently earning rave reviews. Dave is well-known for his engaging style, his humor and his ability to make complex topics easy to understand. In 2009 Dave was inducted into the Photoshop Hall of Fame.",
    coursesCount: 22,
    id: 12
}, {
    name: "Deanne Fitzmaurice",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_dfitzmaurice_640x640.jpg",
    sort: 28,
    body: "Deanne Fitzmaurice is a Pulitzer Prize winning photographer, based in San Francisco, California, and specializing in reportage stills and motion. Her work has appeared in National Geographic, Time Magazine, ESPN the Magazine, Sports Illustrated , Men\'s Journal, Newsweek, The Economist, Der Spiegel, Stern, GEO and numerous other publications. Deanne has also partnered with foundations and non-profits including NPR, UCSF, The Bill and Melinda Gates Foundation, and the James Irvine Foundation. She has also created multimedia pieces for NBC, Wharton, ACLU as well as other organizations. Deanne\'s corporate clients include Netflix, Mazda, Target, Avon, Microsoft, and Adobe. In 2011, Deanne\'s documentary work was a finalist for the Alexia Foundation Grant for World Peace. In 2011 and 2013 she was presented with the Juror\'s Selection for the American Photography Awards. Deanne\'s work has also received awards from Pictures of the Year International, NPPA Best of Photojournalism, and the Casey Medal for Meritorious Journalism. Her work is part of the permanent collection at the Newseum, and is also part of their traveling exhibition of Pulitzer winning photographs. Deanne has also been exhibited at Visa pour L\'Image in Perpignan, France, and with UNICEF Photo of the Year. She has also been a contract photographer for the best-selling Day in the Life books. Deanne began her career as a staff photographer for the San Francisco Chronicle. According to journalist Ethan G. Salwen, Deanne \"focuses on creating quiet, personal, visually rich moments infused with passion and intelligence.\" When not on assignment, Deanne often lectures and teaches workshops. She is also a co-founder of Think Tank Photo, with her husband, photographer Kurt Rogers.",
    coursesCount: 1,
    id: 81
}, {
    name: "Dixie Dixon",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_ddixon_640x640.jpg",
    sort: 29,
    body: "Dixie Dixon is a Texas born and bred commercial fashion photographer. Just a few years out of college, this 20-something\'s career is unfolding one adventure after another. She was given her first Nikon Camera, the Nikon FG, at just 12 years old, which piqued her curiosity in the field and served as her sidekick in exploring the world. She would continually clock seven to ten hours in the darkroom without even realizing it. While in college she studied in London with a world-renowned fashion photographer and became deeply inspired by the beautiful illusion of fashion and commercial photography. It has been said that her idealistic vision of the world is reflected into every single frame - full of life, beautiful energy, and most of all, soul. Her passion has lead her to shoot internationally in places such as Cannes, Toronto, Vancouver, New York, Miami, Los Angeles, Ibiza, and Barcelona recently for brands, TV shows, commercial campaigns and editorial projects. Just this year she has named one of sixteen Nikon Ambassadors of the United States. Sensuous and polished, her images create a dream world in which romance is always alive. Her fresh vision has attracted clients such as Florsheim Shoes, Inside Edition, Nikon, CBS, G-Technology, Profoto, MAC Group, Billy Jealous, Nha Khanh, ProFoods, American Heart Association and Angelberry Organics. Her work has been published in Rangefinder, PDN, Professional Photographers Magazine, Dapper Magazine, Living Magazine, Beverly Drive Magazine, and Nikon World.",
    coursesCount: 2,
    id: 72
}, {
    name: "David LaFontaine",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_dlafontaine_640x640.jpg",
    sort: 30,
    body: "David LaFontaine is the Director of Content at DigitalFamily.com, as well as a \"Dummies\" book author and multimedia producer. He teaches online multimedia and digital publishing at the Annenberg School of Journalism at USC, and works with media companies around the world to help develop mobile and social media strategies that actually produce results. His whose work has earned him invitations to lecture all over the world, including a recent Fulbright Specialist program to train journalists, NGOs and pro-democracy groups in Ethiopia, and working with the Institute for the Digital Future of Journalism in Kiev, Ukraine for the past seven years, to help reporters use digital tools to get their stories heard by the rest of the world. To learn more about Dave, check out his site at http:\/\/davidlafontaine.com",
    coursesCount: 7,
    id: 91
}, {
    name: "Douglas Sonders",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_dsonders_640x640.jpg",
    sort: 31,
    body: "Douglas is a photographer and filmmaker born and raised in the Virginia suburbs just outside of Washington D.C. He graduated from Rochester Institute of Technology in 2004 with an Advertising Photography degree. He specializes in on-location photoshoots anywhere around the world.  He has a trusty Boxer named Winston Churchill and a deep love for anything with an engine. Douglas runs 8112 Studios, a video production company that handles everything from pre-production to filming to all post-production. Douglas has been named one of Washington D.C.\'s most influential people under 40 by Washington Life Magazine, and named one of D.C.\'s top 25 creatives of 2010. He has been profiled in Photo District News on several occasions for his lighting-style, body of work, and professionalism.",
    coursesCount: 1,
    id: 53
}, {
    name: "Eddie Tapp",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_etapp_640x640.jpg",
    sort: 32,
    body: "Eddie Tapp is an award-winning photographer, lecturer, consultant and author on digital imaging issues. As an award-winning photographer with over 20 years of experience in computer technology. Eddie has been actively involved in educating and consulting with corporations, studios, and agencies in the applications of digital imaging workflow, color management, pre-press, and digital photography globally. Clients include Epson, Eastman Kodak, Foveon, Polaroid, Apple Computer, The Society for Imaging Science and Technology, Dynacolor Graphics, Marathon Press, H&amp;H Color Lab, CPQ Color Lab, PhotoLogic (Ireland), PGC (Japan), DOD, DOE, US Army, US Navy, and other Government agencies along with a list of photographic studio operations.",
    coursesCount: 4,
    id: 30
}, {
    name: "Ed Greenberg",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_egreenberg_640x640.jpg",
    sort: 33,
    body: "Ed Greenberg has been a litigator practicing in New York City for well over thirty years, has represented some of the top photographers and illustrators in the business as well as the average Joes and Janes striving to make a name for themselves. Just some of his clients from his vast experience - Richard Avedon, Mel Sokolsky, Chris Usher, MacDuff Everton,  Michael Grecco, Anita Kunz, Nick Brandt and of course, the esteemed Jack Reznicki with whom he writes the photo blog, thecopyrightzone.com and \"The Copyright Zone\" column in Photoshop User magazine.  He has represented countless models, model agencies (including Ford Models), stylists, reps, agents and The Society of Illustrators.  He has been on the faculty and a guest lecturer in the Masters Program in Digital Photography at The School of Visual Arts in New York and The Hallmark Institute of Photography.  He has lectured nationwide on photographers\', artists\' and models\' rights on behalf of  NAPP, PPA, APA and EP.  His sage words have also appeared in his many articles and columns. Ed actually goes to court and tries real cases in front of actual judges and juries.  He has appeared before the trial courts of several states and has argued appellate cases at the State and Federal levels and has served as an expert witness retained by other attorneys in photo related matters.",
    coursesCount: 2,
    id: 37
}, {
    name: "Elsa Garrison",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_egarrison_640x640.jpg",
    sort: 34,
    body: "Elsa began her career with Allsport (later acquired by Getty Images) in 1996. Since then, she has covered a variety of assignments including: the Summer and Winter Olympic Games, the FIFA World Cup, the Stanley Cup Finals, the NBA Finals, the Super Bowl, the World Series, NCAA Men\'s and Women\'s Final Fours, NCAA Frozen Four(hockey), the Little League World Series and US Open Tennis. Her editorial work has appeared in numerous publications including: Sports Illustrated, ESPN, Time, the New York Times, the Washington Post and the Los Angeles Times. She has worked commercially for EA Sports, Gatorade, Nike, Reebok, Samsung and Sony. She has been a staff photographer with Getty Images for nearly 18 years, working in and around New York City. She lives in New Jersey with her husband John and their puppy, Daisy. She is a graduate of the Missouri School of Journalism.",
    coursesCount: 1,
    id: 101
}, {
    name: "Erika Larsen",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_elarsen_640x640.jpg",
    sort: 35,
    body: "Erika Larsen\'s work uses photography, video and writing to learn intimately about cultures that maintain strong connections with nature. She has been working as a magazine photographer since 2000 specializing in human-interest stories and sensitive cultural issues. Her work has been included in the Smithsonian National Portrait Gallery, National Geographic Society, The Swedish Museum of Ethnography and Ajtte S\u00e1mi Museum. Larsen is a recipient of several grants and fellowships including a Fulbright Fellowship, New Jersey State Arts Council Fellowship, Women in Photography Individual Project Grant, Lois Roth Endowment and a World Press Award. Her first monograph, Sami-Walking With Reindeer, was released in 2013.",
    coursesCount: 1,
    id: 83
}, {
    name: "Erik Valind",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_evalind_640x640.jpg",
    sort: 36,
    body: "Erik Valind is a Top Pro Photographer who specializes in the creation of compelling commercial work and energetic lifestyle imagery. People are the center of his photography and also serve as his inspiration. Having grown up on the brilliant beaches of the sunshine state, Erik developed an early appreciation for the transformative energy that light possesses. Now Erik uses light to add energy to every image, much as the Florida sunlight has energized him. \"I was born on the beaches of Treasure Island. I like that it sounds storybook when I tell people that. Since then I\'ve been blessed with what I call a semi-charmed life, and everything has been inspiration along the way. Now I get to create for a living. I leap at the opportunities to travel the country, to meet interesting people and to make great photographs of my journey. There\'s a tangible energy in my actions, and that energy is born from those around me. I love to teach and am always eager to learn. I claim to control light, but in reality light lends itself to us, and we just look good in it. Lets enjoy it together.\"",
    coursesCount: 5,
    id: 59
}, {
    name: "Fay Sirkis",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_fsirkis_640x640.jpg",
    sort: 37,
    body: "Fay Sirkis is an internationally recognized portrait artist, photographer and instructor who speaks at seminars both in the U.S. and in Europe. A New York based contemporary digital artist with a background in traditional fine art Fay attended the Pratt School of Professional Studies in New York City, where she became certified in graphic and web design. She also attended Rockhurst College CE in New York City for her certification in printing and pre-press. Fay has had a long career path in the arts. She\'s worked as a freelance graphic artist and was a graphic design instructor at Long Island University. She also was the art director for a publishing company, where she designed book covers, the interior design and layout for children\'s books. Now, her commissioned portraits and paintings are held in private collections internationally and are exhibited in museums and art galleries. Fay is also the founder of Fay\'s Art Studio, a high-end commission portrait painting studio, as well as a digital art training and consulting firm based in New York. Currently, Fay is on the advisory council of Corel Painter and is a beta tester and evangelist for Adobe Photoshop and Corel Painter. In fact, she was instrumental in the launching of the latest releases of the programs. She is a Corel \"Painter Master\" and a Canon \"Print Master\" whose work is featured in Corel\'s Art Gallery, as well as Canon\'s. In addition, her paintings appear in numerous ad campaigns for both Canon and Corel... many on the cover of the brochures. Fay is also part of the Dream Team instructors that teach at the Photoshop World Conferences. Her photo painting tutorials have been featured on the cover of many magazines, including Photoshop User. She even teamed up with KelbyOne to produce \"A Celebration of Art,\" a four-part DVD collection covering diversified training on different digital media. And Fay has just released three new DVD titles in honor of Adobe Photoshop\'s launch of the new CS5 and its painting tools. Along with all her experience, Fay is best known for her simplistic way of teaching... making the learning curve in the digital world easier to master!",
    coursesCount: 5,
    id: 29
}, {
    name: "Frank Doorhof",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_fdoorhof_640x640.jpg",
    sort: 38,
    body: "Frank Doorhof grew up in a family of enthusiastic analogue amateur photo\/videographers.  His teaching career rocketed when Frank joined KelbyONE. His classes about model photography are a big success online and he is an instructor in every PhotoshopWorld. \r\n\r\nIn 2013 he published the book \"Mastering the model shoot\", a bestseller and translated in Czech and Chinese, he also wrote a book about small flash in Dutch, and recorded over 10 instruction videos. Frank is a much sought after speaker on many tradeshows, photography events.\r\n\r\nFrank has an extensive learning program \"learning with Frank Doorhof\" with diverse courses, a guidance program and online video web podcasts. \r\n\r\nHis teaching style is inspired by the late Dean Collins and is based on the principle that the language of photography is light and that photographers should be able to speak the language instead of faking it in Photoshop (although he also loves to use Photoshop of course). The workshops are taught worldwide.\r\n\r\nDue to his technical knowledge, he is involved in many beta hard\/software testing. \r\n\r\nFrank is an Adobe influencer, DxO image master. X-rite Coloratti Master and a PSW DreamTeam Instructor. \r\n\r\nVisit www.frankdoorhof.com for daily updates with new images, behind the scenes videos, reviews, tips and tricks and much more.",
    coursesCount: 10,
    id: 39
}, {
    name: "Frank Salas",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_fsalas_640x640.jpg",
    sort: 39,
    body: "Recently named as one of the top wedding photographers in the world Frank Salas continues to be one of the most successful wedding photographers in Southern California. Frank is recognized as a Master Photographer and a Photographic Craftsmen by the Professional Photographers of America. He is also frequent speaker at WPPI and other national and international conferences. Frank is widely recognized for his Wedding photography techniques and digital training. His ongoing classes are featured online with webinars for OnOne Software and NIK\/Google Software including his newest classes now at Kelby One. His images are continually featured in various publications such as Rangefinder, PPA\'s Professional Photographer, Photoshop User Magazine, Shutterbug andseveral bridal magazines each year. Frank Salas has been awarded eighttimes \"Wedding Photographer of the Year\" by Professional Photographersof Orange County, California. His wedding images have garnered him numerous awards including Multiple Loan Collection, the prestigious KodakGallery Award for Photographic Excellence, the coveted Fuji Masterpiece Award multiple times and recently PPA\'s 2013 Grand Imaging Award in the Wedding Category.",
    coursesCount: 2,
    id: 70
}, {
    name: "Gabriel Biderman",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_gbiderman_640x640.jpg",
    sort: 40,
    body: "Gabe Biderman is a self-taught travel and fine art photographer who has been exploring night topography for over 20 years. Gabe loves the \u201cprocess\u201d of creating the image and pushing the limits! Gabriel\'s work has been exhibited in New York, London, San Francisco, and Hawaii. He is also the co-author of the recently released book Night Photography: From Snapshots to Great Shots.",
    coursesCount: 1,
    id: 61658
}, {
    name: "Glyn Dewis",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_gdewis_640x640.jpg",
    sort: 41,
    body: "Glyn Dewis is a professional photographer, retoucher, and trainer based in England. Glyn\'s photography and retouching sees him working for national and international clients ranging from the BBC, Sky TV and Air New Zealand to athletes, musicians, and other industry professionals. A Photoshop World Dream Team Instructor, KelbyOne Instructor and Adobe Influencer, Glyn also teaches his own series of workshops, provides one-on-one coaching and presents at events around the World covering all aspects of Adobe Photoshop from basic to advanced techniques. See his work at glyndewis.com and find videos on his YouTube channel at youtube.com\/GlynDewis.",
    coursesCount: 4,
    id: 63
}, {
    name: "Greg Mulvey",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_gmulvey_640x640.jpg",
    sort: 42,
    body: "Greg Mulvey is the Lead Editor and Motion Graphics Designer for Second City Communications, the business solutions division of Chicago\'s world-famous improv comedy theater, The Second City (alumni include Tina Fey, Steve Carell, Stephen Colbert, John Belushi, Bill Murray, to name a few). Greg also is a lifestyle photographer and wedding filmmaker. When not editing comedy videos for The Second City he enjoys spending time with his wife and 3 boys.",
    coursesCount: 3,
    id: 85
}, {
    name: "Gregory Heisler",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_gheisler_640x640.jpg",
    sort: 43,
    body: "Gregory Heisler is a photographer and educator renowned for his technical mastery and thoughtful responsiveness. His enthusiasm, curiosity, and drive are manifested in his hands-on approach to all aspects of the image making process.\r\n\r\nHis iconic portraits and innovative visual essays have graced the covers and pages of many magazines, including Life, Esquire, Gentleman\'s Quarterly, GEO, Sports Illustrated, ESPN, and The New York Times Magazine, yet he is perhaps best known for his more than seventy cover portraits for TIME magazine.  He has also photographed advertising campaigns for such clients as American Express, Benson &amp; Hedges, Dewar\'s, Merrill Lynch, and Nike.\r\n\r\nPrivate portrait commissions are another important focus of Gregory\'s work.  The first photographic portrait for New York\'s City Hall was his lithographic print of Mayor Edward I. Koch. Most recently, Gregory completed large-scale portraits of noted authors and actors on display at the National Arts Club in New York City.\r\n\r\nAmong the many kudos he has received are the Alfred Eisenstadt Award and the Leica Medal of Excellence.  Gregory has been profiled in American Photo, Communication Arts, Esquire, Life and numerous industry periodicals.\r\n\r\nAs a sought-after speaker and educator, he has taught at scores of workshops and seminars throughout the country and overseas.  Gregory will begin his new position as Distinguished Professor of Photography at the Newhouse School of Public Communications at Syracuse University in the fall of 2014.\r\n\r\nHis bestselling new book, Gregory Heisler: 50 Portraits, was released by Random House\/Amphoto in October 2013 and is in its third printing..",
    coursesCount: 1,
    id: 77
}, {
    name: "Heather Chinn",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_hmchinn_640x640.jpg",
    sort: 44,
    body: "Heather \u201cThe Painter\u201d is an award winning Corel Painter Master Elite, Golden Artist Educator, Corel Approved Painter Educator, PPA Master Artist,Master Photographer, Master Craftsman, and all around painting &amp; research geek. An experienced live presenter, she has been teaching Corel Painter and mixed media at multi-day workshops, seminars, and PPA affiliate schools nationally for the last nine years. Heather\'s masterpieces are consistently featured in the prestigious, annual Loan Collections where only a small percentage of the world\'s best photographic artwork is selected among thousands of entries. Her belief that anyone can easily use Corel Painter to create their own keepsakes led her to a speaking platform at the beautiful Phoenix Symphony Hall for the Professional Photographers of America\'s International Convention in Phoenix, Arizona in January 2014. A multi time Diamond and Platinum Photographer of the Year at the International Print Competition, Heather recently was approved as an IPC artist juror.",
    coursesCount: 1,
    id: 67135
}, {
    name: "Jack Davis",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_jdavis_640x640.jpg",
    sort: 45,
    body: "Best-Selling Author Jack \"Wow\" Davis is one of the world\'s leading experts on Adobe Photoshop and Lightroom, as well as himself being an award-winning designer and photographer. Jack is co-author of a dozen award-winning titles on Photoshop and Design, with almost 2 million books in print.\r\nFor almost 30 years Jack has been an internationally renowned spokesperson on digital imagery, and routinely teaches at conferences and workshops around the world. Davis was one of the first inductees into the Photoshop Hall of Fame for his lifetime contributions to the industry. Jack has an MA and MFA in Digital Imagery, and when he\'s not in his studio in San Diego, he\'s usually somewhere in Polynesia, camera and paint brush in hand, capturing the local color.",
    coursesCount: 0,
    id: 46
}, {
    name: "Jack Reznicki",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_jreznicki_640x640.jpg",
    sort: 46,
    body: "Jack Reznicki is a commercial photographer specializing in people and children based in New York City. His creative problem solving has helped promote products and services for many companies such as Tylenol, The Wall Street Journal, Hyatt,  Toys \"R\" Us, Kodak, Reader\'s Digest, Crest, AT&amp;T, Playtex, and several Time Magazine covers. Jack is the author of several books on commercial photography including \"Studio and Commercial Photography- A Kodak Pro Workshop\" book. For over 4 years, Jack\'s insights to professional photography could be found in Petersen\'s Photographic magazine with his popular \"Pro Vision\" column. His writings have also appeared in other photography magazines.",
    coursesCount: 6,
    id: 28
}, {
    name: "Janine Warner",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_jwarner_640x640.jpg",
    sort: 47,
    body: "Janine Warner\'s best-selling books and videos on web design have won her an international following and earned her speaking and consulting engagements around the world. Since 1996, she\'s written more than a dozen books about the Internet, including Web Sites For Dummies (DIY), Dreamweaver For Dummies (every edition), and her latest, Mobile Web Design For Dummies. She\'s also a regular contributor to Layers Magazine. Janine is the host of more than 50 hours of Web design training videos on Adobe Dreamweaver and CSS. She has worked on large and small Web site projects, and she is the creator of the Web design training site DigitalFamily.com.",
    coursesCount: 8,
    id: 14
}, {
    name: "Jay Maisel",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_jmaisel_640x640.jpg",
    sort: 48,
    body: "Photographer Jay Maisel\'s career spans 40 years. His name has become synonymous with vibrant color photography that uses light and gesture to create countless unforgettable images for advertising, editorial, and corporate communications.",
    coursesCount: 4,
    id: 25
}, {
    name: "Jeff Revell",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_jrevell_640x640.jpg",
    sort: 49,
    body: "Jeff Revell has been shooting professionally for over 25 years, and has a wide range of expertise in everything from landscape to travel to urban photography. Widely known as the photographer behind the popular PhotoWalkPro blog. Jeff is also the author of 7 books on digital cameras and photography in the best-selling series, From Snapshots to Great Shots from Peachpit Press. Jeff has written books on the Canon 50D, T1i\/500D, T2i\/550D, the Nikon D3000, D5000, D3100, and his latest release on Exposure. www.photowalkpro.com",
    coursesCount: 2,
    id: 38
}, {
    name: "Jennifer Wu",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_jwu_640x640.jpg",
    sort: 50,
    body: "Jennifer Wu is a nature and landscape photographer, specializing in creating stunning images of the night sky and stars. Since January 2009 Canon U.S.A. selected Jennifer to be one of the world\'s 36 best photographers for the Explorer Of Light program, an elite group of internationally recognized photographers. Jennifer is the co-author and photographer of the book, Photography Night Sky: A Field Guide to Shooting After Dark (2014, Mountaineers Books). With a BA in Photography from California State University, Jennifer has spent over 28 years photographing, dedicating 10 years to traditional black and white photography. Jennifer\'s images have been published in numerous magazines, newspaper articles and advertisements including: Fortune, Popular Photography, Photo District News, Sierra Club, Sierra Styles, ProfiFoto, Outdoor Photography, Digital Photo, Shutterbug, Bloomberg, BusinessWeek, Time, Canon U.S.A., and many more. Her work has also been exhibited at nationally recognized galleries and art shows. Jennifer has taught photography and digital imaging at The California State University of Sacramento. She enjoys sharing her passion and techniques for shooting nature photography through seminars and workshops for Canon U.S.A., Light Photographic Workshops, aFilm International Film Workshops in Spain and other photographic groups nation wide. She leads workshops in the US in Yosemite, Eastern Sierra, Death Valley, Big Sur, Alaska, Hawaii and internationally in Iceland, Tanzania, Namibia, Greenland and more. When Jennifer is not shooting in world\'s most unique locations or leading a workshop, she resides in Sacramento, CA.",
    coursesCount: 1,
    id: 75
}, {
    name: "Jeremy Cowart",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_jcowart_640x640.jpg",
    sort: 51,
    body: "Jeremy Cowart is a professional photographer from Nashville, Tennessee. Beginning his photography career in 2005, Jeremy quickly became a respected artistic voice in the industry. Having shot numerous musicians, entertainers and celebrities, Jeremy is also the founder of Help-Portrait Movement, a worldwide movement of photographers giving free portraits to those less fortunate. As his list of clients continues to grow, so does Jeremy\'s desire to improve, share, teach, and give back to those around him.",
    coursesCount: 5,
    id: 41
}, {
    name: "Jerry Ghionis",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_jghionis_640x640.jpg",
    sort: 52,
    body: "Widely regarded as one of the top five best wedding photographers in the world. Jerry Ghionis is based in both Melbourne, Australia and Beverly Hills, California. He travels frequently on international photography assignments and speaking engagements. With the flair of a fashion designer and the ingenuity of an architect his style can be described as vintage glamour meets contemporary fashion. Renowned for his creativity, he not only has the ability to capture the natural magic on your wedding day, but creates a magic of his own. His natural love and empathy for people creates powerful visual story telling. Jerry was named in the first ever list of Top Ten Wedding Photographers in the World by American Photo Magazine. He won the WPPI (Wedding &amp; Portrait Photographers International) Wedding Album of the Year eight times and was noted by WPPI as one of the Top Five Wedding Photographers in the World. Jerry was also named as the 2011 Australian Wedding Photographer of the Year by the AIPP (Australian Institute of Professional Photography). For four years in a row Jerry has achieved the PPA (Professional Photographers of America) Diamond Level Photographer of the Year Award. In 2011 Jerry was named by PDN magazine as one of the top photography workshop instructors in the world.",
    coursesCount: 2,
    id: 57
}, {
    name: "Jim DiVitale",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_jdivitale_640x640.jpg",
    sort: 53,
    body: "Jim DiVitale has been an Atlanta commercial advertising Photographer for over three decades specializing in product photography and computer photo illustration. He is a PPA Master Photographer, Master of Electronic    Imaging, Photographic Craftsman, Fellow of the American Society of Photographers and a sponsored instructor for Canon, Adobe, and X-Rite. View Jim\'s award winning portfolio and digital image blog at: www.DiVitalePhotography.com.",
    coursesCount: 5,
    id: 13
}, {
    name: "James Schmelzer",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_jschmelzer_640x640.jpg",
    sort: 54,
    body: "James Schmelzer is an award winning photographer, lecturer, and has been the technical representative for F.J. Westcott Company for over 25 years. James has been actively involved in designing new light modifier products as well as creating instructional videos demonstrating control of light. He conducts workshops, speaks at seminars, and demonstrates lighting at tradeshows. He\'s also the author and creator of the Quality of Light video series. James has been a member of the Professional Photographers of America, where he holds the Master Craftsman Photographer Degree. He also holds a Master\'s Degree with the Wedding &amp; Portrait Photographers International. James is owner of Elite Photographic Studio in Shelby Township, Michigan where he specializes in High School Senior portraits and Weddings.",
    coursesCount: 4,
    id: 36
}, {
    name: "Joe Glyda",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_jglyda_640x640.jpg",
    sort: 55,
    body: "Joe Glyda is a recognized commercial photographer specializing in food and product photography.  Joe retired from Kraft Foods as the manager and primary photographer of their Creative Services department after 36 years. He continues his photographic career through Joe Glyda Photography, Inc. of which he established in 1988. He currently lives in Jenks, OK, and has expanded his business into architectural and aviation photographic projects as well as pre press retouching for various companies. He has been a photographic instructor at the Texas School of Professional Photography since 1995 and has been teaching on the NAPP instructor team since 2001. Joe is a PPA Master Photographer and Photographic Craftsman, and is a Certified Professional Photographer. Joe will uncover many tricks of the trade, highlight useful industry tips, and inspire with his LIVE food shoot. The Art of Digital Photography session is designed to challenge your creativity with use of things you encounter, but likely overlook, throughout daily life.",
    coursesCount: 3,
    id: 22
}, {
    name: "Joel Grimes",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_jgrimes_640x640.jpg",
    sort: 56,
    body: "After receiving a BFA in Photography from the University of Arizona in 1984, Joel began working as a commercial advertising photographer based out of Denver, Colorado. His style of capturing portraits has earned him the attention from many of the nation\'s finest Advertising Agencies and Art Buyers. Due to his strong fine art background, Joel strongly believes in creating images that go beyond the normal commercial application. He stated, \"I am driven to create images that would hang on the walls of any gallery\". Some of his clients include AARP, Abbott Laboratories, AES, Archer Daniels Midland, Arizona Office of Tourism, AT&amp;T, Carnegie Institution, Case Logic, Dial, Febreze, Goldman Sachs, Hudson Trail Outfitters, Kodak, Nikon USA, Pentax USA, Philip Morris, Phillips 66, PSE Archery, Red Bull, Roper, Quest, Sony, Sturm Ruger Co., Village Inn, Visa, Volvo, US Postal Service, USA Boxing, Wacom, Western Gas, Xcel Energy, and many more. Joel\'s assignments have taken him to every continent and to over fifty counties across the globe. In addition to his assignments, Joel has also become a voice in the photographic community promoting the creative process of photography through seminars and workshops. \"I have a passion to see people get excited about the creative process\". In 1991, Joel produced his first national-interest coffee table book: Navajo, Portrait of a Nation. On top of this, the book has received a number of photographic and graphic design awards. Currently, Joel has a home in Tucson, Arizona that he shares with his wife and four children and is working out of his personal studio in Los Angeles, California taking on new clients, building portfolios, and sharing his passion for photography wherever he goes.",
    coursesCount: 6,
    id: 44
}, {
    name: "John Keatley",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_jkeatley_640x640.jpg",
    sort: 57,
    body: "John Keatley has swapped photography stories with Annie Leibovitz, taken geography lessons from Sarah Palin, and learned to craft the perfect cocktail with the best bartender in the country.  He will climb a tree, fight off a snow monster, or bury someone in kitty litter, all in the name of getting the perfect shot.  John is known for putting even the most camera-shy individual completely at ease in front of the lens.  His quick sense of humor and down-to-earth outlook are what allow him to connect with his subjects and create dramatic images. John has been shooting professionally since 2001, working with agencies, publications, companies, actors, artists, and luminaries the world over. He has an itchy trigger finger.",
    coursesCount: 2,
    id: 127
}, {
    name: "John McQuiston",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_jmcquiston_640x640.jpg",
    sort: 58,
    body: "John McQuiston works as a writer, on-camera talent and gear expert for KelbyOne and BH Photo\/Video. His background includes nearly two decades working in television news, where he earned Emmy nominations for both news and sports anchoring. The Society of Professional Journalists twice gave John second place awards as Florida\'s Anchor of the Year. He will not ruin the symmetry by entering a third time. Jobs in Florida, Ohio, Virginia, Kentucky, Rhode Island, Connecticut, Maryland, Delaware and North Carolina helped John build an impressive collection of license plates. John also makes documentary films, plays and records original music, and begins testing new camera gear by photographing his cats, which would prefer that he spend that time cleaning their litter box. See his photography at PhotoQuist.com.",
    coursesCount: 6,
    id: 84
}, {
    name: "John Paul Caponigro",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_jpcaponigro_640x640.jpg",
    sort: 59,
    body: "John Paul Caponigro, the author of Adobe Photoshop Master Class, is an internationally reknowned artist. A contributing editor for Digital Photo Pro and Camera Arts and a columnist for Photoshop User and apple.com, he teaches workshops both privately in his studio and at select public venues. A member of the Photoshop Hall of Fame, a Canon Explorer of Light, and an Epson Stylus Pro, his clients include Adobe, Apple, and Kodak. Learn more by visiting www.johnpaulcaponigro.com and get over 100 free downloads plus a free subscription to his enews Insights.",
    coursesCount: 4,
    id: 20
}, {
    name: "Josh Haftel",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_jhaftel_640x640.jpg",
    sort: 60,
    body: "Josh Haftel was interested in photography at a pretty young age, but it wasn\'t until he was Yearbook Photographer in high school that he found it to be his true calling. Going on to graduate with a degree in photography from the renowned Rochester Institute of Photography, Josh has worked in the industry for over a dozen years. He currently manages the entire line of professional and mobile\/consumer products for acclaimed photographic software developer Nik Software. In his spare time, he enjoys interacting with inspiring photographers around the world, travels extensively, and delights in epicurean explorations of the highest order.",
    coursesCount: 1,
    id: 61
}, {
    name: "Julieanne Kost",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_jkost_640x640.jpg",
    sort: 61,
    body: "Joining Adobe in 1992, Julieanne has learned her craft through hands-on experience and now serves as the Senior Digital Imaging Evangelist. Spanning digital imaging and illustration, her role includes customer education, product development, and market research. She is a frequent contributor to several publications, a speaker at numerous design conferences and tradeshows, and a teacher at distinguished photography workshops and fine art schools around the world.",
    coursesCount: 1,
    id: 24
}, {
    name: "Justin Buss",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_corel_640x640.jpg",
    sort: 62,
    body: "Justin is a Painter Master Elite and successful freelance illustrator and concept artist based out of Nampa, Idaho. Having been Mentored by former classic Disney Animator, Dave Zaboski, you can see the whimsical influence in his current artistic style. Justin is an invaluable extended member of the Painter team who helps to develop brushes, tutorials and artwork that represent the Painter brand.\r\nhttp:\/\/buusstudio.wixsite.com\/creations",
    coursesCount: 3,
    id: 63383
}, {
    name: "Justin Wojtczak",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_jwojtczak_640x640.jpg",
    sort: 63,
    body: "Justin is one of the rising stars of the wedding photography world in Atlanta, Georgia. His photographic roots trace back to his family\'s connection to Kodak, and his love for the camera came to life while overlooking the hills of Peru. Justin\'s work has been named the \"Best of Weddings\" in The Knot, America\'s leading wedding brand award-winning website, three years running 2011-2013. Justin\'s fresh and creative approach to capturing special moments \"that others miss\" has earned praise and publication from Style Me Pretty, Atlanta Weddings, Atlanta Bridal, Jezebel and The Knot. As owner of 375 Photography, Justin is dedicated to capturing and creating an experience that the bride and groom will never forget. What truly sets Justin apart is his commitment  - learning to see through the eyes of couples in order to find the images that not only commemorate the day, but bring memories and emotions bursting from each photo. Justin is dedicated to fusing creativity and life into everything he photographs.",
    coursesCount: 1,
    id: 78
}, {
    name: "Karen Hutton",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_khutton_640x640.jpg",
    sort: 64,
    body: "Karen Hutton is an International Landscape and Travel Photographer, Artist, Speaker, Author, Educator, Voice. She has over 2 million followers on social media; with over 11 billion views of her photographic work. She is a Professional Fujifilm-X Photographer and has been featured in Talks at Google, Photo Plus Expo and on Stuck in Customs, TWiP, Macphun Software, Forbes.com, The Grid, Rick Sammon\'s DPE Podcast. Karen lives in the Sierra Nevada mountains of California.",
    coursesCount: 1,
    id: 59137
}, {
    name: "Katrin Eismann",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_keismann_640x640.jpg",
    sort: 65,
    body: "Katrin is 1\/3 artist, 1\/3 author, and 1\/3 educator. She received her BFA degree in Photographic Illustration from the Rochester Institute of Technology and her MFA degree in Design from the School of Visual Arts. She has co-authored: Web Design Studio Secrets, Adobe Photoshop Studio Secrets, Real World Digital Photography, and authored Photoshop Restoration and Retouching and Photoshop Masking &amp; Compositing. Her clients include Apple Computer, Adobe Systems, Eastman Kodak, Nikon USA, Fuji Film, and the US Navy. She spends a great deal of time in airports waiting for flights to domestic and international destinations where she teaches and presents on a wide variety of digital imaging topics. To learn more about Katrin please visit visit www.katrineismann.com.",
    coursesCount: 2,
    id: 21
}, {
    name: "Kaylee Greer",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_kgreer_640x640.jpg",
    sort: 66,
    body: "Kaylee Greer is an internationally recognized private and commercial pet photographer. She is living out her dream through a camera lens in gorgeous Boston, Massachusetts. She\'s traveled the world teaching pet photography workshops and has seen her work published in many major industry editorial titles. Her images grace calendar lines, greeting cards, products, packaging and advertising campaigns throughout the commercial pet industry. Her photographic style is drawn directly from the inspiration she finds inside the soul of a dog. She is fueled by the joy, whimsy and unrelenting happiness that is so uniquely canine. Kaylee is known for her love of vibrant colors and unique process of capturing the comedy and character of dogs. Through her business, Dog Breath Photography, it is one of Kaylee\'s strongest passions to give a voice to the voiceless by volunteering her time to local shelters and photographing the abandoned and homeless animals who lie in wait for a second chance.",
    coursesCount: 3,
    id: 39494
}, {
    name: "KelbyOne",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_kelbyone_640x640.jpg",
    sort: 67,
    body: "",
    coursesCount: 0,
    id: 48
}, {
    name: "Kevin Gilbert",
    image: "\/\/img.kelbymediagroup.com\/kelbyone_enterprise\/2016\/03\/k1_instructors_kgilbert_640x640.jpg",
    sort: 68,
    body: "Kevin T Gilbert is an award-winning photojournalist, teacher, entrepreneur, and digital photography evangelist based in Washington State.\u00a0He has recently been added to the Panasonic Lumix Luminary team. For over 30 years, Kevin has been shooting news and features of the world, from the White House to halls of Capitol Hill, Super Bowls to Superpower Summits, from the mud of the Kentucky horse tracks to the back lot sets of TV\'s biggest reality shows.\u00a0\r\nKevin has been elected 5 times as President of the White House News Photographers Association and won over 40 awards in the annual Eyes of History photo contests.\u00a0During his time on the streets of DC, he has photographed four sitting Presidents, as well as two fictional Presidents during a stint shooting on The West Wing television show for NBC. In 1997, Kevin teamed up with reality television super-producer Mark Burnett, and has shot over 20 television productions including The Apprentice, Eco-Challenge, The Contender, Rock Star INXS, and others.\u00a0He complimented his reality television work, becoming the first contract still photographer Discovery Channel, Animal Planet, and TLC, shooting stills all around the world. Kevin has shot over two million digital files since his early days in digital on the Presidential campaign of 1996.\u00a0He has shot in 70 countries and shot and tested over 150 digital cameras. A leading voice for the power and emotion of photography, Kevin is the founder, of Blue Pixel, one of the country\'s most influential digital creative groups, and consults for the biggest names in retail, computers, software and camera manufacturing.\u00a0He also leads a national initiative called PhotoCoaches\u2122, teaching people to take better pictures, tell interesting stories, and enjoy the happiness of taking pictures! In 2012, Kevin helped form Mylio and is the Memory Evangelist, teaching and speaking all over the world about the importance of safeguarding our digital lives for prosperity.\u00a0Everyday he meets someone who needs to save and find their pictures! Kevin can always be found having fun with cameras, helping others to achieve success in photography, chasing the light, and enjoying the moment, one frame at a time.\r\nKevin lives in Redmond, WA with his wife and PhotoCoaches\u2122 partner Jamie Schander and their 2-year-old daughter\u00a0(and main unpaid model) Viola Grace.",
    coursesCount: 1,
    id: 41009
}, {
    name: "Matt Kloskowski",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_mkloskowski_640x640.jpg",
    sort: 69,
    body: "Matt is the founder and CEO of MattK.com. He\'s a best-selling author of over 20 books and teaches Lightroom, Photoshop and photography at seminars and conferences around the world.",
    coursesCount: 48,
    id: 98
}, {
    name: "Kristina Sherk",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_ksherk_640x640.jpg",
    sort: 70,
    body: "For the past 10 years, Kristina Sherk has been a high-end photo retoucher based out of Washington, D.C. and is called the \"picture whisperer\" by some. She specializes in realistic retouching. She\'s a contributing educational author for publications like Shutter Magazine, Photoshop User Magazine and Lightroom Magazine. She is also the author behind Photoshop Cafe\'s Fashion Retouching DVD. Her more reputable corporate clients include National Public Radio, Time Inc., XM Satellite Radio, Cotton Inc. and most recently, Hasselblad.",
    coursesCount: 4,
    id: 128
}, {
    name: "Laurie Excell",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_lexcel_640x640.jpg",
    sort: 71,
    body: "Laurie spent the first 25 years of her career in photographic sales helping pros and hobbyists alike decide which photographic equipment best suited their needs. All the while, she was an avid photographer. In 2000 she left sales to become a full-time professional wildlife and nature photographer. She has been published in Outdoor Photographer, Outdoor Photography (UK), Photoshop User, and Layers magazines. You will also find her photography on Audubon calendars, as well as postcards, calendars, and posters for the National Park Service.",
    coursesCount: 5,
    id: 16
}, {
    name: "Larry Becker",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_lbecker_640x640.jpg",
    sort: 72,
    body: "For more than 25 years, Larry has been simplifying technology and helping people understand it through books, magazine articles, DVDs, online videos, and live training. Larry has been seen by millions of viewers worldwide on web TV shows like DTownTV and Photoshop User TV, but he\'s most widely known for his work as a trainer and gear reviewer for B&amp;H Photo. Larry\'s technology training landed him on national TV with Leo LaPorte, on training DVDs in the packages with Sony PDAs, and sharing a stage with Buzz Aldren while representing Palm, Inc. at the giant tech trade shows in Las Vegas. His client list also includes Pepsi, GE, Lawrence Livermore National Labs, and the National Association of Realtors.",
    coursesCount: 28,
    id: 11
}, {
    name: "Lindsay Adler",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_ladler_640x640.jpg",
    sort: 73,
    body: "Lindsay Adler is a professional portrait and fashion photographer based in New York. For the past 10 years she has owned and operated a portrait, fashion, and wedding studio distinguished by its \'fashion flair\' approach to imagery. As a New York fashion photographer, she has written editorials that have appeared in dozens of publications internationally. She regularly contributes to a variety of major photo publications, including \"Professional Photographer,\" \"Rangefinder Magazine,\" \"Popular Photography,\" and more. In May 2010 Adler published her first book, \"The Linked Photographers\' Guide to Online Marketing and Social Media.\" In February 2011 she published her second book, \"Fashion Flair for Portrait and Wedding Photography.\" Adler, a Sigma Pro, is sponsored by a variety of major photography companies and spends a lot of her time traveling to teach workshops and at major conferences. You can find her as a platform speaker at events like WPPI, PhotoPlus, NECCC, PSA, and many more. She teaches thousands of photographers annually on topics ranging from retouching to fashion techniques to studio lighting. Though only in her mid-twenties, her career and photography have received much acclaim and she has already become a respected name in the business.",
    coursesCount: 7,
    id: 54
}, {
    name: "Lou Freeman",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_lfreeman_640x640.jpg",
    sort: 74,
    body: "For over three decades, Lou Freeman has practiced and shaped the art of Fashion, Glamour, Fine Interior, and Lifestyle Photography. Her clients are among the most respected and recognized names in America and Europe. Lou\'s work is powerful and visionary, recognized by being featured in 100\'s of editorial fashion magazines and fashion catalogs as well as being immersed in the publishing industries and advertising worlds, which awarded her with the prestigious OBIE and ADDY Awards.\r\n\r\nSome of the major fashion and lifestyle magazines include Glamour, Elle, Harper\'s Bazaar Seventeen, Vanity Fair,Elle Decor, Metropolitan Home, Architectural Digest, People, and Modern Bride.\r\n\r\nIn 1988, her work captured the interest of executives at Playboy Enterprises Inc, one of America\'s most widely circulated brands and magazines. She became the second woman ever to shoot for Playboy Magazine. For twelve straight years, she delivered nearly 600 spreads for the publication, giving women a voice in the work that portrayed them. As a photographer her mantra then as well as now is to bring beauty, strength and sophistication to everyone she shoots.\r\nHer ability to produce compelling concepts featuring simple to highly stylized imagery that connects with consumers combined with her ability to work across the globe has allowed her to create imagery for big name brands and brand concept design plans many of which served long term relationships.",
    coursesCount: 2,
    id: 80
}, {
    name: "Mia McCormick",
    image: "\/\/img.kelbymediagroup.com\/kelbyone_enterprise\/2016\/03\/k1_instructors_mmcmormick_640x640.jpg",
    sort: 75,
    body: "Mia McCormick works as a resident video technology expert for KelbyOne and B&amp;H Photo.  She\'s a KelbyOne Instructor with courses ranging from basic camera operation to capturing outstanding video on your DSLR.  Mia also conducts a series of business and inspirational interviews providing insights from some of the world\'s leading photographers.  Her experience in newsgathering brings viewers closer to the professionals behind the camera, revealing what inspires and drives the world\'s most creative minds.",
    coursesCount: 22,
    id: 95
}, {
    name: "Joe McNally",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_jmcnally_640x640.jpg",
    sort: 76,
    body: "Joe McNally is an internationally acclaimed photographer whose career has spanned 30 years and included assignments in over 50 countries. He has shot cover stories for TIME, Newsweek, Fortune, New York, Entertainment Weekly, The New York Times Sunday Magazine, and Men\'s Journal. He has been at various times in his career a contract photographer for Sports Illustrated, a staff photographer at LIFE, and, currently, an ongoing 23-year contributor to the National Geographic, shooting numerous cover stories for those publications.",
    coursesCount: 24,
    id: 100
}, {
    name: "Michael Corsentino",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_mcorsentino_640x640.jpg",
    sort: 77,
    body: "Michael Corsentino is an Orlando, FL based editorial fashion and portrait photographer. In addition to his busy shooting schedule Michael is also a passionate educator teaching workshops domestically and internationally. A successful author with two books to his credit Michael is an instructor for\u00a0KelbyOne, writes a monthly lighting column for Shutter Magazine, and is a regular contributor for Photo District News, Photoshop User Magazine and jointhebreed.com",
    coursesCount: 1,
    id: 51217
}, {
    name: "Mike Kubeisy",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_mkubeisy_640x640.jpg",
    sort: 78,
    body: "Mike Kubeisy has been shooting celebrities in Hollywood for over 30 years as a Motion Picture and Television Stills Photographer. No photographer\'s work is seen by more people than Mike\'s work worldwide.\r\n\r\nMike is best known for his work on countless popular shows that are household names. His current projects are NCIS and NCIS: Los Angeles.\r\n\r\nMike is a Trainer for KelbyOne, a writer for Photofocus,\u00a0and a instructor at the\u00a0Los Angeles Center of Photography. Mike is also a member of the \r\nInternational Cinematographers Guild.",
    coursesCount: 5,
    id: 56
}, {
    name: "Matthew Jordan Smith",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_mjsmith_640x640.jpg",
    sort: 79,
    body: "Matthew Jordan Smith is an American photographer based in Los Angeles. He has photographed some of the most famous people in the world - including the President of Iceland, Oprah Winfrey, and the richest man in the world, Carlos Slim. He is best known for his portraits of celebrities, actors, and models. His clients include Olay, Pantene, Revlon and Sony Entertainment. His celebrity clients include Tyra Banks, Queen Latifah, and Aretha Franklin. The Sony Corporation selected him as one of their Artisans of Imaging and he is honored to be part of this elite group.\r\nMatthew launched his career as a photographer in New York City, shooting for major magazines and advertising agencies, and in his spare time he focuses on personal projects. On February 16, 2015, (Presidents\' Day) Oro Editions\/ Goff Press published Matthew\'s third book,Future American President; 50 States, 100 Families, Infinite Dreams. Future American President features portraits of children from 100 families and from every state in America. The goal of Matthew\'s third book is to inspire every child in America to dream big knowing they have infinite possibilities.\r\nMatthew has received numerous awards and honors throughout his photographic career. In March of 2014 he received the Vision Award for his upcoming book, Future American President. In April of 2014, he received the Power of Image award in Beijing China and his work is currently on tour throughout Asia. In July of 2014 he completed shooting a series of images around the North Pole and is planning an exhibit of this work. Matthew has taught at the prestigious School of Visual Arts and the Santa Fe Photographic Workshops in New Mexico. A native of New York City, Matthew resides in Los Angeles.",
    coursesCount: 1,
    id: 103
}, {
    name: "Moose Peterson",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_mpeterson_640x640.jpg",
    sort: 80,
    body: "Moose\'s true passion has always been and remains photographing the life history of our endangered wildlife and wild places. Since 1981 he and his wife Sharon have dedicated their lives to this pursuit. Educating the public about our wild heritage is their hallmark. Moose\'s aviation photography has the same goal of preserving our aviation heritage and the freedoms they protect, pictorial and oral for future generations. Along the way Moose has been honored for his photographic passion: a Nikon Ambassador USA, Lexar Elite Photographer, recipient of the John Muir Conservation Award, Research Associate with the Endangered Species Recovery Program, just to name a few. He was part of Epson\'s Finish Strong ad campaign. Moose was the creative producer\/photographer of his acclaimed film: Warbirds and The Men Who Flew Them. He shares his knowledge through his writing, being published in over 143 magazines worldwide, author of 28 books including his latest, Photographic FUNdamentals, Taking Flight and best seller Captured. He lectures across the country to thousands upon thousands of photographers every year. One of the original Nikon shooters to receive the D1 in 1999, Moose embraced this new technology, becoming the only wildlife photographer in the world to shoot strictly digital in the early years. While a beta site for all the major hardware and software manufacturers, Moose continues being a creative innovator of new techniques both behind the camera and the computer, which is the driving force behind his photography and goals.",
    coursesCount: 19,
    id: 27
}, {
    name: "Mark Rodriguez",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_mrodriguez_640x640.jpg",
    sort: 81,
    body: "Mark Rodriguez is a conceptual artist based in Tampa, Florida. Using both photographic and traditional painting techniques, he creates work that blurs the line where reality ends and his own imagination begins. His work is an eclectic merging of dark, humorous, witty-and often times-thought provoking themes and ideas. Most known for his self-portraiture work, he will go to great lengths to achieve the shots in his head. From covering himself in syrup and feathers, to building a full sized electric chair, to jumping backwards off a roof, there is not much he won\'t do in the name of art.  His Photoshop skills have earned him the nickname \"Godriguez\" which reflects in his tagline \"I am not a god, but I play one in Photoshop.\" His most recent accomplishment was winning the \"Best in Show\" Guru award at Photoshop World in 2015. Along with his photographic work, he is also an illustration artist, graphic designer and creates animations and character voices for the nonprofit group WhyU.",
    coursesCount: 1,
    id: 49219
}, {
    name: "Maggie Steber",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_msteber_640x640.jpg",
    sort: 82,
    body: "Maggie Steber is a documentary photographer known for her humanistic stories of people and cultures in crisis. She has worked in 64 countries, producing significant bodies of work on Haiti, Native Americans, and memory loss. She has photographed for 30 years in Haiti and published a book with Aperture entitled DANCING ON FIRE: Photographs from Haiti.  The full body of work can be viewed on audacityofbeauty.com.  Steber\'s photographs are included in the Library of Congress as well as other private and public collections. In 2014, she was named as one of eleven Women of Vision by National Geographic Magazine and was part of a traveling exhibition and book project. She has served as a contract photographer for Newsweek and as a picture editor and educator. She was the Assistant Managing Editor for Photography and Features at The Miami Herald for four years. She has served as a judge on many competition and grant panels and has taught at the World Press Photo Master Classes in Amsterdam, the Foundry Workshop, LOOK3 Photo Festival, Bursa Photo Festival in Turkey, and at various US workshops. Clients include National Geographic Magazine, The New York Times, Smithsonian, The New Yorker and many American and European publications.  Her work is exhibited internationally. Honors include: - Leica Medal of Excellence - The Overseas Press Club\'s Rebbot Award for Best Reporting from Abroad - Medal of Honor for her Contribution to Journalism from the Univ. of Missouri - First Prize in World Press Photo - First Prize in World Press Photo and Pictures of the Year - The Ernst Haas Grant - The Alicia Patterson Grant - The Knight Foundation Grant - Three-time finalist for the Eugene Smith Grant",
    coursesCount: 1,
    id: 92
}, {
    name: "Nicole Young",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_nyoung_640x640.jpg",
    sort: 83,
    body: "My name is Nicole and I currently live in the Bay Area of California. In the past I\'ve lived in Portland, Seattle, Salt Lake City, Japan and Hawaii, and I grew up in Nebraska. In other words, I move a lot. I\'m a full-time photographer and author, with four books published through Peachpit Press, two eBooks published through Craft&amp;Vision and also one self-published title. My photography specialties are food and landscape, and I also create stock images for my portfolios over on iStockphoto and Getty Images. I also have an online store, where I sell post-processing tools, such as preset, actions and textures, along with some of my own self-published eBooks, all at very affordable prices. I love to teach, learn and share what I know through my blog, articles, podcasts, interviews and training materials. I love Lightroom and Photoshop, and I\'m an Adobe Certified Expert (ACE) in CS4\/CS5\/CS6. I also contribute regular video tips on Lightroom and Photoshop on the National Association of Photoshop Professionals and Photofocus websites, as well as have several articles in magazines such as Photoshop User and Lightroom Magazine.",
    coursesCount: 1,
    id: 74
}, {
    name: "Pete Collins",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_pcollins_640x640.jpg",
    sort: 84,
    body: "Pete Collins is one of the \"Photoshop Guys\" with KelbyOne. He is the co-host of Photoshop User TV and regular contributor toPhotography Tips N Tricks and the Grid. Pete has a regular \"Down and Dirty\" article in Photoshop User Magazine as well as being the creator and host of \"Pixel Fight Club\" over on the KelbyOne member site. He has an art degree and loves photography, graphic design and illustration. He is also the tallest and most humble of the Photoshop Guys, but since he is the one writing this... the humility thing may be a lie.",
    coursesCount: 51,
    id: 97
}, {
    name: "Peter Hurley",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_phurley_640x640.jpg",
    sort: 85,
    body: "Peter is a New York and Los Angeles based photographer specializing in advertising and commercial work, including portraiture, fashion, beauty, editorial, actor\'s headshots, events and corporate photography.   \"Let me give you an idea of the round about way I picked up a camera and found a new love. It and most of my life revolve around the sport of sailing. In 1993 after graduating from Boston University I hadn\'t a clue as to what I was going to do with myself. That summer I was doing what I had done every summer since I can remember, racing sailboats. In August, I won a National Championship and decided to train for the 1996 Olympic Games in Atlanta. While training full time, a friend sent me to see a designer at Ralph Lauren, who was in search of real sailors to model in a Polo Sport advertising campaign. I had an incredible time and months later my picture was seen around the world.  More importantly, I met a true friend and eventual mentor, Bruce Weber, who was the photographer on the shoot.  Bruce continued to take pictures of me sailing and after failing to make the \'96 US Sailing Team, I found myself in New York at the start of a new modeling career.  Modeling led me into acting, but the dream of a gold medal still lingered in the back of my mind. After a few years, I dropped everything and decided to jump back in the boat and train for the Sydney \'00 Games.  It was during this time that Bruce encouraged me to start taking pictures of sailboats. My training paid off landing me a berth on the 2000 US Sailing Team. Shortly afterward, I took up the camera and while shooting a regatta I turned the camera on a fellow model\/actor and friend of mine who had come along for the day. Those pictures ended up in his portfolio and created the outset of my new career. Since then my pictures have led me into advertising and my clients now include Levi\'s, Reebok, DKNY, Johnnie Walker and Axe Deodorant to name a few.  I am continually growing as a photographer and I\'m so glad that my crazy path has landed me here with a camera in hand. I would like to give a special thanks to Caggie Simonelli, Bruce Weber, and Josette Lata for making this possible.\"  - Peter Hurley",
    coursesCount: 4,
    id: 62
}, {
    name: "Peter Read Miller",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_prmiller_640x640.jpg",
    sort: 86,
    body: "Peter Read Miller has been photographing athletes, events and sports for more than 30 years. He is currently a staff photographer for Sports Illustrated, where he has worked for more than 20 years. His images have appeared on over 100 Sports Illustrated covers. Peter\'s advertising work includes photography for Canon\'s Rebel XTsi campaign \"Photography is a Journey\", created by Grey Worldwide. He also photographed the brochures for the Rebel XT, XTi and XTsi. His award-winning photo of San Diego Charger LaDainian Tomlinson has appeared in photography magazines as part of Canon\'s \"Exactly what I was thinking\" campaign. Peter has also show advertising for Nike, Adidas, Visa, Coca-Cola, Footlocker, Eastman Kodak, ABC Television, Panasonic, and The National Football League. His editorial clients have included: Time, Life, People, Money, Playboy, Runners World, Newsweek, USA Weekend and The New York Times. In addition to covering 8 Olympic games and 34 Super Bowls, Peter has shot 14 NBA finals. He has covered the Stanley Cup Finals, The World Series, The Kentucky Derby, The NCAA Basketball Final Four, Men\'s and Women\'s World Cup Soccer Finals and the World Championship of Freestyle Wrestling in Krasnoyarsk, Siberia.",
    coursesCount: 2,
    id: 68
}, {
    name: "RC Concepcion",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_rconcepcion_640x640.jpg",
    sort: 87,
    body: "RC is an award winning photographer and author of the best selling books \"Get Your Photography On the Web\" and \"The HDR Book\" by Peachpit Press. He is an education and curriculum developer for the National Association of Photoshop Professionals, hosts the popular podcasts \"Photoshop User TV\" and \"Photography Tips and Tricks\". An Adobe Certified Instructor in Photoshop, Illustrator, and Lightroom, RC has over 14 years in the I.T. and e-commerce industries and spends his days developing content for all applications in the Adobe Creative Suite. RC also worked with Adobe in to write the Adobe Certified Expert exam for Photoshop CS6, Lightroom 4, and Lightroom 5. He has held training seminars in the U.S., Europe, and Latin America, and has served as guest instructor for the Digital Landscape Workshop Series with Moose Peterson, Advanced Flash Photography at Jade Mountain with Joe McNally, His Light workshops with famed landscape photographer Bill Fortney, and the Voices That Matter web conference in San Francisco.",
    coursesCount: 76,
    id: 89
}, {
    name: "Richard Riley",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_rriley_640x640.jpg",
    sort: 88,
    body: "I love my profession. Lots and lots of parchment and paper awards. Best of show Aurora Film Awards, Mobius, and a Clio. Advancing from film to digital. One of the first Quotes: \"Shooting digital does not replace taking a great shot\". I love the creative collaboration with clients and bringing my passion and experience to everyday production Our clients refer to us as the SWAT TEAM Production Motto: Pre-Production, Pre-Production, &amp; Pre-Production = a smooth and buttoned up production.",
    coursesCount: 2,
    id: 47
}, {
    name: "Richard Bernabe",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_rbernabe_640x640.jpg",
    sort: 89,
    body: "Contributor to National Geographic, The New York Times, Outdoor Photographer as well as Contributing Editor for Popular Photography magazine, Richard Bernabe is an internationally renowned landscape, wildlife, and travel photographer and widely published author from the United States. His passion for adventure and travel has been the driving force behind his life\'s quest to capture the moods and character of the world\'s most amazing places - from Africa to the Amazon to the Arctic - as well as countless other places in between. Richard is a highly sought-after teacher and public speaker who accepts dozens of invitations from around the world each year in order to help educate others on matters of photography, adventure travel, and our natural world. Richard is also co-founder and owner of Epic Destinations, a premier international photography workshop and tour company that visits some of the most spectacular places on Earth.",
    coursesCount: 1,
    id: 125
}, {
    name: "Richard Harrington",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_rharrington_640x640.jpg",
    sort: 90,
    body: "Richard Harrington is a certified Project Management Professional, Adobe Certified Expert in Photoshop and After Effects, and Apple Certified Trainer in Final Cut Pro, Motion, and Aperture. His visual communications company, RHED Pixel, creates motion graphics and produces video and multimedia projects.",
    coursesCount: 15,
    id: 9
}, {
    name: "Rick Sammon",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_rsammon_640x640.jpg",
    sort: 91,
    body: "Canon Explorer of Light and award-winning photographer Rick Sammon loves his day job. A tireless, prolific and inspirational image-maker, Rick, called by some \u201cThe Godfather of Photography,\u201d is one of the most active photographers on the planet \u2013 dividing his time between creating images, giving seminars, developing on-line classes for KelbyOne, leading photo workshops, and making personal appearances.\r\nRick\'s enthusiasm for digital imaging is contagious. He is a man on a mission \u2013 a mission to make digital photography fun, creative, exciting and rewarding for others. Rick\'s latest (and 36th) book is Creative Visualization for Photographers. With nearly 40 years of experience, this self-taught photographer has many accomplishments \u2013 and many more anticipated for the road ahead. As Rick suggests, \u201cWhen you are through changing, you are through.\u201d See www.ricksammon.com for more information. Rick can be contacted at mailto:ricksammon@me.com",
    coursesCount: 13,
    id: 7
}, {
    name: "Roy Ashen",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_rashen_640x640.jpg",
    sort: 92,
    body: "Roy Ashen is the Cofounder and CEO of Triple Scoop Music, the world\'s leading music licensing service for creative professionals. Roy is passionate about helping photographers, filmmakers and video creators find the perfect soundtrack for every project. Roy is also an award-winning musician, songwriter &amp; producer and the recipient of multiple Telly Awards for recent film and video projects. Learn more at http:\/\/TripleScoopMusic.com",
    coursesCount: 1,
    id: 60834
}, {
    name: "Russell Brown",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_rbrown_640x640.jpg",
    sort: 93,
    body: "Russell Brown is an Emmy Award-winning instructor, and senior creative director at Adobe Systems Incorporated. He facilitates the exchange between digital designers and software developers that is so vital to product development at Adobe.",
    coursesCount: 2,
    id: 19
}, {
    name: "Roberto Valenzuela",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_rvalenzuela_640x640.jpg",
    sort: 94,
    body: "Roberto Valenzuela is a photographer based in Beverly Hills, CA. He developed his unique teaching style by following the same practice regimen he developed as a professional concert classical guitarist and educator. Roberto believes that it is not talent but deliberate practice that is at the core of skill and achievement. He has traveled to every corner of the world motivating photographers to practice and break down the various elements of photography in order to master them through goal setting, self-training, and constant dedication. Roberto serves as a judge for photographic print competitions in Europe, Mexico, South America, and the most prestigious International photography competitions held in the United States through the Wedding and Portrait Photographers International (WPPI) in Las Vegas, NV. Roberto Valenzuela teaches private workshops, seminars, and platform classes at the largest photography conventions in the world. He has been an International first place winner three times and has been nominated by his peers as one of the ten most influential photographers and educators in the world. His first book Picture Perfect Practice became a top selling photography-training book and it is sold worldwide translated into multiple languages. His new book Picture Perfect Posing broke the sales record for single book sales in a convention for his publisher\u00e2\u20ac\u2122s Peachpit 27 year history. Aside from the world of photography, Roberto is a high performance remote control helicopter pilot, a (not so good anymore) classical guitarist, and a table tennis fanatic. He is also a major foodie and is still searching for the most amazing red wine and the most pungent cheeses. His search for the perfect steak is over; he found it in the Japanese Wagyu.",
    coursesCount: 1,
    id: 197
}, {
    name: "Scott Diussa",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_sdiussa_640x640.jpg",
    sort: 95,
    body: "Scott Diussa is a photographer, teacher, musician, traveler and part-time writer. His photographic background started with weddings, portraits and architectural photography but quickly changed to teaching photography at the Disney Institute at Walt Disney World in Orlando, FL. From there he joined the Nikon \"family\" and is currently the Manager of Nikon Professional Services and Training.",
    coursesCount: 0,
    id: 18
}, {
    name: "Sharon Farmer",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_sfarmer_640x640.jpg",
    sort: 96,
    body: "Sharon Farmer is a photojournalist and lectures extensively on photography and photojournalism. Currently Farmer is part of a group show entitled \" Go-Go Swing: Washington D.C.\'s Unstoppable Beat\" on exhibit through October 18, 20013 at the D.C. Commission on the Arts &amp; Humanities. She also took part in an earlier 2013 exhibit entitled \"We Speak the Souls of Ancestors.\" In 2011 her solo shows were widely viewed at the Africa House in Lynchburg, Virginia and the National Democratic Women\'s Club in Washington, DC. Her solo photographic exhibit entitled Pro-Active Women was exhibited in 2009 at the Sewell-Belmont House and Museum on Capitol Hill in Washington. She was the curator for the photography show entitled \"Cuba Now\" at the District of Columbia\'s Sumner Museum and curator for Touchstone Gallery\'s Regional Photography  Competition and Exhibition. Farmer has judged the competitive D.C. Shootoff for 6 of the last 8 years. Formerly an assignment editor for the Associated Press, she was part of the A.P. team in 2003 that covered the Super Bowl in San Diego, California.  Ms. Farmer was the campaign photographer for Sen. John Kerry\'s presidential election campaign in 2004. Farmer served as Director of the White House Photography Office from 1999-2001. A White House photographer since 1993, she documented the Clinton-Gore Administration since it\'s beginning. Ms. Farmer has been a professional photojournalist and exhibition photographer for more than 40 years, shooting news stories, political campaigns, cultural events, conferences, and portraits. Over the years she has photographed for The Washington Post, the Smithsonian Institution, The American Association for the Advancement of Science, the Leadership Conference on Civil &amp; Human Rights, the Brookings Institution, the National Urban League and Delta Sigma Theta Sorority, Inc. to name a few. Ms. Farmer\'s work has been featured in several books, most recently the cover of gay rights activist and author Joseph Beam\'s reissued In the Life, Dave Marsh\'s Bruce Springsteen on Tour, Hillary Rodam Clinton\'s An Invitation to the White House, The Legacy by Sharolyn Rosier Hyson, the critically acclaimed photography book, Songs of My People and the Smithsonian\'s Black American Culture and Scholarship Contemporary Issues. Her photography has been exhibited at the Washington Project for the Arts, the Corcoran Gallery of Art, National Gallery of South Africa, Berlin\'s Phototinka, and the Bethune Museum Archive. She has also worked \r\non a range of special projects: documentary films on the a cappella ensemble Sweet Honey in the Rock and jazz vocalist Betty Carter, among other artists; theatrical multimedia presentations including dance company Step Afrika!; and album covers for Sweet Honey in the Rock, the reggae group Black Sheep, harpist Jeff Majors, jazz vocalist Esther Williams, saxophonist Davey Yarborough and folk guitarist Donal Leace. Ms. Farmer has taught and lectured extensively on photography and photojournalism at the American University, the Smithsonian Institution, Mount Vernon College, The National Geographic Society, Eddie Adams Workshop, the Women in Photojournalism Conference, Western Kentucky University, Indiana University; Louisville, Kentucky\'s Frazier Museum, University of Miami, and the National Association of Black Journalists (NABJ), the Phillips Collection, and the Corcoran Gallery of Art. In 2001 she lectured in five cities for the \"Flying Short Course\" sponsored by the National Association of Press Photographers. Her photographic work resides in the collections of The Williams J. Clinton Presidential Library in Little Rock, Arkansas; Howard University\'s Moreland-Spingarn Collection, The District of Columbia Government, The Anacostia Museum of the Smithsonian Institution, The King Art Complex in Columbus, Ohio ; the Library of Congress, and The South African Museum in Pretoria. Sharon Farmer majored in photography and minored in music at the Ohio State University in Columbus, Ohio, where she received her Bachelor of Arts degree in 1974.",
    coursesCount: 1,
    id: 126
}, {
    name: "Shawn Welch",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_swelch_640x640.jpg",
    sort: 97,
    body: "Shawn Welch is the author of From Idea to App, iOS 5 Core Frameworks, and iOS 6 for Developers as well as the developer of several iOS apps. Previously he worked as a senior media-editor for Pearson Education. He also helped pioneer many of Pearson\'s earliest efforts in iPad solutions. Welch has a BS from Kansas State University.",
    coursesCount: 0,
    id: 65
}, {
    name: "Shelley Giard",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_sgiard_640x640.jpg",
    sort: 98,
    body: "Resident of  Florida, Shelley Giard has been practicing cosmetology for the past 20 years. With a love for beauty and a belief that the art of a hairstyle was only its best with great wardrobe and beautiful makeup, she began broadening her makeup artistry and wardrobe knowledge very shortly after becoming a stylist.  With a strong belief that beauty is an art and that each person is a canvas, she has mastered the art of makeup and wardrobe styling. For many years, she has freelanced behind the scenes of photo shoots, fashion shows and T.V., styling hair, applying makeup, selecting wardrobe and assisting on set for models, photographers and television personalities. Her work can be found in print ads, magazines, many of Scott Kelby\'s books and all across the internet. She has worked with some amazingly talented local and out of state photographers, such as Tres Fenton, Cliff Mautner, David Ziser, Calvin Hollywood, Joe McNally, and has been Kelby Media\'s exclusive freelance makeup artist for nearly five years. She loves bringing to life the ideas of these visionaries and continues to build her skills.",
    coursesCount: 1,
    id: 49
}, {
    name: "Scott Kelby",
    image: "\/\/img.kelbymediagroup.com\/kelbyone_enterprise\/2016\/03\/k1_instructors_skelby_640x640.jpg",
    sort: 99,
    body: "Scott is the President and CEO of KelbyOne, is also the original \"Photoshop Guy\", is the editor and publisher of Photoshop User Magazine, Conference Technical Chair for the Photoshop World Conference &amp; Expo, Training Director and instructor for KelbyOne Live Seminars, and author of a string of bestselling technology and photography books.",
    coursesCount: 110,
    id: 5
}, {
    name: "Lesa Snider",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_lsnider_640x640.jpg",
    sort: 100,
    body: "Lesa Snider is the author of Adobe Lightroom CC and Photoshop CC for Photographers: Classroom in a Book (2016), Photoshop CC: The Missing Manual, Photos for Mac and iOS: The Missing Manual, TheSkinnyBooks.com ebooks, and over 40 video courses. She also writes a weekly column for Macworld.com and features for PhotoshopElementsUser.com. Lesa is an avid photographer, specializing in Muay Thai martial arts. For more info, visit PhotoLesa.com.",
    coursesCount: 2,
    id: 99
}, {
    name: "Stacy Pearsall",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_spearsall_640x640.jpg",
    sort: 101,
    body: "Stacy L. Pearsall got her start as an Air Force photographer at the age of 17. During her time in the service, she traveled to over 41 countries, and attended the Military Photojournalism Program at S.I. Newhouse School of Public Communications at Syracuse University. During three combat tours, she earned the Bronze Star Medal and Air Force Commendation with Valor for heroic actions under fire. Combat disabled and retired from military service, Pearsall continues to work worldwide as a freelance photographer, and is an author, educator, military consultant, public speaker and founder of the Veterans Portrait Project. Pearsall was one of only two women to win NPPA\'s Military Photographer of the Year competition, and the only woman to have earned it twice. She\'s been awarded the Trojan Labor American Hero Award, honored with the Daughters of the American Revolution Margaret Cochran Corbin Award, lauded by the White House as a Champion of Change, and holds an honorary doctoral degree from The Citadel. Following military service, Pearsall purchased the Charleston Center for Photography (CCP). She grew the once grass roots photo club into a reputable brand for photography education, studio rentals, fine art print labs and gallery under one roof. As CCP grew, so did her personal endeavors with the Veterans Portrait Project. In order to pursue her personal project full time, Pearsall sold CPP in the fall of 2012. The Veterans Portrait Project (VPP) began in 2008 while Pearsall rehabilitated from combat injuries sustained in Iraq. Spending hours in VA waiting rooms surrounded by veterans from every generation and branch of service, Pearsall was compelled to honor and thank them in the only way she knows how, photography. She\'s traveled to over 40 cities with the VPP and has documented over 3,000 veterans thus far. Several regionally based exhibitions are on display showcasing veterans from their respective hometowns. Pearsall continues to photograph and document veterans\' stories at veteran conventions, community events and private sessions nationwide. Between her photography, teaching and speaking engagements, Pearsall completed her first photography book, Shooter: Combat from Behind the Camera, which received worldwide praise as \"A book of the highest levels in the annals of combat journalism.\" And her second book, A Photojournalist\'s Field Guide: In the Trenches with Combat Photographer Stacy Pearsall, is \"A must have for every aspiring photographer out there, and even pros can pick up a few new tricks to help them become better photographers.\"",
    coursesCount: 1,
    id: 79
}, {
    name: "Stella Kramer",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_skramer_640x640.jpg",
    sort: 102,
    body: "Stella Kramer (image by Sari Goodfriend) is a Pulitzer Prize-winning photo editor and creative strategist, working with photographers to strengthen their creative eye, put together the strongest portfolios and websites reflecting their work, and set a course to reach their professional goals.  Beginning her career as a Photo Editor, Stella worked for such major publications as The New York Times, People, Entertainment Weekly, Sports Illustrated, Newsweek and Brill\'s Content.  Stella has worked on many of the major news events in recent history, serving as the Photo Editor for The New York Times series \u201cPortraits of Grief\u201d memorializing those who lost their lives in the September 11th, 2001 terrorist attacks. Her work was part of the team that won the 2002 Pulitzer Prize for Public Service and the 2002 Infinity Award for Public Service from the International Center of Photography.  She was also part of the team at The New York Times that won the 2002 Pulitzer Prize for Breaking News Photography. Stella has curated exhibits for The Museum of the City of New York, The Griffin Museum, The Center for Fine Art Photography, Photoville, as well as online exhibitions. She lectures, reviews portfolios, writes about photography, and is on the faculty of SVA Masters of Digital Photography program.",
    coursesCount: 2,
    id: 67467
}, {
    name: "Steve Hansen",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_shansen_640x640.jpg",
    sort: 103,
    body: "An award-winning photographer specializing in food and beverages, Seattle food photographer Steve Hansen brings an artist\'s eye and a chef\'s perspective to every image he creates for his clients. Steve draws upon his prior experience as a food stylist, professional chef, and digital artist to every shoot where he creates vibrant and impactful images that consistently resonate with the senses. After receiving a degree in baking and pastry from Seattle Central College, he continued on to the Culinary Institute of America where he earned his degree in the culinary arts. From there he began working his way up the ranks in some of the best restaurants in the world, including Restaurant Daniel in New York and The Herbfarm Restaurant near Seattle. During his time as a private chef in San Francisco he began to combine his knowledge of food with his photographic experience, and over the course of the last decade, he has created a photographic style which effectively captures the viewer\'s imagination. Steve is based in Seattle, Washington and available for travel worldwide.",
    coursesCount: 4,
    id: 139
}, {
    name: "Syl Arena",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_sarena_640x640.jpg",
    sort: 104,
    body: "Syl Arena has wandered the world of photography for over four decades. Shortly after Neil Armstrong stepped onto the moon, Syl \"borrowed\" his father\'s newfangled Polaroid camera, climbed a tree, and made his first photograph. He was in the third grade. In college, Syl studied commercial photography at Brooks Institute and fine art photography at the University of Arizona (BFA, 1984). Among his more noteworthy accomplishments in school was the construction of a pinhole camera that used 20\" x 24\" litho film. True to his eclectic style, Syl then printed these giant negatives as cyanotypes, carbon prints, and screen prints - an early indication of Syl\'s willingness to explore the boundaries of photography. Jumping forward nearly three decades, Syl continues his exploration of photography through Speedlites. Through his passion for innovation, he has become the voice for such creative flash techniques as high-speed sync, gang light, and moving the wireless master off camera. Fortunately, Syl is not one to keep secrets. His Speedliter\'s Handbook is an international best-seller that contains nearly 400-pages of how-to and why-to on Canon flash techniques. He has written articles about Speedliting for EOS Magazine and Europe\'s Canon Pro Network. Syl is also the author of LIDLIPS: Lessons I Didn\'t Learn In Photo School - a collection of 100 micro-essays on photography.",
    coursesCount: 2,
    id: 52
}, {
    name: "Taz Tally",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_ttally_640x640.jpg",
    sort: 105,
    body: "Dr. Taz Tally is President of Taz Tally Seminars, a computer publishing, consulting, and training company. Taz is the author of numerous books including his most recent book Acrobat and PDF Solutions, as well as Electronic Publishing: Avoiding The Output Blues a textbook on electronic publishing fundamentals and Postscript file preparation, and Avoiding The Scanning Blues a comprehensive guide to desktop scanning, which was chosen as a featured selection of the DoubleDay book club. In addition, Taz has published the UMAX MagicScan Manual, and SilverFast: The Official Guide, which are distributed worldwide.",
    coursesCount: 3,
    id: 6
}, {
    name: "Tony Corbell",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_tcorbell_640x640.jpg",
    sort: 106,
    body: "Tony has been very fortunate having photographed three U.S. presidents, 185 World Leaders, 65 Nigerian Heads of State, about 600 brides and grooms, a couple of NASA astronauts and lots of famous and not so famous faces. He has spoken at almost 400 seminars and workshops nationally and internationally and is the recipient of the highest honor from the Wedding and Portrait Photographers International with their Lifetime Achievement Award. Tony also achieved the status of Photographic Craftsman from the Professional Photographers of America. In 2005, Tony received the \"Photographer of the Year\" Award from the International Photographic Council of the United Nations at a ceremony in New York at the U.N. and the PPA National Award from the Professional Photographers of California. Tony was also invited to join the prestigious Camera Craftsmen Of America in 2007, one of only 40 members worldwide. In 2007\/08, Tony spoke to over 7,500 photographers in 36 cities including London, Glasgow, Dublin, Toronto, Mexico City, Sydney and many more U.S. cities. Tony has always been active as a student and a teacher of photographic education and his Basic Studio Lighting book from publisher AmPhoto has been popular worldwide and has been the basis for numerous photographic college lighting courses. He has written articles in every major photographic magazine in the U.S., Japan, the U.K. and China. He is currently one of a select few Approved Photographic Instructors from the Professional Photographers of America, and he\'s the biggest Beatles fan alive.",
    coursesCount: 2,
    id: 96
}, {
    name: "Terry White",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_twhite_640x640.jpg",
    sort: 107,
    body: "Terry is the author of Secrets of Adobe Bridge from Adobe Press and co-author of InDesign CS\/CS2 Killer Tips, from New Riders. Terry is Worldwide Creative Suite Design Evangelist for Adobe Systems, Inc., and has been with Adobe for over a decade, where he leads the charge in evangelizing and showing Adobe\'s Creative Suite products to users around the world. Terry is both an Adobe Certified Expert and Creative Suite Master. He has been active in the industry for over 20 years and is the founder and President of MacGroup-Detroit, Michigan\'s largest Macintosh users\' group, and is a columnist for Layers magazine. Terry is the host of the top-ranked Adobe Creative Suite Video Podcast and author of the world renown Best App Site (your source for iPhone, iPad, and iPod touch app news and reviews; www.bestappsite.com), Terry White\'s Tech Blog (http:\/\/terrywhite.com\/techblog), and is a key presenter at major industry shows around the world.",
    coursesCount: 12,
    id: 10
}, {
    name: "Thomas Grubba",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_tgrubba_640x640.jpg",
    sort: 108,
    body: "Thomas Grubba is a professional photographer with over 24 years of experience specializing in Architecture, Interiors and Fine Art photography. His clients include architects, interior designers, custom homebuilders, building and remodeling trade companies and real estate agencies. In 2004 he developed a unique lighting system to address the specific challenges of Real Estate Photography. Applying this system he creates truly exceptional images in a quick and efficient manner. Adopted by many well-known interior photographers this methodology serves as the foundation for the Interior Photography Lighting Workshops he has taught in the United States and Australia. His images are often seen in Christies Great Estates, Views Magazine, The San Francisco Chronicle, Oakland Tribune, Homes and Land and other interior photography publications. Thomas is a Board Member of ASMP Nor Cal and has an active Fine Art practice. More of his work can be seen at tgrubbaphoto.com and thomasgrubba.com",
    coursesCount: 1,
    id: 62991
}, {
    name: "Tamara Lackey",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_tlackey_640x640.jpg",
    sort: 109,
    body: "Tamara Lackey is a renowned portrait photographer and Nikon USA Ambassador whose lifestyle photography, from children\'s portraits to celebrity portraits, has appeared in dozens of media outlets, including O - The Oprah Magazine, Men\'s Journal, Vogue, Nikon World, The Martha Stewart Show and The Today Show.  The recipient of the 2014 WPPI Adorama Inspire Award, Tamara speaks at a range of venues, from delivering presentations on the Google Stage to speaking at international photography and lifestyle conventions to delivering private workshops around the globe. Tamara has co-produced and hosted a number of live broadcasts and her web series, reDefine Show, is a mix of inspiring stories of top-tier creative artists who make it work with detailed walkthroughs of her photography. The author of four books, her latest are Envisioning Family and The Posing Playbook, and her edutainment media set, \"Capturing Life Through (Better) Photography\" won the Booklist Editors\' Choice Award.  Most recently, she was the subject of a 5-part web series Nikon produced about photographing portraits, entitled Nikon Behind The Scenes. For the last eleven years, Tamara has run a busy, associate-based studio focused on portrait, commercial and editorial work.  She and her husband, three children, and three dogs all live together in Chapel Hill, North Carolina.",
    coursesCount: 5,
    id: 58
}, {
    name: "Tom Bol",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_tbol_640x640.jpg",
    sort: 110,
    body: "Creative. Outgoing. Detailed. Funny. This is how clients describe Tom and his crew. His career began with a journalism degree and wanderlust. It continues with portraits, edgy light and restless creative energy. He often logs over 20,000 road trip miles a year creating images. Not to mention airplanes. He loves espresso, grunge bands and desert sunsets. And exploring light.",
    coursesCount: 4,
    id: 43
}, {
    name: "Trey Ratcliff",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_tratcliff_640x640.jpg",
    sort: 111,
    body: "Each day, Trey posts a new photo to his website, StuckInCustoms.com, which receives over half a million monthly page views and he currently has over 12 million social media followers via Google+, Pinterest, Facebook and Twitter. His photos and stories capture the beauty of exotic travel destinations and the humor of bizarre situations he often finds himself in. There is always something new, unexpected and beautiful to see. Trey is best known as a pioneer in HDR photography. HDR stands for High Dynamic Range, a technique whereby multiple levels of light are captured for a particular scene and then combined into a single photograph. The resulting images are richly detailed and more closely resemble what you recall of the scene in your mind. Trey\'s photo, \"Fourth on Lake Austin\", was the first HDR photograph to hang in the Smithsonian. He has been featured on ABC, NBC, CBS, FOX and the BBC, and his photos have accumulated more than 100 million views. Trey has taught many thousands of people the secrets to his techniques via his free HDR tutorial and a more detailed video tutorial, both are available on his website. Trey is also a successful entrepreneur. His endeavors include popular iOS and Android apps such as 100CamerasIn1, Stuck On Earth, The Light Camera, Photo Voyages of Trey Ratcliff. In addition he launched Flatbooks.com, which is a rapidly growing eBook publisher.",
    coursesCount: 2,
    id: 69
}, {
    name: "Tim Wallace",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_twallace_640x640.jpg",
    sort: 112,
    body: "Photographer Tim Wallace is the driving force and creative thinking behind Ambient Life. An award winning photographer his work is often described as both conceptual and dramatic. Tim works internationally with many high end brands and clients such as Aston Martin, Land Rover Jaguar and Morgan in the UK to Kenwood and Audi in the US. His work has been published globally and was recently named by as one of the UK\'s most creative photographers. Tim\'s view is a little more straight forward, a man who\'s known for his down to earth attitude, his feet are firmly on the ground and his desire to produce creative work is one that he has been driven to from a very young age when he first picked up a camera, \"Photography is for me simply a creative passion, the ability to use light and form to capture in a single image what I see in my own imagination...\" He is the humble recipient of many awards including International Advertising Photographer of the Year 2010, UK Motor Industry Photographer of the Year 2010, Hasselblad Photographer of the month Oct 2010, Professional Photographer of the Year 2009 as well as receiving Distinction Awards for his work from such professional boards as the RPS.",
    coursesCount: 9,
    id: 55
}, {
    name: "Vincent Versace",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_vversace_640x640.jpg",
    sort: 113,
    body: "Vincent Versace is an internationally recognized pioneer in the art and science of digital photography. His passion for natural light photography is manifest not only in his work but also through his role as a creative and technical leader, contributing to innovative breakthroughs across the entire digital image value chain. Vincent is a recipient of the Computerworld Smithsonian Award in Media Arts &amp; Entertainment and the Shellenberg fine art award. His work is part of the permanent collection of the Smithsonian Institution\'s Museum of American History. He is the photographer of Immediate Assistants Medical Rescue Go Team. He was commissioned by the San Francisco Presidio Trust to create a body of photographic work to permanently capture this National Park and Historic Landmark. Vincent\'s work has been highlighted in American Photo, Popular Photography, The New York Times, Shutterbug, Outdoor Photographer, Pro Digital Imaging, PDN, What Digital Camera, Petersen\'s Photographic, PC Camera, Studio Design and Photography, Professional Photographer, Digital Imaging and many more. Nominated multiple times to the Photoshop Hall of Fame, Vincent has been recognized by the National Association of Photoshop Professionals through the creation of the Vincent Versace Award for Digital Photography Excellence. The \"Vinnie\" is a special category of the Photoshop Guru Awards, considered one of the most prestigious and coveted awards in the international digital imaging industry. He is the author of the best selling books From Oz to Kansas: Almost Every Black &amp; White Technique Known to Mankind and Welcome to Oz 2.0: A Cinematic Approach to Digital Still Photography with Photoshop . His book, Welcome to Oz has been selected as Shutterbug Magazine\'s best how-to book of the year. Vincent was the original host of the Epson Print Academy and is a member of the Epson Stylus Pros. He is also a Nikon Legend Behind the Lens, an Xrite Colorotti, Lexar Elite Photographer, Team NiK Elite Photographer, an American Photo Magazine Mentor Trek and Master Class instructor and a member of the National Association of Photoshop Professionals Instructor Dream Team. He teaches regularly at Photoshop World, B&amp;H, the FBI, US Navy Combat Camera, US Coast Guard, Maine Media Workshops and Palm Beach Photographic Workshops. Vincent\'s passion for photography dates back more than four decades when, at the age of seven, his wedding-photographer uncle introduced him to the magic of the darkroom. Within two years, he had sold his first photo. Within ten, he had booked his first professional assignment. Today, based in Los Angeles, he divides his time between commercial and fine art photography assignments, teaching, and consulting for such suppliers as Nikon, Epson, Nik, OnOne, X-Rite, Adobe, Westcott and others. Websites: www.versacephotography.com Blog: www.thesunist.com",
    coursesCount: 5,
    id: 31
}, {
    name: "Weston (Wes) Maggio",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_wmaggio_640x640.jpg",
    sort: 114,
    body: "Weston (Wes) Maggio is a Senior Evangelist for Creative Products at Wacom Technology. In his work for Wacom, Wes regularly consults with creative professionals and enthusiasts, instructing them on the latest ways in which to realize their vision and optimize their workflow. A passionate trainer and speaker, he speaks at industry events around the world. Wes is a contributing writer to numerous creative magazines and he is the author of the leading title on tablet training; \"Wacom Tablets and Photoshop\" from PhotoshopCAFE and is the host and presenter of \"Wacom Webinars\", a regular series of live workflow oriented webinars. Intermingled with his work for Wacom, Wes is an avid photographer and runner. His subject matter is diverse, but he most enjoys the contrast of shooting adventure sports and serene landscapes.",
    coursesCount: 1,
    id: 67
}, {
    name: "Zack Arias",
    image: "\/\/progressive.kelbymediagroup.com\/kelbyone\/uploads\/images\/instructor_headshots\/k1_instructors_zarias_640x640.jpg",
    sort: 115,
    body: "Zack Arias is an editorial and commercial photographer based in Atlanta, GA. Zack has been working in the music industry for the past seven years. He is now branching into editorial work and advertising. His style and approach is simple, straightforward, bold, classic, true, and straight from camera. Zack\'s greatest talents are his ability to mix with any class of people and to get nervous subjects to relax in front of my camera. He can handle any technical difficulty you can throw at him. He believes that a photographer\'s job description is \"problem solver.\"",
    coursesCount: 5,
    id: 23
}];
const categories = [{
    name: 'Photoshop',
    sort: 0,
    id: 10
}, {
    name: 'Lightroom',
    sort: 1,
    id: 32
}, {
    name: 'Photography',
    sort: 2,
    id: 8
}, {
    name: 'Design',
    sort: 3,
    id: 243
}, {
    name: 'Business',
    sort: 4,
    id: 25
}, {
    name: 'Get Inspired',
    sort: 5,
    id: 90
}, {
    name: 'Adobe Creative Cloud',
    sort: 6,
    id: 68
}, {
    name: 'Plug-ins, Apps & More',
    sort: 7,
    id: 1270
}, {
    name: 'Video',
    sort: 8,
    id: 23
}];
let category = {};
// const courses = [{
//     name: "Perfecting Selections in Adobe Photoshop",
//     instructors: [{
//         name: "Dave Cross",
//         image: "//progressive.kelbymediagroup.com/kelbyone/uploads/images/instructor_headshots/k1_instructors_dcross_640x640.jpg",
//         sort: 0,
//         body: "For over 25 years Dave Cross has been helping photographers and creative professionals get the most out of their Adobe software. Since1987, Dave has taught Photoshop, Illustrator and InDesign to thousands of users around the world. He has a Bachelor of Education, is an Adobe Certified Instructor and is a Certified Technical Trainer. Dave has taught for Adobe, at Photoshop World, the Texas School of Photography, Adobe MAX, Imaging USA and at numerous corporate locations. Dave has written many articles and multiple books, co-hosted Photoshop User TV and has appeared in many DVDs and online courses for Kelby Training, CreativeLive and Photoshop Cafe. He offers online training at online.davecrossworkshops.com. Dave has taught Photoshop in every state in the United States, throughout Canada and in Europe, consistently earning rave reviews. Dave is well-known for his engaging style, his humor and his ability to make complex topics easy to understand. In 2009 Dave was inducted into the Photoshop Hall of Fame.",
//         coursesCount: "22",
//         id: 12
//     }],
//     image: "//img.kelbymediagroup.com/kelbyone_enterprise/2017/02/Aaron_NOTC_MainImages_02.01.17_PSSelections.jpg",
//     sort: 0,
//     body: "Perfect your Photoshop selection powers! Join Dave Cross as he equips you with all the information you need to know to create accurate selections as efficiently as possible. Dave goes through all of the various selection tools, discussing their pros and cons, and demonstrating how to get the most out of each one. From learning pre-selection strategies to mastering techniques for fine tuning your selections, Dave will provide you with the key elements needed to choose the right selection techniques for the job at hand to end up with a great selection. ",
//     lessonsCount: 15,
//     lessonsLength: "6595",
//     id: 1630568
// }, {
//     name: "How to Remove Distracting Stuff in Photoshop",
//     instructors: [{
//         name: "Scott Kelby",
//         image: "//img.kelbymediagroup.com/kelbyone_enterprise/2016/03/k1_instructors_skelby_640x640.jpg",
//         sort: 0,
//         body: "Scott is the President and CEO of KelbyOne, is also the original \" Photoshop Guy \", is the editor and publisher of Photoshop User Magazine, Conference Technical Chair for the Photoshop World Conference &amp; Expo, Training Director and instructor for KelbyOne Live Seminars, and author of a string of bestselling technology and photography books.",
//         coursesCount: "110",
//         id: 5
//     }],
//     image: "//img.kelbymediagroup.com/kelbyone_enterprise/2016/10/MainImage_10.26.16_RemovingDistractionss-1.jpg",
//     sort: 1,
//     body: "Don’t let distractions ruin good photographs! Join Scott Kelby for a class devoted to teaching you how to remove all of those distracting elements from your photographs. Whether it is unwanted bright spots in the background, power lines stretching across a sky, walls covered in graffiti, stray hairs on a portrait, or too many tourists in your landscape (to name a few), Scott has a technique to save the day. This class is designed to start you off with an introduction to the essential tools you’ll need inside of Photoshop, and then each lesson that follows is a project unto itself that demonstrates a wide range of techniques you can add to your skill set. You can even download the project files and follow along. Even if you’re familiar with some of the tools, Scott has included all kinds of little tricks he’s picked up over the years to help you get the job done faster than ever before. ",
//     lessonsCount: 27,
//     lessonsLength: "10308",
//     id: 1450233
// }, {
//     name: "Designing with Type",
//     instructors: [{
//         name: "Scott Kelby",
//         image: "//img.kelbymediagroup.com/kelbyone_enterprise/2016/03/k1_instructors_skelby_640x640.jpg",
//         sort: 0,
//         body: "Scott is the President and CEO of KelbyOne, is also the original \" Photoshop Guy \", is the editor and publisher of Photoshop User Magazine, Conference Technical Chair for the Photoshop World Conference &amp; Expo, Training Director and instructor for KelbyOne Live Seminars, and author of a string of bestselling technology and photography books.",
//         coursesCount: "110",
//         id: 5
//     }],
//     image: "//img.kelbymediagroup.com/kelbyone_enterprise/2016/08/MainImage_08.31.16_Typography1.jpg",
//     sort: 2,
//     body: "Join Scott Kelby and learn how to design with type. Calling all non-designers who have the need to create slideshows, photo books, watermarks, and other items that may require type. In this class Scott will share tips and tricks that will make your layout more impactful, show you some of the cool type features in Photoshop, teach you what NOT to do with type, and walk you through a series of in-depth type layouts that you can use with confidence in your projects. At the end, Scott wraps up the class with a look at some of his favorite and most useful fonts and where to find them. ",
//     lessonsCount: 10,
//     lessonsLength: "5476",
//     id: 1359166
// }, {
//     name: "7 Photoshop Techniques Every Lightroom User Needs to Know",
//     instructors: [{
//         name: "Scott Kelby",
//         image: "//img.kelbymediagroup.com/kelbyone_enterprise/2016/03/k1_instructors_skelby_640x640.jpg",
//         sort: 0,
//         body: "Scott is the President and CEO of KelbyOne, is also the original \" Photoshop Guy \", is the editor and publisher of Photoshop User Magazine, Conference Technical Chair for the Photoshop World Conference &amp; Expo, Training Director and instructor for KelbyOne Live Seminars, and author of a string of bestselling technology and photography books.",
//         coursesCount: "110",
//         id: 5
//     }],
//     image: "//img.kelbymediagroup.com/kelbyone_enterprise/2016/08/MainImage1_08.17.16_7PSTechniques.jpg",
//     sort: 3,
//     body: "Photoshop is an invaluable tool for all Lightroom users, and in this class Scott Kelby teaches you the most important Photoshop techniques you’ll need to know to get the most out of it. Starting off with the basics of moving between Lightroom and Photoshop, Scott moves on to covering the fundamentals of working with selections and layers, and then builds up from there using various projects to demonstrate how it all comes together. Through the class you’ll learn how to remove distractions, how to blend layers with layer masks, how to work with high contrast images, the fundamentals of portrait retouching, how to get started with compositing, and how to deal with all kinds of problems you might encounter in your photographs. By the end of the class you’ll realize that Photoshop is not that hard when you focus on just the techniques you can’t do inside of Lightroom. ",
//     lessonsCount: 14,
//     lessonsLength: "9542",
//     id: 1187261
// }, {
//     name: "Advanced Compositing in Adobe Photoshop",
//     instructors: [{
//         name: "Corey Barker",
//         image: "//progressive.kelbymediagroup.com/kelbyone/uploads/images/instructor_headshots/k1_instructors_cbarker_640x640.jpg",
//         sort: 0,
//         body: "Corey is an education and curriculum developer for KelbyOne. He is a graduate of the Ringling School of Art &amp; Design in Sarasota, FL, with a degree in Illustration. Over the years, Corey has worked as a graphic artist in a variety of disciplines such as illustration, commercial design, large format printing, motion graphics, web design and photography. His expertise in Photoshop and Illustrator have earned him numerous awards in illustration, graphic design and photography. Using Photoshop since version 2, his expertise and creativity have evolved exponentially with every new version, which makes Corey an invaluable addition to the KelbyOne team.",
//         coursesCount: "62",
//         id: 15
//     }],
//     image: "//img.kelbymediagroup.com/kelbyone_enterprise/2016/07/Aaron_MainImage_07.22.16_AdvancedCompositingCorey.jpg",
//     sort: 4,
//     body: "Get ready to take your compositing skills to the next level! Join Corey Barker as steps you through the creation of a fantasy composite image, from extracting the subject though the final touches. Whether you are using an older version of Photoshop or the latest, you’ll learn how to cleanly extract your subject from the source image, how to build a background environment around your subject, and how to blend all of the elements together using lighting and atmospheric effects to create a believable composite image with impact. Corey will show you ways to use Photoshop that you’ve never thought of before, and he wraps up the class with cool tips for adding text and blending non-human objects into your composite. ",
//     lessonsCount: 10,
//     lessonsLength: "6756",
//     id: 1170279
// }, {
//     name: "High End Hair Retouching",
//     instructors: [{
//         name: "Kristina Sherk",
//         image: "//progressive.kelbymediagroup.com/kelbyone/uploads/images/instructor_headshots/k1_instructors_ksherk_640x640.jpg",
//         sort: 0,
//         body: "For the past 10 years, Kristina Sherk has been a high-end photo retoucher based out of Washington, D.C. and is called the \" picture whisperer \" by some. She specializes in realistic retouching. She's a contributing educational author for publications like Shutter Magazine, Photoshop User Magazine and Lightroom Magazine. She is also the author behind Photoshop Cafe's Fashion Retouching DVD. Her more reputable corporate clients include National Public Radio, Time Inc., XM Satellite Radio, Cotton Inc. and most recently, Hasselblad.",
//         coursesCount: "4",
//         id: 128
//     }],
//     image: "//img.kelbymediagroup.com/kelbyone_enterprise/2016/07/MainImage2_07.06.16_HighEndHairRetouching.jpg",
//     sort: 5,
//     body: "Learn the core fundamentals of retouching hair! Join Kristi Sherk as she teaches you how to retouch hair smarter, not harder. From removing stray hairs to changing your subject’s hair color, and from creating custom hair brushes to adding dimension and shine, Kristi will show you how to do the best things possible in the fastest amount of time. Every photographer working with people can benefit from adding these hair retouching techniques to their set of skills, so that you can deliver outstanding work to your clients and get back behind the camera. By the end of the class you’ll know how to make your clients look red-carpet ready and how to do it faster than ever. ",
//     lessonsCount: 11,
//     lessonsLength: "3739",
//     id: 1155291
// }, {
//     name: "Adobe Photoshop CC In-Depth: Compositing and Masking Hair Made Easy",
//     instructors: [{
//         name: "Scott Kelby",
//         image: "//img.kelbymediagroup.com/kelbyone_enterprise/2016/03/k1_instructors_skelby_640x640.jpg",
//         sort: 0,
//         body: "Scott is the President and CEO of KelbyOne, is also the original \" Photoshop Guy \", is the editor and publisher of Photoshop User Magazine, Conference Technical Chair for the Photoshop World Conference &amp; Expo, Training Director and instructor for KelbyOne Live Seminars, and author of a string of bestselling technology and photography books.",
//         coursesCount: "110",
//         id: 5
//     }],
//     image: "//img.kelbymediagroup.com/kelbyone_enterprise/2016/06/MainImage1_06.22.16_PSCompositingMaskingHair.jpg",
//     sort: 6,
//     body: "In this class, Scott gets you up and running fast on creating realistic composite images (where you put your subject on a different background or different environment than they were photographed on), and he takes you through a host of techniques that cover the “Holy Grail” of compositing, which is masking hair and keeping lots of detail intact. He covers a number of different techniques, including using channels and blend mode tricks for easy masking. You’ll learn how to match tone and color and finishing moves that pull it all together. It’s a really solid introduction into the art of masking and compositing and the essential techniques you need to know from the start. ",
//     lessonsCount: 11,
//     lessonsLength: "5351",
//     id: 1151814
// }, {
//     name: "Getting Up to Speed Fast with Photoshop CC 2015.5",
//     instructors: [{
//         name: "Scott Kelby",
//         image: "//img.kelbymediagroup.com/kelbyone_enterprise/2016/03/k1_instructors_skelby_640x640.jpg",
//         sort: 0,
//         body: "Scott is the President and CEO of KelbyOne, is also the original \" Photoshop Guy \", is the editor and publisher of Photoshop User Magazine, Conference Technical Chair for the Photoshop World Conference &amp; Expo, Training Director and instructor for KelbyOne Live Seminars, and author of a string of bestselling technology and photography books.",
//         coursesCount: "110",
//         id: 5
//     }],
//     image: "//img.kelbymediagroup.com/kelbyone_enterprise/2016/06/MainImage2_06.22.16_GettingUpToSpeedPS.jpg",
//     sort: 7,
//     body: "Get up to speed fast with the new features in Adobe Photoshop CC 2015.5! Join Scott Kelby as he shares his favorite tips, techniques, and shortcuts designed to help you get the most out of this fantastic update. From Face Aware Liquify to the new Select and Mask space, plus all kinds of hidden tweaks, you’ll discover the best ways to use these new tools and take your workflow to the next level. ",
//     lessonsCount: 8,
//     lessonsLength: "3354",
//     id: 1147495
// }, {
//     name: "From Flat to Fabulous",
//     instructors: [{
//         name: "Scott Kelby",
//         image: "//img.kelbymediagroup.com/kelbyone_enterprise/2016/03/k1_instructors_skelby_640x640.jpg",
//         sort: 0,
//         body: "Scott is the President and CEO of KelbyOne, is also the original \" Photoshop Guy \", is the editor and publisher of Photoshop User Magazine, Conference Technical Chair for the Photoshop World Conference &amp; Expo, Training Director and instructor for KelbyOne Live Seminars, and author of a string of bestselling technology and photography books.",
//         coursesCount: "110",
//         id: 5
//     }],
//     image: "//img.kelbymediagroup.com/kelbyone_enterprise/2016/05/Aaron_MainImage_05.25.16_FlatToFabulous.jpg",
//     sort: 8,
//     body: "Take your photos from flat to fabulous with Scott Kelby! If you&#8217;ve ever experienced being let down by how a photo can look right out of the camera then this class is for you. Join Scott as he takes you from start to finish through his entire post-processing workflow on a wide variety of photos, with an even wider range of problems. You&#8217;ll learn how to use Camera Raw to do the basics, how to use Photoshop&#8217;s suite of tools for magically removing unwanted objects from the scene, how to crop, how to convert to black and white, how to do whatever it takes to make your photos look fantastic. Pull up a seat and watch over Scott&#8217;s shoulder as he shares his thought process, his tips, and his techniques for dealing with landscapes, portraits, collages, cityscapes, panoramas, and more. By the end of the class you&#8217;re sure to be thinking differently about some of those photos you were ready to delete, and you may uncover areas of Photoshop that you&#8217;ve never seen before. ",
//     lessonsCount: 12,
//     lessonsLength: "7436",
//     id: 1017670
// }, {
//     name: "Master FX: Real Movie Poster Effects in Adobe Photoshop",
//     instructors: [{
//         name: "Corey Barker",
//         image: "//progressive.kelbymediagroup.com/kelbyone/uploads/images/instructor_headshots/k1_instructors_cbarker_640x640.jpg",
//         sort: 0,
//         body: "Corey is an education and curriculum developer for KelbyOne. He is a graduate of the Ringling School of Art &amp; Design in Sarasota, FL, with a degree in Illustration. Over the years, Corey has worked as a graphic artist in a variety of disciplines such as illustration, commercial design, large format printing, motion graphics, web design and photography. His expertise in Photoshop and Illustrator have earned him numerous awards in illustration, graphic design and photography. Using Photoshop since version 2, his expertise and creativity have evolved exponentially with every new version, which makes Corey an invaluable addition to the KelbyOne team.",
//         coursesCount: "62",
//         id: 15
//     }],
//     image: "//img.kelbymediagroup.com/kelbyone_enterprise/2016/01/MainImages1_010715_PSMoviePoster.jpg",
//     sort: 9,
//     body: "In this course Corey will take you through building a Hollywood movie poster effect starting with a simple studio shot. Ready to learn the techniques used to build a typical Hollywood movie poster? Join Corey Barker as he leads you step-by-step starting with a simple studio shot and building it into a full design. ",
//     lessonsCount: 9,
//     lessonsLength: "2399",
//     id: 655747
// }]

const courses = [{
    image: 'https://members.kelbyone.com/wp-content/uploads/2017/03/NOTC_MainImages_03.15.17_CameraFocusTechniques-250x250.jpg',
    name: 'Camera Focus Techniques: The Key To Super Sharp Photos',
    isBookmarked: true,
    progress: 20,
    percent: 80,
    id: 1674349,
    description: 'Beginners and experienced users alike can benefit from learning how to take advantage of what your camera has to offer to help you get super sharp photos in all kinds of situations and subject matter.',
    body: 'Learn all about focusing with Larry Becker! You’ll hit the ground running in this class, as Larry starts off with some basic concepts and terminology before digging deeper into everything related to focus techniques, tips, and best practices. Beginners and experienced users alike can benefit from learning how to take advantage what your camera (regardless of manufacturer) has to offer to help you get super sharp photos in all kinds of situations and subject matter. You’ll learn how to set the diopter for your vision, how to control depth of field, the differences in focusing when using the viewfinder versus live view, the benefits of back button focusing, and so much more!',
    instructor: {
        image: 'https://progressive.kelbymediagroup.com/kelbyone/uploads/images/instructor_headshots/k1_instructors_lbecker_640x640.jpg',
        name: 'Larry Becker',
        body: 'For more than 25 years, Larry has been simplifying technology and helping people understand it through books, magazine articles, DVDs, online videos, and live training. Larry has been seen by millions of viewers worldwide on web TV shows like DTownTV and Photoshop User TV, but he’s most widely known for his work as a trainer and gear reviewer for B&H Photo. Larry’s technology training landed him on national TV with Leo LaPorte, on training DVDs in the packages with Sony PDAs, and sharing a stage with Buzz Aldren while representing Palm, Inc. at the giant tech trade shows in Las Vegas. His client list also includes Pepsi, GE, Lawrence Livermore National Labs, and the National Association of Realtors.'
    },
    lessons: [{
        name: 'Lesson 1: Basic Concepts and Terminology',
        duration: '10:19'
    }, {
        name: 'Lesson 2: Depth of Field',
        duration: '03:43'
    }, {
        name: 'Lesson 3: Focus Point',
        duration: '05:53'
    }, {
        name: 'Lesson 4: Camera Model Differences',
        duration: '09:33'
    }, {
        name: 'Lesson 5: Viewfinde vs. LCD Focusing',
        duration: '06:23'
    }, {
        name: 'Lesson 6: Focus System Limitations',
        duration: '03:57'
    }]
}, {
    id: 1659386,
    isBookmarked: false,
    progress: 0,
    percent: 100,
    lessons: [],
    instructor: {
        image: 'http://img.kelbymediagroup.com/kelbyone_enterprise/2016/03/k1_instructors_skelby_640x640.jpg',
        name: 'Scott Kelby',
        body: 'Scott is the President and CEO of KelbyOne, is also the original "Photoshop Guy", is the editor and publisher of Photoshop User Magazine, Conference Technical Chair for the Photoshop World Conference & Expo, Training Director and instructor for KelbyOne Live Seminars, and author of a string of bestselling technology and photography books.'
    },
    body: "Imagine going out shooting with Scott Kelby at your side giving you tips, advice, and strategies for using your camera the same way he does, and that\'s what this class is all about. Scott\'s goal is to help beginners go beyond auto mode, be in control, and make great photographs. It\'s as simple as that, and it doesn\'t even matter what brand of camera you are using, as these lessons apply to all cameras. Scott shares his favorite camera settings, tips for getting tack-sharp photos, favorite lenses for different situations, and so much more. Once you start putting these concepts into practice you\'re going to see an immediate improvement in your work.",
    name: "Beginners Start Here",
    image: 'http://img.kelbymediagroup.com/kelbyone_enterprise/2017/02/AARON_NOTC_MainImages_02.22.17_BeginnersStartHere-768x432.jpg'
}, {
    id: 1648119,
    isBookmarked: false,
    progress: 60,
    percent: 40,
    lessons: [],
    instructor: {
        image: 'https://progressive.kelbymediagroup.com/kelbyone/uploads/images/instructor_headshots/k1_instructors_lbecker_640x640.jpg',
        name: 'Larry Becker',
        body: 'For more than 25 years, Larry has been simplifying technology and helping people understand it through books, magazine articles, DVDs, online videos, and live training. Larry has been seen by millions of viewers worldwide on web TV shows like DTownTV and Photoshop User TV, but he’s most widely known for his work as a trainer and gear reviewer for B&H Photo. Larry’s technology training landed him on national TV with Leo LaPorte, on training DVDs in the packages with Sony PDAs, and sharing a stage with Buzz Aldren while representing Palm, Inc. at the giant tech trade shows in Las Vegas. His client list also includes Pepsi, GE, Lawrence Livermore National Labs, and the National Association of Realtors.'
    },
    body: "If a Canon 1DX Mark II is in your future or already in your camera bag, then this class is for you! Join Larry Becker as he gets you up to speed on everything you need to know to get started on the right foot with Canon\'s flagship camera. This is a pro-level camera, so Larry skips the basics and focuses on getting you oriented to the layout of the camera, teaching you the quickest ways to do the tasks you\'ll want to do, and how to customize the camera to suit your workflow. By the end of the class you\'ll have a solid grasp of what this camera is capable of doing, and where to go to make any needed changes.",
    name: "Camera Essentials: Canon 1DX Mark II",
    image: 'http://img.kelbymediagroup.com/kelbyone_enterprise/2017/02/Aaron_NOTC_MainImages_02.15.17_Canon1DXMarkII-768x432.jpg'
}, {
    id: 1640878,
    isBookmarked: true,
    progress: 76,
    percent: 24,
    lessons: [],
    instructor: {
        image: 'http://progressive.kelbymediagroup.com/kelbyone/uploads/images/instructor_headshots/k1_instructors_skramer_640x640.jpg',
        name: 'Stella Kramer',
        body: 'Stella Kramer (image by Sari Goodfriend) is a Pulitzer Prize-winning photo editor and creative strategist, working with photographers to strengthen their creative eye, put together the strongest portfolios and websites reflecting their work, and set a course to reach their professional goals. Beginning her career as a Photo Editor, Stella worked for such major publications as The New York Times, People, Entertainment Weekly, Sports Illustrated, Newsweek and Brill’s Content. Stella has worked on many of the major news events in recent history, serving as the Photo Editor for The New York Times series “Portraits of Grief” memorializing those who lost their lives in the September 11th, 2001 terrorist attacks. Her work was part of the team that won the 2002 Pulitzer Prize for Public Service and the 2002 Infinity Award for Public Service from the International Center of Photography. She was also part of the team at The New York Times that won the 2002 Pulitzer Prize for Breaking News Photography. Stella has curated exhibits for The Museum of the City of New York, The Griffin Museum, The Center for Fine Art Photography, Photoville, as well as online exhibitions. She lectures, reviews portfolios, writes about photography, and is on the faculty of SVA Masters of Digital Photography program.'
    },
    body: "Are you ready to go pro? Join Stella Kramer, a Pulitzer Prize-winning photo editor, as she shares what it takes from the perspective of the people who hire and work with photographers. In this class you\'ll learn the importance of your communication materials, how and where to get started, where to find opportunities, how to start connecting with prospective clients, and what steps you should be taking. You can get to where you want to be with your photography if you follow your own passion, make the commitment to yourself, and make a plan that you can act on.",
    name: "Are You Ready to Go Pro?",
    image: 'http://img.kelbymediagroup.com/kelbyone_enterprise/2017/02/NOTC_MainImages_02.08.17_ReadyToGoPro-768x432.jpg'
}, {
    id: 1630568,
    isBookmarked: true,
    progress: 0,
    percent: 100,
    lessons: [],
    instructor: {
        image: 'http://progressive.kelbymediagroup.com/kelbyone/uploads/images/instructor_headshots/k1_instructors_dcross_640x640.jpg',
        name: 'Dave Cross',
        body: 'For over 25 years Dave Cross has been helping photographers and creative professionals get the most out of their Adobe software. Since1987, Dave has taught Photoshop, Illustrator and InDesign to thousands of users around the world. He has a Bachelor of Education, is an Adobe Certified Instructor and is a Certified Technical Trainer. Dave has taught for Adobe, at Photoshop World, the Texas School of Photography, Adobe MAX, Imaging USA and at numerous corporate locations. Dave has written many articles and multiple books, co-hosted Photoshop User TV and has appeared in many DVDs and online courses for Kelby Training, CreativeLive and Photoshop Cafe. He offers online training at online.davecrossworkshops.com. Dave has taught Photoshop in every state in the United States, throughout Canada and in Europe, consistently earning rave reviews. Dave is well-known for his engaging style, his humor and his ability to make complex topics easy to understand. In 2009 Dave was inducted into the Photoshop Hall of Fame.'
    },
    body: "Perfect your Photoshop selection powers! Join Dave Cross as he equips you with all the information you need to know to create accurate selections as efficiently as possible. Dave goes through all of the various selection tools, discussing their pros and cons, and demonstrating how to get the most out of each one. From learning pre-selection strategies to mastering techniques for fine tuning your selections, Dave will provide you with the key elements needed to choose the right selection techniques for the job at hand to end up with a great selection.",
    name: "Perfecting Selections in Adobe Photoshop",
    image: 'http://img.kelbymediagroup.com/kelbyone_enterprise/2017/02/Aaron_NOTC_MainImages_02.01.17_PSSelections-768x432.jpg'
}, {
    id: 1618938,
    isBookmarked: false,
    progress: 0,
    percent: 100,
    lessons: [],
    instructor: {
        image: 'http://progressive.kelbymediagroup.com/kelbyone/uploads/images/instructor_headshots/k1_instructors_phurley_640x640.jpg',
        name: 'Peter Hurley',
        body: 'Peter is a New York and Los Angeles based photographer specializing in advertising and commercial work, including portraiture, fashion, beauty, editorial, actor\'s headshots, events and corporate photography. "Let me give you an idea of the round about way I picked up a camera and found a new love. It and most of my life revolve around the sport of sailing. In 1993 after graduating from Boston University I hadn\'t a clue as to what I was going to do with myself. That summer I was doing what I had done every summer since I can remember, racing sailboats. In August, I won a National Championship and decided to train for the 1996 Olympic Games in Atlanta. While training full time, a friend sent me to see a designer at Ralph Lauren, who was in search of real sailors to model in a Polo Sport advertising campaign. I had an incredible time and months later my picture was seen around the world. More importantly, I met a true friend and eventual mentor, Bruce Weber, who was the photographer on the shoot. Bruce continued to take pictures of me sailing and after failing to make the \'96 US Sailing Team, I found myself in New York at the start of a new modeling career. Modeling led me into acting, but the dream of a gold medal still lingered in the back of my mind. After a few years, I dropped everything and decided to jump back in the boat and train for the Sydney \'00 Games. It was during this time that Bruce encouraged me to start taking pictures of sailboats. My training paid off landing me a berth on the 2000 US Sailing Team. Shortly afterward, I took up the camera and while shooting a regatta I turned the camera on a fellow model/actor and friend of mine who had come along for the day. Those pictures ended up in his portfolio and created the outset of my new career. Since then my pictures have led me into advertising and my clients now include Levi\'s, Reebok, DKNY, Johnnie Walker and Axe Deodorant to name a few. I am continually growing as a photographer and I\'m so glad that my crazy path has landed me here with a camera in hand. I would like to give a special thanks to Caggie Simonelli, Bruce Weber, and Josette Lata for making this possible." - Peter Hurley'
    },
    body: "Go out and start taking headshots! Join Peter Hurley as he brings you the answers to the top 10 headshot questions he gets asked the most. In this class you\'ll learn how to chill out your subject, how to get started with a limited budget, how to make people look their best, and how to fix all kinds of things that come up during a shoot. From gear choices to working with clients, Peter doesn\'t only provide the answers, he demonstrates how he works with live subjects, so you get to see it all from start to finish in a series of shoots with a variety of people. To really get the most out of it though, you\'ve got to apply it, and by the end of the class you\'ll be ready to get started.",
    name: "The Top Ten Headshot Photography Questions Answered",
    image: 'http://img.kelbymediagroup.com/kelbyone_enterprise/2017/01/NOTC_MainImages_01.25.17_Headshot-768x432.jpg'
}, {
    id: 1608875,
    isBookmarked: false,
    progress: 25,
    percent: 75,
    lessons: [],
    instructor: {
        image: 'http://progressive.kelbymediagroup.com/kelbyone/uploads/images/instructor_headshots/k1_instructors_skramer_640x640.jpg',
        name: 'Stella Kramer',
        body: 'Stella Kramer (image by Sari Goodfriend) is a Pulitzer Prize-winning photo editor and creative strategist, working with photographers to strengthen their creative eye, put together the strongest portfolios and websites reflecting their work, and set a course to reach their professional goals. Beginning her career as a Photo Editor, Stella worked for such major publications as The New York Times, People, Entertainment Weekly, Sports Illustrated, Newsweek and Brill’s Content. Stella has worked on many of the major news events in recent history, serving as the Photo Editor for The New York Times series “Portraits of Grief” memorializing those who lost their lives in the September 11th, 2001 terrorist attacks. Her work was part of the team that won the 2002 Pulitzer Prize for Public Service and the 2002 Infinity Award for Public Service from the International Center of Photography. She was also part of the team at The New York Times that won the 2002 Pulitzer Prize for Breaking News Photography. Stella has curated exhibits for The Museum of the City of New York, The Griffin Museum, The Center for Fine Art Photography, Photoville, as well as online exhibitions. She lectures, reviews portfolios, writes about photography, and is on the faculty of SVA Masters of Digital Photography program.'
    },
    body: "Become a better photographer through editing and sequencing! Join Stella Kramer, a Pulitzer Prize-winning photo editor, as she teaches you how good editing and sequencing can help to do a better job of telling a story with your work. You\'ll learn the basics of editing and sequencing, the importance of knowing your objective, how to deal with critique, why you should stand behind your work, and the value in letting go. Stella brings all of these points home in a series of live edit and sequencing work sessions with three different photographic projects.",
    name: "Building a Winning Portfolio: Editing and Sequencing Your Images",
    image: 'http://img.kelbymediagroup.com/kelbyone_enterprise/2017/01/NOTC_MainImages_01.18.17_LearnToLetGo-768x432.jpg'
}, {
    id: 1598971,
    isBookmarked: false,
    progress: 0,
    percent: 100,
    lessons: [],
    instructor: {
        image: 'http://progressive.kelbymediagroup.com/kelbyone/uploads/images/instructor_headshots/k1_instructors_hmchinn_640x640.jpg',
        name: 'Heather Chinn',
        body: 'Heather “The Painter” is an award winning Corel Painter Master Elite, Golden Artist Educator, Corel Approved Painter Educator, PPA Master Artist,Master Photographer, Master Craftsman, and all around painting & research geek. An experienced live presenter, she has been teaching Corel Painter and mixed media at multi-day workshops, seminars, and PPA affiliate schools nationally for the last nine years. Heather’s masterpieces are consistently featured in the prestigious, annual Loan Collections where only a small percentage of the world’s best photographic artwork is selected among thousands of entries. Her belief that anyone can easily use Corel Painter to create their own keepsakes led her to a speaking platform at the beautiful Phoenix Symphony Hall for the Professional Photographers of America’s International Convention in Phoenix, Arizona in January 2014. A multi time Diamond and Platinum Photographer of the Year at the International Print Competition, Heather recently was approved as an IPC artist juror.'
    },
    body: "Turn your photographs into beautiful paintings! Join Heather the Painter as she introduces you to Corel Painter 2017, and shares her tips and workflow to show you how to easily create custom paintings from your photos. Using a Wacom tablet for greater control and a natural brush stroke, Heather starts with an orientation to Painter, how to customize brushes, and how to configure your Wacom tablet for optimal settings. From there she expertly steps you through her workflow as she transforms a portrait photograph into a stunning painting. Whether you are painting for yourself or your clients, you\'ll have a great foundation for getting the most out of Corel Painter.",
    name: "Painting Portraits in Corel Painter 2017",
    image: 'http://img.kelbymediagroup.com/kelbyone_enterprise/2017/01/AARON_NOTC_MainImages_12.17.16_Corel-768x432.jpg'
}, {
    id: 1588853,
    isBookmarked: false,
    progress: 0,
    percent: 100,
    lessons: [],
    instructor: {
        image: 'http://progressive.kelbymediagroup.com/kelbyone/uploads/images/instructor_headshots/k1_instructors_kgreer_640x640.jpg',
        name: 'Kaylee Greer',
        body: 'Kaylee Greer is an internationally recognized private and commercial pet photographer. She is living out her dream through a camera lens in gorgeous Boston, Massachusetts. She\'s traveled the world teaching pet photography workshops and has seen her work published in many major industry editorial titles. Her images grace calendar lines, greeting cards, products, packaging and advertising campaigns throughout the commercial pet industry. Her photographic style is drawn directly from the inspiration she finds inside the soul of a dog. She is fueled by the joy, whimsy and unrelenting happiness that is so uniquely canine. Kaylee is known for her love of vibrant colors and unique process of capturing the comedy and character of dogs. Through her business, Dog Breath Photography, it is one of Kaylee\'s strongest passions to give a voice to the voiceless by volunteering her time to local shelters and photographing the abandoned and homeless animals who lie in wait for a second chance.'
    },
    body: "Learn how to overcome challenging situations in dog photography! Join Kaylee Greer as she shares her tips and techniques for dealing with a variety of canine personality types. From wild untamed puppies to shy rescues, you\'ll see how Kaylee sets up the situation, how she interacts with the subjects (and their human companions) to get those impactful pet portraits that clients love. Kaylee also demonstrates how to deal with doggie group photos and the exposure challenges that can come with combinations of light and dark colored dogs. Each lesson is a real world scenario on location, and Kaylee talks through the approach she takes every step of the way.",
    name: "Dog Photography: Overcoming Challenging Situations",
    image: 'http://img.kelbymediagroup.com/kelbyone_enterprise/2017/01/AARON_NOTC_MainImages_01.04.17_PetsinChallengingSituations-768x432.jpg'
}, {
    id: 1568808,
    isBookmarked: true,
    progress: 0,
    percent: 100,
    lessons: [],
    instructor: {
        image: 'http://img.kelbymediagroup.com/kelbyone_enterprise/2016/03/k1_instructors_skelby_640x640.jpg',
        name: 'Scott Kelby',
        body: 'Scott is the President and CEO of KelbyOne, is also the original "Photoshop Guy", is the editor and publisher of Photoshop User Magazine, Conference Technical Chair for the Photoshop World Conference & Expo, Training Director and instructor for KelbyOne Live Seminars, and author of a string of bestselling technology and photography books.'
    },
    body: "Consider this your very own photographer-friendly guide on where to go for the best photographs of Venice, Italy. Join Scott Kelby and Larry Becker as Scott shares his favorite locations to shoot, along with the kind of veteran traveler tips that will help you capture images that you\'ll be delighted to bring back home. Timing is everything, so you\'ll not only learn where to go, but what times will yield the best chances for great photographs. This is strictly a travel guide for photographers (including a downloadable PDF), so there\'s no Photoshop or Lightroom involved, just the kind of information that will aid you on your photographic journey and inspire you to get out there and shoot.",
    name: "Travel Photography: A Photographers Guide to Venice",
    image: 'http://img.kelbymediagroup.com/kelbyone_enterprise/2016/12/NOTC_MainImages_12.21.16_TraveVenice-768x432.jpg'
}, {
    id: 1568723,
    isBookmarked: true,
    progress: 80,
    percent: 20,
    lessons: [],
    instructor: {
        image: 'http://img.kelbymediagroup.com/kelbyone_enterprise/2016/03/k1_instructors_skelby_640x640.jpg',
        name: 'Scott Kelby',
        body: 'Scott is the President and CEO of KelbyOne, is also the original "Photoshop Guy", is the editor and publisher of Photoshop User Magazine, Conference Technical Chair for the Photoshop World Conference & Expo, Training Director and instructor for KelbyOne Live Seminars, and author of a string of bestselling technology and photography books.'
    },
    body: "Consider this your very own photographer-friendly guide on where to go for the best photographs of London, England. Join Scott Kelby and Larry Becker as Scott shares his favorite locations to shoot, along with the kind of veteran traveler tips that will help you capture images that you\'ll be delighted to bring back home. Timing is everything, so you\'ll not only learn where to go, but what times will yield the best chances for great photographs. This is strictly a travel guide for photographers (including a downloadable PDF), so there\'s no Photoshop or Lightroom involved, just the kind of information that will aid you on your photographic journey and inspire you to get out there and shoot.",
    name: "Travel Photography: A Photographers Guide to London",
    image: 'http://img.kelbymediagroup.com/kelbyone_enterprise/2016/12/NOTC_MainImages_12.21.16_TravelLondon-768x432.jpg'
}];
const instructorCourses = [{
    id: 1659386,
    isBookmarked: false,
    progress: 0,
    percent: 100,
    lessons: [],
    instructor: {
        image: 'http://img.kelbymediagroup.com/kelbyone_enterprise/2016/03/k1_instructors_skelby_640x640.jpg',
        name: 'Scott Kelby',
        body: 'Scott is the President and CEO of KelbyOne, is also the original "Photoshop Guy", is the editor and publisher of Photoshop User Magazine, Conference Technical Chair for the Photoshop World Conference & Expo, Training Director and instructor for KelbyOne Live Seminars, and author of a string of bestselling technology and photography books.'
    },
    body: "Imagine going out shooting with Scott Kelby at your side giving you tips, advice, and strategies for using your camera the same way he does, and that\'s what this class is all about. Scott\'s goal is to help beginners go beyond auto mode, be in control, and make great photographs. It\'s as simple as that, and it doesn\'t even matter what brand of camera you are using, as these lessons apply to all cameras. Scott shares his favorite camera settings, tips for getting tack-sharp photos, favorite lenses for different situations, and so much more. Once you start putting these concepts into practice you\'re going to see an immediate improvement in your work.",
    name: "Beginners Start Here",
    image: 'http://img.kelbymediagroup.com/kelbyone_enterprise/2017/02/AARON_NOTC_MainImages_02.22.17_BeginnersStartHere-768x432.jpg'
}, {
    id: 1568808,
    isBookmarked: true,
    progress: 0,
    percent: 100,
    lessons: [],
    instructor: {
        image: 'http://img.kelbymediagroup.com/kelbyone_enterprise/2016/03/k1_instructors_skelby_640x640.jpg',
        name: 'Scott Kelby',
        body: 'Scott is the President and CEO of KelbyOne, is also the original "Photoshop Guy", is the editor and publisher of Photoshop User Magazine, Conference Technical Chair for the Photoshop World Conference & Expo, Training Director and instructor for KelbyOne Live Seminars, and author of a string of bestselling technology and photography books.'
    },
    body: "Consider this your very own photographer-friendly guide on where to go for the best photographs of Venice, Italy. Join Scott Kelby and Larry Becker as Scott shares his favorite locations to shoot, along with the kind of veteran traveler tips that will help you capture images that you\'ll be delighted to bring back home. Timing is everything, so you\'ll not only learn where to go, but what times will yield the best chances for great photographs. This is strictly a travel guide for photographers (including a downloadable PDF), so there\'s no Photoshop or Lightroom involved, just the kind of information that will aid you on your photographic journey and inspire you to get out there and shoot.",
    name: "Travel Photography: A Photographers Guide to Venice",
    image: 'http://img.kelbymediagroup.com/kelbyone_enterprise/2016/12/NOTC_MainImages_12.21.16_TraveVenice-768x432.jpg'
}, {
    id: 1568723,
    isBookmarked: true,
    progress: 80,
    percent: 20,
    lessons: [],
    instructor: {
        image: 'http://img.kelbymediagroup.com/kelbyone_enterprise/2016/03/k1_instructors_skelby_640x640.jpg',
        name: 'Scott Kelby',
        body: 'Scott is the President and CEO of KelbyOne, is also the original "Photoshop Guy", is the editor and publisher of Photoshop User Magazine, Conference Technical Chair for the Photoshop World Conference & Expo, Training Director and instructor for KelbyOne Live Seminars, and author of a string of bestselling technology and photography books.'
    },
    body: "Consider this your very own photographer-friendly guide on where to go for the best photographs of London, England. Join Scott Kelby and Larry Becker as Scott shares his favorite locations to shoot, along with the kind of veteran traveler tips that will help you capture images that you\'ll be delighted to bring back home. Timing is everything, so you\'ll not only learn where to go, but what times will yield the best chances for great photographs. This is strictly a travel guide for photographers (including a downloadable PDF), so there\'s no Photoshop or Lightroom involved, just the kind of information that will aid you on your photographic journey and inspire you to get out there and shoot.",
    name: "Travel Photography: A Photographers Guide to London",
    image: 'http://img.kelbymediagroup.com/kelbyone_enterprise/2016/12/NOTC_MainImages_12.21.16_TravelLondon-768x432.jpg'
}];


Template7.global = {
    category: category,
    categories: categories,
    instructors: function() {
        $.getJSON('http://kelbyone/wp-json/ko/v2/instructors/', function(data) {
            console.info(data, 'data');
            return data.response.instructors;
        });

    },
    courses: courses,
    instructorCourses: instructorCourses
};
// Initialize app
var kelbyoneApp = new Framework7({
    cache: false,
    material: true,
    // hideNavbarOnPageScroll: false,
    // hideTabbarOnPageScroll: false,
    // imagesLazyLoadThreshold: 100,
    panelLeftBreakpoint: 1200,
    panelRightBreakpoint: 1600,
    template7Pages: true,
    template7Data: {
        'url:courses.html': {
            latest: [{
                image: 'https://members.kelbyone.com/wp-content/uploads/2017/03/NOTC_MainImages_03.15.17_CameraFocusTechniques-250x250.jpg',
                name: 'Camera Focus Techniques: The Key To Super Sharp Photos',
                progress: 0,
                percent: 100,
                id: 1674349,
                instructor: {
                    name: 'Larry Becker'
                }
            }, {
                image: '',
                name: '',
                progress: '',
                percent: '',
                id: '',
                instructor: {
                    name: ''
                }
            }],
            current: function() {
                return getCurrentCourses('main');
            }
        },
        'url:instructors.html': {
            instructors: function() {
                return getInstructors();
            }
        },
        'url:instructor.html': {
            courses: function() {
                return getInstructorCourses('main');
            }
        },
        'url:index.html': {
            courses: function() {
                return getCurrentCourses('main');
            }
        }
    }
});
Template7.registerHelper('stringify', function(el) {
    // console.warn('encode', JSON.stringify(el));
    return JSON.stringify(el);
})

function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        // console.info(i, !obj.hasOwnProperty(i));
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            var keys = key.split('.');
            console.info(keys, i)
            console.info(obj[i], key, val)
            objects = objects.concat(getObjects(obj[i], key, val));
        } else if (i == key && obj[key] == val) {
            console.log('push', obj)
            objects.push(obj);
        }
    }
    return objects;
}

function sortByKey(array, key, sort) {

    if ('desc' == sort) {
        return array.sort(function(a, b) {
            var x = a[key];
            var y = b[key];
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        });
    }

    return array.sort(function(a, b) {
        var x = a[key];
        var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

// console.info(getObjects(courses, 'instructor.id', 10))
function getInstructors() {
        $.getJSON('http://kelbyone/wp-json/ko/v2/instructors/', function(data) {
            console.info(data.response.instructors, 'instructors');
            return sortByKey(data.response.instructors, 'number_of_courses', 'desc');
        });
    return Template7.global.instructors;
    return sortByKey(Template7.global.instructors, 'coursesCount', 'desc');
}

function getCurrentCourses() {
    return Template7.global.courses;
}

function getInstructorCourses() {
    return Template7.global.instructorCourses;
}

console.info(Template7.data, 'data?');

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;



$(document).on('click', '.show-course-lessons', function() {
    console.warn('clicked');
    kelbyoneApp.showTab('#course-lessons');
    $('.play-overlay').hide();
    $('.controls').show();

    var player = jwplayer('player');
    player.setup({
        file: "//content.jwplatform.com/videos/xJ7Wcodt-cIp6U8lV.mp4",
        image: "//content.jwplatform.com/thumbs/xJ7Wcodt-720.jpg"
    });

    // player.addButton(
    //     //This portion is what designates the graphic used for the button
    //     "//icons.jwplayer.com/icons/white/download.svg",
    //     //This portion determines the text that appears as a tooltip
    //     "Download Video",
    //     //This portion designates the functionality of the button itself
    //     function() {
    //         //With the below code, we're grabbing the file that's currently playing
    //         window.location.href = player.getPlaylistItem()['file'];
    //     },
    //     //And finally, here we set the unique ID of the button itself.
    //     "download"
    // );
    player.on('ready', function() {
        player.play();
    });
});

$$('.video-settings').on('click', function () {
    $('.search').hide();
    $('.settings').show();
});

$$('#course-lessons').on('tab:show', function() {
    kelbyoneApp.alert('Tab 1 is visible');
    console.info('show')
});

kelbyoneApp.loginScreen('.login-screen', true);

var mainView = kelbyoneApp.addView('.view-main');

kelbyoneApp.onPageInit('*', function(page) {
    console.log(page.name + ' initialized', page);

    // if (page.query.categoryId) {
    //     console.info(categories, 'categories');

    //     for (var i = 0; i < categories.length; i++) {
    //         var category = categories[i];

    //         // console.info(category.id == page.query.categoryId, category.id, page.query.categoryId);
    //         if (parseInt(category.id) == parseInt(page.query.categoryId)) {
    //             page.context.category = category;
    //             console.info(page, category, 'active');
    //         }

    //     }
    // }

    // return mainView.router.refreshPage();

});

// kelbyoneApp.onPageInit('courses', function(page) {
//     let courses;
//     if ('courses' === page.name) {
//         if (page.query.categoryId) {
//             return;
//         }
//         return;
//     }
// });
Template7.registerHelper('teaser', function(item, maxLength, options) {

    var text = item.body;

    if (item.description) {
        text = item.description;
    }

    if (text.length <= maxLength) {
        return text;
    }
    if (!options) options = {};
    var defaultOptions = {
        // By default we add an ellipsis at the end
        suffix: true,
        suffixString: "...",
        // By default we preserve word boundaries
        preserveWordBoundaries: true,
        wordSeparator: " "
    };
    $.extend(options, defaultOptions);
    // Compute suffix to use (eventually add an ellipsis)
    var suffix = "";
    if (text.length > maxLength && options.suffix) {
        suffix = options.suffixString;
    }

    // Compute the index at which we have to cut the text
    var maxTextLength = maxLength - suffix.length;
    var cutIndex;
    if (options.preserveWordBoundaries) {
        // We use +1 because the extra char is either a space or will be cut anyway
        // This permits to avoid removing an extra word when there's a space at the maxTextLength index
        var lastWordSeparatorIndex = text.lastIndexOf(options.wordSeparator, maxTextLength + 1);
        // We include 0 because if have a "very long first word" (size > maxLength), we still don't want to cut it
        // But just display "...". But in this case the user should probably use preserveWordBoundaries:false...
        cutIndex = lastWordSeparatorIndex > 0 ? lastWordSeparatorIndex : maxTextLength;
    } else {
        cutIndex = maxTextLength;
    }

    var newText = text.substr(0, cutIndex);
    return newText + suffix;


    var teaser = string.substr(0, length);
    return teaser.substr(0, Math.min(teaser.length, teaser.lastIndexOf(" ")))
        // console.info(string, count, 'teaser')
        // var parts = string.match(/.{1,155}/g) || [];
        // console.log(parts);

    // console.log(''.match(/.{1,155}/g) || []);
    // return parts[0];
});
