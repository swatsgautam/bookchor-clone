const categories = [
  {
    category: "India's Top Read",
    books: [
      {
        id: '1',
        src: require('../assets/images/the_hidden_hindu.png'),
        title: "The Hidden Hindu",
        price: "₹ 479",
        originalPrice: "₹ 599",
        discount: "20% OFF",
        isUsed: true
      },
      {
        id: '2',
        src: require('../assets/images/rich_dad_poor_dad.jpg'),
        title: "Rich Dad Poor Dad",
        price: "₹ 499",
        originalPrice: "₹ 699",
        discount: "30% OFF",
        isUsed: false
      },
      {
        id: '3',
        src: require('../assets/images/ikigai.jpg'),
        title: "Ikigai",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: true
      },
      {
        id: '4',
        src: require('../assets/images/dont_believe_everything_you_think.jpg'),
        title: "Don't Believe Everything You Think",
        price: "₹ 399",
        originalPrice: "₹ 499",
        discount: "20% OFF",
        isUsed: false
      },
      {
        id: '5',
        src: require('../assets/images/atomic_habits.jpg'),
        title: "Atomic Habits",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: true
      },
      {
        id: '6',
        src: require('../assets/images/thinking_fast_and_slow.jpg'),
        title: "Thinking Fast and Slow",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false
      },
      {
        id: '7',
        src: require('../assets/images/zero_to_one.jpg'),
        title: "Zero to One",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: true
      },
      {
        id: '8',
        src: require('../assets/images/the_courage_to_be_disliked.jpg'),
        title: "The Courage To Be Disliked",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false
      },
      {
        id: '9',
        src: require('../assets/images/silent_patient.jpg'),
        title: "The Silent Patient",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: true
      },
      {
        id: '10',
        src: require('../assets/images/own_your_body.jpg'),
        title: "Own your Body",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false
      }
    ]
  },
  {
    category: "Book Sets",
    books: [
      {
        id: '11',
        src: require('../assets/images/gopi_diaries_boxset.jpg'),
        title: "GOPI DIARIES BOXSET",
        price: "₹ 479",
        originalPrice: "₹ 599",
        discount: "20% OFF",
        isUsed: true
      },
      {
        id: '12',
        src: require('../assets/images/lost_symbol_girl_on_the_train.jpg'),
        title: "The Lost Symbol/The Girl On The Train-Hardcover",
        price: "₹ 499",
        originalPrice: "₹ 699",
        discount: "30% OFF",
        isUsed: true
      },
      {
        id: '13',
        src: require('../assets/images/lil_legends_writing_practice.jpg'),
        title: "Lil Legends Writing Practice Boxset (Set Of 2 Books) Number Tracing & Activity Book Uppercase Tracing & Vocabulary Book For Kids, Level-1 | 2 To 5 Year Old",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: true
      },
      {
        id: '14',
        src: require('../assets/images/ncert_cbse.jpg'),
        title: "NCERT & CBSE One For All Workbook For Class 8 | Mathematics | Science | Social Science | English | Updated As Per NCF | MCQ's | VSA | SA | LA | Set Of 4 Books | For Latest Exam",
        price: "₹ 399",
        originalPrice: "₹ 499",
        discount: "20% OFF",
        isUsed: false
      },
      {
        id: '15',
        src: require('../assets/images/atomic_habits.jpg'),
        title: "Atomic Habits",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false
      },
      {
        id: '16',
        src: require('../assets/images/thinking_fast_and_slow.jpg'),
        title: "Thinking Fast and Slow",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false
      },
      {
        id: '17',
        src: require('../assets/images/zero_to_one.jpg'),
        title: "Zero to One",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false
      },
      {
        id: '18',
        src: require('../assets/images/the_courage_to_be_disliked.jpg'),
        title: "The Courage To Be Disliked",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false
      },
      {
        id: '19',
        src: require('../assets/images/silent_patient.jpg'),
        title: "The Silent Patient",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false
      },
      {
        id: '20',
        src: require('../assets/images/own_your_body.jpg'),
        title: "Own your Body",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false
      }
    ]
  },
  {
    category: "Fiction",
    books: [
      {
        id: '21',
        src: require('../assets/images/the_hidden_hindu.png'),
        title: "The Hidden Hindu",
        price: "₹ 479",
        originalPrice: "₹ 599",
        discount: "20% OFF",
        isUsed: false
      },
      {
        id: '22',
        src: require('../assets/images/rich_dad_poor_dad.jpg'),
        title: "Rich Dad Poor Dad",
        price: "₹ 499",
        originalPrice: "₹ 699",
        discount: "30% OFF",
        isUsed: false
      },
      {
        id: '23',
        src: require('../assets/images/ikigai.jpg'),
        title: "Ikigai",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false
      },
      {
        id: '24',
        src: require('../assets/images/dont_believe_everything_you_think.jpg'),
        title: "Don't Believe Everything You Think",
        price: "₹ 399",
        originalPrice: "₹ 499",
        discount: "20% OFF",
        isUsed: false
      },
      {
        id: '25',
        src: require('../assets/images/atomic_habits.jpg'),
        title: "Atomic Habits",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false
      },
      {
        id: '26',
        src: require('../assets/images/thinking_fast_and_slow.jpg'),
        title: "Thinking Fast and Slow",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false
      },
      {
        id: '27',
        src: require('../assets/images/zero_to_one.jpg'),
        title: "Zero to One",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false
      },
      {
        id: '28',
        src: require('../assets/images/the_courage_to_be_disliked.jpg'),
        title: "The Courage To Be Disliked",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false
      },
      {
        id: '29',
        src: require('../assets/images/silent_patient.jpg'),
        title: "The Silent Patient",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false
      },
      {
        id: '30',
        src: require('../assets/images/own_your_body.jpg'),
        title: "Own your Body",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false
      }
    ]
  },
  {
    category: "Tik-Tok",
    books: [
      {
        id: '31',
        src: require('../assets/images/the_hidden_hindu.png'),
        title: "The Hidden Hindu",
        price: "₹ 479",
        originalPrice: "₹ 599",
        discount: "20% OFF",
        isUsed: false
      },
      {
        id: '32',
        src: require('../assets/images/rich_dad_poor_dad.jpg'),
        title: "Rich Dad Poor Dad",
        price: "₹ 499",
        originalPrice: "₹ 699",
        discount: "30% OFF",
        isUsed: false
      },
      {
        id: '33',
        src: require('../assets/images/ikigai.jpg'),
        title: "Ikigai",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false
      },
      {
        id: '34',
        src: require('../assets/images/dont_believe_everything_you_think.jpg'),
        title: "Don't Believe Everything You Think",
        price: "₹ 399",
        originalPrice: "₹ 499",
        discount: "20% OFF",
        isUsed: false
      },
      {
        id: '35',
        src: require('../assets/images/atomic_habits.jpg'),
        title: "Atomic Habits",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false
      },
      {
        id: '36',
        src: require('../assets/images/thinking_fast_and_slow.jpg'),
        title: "Thinking Fast and Slow",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false
      },
      {
        id: '37',
        src: require('../assets/images/zero_to_one.jpg'),
        title: "Zero to One",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false
      },
      {
        id: '38',
        src: require('../assets/images/the_courage_to_be_disliked.jpg'),
        title: "The Courage To Be Disliked",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false
      },
      {
        id: '39',
        src: require('../assets/images/silent_patient.jpg'),
        title: "The Silent Patient",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false
      },
      {
        id: '40',
        src: require('../assets/images/own_your_body.jpg'),
        title: "Own your Body",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false
      }
    ]
  },
  {
    category: "Thrillers",
    books: [
      {
        id: '41',
        src: require('../assets/images/the_hidden_hindu.png'),
        title: "The Hidden Hindu",
        price: "₹ 479",
        originalPrice: "₹ 599",
        discount: "20% OFF",
        isUsed: false
      },
      {
        id: '42',
        src: require('../assets/images/rich_dad_poor_dad.jpg'),
        title: "Rich Dad Poor Dad",
        price: "₹ 499",
        originalPrice: "₹ 699",
        discount: "30% OFF",
        isUsed: false
      },
      {
        id: '43',
        src: require('../assets/images/ikigai.jpg'),
        title: "Ikigai",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false
      },
      {
        id: '44',
        src: require('../assets/images/dont_believe_everything_you_think.jpg'),
        title: "Don't Believe Everything You Think",
        price: "₹ 399",
        originalPrice: "₹ 499",
        discount: "20% OFF",
        isUsed: false
      },
      {
        id: '45',
        src: require('../assets/images/atomic_habits.jpg'),
        title: "Atomic Habits",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false
      },
      {
        id: '46',
        src: require('../assets/images/thinking_fast_and_slow.jpg'),
        title: "Thinking Fast and Slow",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false
      },
      {
        id: '47',
        src: require('../assets/images/zero_to_one.jpg'),
        title: "Zero to One",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false
      },
      {
        id: '48',
        src: require('../assets/images/the_courage_to_be_disliked.jpg'),
        title: "The Courage To Be Disliked",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false
      },
      {
        id: '49',
        src: require('../assets/images/silent_patient.jpg'),
        title: "The Silent Patient",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false
      },
      {
        id: '50',
        src: require('../assets/images/own_your_body.jpg'),
        title: "Own your Body",
        price: "₹ 450",
        originalPrice: "₹ 550",
        discount: "18% OFF",
        isUsed: false
      }
    ]
  }
];

export default categories;
