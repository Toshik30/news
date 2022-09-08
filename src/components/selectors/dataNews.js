import Dashboard from '../../images/Dashboard.png';
import About from '../../images/About.png';
// import tesla from '../../images/tesla.png';
// import amazon from '../../images/amazon.png';
import apple from '../../images/apple.png';
import samsung from '../../images/samsung.png';
import google from '../../images/google.png';
import mcdonalds from '../../images/mcdonalds.png';
import fin from '../../images/fin.png';
import finexchange from '../../images/Fin-Exchange.png';
import wsunion from '../../images/wsunion.png';
import wsunionPage from '../../images/wsunionPage.png'
export const DATA_NEWS = [
    {
        heading: 'An all-in-one tool for your entire team.',
        description: 'No more ping-ponging between emails, spreadsheets, and other apps. Bring everything together in one place.',
        image: Dashboard,
        imageDescription: 'All your jobs, candidates, messages and notes in one place.',
    },
    {
        heading: 'An experience candidates simply love.',
        description: 'Treat candidates with a rich career site, beautiful job posts, tailored application forms and faster response times.',
        image: About,
        imageDescription: 'Career page created with Homerun.',
    },
]


export const DETAILED_NEWS = [
    {
        id: '0',
        name: 'Samsung',
        shortDescription: 'Samsung hglhgflgf gfhgfhgflkhjgflhgjljglfhjgf',
        shortHeading: 'Samsung',
        fullDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut nemo voluptatem dolor perferendis, unde corporis est nobis sit vero! Quae eius dolorem omnis vero officiis quam, eos nemo non corporis Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut nemo voluptatem dolor perferendis, unde corporis est nobis sit vero! Quae eius dolorem omnis vero officiis quam, eos nemo non corporisLorem ipsum dolor sit, amet consectetur adipisicing elit. Aut nemo voluptatem dolor perferendis, unde corporis est nobis sit vero! Quae eius dolorem omnis vero officiis quam, eos nemo non corporis',
        heading: 'Samsung hglhgflgf gfhgfhgflkhjgflhgjljglfhjgf',
        image: samsung,
        path: `/blog/Samsung` //i have a questions
    },
    {
        id: '1',
        name: 'apple',
        shortDescription: 'Appleh.gmh hgfhgfklhjgfl hgfjghfhl ffgf hgfhgfhfghgfhgfhgfhg',
        shortHeading: 'Apple',
        fullDescription: `Poisoned Apple is a small online business based in South Wales, United Kingdom. Owned and run by me, Lianne, a fan of all things Disney and other pop culture franchises including Harry Potter, Marvel, Star Wars to name a few! Here at Poisoned Apple we love fashion and accessories (especially bags!) so have combined these interests and built this store, stocking a growing range of fashion items, handbags, backpacks, accessories, keyrings, pin badges, glassware, gifts, homeware and collectables. All of our magical products are fully l`,
        heading: 'About Poisoned Apple',
        image: apple,
        path: '/blog/apple'
    },
    {
        id: '2',
        name: 'google',
        shortDescription: 'Google treltjoiu43 4234jl jlgjflg dfkgljf kldjgldfjgldfjglkdf gjldfdfjgldfgldf gfjd',
        shortHeading: 'Google',
        fullDescription: 'Google treltjoiu43 4234jl jlgjflg dfkgljf kldjgldfjgldfjglkdf gjldfdfjgldfgldf gfjdGoogle treltjoiu43 4234jl jlgjflg dfkgljf kldjgldfjgldfjglkdf gjldfdfjgldfgldf gfjdGoogle treltjoiu43 4234jl jlgjflg dfkgljf kldjgldfjgldfjglkdf gjldfdfjgldfgldf gfjdGoogle treltjoiu43 4234jl jlgjflg dfkgljf kldjgldfjgldfjglkdf gjldfdfjgldfgldf gfjdGoogle trel',
        heading: 'Google treltjoiu43',
        image: google,
        path: '/blog/google'
    },
    {
        id: '3',
        name: 'mcdonalds',
        shortDescription: 'Mcdonalds mb,mb,nnmbn gkkg kffld d',
        shortHeading: 'Mcdonalds',
        fullDescription: 'Tesla MR-scanning og idrætsklinik udfører avancerede undersøgelser af skader på led, knogler, sener og muskler.Vores patienter er bl.a. professionelle sportsfolk, og klinikkens læger har mange års erfaring i at diagnosticere og rådgive om behandling af idrætsskader.Ved hjælp af MR-scanneren stiller vi en præcis diagnose, så du slipper for unødvendige kikkertundersøgelser og hurtigt kan få den rigtige behandling og genoptræning.Går du ikke allerede til behandling med din skade, henviser vi dig til anerkendte ortopædkirurger og fysioterapeuter.',
        heading: 'McDonalds tretoreitre rjor trtr',
        image: mcdonalds,
        path: '/blog/mcdonalds'
    },
    // {
    //     id: '4',
    //     name: 'tesla',
    //     shortDescription: 'Tesla gfg;ggf flkfd;kslfkd;sfd;;fk;dfkd;ekewprpir-ewr- Tesla gfg;ggf flkfd;kslfkd;sfd;;fk;dfkd;ekewprpir-ewr-Tesla gfg;ggf flkfd;kslfkd;sfd;;fk;dfkd;ekewprpir-ewr-Tesla gfg;ggf flkfd;kslfkd;sfd;;fk;dfkd;ekewprpir-ewr-',
    //     shortHeading: 'Tesla',
    //     fullDescription: 'Tesla MR-scanning og idrætsklinik udfører avancerede undersøgelser af skader på led, knogler, sener og muskler.Vores patienter er bl.a. professionelle sportsfolk, og klinikkens læger har mange års erfaring i at diagnosticere og rådgive om behandling af idrætsskader.Ved hjælp af MR-scanneren stiller vi en præcis diagnose, så du slipper for unødvendige kikkertundersøgelser og hurtigt kan få den rigtige behandling og genoptræning.Går du ikke allerede til behandling med din skade, henviser vi dig til anerkendte ortopædkirurger og fysioterapeuter.',
    //     heading: 'Tesla Mr-scanning og idrætsklinik.',
    //     image: tesla,
    //     path: '/blog/tesla'
    // },
    // {
    //     id: '5',
    //     name: 'Amazon amaf ffdfd',
    //     shortDescription: 'Amazon 333903mfkm glfkgjfl 30303-034-211',
    //     shortHeading: 'Amazon',
    //     fullDescription: `Thanks for the excellent service and communication around my recent treadmill purchase and delivery. The treadmill is great! The condition far exceeded the level i expected for a 'refurbished' product
    //     A big thank you to the delivery and installation team that delivered the treadmill. They did a great job, keeping me up to date with their progress before delivery and installing and setting up the treadmill, running through the functions and making sure everything was working well.
    //     I will certainly be recommending that anyone who asks me about good quality and good service for this kind of equipment checks out your company!`,
    //     heading: 'Amazon Leisure',
    //     image: amazon,
    //     path: '/blog/Amazon amaf ffdfd'
    // },
    {
        id: '6',
        name: 'Fin Exchange',
        shortDescription: 'We offer trading on commodities crypto, including gold and oil. finexchnge.com opens the door to thousands of markets all over the world.',
        shortHeading: 'Fin Exchange',
        fullDescription: `After taking a look at their website, it shows that they do not fall under any regulating agency. That is a MAJOR RED FLAG!! That should be enough for you NOT to invest with them. And they also work with websites that offer “Automated trading software” which is another red flag, as this kind of websites are notoriously famous for scamming schemes. 
        So Fin Exchange is just another unregulated forex broker, which means the customers are not protected, and there is highly likely they will get away with your hard earned money and there will be no regulating agency to hold them responsible.`,
        heading: 'Who are they?',
        descriptionLvl: {
            image: finexchange,
            rev1: {
                heading: 'How does it work?',
                desc: 'Usually unregulated forex brokers work in the following way. They will call people to persuade them to make the initial minimum deposit, while trying any conceivable method in order to make that happen. They will offer deals that sound too good to be true, like we will double your initial deposit or you will make $100 per day easily. Please don’t fall for anything they say!!! It is a SCAM! After making the initial deposit, people get transferred to a smarter scammer, called a “retention agent”, who will try to get more money out of you.'
            },
            rev2: {
                heading: 'Withdrawing funds',
                desc: 'You should submit a withdrawal request ASAP, because your funds are never safe with an unregulated broker. And here is when things get tricky.',
                desc1: 'If you want to withdraw your money and it does not matter if you have profits or not, they will delay the withdrawing process for months. If they delay it for six months, you won’t be able to file a chargeback anymore and your money is gone for good. It does not matter how often you remind them or insist in withdrawing your money, you will NOT get them back. And if you signed the Managed Account Agreement or MAA, which is basically authorizing them to do anything they want on your account, they will lose all your funds so there won’t be anything to request anymore.'
            },
            rev3: {
                heading: 'How to get your money back?',
                desc: 'If you already deposited your money with them and they refuse to give your money back, which is very likely to happen, don’t worry, it might be a way or two to get your money back.',
                desc1: 'First of all you need to keep the emails as a proof that you have been requesting the money back from them but they don’t give it to you, or they delay the process for too long, with the intention of not refunding your money.',
                desc2: 'The first thing you should do is perform a chargeback! And you should do this right away! Contact your bank or credit card provider and explain how you were deceived into depositing for a trading company that is not regulated and they refuse to give your money back. This is the simplest way of getting your money back and is also the way that hurts them the most. Because if there are many chargebacks performed, it will destroy their relation with the payment service providers. If you haven’t done this before or you are not sure where to start or how to present your case to your bank or credit card company, we can assist you in preparing your chargeback case. Just contact us at email@gmail.com but do not let your broker know they you read this article or that you are in contact with us.',
            },
            rev4: {
                heading: 'What about wires?',
                desc: 'If you sent them a wire, there is no way to perform a chargeback on a wire. For this step you need to raise the fight to a different level. Tell them that you will go to the authorities and file a complaint against them. That will get them to rethink the refund possibility. Another thing you can do is prepare a letter or email for the regulating agencies. Depending on the country where you live, you can search on google to find the regulating agency for Forex brokers in that country. After that you can prepare a letter or an email describing how you got deceived from them. Make sure you show this letter or email to them, and tell them you will send it to the regulating agency if they don’t refund your money. If you do not know where to start, reach for us at email@gmail.com and we will help you with this step as well.',
                desc1: `Make sure you leave reviews about Fin Exchange in other sites
                Another way to hurt them and save other people from falling victims is to leave bad reviews on other sites, and describe shortly what happened. If you fallen victim please leave a review and a comment on this site at the comment section. Also, when these people change their website they tend to call the old clients, so if they call you from a new website please write it down on the comment or let us know it by contacting us. That would be really appreciated by us and families all over world. Also if you get phone calls from other companies please put the name of these companies also in the comment or send it to us. We will expose them too.`
            },
        },
        image: fin,
        path: '/blog/Fin Exchange'
    },
    {
        id: '7',
        name: 'World Stocks Traders Union Review',
        shortDescription: 'wstunion provides unlimited opportunities and encourages to magnify profit.',
        fullDescription: `Read our World Stocks Traders Union review to see if we recommend this broker for trading. Just to clear doubts, this is a wstunion.com review.`,
        heading: 'World Stocks Traders Union Review',
        descriptionLvl: {
            image: wsunionPage,
            rev1: {
                heading: 'Who are they?',
                desc: 'After taking a look at their website, it shows that they do not fall under any regulating agency. That is a MAJOR RED FLAG!! That should be enough for you NOT to invest with them. And they also work with websites that offer “Automated trading software” which is another red flag, as this kind of websites are notoriously famous for scamming schemes.',
                desc1: 'So World Stocks Traders Union is just another unregulated forex broker, which means the customers are not protected, and there is highly likely they will get away with your hard earned money and there will be no regulating agency to hold them responsible.',
            },
            rev2: {
                heading: 'How does it work?',
                desc: 'Usually unregulated forex brokers work in the following way. They will call people to persuade them to make the initial minimum deposit, while trying any conceivable method in order to make that happen. They will offer deals that sound too good to be true, like we will double your initial deposit or you will make $100 per day easily. Please don’t fall for anything they say!!! It is a SCAM! After making the initial deposit, people get transferred to a smarter scammer, called a “retention agent”, who will try to get more money out of you.',
                desc1: ''
            },
            rev3: {
                heading: 'Withdrawing funds',
                desc: 'You should submit a withdrawal request ASAP, because your funds are never safe with an unregulated broker. And here is when things get tricky.',
                desc1: 'If you want to withdraw your money and it does not matter if you have profits or not, they will delay the withdrawing process for months. If they delay it for six months, you won’t be able to file a chargeback anymore and your money is gone for good. It does not matter how often you remind them or insist in withdrawing your money, you will NOT get them back. And if you signed the Managed Account Agreement or MAA, which is basically authorizing them to do anything they want on your account, they will lose all your funds so there won’t be anything to request anymore.',
                desc2: '',
            },
            rev4: {
                heading: 'How to get your money back?',
                desc: `If you already deposited your money with them and they refuse to give your money back, which is very likely to happen, don’t worry, it might be a way or two to get your money back.
                First of all you need to keep the emails as a proof that you have been requesting the money back from them but they don’t give it to you, or they delay the process for too long, with the intention of not refunding your money.`,
                desc1: `The first thing you should do is perform a chargeback! And you should do this right away! Contact your bank or credit card provider and explain how you were deceived into depositing for a trading company that is not regulated and they refuse to give your money back. This is the simplest way of getting your money back and is also the way that hurts them the most. Because if there are many chargebacks performed, it will destroy their relation with the payment service providers. If you haven’t done this before or you are not sure where to start or how to present your case to your bank or credit card company, we can assist you in preparing your chargeback case. Just contact us at personalreviews1@gmail.com but do not let your broker know they you read this article or that you are in contact with us.`
            },
        },
        image: wsunion,
        path: '/blog/World Stocks Traders Union Review'
    },
]