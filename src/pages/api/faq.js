export default function handler(req, res) {
    const FAQ = [
        {
            id: 1,
            question: 'Can my server get banned from doing this?',
            answer: 'No, our services are 100% legal and do not break any of Discord TOS, making it 100% safe',
        },
        {
            id: 2,
            question: 'How are you prices so cheap?',
            answer: 'Our prices are so cheap as we use private & unique methods to get cheaper products, everything is following the law, so that we do not commit any illegal action.',
        },
        {
            id: 3,
            question: 'How do I contact you?',
            answer: 'You can contact us via Discord or Telegram.',
        },
        {
            id: 4,
            question: 'How much time does it takes to get my server boosted?',
            answer: 'It takes under 30 seconds for boosts to be delievered, after order has been confirmed',
        },
        {
            id: 5,
            question: 'My order went wrong! Where can I contact a support team to solve my issue?',
            answer: 'You can contact us via Discord or Telegram.',
        },
        {
            id: 6,
            question: 'I am having a issue purchasing on the website?',
            answer: 'Please make a ticket via Discord or Telegram and you can purchase our products there.',
        },
        {
            id: 7,
            question: 'How do I get my product after paying?',
            answer: 'Our products will be automatically delievered to the email address you put in while purchasing.',
        },
        {
            id: 8,
            question: 'What if my product does not work properly?',
            answer: 'We offer full warranty and replacement if your product is not functioning corrcetly and you provide proof.',
        },
    ]
    res.status(200).json({ FAQ })
}