import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";

const config = {
  botName: "CV Boot",
  initialMessages: [
    createChatBotMessage(`Bonjour. Je m’appelle Touati Hamza, Que voulez-vous savoir sur moi?`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "javascriptQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "License Appliqué En Informatique",
            answer:
              "ISET Kebili 2013-2016",
            id: 1,
          },
          {
            question: "Cycle D'ingénieur",
            answer:
              "université arabe des sciences 2016-2019",
            id: 2,
          },
        ],
      },
    },


    {
      widgetName: "experienceQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Développeur Web FullStack  ",
            answer:
              "TekLend 02/2020 - 02/2021 ",
            id: 1,
          },
          {
            question: "Développeur Mobile ",
            answer:
              "SIMAC 02/2016 - 06/2016.",
            id: 2,
          },
        ],
      },
    },


    {
      widgetName: "SkillsQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Back-End  ",
            answer:
              "Java/JEE , C# , PHP , AJAX,NodeJs  ",
            id: 1,
          },
          {
            question: "Front-End ",
            answer:
              "HTML5 , CSS3 , ReactJS,BootStrap",
            id: 2,
          },
          {
            question: "Autre ",
            answer:
              "Prestashop , Wordpress/Woocommerce , Shopify ,SQL,API , GIT ,Visual Studio Code ,",
            id: 2,
          },


          
        ],
      },
    },


    {
      widgetName: "contactQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "ُEmail ",
            answer:
              "hamzatouati2012@gmail.com ",
            id: 1,
          },
          {
            question: "Télephone",
            answer:
              " +216 93094456  ",
            id: 2,
          },
          


          
        ],
      },
    },




  ],
};

export default config;
