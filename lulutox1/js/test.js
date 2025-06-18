const startTestText = {
    title: 'Find out if you are infected with parasites!',
    buttonStartText: 'Run test',
    buttonText: 'Next',
    buttonFinishText: 'Find out the result',
    testResultTitle: 'Your test result'
}
const questions = [
    {
        question: "How old are you?",
        type: "radio",
        answers: [
            {
                option: "Up to 35 years old",
                result: "<span>For young people under 35</span>, there is a risk of infection with parasites due to the worsening epidemiological situation in the United States in 2024."
            },
            {
                option: "35 - 55 years",
                result: "<span>For people aged 35 to 55 years</span>, the risk of parasite infection can be associated with a variety of factors, which makes the body more vulnerable. This may increase the risk of parasite infestation."
            },
            {
                option: "Over 55 years old",
                result: "<span>For people over 55 years of age</span>, there is an increased risk of parasite infection due to age-related weakening of the immune system."
            }
        ]
    },
    {
        question: "What symptoms do you have? <span class=\"quiz-multiple\">(you can select several items)</span>",
        type: "checkbox-radio",
        answers: [
            {
                option: "Excess weight",
                result: "<span>Excess weight</span> is one of the key symptoms of infection and is associated with the fact that parasites affect the digestive system, causing digestive disorders and preventing normal metabolism, which leads to fat deposits under the skin and around the internal organs."
            },
            {
                option: "Gastrointestinal problems",
                result: "<span>Stomach problems</span> (diarrhoea, constipation, bloating, nausea, vomiting and abdominal pain) are some of the main symptoms of the presence of parasites in the body."
            },
            {
                option: "Skin rashes",
                result: "<span>Skin rashes</span>, the formation of papillomas and warts on the skin can be associated with the effects of certain types of parasites. This is not just a cosmetic problem!"
            },
            {
                option: "Headache",
                result: "<span>Headache</span> is one of the accompanying symptoms of parasitic infection and is often associated with intoxication (poisoning) with waste products of parasites, as well as with the body’s immune response to their presence."
            },
            {
                option: "Chronic fatigue",
                result: "<span>Chronic fatigue</span> is often caused by the toxic effects of parasites. They weaken the body and cause greater stress on joints and muscles, impair sleep and provoke changes in the normal functioning of body systems."
            },
            {
                option: "No symptoms",
                result: ""
            }
        ]
    },
    {
        question: "Indicate what risk factors are present in your life.<!-- <span class=\"quiz-multiple\">(you can select several items)</span>-->",
        type: "checkbox-radio",
        answers: [
            {
                option: "Contact with animals",
                result: "<span>Owning pets</span> is associated with an increased risk of parasites due to their close contact with contaminated objects. This is due to the possibility of transmission of parasites through the skin or mucous membranes, as well as through contact with contaminated animal hair or fur."
            },
            {
                option: "Eating unwashed fruits and vegetables",
                result: "<span>On the surface of vegetables and fruits</span>, there may be parasitic eggs or cysts, which, when eaten raw or insufficiently processed foods, can enter the human body and cause an infection."
            },
            {
                option: "Working on the ground",
                result: "<span>Working with soil</span> may increase the risk of parasite infestation due to contact with soil that may contain parasitic organisms or their eggs."
            },
            {
                option: "Frequent travel",
                result: "<span>Frequent travel</span> may increase the risk of parasite infection due to possible contact with infected animals, contaminated water or food, and insect bites."
            },
            {
                option: "Having bad habits",
                result: "<span>Having bad habits</span> can weaken the body's immune system, making it more vulnerable to parasite infection."
            },
            {
                option: "No risk factors",
                result: ""
            }
        ]
    }
]

const resultMappings = {
    "0_0": "Even though you do not have symptoms of infection and risk factors, there is a risk of infection with parasites due to the difficult epidemiological situation in the country. The probability of infection in your case is 53%. Don't wait until your health problems get worse. We advise you to take preventive measures to cleanse the body of parasites.",
    "0_1-2": "Although you do not have symptoms of infection, you have several risk factors that may contribute to the presence of parasites in your body. The probability of parasitic infection in your case is 60%. We advise you to cleanse your body of parasites and remove the toxins with which they poison you.",
    "0_3": "Despite the absence of symptoms, you have 3 factors of parasite infection. The probability of having parasites in your case is 63%. Protect your health and begin the preventive process of cleansing your body of parasites with a natural anthelmintic.",
    "0_4-5": "Even though you have no symptoms of infection, you have many risk factors that increase the likelihood of having parasites in your body. The probability of parasitic infection in your case is 72%. You need to undergo a preventive cleansing of parasites, but only with the help of natural remedies.",
    "1-2_0": "Despite the absence of additional risk factors, your symptoms may indicate the presence of parasites in the body. The probability of infection in your case is 67%. We advise you to carry out preventive cleansing of the body from parasites to maintain the functioning of all organs at an optimal level.",
    "1-2_1-2": "The combination of several symptoms and several risk factors signals the need to cleanse the body of the toxic influence of parasites. There is a risk of complications. In your case, it is 79%. We encourage you to begin the parasite cleanse process to protect your body and feel better and healthier.",
    "1-2_3": "Even despite the small number of symptoms, you have 3 risk factors for infection with parasites that can pose a potential threat to your body. The probability of having parasites in your body is 83%. We recommend that you begin the process of cleansing the body of parasites, which will help get rid of excess toxins in the body.",
    "1-2_4-5": "Even though you do not have many symptoms of infection, a large number of risk factors significantly increase the likelihood of having parasites in your body. In your case, it is 86%. Start cleansing your body of parasites, which will not only improve your physical condition but will also make you feel more energetic and active.",
    "3_0": "Despite the absence of risk factors for infection, you have 3 symptoms that may indicate the presence of parasites in the body. The probability of infection in your case is 84%. We recommend that you take care of your health and begin detoxification from parasites.",
    "3_1-2": "If you have 3 symptoms and several risk factors for infection, your body may be in danger due to the toxic effects of helminths. The probability of having parasites in your case is 89%. You should take a body cleansing course.",
    "3_3": "You indicated 3 symptoms and 3 risk factors for infection. This indicates that you are at increased risk of parasitic infection. The probability of having parasites in your body is 91%. We recommend starting the parasite cleanse process as soon as possible to eliminate the negative impact of parasite toxins on your health and well-being.",
    "3_4-5": "The presence of 3 symptoms and many risk factors may indicate the presence of a parasitic infestation. In your case, the probability of infection is 95%. We recommend starting the process of cleansing your body as soon as possible.",
    "4-5_0": "Despite the absence of risk factors, you have many symptoms that indicate the presence of a parasitic infestation. In your case, the probability of the presence of parasites is 88%. You should undergo a course of cleansing your body of parasites as soon as possible before the situation gets worse.",
    "4-5_1-2": "With multiple symptoms and certain risk factors, there is a high chance of parasitic infestation. In your case, it is 93%. You should start the process of cleansing your body of parasites!",
    "4-5_3": "The presence of many symptoms and 3 risk factors may indicate the presence of parasites in your body. The probability of parasitic infection is 96%. Parasites produce toxins that negatively affect your health and well-being. Start acting as soon as possible and complete the full cleansing course!",
    "4-5_4-5": "Since you have many symptoms and risk factors, your body is at risk from parasitic infestation. The probability of having parasites in your body is 99%. Action is urgently needed. We advise you to cleanse your body of parasites as soon as possible and remove the toxins with which they poison you."
};

let currentQuestion;
const numberOfQuestions = questions.length;
let accumulateAnswers = [];
let resultText = [];
let symptomsCount = 0;
let risksCount = 0;

$(document).ready(function() {
    function addHtmlToSection(htmlContent) {
        const testSection = $('#test-section');
        testSection.html(htmlContent);
    }

    const htmlContent = `
        <div class="quiz-item active" id="quiz-wrapper">
            <div class="quiz-item active">
               <p class="subtitle">
                  ${startTestText.title}
               </p>
            </div>
        </div>
        <button class="btn-main" id="test-btn" onclick="handleTestButton()">
            ${startTestText.buttonStartText}
        </button>
        `;

    addHtmlToSection(htmlContent);
});

let handleTestButton = () => {
    if(!currentQuestion){
        $('#test-btn').text(`${startTestText.buttonText}`);

        currentQuestion = 0;
    }
    if(currentQuestion === numberOfQuestions - 1){
        $('#test-btn').text(`${startTestText.buttonFinishText}`);
        $('#test-btn').on('click', function() {
            handleResult();
        });
    }
    if(questions[currentQuestion]){
        /*handleProgress();*/
        if(questions[currentQuestion].type === 'radio'){
            renderRadioQuestion(currentQuestion)
        }
        else if (questions[currentQuestion].type === 'checkbox-radio'){
            renderCheckboxRadioQuestion(currentQuestion)
        }
    }
}

let renderRadioQuestion = (questionNumber) => {
    let quizWrapper = $('#quiz-wrapper');
    $('.quiz-answer').off('click', 'label');
    quizWrapper.children().remove();

    let templateQuestion = `
        <div class="quiz-item active">
            <p class="subtitle">${questions[questionNumber].question}</p>
            <div class="quiz-answer">
                ${questions[questionNumber].answers.map(answer => `<label><input type="radio" name="answer">${answer.option}</label>`).join('')}
            </div>
        </div>
    `;
    quizWrapper.append(templateQuestion);

    $('.quiz-answer input[type="radio"]').on('change', function() {
        let radioElements = $('.quiz-answer input[type="radio"]');
        let radioStates = radioElements.map(function() {
            return this.checked;
        }).get();
        setCheckboxesStates(radioStates);
    });

    currentQuestion++;
    disableButton()
}

let renderCheckboxRadioQuestion = (questionNumber) => {
    let quizWrapper = $('#quiz-wrapper');
    $('.quiz-answer').off('click', 'label');
    quizWrapper.children().remove();

    let templateQuestion = `
        <div class="quiz-item active">
            <p class="subtitle">${questions[questionNumber].question}</p>
            <div class="quiz-answer">
                ${questions[questionNumber].answers.map(answer => `<label><input type="checkbox" name="answer">${answer.option}</label>`).join('')}
            </div>
        </div>
    `;

    quizWrapper.append(templateQuestion);

    $('.quiz-answer label').on('click', function(event) {
        if ($(event.target).is('input[type="checkbox"]')) {
            event.stopImmediatePropagation();
            handleExclusionCheckbox(this);
        }
    });

    currentQuestion++;
    disableButton()
}

let getCheckboxElements = () => {
    return $('.quiz-answer input[type="checkbox"]')
}

let getCheckboxesStates = () => {
    let checkboxElements = getCheckboxElements();
    let checkboxStates = [];

    checkboxElements.each(function() {
        checkboxStates.push($(this).prop('checked'));
    });

    return checkboxStates
}

let setCheckboxesStates = (arr) => {
    let checkboxElements = getCheckboxElements();

    checkboxElements.each((index, element) => {
        element.checked = arr[index];
    });

    btnValidation(arr)
    manageResult(arr)
}

let handleExclusionCheckbox = () => {
    let checkboxElements = getCheckboxElements();
    let checkboxStates = getCheckboxesStates();

    let $label = $(event.target).closest('label');
    let indexInParent = $label.index();

    checkboxStates[indexInParent] = !checkboxStates[indexInParent];

    if(indexInParent !== questions[currentQuestion-1].answers.length - 1){
        checkboxElements.eq(checkboxElements.length - 1).prop('checked', false);
    }
    checkboxStates = getCheckboxesStates();
    let checkboxElement = checkboxElements.eq(indexInParent);
    handleCheckboxSwitch(checkboxElement)

    if(checkboxStates[questions[currentQuestion-1].answers.length - 1] === true){
        handleCheckboxExclusion()
    }

    checkboxStates = getCheckboxesStates();
    setCheckboxesStates(checkboxStates)
}

let handleCheckboxSwitch = (checkboxElement) => {

    let checkboxStates = getCheckboxesStates();

    if (checkboxElement.prop('checked')) {
        checkboxElement.prop('checked', false);
    } else {
        checkboxElement.prop('checked', true);
    }

    setCheckboxesStates(checkboxStates)
}

let handleCheckboxExclusion = () => {
    let checkboxStates = getCheckboxesStates();
    let checkboxElements = getCheckboxElements();
    for (let i = 0; i < checkboxElements.length - 1; i++) {
        if (checkboxStates[i]) {
            checkboxStates[i] = false;
        }
    }
    setCheckboxesStates(checkboxStates);
}

let manageResult = (arr) => {
    const questionIndex = currentQuestion - 1;

    while (accumulateAnswers.length <= questionIndex) {
        accumulateAnswers.push([]);
    }

    accumulateAnswers[questionIndex] = arr.slice();
}

let handleCountChecked = (arr) => {
    return arr.reduce((count, isChecked) => {
        if (isChecked) {
            return count + 1;
        }
        return count;
    }, 0);
}

let handleResult = () => {
    const resultText = [];

    accumulateAnswers.forEach((answersArray, questionIndex) => {
        const question = questions[questionIndex];

        answersArray.forEach((isChecked, index) => {
            if (isChecked) {
                const answer = question.answers[index];
                if (answer.result !== '') {
                    resultText.push(answer.result);
                }
            }
        });
    });

    resultText.push(addMappedText());
    handleResultBlock(resultText)
}

function getMappingKey() {
    const normalizeCount = count => {
        if (count === 1 || count === 2) return "1-2";
        if (count === 4 || count === 5) return "4-5";
        return count;
    };

    let normalizedSymptomsCount = normalizeCount(handleCountChecked(accumulateAnswers[1]));
    let normalizedRisksCount = normalizeCount(handleCountChecked(accumulateAnswers[2]));

    if (accumulateAnswers[1][accumulateAnswers[1].length - 1] === true){
        normalizedSymptomsCount = 0;
    }

    if (accumulateAnswers[2][accumulateAnswers[2].length - 1] === true){
        normalizedRisksCount = 0;
    }

    return `${normalizedSymptomsCount}_${normalizedRisksCount}`;
}

let addMappedText = () => {
    return resultMappings[getMappingKey()] || '';
}

let btnValidation = (arr) => {
    let isAnyAnswerChecked = arr.some(answer => answer === true);
    $('#test-btn').prop('disabled', !isAnyAnswerChecked);
}

let disableButton = () => {
    $('#test-btn').prop('disabled', true);
}

let handleProgress = () => { // some work to do
    let quizWrapper = document.getElementById('test-section');
    let progressTemplate = `
        <p class="test-progress">1/3</p>
    `;
    quizWrapper.insertAdjacentHTML('beforeend', progressTemplate);
}


let handleResultBlock = (resultText) => {
    console.log('start handleResultBlock ');
    console.log(resultText);

    let btnToHide = $('#test-btn');
    btnToHide.css('display', 'none');

    let quizWrapper = $('#quiz-wrapper');
    $('.quiz-answer').off('click', 'label');
    quizWrapper.children().remove();

    let testResultWrapperTemplate = `
        <div id="test-result"></div>
    `;
    quizWrapper.append(testResultWrapperTemplate);

    let testResultWrapper = $('#test-result');
    let testResultTitleTemplate = `<p class="test-result-title">${startTestText.testResultTitle}</p>`;
    testResultWrapper.append(testResultTitleTemplate);

    resultText.forEach(text => {
        let paragraph = $('<p class="test-result-p">').html(text);
        testResultWrapper.append(paragraph);
    });

    $('#test-section').css('width', '100%');
    $('#test-cta').css('display', 'block');
}