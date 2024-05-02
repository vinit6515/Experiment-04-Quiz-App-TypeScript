import { LayoutTypes } from 'types/ILayout';
import { IQuiz } from 'types/IQuiz';

export const dummyData: IQuiz[] = [
    {
        id: 'quiz_a_1',
        name: 'DevOps Quiz (Basic)',
        layout: LayoutTypes.allInOne,
        isPublished: false,
        questions: [
            {
                id: 1,
                title: 'Which service runs on each Kubernetes node and ensures containers are running in a pod?',
                imgUrl: '',
                point: 5,
                choices: [
                    {
                        id: '1',
                        imgUrl: '',
                        title: 'etcd',
                        correct: false,
                    },
                    {
                        id: '2',
                        imgUrl: '',
                        title: 'kubelet',
                        correct: true,
                    },
                    {
                        id: '3',
                        imgUrl: '',
                        title: 'scheduler',
                        correct: false,
                    },
                    {
                        id: '4',
                        imgUrl: '',
                        title: 'kubeadm',
                        correct: false,
                    },
                ],
            },
            {
                id: 2,
                title: 'Which component manages the assigning nodes to pods depending on resource availability?',
                imgUrl: '',
                point: 5,
                choices: [
                    {
                        id: '1',
                        imgUrl: '',
                        title: 'etcd',
                        correct: false,
                    },
                    {
                        id: '2',
                        imgUrl: '',
                        title: 'helm',
                        correct: false,
                    },
                    {
                        id: '3',
                        imgUrl: '',
                        title: 'scheduler',
                        correct: true,
                    },
                    {
                        id: '4',
                        imgUrl: '',
                        title: 'kubectl',
                        correct: false,
                    },
                ],
            },
        ],
    },
    {
        id: 'quiz_a_2',
        name: 'Common HTML Interview Questions',
        layout: LayoutTypes.singlePage,
        isPublished: true,
        questions: [
            {
                id: 1,
                title: 'What type of a language is HTML?',
                imgUrl: '',
                point: 5,
                choices: [
                    {
                        id: '1',
                        imgUrl: '',
                        title: 'Network Protocol',
                        correct: false,
                    },
                    {
                        id: '2',
                        imgUrl: '',
                        title: 'Markup Language',
                        correct: true,
                    },
                    {
                        id: '3',
                        imgUrl: '',
                        title: 'Programming Language',
                        correct: false,
                    },
                    {
                        id: '4',
                        imgUrl: '',
                        title: 'Scripting Language',
                        correct: false,
                    },
                ],
            },
            {
                id: 2,
                title: 'HTML are web pages read and rendered by -',
                imgUrl: '',
                point: 20,
                choices: [
                    {
                        id: '1',
                        imgUrl: '',
                        title: 'Compiler',
                        correct: false,
                    },
                    {
                        id: '2',
                        imgUrl: '',
                        title: 'Interpreter',
                        correct: false,
                    },
                    {
                        id: '3',
                        imgUrl: '',
                        title: 'Web Browser',
                        correct: true,
                    },
                    {
                        id: '4',
                        imgUrl: '',
                        title: 'Server',
                        correct: false,
                    },
                ],
            },
            {
                id: 3,
                title: 'What is the correct HTML tag for inserting a line break?',
                imgUrl: '',
                point: 5,
                choices: [
                    {
                        id: '1',
                        imgUrl: '',
                        title: '<break />',
                        correct: false,
                    },
                    {
                        id: '2',
                        imgUrl: '',
                        title: '<nbsp>',
                        correct: false,
                    },
                    {
                        id: '3',
                        imgUrl: '',
                        title: '<br />',
                        correct: true,
                    },
                    {
                        id: '4',
                        imgUrl: '',
                        title: '<lb />',
                        correct: false,
                    },
                    {
                        id: '5',
                        imgUrl: '',
                        title: '<br />',
                        correct: true,
                    },
                ],
            },
        ],
    },
];
