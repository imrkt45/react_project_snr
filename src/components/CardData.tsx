export interface DatabaseItem {
    downloads: {
        name: string;
        apps: {
            firstapp: string;
            secondapp: string;
            thirdapp: string;
        };
        projects: {
            firstproject: string;
            secondproject: string;
            thirdproject: string;
        };
        picture: string;
    };
    documents: {
        company: {
            snr: string;
            amazon: string;
            flipkart: string;
        };
        video: string;
        audio: string;
        pic: string;
    };
    newapp: {
        nodejs: string;
        reactnative: string;
        reactjs: string;
        oldapp: {
            vscode: string;
            msteam: string;
        };
        newapp: {
            expressjs: string;
            chrome: string;
            studio: string;
        };
    };
    practical: {
        mathfile: string;
        english: string;
        external: {
            math: string;
            art: string;
            DL: string;
        };
    };
    snr: {
        trainee: string;
        software: string;
        engineers: {
            raj: string;
            satyam: string;
            vivek: string;
        };
    };
}

export const database: DatabaseItem[] = [
    {
        downloads: {
            name: "raj",
            apps: {
                firstapp: "firstapp",
                secondapp: "secondapp",
                thirdapp: "thirdapp",
            },
            projects: {
                firstproject: "firstproject",
                secondproject: "secondproject",
                thirdproject: "thirdproject",
            },
            picture: "pic",
        },
        documents: {
            company: { snr: "react", amazon: "dynamodb", flipkart: "native" },
            video: "video",
            audio: "audio",
            pic: "pic",
        },
        newapp: {
            nodejs: "nodejs",
            reactnative: "reactnative",
            reactjs: "reactjs",
            oldapp: {
                vscode: "vscode",
                msteam: "msteam",
            },
            newapp: {
                expressjs: "expressjs",
                chrome: "chrome",
                studio: "studio",
            },
        },
        practical: {
            mathfile: "mathfile",
            english: "english",
            external: {
                math: "math",
                art: "art",
                DL: "DL",
            },
        },
        snr: {
            trainee: "trainee",
            software: "software",
            engineers: {
                raj: "raj",
                satyam: "satyam",
                vivek: "vivek",
            },
        },
    },
];
